import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { LeadForm } from '@/components/shared/LeadForm';

export default function Hero() {
  const features = [
    "NISM Certification Exam Training",
    "Technical Analysis & Chart Reading",
    "Fundamental Analysis & Company Research",
    "AI-Powered Market Analysis",
    "Beginner to Advanced Programs",
    "Online & Classroom Training"
  ];

  return (
    <section className="relative min-h-screen bg-brand-navy overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-20">
      {/* Glow overlays */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-brand-glow/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-glow/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
        
        {/* Left Column */}
        <motion.div 
          className="flex-1 text-white max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeIn} 
            className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 mb-6 sm:mb-8 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-secondary"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-extrabold tracking-wider text-slate-200 uppercase">
              SEBI Registered Research Analyst · Practical & AI-Powered
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold leading-[1.1] tracking-tight mb-4 text-white"
            variants={fadeIn}
          >
            Master the Stock Market with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-primary-light to-brand-secondary">Research-Driven & AI-Powered Learning</span>
          </motion.h1>

          <motion.h2 
            className="text-lg sm:text-xl font-bold text-brand-primary mb-6"
            variants={fadeIn}
          >
            Learn the Stock Market from a SEBI Registered Research Analyst
          </motion.h2>

          <motion.p 
            variants={fadeIn}
            className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-medium"
          >
            At Ashwini Trading Academy, we don’t just teach theory we train you to understand real market movements, identify opportunities, manage risk, and make informed investment decisions using modern tools, AI-powered analysis, and practical market exposure.
          </motion.p>

          <motion.div 
            variants={fadeIn} 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl text-[15px]"
          >
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-3.5 shadow-sm backdrop-blur-md transition-colors hover:bg-white/10"
              >
                <div className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full border border-brand-success">
                  <Check className="w-3 h-3 text-brand-success" strokeWidth={3} />
                </div>
                <span className="text-slate-100 font-semibold tracking-tight">{feature}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column / Form Container */}
        <motion.div 
          className="w-full lg:w-[480px] shrink-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            {/* Lead Form Redesigned Glassmorphic Card */}
            <div className="bg-slate-900/60 backdrop-blur-2xl rounded-[28px] p-8 md:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border border-white/10 relative overflow-hidden text-left">
              
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">Get Started Today</h3>
              <p className="text-slate-300 text-sm font-semibold mb-6 leading-relaxed">
                Not sure which course is right for you? Our academic counsellor will help you choose the right program based on your experience and career goals.
              </p>
              
              <LeadForm 
                layout="flat" 
                theme="dark" 
                showRoleSelect={true} 
                buttonText="Request a Callback"
              />
            </div>
          </div>

          {/* Badges below form - Bottom Trust Strip */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[
              "SEBI Registered Research Analyst",
              "Practical Market Education",
              "NISM Certification Training",
              "Beginner to Advanced Programs"
            ].map((text, i) => (
              <div 
                key={i} 
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-2.5 backdrop-blur-sm text-left"
              >
                <div className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full border border-brand-primary/20 text-brand-primary mt-0.5">
                  <Check className="w-3.5 h-3.5 text-brand-primary" strokeWidth={3} />
                </div>
                <span className="text-slate-100 font-bold text-xs leading-snug">{text}</span>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
