import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function PlacementsCTA() {
  return (
    <section className="bg-[#0A0D26] py-20 px-6 relative overflow-hidden">
       {/* bg glows */}
       <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[100px] pointer-events-none" />
       
       <div className="max-w-4xl mx-auto text-center relative z-10">
         <div className="text-[#FF7B47] text-xs font-bold tracking-widest uppercase mb-4">
           Ready to lock your seat?
         </div>
         <h2 className="text-4xl md:text-[42px] font-extrabold text-white mb-10 tracking-tight">
           Apply for the next batch – 7 seats left
         </h2>

         <div className="bg-white rounded-3xl p-6 sm:p-5 shadow-2xl flex flex-col md:flex-row gap-4 items-end max-w-4xl mx-auto">
            <div className="w-full md:w-[35%] text-left">
               <label className="text-sm font-bold text-slate-900 mb-2 block">Name</label>
               <Input placeholder="Your full name" className="h-14 border-slate-200 bg-white text-base rounded-xl placeholder:text-slate-400" />
            </div>
            <div className="w-full md:w-[35%] text-left">
               <label className="text-sm font-bold text-slate-900 mb-2 block">Phone</label>
               <div className="flex gap-2">
                 <Input value="+91" readOnly className="w-16 bg-slate-50 text-slate-600 font-semibold h-14 text-center border-slate-200 rounded-xl px-0" />
                 <Input placeholder="10-digit" type="tel" className="flex-1 h-14 border-slate-200 bg-white text-base rounded-xl placeholder:text-slate-400" />
               </div>
            </div>
            <div className="w-full md:w-[30%]">
                <Button className="w-full h-14 bg-[#FF7B47] hover:bg-[#E6561B] text-white font-black text-[15px] tracking-wide rounded-xl shadow-lg border-0 uppercase">
                  Start Your DM Career
                </Button>
            </div>
         </div>
         <div className="text-slate-400 text-sm mt-5 font-medium">
           Advisor calls back within 15 minutes · Mon–Sat, 10am–7pm
         </div>
       </div>
    </section>
  );
}
