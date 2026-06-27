import React from 'react';
import { useLeadForm } from '@/hooks/useLeadForm';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Loader2, Check } from 'lucide-react';
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
  buttonText = 'Request a Callback',
  showRoleSelect = true,
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
    handleLearningGoalChange,
    handleLearningModeChange,
    handleSubmit
  } = useLeadForm({
    initialRole: 'Student',
    initialLearningGoal: 'Learn Stock Market Basics',
    initialLearningMode: 'Online',
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
        <h4 className="text-xl font-extrabold mb-2">Thank you!</h4>
        <p className="text-sm font-medium opacity-90 max-w-sm mb-6">
          Our academic counsellor will get in touch with you shortly to assist you with your learning goals.
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

  // The actual form fields content
  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-5 relative z-10 text-left">
      {/* Name */}
      <div className="space-y-2 text-left group">
        <label htmlFor="name-card" className={`text-sm font-bold block ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
          Full Name *
        </label>
        <Input
          id="name-card"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-card-error" : undefined}
          className={`h-14 text-base rounded-xl placeholder:text-slate-400 focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:bg-white transition-all shadow-none ${
            isLight ? 'border-slate-200 bg-slate-50 text-slate-900' : 'border-slate-700/80 bg-slate-950/65 text-white focus:bg-slate-950'
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
          Mobile Number *
        </label>
        <div className="flex gap-2">
          <Input
            value="+91"
            readOnly
            aria-label="Country Code"
            className={`w-20 font-semibold h-14 text-center rounded-xl shadow-none ${
              isLight ? 'bg-slate-100 border-slate-200 text-slate-600' : 'bg-slate-950/65 border-slate-700/80 text-slate-300'
            }`}
          />
          <Input
            id="phone-card"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-card-error" : undefined}
            className={`flex-1 h-14 text-base rounded-xl placeholder:text-slate-400 focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:bg-white transition-all shadow-none ${
              isLight ? 'border-slate-200 bg-slate-50 text-slate-900' : 'border-slate-700/80 bg-slate-950/65 text-white focus:bg-slate-950'
            }`}
          />
        </div>
        {errors.phone && (
          <span id="phone-card-error" className="text-xs font-bold text-brand-error mt-1 block">
            {errors.phone}
          </span>
        )}
      </div>

      {/* Role Dropdown */}
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
            className={`w-full appearance-none h-14 rounded-xl border px-4 text-base focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring transition-all font-semibold ${
              isLight 
                ? 'border-slate-200 bg-slate-50 text-slate-700 focus:bg-white' 
                : 'border-slate-700/80 bg-slate-950/65 text-slate-200 focus:bg-slate-950'
            }`}
          >
            <option value="Student">Student</option>
            <option value="Working Professional">Working Professional</option>
            <option value="Investor">Investor</option>
            <option value="Trader">Trader</option>
            <option value="Entrepreneur">Entrepreneur</option>
            <option value="Homemaker">Homemaker</option>
            <option value="Retired Professional">Retired Professional</option>
            <option value="Other">Other</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Learning Goal Dropdown */}
      <div className="space-y-2 text-left group">
        <label htmlFor="learning-goal-card" className={`text-sm font-bold block ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
          Learning Goal
        </label>
        <div className="relative">
          <select
            id="learning-goal-card"
            name="learningGoal"
            value={formData.learningGoal}
            onChange={handleChange}
            className={`w-full appearance-none h-14 rounded-xl border px-4 text-base focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring transition-all font-semibold ${
              isLight 
                ? 'border-slate-200 bg-slate-50 text-slate-700 focus:bg-white' 
                : 'border-slate-700/80 bg-slate-950/65 text-slate-200 focus:bg-slate-950'
            }`}
          >
            <option value="Learn Stock Market Basics">Learn Stock Market Basics</option>
            <option value="Technical Analysis">Technical Analysis</option>
            <option value="Fundamental Analysis">Fundamental Analysis</option>
            <option value="Futures & Options">Futures & Options</option>
            <option value="Long-Term Investing">Long-Term Investing</option>
            <option value="Swing Trading">Swing Trading</option>
            <option value="NISM Certification">NISM Certification</option>
            <option value="Career in Financial Markets">Career in Financial Markets</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Learning Mode */}
      <div className="space-y-2 text-left">
        <label className={`text-sm font-bold block ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
          Preferred Learning Mode
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => handleLearningModeChange('Online')}
            className={`h-14 rounded-xl border flex items-center justify-center gap-2 font-bold text-sm cursor-pointer transition-all ${
              formData.learningMode === 'Online'
                ? isLight 
                  ? 'border-brand-primary bg-brand-primary/10 text-brand-navy shadow-sm'
                  : 'border-brand-primary bg-brand-primary/10 text-white shadow-sm'
                : isLight
                  ? 'border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                  : 'border-slate-700/80 bg-slate-950/65 text-slate-400 hover:bg-slate-900 hover:text-white'
            }`}
          >
            Online
          </button>
          <button
            type="button"
            onClick={() => handleLearningModeChange('Classroom')}
            className={`h-14 rounded-xl border flex items-center justify-center gap-2 font-bold text-sm cursor-pointer transition-all ${
              formData.learningMode === 'Classroom'
                ? isLight
                  ? 'border-brand-secondary bg-brand-secondary/10 text-brand-navy shadow-sm'
                  : 'border-brand-secondary bg-brand-secondary/10 text-white shadow-sm'
                : isLight
                  ? 'border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                  : 'border-slate-700/80 bg-slate-950/65 text-slate-400 hover:bg-slate-900 hover:text-white'
            }`}
          >
            Classroom
          </button>
        </div>
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full h-14 flex items-center justify-center bg-gradient-to-r from-brand-primary-grad-start to-brand-primary-grad-end hover:brightness-110 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 text-brand-navy font-extrabold text-base sm:text-lg tracking-wide rounded-xl shadow-lg shadow-brand-primary/15 mt-6 border-0 transition-all duration-250 ease-out uppercase disabled:opacity-75 disabled:pointer-events-none gap-2"
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

      {/* Bottom premium trust notice */}
      <div className={`text-center text-xs font-semibold mt-6 tracking-wide leading-relaxed ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
        Your information is used only to assist you with course enquiries.
      </div>
      
      {/* Bottom Trust strip */}
      <div className="pt-6 mt-6 border-t border-dashed border-slate-700/30 space-y-3.5">
        {[
          'Personalised Course Guidance',
          'Beginner-Friendly Programs',
          'NISM Certification Training',
          'Response During Business Hours'
        ].map((trust, tIdx) => (
          <div key={tIdx} className="flex items-center gap-2.5">
            <span className="flex-shrink-0 w-4 h-4 rounded-full bg-brand-success/10 text-brand-success flex items-center justify-center">
              <Check className="w-2.5 h-2.5 stroke-[3px]" />
            </span>
            <span className={`text-[13px] font-bold tracking-tight ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
              {trust}
            </span>
          </div>
        ))}
      </div>

      {/* SEBI Registration */}
      <div className="pt-4 text-center">
        <div className={`text-[11px] font-bold tracking-widest uppercase mb-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
          SEBI Registered Research Analyst
        </div>
        <div className="text-[11px] font-extrabold text-brand-primary tracking-wide">
          Reg. No. INH000024453
        </div>
      </div>
    </form>
  );

  if (layout === 'flat') {
    return formContent;
  }

  // Card Variant (default wrapper card)
  return (
    <div className={`rounded-[28px] p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] relative overflow-hidden ${
      isLight ? 'bg-white border border-slate-100' : 'bg-slate-900/60 backdrop-blur-2xl border border-white/10'
    }`}>
      {formContent}
    </div>
  );
}
