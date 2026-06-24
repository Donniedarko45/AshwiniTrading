import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { LeadForm } from '@/components/shared/LeadForm';

export default function Hero() {
  const features = [
    "100% Placement Record",
    "AI-Native 2026 Curriculum",
    "Trainers with 5-10 yrs Exp",
    "Indiranagar, Next to Metro Station"
  ];

  return (
    <section className="relative min-h-screen bg-brand-bg-dark overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-20">
      {/* Glow overlays */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-brand-glow/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-glow/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
        
        {/* Left Column */}
        <motion.div 
          className="flex-1 text-white max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeIn} 
            className="text-xs sm:text-sm font-bold tracking-widest text-slate-300 uppercase mb-6 sm:mb-10 pl-6 border-l-[3px] border-white/20 leading-relaxed"
          >
            #1 STOCK MARKET COURSE IN BANGALORE —<br />
            PRACTICAL, AI-POWERED.
          </motion.div>

          <motion.h1 
            variants={fadeIn} 
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold leading-[1.05] sm:leading-[0.95] tracking-tighter mb-6 font-sans"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-primary-light to-brand-primary block mb-2">MASTER</span>
            <span className="block text-white mb-2 leading-none">THE STOCK MARKET</span>
            <span className="block text-white mb-2 leading-none">WITH INDIA'S MOST</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary block mt-1">PRACTICAL TRADING ACADEMY</span>
          </motion.h1>

          <motion.p 
            variants={fadeIn}
            className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-medium"
          >
            At Ashwini Trading Academy, we don’t just teach theory we train you to understand real market movements, identify opportunities, manage risk, and make informed investment decisions using modern tools, AI-powered analysis, and practical market exposure.
          </motion.p>

          <motion.div 
            variants={fadeIn} 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl text-[15px]"
          >
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-3.5 shadow-sm backdrop-blur-md transition-colors hover:bg-white/10"
              >
                <div className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full border border-brand-success">
                  <Check className="w-3 h-3 text-brand-success" strokeWidth={3} />
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
          <div className="relative">
            {/* Lead Form Redesigned Glassmorphic Card */}
            <div className="bg-brand-bg-card/70 backdrop-blur-2xl rounded-[28px] p-8 md:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border border-white/10 relative overflow-hidden">
              
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">Apply for the Next Batch</h3>
              
              <div className="text-brand-primary font-bold mb-8 text-base md:text-lg tracking-tight flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-primary"></span>
                </span>
                <span>Batch Capped at 24 · 7 Seats Left</span>
              </div>
              
              <LeadForm 
                layout="flat" 
                theme="dark" 
                showRoleSelect={true} 
                buttonText="CHECK BATCH ELIGIBILITY"
              />
              
              <div className="text-center text-xs text-slate-400 font-medium mt-6 tracking-wide">
                No spam calls - ever.
              </div>
            </div>
          </div>

          {/* Badges below form */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="flex-1 flex flex-col items-center justify-center relative bg-gradient-to-b from-brand-bg-card to-transparent border border-white/5 rounded-xl p-4 min-h-[100px] backdrop-blur-sm">
              {/* Wreath icons */}
              <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
                 <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" className="text-brand-primary absolute transform scale-125">
                   <path d="M20 60 C20 40 30 25 45 15 C35 30 35 50 40 65 C25 55 15 70 25 85 C15 75 10 50 20 60" fill="currentColor"/>
                   <path d="M100 60 C100 40 90 25 75 15 C85 30 85 50 80 65 C95 55 105 70 95 85 C105 75 110 50 100 60" fill="currentColor"/>
                 </svg>
              </div>
              <div className="text-brand-primary font-bold text-center text-[12px] leading-tight z-10 tracking-widest uppercase">
                TOP 10<br/>STOCK<br/>MARKET<br/>ACADEMY IN<br/>INDIA
              </div>
            </div>
            
            <div className="flex-[1.5] bg-gradient-to-r from-brand-bg-card to-brand-glow/50 rounded-xl p-5 border border-white/10 flex flex-col items-center justify-center text-center shadow-lg">
              <div className="text-slate-200 font-bold text-[12px] leading-[1.4] mb-3 tracking-wide">
                RATED BASED ON BEST TRAINED FACULTY AND LATEST CURRICULUM
              </div>
              <div className="flex items-center justify-center gap-1">
                 {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 text-brand-primary ${i === 2 ? 'transform -translate-y-1 w-6 h-6' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                 ))}
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
