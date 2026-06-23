import React from 'react';
import { motion } from 'motion/react';
import { staggerContainer, scaleUp, fadeIn } from '../lib/animations';

export default function CourseTracks() {
  return (
    <section id="courses" className="py-32 px-6 md:px-12 bg-white text-center border-t border-slate-100">
       <div className="max-w-7xl mx-auto">
         <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeIn}
           className="mb-20"
         >
           <div className="text-blue-600 font-extrabold text-sm tracking-widest uppercase mb-4">COURSE TRACKS</div>
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight mb-8 max-w-4xl mx-auto leading-tight">
             Choose your track – <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">digital marketing courses in Bangalore</span> for every goal
           </h2>
         </motion.div>

         <motion.div 
           className="grid lg:grid-cols-3 gap-10 text-left items-start"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={staggerContainer}
         >
            {/* Card 1 */}
            <motion.div variants={scaleUp} className="bg-slate-50 border border-slate-200 rounded-[32px] p-8 md:p-10 flex flex-col shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full group">
               <div className="bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full w-fit uppercase tracking-widest mb-8 border border-blue-200 shadow-sm">
                 3-Month Track
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-8 leading-snug tracking-tight">
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
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0 group-hover:scale-125 transition-transform"/>
                        <span className="text-slate-700 font-medium text-[15px]">{item}</span>
                     </li>
                   ))}
                   <li className="flex items-start gap-3 mt-5 text-[15px] font-medium text-slate-700 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                     <span className="bg-blue-50 text-blue-600 rounded-full p-1 mt-0.5 shrink-0"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></span>
                     15+ live projects · 20+ tools with AI
                   </li>
                   <li className="flex items-start gap-3 text-[15px] font-medium text-slate-700 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                     <span className="bg-blue-50 text-blue-600 rounded-full p-1 mt-0.5 shrink-0"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></span>
                     7 industry certifications included
                   </li>
                 </ul>
               </div>

               <div className="mt-auto space-y-4 pt-6 border-t border-slate-200">
                  <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                    <div className="text-slate-500 font-bold text-xs tracking-widest uppercase mb-1">No-Cost EMI</div>
                    <div className="text-2xl font-extrabold text-slate-900">₹5,000 <span className="text-sm font-medium text-slate-500">/month</span></div>
                  </div>
                  <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 text-blue-900">
                    <div className="font-bold text-xs tracking-widest uppercase mb-1 opacity-70">Next Batch In</div>
                    <div className="font-bold text-lg">16 Days</div>
                  </div>
                  
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-[#111827] hover:bg-black text-white font-bold py-4 rounded-xl shadow-md border-0 transition-colors flex justify-center items-center gap-2 mt-2">
                     START YOUR DM CAREER <span className="text-xl leading-none">→</span>
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-white border border-slate-300 text-slate-700 font-bold py-4 rounded-xl hover:bg-slate-50 hover:text-slate-900 transition-colors">
                     View curriculum
                  </motion.button>
               </div>
            </motion.div>

            {/* Card 2 - Featured */}
            <motion.div variants={scaleUp} className="bg-white border-[3px] border-blue-600 rounded-[32px] p-8 md:p-10 flex flex-col shadow-[0_30px_60px_-15px_rgba(37,99,235,0.25)] relative transform lg:-translate-y-4 h-full z-10 lg:scale-105">
               {/* Badges */}
               <div className="flex flex-wrap gap-3 mb-8">
                 <div className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full w-fit uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                   <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> Most Popular
                 </div>
                 <div className="bg-indigo-50 text-indigo-700 text-xs font-bold px-4 py-1.5 rounded-full w-fit uppercase tracking-widest border border-indigo-200">
                   5-Month Track
                 </div>
               </div>

               <h3 className="text-3xl font-extrabold text-slate-900 mb-8 leading-snug tracking-tight">
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
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0"/>
                        <span className="text-slate-700 font-medium text-[15px]">{item}</span>
                     </li>
                   ))}
                   <li className="flex items-start gap-3 mt-5 text-[15px] font-medium text-slate-700 bg-indigo-50 p-3 rounded-xl border border-indigo-100 shadow-sm">
                     <span className="bg-indigo-100 text-indigo-600 rounded-full p-1 mt-0.5"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></span>
                     25+ live projects · 60+ tools with AI
                   </li>
                   <li className="flex items-start gap-3 text-[15px] font-medium text-slate-700 bg-indigo-50 p-3 rounded-xl border border-indigo-100 shadow-sm">
                     <span className="bg-indigo-100 text-indigo-600 rounded-full p-1 mt-0.5"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></span>
                     12 industry certifications included · 2 specialisations
                   </li>
                 </ul>
               </div>

               <div className="mt-auto space-y-4 pt-6 border-t border-slate-100">
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                    <div className="text-slate-500 font-bold text-xs tracking-widest uppercase mb-1">No-Cost EMI</div>
                    <div className="text-2xl font-extrabold text-blue-700">₹7,500 <span className="text-sm font-medium text-slate-500">/month</span></div>
                  </div>
                  <div className="bg-blue-50 rounded-2xl p-5 text-blue-900 border border-blue-200">
                    <div className="font-bold text-xs tracking-widest uppercase mb-1 opacity-70">Next Batch In</div>
                    <div className="font-bold text-lg mb-3">12 Days</div>
                    <div className="inline-flex items-center gap-2 bg-white rounded-lg px-3 py-2 text-xs font-bold text-slate-700 shadow-sm border border-slate-200">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"/>
                      9 of 24 seats remaining
                    </div>
                  </div>
                  
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 border-0 transition-colors flex justify-center items-center gap-2 mt-2">
                     START YOUR DM CAREER <span className="text-xl leading-none">→</span>
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-white border border-slate-300 text-slate-700 font-bold py-4 rounded-xl hover:bg-slate-50 transition-colors">
                     View curriculum
                  </motion.button>
               </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={scaleUp} className="bg-orange-50/50 border border-orange-200 rounded-[32px] p-8 md:p-10 flex flex-col shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 h-full group">
               <div className="flex flex-wrap gap-3 mb-8">
                 <div className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full w-fit uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                   ★ Flagship Program
                 </div>
                 <div className="bg-white text-orange-800 text-xs font-bold px-4 py-1.5 rounded-full w-fit uppercase tracking-widest border border-orange-200 shadow-sm">
                   7-Month Track
                 </div>
               </div>

               <h3 className="text-2xl font-bold text-slate-900 mb-8 leading-snug tracking-tight">
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
                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0 group-hover:scale-125 transition-transform"/>
                        <span className="text-slate-700 font-medium text-[15px]">{item}</span>
                     </li>
                   ))}
                    <li className="flex items-start gap-3 mt-5 text-[15px] font-medium text-slate-700 bg-white p-3 rounded-xl border border-orange-100 shadow-sm">
                     <span className="bg-orange-100 text-orange-600 rounded-full p-1 mt-0.5"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></span>
                     All PGCP modules + 16 AI-for-Business modules · 268 hours total
                   </li>
                   <li className="flex items-start gap-3 text-[15px] font-medium text-slate-700 bg-white p-3 rounded-xl border border-orange-100 shadow-sm">
                     <span className="bg-orange-100 text-orange-600 rounded-full p-1 mt-0.5"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></span>
                     12 certifications + AI Business specialisation
                   </li>
                 </ul>
               </div>

               <div className="mt-auto space-y-4 pt-6 border-t border-orange-200/50">
                  <div className="bg-white rounded-2xl p-5 border border-orange-100 shadow-sm">
                    <div className="text-slate-500 font-bold text-xs tracking-widest uppercase mb-1">No-Cost EMI</div>
                    <div className="text-2xl font-extrabold text-orange-700">₹10,000 <span className="text-sm font-medium text-slate-500">/month</span></div>
                  </div>
                  <div className="bg-orange-100/50 rounded-2xl p-5 border border-orange-200 text-orange-900">
                    <div className="font-bold text-xs tracking-widest uppercase mb-1 opacity-70">Next Batch In</div>
                    <div className="font-bold text-lg">12 Days</div>
                  </div>
                  
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-[#111827] hover:bg-black text-white font-bold py-4 rounded-xl shadow-md border-0 transition-colors flex justify-center items-center gap-2 mt-2">
                     START YOUR DM CAREER <span className="text-xl leading-none">→</span>
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-white border border-slate-300 text-slate-700 font-bold py-4 rounded-xl hover:bg-slate-50 hover:text-slate-900 transition-colors">
                     View curriculum
                  </motion.button>
               </div>
            </motion.div>
         </motion.div>
       </div>
    </section>
  );
}
