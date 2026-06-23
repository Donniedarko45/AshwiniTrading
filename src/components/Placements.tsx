import React from 'react';
import { motion } from 'motion/react';
import { staggerContainer, fadeIn } from '../lib/animations';

export default function Placements() {
  return (
    <section id="placements" className="bg-[#0B0A11] py-32 px-6 lg:px-8 relative overflow-hidden">
       {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 max-w-2xl"
        >
          <div className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4">Digital Marketing Course in Bangalore</div>
          <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.1] mb-6">
            with <span className="text-[#9d72ff]">100% placement</span> — here's the package band.
          </h3>
          <p className="text-slate-400 text-lg font-medium">Of our last 4 batches — 312 students total:</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Bars */}
          <motion.div 
            className="flex-1 space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { label: "₹3-5 LPA", percent: 26, desc: "Freshers joining agencies as executives", color: "bg-blue-500", glow: "shadow-[0_0_15px_rgba(59,130,246,0.3)]" },
              { label: "₹5-8 LPA", percent: 54, desc: "Mid-tier agencies & funded startups", color: "bg-indigo-500", glow: "shadow-[0_0_15px_rgba(99,102,241,0.3)]" },
              { label: "₹8-12 LPA", percent: 16, desc: "Jr Working pros switching careers, top performers", color: "bg-orange-500", glow: "shadow-[0_0_15px_rgba(249,115,22,0.3)]" },
              { label: "₹12+ LPA", percent: 4, desc: "", color: "bg-rose-500", glow: "shadow-[0_0_15px_rgba(244,63,94,0.3)]" },
            ].map((bar, i) => (
              <div key={i}>
                <div className="flex justify-between items-end mb-3">
                  <span className="text-white font-bold text-xl">{bar.label}</span>
                  <span className="text-white font-bold text-3xl leading-none">{bar.percent}%</span>
                </div>
                <div className="w-full h-8 bg-white/5 rounded-full overflow-hidden mb-3 relative backdrop-blur-sm border border-white/10">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                    className={`absolute top-0 left-0 h-full ${bar.color} rounded-full ${bar.glow}`} 
                  />
                </div>
                {bar.desc && <div className="text-slate-400 text-sm font-medium">{bar.desc}</div>}
              </div>
            ))}
          </motion.div>

          {/* Right Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full lg:max-w-[420px] pt-4"
          >
            <div className="bg-[#15132A] rounded-3xl p-10 border border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
              <div className="space-y-10">
                <div className="flex justify-between items-center border-b border-white/10 pb-8">
                  <div className="text-slate-400 text-xs font-bold tracking-widest uppercase">Average Package</div>
                  <div className="text-white text-3xl font-extrabold tracking-tight">₹5.6 LPA</div>
                </div>
                
                <div className="flex justify-between items-center border-b border-white/10 pb-8">
                  <div className="text-slate-400 text-xs font-bold tracking-widest uppercase">Lowest Accepted</div>
                  <div className="text-white text-3xl font-extrabold tracking-tight">₹3.2 LPA</div>
                </div>
                
                <div className="flex justify-between items-start pt-2">
                  <div className="text-slate-400 text-xs font-bold tracking-widest uppercase mt-2">Highest</div>
                  <div className="text-right">
                    <div className="text-white text-3xl font-extrabold tracking-tight mb-2">₹22 LPA</div>
                    <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Flipkart, 2026</div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-slate-400 text-[17px] italic mt-8 leading-relaxed max-w-sm pl-2">
              We publish the floor as well as the ceiling.<br/>Most don't.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
