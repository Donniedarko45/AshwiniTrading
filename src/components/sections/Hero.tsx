import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { LeadForm } from '@/components/shared/LeadForm';

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
           {/* Form Container */}
           <div className="flex-1 p-8 md:p-12 bg-brand-navy relative flex flex-col justify-center">
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
