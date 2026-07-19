import React from 'react';
import { ArrowRight, Building2, GraduationCap, Users, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';

export default function MediaAwards() {
  return (
    <section id="corporate-training" className="relative bg-slate-50 py-24 md:py-32 px-5 sm:px-6 md:px-12 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div variants={fadeIn} className="inline-block px-3 py-1 border border-slate-300 text-slate-500 font-mono text-xs tracking-widest uppercase mb-6 bg-white">
            CORPORATE & COLLEGE TRAINING
          </motion.div>

          <motion.h2
            variants={fadeIn}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-navy tracking-tight leading-tight mb-8"
          >
            Financial Education <br className="hidden md:block" />
            <span className="text-brand-primary italic">for Institutions.</span>
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="text-slate-600 text-base md:text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto text-pretty"
          >
            We partner with schools, colleges, universities, and corporate organizations to deliver customized financial education programs that promote financial literacy, practical knowledge, and informed decision-making.
          </motion.p>

          {/* Institution Icons */}
          <motion.div variants={fadeIn} className="flex flex-wrap items-center justify-center gap-8 mb-12">
            {[
              { icon: GraduationCap, label: "Colleges" },
              { icon: Building2, label: "Universities" },
              { icon: Briefcase, label: "Corporates" },
              { icon: Users, label: "Organizations" },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center gap-2 group">
                  <div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:border-brand-primary/40 group-hover:shadow-md transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-slate-500 group-hover:text-brand-primary transition-colors duration-300" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">{item.label}</span>
                </div>
              );
            })}
          </motion.div>

          <motion.div variants={fadeIn}>
            <a href="#/college-collaboration">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-14 px-8 flex items-center justify-center gap-2 bg-cta-gold text-brand-navy font-bold text-[15px] rounded-xl shadow-brand-gold hover:shadow-brand-gold-lg hover:-translate-y-0.5 transition-all duration-300 group mx-auto"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
