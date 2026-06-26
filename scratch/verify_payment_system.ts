import crypto from 'crypto';

// ==========================================
// TEST MOCKS & CORE LOGIC FUNCTIONS TO VERIFY
// ==========================================

// Mock Database Records
const mockCourses = [
  { id: 'foundation', title: 'Stock Market Foundation Program', price: 4999.0, discountPrice: 2999.0, isActive: true },
  { id: 'futures-options-trader-pro', title: 'Futures & Options Trader Pro', price: 39999.0, discountPrice: 24999.0, isActive: true },
  { id: 'inactive-course', title: 'Inactive Program', price: 5000.0, discountPrice: 3000.0, isActive: false }
];

const mockCoupons = [
  { code: 'WELCOME10', discountType: 'PERCENTAGE', discountValue: 10.0, maxUses: 1000, usedCount: 0, expiryDate: new Date('2030-12-31'), isActive: true },
  { code: 'EARLYBIRD', discountType: 'FIXED', discountValue: 1500.0, maxUses: 100, usedCount: 0, expiryDate: new Date('2030-12-31'), isActive: true },
  { code: 'EXPIRED10', discountType: 'PERCENTAGE', discountValue: 10.0, maxUses: 1000, usedCount: 0, expiryDate: new Date('2020-01-01'), isActive: true },
  { code: 'MAXEDOUT', discountType: 'PERCENTAGE', discountValue: 10.0, maxUses: 5, usedCount: 5, expiryDate: new Date('2030-12-31'), isActive: true }
];

const mockOrders = [
  { id: '1', orderId: 'ORD_EXISTING_PAID', userId: 'user1', courseId: 'foundation', amount: 2999.0, paymentStatus: 'PAID' },
  { id: '2', orderId: 'ORD_EXISTING_PENDING', userId: 'user1', courseId: 'futures-options-trader-pro', amount: 24999.0, paymentStatus: 'PENDING' }
];

// Core Logic: Apply Coupon
function calculateCouponDiscount(couponCode: string, courseId: string): { success: boolean; error?: string; discountAmount?: number; finalAmount?: number } {
  const course = mockCourses.find(c => c.id === courseId);
  if (!course) return { success: false, error: 'Course not found' };

  const coupon = mockCoupons.find(c => c.code === couponCode.toUpperCase());
  if (!coupon || !coupon.isActive) return { success: false, error: 'Invalid or inactive coupon code' };

  if (new Date() > coupon.expiryDate) return { success: false, error: 'This coupon code has expired' };
  if (coupon.usedCount >= coupon.maxUses) return { success: false, error: 'This coupon has reached its maximum usage limit' };

  let discountAmount = 0;
  const basePrice = course.discountPrice;

  if (coupon.discountType === 'PERCENTAGE') {
    discountAmount = (basePrice * coupon.discountValue) / 100;
  } else if (coupon.discountType === 'FIXED') {
    discountAmount = coupon.discountValue;
  }

  discountAmount = Math.min(discountAmount, basePrice);
  const finalAmount = Math.max(0, basePrice - discountAmount);

  return {
    success: true,
    discountAmount: parseFloat(discountAmount.toFixed(2)),
    finalAmount: parseFloat(finalAmount.toFixed(2))
  };
}

// Core Logic: GST Extraction (18% inclusive)
function extractGstBreakdown(amount: number) {
  const taxableValue = parseFloat((amount / 1.18).toFixed(2));
  const gstAmount = parseFloat((amount - taxableValue).toFixed(2));
  return { taxableValue, gstAmount };
}

// Core Logic: Validate Order Request
function validateOrderRequest(data: {
  courseId: string;
  fullName: string;
  email: string;
  phone: string;
  hasAlreadyPurchased: boolean;
}): { valid: boolean; error?: string } {
  if (!data.courseId || !data.fullName || !data.email || !data.phone) {
    return { valid: false, error: 'All fields are required' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { valid: false, error: 'Invalid email address format' };
  }

  const cleanPhone = data.phone.replace(/\D/g, '');
  if (cleanPhone.length < 10) {
    return { valid: false, error: 'Phone number must be at least 10 digits' };
  }

  const course = mockCourses.find(c => c.id === data.courseId);
  if (!course || !course.isActive) {
    return { valid: false, error: 'Course not found or is currently inactive' };
  }

  if (data.hasAlreadyPurchased) {
    return { valid: false, error: 'Duplicate Purchase: You have already purchased this program' };
  }

  return { valid: true };
}

// Core Logic: Webhook Signature Verification
function verifyWebhookSignature(signature: string, timestamp: string, rawBody: string, secretKey: string): boolean {
  const signatureData = timestamp + rawBody;
  const expectedSignature = crypto
    .createHmac('sha256', secretKey)
    .update(signatureData)
    .digest('base64');
  return signature === expectedSignature;
}

// ==========================================
// TEST SUITE RUNNER
// ==========================================

function runTests() {
  console.log('===================================================');
  console.log('ASHWINI TRADING ACADEMY PAYMENT SYSTEM TEST SUITE');
  console.log('===================================================\n');

  let passed = 0;
  let failed = 0;

  const assert = (testName: string, condition: boolean) => {
    if (condition) {
      console.log(`[PASS] ${testName}`);
      passed++;
    } else {
      console.error(`[FAIL] ${testName}`);
      failed++;
    }
  };

  // 1. Coupon Flow Tests
  console.log('--- 1. Testing Coupon Code Validation & Calculations ---');
  
  // Test WELCOME10 (10% on 2999 = 299.9, final = 2699.1)
  const c1 = calculateCouponDiscount('WELCOME10', 'foundation');
  assert('WELCOME10 on 2999: discount should be 299.9', c1.success && c1.discountAmount === 299.9);
  assert('WELCOME10 on 2999: final should be 2699.1', c1.success && c1.finalAmount === 2699.1);

  // Test EARLYBIRD (₹1500 flat on 24999 = 1500, final = 23499)
  const c2 = calculateCouponDiscount('EARLYBIRD', 'futures-options-trader-pro');
  assert('EARLYBIRD on 24999: discount should be 1500', c2.success && c2.discountAmount === 1500);
  assert('EARLYBIRD on 24999: final should be 23499', c2.success && c2.finalAmount === 23499);

  // Test Expired Coupon
  const c3 = calculateCouponDiscount('EXPIRED10', 'foundation');
  assert('EXPIRED10 should fail', !c3.success && c3.error === 'This coupon code has expired');

  // Test Maxed Out Coupon
  const c4 = calculateCouponDiscount('MAXEDOUT', 'foundation');
  assert('MAXEDOUT should fail', !c4.success && c4.error === 'This coupon has reached its maximum usage limit');

  // 2. GST Calculations Tests
  console.log('\n--- 2. Testing GST Extraction Math (18% Inclusive) ---');
  const gst1 = extractGstBreakdown(2999.0);
  // 2999 / 1.18 = 2541.525 -> 2541.53. GST = 2999 - 2541.53 = 457.47
  assert('2999 inclusive GST: Taxable base is 2541.53', gst1.taxableValue === 2541.53);
  assert('2999 inclusive GST: GST amount is 457.47', gst1.gstAmount === 457.47);
  assert('GST base + tax sums back to total exactly', parseFloat((gst1.taxableValue + gst1.gstAmount).toFixed(2)) === 2999.0);

  // 3. Request Validation & Duplicate Purchase Tests
  console.log('\n--- 3. Testing Order Creation & Input Validation ---');

  const validRequest = validateOrderRequest({
    courseId: 'foundation',
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    hasAlreadyPurchased: false
  });
  assert('Valid request should pass validation', validRequest.valid);

  const invalidEmail = validateOrderRequest({
    courseId: 'foundation',
    fullName: 'John Doe',
    email: 'invalid-email',
    phone: '9876543210',
    hasAlreadyPurchased: false
  });
  assert('Invalid email should be caught', !invalidEmail.valid && invalidEmail.error === 'Invalid email address format');

  const invalidPhone = validateOrderRequest({
    courseId: 'foundation',
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '12345',
    hasAlreadyPurchased: false
  });
  assert('Short phone number should be caught', !invalidPhone.valid && invalidPhone.error === 'Phone number must be at least 10 digits');

  const inactiveCourse = validateOrderRequest({
    courseId: 'inactive-course',
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    hasAlreadyPurchased: false
  });
  assert('Inactive course should be caught', !inactiveCourse.valid && inactiveCourse.error === 'Course not found or is currently inactive');

  const duplicatePurchase = validateOrderRequest({
    courseId: 'foundation',
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    hasAlreadyPurchased: true // Simulated duplicate purchase check result
  });
  assert('Duplicate purchase check should block order', !duplicatePurchase.valid && duplicatePurchase.error?.includes('Duplicate Purchase'));

  // 4. Webhook Signature Verification Tests
  console.log('\n--- 4. Testing Webhook Signature Security ---');
  
  const mockSecret = 'cfsdk_secret_key_12345';
  const mockTimestamp = '1719379200';
  const mockRawBody = '{"type":"PAYMENT_SUCCESS","data":{"order":{"order_id":"ORD_123"}}}';
  
  // Calculate expected signature using HMAC-SHA256
  const signatureData = mockTimestamp + mockRawBody;
  const mockSignature = crypto
    .createHmac('sha256', mockSecret)
    .update(signatureData)
    .digest('base64');

  const sigValid = verifyWebhookSignature(mockSignature, mockTimestamp, mockRawBody, mockSecret);
  assert('Valid signature should verify successfully', sigValid);

  const sigInvalidBody = verifyWebhookSignature(mockSignature, mockTimestamp, mockRawBody + 'tampered', mockSecret);
  assert('Modified webhook payload should fail signature verification', !sigInvalidBody);

  const sigInvalidSecret = verifyWebhookSignature(mockSignature, mockTimestamp, mockRawBody, 'wrong_secret');
  assert('Wrong secret key should fail signature verification', !sigInvalidSecret);

  console.log('\n===================================================');
  console.log(`TEST EXECUTION COMPLETED: ${passed} PASSED, ${failed} FAILED`);
  console.log('===================================================');
  
  return failed === 0;
}

// Execute tests
runTests();
