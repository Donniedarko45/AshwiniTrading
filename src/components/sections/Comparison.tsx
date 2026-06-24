import React from 'react';
import { Check, X, Minus, Star } from 'lucide-react';
import { comparisonData } from '@/data/comparison';

export default function Comparison() {
  return (
    <section className="py-16 md:py-24 bg-white px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-brand-secondary font-bold tracking-widest text-sm uppercase mb-4">
          COMPARISON
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-[56px] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-10 md:mb-16 max-w-4xl">
          How our <span className="text-brand-secondary">digital marketing institute in Bangalore</span> compares to your other options
        </h2>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto pb-8">
          <div className="min-w-[900px]">
            {/* Table Header */}
            <div className="flex rounded-t-2xl overflow-hidden">
              <div className="w-[20%] bg-brand-bg-dark p-6 text-white font-bold" />
              
              {/* Ashwini Trading Column */}
              <div className="w-[26%] bg-gradient-to-r from-brand-bg-card to-brand-bg-deep p-6 text-white font-bold flex items-center justify-between border-b-4 border-brand-primary">
                <span className="tracking-widest text-sm uppercase">ASHWINI</span>
                <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center">
                  <Star className="w-3.5 h-3.5 text-white" fill="currentColor" />
                </div>
              </div>
              
              <div className="w-[18%] bg-brand-bg-dark p-6 text-white text-xs font-bold tracking-widest uppercase border-l border-white/10">
                SELF-LEARNING
              </div>
              
              <div className="w-[18%] bg-brand-bg-dark p-6 text-white text-xs font-bold tracking-widest uppercase border-l border-white/10">
                ONLINE PLATFORMS
              </div>
              
              <div className="w-[18%] bg-brand-bg-dark p-6 text-white text-xs font-bold tracking-widest uppercase border-l border-white/10">
                OTHER INSTITUTES
              </div>
            </div>

            {/* Table Body */}
            <div className="bg-white border-x border-b border-slate-200 rounded-b-2xl overflow-hidden shadow-sm">
              {comparisonData.map((row, idx) => (
                <div key={idx} className={`flex border-b border-slate-100 last:border-b-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                  {/* Feature */}
                  <div className="w-[20%] p-6 font-bold text-slate-900 border-r border-slate-100 flex items-center">
                    {row.feature}
                  </div>
                  
                  {/* Ashwini Trading */}
                  <div className="w-[26%] p-6 border-r-2 border-l-2 border-brand-accent/30 bg-brand-accent-soft/20 flex items-start gap-3">
                    <div className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-brand-success/10 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-brand-success" strokeWidth={3} />
                    </div>
                    <span className="font-bold text-slate-900 leading-snug">{row.bluetick}</span>
                  </div>

                  {/* Self Learning */}
                  <div className="w-[18%] p-6 border-r border-slate-100 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="shrink-0 w-4 h-4 rounded-full bg-brand-error-soft flex items-center justify-center">
                        <X className="w-2.5 h-2.5 text-brand-error" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium text-slate-600">{row.self}</span>
                    </div>
                  </div>

                  {/* Online Platforms */}
                  <div className="w-[18%] p-6 border-r border-slate-100 flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <Minus className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-600">{row.online}</span>
                    </div>
                  </div>

                  {/* Other Institutes */}
                  <div className="w-[18%] p-6 flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <Minus className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-600">{row.other}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Stacked Cards View */}
        <div className="md:hidden space-y-6">
          {comparisonData.map((row, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col"
            >
              {/* Feature Header */}
              <div className="bg-slate-900 px-5 py-4 text-white font-bold text-sm border-b border-slate-800">
                {row.feature}
              </div>
              
              <div className="p-5 space-y-4">
                {/* Ashwini Trading (Highlighted) */}
                <div className="bg-brand-accent-soft/60 border border-brand-accent/20 rounded-xl p-4 flex flex-col gap-2 relative">
                  <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center">
                    <Star className="w-3 h-3 text-white" fill="currentColor" />
                  </div>
                  <span className="text-[10px] font-extrabold text-brand-accent tracking-wider uppercase">ASHWINI</span>
                  <div className="flex items-start gap-2 mt-1">
                    <div className="mt-1 shrink-0 w-4 h-4 rounded-full bg-brand-success/10 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-brand-success" strokeWidth={3} />
                    </div>
                    <span className="font-extrabold text-slate-900 text-sm leading-snug">{row.bluetick}</span>
                  </div>
                </div>

                {/* Self Learning */}
                <div className="border border-slate-100 rounded-xl p-4 flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">SELF-LEARNING</span>
                  <div className="flex items-start gap-2">
                    <div className="shrink-0 w-4 h-4 rounded-full bg-brand-error-soft flex items-center justify-center mt-0.5">
                      <X className="w-2.5 h-2.5 text-brand-error" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{row.self}</span>
                  </div>
                </div>

                {/* Online Platforms */}
                <div className="border border-slate-100 rounded-xl p-4 flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">ONLINE PLATFORMS</span>
                  <div className="flex items-start gap-2">
                    <Minus className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700">{row.online}</span>
                  </div>
                </div>

                {/* Other Institutes */}
                <div className="border border-slate-100 rounded-xl p-4 flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">OTHER INSTITUTES</span>
                  <div className="flex items-start gap-2">
                    <Minus className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700">{row.other}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
