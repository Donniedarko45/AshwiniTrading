import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';

export default function Achieve90Days() {
  return (
    <section id="about-ata" className="relative bg-white py-24 md:py-32 px-5 sm:px-6 md:px-12 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column: Content */}
          <div>
            <motion.div variants={fadeIn} className="inline-block px-3 py-1 border border-slate-300 text-slate-500 font-mono text-xs tracking-widest uppercase mb-6 bg-slate-50">
              ABOUT ASHWINI TRADING ACADEMY
            </motion.div>
            
            <motion.h2 
              variants={fadeIn}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-navy tracking-tight leading-tight mb-3"
            >
              More Than a Trading Academy.
            </motion.h2>
            <motion.h2 
              variants={fadeIn}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-tight mb-8"
            >
              <span className="text-brand-primary italic">We Build Financial Confidence.</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-slate-600 text-base md:text-lg font-light leading-relaxed mb-6 max-w-2xl text-pretty"
            >
              Ashwini Trading Academy is an Institute of Financial Education committed to making finance simple, practical, and easy to understand. Our structured learning approach helps learners build strong financial knowledge through practical education, research-based concepts, and real-world understanding.
            </motion.p>
            
            <motion.p 
              variants={fadeIn}
              className="text-slate-600 text-base md:text-lg font-light leading-relaxed mb-10 max-w-2xl text-pretty"
            >
              We believe financial literacy is a life skill, and our mission is to empower every learner with the confidence to understand financial markets and make informed financial decisions.
            </motion.p>
            
            <motion.div variants={fadeIn}>
              <a href="#/about-us">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="h-14 px-8 flex items-center justify-center gap-2 bg-brand-navy text-white font-bold text-[15px] rounded-xl shadow-md hover:bg-slate-900 hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Visual accent */}
          <motion.div 
            variants={fadeIn}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[480px] aspect-square">
              {/* Abstract decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-[48px] rotate-3" />
              <div className="absolute inset-4 bg-white border border-slate-200 rounded-[40px] shadow-[0_32px_64px_-16px_rgb(15,23,42,0.08)] flex flex-col items-center justify-center p-12 text-center">
                <div className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-6">Institute of</div>
                <h3 className="font-serif text-3xl font-medium text-brand-navy mb-4 leading-tight">Financial<br/>Education</h3>
                <div className="w-12 h-[2px] bg-brand-primary mb-6" />
                <p className="text-slate-500 text-sm font-light leading-relaxed max-w-[240px]">
                  Structured learning programs from beginner to advanced levels
                </p>
                <div className="mt-8 inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/5 border border-brand-primary/20 text-brand-primary font-bold text-[10px] tracking-widest uppercase">
                  SEBI Registered RA
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
