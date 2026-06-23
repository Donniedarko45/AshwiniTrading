import React from 'react';

export default function CourseTracks() {
  return (
    <section id="courses" className="py-24 px-6 md:px-12 bg-white text-center">
       <div className="max-w-7xl mx-auto">
         <div className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">COURSE TRACKS</div>
         <h2 className="text-4xl md:text-5xl font-extrabold text-[#1f2937] tracking-tight mb-16 max-w-4xl mx-auto leading-tight">
           Choose your track – <span className="text-blue-600">digital marketing courses in Bangalore</span> for every goal
         </h2>

         <div className="grid lg:grid-cols-3 gap-8 text-left items-start">
            {/* Card 1 */}
            <div className="bg-white border-2 border-blue-100 rounded-[32px] p-8 flex flex-col shadow-sm hover:shadow-xl transition-shadow h-full">
               <div className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full w-fit uppercase tracking-widest mb-6 border border-blue-200">
                 3-Month Track
               </div>
               <h3 className="text-[22px] font-bold text-slate-900 mb-8 leading-snug">
                 Professional Certification Program in Digital Marketing & Analytics
               </h3>
               
               <div className="space-y-4 mb-8">
                 <div className="flex gap-4"><span className="w-24 text-slate-500 font-bold text-xs tracking-widest uppercase mt-0.5">Duration</span><span className="font-semibold text-slate-900 text-[15px]">3 Months</span></div>
                 <div className="flex gap-4"><span className="w-24 text-slate-500 font-bold text-xs tracking-widest uppercase mt-0.5">Format</span><span className="font-semibold text-slate-900 text-[15px]">Classroom + Online available</span></div>
                 <div className="flex gap-4"><span className="w-24 text-slate-500 font-bold text-xs tracking-widest uppercase mt-0.5">Schedule</span><span className="font-semibold text-slate-900 text-[15px]">Mon – Fri | 2 hours/day</span></div>
               </div>

               <div className="mb-8">
                 <div className="text-slate-500 font-bold text-xs tracking-widest uppercase mb-4">Hireable For</div>
                 <ul className="space-y-3">
                   {['SEO Executive / SEO Analyst', 'Social Media Executive', 'Google Ads / PPC Executive', 'Content Marketing Executive', 'Email Marketing Executive', 'Digital Marketing Coordinator', 'Performance Marketer'].map((item, i) => (
                     <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/>
                        <span className="text-slate-700 font-medium text-[15px]">{item}</span>
                     </li>
                   ))}
                   <li className="flex items-start gap-3 mt-5 text-[15px] font-medium text-slate-700 bg-blue-50/50 p-2 rounded-lg">
                     <span className="bg-blue-100 text-blue-600 rounded-full p-0.5 mt-0.5 shrink-0"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></span>
                     15+ live projects · 20+ tools with AI
                   </li>
                   <li className="flex items-start gap-3 text-[15px] font-medium text-slate-700 bg-blue-50/50 p-2 rounded-lg">
                     <span className="bg-blue-100 text-blue-600 rounded-full p-0.5 mt-0.5 shrink-0"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></span>
                     7 industry certifications included
                   </li>
                 </ul>
               </div>

               <div className="mt-auto space-y-4 pt-4 border-t border-slate-100">
                  <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-100">
                    <div className="text-slate-500 font-bold text-xs tracking-widest uppercase mb-1">No-Cost EMI</div>
                    <div className="text-2xl font-extrabold text-blue-700">₹5,000 <span className="text-sm font-medium text-slate-500">/month</span></div>
                  </div>
                  <div className="bg-[#F0F5FF] rounded-2xl p-5 border border-blue-50 text-blue-800">
                    <div className="font-bold text-xs tracking-widest uppercase mb-1 opacity-70">Next Batch In</div>
                    <div className="font-bold text-lg">16 Days</div>
                  </div>
                  
                  <button className="w-full bg-[#FF7B47] hover:bg-[#E6561B] text-white font-bold py-4 rounded-xl shadow-md border-0 transition-colors flex justify-center items-center gap-2">
                     START YOUR DM CAREER <span className="text-xl leading-none">→</span>
                  </button>
                  <button className="w-full bg-white border border-slate-300 text-blue-600 font-bold py-4 rounded-xl hover:bg-slate-50 transition-colors">
                     View curriculum
                  </button>
               </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-[3px] border-blue-500 rounded-[32px] p-8 flex flex-col shadow-[0_20px_50px_-12px_rgba(59,130,246,0.25)] relative transform lg:-translate-y-4 h-full z-10 scale-[1.02]">
               {/* Badges */}
               <div className="flex flex-wrap gap-2 mb-6">
                 <div className="bg-[#5C65F6] text-white text-xs font-bold px-3 py-1.5 rounded-full w-fit uppercase tracking-widest flex items-center gap-1 shadow-sm">
                   ★ Most Popular
                 </div>
                 <div className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1.5 rounded-full w-fit uppercase tracking-widest border border-purple-200">
                   5-Month Track
                 </div>
               </div>

               <h3 className="text-[26px] font-bold text-slate-900 mb-8 leading-snug">
                 Post Graduate Program in Digital Marketing & Analytics
               </h3>
               
               <div className="space-y-4 mb-8">
                 <div className="flex gap-4"><span className="w-24 text-slate-500 font-bold text-xs tracking-widest uppercase mt-0.5">Duration</span><span className="font-semibold text-slate-900 text-[15px]">5 Months</span></div>
                 <div className="flex gap-4"><span className="w-24 text-slate-500 font-bold text-xs tracking-widest uppercase mt-0.5">Format</span><span className="font-semibold text-slate-900 text-[15px]">Classroom + Online available</span></div>
                 <div className="flex gap-4"><span className="w-24 text-slate-500 font-bold text-xs tracking-widest uppercase mt-0.5">Schedule</span><span className="font-semibold text-slate-900 text-[15px]">Weekdays & Weekends</span></div>
               </div>

               <div className="mb-8">
                 <div className="text-slate-500 font-bold text-xs tracking-widest uppercase mb-4">Hireable For</div>
                 <ul className="space-y-3">
                   {['Digital Marketing Executive', 'Performance Marketing Executive', 'GEO/AEO Specialist', 'Social Media Marketing Executive', 'Content Strategist', 'CRM & Marketing AI Automation Specialist', 'E-Commerce Marketing Manager', 'Growth Marketer'].map((item, i) => (
                     <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"/>
                        <span className="text-slate-700 font-medium text-[15px]">{item}</span>
                     </li>
                   ))}
                   <li className="flex items-start gap-3 mt-5 text-[15px] font-medium text-slate-700 bg-purple-50/50 p-2 rounded-lg">
                     <span className="bg-purple-100 text-purple-600 rounded-full p-0.5 mt-0.5"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></span>
                     25+ live projects · 60+ tools with AI
                   </li>
                   <li className="flex items-start gap-3 text-[15px] font-medium text-slate-700 bg-purple-50/50 p-2 rounded-lg">
                     <span className="bg-purple-100 text-purple-600 rounded-full p-0.5 mt-0.5"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></span>
                     12 industry certifications included · 2 specialisations
                   </li>
                 </ul>
               </div>

               <div className="mt-auto space-y-4 pt-4 border-t border-slate-100">
                  <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-100">
                    <div className="text-slate-500 font-bold text-xs tracking-widest uppercase mb-1">No-Cost EMI</div>
                    <div className="text-2xl font-extrabold text-[#5C65F6]">₹7,500 <span className="text-sm font-medium text-slate-500">/month</span></div>
                  </div>
                  <div className="bg-[#F0F5FF] rounded-2xl p-5 text-blue-900 border-x border-t border-b-4 border-blue-200">
                    <div className="font-bold text-xs tracking-widest uppercase mb-1 opacity-70">Next Batch In</div>
                    <div className="font-bold text-lg mb-2">12 Days</div>
                    <div className="inline-flex items-center gap-1.5 bg-white rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-700 shadow-sm border border-slate-200">
                      <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"/>
                      9 of 24 seats remaining
                    </div>
                  </div>
                  
                  <button className="w-full bg-[#FF7B47] hover:bg-[#E6561B] text-white font-bold py-4 rounded-xl shadow-md border-0 transition-colors flex justify-center items-center gap-2">
                     START YOUR DM CAREER <span className="text-xl leading-none">→</span>
                  </button>
                  <button className="w-full bg-white border border-blue-300 text-blue-600 font-bold py-4 rounded-xl hover:bg-slate-50 transition-colors">
                     View curriculum
                  </button>
               </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FFFDF7] border-2 border-[#FDE68A] rounded-[32px] p-8 flex flex-col shadow-sm hover:shadow-xl transition-shadow h-full">
               <div className="flex flex-wrap gap-2 mb-6">
                 <div className="bg-[#D97706] text-white text-xs font-bold px-3 py-1.5 rounded-full w-fit uppercase tracking-widest flex items-center gap-1 shadow-sm">
                   ★ Flagship Program
                 </div>
                 <div className="bg-[#FEF3C7] text-[#92400E] text-xs font-bold px-3 py-1.5 rounded-full w-fit uppercase tracking-widest border border-[#FDE68A]">
                   7-Month Track
                 </div>
               </div>

               <h3 className="text-[22px] font-bold text-slate-900 mb-8 leading-snug">
                 ELEVATE™ – Digital Marketing + AI for Business Teams
               </h3>
               
               <div className="space-y-4 mb-8">
                 <div className="flex gap-4"><span className="w-24 text-slate-500 font-bold text-xs tracking-widest uppercase mt-0.5">Duration</span><span className="font-semibold text-slate-900 text-[15px]">7 Months</span></div>
                 <div className="flex gap-4"><span className="w-24 text-slate-500 font-bold text-xs tracking-widest uppercase mt-0.5">Format</span><span className="font-semibold text-slate-900 text-[15px]">Classroom + Online available</span></div>
                 <div className="flex gap-4"><span className="w-24 text-slate-500 font-bold text-xs tracking-widest uppercase mt-0.5">Schedule</span><span className="font-semibold text-slate-900 text-[15px]">Weekdays & Weekends</span></div>
               </div>

               <div className="mb-8">
                 <div className="text-slate-500 font-bold text-xs tracking-widest uppercase mb-4">Hireable For</div>
                 <ul className="space-y-3">
                   {['Performance Marketing Expert', 'AI Operations Executive', 'AI & Marketing Strategist', 'Business Growth Executive', 'MarTech Executive', 'Growth & Revenue Specialist', 'AI Business Transformation Consultant', 'AI Agency Founder'].map((item, i) => (
                     <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-2 shrink-0"/>
                        <span className="text-slate-700 font-medium text-[15px]">{item}</span>
                     </li>
                   ))}
                    <li className="flex items-start gap-3 mt-5 text-[15px] font-medium text-slate-700 bg-amber-50/50 p-2 rounded-lg">
                     <span className="bg-[#FEF3C7] text-[#D97706] rounded-full p-0.5 mt-0.5"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></span>
                     All PGCP modules + 16 AI-for-Business modules · 268 hours total
                   </li>
                   <li className="flex items-start gap-3 text-[15px] font-medium text-slate-700 bg-amber-50/50 p-2 rounded-lg">
                     <span className="bg-[#FEF3C7] text-[#D97706] rounded-full p-0.5 mt-0.5"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></span>
                     12 certifications + AI Business specialisation
                   </li>
                 </ul>
               </div>

               <div className="mt-auto space-y-4 pt-4 border-t border-amber-100">
                  <div className="bg-[#FEF9C3]/50 rounded-2xl p-5 border border-[#FEF08A]">
                    <div className="text-slate-600 font-bold text-xs tracking-widest uppercase mb-1">No-Cost EMI</div>
                    <div className="text-2xl font-extrabold text-[#92400E]">₹10,000 <span className="text-sm font-medium text-slate-600">/month</span></div>
                  </div>
                  <div className="bg-[#FFFBEB] rounded-2xl p-5 border border-[#FDE68A] text-[#92400E]">
                    <div className="font-bold text-xs tracking-widest uppercase mb-1 opacity-70">Next Batch In</div>
                    <div className="font-bold text-lg">12 Days</div>
                  </div>
                  
                  <button className="w-full bg-[#B45309] hover:bg-[#92400E] text-white font-bold py-4 rounded-xl shadow-md border-0 transition-colors flex justify-center items-center gap-2">
                     START YOUR DM CAREER <span className="text-xl leading-none">→</span>
                  </button>
                  <button className="w-full bg-transparent border-2 border-[#FDE68A] text-[#92400E] font-bold py-4 rounded-xl hover:bg-[#FEF3C7] transition-colors">
                     View curriculum
                  </button>
               </div>
            </div>
         </div>
       </div>
    </section>
  );
}
