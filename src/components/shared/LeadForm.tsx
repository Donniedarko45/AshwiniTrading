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
  buttonText = 'Book My Free Demo Class',
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
    initialLearningGoal: 'Basics of Financial Markets',
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
        <h4 className="text-2xl font-serif font-medium mb-3">Demo Class Booked!</h4>
        <p className="text-sm text-slate-300 max-w-sm mb-8 leading-relaxed">
          Thank you! Our academic counsellor will be in touch with you shortly to guide you.
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
    <form onSubmit={handleSubmit} className="space-y-4 relative z-10 text-left">
      
      {/* Form Header */}
      <div className="mb-4 text-center sm:text-left">
        <h3 className={`font-serif text-xl sm:text-2xl font-medium mb-1.5 leading-tight tracking-tight ${isLight ? 'text-brand-navy' : 'text-white'}`}>
          Start Your Learning Journey
        </h3>
        <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
          Fill in your details and our academic counsellor will help you choose the right learning program.
        </p>
      </div>

      <div className="space-y-3.5">
        {/* Name and Email Row */}
        <div className="grid sm:grid-cols-2 gap-3.5">
          {/* Full Name */}
          <div className="space-y-1 group">
            <label htmlFor="name-card" className={`text-xs font-semibold pl-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              Full Name *
            </label>
            <div className={`relative transition-all duration-300 rounded-xl border ${isLight ? 'bg-slate-50' : 'bg-white/5'} ${focusedField === 'name' ? 'border-brand-primary shadow-[0_0_12px_rgba(201,162,39,0.12)]' : isLight ? 'border-slate-200 hover:border-slate-300' : 'border-white/10 hover:border-white/20'}`}>
              <Input
                id="name-card"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                aria-invalid={!!errors.name}
                className={`h-12 text-[14px] font-semibold rounded-xl bg-transparent border-0 shadow-none focus-visible:ring-0 px-3.5 ${isLight ? 'text-brand-navy placeholder:text-slate-400 font-bold' : 'text-white placeholder:text-slate-500'}`}
              />
            </div>
            {errors.name && <span className="text-[11px] text-brand-error pl-1">{errors.name}</span>}
          </div>

          {/* Email Address */}
          <div className="space-y-1 group">
            <label htmlFor="email-card" className={`text-xs font-semibold pl-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              Email Address *
            </label>
            <div className={`relative transition-all duration-300 rounded-xl border ${isLight ? 'bg-slate-50' : 'bg-white/5'} ${focusedField === 'email' ? 'border-brand-primary shadow-[0_0_12px_rgba(201,162,39,0.12)]' : isLight ? 'border-slate-200 hover:border-slate-300' : 'border-white/10 hover:border-white/20'}`}>
              <Input
                id="email-card"
                name="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                aria-invalid={!!errors.email}
                className={`h-12 text-[14px] font-semibold rounded-xl bg-transparent border-0 shadow-none focus-visible:ring-0 px-3.5 ${isLight ? 'text-brand-navy placeholder:text-slate-400 font-bold' : 'text-white placeholder:text-slate-500'}`}
              />
            </div>
            {errors.email && <span className="text-[11px] text-brand-error pl-1">{errors.email}</span>}
          </div>
        </div>

        {/* Mobile and City Row */}
        <div className="grid sm:grid-cols-2 gap-3.5">
          {/* Mobile Number */}
          <div className="space-y-1 group">
            <label htmlFor="phone-card" className={`text-xs font-semibold pl-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              Mobile Number *
            </label>
            <div className={`flex relative transition-all duration-300 rounded-xl border ${isLight ? 'bg-slate-50' : 'bg-white/5'} ${focusedField === 'phone' ? 'border-brand-primary shadow-[0_0_12px_rgba(201,162,39,0.12)]' : isLight ? 'border-slate-200 hover:border-slate-300' : 'border-white/10 hover:border-white/20'}`}>
              <div className={`flex items-center justify-center pl-3 pr-2.5 border-r select-none ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
                <span className="text-base mr-1.5">🇮🇳</span>
                <span className={`font-bold text-[14px] ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>+91</span>
              </div>
              <Input
                id="phone-card"
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="10-digit number"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                aria-invalid={!!errors.phone}
                className={`h-12 flex-1 text-[14px] font-semibold rounded-r-xl bg-transparent border-0 shadow-none focus-visible:ring-0 px-3.5 ${isLight ? 'text-brand-navy placeholder:text-slate-400 font-bold' : 'text-white placeholder:text-slate-500'}`}
              />
            </div>
            {errors.phone && <span className="text-[11px] text-brand-error pl-1">{errors.phone}</span>}
          </div>

          {/* City */}
          <div className="space-y-1 group">
            <label htmlFor="city-card" className={`text-xs font-semibold pl-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              City *
            </label>
            <div className={`relative transition-all duration-300 rounded-xl border ${isLight ? 'bg-slate-50' : 'bg-white/5'} ${focusedField === 'city' ? 'border-brand-primary shadow-[0_0_12px_rgba(201,162,39,0.12)]' : isLight ? 'border-slate-200 hover:border-slate-300' : 'border-white/10 hover:border-white/20'}`}>
              <Input
                id="city-card"
                name="city"
                type="text"
                placeholder="e.g. Bengaluru"
                value={formData.city}
                onChange={handleChange}
                onFocus={() => setFocusedField('city')}
                onBlur={() => setFocusedField(null)}
                aria-invalid={!!errors.city}
                className={`h-12 text-[14px] font-semibold rounded-xl bg-transparent border-0 shadow-none focus-visible:ring-0 px-3.5 ${isLight ? 'text-brand-navy placeholder:text-slate-400 font-bold' : 'text-white placeholder:text-slate-500'}`}
              />
            </div>
            {errors.city && <span className="text-[11px] text-brand-error pl-1">{errors.city}</span>}
          </div>
        </div>

        {/* Preferred Learning Mode — Segmented Control */}
        <div className="space-y-1">
          <label className={`text-xs font-semibold pl-1 block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Preferred Learning Mode
          </label>
          <div className={`flex p-1 rounded-xl border relative ${isLight ? 'bg-slate-100 border-slate-200' : 'bg-white/5 border-white/10'}`}>
            {(['Online', 'Classroom', 'Hybrid'] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => handleLearningModeChange(mode)}
                className={`flex-1 h-10 text-xs font-bold rounded-lg transition-all duration-300 z-10 ${
                  formData.learningMode === mode
                    ? 'bg-white text-brand-navy shadow-sm'
                    : (isLight ? 'text-slate-500 hover:text-brand-navy font-semibold' : 'text-slate-400 hover:text-white')
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Course Interested In Dropdown */}
        <div className="space-y-1 group">
          <label htmlFor="learning-goal-card" className={`text-xs font-semibold pl-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Course Interested In
          </label>
          <div className={`relative transition-all duration-300 rounded-xl border ${isLight ? 'bg-slate-50' : 'bg-white/5'} ${focusedField === 'goal' ? 'border-brand-primary shadow-[0_0_12px_rgba(201,162,39,0.12)]' : isLight ? 'border-slate-200 hover:border-slate-300' : 'border-white/10 hover:border-white/20'}`}>
            <select
              id="learning-goal-card"
              name="learningGoal"
              value={formData.learningGoal}
              onChange={handleChange}
              onFocus={() => setFocusedField('goal')}
              onBlur={() => setFocusedField(null)}
              className={`w-full appearance-none h-12 rounded-xl bg-transparent border-0 px-3.5 text-[14px] font-semibold focus:outline-none focus:ring-0 cursor-pointer ${isLight ? 'text-brand-navy font-bold' : 'text-white'}`}
            >
              <option value="Basics of Financial Markets" className={isLight ? 'bg-white text-brand-navy font-bold' : 'bg-slate-800 text-white'}>Basics of Financial Markets</option>
              <option value="Fundamental Analysis" className={isLight ? 'bg-white text-brand-navy font-bold' : 'bg-slate-800 text-white'}>Fundamental Analysis</option>
              <option value="Technical Analysis" className={isLight ? 'bg-white text-brand-navy font-bold' : 'bg-slate-800 text-white'}>Technical Analysis</option>
              <option value="Futures & Options" className={isLight ? 'bg-white text-brand-navy font-bold' : 'bg-slate-800 text-white'}>Futures & Options</option>
              <option value="Complete Stock Market Program" className={isLight ? 'bg-white text-brand-navy font-bold' : 'bg-slate-800 text-white'}>Complete Stock Market Program</option>
              <option value="AI for Financial Markets" className={isLight ? 'bg-white text-brand-navy font-bold' : 'bg-slate-800 text-white'}>AI for Financial Markets</option>
            </select>
            <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 ${isLight ? 'text-slate-400' : 'text-slate-400'}`}>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Message (Optional) */}
        <div className="space-y-1 group">
          <label htmlFor="message-card" className={`text-xs font-semibold pl-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Message (Optional)
          </label>
          <div className={`relative transition-all duration-300 rounded-xl border ${isLight ? 'bg-slate-50' : 'bg-white/5'} ${focusedField === 'message' ? 'border-brand-primary shadow-[0_0_12px_rgba(201,162,39,0.12)]' : isLight ? 'border-slate-200 hover:border-slate-300' : 'border-white/10 hover:border-white/20'}`}>
            <textarea
              id="message-card"
              name="message"
              rows={2}
              placeholder="Any details or questions..."
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              className={`w-full text-[14px] font-semibold rounded-xl bg-transparent border-0 focus:outline-none p-3 ${isLight ? 'text-brand-navy placeholder:text-slate-400 font-bold' : 'text-white placeholder:text-slate-500'}`}
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full h-12 flex items-center justify-center bg-cta-gold text-brand-navy font-bold text-[14px] rounded-xl border-0 shadow-brand-gold hover:shadow-brand-gold-lg transition-all duration-300 disabled:opacity-70 disabled:pointer-events-none gap-2 group cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              {buttonText}
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </motion.button>
      </div>

      {/* Below Form Trust Points */}
      <div className={`pt-4 mt-2 border-t border-dashed space-y-3 ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
        {[
          'Free Academic Counselling',
          'Personalized Course Guidance',
          'No Obligation to Enroll'
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
