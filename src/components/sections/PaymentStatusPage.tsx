import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Loader2, RefreshCw, ShieldAlert, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PaymentStatusPageProps {
  onNavigate: (view: any, params?: Record<string, string>) => void;
}

export default function PaymentStatusPage({ onNavigate }: PaymentStatusPageProps) {
  const [orderId, setOrderId] = useState<string | null>(null);
  const [status, setStatus] = useState<'checking' | 'pending' | 'timeout' | 'error'>('checking');
  const [courseName, setCourseName] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [pollCount, setPollCount] = useState(0);

  // Read order_id from hash URL query params: #/payment/status?order_id=ORD_XXX
  useEffect(() => {
    const parseOrderId = () => {
      const hash = window.location.hash;
      const match = hash.match(/order_id=([^&]+)/);
      if (match && match[1]) {
        setOrderId(match[1]);
      } else {
        setStatus('error');
      }
    };

    parseOrderId();
    window.addEventListener('hashchange', parseOrderId);
    return () => window.removeEventListener('hashchange', parseOrderId);
  }, []);

  // Polling effect
  useEffect(() => {
    if (!orderId || status === 'timeout' || status === 'error') return;

    let timer: NodeJS.Timeout;
    const maxPolls = 15; // 15 attempts * 2.5 seconds = ~37.5 seconds max polling

    const checkStatus = async () => {
      try {
        const response = await fetch(`/api/payment/status/${orderId}`);
        if (!response.ok) {
          throw new Error('Status check failed');
        }

        const data = await response.json();
        
        if (data.courseName) setCourseName(data.courseName);
        if (data.amount) setAmount(data.amount);

        console.log(`[Status Poll #${pollCount}] Status: ${data.status}`);

        if (data.status === 'PAID') {
          // Success! Redirect to success page
          window.location.hash = `#/payment/success?order_id=${orderId}`;
        } else if (data.status === 'FAILED') {
          // Failed! Redirect to failed page
          window.location.hash = `#/payment/failed?order_id=${orderId}&reason=${encodeURIComponent(data.reason || 'Payment failed or declined by bank.')}`;
        } else {
          // Still pending
          setStatus('pending');
          setPollCount(prev => prev + 1);

          if (pollCount >= maxPolls) {
            setStatus('timeout');
          } else {
            // Poll again in 2.5 seconds
            timer = setTimeout(checkStatus, 2500);
          }
        }
      } catch (err) {
        console.error('Polling error:', err);
        // Retry anyway unless maxed out
        setPollCount(prev => prev + 1);
        if (pollCount >= maxPolls) {
          setStatus('timeout');
        } else {
          timer = setTimeout(checkStatus, 3000);
        }
      }
    };

    // Trigger initial check
    checkStatus();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [orderId, pollCount, status]);

  // Force immediate verification check on button click
  const handleManualRefresh = async () => {
    if (!orderId) return;
    setStatus('checking');
    
    try {
      const response = await fetch('/api/payment/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId }),
      });

      const data = await response.json();

      if (response.ok && data.status === 'PAID') {
        window.location.hash = `#/payment/success?order_id=${orderId}`;
      } else if (response.ok && data.status === 'FAILED') {
        window.location.hash = `#/payment/failed?order_id=${orderId}&reason=${encodeURIComponent(data.message || 'Payment declined.')}`;
      } else {
        // Still pending
        setStatus('pending');
        setPollCount(0); // Reset poll count to allow another round of auto polling
      }
    } catch (err) {
      console.error('Manual refresh error:', err);
      setStatus('timeout');
    }
  };

  return (
    <div className="min-h-[80vh] bg-brand-bg-dark flex items-center justify-center px-4 py-16">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-brand-bg-card border border-white/10 rounded-[32px] p-8 text-center shadow-2xl backdrop-blur-md relative overflow-hidden"
      >
        {/* Glow Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none" />

        {status === 'checking' && (
          <div className="space-y-6 relative z-10">
            <div className="w-20 h-20 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto border border-brand-secondary/20 shadow-inner">
              <Loader2 className="w-10 h-10 text-brand-secondary animate-spin" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-white">Verifying Transaction</h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                We are securely communicating with Cashfree Payment Gateway to verify your transaction status. Please do not refresh this page.
              </p>
            </div>
          </div>
        )}

        {status === 'pending' && (
          <div className="space-y-6 relative z-10">
            <div className="w-20 h-20 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto border border-brand-secondary/20 relative">
              <div className="absolute inset-0 rounded-full border-2 border-brand-secondary border-t-transparent animate-spin" />
              <Clock className="w-8 h-8 text-brand-secondary" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-white">Payment Processing</h2>
              {courseName && (
                <p className="text-sm font-bold text-slate-300 mt-2 bg-white/5 py-1.5 px-3 rounded-xl border border-white/5 w-fit mx-auto">
                  {courseName} • ₹{amount.toLocaleString('en-IN')}
                </p>
              )}
              <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                Your payment is currently being processed by your bank. We are awaiting the final confirmation. This usually takes just a few seconds.
              </p>
            </div>
            
            <div className="pt-4 flex flex-col gap-2">
              <Button 
                onClick={handleManualRefresh}
                className="w-full bg-slate-800 hover:bg-slate-700 font-bold py-4.5 rounded-xl border-0 cursor-pointer text-white flex justify-center items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Check Status Now
              </Button>
            </div>
          </div>
        )}

        {status === 'timeout' && (
          <div className="space-y-6 relative z-10">
            <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto border border-brand-primary/20">
              <Clock className="w-10 h-10 text-brand-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-white">Verification Delayed</h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                Confirmation from your bank is taking longer than expected. Do not worry — your money is safe. You can click the refresh button below to re-verify.
              </p>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 text-xs text-left text-slate-400 space-y-2">
              <div className="font-bold text-slate-300">What happened?</div>
              <p>Sometimes banking networks experience latency in reporting transaction statuses to payment gateways.</p>
              <div className="font-bold text-slate-300 mt-2">Order Reference:</div>
              <code className="block bg-black/40 text-brand-secondary py-1 px-2 rounded font-mono text-[10px] break-all">{orderId}</code>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <Button 
                onClick={handleManualRefresh}
                className="w-full bg-gradient-to-r from-brand-primary-grad-start to-brand-primary-grad-end text-brand-navy hover:brightness-110 font-bold py-4.5 rounded-xl border-0 cursor-pointer flex justify-center items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh Transaction Status
              </Button>
              <a href="#" className="w-full">
                <Button 
                  variant="outline"
                  className="w-full cursor-pointer text-slate-300 font-bold"
                >
                  Return to Home
                </Button>
              </a>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="space-y-6 relative z-10">
            <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto border border-brand-primary/20">
              <ShieldAlert className="w-10 h-10 text-brand-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-white">Invalid Order Details</h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                The transaction reference is missing or invalid. Please return to the homepage and try enrolling again.
              </p>
            </div>
            <div className="pt-4">
              <a href="#" className="w-full">
                <Button className="w-full cursor-pointer bg-slate-800 hover:bg-slate-700 text-white font-bold py-4.5 rounded-xl border-0">
                  Return to Programs
                </Button>
              </a>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
