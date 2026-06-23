import React from 'react';
import { LeadForm } from '@/components/shared/LeadForm';

export default function PlacementsCTA() {
  return (
    <section className="bg-brand-bg-card-dark py-20 px-6 relative overflow-hidden">
       {/* bg glows */}
       <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[100px] pointer-events-none" />
       
       <div className="max-w-4xl mx-auto text-center relative z-10">
         <div className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4">
           Ready to lock your seat?
         </div>
         <h2 className="text-4xl md:text-[42px] font-extrabold text-white mb-10 tracking-tight">
           Apply for the next batch – 7 seats left
         </h2>

         <LeadForm 
           layout="bar" 
           theme="dark" 
           buttonText="Start Your DM Career" 
         />
         
         <div className="text-slate-400 text-sm mt-5 font-medium">
           Advisor calls back within 15 minutes · Mon–Sat, 10am–7pm
         </div>
       </div>
    </section>
  );
}
