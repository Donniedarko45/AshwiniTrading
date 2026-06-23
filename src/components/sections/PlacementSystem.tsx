import React from 'react';
import { placementSteps } from '@/data/placementSystem';

export default function PlacementSystem() {
  return (
    <section className="bg-gradient-to-br from-[#EAF3FF] to-[#D5F5E3] py-16 md:py-24 px-5 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-4">THE PLACEMENT SYSTEM</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-6 max-w-3xl leading-[1.1]">
                The 5-month placement system – exactly how we get you hired
            </h2>
            <p className="text-slate-600 text-lg sm:text-[20px] font-medium italic mb-10 sm:mb-20">
                Not a promise. A process. Here's the system that<br/>placed 100% of our last 4 batches.
            </p>

            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-4 left-4 right-4 h-0.5 bg-blue-200 hidden lg:block" />
                <div className="absolute top-4 left-4 w-[80%] h-0.5 bg-blue-500 hidden lg:block" />
                <div className="absolute top-4 right-4 w-[20%] h-0.5 border-t-2 border-dashed border-emerald-400 hidden lg:block" aria-hidden="true" />

                <div className="grid lg:grid-cols-5 gap-6">
                    {placementSteps.map((step, i) => (
                        <div key={i} className="relative pt-0 lg:pt-10">
                            {/* Dots */}
                            <div className="hidden lg:flex absolute top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-white border-[3px] z-10" 
                                style={{ 
                                  borderColor: step.isGreen ? '#10B981' : '#3B82F6', 
                                  width: step.isGreen ? '20px' : '16px', 
                                  height: step.isGreen ? '20px' : '16px', 
                                  top: step.isGreen ? '6px' : '10px' 
                                }} 
                            />
                            
                            <div className={`bg-white rounded-2xl p-5 sm:p-6 shadow-sm border ${step.isGreen ? 'border-emerald-200 h-full' : 'border-white h-full'} hover:shadow-md transition-shadow`}>
                                <div className={`text-xs font-extrabold tracking-widest uppercase mb-3 ${step.isGreen ? 'text-slate-900 text-lg' : 'text-brand-blue'}`}>
                                    {step.month}
                                </div>
                                {step.title && (
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                                        {step.title}
                                    </h3>
                                )}
                                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}
