import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn } from '@/lib/animations';
import { LeadForm } from '@/components/shared/LeadForm';

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#312E81]">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 backdrop-blur-md mb-8 text-indigo-200">
            <Clock className="w-4 h-4" />
            <span className="text-xs font-bold tracking-widest uppercase">DECISION TIME</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-[72px] font-extrabold mb-6 leading-[1.05] tracking-tighter text-white">
            Compared. Convinced. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Now is the move.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 font-medium">
            Bangalore's next batch <span className="bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded-md mx-1 border border-yellow-500/30">Starts in 12 Days</span> · <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md mx-1 border border-emerald-500/30">Only 3 Seats Remaining for the July Cohort</span>
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
