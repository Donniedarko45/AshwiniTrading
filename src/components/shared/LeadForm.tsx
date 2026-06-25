import React from 'react';
import { useLeadForm } from '@/hooks/useLeadForm';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface LeadFormProps {
  layout?: 'card' | 'bar' | 'flat';
  theme?: 'light' | 'dark';
  buttonText?: string;
  showRoleSelect?: boolean;
  onSuccess?: () => void;
}

export function LeadForm({
  layout = 'card',
  theme = 'dark',
  buttonText = 'START YOUR DM CAREER',
  showRoleSelect = false,
  onSuccess
}: LeadFormProps) {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    setIsSuccess,
    handleChange,
    handleRoleChange,
    handleSubmit
  } = useLeadForm({
    initialRole: 'Choose one',
    onSubmitSuccess: () => {
      if (onSuccess) onSuccess();
    }
  });

  const isLight = theme === 'light';

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex flex-col items-center justify-center text-center p-8 rounded-2xl ${
          isLight ? 'bg-brand-success-soft text-brand-success border border-brand-success/25' : 'bg-brand-success/10 text-brand-success-light border border-brand-success/30'
        }`}
      >
        <CheckCircle2 className="w-12 h-12 text-brand-success mb-4 animate-bounce" />
        <h4 className="text-xl font-extrabold mb-2">Application Received!</h4>
        <p className="text-sm font-medium opacity-90 max-w-sm mb-6">
          Thank you for applying. One of our career advisors will call you back within 15 minutes to verify your details and block your seat.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
          className={isLight ? 'border-brand-success/30 hover:bg-brand-success/10' : 'border-brand-success/30 hover:bg-brand-success/20 text-white'}
        >
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  if (layout === 'bar') {
    return (
      <form onSubmit={handleSubmit} className="w-full">
        <div className={`rounded-3xl p-6 sm:p-5 shadow-2xl flex flex-col md:flex-row gap-4 items-end max-w-4xl mx-auto ${
          isLight ? 'bg-white border border-slate-100' : 'bg-white/5 backdrop-blur-xl border border-white/10'
        }`}>
          {/* Name Field */}
          <div className="w-full md:w-[35%] text-left">
            <label htmlFor="name-bar" className={`text-sm font-bold mb-2 block ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
              Name
            </label>
            <Input
              id="name-bar"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-bar-error" : undefined}
              className={`h-14 text-base rounded-xl placeholder:text-slate-400 focus-visible:ring-ring/50 focus-visible:border-ring transition-all ${
                isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-white/5 border-white/10 text-white focus-visible:bg-slate-950/40'
              }`}
            />
            {errors.name && (
              <span id="name-bar-error" className="text-xs font-bold text-brand-error mt-1 block">
                {errors.name}
              </span>
            )}
          </div>

          {/* Phone Field */}
          <div className="w-full md:w-[35%] text-left">
            <label htmlFor="phone-bar" className={`text-sm font-bold mb-2 block ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
              Phone
            </label>
            <div className="flex gap-2">
              <Input
                value="+91"
                readOnly
                aria-label="Country Code"
                className={`w-16 font-semibold h-14 text-center px-0 rounded-xl ${
                  isLight ? 'bg-slate-50 border-slate-200 text-slate-600' : 'bg-white/10 border-white/10 text-slate-300'
                }`}
              />
              <Input
                id="phone-bar"
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="10-digit mobile"
                value={formData.phone}
                onChange={handleChange}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-bar-error" : undefined}
                className={`flex-1 h-14 text-base rounded-xl placeholder:text-slate-400 focus-visible:ring-ring/50 focus-visible:border-ring transition-all ${
                  isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-white/5 border-white/10 text-white focus-visible:bg-slate-950/40'
                }`}
              />
            </div>
            {errors.phone && (
              <span id="phone-bar-error" className="text-xs font-bold text-brand-error mt-1 block">
                {errors.phone}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full md:w-[30%]">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 text-slate-950 font-extrabold text-[15px] rounded-xl flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  {buttonText}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>
        <div className={`text-center text-[12px] font-bold mt-4 tracking-wide flex items-center justify-center gap-1.5 ${isLight ? 'text-slate-500' : 'text-brand-primary-light/95'}`}>
          <span className="text-brand-primary text-sm">★</span>
          <span>4.9/5 Rated on CourseReport & Google Reviews (1,240+ Verified Student Reviews)</span>
        </div>
      </form>
    );
  }

  // The actual form fields content
  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
      {/* Name */}
      <div className="space-y-2 text-left group">
        <label htmlFor="name-card" className={`text-sm font-bold block ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
          Name
        </label>
        <Input
          id="name-card"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-card-error" : undefined}
          className={`h-14 text-base rounded-xl placeholder:text-slate-400 focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:bg-white transition-all shadow-none ${
            isLight ? 'border-slate-200 bg-slate-50 text-slate-900' : 'border-white/10 bg-white/5 text-white'
          }`}
        />
        {errors.name && (
          <span id="name-card-error" className="text-xs font-bold text-brand-error mt-1 block">
            {errors.name}
          </span>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-2 text-left group">
        <label htmlFor="phone-card" className={`text-sm font-bold block ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
          Phone Number
        </label>
        <div className="flex gap-2">
          <Input
            value="+91"
            readOnly
            aria-label="Country Code"
            className={`w-20 font-semibold h-14 text-center rounded-xl shadow-none ${
              isLight ? 'bg-slate-100 border-slate-200 text-slate-600' : 'bg-white/10 border-white/10 text-slate-300'
            }`}
          />
          <Input
            id="phone-card"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="10-digit mobile"
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-card-error" : undefined}
            className={`flex-1 h-14 text-base rounded-xl placeholder:text-slate-400 focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:bg-white transition-all shadow-none ${
              isLight ? 'border-slate-200 bg-slate-50 text-slate-900' : 'border-white/10 bg-white/5 text-white'
            }`}
          />
        </div>
        {errors.phone && (
          <span id="phone-card-error" className="text-xs font-bold text-brand-error mt-1 block">
            {errors.phone}
          </span>
        )}
      </div>

      {/* Optional Role Select */}
      {showRoleSelect && (
        <div className="space-y-2 text-left group">
          <label htmlFor="role-card" className={`text-sm font-bold block ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
            I am a...
          </label>
          <div className="relative">
            <select
              id="role-card"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={`w-full appearance-none h-14 rounded-xl border px-4 text-base focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring transition-all font-medium ${
                isLight ? 'border-slate-200 bg-slate-50 text-slate-700' : 'border-white/10 bg-brand-bg-card text-slate-300'
              }`}
            >
              <option value="Choose one">Choose one</option>
              <option value="Student">Student</option>
              <option value="Working Professional">Working Professional</option>
              <option value="Entrepreneur">Entrepreneur</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full h-14 flex items-center justify-center bg-gradient-to-r from-brand-primary-grad-start to-brand-primary-grad-end hover:brightness-110 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 text-slate-950 font-extrabold text-base sm:text-lg tracking-wide rounded-xl shadow-lg shadow-brand-primary/15 mt-6 border-0 transition-all duration-250 ease-out uppercase disabled:opacity-75 disabled:pointer-events-none gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </motion.button>
      <div className={`text-center text-[12px] font-bold mt-4 tracking-wide flex items-center justify-center gap-1.5 ${isLight ? 'text-slate-500' : 'text-brand-primary-light/95'}`}>
        <span className="text-brand-primary text-sm">★</span>
        <span>4.9/5 Rated on CourseReport & Google Reviews</span>
      </div>
    </form>
  );

  if (layout === 'flat') {
    return formContent;
  }

  // Card Variant (default wrapper card)
  return (
    <div className={`rounded-[24px] p-5 sm:p-8 md:p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)] relative overflow-hidden ${
      isLight ? 'bg-white border border-slate-100' : 'bg-white/5 backdrop-blur-2xl border border-white/10'
    }`}>
      {/* Top indicator stripe */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-primary to-brand-secondary" />
      {formContent}
    </div>
  );
}
