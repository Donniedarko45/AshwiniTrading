import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ResumeCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#1D1145]">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2D1B69] via-[#1D1145] to-[#120B2E]" />
      
      {/* Decorative dots / pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8">
          <Star className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-bold tracking-widest uppercase">YOUR DAY-91 RESUME</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.1] tracking-tight">
          In 120 days, your resume looks <span className="text-cyan-400">completely different.</span>
        </h2>
        
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          3 live projects. 12 certifications. Recruiter intros. A portfolio that walks into interviews with you.
        </p>
        
        <div className="flex flex-col items-center justify-center">
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 rounded-xl h-16 px-10 shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] w-full sm:w-auto font-bold text-lg transition-transform hover:scale-105 active:scale-95 group">
            START YOUR DM CAREER
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <div className="mt-6 text-sm font-bold text-slate-400 tracking-wide">
            100% placement record
          </div>
        </div>
      </div>
    </section>
  );
}
