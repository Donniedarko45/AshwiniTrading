import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn } from '@/lib/animations';
import { LeadForm } from '@/components/shared/LeadForm';

export default function CurriculumCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-brand-navy text-center">
       {/* Premium Surface Textures & Gradients */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none z-0" />
       <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#0A1220] to-[#050A14] opacity-90 z-0" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-primary/10 rounded-full blur-[160px] pointer-events-none z-0 mix-blend-screen" />
       
       <div className="max-w-4xl mx-auto relative z-10">
         <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeIn}
         >
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
               <CheckCircle2 className="w-4 h-4 text-brand-success" />
               <span className="text-white text-xs font-bold tracking-widest uppercase">Curriculum that gets you hired</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Built for the way companies actually hire in <span className="text-gradient-brand">2026</span>.
            </h2>
            <p className="text-slate-300 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              25+ modules. 60+ tools. 3 shipped portfolio projects. One direction: your dream job.
            </p>
         </motion.div>

         <div className="max-w-xl mx-auto">
           <LeadForm 
             layout="card" 
             theme="dark" 
             buttonText="Start Your DM Career" 
           />
         </div>

         <motion.p 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5 }}
           className="text-slate-400 text-sm font-medium mt-6 tracking-wide"
         >
            WhatsApp the full syllabus <span className="text-slate-500 font-normal">· No spam calls</span>
         </motion.p>
       </div>
    </section>
  );
}
