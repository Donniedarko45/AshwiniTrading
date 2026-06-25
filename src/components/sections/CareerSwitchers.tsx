import React from 'react';
import { ArrowDown } from 'lucide-react';
import { careerSwitchers } from '@/data/switchers';

export default function CareerSwitchers() {
  return (
    <section className="py-16 md:py-24 bg-brand-bg-dark px-5 sm:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-brand-secondary font-bold tracking-widest text-sm uppercase mb-4">
          CAREER SWITCHERS
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-[56px] font-extrabold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl">
          Switching from a non-marketing job? You're not alone – <span className="text-brand-secondary">41%</span> of our students are.
        </h2>
        <p className="text-base sm:text-lg text-slate-300 mb-10 sm:mb-16 max-w-3xl">
          In our last 4 batches, 41% of students came from non-marketing backgrounds - IT, BPO, sales, finance, even teaching.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10 sm:mb-16">
          {careerSwitchers.map((person, idx) => (
            <div key={idx} className="bg-brand-bg-card border border-white/10 text-left rounded-3xl p-5 sm:p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src={person.image} 
                  alt={person.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-slate-100 text-lg">{person.name}</h3>
                  <p className="text-slate-400 text-xs mt-0.5">{person.meta}</p>
                </div>
              </div>

              {/* Journey Box */}
              <div className="bg-brand-bg-dark/50 rounded-2xl p-6 mb-8 flex-1 border border-white/5">
                <div className="mb-6">
                  <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-1">FROM</div>
                  <div className="font-bold text-slate-100">{person.fromTitle}</div>
                  <div className="text-slate-300 font-semibold">{person.fromSalary}</div>
                </div>

                <div className="flex justify-center mb-6">
                  <ArrowDown className="w-5 h-5 text-slate-500" />
                </div>

                <div>
                  <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-1">TO</div>
                  <div className="font-bold text-slate-100 mb-0.5">{person.toTitle}</div>
                  <div className="text-brand-success-light font-bold">{person.toSalary}</div>
                </div>
              </div>

              {/* Quote */}
              <div className="border-t border-white/10 border-dashed pt-6 mt-auto">
                <p className="text-slate-300 text-sm font-medium italic leading-relaxed">
                  "{person.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-base sm:text-lg font-medium max-w-2xl mx-auto italic">
          Working pros switching careers: weekend batches + Sunday mock interviews are built specifically for you.
        </p>
      </div>
    </section>
  );
}
