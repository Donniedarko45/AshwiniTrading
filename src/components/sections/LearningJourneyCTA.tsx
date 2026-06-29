import React, { useState } from 'react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { Check, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useLeadForm } from '@/hooks/useLeadForm';

export default function LearningJourneyCTA() {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    setIsSuccess,
    handleChange,
    handleSubmit
  } = useLeadForm({
    initialRole: 'Student',
    initialLearningGoal: 'Learn Stock Market Basics',
    initialLearningMode: 'Online',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column: Copy */}
          <div>
            <motion.div variants={fadeIn} className="mb-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="text-xs font-semibold tracking-widest text-slate-300 uppercase">
                Learn from a SEBI Registered Research Analyst
              </span>
            </motion.div>
            
            <motion.h2 variants={fadeIn} className="font-serif text-4xl sm:text-5xl font-medium text-white mb-6 leading-tight">
              Begin Your <span className="text-brand-primary italic">Learning Journey</span>
            </motion.h2>
            
            <motion.p variants={fadeIn} className="text-slate-300 text-lg leading-relaxed mb-10 max-w-lg">
              Take the first step towards building a strong foundation in the stock market. Fill in your details, and our academic counsellor will help you choose the program that best matches your learning goals.
            </motion.p>
            
            <motion.div variants={fadeIn} className="space-y-4">
              {[
                'Personalised Course Guidance',
                'Online & Offline Programs',
                'Response Within Business Hours'
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-brand-primary stroke-[3px]" />
                  </div>
                  <span className="text-slate-200 font-medium">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div variants={fadeIn}>
            <div className="glass-card-premium rounded-3xl p-8 sm:p-10 relative overflow-hidden">
              {/* Internal glow */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-primary/20 blur-[80px] rounded-full pointer-events-none" />
              
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <CheckCircle2 className="w-16 h-16 text-brand-primary mb-6 animate-bounce" />
                  <h4 className="text-2xl font-serif font-medium mb-3 text-white">Request Received</h4>
                  <p className="text-sm text-slate-300 max-w-sm mb-8 leading-relaxed">
                    Thank you! Our academic counsellor will be in touch with you shortly to guide you.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="bg-white/10 hover:bg-white/20 text-white transition-colors border-0 rounded-xl px-6 h-12 font-medium"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="space-y-1.5 group">
                    <label htmlFor="journey-name" className="text-[13px] font-medium text-slate-400 pl-1">
                      Name
                    </label>
                    <div className={`relative transition-all duration-300 rounded-xl bg-white/5 border ${focusedField === 'name' ? 'border-brand-primary shadow-[0_0_15px_rgba(201,162,39,0.3)]' : 'border-white/10 hover:border-white/20'}`}>
                      <Input
                        id="journey-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        aria-invalid={!!errors.name}
                        className="h-14 text-[15px] font-medium rounded-xl bg-transparent border-0 text-white placeholder:text-slate-500 shadow-none focus-visible:ring-0 px-4"
                      />
                    </div>
                    {errors.name && <span className="text-xs text-brand-error pl-1">{errors.name}</span>}
                  </div>

                  <div className="space-y-1.5 group">
                    <label htmlFor="journey-phone" className="text-[13px] font-medium text-slate-400 pl-1">
                      Mobile Number
                    </label>
                    <div className={`flex relative transition-all duration-300 rounded-xl bg-white/5 border ${focusedField === 'phone' ? 'border-brand-primary shadow-[0_0_15px_rgba(201,162,39,0.3)]' : 'border-white/10 hover:border-white/20'}`}>
                      <div className="flex items-center justify-center pl-4 pr-3 border-r border-white/10 select-none">
                        <span className="text-lg mr-2">🇮🇳</span>
                        <span className="text-slate-300 font-medium text-[15px]">+91</span>
                      </div>
                      <Input
                        id="journey-phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel"
                        placeholder="10-digit Mobile Number"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        aria-invalid={!!errors.phone}
                        className="h-14 flex-1 text-[15px] font-medium rounded-r-xl bg-transparent border-0 text-white placeholder:text-slate-500 shadow-none focus-visible:ring-0 px-4"
                      />
                    </div>
                    {errors.phone && <span className="text-xs text-brand-error pl-1">{errors.phone}</span>}
                  </div>

                  <div className="pt-2">
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
                          Request Callback
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
