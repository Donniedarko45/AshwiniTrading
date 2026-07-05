import React, { useState } from 'react';
import { useLeadForm } from '@/hooks/useLeadForm';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Loader2, Check, ChevronDown } from 'lucide-react';
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
  buttonText = 'Book a Free Consultation',
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

  // State to manage input focus for floating glow effect
  const [focusedField, setFocusedField] = useState<string | null>(null);

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center p-8 rounded-2xl glass-card-premium text-white"
      >
        <CheckCircle2 className="w-16 h-16 text-brand-primary mb-6 animate-bounce" />
        <h4 className="text-2xl font-serif font-medium mb-3">Consultation Secured</h4>
        <p className="text-sm text-slate-300 max-w-sm mb-8 leading-relaxed">
          Your personalized roadmap is ready. Our academic counsellor will call you within 15 minutes.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          className="bg-white/10 hover:bg-white/20 text-white border-0 rounded-xl px-6 h-12"
        >
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-6 relative z-10 text-left">
      
      {/* Premium Form Header */}
      <div className="mb-8 text-center sm:text-left">
        <h3 className={`font-serif text-2xl sm:text-[28px] font-medium mb-4 leading-tight tracking-tight ${isLight ? 'text-brand-navy' : 'text-white'}`}>
          Secure Your Free<br />Career Consultation
        </h3>
      </div>

      <div className="space-y-5">
        {/* Name */}
        <div className="space-y-1.5 group">
          <label htmlFor="name-card" className={`text-[13px] font-medium pl-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Full Name *
          </label>
          <div className={`relative transition-all duration-300 rounded-xl border ${isLight ? 'bg-slate-50' : 'bg-white/5'} ${focusedField === 'name' ? 'border-brand-primary shadow-[0_0_15px_rgba(201,162,39,0.15)]' : isLight ? 'border-slate-200 hover:border-slate-300' : 'border-white/10 hover:border-white/20'}`}>
            <Input
              id="name-card"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              aria-invalid={!!errors.name}
              className={`h-14 text-[15px] font-medium rounded-xl bg-transparent border-0 shadow-none focus-visible:ring-0 px-4 ${isLight ? 'text-brand-navy placeholder:text-slate-400' : 'text-white placeholder:text-slate-500'}`}
            />
          </div>
          {errors.name && <span className="text-xs text-brand-error pl-1">{errors.name}</span>}
        </div>

        {/* Phone */}
        <div className="space-y-1.5 group">
          <label htmlFor="phone-card" className={`text-[13px] font-medium pl-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Mobile Number *
          </label>
          <div className={`flex relative transition-all duration-300 rounded-xl border ${isLight ? 'bg-slate-50' : 'bg-white/5'} ${focusedField === 'phone' ? 'border-brand-primary shadow-[0_0_15px_rgba(201,162,39,0.15)]' : isLight ? 'border-slate-200 hover:border-slate-300' : 'border-white/10 hover:border-white/20'}`}>
            <div className={`flex items-center justify-center pl-4 pr-3 border-r select-none ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
              <span className="text-lg mr-2">🇮🇳</span>
              <span className={`font-medium text-[15px] ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>+91</span>
            </div>
            <Input
              id="phone-card"
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="98765 43210"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField(null)}
              aria-invalid={!!errors.phone}
              className={`h-14 flex-1 text-[15px] font-medium rounded-r-xl bg-transparent border-0 shadow-none focus-visible:ring-0 px-4 ${isLight ? 'text-brand-navy placeholder:text-slate-400' : 'text-white placeholder:text-slate-500'}`}
            />
          </div>
          {errors.phone && <span className="text-xs text-brand-error pl-1">{errors.phone}</span>}
        </div>

        {/* Role Dropdown */}
        <div className="space-y-1.5 group">
          <label htmlFor="role-card" className={`text-[13px] font-medium pl-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            I am a...
          </label>
          <div className={`relative transition-all duration-300 rounded-xl border ${isLight ? 'bg-slate-50' : 'bg-white/5'} ${focusedField === 'role' ? 'border-brand-primary shadow-[0_0_15px_rgba(201,162,39,0.15)]' : isLight ? 'border-slate-200 hover:border-slate-300' : 'border-white/10 hover:border-white/20'}`}>
            <select
              id="role-card"
              name="role"
              value={formData.role}
              onChange={handleChange}
              onFocus={() => setFocusedField('role')}
              onBlur={() => setFocusedField(null)}
              className={`w-full appearance-none h-14 rounded-xl bg-transparent border-0 px-4 text-[15px] font-medium focus:outline-none focus:ring-0 cursor-pointer ${isLight ? 'text-brand-navy' : 'text-white'}`}
            >
              <option value="Student" className={isLight ? 'bg-white text-brand-navy' : 'bg-slate-800 text-white'}>Student</option>
              <option value="Working Professional" className={isLight ? 'bg-white text-brand-navy' : 'bg-slate-800 text-white'}>Working Professional</option>
              <option value="Investor" className={isLight ? 'bg-white text-brand-navy' : 'bg-slate-800 text-white'}>Investor</option>
              <option value="Trader" className={isLight ? 'bg-white text-brand-navy' : 'bg-slate-800 text-white'}>Trader</option>
              <option value="Entrepreneur" className={isLight ? 'bg-white text-brand-navy' : 'bg-slate-800 text-white'}>Entrepreneur</option>
              <option value="Homemaker" className={isLight ? 'bg-white text-brand-navy' : 'bg-slate-800 text-white'}>Homemaker</option>
              <option value="Retired Professional" className={isLight ? 'bg-white text-brand-navy' : 'bg-slate-800 text-white'}>Retired Professional</option>
              <option value="Other" className={isLight ? 'bg-white text-brand-navy' : 'bg-slate-800 text-white'}>Other</option>
            </select>
            <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 ${isLight ? 'text-slate-400' : 'text-slate-400'}`}>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Learning Goal Dropdown */}
        <div className="space-y-1.5 group">
          <label htmlFor="learning-goal-card" className={`text-[13px] font-medium pl-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Learning Goal
          </label>
          <div className={`relative transition-all duration-300 rounded-xl border ${isLight ? 'bg-slate-50' : 'bg-white/5'} ${focusedField === 'goal' ? 'border-brand-primary shadow-[0_0_15px_rgba(201,162,39,0.15)]' : isLight ? 'border-slate-200 hover:border-slate-300' : 'border-white/10 hover:border-white/20'}`}>
            <select
              id="learning-goal-card"
              name="learningGoal"
              value={formData.learningGoal}
              onChange={handleChange}
              onFocus={() => setFocusedField('goal')}
              onBlur={() => setFocusedField(null)}
              className={`w-full appearance-none h-14 rounded-xl bg-transparent border-0 px-4 text-[15px] font-medium focus:outline-none focus:ring-0 cursor-pointer ${isLight ? 'text-brand-navy' : 'text-white'}`}
            >
              <option value="Learn Stock Market Basics" className={isLight ? 'bg-white text-brand-navy' : 'bg-slate-800 text-white'}>Learn Stock Market Basics</option>
              <option value="Technical Analysis" className={isLight ? 'bg-white text-brand-navy' : 'bg-slate-800 text-white'}>Technical Analysis</option>
              <option value="Fundamental Analysis" className={isLight ? 'bg-white text-brand-navy' : 'bg-slate-800 text-white'}>Fundamental Analysis</option>
              <option value="Futures & Options" className={isLight ? 'bg-white text-brand-navy' : 'bg-slate-800 text-white'}>Futures & Options</option>
              <option value="Long-Term Investing" className={isLight ? 'bg-white text-brand-navy' : 'bg-slate-800 text-white'}>Long-Term Investing</option>
              <option value="Swing Trading" className={isLight ? 'bg-white text-brand-navy' : 'bg-slate-800 text-white'}>Swing Trading</option>
              <option value="NISM Certification" className={isLight ? 'bg-white text-brand-navy' : 'bg-slate-800 text-white'}>NISM Certification</option>
              <option value="Career in Financial Markets" className={isLight ? 'bg-white text-brand-navy' : 'bg-slate-800 text-white'}>Career in Financial Markets</option>
            </select>
            <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 ${isLight ? 'text-slate-400' : 'text-slate-400'}`}>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Segmented Control for Learning Mode */}
        <div className="space-y-2 pt-2">
          <label className={`text-[13px] font-medium pl-1 block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Preferred Learning Mode
          </label>
          <div className={`flex p-1 rounded-xl border relative ${isLight ? 'bg-slate-100 border-slate-200' : 'bg-white/5 border-white/10'}`}>
            <button
              type="button"
              onClick={() => handleLearningModeChange('Online')}
              className={`flex-1 h-11 text-[13px] font-semibold rounded-lg transition-all duration-300 z-10 ${
                formData.learningMode === 'Online'
                  ? (isLight ? 'bg-white text-brand-navy shadow-sm' : 'bg-white text-brand-navy shadow-sm')
                  : (isLight ? 'text-slate-500 hover:text-brand-navy' : 'text-slate-400 hover:text-white')
              }`}
            >
              Online
            </button>
            <button
              type="button"
              onClick={() => handleLearningModeChange('Classroom')}
              className={`flex-1 h-11 text-[13px] font-semibold rounded-lg transition-all duration-300 z-10 ${
                formData.learningMode === 'Classroom'
                  ? (isLight ? 'bg-white text-brand-navy shadow-sm' : 'bg-white text-brand-navy shadow-sm')
                  : (isLight ? 'text-slate-500 hover:text-brand-navy' : 'text-slate-400 hover:text-white')
              }`}
            >
              Classroom
            </button>
          </div>
        </div>
      </div>

      {/* Animated Submit Button */}
      <div className="pt-4">
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full h-14 flex items-center justify-center bg-cta-gold text-brand-navy font-bold text-[15px] rounded-xl border-0 shadow-brand-gold hover:shadow-brand-gold-lg transition-all duration-300 disabled:opacity-70 disabled:pointer-events-none gap-2 group"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              {buttonText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </motion.button>
        <p className={`text-center text-[12px] mt-4 font-medium tracking-wide ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
          Your information is used only to assist you with course enquiries.
        </p>
      </div>

      {/* Bottom Trust strip */}
      <div className={`pt-6 mt-6 border-t border-dashed space-y-3 ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
        {[
          'SEBI Registered Research Analyst',
          'Practical Market Education',
          'NISM Certification Training',
          'Beginner to Advanced Programs'
        ].map((trust, tIdx) => (
          <div key={tIdx} className="flex items-center gap-2.5">
            <span className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${isLight ? 'bg-brand-success/15 text-brand-success' : 'bg-brand-primary/10 text-brand-primary'}`}>
              <Check className="w-2.5 h-2.5 stroke-[3px]" />
            </span>
            <span className={`text-[13px] font-bold tracking-tight ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
              {trust}
            </span>
          </div>
        ))}
      </div>
    </form>
  );

  return (
    <div className={`rounded-3xl p-8 sm:p-10 relative overflow-hidden ${isLight ? 'bg-white shadow-[0_32px_64px_-16px_rgb(15,23,42,0.1)] border border-slate-200/50' : 'glass-card-premium'}`}>
      {/* Decorative Glow inside card */}
      <div className={`absolute -top-32 -right-32 w-64 h-64 blur-[80px] rounded-full pointer-events-none ${isLight ? 'bg-brand-primary/10' : 'bg-brand-primary/20'}`} />
      {formContent}
    </div>
  );
}
