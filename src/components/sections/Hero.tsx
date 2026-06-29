import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { LeadForm } from '@/components/shared/LeadForm';

const AbstractChart = () => {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    // Initial bars
    setBars(Array.from({ length: 30 }, () => Math.random() * 80 + 10));
    
    const interval = setInterval(() => {
      setBars(prev => {
        if (prev.length === 0) return prev;
        const newBars = [...prev.slice(1), Math.random() * 80 + 10];
        return newBars;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full flex items-end gap-1 p-6 bg-brand-navy border-t lg:border-t-0 border-white/10 relative overflow-hidden">
      <div className="absolute top-4 left-6 flex gap-4 text-xs font-mono text-white/40 tracking-widest z-10">
        <span>MARKET_TAPE</span>
        <span className="text-brand-success flex items-center gap-2">
           <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-success"></span>
           </span>
           LIVE
        </span>
      </div>
      
      {/* Ticker Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_40px,40px_100%] pointer-events-none" />

      {bars.map((val, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${val}%` }}
          transition={{ duration: 0.4, ease: "linear" }}
          className={`flex-1 max-w-[20px] border-t-2 relative z-10 ${
            i === bars.length - 1 
              ? 'bg-brand-primary/20 border-brand-primary' 
              : val > (bars[i-1] || 50) 
                ? 'bg-white/5 border-brand-success/50' 
                : 'bg-white/5 border-brand-error/50'
          }`}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const features = [
    "NISM Certification Exam Training",
    "Technical Analysis & Chart Reading",
    "Fundamental Analysis & Company Research",
    "AI-Powered Market Analysis"
  ];

  return (
    <section className="relative min-h-screen bg-brand-navy pt-20">
      {/* Structural Grid lines for the whole section */}
      <div className="absolute inset-0 border-b border-white/10 pointer-events-none" />
      
      <div className="h-full min-h-[calc(100vh-80px)] flex flex-col lg:grid lg:grid-cols-12 relative z-10 border-x border-white/10 max-w-[1400px] mx-auto">
        
        {/* Main Content Column */}
        <div className="lg:col-span-7 flex flex-col justify-center p-8 md:p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeIn} className="mb-10 inline-block">
               <div className="px-4 py-2 border border-white/20 text-xs font-mono tracking-widest text-white/70 uppercase">
                 SEBI Registered Research Analyst
               </div>
            </motion.div>

            <motion.h1 
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-medium leading-[1.05] tracking-tight mb-8 text-white"
              variants={fadeIn}
            >
              Master the market.<br/>
              <span className="text-brand-primary italic">Not the noise.</span>
            </motion.h1>

            <motion.p 
              variants={fadeIn}
              className="text-white/70 text-lg sm:text-xl leading-relaxed mb-12 max-w-xl font-light"
            >
              We train you to understand real market movements, manage risk, and make objective investment decisions using precise analysis, not speculation.
            </motion.p>

            <motion.div 
              variants={fadeIn} 
              className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-8"
            >
              {features.map((feature, i) => (
                <div 
                  key={i} 
                  className="bg-brand-navy p-5 flex items-start gap-3"
                >
                  <div className="shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-brand-primary" strokeWidth={2} />
                  </div>
                  <span className="text-white/90 text-sm tracking-wide">{feature}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side Grid */}
        <div className="lg:col-span-5 flex flex-col lg:h-full">
           {/* Top Abstract Visual (Signature Element) */}
           <div className="h-[250px] lg:min-h-[350px] lg:flex-1 w-full shrink-0">
             <AbstractChart />
           </div>

           {/* Bottom Form Container */}
           <div className="flex-1 lg:flex-none p-8 md:p-12 border-t border-white/10 bg-brand-navy relative flex flex-col justify-center">
             <div className="absolute top-0 right-0 p-6 flex gap-2">
                <div className="w-1.5 h-1.5 bg-brand-primary rounded-none" />
                <div className="w-1.5 h-1.5 bg-white/20 rounded-none" />
                <div className="w-1.5 h-1.5 bg-white/20 rounded-none" />
             </div>
             
             <h3 className="font-serif text-3xl font-medium text-white mb-2">Secure Your Callback</h3>
             <p className="text-brand-primary text-xs mb-8 font-mono tracking-widest uppercase">
               Curriculum Overview & Placement
             </p>
             
             <LeadForm 
               layout="flat" 
               theme="dark" 
               showRoleSelect={false} 
               buttonText="Request Callback"
             />
           </div>
        </div>
      </div>
    </section>
  );
}
