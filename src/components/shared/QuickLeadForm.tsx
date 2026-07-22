import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SecurityCaptcha } from '@/components/ui/SecurityCaptcha';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

interface QuickLeadFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  interestedCourse?: string;
}

export function QuickLeadForm({
  title = "Get Personalised Course Guidance",
  subtitle = "Fill in your details below and our academic advisor will reach out to help you choose the best program.",
  buttonText = "Request Free Callback",
  interestedCourse = "General Enquiry"
}: QuickLeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Security Captcha Verification State
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: { name?: string; email?: string; phone?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email ID is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email ID';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone) {
      newErrors.phone = 'Mobile Number is required';
    } else if (phoneDigits.length !== 10) {
      newErrors.phone = 'Mobile Number must be 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const sanitized = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, phone: sanitized }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    if (!isCaptchaVerified) {
      setCaptchaError('Please type the correct captcha code.');
      return;
    }
    setCaptchaError(null);

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: 'N/A',
          interestedCourse: interestedCourse,
          learningMode: 'Online',
          message: 'Submitted via Quick Lead Form'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit enquiry');
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '' });
      setErrors({});
    } catch (err) {
      console.error('Form submission failed:', err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border border-slate-200/80 rounded-[24px] p-8 text-center shadow-[0_20px_50px_-15px_rgba(15,23,42,0.06)] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-primary to-brand-secondary" />
        <div className="flex flex-col items-center justify-center pt-2">
          <div className="w-14 h-14 rounded-full bg-brand-success/15 text-brand-success flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-extrabold text-brand-navy mb-2">Request Submitted Successfully!</h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
            Thank you! Our academic counsellor will reach out to you shortly.
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            variant="dark"
            size="lg"
            className="cursor-pointer font-bold rounded-xl"
          >
            Submit Another Request
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-white border border-slate-200/80 rounded-[24px] p-6 sm:p-8 text-left shadow-[0_20px_50px_-15px_rgba(15,23,42,0.06)] max-w-2xl mx-auto relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-primary to-brand-secondary" />

      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy tracking-tight mb-1.5">
          {title}
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label htmlFor="quick-name" className="text-xs font-bold text-slate-700 pl-1 block">
              Full Name *
            </label>
            <div className={`relative transition-all duration-200 rounded-xl border ${errors.name ? 'border-brand-error' : 'border-slate-200 hover:border-slate-300 focus-within:border-brand-primary focus-within:ring-2 focus-within:ring-brand-primary/20'} bg-slate-50/50`}>
              <Input
                id="quick-name"
                name="name"
                type="text"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                className="h-11 text-sm font-semibold rounded-xl bg-transparent border-0 focus-visible:ring-0 px-3.5 text-brand-navy placeholder:text-slate-400"
              />
            </div>
            {errors.name && <span className="text-xs font-medium text-brand-error pl-1">{errors.name}</span>}
          </div>

          {/* Email ID */}
          <div className="space-y-1.5">
            <label htmlFor="quick-email" className="text-xs font-bold text-slate-700 pl-1 block">
              Email ID *
            </label>
            <div className={`relative transition-all duration-200 rounded-xl border ${errors.email ? 'border-brand-error' : 'border-slate-200 hover:border-slate-300 focus-within:border-brand-primary focus-within:ring-2 focus-within:ring-brand-primary/20'} bg-slate-50/50`}>
              <Input
                id="quick-email"
                name="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                className="h-11 text-sm font-semibold rounded-xl bg-transparent border-0 focus-visible:ring-0 px-3.5 text-brand-navy placeholder:text-slate-400"
              />
            </div>
            {errors.email && <span className="text-xs font-medium text-brand-error pl-1">{errors.email}</span>}
          </div>

          {/* Phone Number */}
          <div className="space-y-1.5">
            <label htmlFor="quick-phone" className="text-xs font-bold text-slate-700 pl-1 block">
              Mobile Number *
            </label>
            <div className={`flex items-center transition-all duration-200 rounded-xl border ${errors.phone ? 'border-brand-error' : 'border-slate-200 hover:border-slate-300 focus-within:border-brand-primary focus-within:ring-2 focus-within:ring-brand-primary/20'} bg-slate-50/50 overflow-hidden`}>
              <div className="flex items-center gap-1 px-3 h-11 bg-slate-100 border-r border-slate-200 text-xs font-bold text-slate-700 select-none shrink-0">
                <span>🇮🇳</span>
                <span>+91</span>
              </div>
              <Input
                id="quick-phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                placeholder="10-digit number"
                value={formData.phone}
                onChange={handleChange}
                aria-invalid={!!errors.phone}
                className="h-11 flex-1 text-sm font-semibold rounded-none bg-transparent border-0 focus-visible:ring-0 px-3 text-brand-navy placeholder:text-slate-400"
              />
            </div>
            {errors.phone && <span className="text-xs font-medium text-brand-error pl-1">{errors.phone}</span>}
          </div>

          {/* Security Captcha Canvas */}
          <SecurityCaptcha
            idPrefix="quick"
            theme="light"
            error={captchaError}
            onVerify={(valid) => {
              setIsCaptchaVerified(valid);
              if (valid && captchaError) setCaptchaError(null);
            }}
          />
        </div>

        <div className="pt-2 flex justify-end">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 h-12 bg-gradient-to-r from-brand-primary-grad-start to-brand-primary-grad-end hover:brightness-110 text-brand-navy font-extrabold text-sm tracking-wider uppercase rounded-xl shadow-lg shadow-brand-primary/15 cursor-pointer transition-all flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                {buttonText}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
