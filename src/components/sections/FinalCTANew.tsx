import React from 'react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { ArrowRight, Phone } from 'lucide-react';

export default function FinalCTANew() {
  return (
    <section className="relative py-24 md:py-32 bg-brand-navy overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-primary/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[900px] mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeIn}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight leading-tight mb-8"
          >
            Start Your Financial Learning <br className="hidden md:block" />
            <span className="text-brand-primary italic">Journey Today.</span>
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="text-slate-300 text-base md:text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto text-pretty"
          >
            Join thousands of learners who are building financial knowledge through simple, practical, and structured education. Take the first step towards understanding financial markets with confidence.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => {
                const form = document.getElementById('name-card');
                if (form) {
                  form.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="h-14 px-8 flex items-center justify-center gap-2 bg-cta-gold text-brand-navy font-bold text-[15px] rounded-xl shadow-brand-gold hover:shadow-brand-gold-lg hover:-translate-y-0.5 transition-all duration-300 group"
            >
              Book a Free Demo Class
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a href="#/contact-us">
              <button className="h-14 px-8 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-[15px] rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300">
                <Phone className="w-5 h-5" />
                Contact Us
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
