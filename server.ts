import express, { Request, Response } from 'express';
import cors from 'cors';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import rateLimit from 'express-rate-limit';

// Load environment variables
dotenv.config();

const app = express();
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
const PORT = process.env.PORT || 5000;
const APP_URL = process.env.APP_URL || 'http://localhost:3000';

// ESM __dirname equivalent (needed for static file serving)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure middleware
// Capture the raw body buffer for Cashfree webhook signature verification
app.use(
  express.json({
    limit: '10mb',
    verify: (req: any, _res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*' })); // Allow all origins for dev/sandbox; restrict in production

// Health check endpoint for Docker HEALTHCHECK and CI/CD canary testing
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Rate limiting to protect payment APIs
const paymentLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: { error: 'Too many requests from this IP, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

const couponLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 50, // Limit coupon checks to 50 per 5 mins
  message: { error: 'Too many coupon attempts. Please try again later.' },
});

// Helper for logging
const log = (message: string, ...args: any[]) => {
  console.log(`[${new Date().toISOString()}] ${message}`, ...args);
};

// Cashfree PG API helper class
class CashfreeService {
  private static getHeaders() {
    return {
      'x-client-id': process.env.CF_CLIENT_ID || '',
      'x-client-secret': process.env.CF_CLIENT_SECRET || '',
      'x-api-version': '2023-08-01',
      'Content-Type': 'application/json',
    };
  }

  private static getBaseUrl(): string {
    const env = process.env.CF_ENVIRONMENT || 'sandbox';
    return env.toLowerCase() === 'production'
      ? 'https://api.cashfree.com/pg'
      : 'https://sandbox.cashfree.com/pg';
  }

  /**
   * Creates a Cashfree Order
   */
  static async createOrder(orderData: {
    orderId: string;
    amount: number;
    customer: { id: string; name: string; email: string; phone: string };
    returnUrl: string;
    notifyUrl: string;
  }) {
    const url = `${this.getBaseUrl()}/orders`;
    const payload = {
      order_id: orderData.orderId,
      order_amount: parseFloat(orderData.amount.toFixed(2)),
      order_currency: 'INR',
      customer_details: {
        customer_id: orderData.customer.id,
        customer_name: orderData.customer.name,
        customer_email: orderData.customer.email,
        customer_phone: orderData.customer.phone,
      },
      order_meta: {
        return_url: orderData.returnUrl,
        notify_url: orderData.notifyUrl,
      },
    };

    log(`Creating Cashfree Order: ${orderData.orderId} of Amount: ₹${payload.order_amount}`);

    const response = await fetch(url, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    if (!response.ok) {
      log(`Cashfree Order Creation Failed for ${orderData.orderId}:`, data);
      throw new Error(data.message || 'Failed to create order on Cashfree');
    }

    return data;
  }

  /**
   * Retrieves an Order from Cashfree to verify status
   */
  static async getOrder(cfOrderId: string) {
    const url = `${this.getBaseUrl()}/orders/${cfOrderId}`;
    log(`Fetching Cashfree Order: ${cfOrderId}`);

    const response = await fetch(url, {
      method: 'GET',
      headers: this.getHeaders(),
    });

    const data = await response.json();
    if (!response.ok) {
      log(`Failed to fetch Cashfree Order ${cfOrderId}:`, data);
      throw new Error(data.message || 'Failed to retrieve order from Cashfree');
    }

    return data;
  }

  /**
   * Verifies Webhook Signature
   */
  static verifyWebhookSignature(
    signature: string,
    timestamp: string,
    rawBody: string
  ): boolean {
    const secretKey = process.env.CF_CLIENT_SECRET || '';
    const signatureData = timestamp + rawBody;
    
    const expectedSignature = crypto
      .createHmac('sha256', secretKey)
      .update(signatureData)
      .digest('base64');

    return signature === expectedSignature;
  }
}

// ==========================================
// ROUTES & CONTROLLERS
// ==========================================

/**
 * 1. POST /api/payment/apply-coupon
 * Validates a coupon and returns the discount details
 */
app.post('/api/payment/apply-coupon', couponLimiter, async (req: Request, res: Response): Promise<any> => {
  try {
    const { couponCode, courseId } = req.body;

    if (!couponCode || !courseId) {
      return res.status(400).json({ error: 'Coupon code and Course ID are required.' });
    }

    // Fetch course
    const course = await prisma.course.findUnique({ where: { id: courseId } });
    if (!course) {
      return res.status(404).json({ error: 'Course not found.' });
    }

    // Fetch coupon (case insensitive match)
    const coupon = await prisma.coupon.findUnique({
      where: { code: couponCode.toUpperCase() },
    });

    if (!coupon || !coupon.isActive) {
      return res.status(400).json({ error: 'Invalid or inactive coupon code.' });
    }

    // Check expiry
    if (new Date() > new Date(coupon.expiryDate)) {
      return res.status(400).json({ error: 'This coupon code has expired.' });
    }

    // Check usage limits
    if (coupon.usedCount >= coupon.maxUses) {
      return res.status(400).json({ error: 'This coupon has reached its maximum usage limit.' });
    }

    // Calculate discount
    let discountAmount = 0;
    const basePrice = course.discountPrice;

    if (coupon.discountType === 'PERCENTAGE') {
      discountAmount = (basePrice * coupon.discountValue) / 100;
    } else if (coupon.discountType === 'FIXED') {
      discountAmount = coupon.discountValue;
    }

    // Cap discount to course price
    discountAmount = Math.min(discountAmount, basePrice);
    const finalAmount = Math.max(0, basePrice - discountAmount);

    return res.json({
      success: true,
      couponCode: coupon.code,
      discountType: coupon.discountType,
      discountValue: coupon.discountValue,
      discountAmount: parseFloat(discountAmount.toFixed(2)),
      originalAmount: basePrice,
      finalAmount: parseFloat(finalAmount.toFixed(2)),
    });
  } catch (error: any) {
    log('Error applying coupon:', error);
    return res.status(500).json({ error: 'Internal server error while applying coupon.' });
  }
});

/**
 * 2. POST /api/payment/create-order
 * Creates a local order, calls Cashfree to create order session, returns payment session ID
 */
app.post('/api/payment/create-order', paymentLimiter, async (req: Request, res: Response): Promise<any> => {
  try {
    const { courseId, fullName, email, phone, couponCode } = req.body;

    // 1. Validations
    if (!courseId || !fullName || !email || !phone) {
      return res.status(400).json({ error: 'All fields (courseId, fullName, email, phone) are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address format.' });
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      return res.status(400).json({ error: 'Phone number must be at least 10 digits.' });
    }

    // 2. Check if course exists
    const course = await prisma.course.findUnique({ where: { id: courseId } });
    if (!course || !course.isActive) {
      return res.status(404).json({ error: 'Course not found or is currently inactive.' });
    }

    // 3. Find or Create User
    let user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      // Update user details if changed
      user = await prisma.user.update({
        where: { email },
        data: { fullName, phone: cleanPhone },
      });
    } else {
      user = await prisma.user.create({
        data: { fullName, email, phone: cleanPhone },
      });
    }

    // 4. Duplicate Purchase Check
    // Prevent purchase if user already owns the course (status = PAID)
    const existingPaidOrder = await prisma.order.findFirst({
      where: {
        userId: user.id,
        courseId: course.id,
        paymentStatus: 'PAID',
      },
    });
    if (existingPaidOrder) {
      return res.status(400).json({
        error: 'Duplicate Purchase: You have already purchased this program and have active access. Please check your dashboard.',
      });
    }

    // 5. Calculate Pricing & Coupons
    let originalPrice = course.discountPrice;
    let discount = 0;
    let appliedCoupon = null;

    if (couponCode) {
      const coupon = await prisma.coupon.findUnique({
        where: { code: couponCode.toUpperCase() },
      });

      if (coupon && coupon.isActive && new Date() < new Date(coupon.expiryDate) && coupon.usedCount < coupon.maxUses) {
        appliedCoupon = coupon;
        if (coupon.discountType === 'PERCENTAGE') {
          discount = (originalPrice * coupon.discountValue) / 100;
        } else if (coupon.discountType === 'FIXED') {
          discount = coupon.discountValue;
        }
        discount = Math.min(discount, originalPrice);
      }
    }

    const finalAmount = Math.max(0, originalPrice - discount);

    // 6. GST Breakdown (18% inclusive)
    // baseAmount = finalAmount / 1.18
    // gstAmount = finalAmount - baseAmount
    const finalAmountFixed = parseFloat(finalAmount.toFixed(2));

    // 7. Create unique local order ID
    // Format: ORD_162394029482_ABCD
    const randStr = Math.random().toString(36).substring(2, 6).toUpperCase();
    const orderId = `ORD_${Date.now()}_${randStr}`;

    // 8. Create Local Order record (PENDING)
    const localOrder = await prisma.order.create({
      data: {
        orderId,
        userId: user.id,
        courseId: course.id,
        amount: finalAmountFixed,
        currency: 'INR',
        paymentStatus: 'PENDING',
        orderStatus: 'CREATED',
        paymentGateway: 'CASHFREE',
      },
    });

    // 9. If final amount is 0 (100% discount via coupon), skip Cashfree and mark as PAID immediately!
    if (finalAmountFixed === 0) {
      log(`Free Course Enrolled (100% Discount): ${orderId}`);
      const updatedOrder = await prisma.order.update({
        where: { id: localOrder.id },
        data: { paymentStatus: 'PAID', orderStatus: 'COMPLETED' },
      });

      // Create dummy payment record for tracking
      await prisma.payment.create({
        data: {
          orderId: localOrder.id,
          transactionId: `TXN_FREE_${Date.now()}`,
          paymentMethod: 'COUPON',
          paymentStatus: 'SUCCESS',
          gatewayResponse: { info: '100% Discount Coupon applied' },
        },
      });

      // Increment coupon usage
      if (appliedCoupon) {
        await prisma.coupon.update({
          where: { id: appliedCoupon.id },
          data: { usedCount: { increment: 1 } },
        });
      }

      return res.json({
        orderId,
        paymentSessionId: null, // No session needed for free order
        amount: 0,
        currency: 'INR',
        isFree: true,
        course: { title: course.title },
      });
    }

    // 10. Call Cashfree PG to create order session
    try {
      const returnUrl = `${APP_URL}/#/payment/status?order_id=${orderId}`;
      const notifyUrl = `${APP_URL}/api/payment/webhook`;

      const cfOrder = await CashfreeService.createOrder({
        orderId,
        amount: finalAmountFixed,
        customer: {
          id: user.id,
          name: fullName,
          email,
          phone: cleanPhone,
        },
        returnUrl,
        notifyUrl,
      });

      // Update local order with Cashfree references
      await prisma.order.update({
        where: { id: localOrder.id },
        data: {
          cashfreeOrderId: cfOrder.cf_order_id.toString(),
          paymentSessionId: cfOrder.payment_session_id,
        },
      });

      return res.json({
        orderId,
        paymentSessionId: cfOrder.payment_session_id,
        amount: finalAmountFixed,
        currency: 'INR',
        isFree: false,
        course: { title: course.title },
      });
    } catch (cfError: any) {
      log(`Cashfree API Integration Error for order ${orderId}:`, cfError);
      
      // Update local order to FAILED due to gateway error
      await prisma.order.update({
        where: { id: localOrder.id },
        data: { orderStatus: 'FAILED', paymentStatus: 'FAILED' },
      });

      return res.status(502).json({
        error: 'Payment Gateway Error: Unable to initiate transaction with Cashfree. Please try again.',
      });
    }
  } catch (error: any) {
    log('Error creating order:', error);
    return res.status(500).json({ error: 'Internal server error while creating order.' });
  }
});

/**
 * Helper to process successful order payment (idempotent)
 */
async function processSuccessfulPayment(order: any, transactionId: string, paymentMethod: string, rawResponse: any) {
  if (order.paymentStatus === 'PAID') {
    return order;
  }

  // Use a database transaction to ensure atomicity
  return await prisma.$transaction(async (tx) => {
    // Double check status inside transaction
    const freshOrder = await tx.order.findUnique({ where: { id: order.id } });
    if (!freshOrder || freshOrder.paymentStatus === 'PAID') {
      return freshOrder;
    }

    // 1. Update Order Status to PAID and COMPLETED
    const updatedOrder = await tx.order.update({
      where: { id: order.id },
      data: {
        paymentStatus: 'PAID',
        orderStatus: 'COMPLETED',
      },
    });

    // 2. Create Payment Record
    await tx.payment.create({
      data: {
        orderId: order.id,
        transactionId,
        paymentSessionId: order.paymentSessionId,
        paymentMethod: paymentMethod || 'UNKNOWN',
        paymentStatus: 'SUCCESS',
        gatewayResponse: rawResponse,
      },
    });

    log(`Order ${order.orderId} marked as PAID. Transaction: ${transactionId}`);

    return updatedOrder;
  });
}

/**
 * 3. POST /api/payment/verify
 * Verifies payment status directly from Cashfree (Safe, never trust frontend)
 */
app.post('/api/payment/verify', paymentLimiter, async (req: Request, res: Response): Promise<any> => {
  try {
    const { orderId } = req.body;

    if (!orderId) {
      return res.status(400).json({ error: 'Order ID is required.' });
    }

    // Fetch order from local DB
    const order = await prisma.order.findUnique({
      where: { orderId },
      include: { course: true, user: true },
    });

    if (!order) {
      return res.status(404).json({ error: 'Order not found.' });
    }

    // If already marked PAID locally, return immediately
    if (order.paymentStatus === 'PAID') {
      return res.json({ status: 'PAID', message: 'Payment verified.', order });
    }

    // Fetch latest status from Cashfree
    try {
      const cfOrder = await CashfreeService.getOrder(orderId);
      const cfStatus = cfOrder.order_status; // PAID, ACTIVE, FAILED, EXPIRED

      log(`Verifying Cashfree Order ${orderId}: Status = ${cfStatus}`);

      if (cfStatus === 'PAID') {
        // Find payment details from Cashfree response
        // Note: Cashfree orders endpoint contains nested payments or we can parse payment details
        const paymentMethod = cfOrder.payment_session_id ? 'CASHFREE' : 'UNKNOWN';
        const transactionId = cfOrder.cf_order_id ? `CF_${cfOrder.cf_order_id}` : `TXN_${Date.now()}`;
        
        const updatedOrder = await processSuccessfulPayment(order, transactionId, paymentMethod, cfOrder);
        return res.json({
          status: 'PAID',
          message: 'Payment successfully verified.',
          order: { ...order, paymentStatus: 'PAID', orderStatus: 'COMPLETED' },
        });
      } else if (cfStatus === 'FAILED' || cfStatus === 'EXPIRED') {
        await prisma.order.update({
          where: { id: order.id },
          data: { paymentStatus: 'FAILED', orderStatus: 'FAILED' },
        });
        return res.json({
          status: 'FAILED',
          message: `Payment failed on gateway. Cashfree status: ${cfStatus}`,
          order: { ...order, paymentStatus: 'FAILED', orderStatus: 'FAILED' },
        });
      } else {
        return res.json({
          status: 'PENDING',
          message: 'Payment is still pending on gateway.',
          order,
        });
      }
    } catch (cfError: any) {
      log(`Error calling Cashfree for verification of order ${orderId}:`, cfError);
      return res.status(502).json({
        error: 'Gateway Sync Failed: Unable to verify payment status with Cashfree at this time.',
        order,
      });
    }
  } catch (error: any) {
    log('Error verifying payment:', error);
    return res.status(500).json({ error: 'Internal server error while verifying payment.' });
  }
});

/**
 * 4. GET /api/payment/status/:orderId
 * Fetches order status, proactively syncs with Cashfree if locally pending
 */
app.get('/api/payment/status/:orderId', async (req: Request, res: Response): Promise<any> => {
  try {
    const { orderId } = req.params;

    const order = await prisma.order.findUnique({
      where: { orderId },
      include: { course: true },
    });

    if (!order) {
      return res.status(404).json({ error: 'Order not found.' });
    }

    // If locally PENDING, proactively check Cashfree to avoid webhook latency
    if (order.paymentStatus === 'PENDING') {
      try {
        const cfOrder = await CashfreeService.getOrder(orderId);
        if (cfOrder.order_status === 'PAID') {
          const transactionId = `CF_${cfOrder.cf_order_id}`;
          await processSuccessfulPayment(order, transactionId, 'CASHFREE', cfOrder);
          return res.json({
            status: 'PAID',
            amount: order.amount,
            courseName: order.course.title,
          });
        } else if (cfOrder.order_status === 'FAILED' || cfOrder.order_status === 'EXPIRED') {
          await prisma.order.update({
            where: { id: order.id },
            data: { paymentStatus: 'FAILED', orderStatus: 'FAILED' },
          });
          return res.json({
            status: 'FAILED',
            amount: order.amount,
            courseName: order.course.title,
            reason: 'Payment failed or expired on gateway',
          });
        }
      } catch (e) {
        log(`Proactive status check failed for order ${orderId}, returning local PENDING`);
      }
    }

    return res.json({
      status: order.paymentStatus,
      amount: order.amount,
      courseName: order.course.title,
    });
  } catch (error) {
    log('Error fetching order status:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
});

/**
 * 5. POST /api/payment/webhook
 * Receives asynchronous notifications from Cashfree
 */
app.post('/api/payment/webhook', async (req: any, res: Response): Promise<any> => {
  try {
    const signature = req.headers['x-webhook-signature'] as string;
    const timestamp = req.headers['x-webhook-timestamp'] as string;
    const rawBody = req.rawBody || '';

    if (!signature || !timestamp) {
      log('Webhook Missing Signature or Timestamp headers');
      return res.status(400).send('Missing signature/timestamp');
    }

    // Verify webhook signature
    const isValid = CashfreeService.verifyWebhookSignature(signature, timestamp, rawBody);
    if (!isValid) {
      log('Webhook Signature Verification FAILED!');
      return res.status(401).send('Invalid Signature');
    }

    const payload = JSON.parse(rawBody);
    const eventType = payload.type; // e.g. PAYMENT_SUCCESS, PAYMENT_FAILED
    const data = payload.data;

    if (!data || !data.order || !data.payment) {
      log('Webhook Payload structure invalid:', payload);
      return res.status(400).send('Invalid payload structure');
    }

    const orderId = data.order.order_id;
    const transactionId = data.payment.cf_payment_id.toString();
    const paymentStatus = data.payment.payment_status; // SUCCESS, FAILED
    const paymentMethod = data.payment.payment_method
      ? Object.keys(data.payment.payment_method)[0] || 'CASHFREE'
      : 'CASHFREE';

    log(`Webhook Received: Event=${eventType}, Order=${orderId}, Txn=${transactionId}, Status=${paymentStatus}`);

    // Fetch corresponding local order
    const order = await prisma.order.findUnique({
      where: { orderId },
    });

    if (!order) {
      log(`Webhook Order ${orderId} not found in database!`);
      return res.status(404).send('Order not found');
    }

    if (paymentStatus === 'SUCCESS') {
      await processSuccessfulPayment(order, transactionId, paymentMethod, payload);
      return res.status(200).send('OK');
    } else if (paymentStatus === 'FAILED') {
      if (order.paymentStatus === 'PENDING') {
        await prisma.order.update({
          where: { id: order.id },
          data: {
            paymentStatus: 'FAILED',
            orderStatus: 'FAILED',
          },
        });
        log(`Order ${orderId} marked as FAILED via Webhook.`);
      }
      return res.status(200).send('OK');
    }

    return res.status(200).send('OK');
  } catch (error) {
    log('Error processing webhook:', error);
    return res.status(500).send('Internal Server Error');
  }
});

/**
 * 6. POST /api/payment/retry
 * Recreates/retrieves a payment session for an existing failed/pending order
 */
app.post('/api/payment/retry', paymentLimiter, async (req: Request, res: Response): Promise<any> => {
  try {
    const { orderId } = req.body;

    if (!orderId) {
      return res.status(400).json({ error: 'Order ID is required.' });
    }

    const order = await prisma.order.findUnique({
      where: { orderId },
      include: { course: true, user: true },
    });

    if (!order) {
      return res.status(404).json({ error: 'Order not found.' });
    }

    if (order.paymentStatus === 'PAID') {
      return res.status(400).json({ error: 'This order has already been paid.' });
    }

    // If order has a session already, we can return it. If it's expired, we create a new order ID and link it
    // Cashfree orders expire in 30 minutes by default. A clean and 100% reliable retry mechanism is to
    // generate a new Cashfree session for the same amount. Since we can't always reuse the old Cashfree order ID,
    // we can create a new Cashfree order on their end but link it to the same local purchase,
    // or simply update the local Order's OrderId to a fresh one and create a new session!
    // Let's create a fresh orderId to prevent Cashfree "order already exists" errors:
    const randStr = Math.random().toString(36).substring(2, 6).toUpperCase();
    const newOrderId = `ORD_${Date.now()}_${randStr}`;

    const returnUrl = `${APP_URL}/#/payment/status?order_id=${newOrderId}`;
    const notifyUrl = `${APP_URL}/api/payment/webhook`;

    const cfOrder = await CashfreeService.createOrder({
      orderId: newOrderId,
      amount: order.amount,
      customer: {
        id: order.userId,
        name: order.user.fullName,
        email: order.user.email,
        phone: order.user.phone,
      },
      returnUrl,
      notifyUrl,
    });

    // Update the local order with the new orderId, session, and Cashfree ID!
    // This maintains transaction integrity while ensuring the customer can immediately retry paying.
    await prisma.order.update({
      where: { id: order.id },
      data: {
        orderId: newOrderId,
        cashfreeOrderId: cfOrder.cf_order_id.toString(),
        paymentSessionId: cfOrder.payment_session_id,
        paymentStatus: 'PENDING',
        orderStatus: 'CREATED',
      },
    });

    return res.json({
      orderId: newOrderId,
      paymentSessionId: cfOrder.payment_session_id,
      amount: order.amount,
      currency: 'INR',
      course: { title: order.course.title },
    });
  } catch (error: any) {
    log(`Error retrying order payment:`, error);
    return res.status(500).json({ error: 'Internal server error while retrying payment.' });
  }
});

/**
 * 7. GET /api/orders
 * Admin-ready endpoint: retrieve and filter transactions
 */
app.get('/api/orders', async (req: Request, res: Response): Promise<any> => {
  try {
    const { status, courseId, search, page = '1', limit = '20' } = req.query;
    const p = parseInt(page as string) || 1;
    const l = parseInt(limit as string) || 20;

    const whereClause: any = {};

    if (status) {
      whereClause.paymentStatus = status as string;
    }
    if (courseId) {
      whereClause.courseId = courseId as string;
    }
    if (search) {
      whereClause.OR = [
        { orderId: { contains: search as string, mode: 'insensitive' } },
        { user: { fullName: { contains: search as string, mode: 'insensitive' } } },
        { user: { email: { contains: search as string, mode: 'insensitive' } } },
      ];
    }

    const total = await prisma.order.count({ where: whereClause });
    const orders = await prisma.order.findMany({
      where: whereClause,
      include: {
        user: { select: { fullName: true, email: true, phone: true } },
        course: { select: { title: true, price: true } },
        payments: { select: { transactionId: true, paymentMethod: true, paidAt: true } },
      },
      orderBy: { createdAt: 'desc' },
      skip: (p - 1) * l,
      take: l,
    });

    return res.json({
      orders,
      pagination: {
        total,
        page: p,
        limit: l,
        pages: Math.ceil(total / l),
      },
    });
  } catch (error) {
    log('Error fetching orders list for admin:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
});

/**
 * 8. GET /api/orders/:id
 * Fetches detailed order receipt (with GST breakdown)
 */
app.get('/api/orders/:id', async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;

    // Support fetching by either UUID id or string orderId
    const order = await prisma.order.findFirst({
      where: {
        OR: [{ id }, { orderId: id }],
      },
      include: {
        user: { select: { fullName: true, email: true, phone: true } },
        course: { select: { title: true, price: true, discountPrice: true } },
        payments: {
          select: {
            transactionId: true,
            paymentMethod: true,
            paymentStatus: true,
            paidAt: true,
          },
        },
      },
    });

    if (!order) {
      return res.status(404).json({ error: 'Order not found.' });
    }

    // Calculate invoice values (Inclusive 18% GST)
    const finalPaidAmount = order.amount;
    const taxableValue = parseFloat((finalPaidAmount / 1.18).toFixed(2));
    const gstAmount = parseFloat((finalPaidAmount - taxableValue).toFixed(2));

    const invoice = {
      orderId: order.orderId,
      fullName: order.user.fullName,
      email: order.user.email,
      phone: order.user.phone,
      courseTitle: order.course.title,
      originalPrice: order.course.discountPrice,
      discount: parseFloat((order.course.discountPrice - order.amount).toFixed(2)),
      taxableValue,
      gstRate: '18%',
      gstAmount,
      totalAmount: finalPaidAmount,
      status: order.paymentStatus,
      paidAt: order.payments[0]?.paidAt || order.updatedAt,
      transactionId: order.payments[0]?.transactionId || 'N/A',
      paymentMethod: order.payments[0]?.paymentMethod || 'N/A',
    };

    return res.json({ order, invoice });
  } catch (error) {
    log('Error fetching order details:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
});


// ==========================================
// 9. NEW ENQUIRIES, BLOGS, SETTINGS & ADMIN APIs
// ==========================================

const adminAuth = (req: any, res: any, next: any) => {
  const token = req.headers['x-admin-token'];
  if (token === 'admin123') {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized admin access.' });
  }
};

// ─── Enquiries API ───
app.post('/api/enquiries', async (req: Request, res: Response): Promise<any> => {
  try {
    const { fullName, email, phone, city, interestedCourse, learningMode, message } = req.body;
    if (!fullName || !phone) {
      return res.status(400).json({ error: 'Name and phone number are required.' });
    }
    const enquiry = await prisma.enquiry.create({
      data: {
        fullName,
        phone,
        email: email || 'not-provided@ashwinitradingacademy.com',
        city: city || 'Not Specified',
        interestedCourse: interestedCourse || 'General Enquiry / Free Consultation',
        learningMode: learningMode || 'Online',
        message: message || ''
      },
    });
    return res.json({ success: true, enquiry });
  } catch (error) {
    log('Error creating enquiry:', error);
    return res.status(500).json({ error: 'Failed to submit enquiry.' });
  }
});

app.get('/api/admin/enquiries', adminAuth, async (req: Request, res: Response): Promise<any> => {
  try {
    const enquiries = await prisma.enquiry.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return res.json({ success: true, enquiries });
  } catch (error) {
    log('Error fetching enquiries:', error);
    return res.status(500).json({ error: 'Failed to fetch enquiries.' });
  }
});

app.delete('/api/admin/enquiries/:id', adminAuth, async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    await prisma.enquiry.delete({ where: { id } });
    return res.json({ success: true, message: 'Enquiry deleted.' });
  } catch (error) {
    log('Error deleting enquiry:', error);
    return res.status(500).json({ error: 'Failed to delete enquiry.' });
  }
});

// ─── Blogs API ───
app.get('/api/blogs', async (req: Request, res: Response): Promise<any> => {
  try {
    const blogs = await prisma.blog.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    });
    return res.json({ success: true, blogs });
  } catch (error) {
    log('Error fetching public blogs:', error);
    return res.status(500).json({ error: 'Failed to fetch blogs.' });
  }
});

app.get('/api/blogs/:slug', async (req: Request, res: Response): Promise<any> => {
  try {
    const { slug } = req.params;
    const blog = await prisma.blog.findUnique({ where: { slug } });
    if (!blog) return res.status(404).json({ error: 'Blog not found.' });
    return res.json({ success: true, blog });
  } catch (error) {
    log('Error fetching blog detail:', error);
    return res.status(500).json({ error: 'Failed to fetch blog.' });
  }
});

app.get('/api/admin/blogs', adminAuth, async (req: Request, res: Response): Promise<any> => {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return res.json({ success: true, blogs });
  } catch (error) {
    log('Error fetching admin blogs:', error);
    return res.status(500).json({ error: 'Failed to fetch blogs.' });
  }
});

app.post('/api/admin/blogs', adminAuth, async (req: Request, res: Response): Promise<any> => {
  try {
    const { title, slug, content, summary, category, thumbnail, published } = req.body;
    if (!title || !slug || !content) {
      return res.status(400).json({ error: 'Title, slug, and content are required.' });
    }
    const blog = await prisma.blog.create({
      data: { title, slug, content, summary: summary || '', category: category || 'General', thumbnail: thumbnail || '', published: published ?? true },
    });
    return res.json({ success: true, blog });
  } catch (error) {
    log('Error creating blog:', error);
    return res.status(500).json({ error: 'Failed to create blog.' });
  }
});

app.put('/api/admin/blogs/:id', adminAuth, async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const { title, slug, content, summary, category, thumbnail, published } = req.body;
    const blog = await prisma.blog.update({
      where: { id },
      data: { title, slug, content, summary, category, thumbnail, published },
    });
    return res.json({ success: true, blog });
  } catch (error) {
    log('Error updating blog:', error);
    return res.status(500).json({ error: 'Failed to update blog.' });
  }
});

app.delete('/api/admin/blogs/:id', adminAuth, async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    await prisma.blog.delete({ where: { id } });
    return res.json({ success: true, message: 'Blog deleted.' });
  } catch (error) {
    log('Error deleting blog:', error);
    return res.status(500).json({ error: 'Failed to delete blog.' });
  }
});

// ─── Testimonials API ───
app.get('/api/testimonials', async (req: Request, res: Response): Promise<any> => {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return res.json({ success: true, testimonials });
  } catch (error) {
    log('Error fetching testimonials:', error);
    return res.status(500).json({ error: 'Failed to fetch testimonials.' });
  }
});

app.post('/api/admin/testimonials', adminAuth, async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, role, content, rating, courseId } = req.body;
    if (!name || !role || !content) {
      return res.status(400).json({ error: 'Name, role, and content are required.' });
    }
    const testimonial = await prisma.testimonial.create({
      data: { name, role, content, rating: rating ?? 5, courseId },
    });
    return res.json({ success: true, testimonial });
  } catch (error) {
    log('Error creating testimonial:', error);
    return res.status(500).json({ error: 'Failed to create testimonial.' });
  }
});

app.delete('/api/admin/testimonials/:id', adminAuth, async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    await prisma.testimonial.delete({ where: { id } });
    return res.json({ success: true, message: 'Testimonial deleted.' });
  } catch (error) {
    log('Error deleting testimonial:', error);
    return res.status(500).json({ error: 'Failed to delete testimonial.' });
  }
});

// ─── FAQs API ───
app.get('/api/faqs', async (req: Request, res: Response): Promise<any> => {
  try {
    const faqs = await prisma.fAQ.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return res.json({ success: true, faqs });
  } catch (error) {
    log('Error fetching faqs:', error);
    return res.status(500).json({ error: 'Failed to fetch faqs.' });
  }
});

app.post('/api/admin/faqs', adminAuth, async (req: Request, res: Response): Promise<any> => {
  try {
    const { question, answer, category } = req.body;
    if (!question || !answer || !category) {
      return res.status(400).json({ error: 'Question, answer, and category are required.' });
    }
    const faq = await prisma.fAQ.create({
      data: { question, answer, category },
    });
    return res.json({ success: true, faq });
  } catch (error) {
    log('Error creating faq:', error);
    return res.status(500).json({ error: 'Failed to create faq.' });
  }
});

app.delete('/api/admin/faqs/:id', adminAuth, async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    await prisma.fAQ.delete({ where: { id } });
    return res.json({ success: true, message: 'FAQ deleted.' });
  } catch (error) {
    log('Error deleting faq:', error);
    return res.status(500).json({ error: 'Failed to delete faq.' });
  }
});

// ─── Settings API ───
app.get('/api/settings/:key', async (req: Request, res: Response): Promise<any> => {
  try {
    const { key } = req.params;
    const setting = await prisma.setting.findUnique({ where: { key } });
    if (!setting) return res.status(404).json({ error: 'Setting not found.' });
    return res.json({ success: true, key: setting.key, value: JSON.parse(setting.value) });
  } catch (error) {
    log('Error fetching setting:', error);
    return res.status(500).json({ error: 'Failed to fetch setting.' });
  }
});

app.post('/api/admin/settings', adminAuth, async (req: Request, res: Response): Promise<any> => {
  try {
    const { key, value } = req.body;
    if (!key || value === undefined) {
      return res.status(400).json({ error: 'Key and value are required.' });
    }
    const setting = await prisma.setting.upsert({
      where: { key },
      update: { value: typeof value === 'string' ? value : JSON.stringify(value) },
      create: { key, value: typeof value === 'string' ? value : JSON.stringify(value) },
    });
    return res.json({ success: true, setting });
  } catch (error) {
    log('Error updating settings:', error);
    return res.status(500).json({ error: 'Failed to update settings.' });
  }
});

// ==========================================
// PRODUCTION STATIC FILE SERVING
// ==========================================
// In production, Express serves the Vite-built frontend.
// In development, the Vite dev server handles this (see vite.config.ts proxy).
app.use(express.static(path.join(__dirname, 'dist')));

// SPA catch-all: non-API routes serve index.html for client-side routing
app.get('*', (req: Request, res: Response) => {
  // Return JSON 404 for unmatched API routes
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API endpoint not found.' });
  }
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  log(`Server running on port ${PORT}`);
  log(`App URL configured as: ${APP_URL}`);
  log(`Cashfree Integration Mode: ${process.env.CF_ENVIRONMENT || 'sandbox'}`);
});
