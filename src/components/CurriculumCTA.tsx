import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn, scaleUp } from '../lib/animations';

export default function CurriculumCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#0F172A] text-center">
       {/* Background noise/texture & Gradients */}
       <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-[#0F172A] to-purple-900 opacity-60" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[140px] pointer-events-none" />
       
       <div className="max-w-4xl mx-auto relative z-10">
         <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeIn}
         >
           <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-white text-xs font-bold tracking-widest uppercase">Curriculum that gets you hired</span>
           </div>
           
           <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.1] mb-6">
             Built for the way companies actually hire in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">2026</span>.
           </h2>
           <p className="text-slate-300 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
             25+ modules. 60+ tools. 3 shipped portfolio projects. One direction: your dream job.
           </p>
         </motion.div>

         <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={scaleUp}
           className="bg-white/10 backdrop-blur-xl rounded-[24px] p-8 md:p-10 border border-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] max-w-xl mx-auto text-left relative overflow-hidden"
         >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
            <form className="space-y-5 relative z-10">
               <div>
                  <label className="text-sm font-bold text-white mb-2 block">Name</label>
                  <Input placeholder="Your full name" className="h-14 bg-white/90 border-0 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:bg-white text-base rounded-xl placeholder:text-slate-400 text-slate-900 transition-all font-medium" />
               </div>
               <div>
                  <label className="text-sm font-bold text-white mb-2 block">Phone</label>
                  <div className="flex gap-2">
                    <Input value="+91" readOnly className="w-20 bg-slate-200/90 text-slate-700 font-semibold h-14 text-center border-0 rounded-xl" />
                    <Input placeholder="10-digit mobile" type="tel" className="flex-1 h-14 bg-white/90 border-0 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:bg-white text-base rounded-xl placeholder:text-slate-400 text-slate-900 transition-all font-medium" />
                  </div>
               </div>
               <motion.button 
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="w-full flex items-center justify-center gap-2 h-14 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-[16px] tracking-wide rounded-xl shadow-lg shadow-orange-500/25 border-0 uppercase mt-4 transition-all"
               >
                  Start Your DM Career <ArrowRight className="w-5 h-5 ml-1" />
               </motion.button>
            </form>
         </motion.div>
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
