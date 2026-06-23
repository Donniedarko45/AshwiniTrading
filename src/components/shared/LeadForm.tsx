import React from 'react';
import { useLeadForm } from '@/hooks/useLeadForm';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface LeadFormProps {
  layout?: 'card' | 'bar';
  theme?: 'light' | 'dark';
  buttonText?: string;
  showRoleSelect?: boolean;
  onSuccess?: () => void;
}

export function LeadForm({
  layout = 'card',
  theme = 'light',
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
          isLight ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-emerald-950/30 text-emerald-100 border border-emerald-800'
        }`}
      >
        <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-4 animate-bounce" />
        <h4 className="text-xl font-extrabold mb-2">Application Received!</h4>
        <p className="text-sm font-medium opacity-90 max-w-sm mb-6">
          Thank you for applying. One of our career advisors will call you back within 15 minutes to verify your details and block your seat.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
          className={isLight ? 'border-emerald-300 hover:bg-emerald-100' : 'border-emerald-700 hover:bg-emerald-900 text-white'}
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
              className={`h-14 bg-white text-base rounded-xl placeholder:text-slate-400 focus-visible:ring-brand-orange border-slate-200 text-slate-900`}
            />
            {errors.name && (
              <span id="name-bar-error" className="text-xs font-bold text-red-500 mt-1 block">
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
                className="w-16 bg-slate-50 text-slate-600 font-semibold h-14 text-center border-slate-200 px-0 rounded-xl"
              />
              <Input
                id="phone-bar"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="10-digit mobile"
                value={formData.phone}
                onChange={handleChange}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-bar-error" : undefined}
                className={`flex-1 h-14 bg-white text-base rounded-xl placeholder:text-slate-400 focus-visible:ring-brand-orange border-slate-200 text-slate-900`}
              />
            </div>
            {errors.phone && (
              <span id="phone-bar-error" className="text-xs font-bold text-red-500 mt-1 block">
                {errors.phone}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full md:w-[30%]">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-brand-orange hover:bg-brand-orange-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 text-white border-0 font-black text-[15px] tracking-wide rounded-xl shadow-lg shadow-orange-500/20 uppercase transition-all flex items-center justify-center gap-2"
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
        <div className={`text-center text-[12px] font-bold mt-4 tracking-wide flex items-center justify-center gap-1.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
          <span className="text-[#FFB800] text-sm">★</span>
          <span>4.9/5 Rated on CourseReport & Google Reviews (1,240+ Verified Student Reviews)</span>
        </div>
      </form>
    );
  }

  // Card Variant
  return (
    <div className={`rounded-[24px] p-8 md:p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)] relative overflow-hidden ${
      isLight ? 'bg-white border border-slate-100' : 'bg-white/5 backdrop-blur-2xl border border-white/10'
    }`}>
      {/* Top indicator stripe */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-orange via-brand-purple to-brand-blue" />
      
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
            className={`h-14 text-base rounded-xl placeholder:text-slate-400 focus-visible:ring-brand-orange focus-visible:bg-white transition-all shadow-none ${
              isLight ? 'border-slate-200 bg-slate-50 text-slate-900' : 'border-white/10 bg-white/5 text-white'
            }`}
          />
          {errors.name && (
            <span id="name-card-error" className="text-xs font-bold text-red-500 mt-1 block">
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
              autoComplete="tel"
              placeholder="10-digit mobile"
              value={formData.phone}
              onChange={handleChange}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-card-error" : undefined}
              className={`flex-1 h-14 text-base rounded-xl placeholder:text-slate-400 focus-visible:ring-brand-orange focus-visible:bg-white transition-all shadow-none ${
                isLight ? 'border-slate-200 bg-slate-50 text-slate-900' : 'border-white/10 bg-white/5 text-white'
              }`}
            />
          </div>
          {errors.phone && (
            <span id="phone-card-error" className="text-xs font-bold text-red-500 mt-1 block">
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
                className={`w-full appearance-none h-14 rounded-xl border px-4 text-base focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all font-medium ${
                  isLight ? 'border-slate-200 bg-slate-50 text-slate-700' : 'border-white/10 bg-[#161226] text-slate-300'
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
          className="w-full h-14 flex items-center justify-center bg-gradient-to-r from-brand-orange-grad-start to-brand-orange-grad-end hover:from-brand-orange hover:to-brand-orange-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 text-white font-bold text-lg tracking-wide rounded-xl shadow-lg shadow-orange-500/20 mt-6 border-0 transition-all uppercase disabled:opacity-75 disabled:pointer-events-none gap-2"
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
        <div className={`text-center text-[12px] font-bold mt-4 tracking-wide flex items-center justify-center gap-1.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
          <span className="text-[#FFB800] text-sm">★</span>
          <span>4.9/5 Rated on CourseReport & Google Reviews</span>
        </div>
      </form>
    </div>
  );
}
