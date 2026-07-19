import React from 'react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { ArrowRight, Award } from 'lucide-react';

export default function MeetMentor() {
  return (
    <section id="meet-mentor" className="relative bg-white py-24 md:py-32 px-5 sm:px-6 md:px-12 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column: Photo / Visual */}
          <motion.div variants={fadeIn} className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5]">
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-[40px] -rotate-2" />
              <div className="absolute inset-3 bg-white border border-slate-200 rounded-[32px] shadow-[0_32px_64px_-16px_rgb(15,23,42,0.08)] overflow-hidden flex flex-col items-center justify-center p-12 text-center">
                {/* Mentor Image placeholder with initials */}
                <div className="w-32 h-32 rounded-full bg-brand-navy flex items-center justify-center mb-8 shadow-lg">
                  <span className="text-4xl font-serif font-medium text-brand-primary">AS</span>
                </div>
                <div className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-3">Founder</div>
                <h3 className="font-serif text-2xl font-medium text-brand-navy mb-2">Ashwini SD</h3>
                <p className="text-slate-500 text-sm font-light">Ashwini Trading Academy</p>
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 border border-brand-primary/20">
                  <Award className="w-3.5 h-3.5 text-brand-primary" />
                  <span className="text-brand-primary font-bold text-[10px] tracking-widest uppercase">SEBI Registered Research Analyst</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div>
            <motion.div variants={fadeIn} className="inline-block px-3 py-1 border border-slate-300 text-slate-500 font-mono text-xs tracking-widest uppercase mb-6 bg-slate-50">
              MEET YOUR MENTOR
            </motion.div>

            <motion.h2
              variants={fadeIn}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-navy tracking-tight leading-tight mb-8"
            >
              Learn from <span className="text-brand-primary italic">Experience.</span>
            </motion.h2>

            <motion.div variants={fadeIn} className="mb-4">
              <h3 className="font-serif text-2xl font-medium text-brand-navy">Ashwini SD</h3>
              <p className="text-slate-500 text-base font-light mt-1">Founder — Ashwini Trading Academy</p>
              <p className="text-brand-primary text-sm font-semibold mt-1">SEBI Registered Research Analyst</p>
            </motion.div>

            <motion.p
              variants={fadeIn}
              className="text-slate-600 text-base md:text-lg font-light leading-relaxed mb-10 max-w-xl text-pretty"
            >
              Ashwini SD is passionate about making financial education simple, practical, and accessible for every learner. Through structured teaching and a research-driven approach, the focus is on helping individuals build financial knowledge with clarity and confidence.
            </motion.p>

            <motion.div variants={fadeIn}>
              <a href="#/about-us">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="h-14 px-8 flex items-center justify-center gap-2 bg-brand-navy text-white font-bold text-[15px] rounded-xl shadow-md hover:bg-slate-900 hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  Know More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
