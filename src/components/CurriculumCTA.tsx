import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function CurriculumCTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-[#6b1e5a] via-[#a13143] to-[#d65123] text-center">
       {/* Background noise/texture could go here if needed */}
       
       <div className="max-w-4xl mx-auto relative z-10">
         <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 rounded-full px-4 py-1.5 mb-8">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span className="text-white text-xs font-bold tracking-widest uppercase">Curriculum that gets you hired</span>
         </div>
         
         <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.1] mb-6">
           Built for the way companies actually hire in <span className="text-[#00E5FF]">2026</span> .
         </h2>
         <p className="text-white/80 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
           25+ modules. 60+ tools. 3 shipped portfolio projects. One direction: your dream job.
         </p>

         <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl max-w-xl mx-auto text-left">
            <form className="space-y-4">
               <div>
                  <label className="text-sm font-bold text-white mb-2 block">Name</label>
                  <Input placeholder="Your full name" className="h-14 bg-white border-0 text-base rounded-xl placeholder:text-slate-400 text-slate-900" />
               </div>
               <div>
                  <label className="text-sm font-bold text-white mb-2 block">Phone</label>
                  <div className="flex gap-2">
                    <Input value="+91" readOnly className="w-16 bg-slate-50 text-slate-600 font-semibold h-14 text-center border-0 rounded-xl px-0" />
                    <Input placeholder="10-digit mobile" type="tel" className="flex-1 h-14 bg-white border-0 text-base rounded-xl placeholder:text-slate-400 text-slate-900" />
                  </div>
               </div>
               <Button className="w-full h-14 bg-gradient-to-r from-[#FF7B47] to-[#FF622A] hover:opacity-90 text-white font-black text-[15px] tracking-wide rounded-xl shadow-lg border-0 uppercase mt-2">
                  Start Your DM Career →
               </Button>
            </form>
         </div>
         <p className="text-white/60 text-sm font-bold mt-6">
            WhatsApp the full syllabus <span className="font-normal opacity-70">· No call required</span>
         </p>
       </div>
    </section>
  );
}
