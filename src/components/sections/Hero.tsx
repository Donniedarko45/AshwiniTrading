import React from 'react';
import { Check, ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { LeadForm } from '@/components/shared/LeadForm';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-brand-bg-deep pt-24 pb-16 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-primary/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[calc(100vh-180px)]">

          {/* Left Content Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col justify-center pt-8 lg:pt-0"
          >
            {/* Badge */}
            <motion.div variants={fadeIn} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/5 text-brand-primary font-bold text-[11px] tracking-widest uppercase">
                <BookOpen className="w-3.5 h-3.5" />
                Guided by a SEBI Registered Research Analyst
              </span>
            </motion.div>

            {/* Hero Heading */}
            <motion.h1
              variants={fadeIn}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium leading-[1.05] tracking-tight mb-2 text-brand-navy text-balance"
            >
              Finance Made Simple.
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-brand-primary italic mb-8 tracking-tight"
            >
              Learn. Understand. Grow.
            </motion.p>

            {/* Body Copy */}
            <motion.p
              variants={fadeIn}
              className="text-slate-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl font-light text-pretty"
            >
              At Ashwini Trading Academy, we believe financial education should be simple, practical, and accessible to everyone. Whether you're a beginner, student, working professional, investor, trader, or entrepreneur, our structured learning programs help you build the knowledge and confidence to understand financial markets and make informed financial decisions.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4">
              <button onClick={() => {
                const form = document.getElementById('name-card');
                if (form) form.scrollIntoView({ behavior: 'smooth' });
              }}
                className="w-full sm:w-auto h-14 px-8 flex items-center justify-center gap-2 bg-cta-gold text-brand-navy font-bold text-[15px] rounded-xl shadow-brand-gold hover:shadow-brand-gold-lg hover:-translate-y-0.5 transition-[color,background-color,border-color,box-shadow,transform] duration-300 group"
              >
                Book a Free Demo Class
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#/all-courses">
                <button className="w-full sm:w-auto h-14 px-8 flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-brand-navy font-bold text-[15px] rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm transition-[color,background-color,border-color,box-shadow,transform] duration-300">
                  Explore Courses
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Lead Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 relative z-20"
          >
            <LeadForm theme="light" />
          </motion.div>

        </div>
      </div>

      {/* Bottom Trust Strip */}
      <div className="relative lg:absolute lg:bottom-0 lg:left-0 lg:right-0 border-t border-slate-200/50 bg-white/50 backdrop-blur-md py-4 mt-12 lg:mt-0 z-30 w-full">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap items-center justify-center sm:justify-between gap-6 opacity-80">
          <div className="flex items-center gap-6 text-[11px] font-bold tracking-widest text-slate-500 uppercase">
            <span>SEBI Registered Research Analyst</span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-300" />
            <span>NISM Certified Faculty</span>
          </div>
          <div className="flex items-center gap-6 text-[11px] font-bold tracking-widest text-slate-500 uppercase">
            <span>Online & Classroom Training</span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-300" />
            <span>Beginner to Advanced Programs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
