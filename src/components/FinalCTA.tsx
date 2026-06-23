import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#0F766E] to-[#1E3A8A]">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-400/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8 text-white">
          <Clock className="w-4 h-4" />
          <span className="text-xs font-bold tracking-widest uppercase">DECISION TIME</span>
        </div>

        <h2 className="text-5xl md:text-[64px] font-extrabold mb-6 leading-[1.1] tracking-tight text-white">
          Compared. Convinced. <span className="text-emerald-300">Now is the move.</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-white mb-12 font-medium">
          Bangalore's next batch starts <span className="bg-yellow-500/20 text-yellow-300 px-2 rounded">in 12 days</span> . <span className="bg-yellow-500/20 text-yellow-300 px-2 rounded">9 seats left</span> .
        </p>
        
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-[32px] max-w-lg mx-auto shadow-2xl text-left">
          <div className="space-y-5">
            <div>
              <label className="block text-white text-sm font-bold mb-2">Name</label>
              <input type="text" placeholder="Your full name" className="w-full h-14 rounded-xl px-4 border-0 focus:ring-2 focus:ring-emerald-400 bg-white text-slate-900 font-medium placeholder:text-slate-400" />
            </div>
            
            <div>
              <label className="block text-white text-sm font-bold mb-2">Phone</label>
              <div className="flex">
                <div className="bg-slate-100 border-r border-slate-200 h-14 px-4 flex items-center justify-center rounded-l-xl text-slate-600 font-bold">
                  +91
                </div>
                <input type="tel" placeholder="10-digit mobile" className="flex-1 h-14 rounded-r-xl px-4 border-0 focus:ring-2 focus:ring-emerald-400 bg-white text-slate-900 font-medium placeholder:text-slate-400" />
              </div>
            </div>

            <Button className="w-full h-14 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg mt-4 shadow-[0_0_30px_-5px_rgba(249,115,22,0.6)]">
              START YOUR DM CAREER <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        <p className="text-center text-emerald-100 text-sm font-medium mt-6">
          <span className="font-bold text-white">15-min call</span> · Zero pressure · Get the full picture
        </p>

      </div>
    </section>
  );
}
