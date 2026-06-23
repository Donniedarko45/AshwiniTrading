import React from 'react';
import { Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '../lib/animations';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0B0A11] overflow-hidden pt-36 pb-20">
      {/* Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#392490]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#392490]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-20 items-center justify-between">
        
        {/* Left Column */}
        <motion.div 
          className="flex-1 text-white max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="text-xs sm:text-sm font-bold tracking-widest text-[#d1d5db] uppercase mb-10 pl-6 border-l-[3px] border-white/20 leading-relaxed">
            #1 DIGITAL MARKETING COURSE IN BANGALORE —<br />
            PLACEMENT-FIRST, AI-NATIVE.
          </motion.div>

          <motion.h1 variants={fadeIn} className="text-5xl sm:text-7xl lg:text-[100px] font-extrabold leading-[0.9] tracking-tighter mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FF8C37] to-[#FCA048] block mb-2">MASTER</span>
            <span className="block text-white mb-2">DIGITAL</span>
            <span className="block text-white mb-2">MARKETING</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] via-[#EC4899] to-[#D946EF] block mt-1">WITH AI</span>
          </motion.h1>

          <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl text-[15px]">
             {[
               "100% Placement Record",
               "AI-Native 2026 Curriculum",
               "Trainers with 5-10 yrs Exp",
               "Indiranagar, Next to Metro Station"
             ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-3.5 shadow-sm backdrop-blur-md transition-colors hover:bg-white/10">
                   <div className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full border border-emerald-400">
                     <Check className="w-3 h-3 text-emerald-400" strokeWidth={3} />
                   </div>
                   <span className="text-slate-100 font-semibold tracking-tight">{feature}</span>
                </div>
             ))}
          </motion.div>
        </motion.div>

        {/* Right Column / Form Container */}
        <motion.div 
          className="w-full lg:w-[480px] shrink-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-white/10 relative">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#111827] mb-2 tracking-tight">Apply for the Next Batch</h3>
            <div className="text-[#FF7B47] font-bold mb-8 text-xl tracking-tight">Few Seats Left</div>

            <form className="space-y-5">
              <div className="space-y-2 group">
                <label className="text-sm font-bold text-slate-800 transition-colors group-focus-within:text-blue-600">Name</label>
                <Input placeholder="Your full name" className="h-14 border-slate-200 bg-slate-50 text-base rounded-xl placeholder:text-slate-400 focus-visible:ring-blue-500 focus-visible:bg-white transition-all shadow-none" />
              </div>

              <div className="space-y-2 group">
                <label className="text-sm font-bold text-slate-800 transition-colors group-focus-within:text-blue-600">Phone Number</label>
                <div className="flex gap-2">
                  <Input value="+91" readOnly className="w-20 bg-slate-100 text-slate-600 font-semibold h-14 text-center border-slate-200 rounded-xl shadow-none" />
                  <Input placeholder="10-digit mobile" type="tel" className="flex-1 h-14 border-slate-200 bg-slate-50 text-base rounded-xl placeholder:text-slate-400 focus-visible:ring-blue-500 focus-visible:bg-white transition-all shadow-none" />
                </div>
              </div>

              <div className="space-y-2 group">
                <label className="text-sm font-bold text-slate-800 transition-colors group-focus-within:text-blue-600">I am a...</label>
                <div className="relative">
                  <select className="w-full appearance-none h-14 rounded-xl border border-slate-200 px-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white bg-slate-50 text-slate-700 transition-all font-medium">
                    <option>Choose one</option>
                    <option>Student</option>
                    <option>Working Professional</option>
                    <option>Entrepreneur</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-14 flex items-center justify-center bg-gradient-to-r from-[#FF8845] to-[#FF6E30] hover:from-[#FF7A30] hover:to-[#E6561B] text-white font-bold text-lg tracking-wide rounded-xl shadow-lg shadow-orange-500/25 mt-6 border-0 transition-all"
              >
                START YOUR DM CAREER
              </motion.button>
              <div className="text-center text-sm text-slate-500 font-medium mt-4">
                No spam calls - ever.
              </div>
            </form>
          </div>

          {/* Badges below form */}
          <div className="flex gap-4 mt-6">
            <div className="flex-1 flex flex-col items-center justify-center relative bg-gradient-to-b from-[#1C1844] to-transparent border border-white/5 rounded-xl p-4 min-h-[140px] backdrop-blur-sm">
                {/* Wreath icons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
                   <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" className="text-[#FFB800] absolute transform scale-125">
                     <path d="M20 60 C20 40 30 25 45 15 C35 30 35 50 40 65 C25 55 15 70 25 85 C15 75 10 50 20 60" fill="currentColor"/>
                     <path d="M100 60 C100 40 90 25 75 15 C85 30 85 50 80 65 C95 55 105 70 95 85 C105 75 110 50 100 60" fill="currentColor"/>
                   </svg>
                </div>
                <div className="text-[#FFB800] font-bold text-center text-[12px] leading-tight z-10 tracking-widest uppercase">
                  TOP 10<br/>DIGITAL<br/>MARKETING<br/>ACADEMY IN<br/>INDIA
                </div>
            </div>
            
            <div className="flex-[1.5] bg-gradient-to-r from-[#1C1844] to-[#251E56] rounded-xl p-5 border border-white/10 flex flex-col items-center justify-center text-center shadow-lg">
                <div className="text-[#e2e8f0] font-bold text-[12px] leading-[1.4] mb-3 tracking-wide">
                  RATED BASED ON BEST TRAINED FACULTY AND LATEST CURRICULUM
                </div>
                <div className="flex items-center justify-center gap-1">
                   <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                   <svg className="w-6 h-6 text-yellow-400 transform -translate-y-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                   <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
