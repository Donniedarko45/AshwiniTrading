import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Download, Home, ArrowRight, Loader2, Mail, CreditCard, Calendar, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PaymentSuccessPage() {
  const [orderId, setOrderId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [invoiceData, setInvoiceData] = useState<any>(null);

  // Read order_id from hash URL query params
  useEffect(() => {
    const parseOrderId = () => {
      const hash = window.location.hash;
      const match = hash.match(/order_id=([^&]+)/);
      if (match && match[1]) {
        setOrderId(match[1]);
      } else {
        setError(true);
        setLoading(false);
      }
    };

    parseOrderId();
    window.addEventListener('hashchange', parseOrderId);
    return () => window.removeEventListener('hashchange', parseOrderId);
  }, []);

  // Fetch invoice details from backend
  useEffect(() => {
    if (!orderId) return;

    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`/api/orders/${orderId}`);
        if (!response.ok) {
          throw new Error('Failed to load invoice');
        }
        const data = await response.json();
        setInvoiceData(data.invoice);
      } catch (err) {
        console.error('Error loading success details:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  // Client-Side Invoice HTML Generator for Printing
  const handleDownloadInvoice = () => {
    if (!invoiceData) return;

    // Create a printable receipt in a new window or iframe
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Pop-up blocked! Please allow pop-ups to download the invoice.');
      return;
    }

    const cgst = parseFloat((invoiceData.gstAmount / 2).toFixed(2));
    const sgst = cgst;

    const invoiceHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Invoice - ${invoiceData.orderId}</title>
        <meta charset="utf-8">
        <style>
          body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #333;
            line-height: 1.5;
            padding: 30px;
            max-width: 800px;
            margin: 0 auto;
            background: #fff;
          }
          .header {
            display: flex;
            justify-content: space-between;
            border-bottom: 2px solid #f0f0f0;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .brand {
            font-size: 24px;
            font-weight: 800;
            color: #0f172a;
          }
          .brand span {
            color: #38bdf8;
          }
          .invoice-title {
            font-size: 20px;
            font-weight: 700;
            text-align: right;
            color: #64748b;
          }
          .details-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-bottom: 40px;
          }
          .section-title {
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #94a3b8;
            margin-bottom: 10px;
          }
          .details-box p {
            margin: 4px 0;
            font-size: 14px;
          }
          .invoice-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 40px;
          }
          .invoice-table th {
            background: #f8fafc;
            border-bottom: 1px solid #e2e8f0;
            padding: 12px;
            text-align: left;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            color: #64748b;
          }
          .invoice-table td {
            border-bottom: 1px solid #e2e8f0;
            padding: 16px 12px;
            font-size: 14px;
          }
          .invoice-table td.amount-col {
            text-align: right;
          }
          .invoice-table th.amount-col {
            text-align: right;
          }
          .totals-section {
            width: 50%;
            margin-left: auto;
            margin-bottom: 40px;
          }
          .totals-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            font-size: 14px;
          }
          .totals-row.grand-total {
            border-top: 2px solid #f0f0f0;
            font-size: 18px;
            font-weight: 800;
            color: #0f172a;
            padding-top: 12px;
          }
          .footer {
            text-align: center;
            border-top: 1px solid #f0f0f0;
            padding-top: 20px;
            font-size: 12px;
            color: #94a3b8;
            margin-top: 50px;
          }
          .badge {
            background: #dcfce7;
            color: #166534;
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            display: inline-block;
          }
          @media print {
            body { padding: 0; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="brand">Ashwini Trading <span>Academy</span></div>
            <p style="font-size: 12px; color: #64748b; margin: 4px 0 0 0;">Bengaluru, Karnataka, India • support@ashwinitrading.com</p>
          </div>
          <div>
            <div class="invoice-title">TAX INVOICE</div>
            <p style="font-size: 13px; color: #0f172a; margin: 4px 0 0 0; text-align: right;">
              Invoice ID: <strong>${invoiceData.orderId}</strong>
            </p>
          </div>
        </div>

        <div class="details-grid">
          <div class="details-box">
            <div class="section-title">Billed To</div>
            <p><strong>${invoiceData.fullName}</strong></p>
            <p>Email: ${invoiceData.email}</p>
            <p>Phone: +91 ${invoiceData.phone}</p>
          </div>
          <div class="details-box" style="text-align: right;">
            <div class="section-title">Payment Details</div>
            <p>Date: ${new Date(invoiceData.paidAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
            <p>Gateway: Cashfree PG</p>
            <p>Transaction ID: ${invoiceData.transactionId}</p>
            <p>Method: ${invoiceData.paymentMethod.toUpperCase()}</p>
            <p style="margin-top: 6px;"><span class="badge">Paid</span></p>
          </div>
        </div>

        <table class="invoice-table">
          <thead>
            <tr>
              <th>Description</th>
              <th class="amount-col">Base Price</th>
              <th class="amount-col">Discount</th>
              <th class="amount-col">GST (18%)</th>
              <th class="amount-col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>${invoiceData.courseTitle}</strong><br><span style="font-size: 12px; color: #64748b;">Live Mentorship & Certification Program</span></td>
              <td class="amount-col">₹${invoiceData.originalPrice.toLocaleString('en-IN')}</td>
              <td class="amount-col">₹${invoiceData.discount.toLocaleString('en-IN')}</td>
              <td class="amount-col">₹${invoiceData.gstAmount.toLocaleString('en-IN')}</td>
              <td class="amount-col"><strong>₹${invoiceData.totalAmount.toLocaleString('en-IN')}</strong></td>
            </tr>
          </tbody>
        </table>

        <div class="totals-section">
          <div class="totals-row">
            <span>Taxable Value (Base)</span>
            <span>₹${invoiceData.taxableValue.toLocaleString('en-IN')}</span>
          </div>
          <div class="totals-row">
            <span>Central GST (CGST 9%)</span>
            <span>₹${cgst.toLocaleString('en-IN')}</span>
          </div>
          <div class="totals-row">
            <span>State GST (SGST 9%)</span>
            <span>₹${sgst.toLocaleString('en-IN')}</span>
          </div>
          <div class="totals-row grand-total">
            <span>Total Paid</span>
            <span>₹${invoiceData.totalAmount.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <div class="footer">
          <p>Thank you for choosing Ashwini Trading Academy. Your success is our mission.</p>
          <p style="font-size: 10px; margin-top: 10px;">This is a computer-generated invoice and requires no physical signature.</p>
          <button class="no-print" onclick="window.print()" style="margin-top: 20px; background: #0f172a; color: #fff; border: 0; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;">Print Invoice</button>
        </div>
      </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(invoiceHtml);
    printWindow.document.close();
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] bg-brand-bg-dark flex flex-col items-center justify-center text-center">
        <Loader2 className="w-12 h-12 text-brand-secondary animate-spin mb-4" />
        <h2 className="text-xl font-extrabold text-white">Loading Receipt Details</h2>
        <p className="text-slate-400 text-sm mt-2">Retrieving tax invoice and enrollment confirmation...</p>
      </div>
    );
  }

  if (error || !invoiceData) {
    return (
      <div className="min-h-[70vh] bg-brand-bg-dark flex flex-col items-center justify-center text-center px-4">
        <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mb-4">
          ⚠
        </div>
        <h2 className="text-2xl font-extrabold text-white">Receipt Retrieval Failed</h2>
        <p className="text-slate-400 text-sm mt-2 max-w-md">
          Although your payment was successful, we had trouble displaying the invoice details on this screen. Rest assured, your purchase is secure. Please check your email for confirmation.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#">
            <Button className="cursor-pointer bg-slate-800 hover:bg-slate-700 text-white">Go to Home</Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Success Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brand-bg-card border border-white/10 rounded-[40px] p-6 sm:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden"
        >
          {/* Top Banner Accent */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-success to-brand-secondary" />

          {/* Success Check */}
          <div className="w-20 h-20 bg-brand-success/10 border border-brand-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-brand-success" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-white tracking-tight">
            Payment Successful!
          </h1>
          <p className="text-center text-slate-400 text-sm mt-3 max-w-md mx-auto leading-relaxed">
            Welcome to Ashwini Trading Academy. Your seat has been successfully reserved. A confirmation email with access instructions has been sent to <strong className="text-white">{invoiceData.email}</strong>.
          </p>

          {/* Email Notice Box */}
          <div className="mt-8 bg-brand-success/5 border border-brand-success/15 rounded-2xl p-4 flex gap-3 text-left">
            <Mail className="w-5 h-5 text-brand-success shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-slate-200">Email Confirmation Sent</div>
              <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                Please check your inbox (and spam folder) for an email from <strong>support@ashwinitrading.com</strong>. It contains your LMS login credentials and live session links.
              </p>
            </div>
          </div>

          {/* Transaction Invoice Detail Block */}
          <div className="mt-8 bg-black/40 border border-white/5 rounded-3xl p-6 space-y-4 text-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pb-2 border-b border-white/5">
              Transaction Details
            </h3>

            <div className="grid grid-cols-2 gap-y-4 gap-x-4">
              <div>
                <span className="text-slate-500 text-xs flex items-center gap-1"><Hash className="w-3.5 h-3.5" /> Order ID</span>
                <span className="font-mono font-bold text-slate-200 text-[13px] block mt-1 break-all">{invoiceData.orderId}</span>
              </div>

              <div>
                <span className="text-slate-500 text-xs flex items-center gap-1"><CreditCard className="w-3.5 h-3.5" /> Transaction Ref</span>
                <span className="font-mono font-bold text-slate-200 text-[13px] block mt-1 break-all">{invoiceData.transactionId}</span>
              </div>

              <div>
                <span className="text-slate-500 text-xs flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Date & Time</span>
                <span className="font-bold text-slate-200 block mt-1">
                  {new Date(invoiceData.paidAt).toLocaleString('en-IN', { 
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>

              <div>
                <span className="text-slate-500 text-xs">Payment Method</span>
                <span className="font-bold text-slate-200 block mt-1 uppercase">{invoiceData.paymentMethod}</span>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 mt-2 flex justify-between items-center">
              <div>
                <span className="text-xs font-bold text-slate-400 block">Enrolled Course</span>
                <span className="font-extrabold text-white text-[15px] mt-1 block">{invoiceData.courseTitle}</span>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-slate-400 block">Amount Paid</span>
                <span className="font-extrabold text-brand-secondary text-lg mt-1 block">
                  ₹{invoiceData.totalAmount.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleDownloadInvoice}
              className="flex-1 cursor-pointer bg-slate-800 hover:bg-slate-700 font-bold py-6 rounded-xl border border-white/5 text-white flex justify-center items-center gap-2"
            >
              <Download className="w-4.5 h-4.5" />
              Download GST Invoice
            </Button>
            
            <a href="#" className="flex-1">
              <Button 
                className="w-full cursor-pointer bg-gradient-to-r from-brand-primary-grad-start to-brand-primary-grad-end text-slate-950 hover:brightness-110 font-extrabold py-6 rounded-xl border-0 flex justify-center items-center gap-2 uppercase tracking-wider text-xs"
              >
                <Home className="w-4 h-4" />
                Go to Dashboard
                <ChevronRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          <p className="text-center text-[11px] text-slate-500 mt-8">
            Need help? Contact our support desk at +91 98459 61990 or email support@ashwinitrading.com
          </p>
        </motion.div>
      </div>
    </div>
  );
}
