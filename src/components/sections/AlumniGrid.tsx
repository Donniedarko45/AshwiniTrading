import React from 'react';
import { alumniList } from '@/data/alumni';
import { LeadForm } from '@/components/shared/LeadForm';

export default function AlumniGrid() {
  return (
    <section className="bg-[#F2F7FF] py-24 relative" style={{
        backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
        backgroundSize: '40px 40px'
    }}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Where our 2025–26 batches landed – real names, real companies, real packages
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium">Every name below is a verified Ashwini Trading Academy alumnus.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {alumniList.map((alum, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all flex flex-col items-start">
                   <img src={alum.image} alt={alum.name} className="w-16 h-16 rounded-full object-cover mb-4 ring-2 ring-slate-100" />
                   <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-xl font-bold text-slate-900">{alum.name}</h4>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center justify-center gap-1 px-2.5 py-1 bg-blue-50/50 border border-blue-100 rounded-full text-blue-600 hover:bg-blue-100 hover:text-blue-700 text-xs font-semibold transition-all shadow-sm touch-target" 
                        title="Verify Placement on LinkedIn"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        <span>Verify</span>
                      </a>
                   </div>
                   <p className="text-xs font-medium text-slate-500 mb-4 tracking-wider">{alum.date}</p>
                   <p className="text-slate-700 font-medium mb-6 min-h-[48px] text-[15px] leading-relaxed">
                      {alum.role} @ <span className="font-bold text-slate-900">{alum.company}</span>
                   </p>
                   <div className="inline-block bg-[#F0FDF4] text-brand-emerald-light font-bold text-xs px-3 py-1.5 rounded-full border border-[#bbf7d0]">
                      {alum.salary}
                   </div>
                </div>
             ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-br from-[#0B3D91] to-[#011C54] text-white rounded-[32px] p-5 sm:p-8 md:p-10 w-full sm:w-fit shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-extrabold text-brand-cyan tracking-tighter mb-1 leading-none">+10,000</div>
                <div className="text-2xl font-bold mb-5 tracking-tight text-white">more placed</div>
                <p className="text-blue-100 max-w-[280px] text-sm leading-relaxed font-medium">
                  10,000+ students placed over the last 9 years - and 400+ in just the last 3 months.
                </p>
              </div>
          </div>

          {/* Bottom CTA block */}
          <div className="max-w-4xl mx-auto text-center mt-16 sm:mt-32 mb-10">
             <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-slate-900 mb-4 tracking-tight">
                These names could be <span className="text-brand-purple underline decoration-[5px] underline-offset-4">yours</span> in 5 months.
             </h2>
             <p className="text-slate-600 font-medium mb-8 text-base sm:text-lg">Few seats left for the upcoming batch.</p>
             <div className="inline-flex items-center gap-2 text-brand-emerald-light font-bold text-[13px] bg-white border border-[#A7F3D0] px-4 py-2 rounded-full mb-12 shadow-sm tracking-wide">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                312 placed alumni in last 4 months
             </div>

             <LeadForm 
               layout="bar" 
               theme="light" 
               buttonText="DOWNLOAD SYLLABUS & REPORT" 
             />
             
             <div className="text-slate-500 text-sm font-medium mt-6">
                <span className="text-brand-blue font-bold">7 seats left</span> · No spam · Reply within 15 mins
             </div>
          </div>

        </div>
    </section>
  );
}
