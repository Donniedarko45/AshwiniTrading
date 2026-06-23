import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn, scaleUp } from '../lib/animations';

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#312E81]">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
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
            Bangalore's next batch starts <span className="bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded-md mx-1 border border-yellow-500/30">in 12 days</span>. <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md mx-1 border border-emerald-500/30">9 seats left</span>.
          </p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleUp}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-[32px] max-w-lg mx-auto shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] text-left relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"></div>
          <div className="space-y-6">
            <div>
              <label className="block text-slate-300 text-sm font-bold mb-2">Name</label>
              <input type="text" placeholder="Your full name" className="w-full h-14 rounded-xl px-4 border-0 focus:ring-2 focus:ring-indigo-500 bg-white/90 text-slate-900 font-medium placeholder:text-slate-500 outline-none transition-all" />
            </div>
            
            <div>
              <label className="block text-slate-300 text-sm font-bold mb-2">Phone</label>
              <div className="flex gap-2">
                <input type="text" value="+91" readOnly className="w-20 bg-slate-200/90 text-slate-700 font-semibold h-14 text-center border-0 rounded-xl outline-none" />
                <input type="tel" placeholder="10-digit mobile" className="flex-1 h-14 rounded-xl px-4 border-0 focus:ring-2 focus:ring-indigo-500 bg-white/90 text-slate-900 font-medium placeholder:text-slate-500 outline-none transition-all" />
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full h-14 flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg mt-6 shadow-[0_0_40px_-10px_rgba(249,115,22,0.6)] rounded-xl border-0 uppercase tracking-wide transition-all"
            >
              START YOUR DM CAREER <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </motion.div>

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
