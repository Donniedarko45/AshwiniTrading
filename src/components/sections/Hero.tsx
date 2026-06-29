import React from 'react';
import { Check, Star, Download, ArrowRight, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { LeadForm } from '@/components/shared/LeadForm';

export default function Hero() {
  const benefits = [
    "NISM Certification Exam Training",
    "Technical Analysis & Chart Reading",
    "Fundamental Analysis & Company Research",
    "AI-Powered Market Analysis",
    "Beginner to Advanced Programs",
    "Online & Classroom Training"
  ];

  return (
    <section className="relative min-h-screen bg-brand-navy pt-24 pb-16 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[calc(100vh-180px)]">

          {/* Left Content Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col justify-center pt-8 lg:pt-0"
          >
            {/* Hero Heading */}
            <motion.h1
              variants={fadeIn}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium leading-[1.05] tracking-tight mb-6 text-white"
            >
              Master the Stock Market with <span className="text-brand-primary italic block mt-2">Research-Driven</span> AI-Powered Learning
            </motion.h1>

            {/* Outcome Copy */}
            <motion.p
              variants={fadeIn}
              className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl font-normal"
            >
              At Ashwini Trading Academy, we don’t just teach theory we train you to understand real market movements, identify opportunities, manage risk, and make informed investment decisions using modern tools, AI-powered analysis, and practical market exposure.
            </motion.p>

            {/* Key Benefits */}
            <motion.div variants={fadeIn} className="grid grid-cols-2 gap-4 mb-12">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-brand-primary stroke-[3px]" />
                  </div>
                  <span className="text-slate-200 text-[15px] font-medium">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* Social Proof Stats */}
            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-y-4 gap-x-8 mb-12 py-6 border-y border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    {stat.icon && stat.icon}
                    <span className="text-xl font-bold text-white tracking-tight">{stat.value}</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4">
              <button onClick={() => {
                const form = document.getElementById('name-card');
                if (form) form.focus();
              }}
                className="w-full sm:w-auto h-14 px-8 flex items-center justify-center gap-2 bg-cta-gold text-brand-navy font-bold text-[15px] rounded-xl shadow-brand-gold hover:shadow-brand-gold-lg hover:-translate-y-0.5 transition-all duration-300 group"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto h-14 px-8 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-bold text-[15px] rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <Download className="w-5 h-5 text-slate-300" />
                Download Curriculum
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Lead Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 relative z-20"
          >
            <LeadForm />
          </motion.div>

        </div>
      </div>

      {/* Bottom Trust Strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-white/[0.02] backdrop-blur-md py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap items-center justify-center sm:justify-between gap-6 opacity-70">
          <div className="flex items-center gap-6 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
            <span>SEBI Registered Reg. No. INH000024453</span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-600" />
            <span>NISM Certified Faculty</span>
          </div>
          <div className="flex items-center gap-6 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
            <span>Enterprise-Grade Security</span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-600" />
            <span>95% Completion Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
