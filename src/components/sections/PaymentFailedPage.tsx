import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { XCircle, RefreshCw, PhoneCall, HelpCircle, ArrowLeft, MessageSquare, Loader2, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { load } from '@cashfreepayments/cashfree-js';

export default function PaymentFailedPage() {
  const [orderId, setOrderId] = useState<string | null>(null);
  const [reason, setReason] = useState<string>('');
  const [isRetrying, setIsRetrying] = useState(false);
  const [retryError, setRetryError] = useState('');

  // Parse order_id and reason from hash URL query params: #/payment/failed?order_id=ORD_XXX&reason=YYY
  useEffect(() => {
    const parseParams = () => {
      const hash = window.location.hash;
      
      const orderIdMatch = hash.match(/order_id=([^&]+)/);
      if (orderIdMatch && orderIdMatch[1]) {
        setOrderId(orderIdMatch[1]);
      }

      const reasonMatch = hash.match(/reason=([^&]+)/);
      if (reasonMatch && reasonMatch[1]) {
        setReason(decodeURIComponent(reasonMatch[1]));
      } else {
        setReason('The transaction was declined by your bank or cancelled.');
      }
    };

    parseParams();
    window.addEventListener('hashchange', parseParams);
    return () => window.removeEventListener('hashchange', parseParams);
  }, []);

  // API Call to retry payment (idempotent, recreates session)
  const handleRetryPayment = async () => {
    if (!orderId) return;

    setIsRetrying(true);
    setRetryError('');

    try {
      const response = await fetch('/api/payment/retry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId }),
      });

      const data = await response.json();

      if (!response.ok) {
        setRetryError(data.error || 'Failed to restart payment session.');
        setIsRetrying(false);
        return;
      }

      // Re-initialize Cashfree SDK and launch overlay
      const cfEnv = import.meta.env.VITE_CF_ENVIRONMENT || 'sandbox';
      const cashfree = await load({
        mode: cfEnv === 'production' ? 'production' : 'sandbox',
      });

      console.log('Relaunching Cashfree Checkout for retried order:', data.orderId);
      
      // Update hash parameters in URL to reflect the new orderId before redirection
      window.location.hash = `#/payment/status?order_id=${data.orderId}`;
      
      await cashfree.checkout({
        paymentSessionId: data.paymentSessionId,
        redirectTarget: '_self',
      });

    } catch (err) {
      console.error('Error retrying payment:', err);
      setRetryError('Network error. Redirecting you to the catalog instead...');
      setTimeout(() => {
        window.location.hash = '#/all-courses';
      }, 2000);
    } finally {
      setIsRetrying(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg-dark py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-slate-200 rounded-[32px] p-8 text-center shadow-sm relative overflow-hidden"
        >
          {/* Top decorative line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-brand-primary" />

          {/* Failure Cross */}
          <div className="w-20 h-20 bg-brand-primary/10 border border-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-10 h-10 text-brand-primary" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
            Payment Failed
          </h1>
          
          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            We were unable to process your transaction. Don't worry — if any amount was debited from your account, it will be automatically refunded by your bank within 3-5 business days.
          </p>

          {/* Failure Reason Box */}
          <div className="mt-6 bg-slate-50 border border-slate-100 rounded-2xl p-4 text-left">
            <div className="text-xs font-bold text-slate-700 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-brand-primary" />
              Reason for Failure
            </div>
            <p className="text-xs text-slate-600 mt-2 font-semibold italic leading-normal">
              "{reason}"
            </p>
          </div>

          {/* Order Reference */}
          {orderId && (
            <div className="text-[10px] font-mono text-slate-500 mt-4 text-left">
              Order Ref: {orderId}
            </div>
          )}

          {retryError && (
            <p className="text-xs text-brand-primary font-bold mt-4 flex items-center gap-1.5 justify-center">
              <AlertTriangle className="w-4 h-4" />
              {retryError}
            </p>
          )}

          {/* Action Buttons */}
          <div className="mt-8 space-y-3">
            <Button 
              onClick={handleRetryPayment}
              disabled={isRetrying}
              className="w-full cursor-pointer bg-gradient-to-r from-brand-primary-grad-start to-brand-primary-grad-end text-brand-navy hover:brightness-110 font-extrabold py-5 rounded-xl border-0 flex justify-center items-center gap-2"
            >
              {isRetrying ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Relaunching Checkout...
                </>
              ) : (
                <>
                  <RefreshCw className="w-4 h-4" />
                  Retry Payment
                </>
              )}
            </Button>

            <div className="grid grid-cols-2 gap-3">
              <a 
                href="https://wa.me/918861756040?text=Hi%2C%20my%20payment%20failed%20on%20the%20website.%20Please%20help."
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  variant="outline"
                  className="w-full cursor-pointer font-bold border-slate-200 hover:bg-slate-50 text-slate-700 text-xs h-12 flex justify-center items-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4 text-brand-success" />
                  WhatsApp
                </Button>
              </a>

              <a href="mailto:support@ashwinitrading.com" className="block">
                <Button 
                  variant="outline"
                  className="w-full cursor-pointer font-bold border-slate-200 hover:bg-slate-50 text-slate-700 text-xs h-12 flex justify-center items-center gap-1.5"
                >
                  <PhoneCall className="w-4 h-4 text-slate-500" />
                  Contact Desk
                </Button>
              </a>
            </div>

            <a href="#/all-courses" className="block pt-2">
              <button 
                className="text-xs text-slate-600 hover:text-brand-navy font-bold flex items-center gap-1.5 mx-auto transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Trading Programs
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
