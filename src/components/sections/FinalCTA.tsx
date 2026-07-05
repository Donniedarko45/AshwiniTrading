import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn } from '@/lib/animations';
import { LeadForm } from '@/components/shared/LeadForm';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-16 sm:py-32 relative overflow-hidden bg-brand-navy px-5 sm:px-6">
      {/* Premium Surface Textures & Glows */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-[#0A1220] to-[#050A14] opacity-90 z-0" />
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-primary/15 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-0 mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-brand-secondary/15 rounded-full blur-[160px] translate-y-1/2 -translate-x-1/3 pointer-events-none z-0 mix-blend-screen" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700/80 bg-slate-950/40 backdrop-blur-md mb-8 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-200">DECISION TIME</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold mb-6 leading-[1.1] sm:leading-[1.05] tracking-tighter text-white">
            Compared. Convinced.<br />
            <span className="text-brand-secondary">Now is the move.</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 mb-10 sm:mb-12 font-semibold flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3">
            <span className="text-white/90">Bangalore's next batch</span>
            <span className="bg-brand-primary/10 text-brand-primary px-3.5 py-1.5 rounded-full border border-brand-primary/20 text-xs sm:text-sm font-bold tracking-wide">Starts in 12 Days</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="bg-brand-success/10 text-brand-success px-3.5 py-1.5 rounded-full border border-brand-success/20 text-xs sm:text-sm font-bold tracking-wide">Only 3 Seats Remaining for July Cohort</span>
          </p>
        </motion.div>
        
        <div className="max-w-lg mx-auto">
          <LeadForm 
            layout="card" 
            theme="dark" 
            buttonText="CLAIM YOUR 25% SCHOLARSHIP" 
          />
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-slate-400 text-sm font-medium mt-8 tracking-wide"
        >
          <span className="font-bold text-white">15-min call</span> · Zero pressure · Get the full picture
        </motion.p>

      </div>
    </section>
  );
}
