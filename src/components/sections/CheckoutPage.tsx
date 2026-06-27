import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { load } from '@cashfreepayments/cashfree-js';
import { coursesData } from '@/data/courses';
import { workshopCourses } from '@/data/curriculum';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheck, 
  Lock, 
  Tag, 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight, 
  ArrowLeft,
  Loader2,
  Check
} from 'lucide-react';

interface CheckoutPageProps {
  courseId: string;
  onBack: () => void;
}

export default function CheckoutPage({ courseId, onBack }: CheckoutPageProps) {
  // Find course from either standard courses or workshops
  const course = coursesData.find(c => c.id === courseId) || workshopCourses.find(c => c.id === courseId);

  // Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Status/Validation states
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [couponLoading, setCouponLoading] = useState(false);
  const [couponStatus, setCouponStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [couponMessage, setCouponMessage] = useState('');
  const [appliedCouponData, setAppliedCouponData] = useState<any>(null);
  
  // Submit state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return (
      <div className="min-h-[60vh] bg-brand-bg-dark flex flex-col items-center justify-center text-center px-4 py-16">
        <AlertCircle className="w-16 h-16 text-brand-primary mb-4 animate-bounce" />
        <h2 className="text-3xl font-extrabold mb-2">Program Not Found</h2>
        <p className="text-slate-400 mb-8 max-w-md">The program you are trying to enroll in could not be located.</p>
        <Button onClick={onBack} variant="outline" className="cursor-pointer">
          Back to Programs
        </Button>
      </div>
    );
  }

  // Parse price from fee (e.g., "₹2,999" -> 2999)
  const originalFeeStr = course.fee;
  const originalPrice = parseInt(originalFeeStr.replace(/[^\d]/g, ''), 10);

  // Price calculations
  const discountAmount = appliedCouponData ? appliedCouponData.discountAmount : 0;
  const finalAmount = originalPrice - discountAmount;

  // Extract GST components (18% inclusive)
  const taxableValue = parseFloat((finalAmount / 1.18).toFixed(2));
  const gstAmount = parseFloat((finalAmount - taxableValue).toFixed(2));

  // Handle coupon application
  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) {
      setCouponStatus('error');
      setCouponMessage('Please enter a coupon code.');
      return;
    }

    setCouponLoading(true);
    setCouponStatus('idle');
    setCouponMessage('');

    try {
      const response = await fetch('/api/payment/apply-coupon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ couponCode: couponCode.trim(), courseId }),
      });

      const data = await response.json();

      if (!response.ok) {
        setCouponStatus('error');
        setCouponMessage(data.error || 'Failed to apply coupon.');
        setAppliedCouponData(null);
      } else {
        setCouponStatus('success');
        setCouponMessage(`Coupon "${data.couponCode}" applied successfully! You saved ₹${data.discountAmount}.`);
        setAppliedCouponData(data);
      }
    } catch (err) {
      setCouponStatus('error');
      setCouponMessage('Server error. Please try again.');
      setAppliedCouponData(null);
    } finally {
      setCouponLoading(false);
    }
  };

  const handleRemoveCoupon = () => {
    setCouponCode('');
    setCouponStatus('idle');
    setCouponMessage('');
    setAppliedCouponData(null);
  };

  // Form validation
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!fullName.trim()) errors.fullName = 'Full Name is required.';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = 'Email is required.';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (!phone.trim()) {
      errors.phone = 'Phone number is required.';
    } else if (cleanPhone.length < 10) {
      errors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!termsAccepted) {
      errors.terms = 'You must agree to the Terms & Conditions.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Submit and launch Cashfree Checkout
  const handlePayNow = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Create order in backend
      const response = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseId,
          fullName,
          email,
          phone,
          couponCode: appliedCouponData ? appliedCouponData.couponCode : undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || 'Failed to initialize payment.');
        setIsSubmitting(false);
        return;
      }

      // If order is free (100% coupon), backend directly marks as PAID
      if (data.isFree) {
        window.location.hash = `#/payment/success?order_id=${data.orderId}`;
        return;
      }

      // 2. Initialize Cashfree JS SDK
      // Using sandbox or production mode based on client config
      const cfEnv = import.meta.env.VITE_CF_ENVIRONMENT || 'sandbox';
      const cashfree = await load({
        mode: cfEnv === 'production' ? 'production' : 'sandbox',
      });

      // 3. Trigger checkout overlay (modal redirect)
      log('Launching Cashfree checkout modal...');
      await cashfree.checkout({
        paymentSessionId: data.paymentSessionId,
        redirectTarget: '_self', // Secure redirect to return_url configured in backend
      });
      
    } catch (err: any) {
      log('Payment initiation error:', err);
      setErrorMessage('An unexpected error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  const log = (msg: string, ...args: any[]) => {
    console.log(`[Checkout] ${msg}`, ...args);
  };

  return (
    <div className="min-h-screen bg-brand-bg-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header & Back Link */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200/80">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-2 text-slate-600 hover:text-brand-navy font-bold text-sm bg-slate-50 hover:bg-slate-100 px-4 py-2 rounded-xl border border-slate-200 cursor-pointer transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <a href="#" className="flex items-center gap-2.5 group">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 w-10 object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col text-left leading-none">
                <span className="text-[14px] font-extrabold text-brand-navy">Ashwini Trading</span>
                <span className="text-[11px] font-semibold text-slate-500">Academy</span>
              </div>
            </a>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-xs text-brand-primary font-extrabold tracking-widest uppercase">Secured Checkout</span>
            <div className="flex items-center gap-1 text-slate-500 text-xs justify-start sm:justify-end mt-0.5">
              <Lock className="w-3.5 h-3.5 text-brand-success" />
              <span>SSL 256-Bit Encryption</span>
            </div>
          </div>
        </div>

        {/* Form Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Customer Form & Verification (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-slate-200 rounded-[32px] p-6 sm:p-8 shadow-sm"
            >
              <h2 className="text-2xl font-extrabold text-brand-navy mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-brand-secondary/10 text-brand-secondary flex items-center justify-center text-sm font-bold">1</span>
                Customer Information
              </h2>

              <form onSubmit={handlePayNow} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
                  <input 
                    type="text"
                    required
                    disabled={isSubmitting}
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none transition-colors focus:ring-2 focus:ring-brand-secondary/20 focus:border-brand-secondary"
                  />
                  {formErrors.fullName && <p className="text-xs text-brand-primary mt-1 font-semibold flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {formErrors.fullName}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                    <input 
                      type="email"
                      required
                      disabled={isSubmitting}
                      placeholder="e.g. john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none transition-colors focus:ring-2 focus:ring-brand-secondary/20 focus:border-brand-secondary"
                    />
                    {formErrors.email && <p className="text-xs text-brand-primary mt-1 font-semibold flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {formErrors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Phone Number</label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-slate-500 font-bold text-sm">+91</span>
                      <input 
                        type="tel"
                        required
                        disabled={isSubmitting}
                        placeholder="10-digit mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none transition-colors focus:ring-2 focus:ring-brand-secondary/20 focus:border-brand-secondary"
                      />
                    </div>
                    {formErrors.phone && <p className="text-xs text-brand-primary mt-1 font-semibold flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {formErrors.phone}</p>}
                  </div>
                </div>

                {/* Secure Badge & Privacy Note */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-xs text-slate-500 flex items-start gap-3 mt-2">
                  <ShieldCheck className="w-5 h-5 text-brand-success shrink-0 mt-0.5" />
                  <p>
                    <strong>Privacy & Security:</strong> Your credentials are secure. Course access instructions, receipts, and login credentials will be sent to the email address provided above.
                  </p>
                </div>
              </form>
            </motion.div>

            {/* Coupon Code Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-slate-200 rounded-[32px] p-6 shadow-sm"
            >
              <h2 className="text-lg font-extrabold text-brand-navy mb-4 flex items-center gap-3">
                <Tag className="w-5 h-5 text-brand-secondary" />
                Apply Coupon Code
              </h2>

              <div className="flex gap-3">
                <div className="relative flex-grow">
                  <input 
                    type="text"
                    disabled={isSubmitting || !!appliedCouponData}
                    placeholder="Enter coupon code (e.g. WELCOME10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 uppercase tracking-wider placeholder-slate-400 focus:bg-white focus:outline-none transition-colors focus:ring-2 focus:ring-brand-secondary/20 focus:border-brand-secondary"
                  />
                  {couponStatus === 'success' && <Check className="absolute right-4 top-3.5 w-5 h-5 text-brand-success" />}
                </div>
                {appliedCouponData ? (
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={handleRemoveCoupon}
                    className="cursor-pointer border-brand-primary/30 hover:bg-brand-primary/10 text-brand-primary"
                  >
                    Remove
                  </Button>
                ) : (
                  <Button 
                    type="button"
                    disabled={couponLoading || !couponCode}
                    onClick={handleApplyCoupon}
                    className="cursor-pointer bg-brand-navy hover:bg-slate-900 text-white font-bold px-6"
                  >
                    {couponLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Apply'}
                  </Button>
                )}
              </div>

              {couponMessage && (
                <p className={`text-xs font-semibold mt-2 flex items-center gap-1 ${
                  couponStatus === 'success' ? 'text-brand-success' : 'text-brand-primary'
                }`}>
                  {couponStatus === 'success' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                  {couponMessage}
                </p>
              )}

              {/* Quick coupons container */}
              {!appliedCouponData && (
                <div className="flex flex-wrap gap-2 mt-3">
                  <button 
                    onClick={() => { setCouponCode('WELCOME10'); }} 
                    className="text-[11px] font-bold bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg text-slate-600 transition-colors shadow-sm"
                  >
                    WELCOME10 (10% OFF)
                  </button>
                  <button 
                    onClick={() => { setCouponCode('EARLYBIRD'); }} 
                    className="text-[11px] font-bold bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg text-slate-600 transition-colors shadow-sm"
                  >
                    EARLYBIRD (₹1500 OFF)
                  </button>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column: Sticky Order Summary (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-8 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-slate-200 rounded-[32px] p-6 sm:p-8 shadow-md"
            >
              <h2 className="text-xl font-extrabold text-brand-navy mb-6 pb-4 border-b border-slate-100">Order Summary</h2>

              {/* Course Detail Card */}
              <div className="flex gap-4 mb-6">
                {/* Thumbnail placeholder or badge */}
                <div className="w-20 h-20 bg-gradient-to-br from-brand-secondary/20 to-brand-primary/20 border border-slate-100 rounded-2xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-10 h-10 text-brand-secondary opacity-80" />
                </div>
                <div>
                  <span className="text-[10px] font-bold bg-brand-primary/10 text-brand-primary-hover border border-brand-primary/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {course.badge}
                  </span>
                  <h3 className="font-extrabold text-brand-navy text-base mt-2 leading-snug line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-1 font-semibold">Duration: {course.duration}</p>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 border-t border-b border-slate-100 py-5 mb-6">
                <div className="flex justify-between text-sm font-semibold text-slate-600">
                  <span>Original Fee</span>
                  <span className="text-brand-navy">₹{originalPrice.toLocaleString('en-IN')}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-sm font-bold text-brand-success">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5" /> Discount Coupon
                    </span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between text-xs font-semibold text-slate-500 pt-1">
                  <span>Taxable Value (18% inclusive)</span>
                  <span>₹{taxableValue.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between text-xs font-semibold text-slate-500">
                  <span>Integrated GST (IGST 18%)</span>
                  <span>₹{gstAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-base font-extrabold text-brand-navy">Final Amount (Incl. GST)</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-secondary">
                  ₹{finalAmount.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="space-y-4 mb-6">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input 
                    type="checkbox"
                    disabled={isSubmitting}
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="w-5 h-5 rounded border-slate-300 text-brand-secondary bg-slate-50 focus:ring-brand-secondary shrink-0 mt-0.5 accent-brand-secondary cursor-pointer"
                  />
                  <span className="text-xs text-slate-600 leading-normal">
                    I agree to the <a href="#/terms" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:underline font-bold">Terms & Conditions</a>, <a href="#/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:underline font-bold">Privacy Policy</a>, and the refund guidelines.
                  </span>
                </label>
                {formErrors.terms && <p className="text-xs text-brand-primary font-semibold flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {formErrors.terms}</p>}
              </div>

              {/* Submit Error */}
              {errorMessage && (
                <div className="bg-brand-primary/10 border border-brand-primary/20 rounded-2xl p-4 text-xs text-brand-primary flex items-start gap-3 mb-6">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Pay Now Button */}
              <Button 
                onClick={handlePayNow}
                disabled={isSubmitting}
                className="w-full cursor-pointer bg-gradient-to-r from-brand-primary-grad-start to-brand-primary-grad-end text-brand-navy hover:brightness-110 shadow-lg shadow-brand-primary/15 font-extrabold py-6.5 rounded-xl uppercase tracking-widest text-[14px] flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing Payment...
                  </>
                ) : (
                  <>
                    <Lock className="w-4.5 h-4.5" />
                    Pay Securely ₹{finalAmount.toLocaleString('en-IN')}
                  </>
                )}
              </Button>

              {/* Guarantees Badges */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
                <div className="text-center p-3 bg-white/5 rounded-2xl border border-white/5">
                  <ShieldCheck className="w-6 h-6 text-brand-success mx-auto mb-2" />
                  <div className="text-[11px] font-bold text-slate-300">100% SECURE</div>
                  <div className="text-[9px] text-slate-500 uppercase mt-0.5">SSL Encrypted</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-2xl border border-white/5">
                  <CheckCircle2 className="w-6 h-6 text-brand-secondary mx-auto mb-2" />
                  <div className="text-[11px] font-bold text-slate-300">MONEY BACK</div>
                  <div className="text-[9px] text-slate-500 uppercase mt-0.5">Assurance Policy</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
