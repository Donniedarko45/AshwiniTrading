import React from 'react';
import { motion } from 'motion/react';
import { staggerContainer, scaleUp, fadeIn } from '@/lib/animations';
import { courseTracks } from '@/data/courseTracks';

const themeStyles = {
  blue: {
    container: 'bg-slate-50 border-slate-200 hover:border-blue-200',
    badge: 'bg-blue-100 text-blue-700 border-blue-200',
    bullet: 'bg-blue-500',
    extraItem: 'bg-white border-slate-200',
    extraIcon: 'bg-blue-50 text-blue-600',
    emiText: 'text-slate-900',
    batchBg: 'bg-blue-50 border-blue-100 text-blue-900',
    primaryButton: 'bg-[#111827] hover:bg-black text-white'
  },
  indigo: {
    container: 'bg-white border-[3px] border-blue-600 shadow-[0_30px_60px_-15px_rgba(37,99,235,0.25)] lg:-translate-y-4 lg:scale-105 z-10',
    badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    bullet: 'bg-blue-600',
    extraItem: 'bg-indigo-50 border-indigo-100',
    extraIcon: 'bg-indigo-100 text-indigo-600',
    emiText: 'text-blue-700',
    batchBg: 'bg-blue-50 border-blue-200 text-blue-900',
    primaryButton: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30'
  },
  orange: {
    container: 'bg-orange-50/50 border-orange-200 hover:border-orange-300',
    badge: 'bg-white text-orange-800 border-orange-200',
    bullet: 'bg-orange-500',
    extraItem: 'bg-white border-orange-100',
    extraIcon: 'bg-orange-100 text-orange-600',
    emiText: 'text-orange-700',
    batchBg: 'bg-orange-100/50 border-orange-200 text-orange-900',
    primaryButton: 'bg-[#111827] hover:bg-black text-white'
  }
};

export default function CourseTracks() {
  return (
    <section id="courses" className="py-16 md:py-32 px-5 sm:px-6 md:px-12 bg-white text-center border-t border-slate-100">
       <div className="max-w-7xl mx-auto">
         <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeIn}
           className="mb-20"
         >
           <div className="text-brand-blue font-extrabold text-sm tracking-widest uppercase mb-4">COURSE TRACKS</div>
           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight mb-8 max-w-4xl mx-auto leading-tight">
             Choose your track – <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">digital marketing courses in Bangalore</span> for every goal
           </h2>
         </motion.div>

         <motion.div 
           className="grid lg:grid-cols-3 gap-6 lg:gap-10 text-left items-stretch"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={staggerContainer}
         >
            {courseTracks.map((track) => {
              const styles = themeStyles[track.colorTheme];
              return (
                <motion.div 
                  key={track.id}
                  variants={scaleUp} 
                  className={`border rounded-[32px] p-5 sm:p-8 md:p-10 flex flex-col hover:shadow-xl transition-all duration-300 h-full group ${styles.container}`}
                >
                  {/* Badges */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {track.badgeType === 'popular' && (
                      <div className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full w-fit uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg> 
                        Most Popular
                      </div>
                    )}
                    {track.badgeType === 'flagship' && (
                      <div className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full w-fit uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                        ★ Flagship Program
                      </div>
                    )}
                    <div className={`border text-xs font-bold px-4 py-1.5 rounded-full w-fit uppercase tracking-widest shadow-sm ${styles.badge}`}>
                      {track.badge}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-slate-900 mb-6 sm:mb-8 leading-snug tracking-tight">
                    {track.title}
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex gap-4">
                      <span className="w-24 text-slate-500 font-bold text-xs tracking-widest uppercase mt-0.5">Duration</span>
                      <span className="font-semibold text-slate-900 text-[15px]">{track.duration}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="w-24 text-slate-500 font-bold text-xs tracking-widest uppercase mt-0.5">Format</span>
                      <span className="font-semibold text-slate-900 text-[15px]">{track.format}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="w-24 text-slate-500 font-bold text-xs tracking-widest uppercase mt-0.5">Schedule</span>
                      <span className="font-semibold text-slate-900 text-[15px]">{track.schedule}</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="text-slate-500 font-bold text-xs tracking-widest uppercase mb-4">Hireable For</div>
                    <ul className="space-y-3">
                      {track.hireableRoles.map((role, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full mt-2 shrink-0 group-hover:scale-125 transition-transform ${styles.bullet}`}/>
                          <span className="text-slate-700 font-medium text-[15px]">{role}</span>
                        </li>
                      ))}
                      
                      {track.features.map((feature, idx) => (
                        <li key={idx} className={`flex items-start gap-3 mt-4 text-[15px] font-medium text-slate-700 p-3 rounded-xl border shadow-sm ${styles.extraItem}`}>
                          <span className={`rounded-full p-1 mt-0.5 shrink-0 ${styles.extraIcon}`}>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto space-y-4 pt-6 border-t border-slate-200/60">
                   <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                     <div className="text-slate-500 font-bold text-xs tracking-widest uppercase mb-1">Tuition Fee</div>
                     <div className={`text-2xl font-extrabold ${styles.emiText}`}>
                       {track.emi} <span className="text-sm font-medium text-slate-500">/month</span>
                     </div>
                     <div className="text-xs sm:text-[11px] font-bold text-slate-500 mt-1 uppercase tracking-wider">
                       Total Program Fee: {track.totalFee} (All Taxes Incl.)
                     </div>
                   </div>
                   
                   <div className={`rounded-2xl p-5 border ${styles.batchBg}`}>
                     <div className="font-bold text-xs tracking-widest uppercase mb-1 opacity-70">Next Batch In</div>
                     <div className="font-bold text-lg">{track.nextBatch}</div>
                     {track.remainingSeatsText && (
                       <div className="inline-flex items-center gap-2 bg-white rounded-lg px-3 py-2 text-xs font-bold text-slate-700 shadow-sm border border-slate-200 mt-2">
                         <div className="w-2.5 h-2.5 rounded-full bg-brand-emerald animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"/>
                         {track.remainingSeatsText}
                       </div>
                     )}
                   </div>
                   
                   <a href="#final-cta" className="block w-full">
                     <motion.button 
                       whileHover={{ scale: 1.02 }} 
                       whileTap={{ scale: 0.98 }} 
                       className={`w-full font-bold py-4 rounded-xl shadow-md border-0 transition-colors flex justify-center items-center gap-2 mt-2 uppercase ${styles.primaryButton}`}
                     >
                        {track.badgeType === 'popular' ? 'APPLY FOR ADMISSION' : 'BOOK FREE COUNSELING'} <span className="text-xl leading-none">→</span>
                     </motion.button>
                   </a>
                   
                   <a href="https://wa.me/919606995525?text=Hi%2C%20I%20want%20to%20download%20the%20syllabus%20for%20Ashwini%20Trading%20Academy." target="_blank" rel="noopener noreferrer" className="block w-full">
                     <motion.button 
                       whileHover={{ scale: 1.02 }} 
                       whileTap={{ scale: 0.98 }} 
                       className="w-full bg-white border border-slate-300 text-slate-700 font-bold py-4 rounded-xl hover:bg-slate-50 hover:text-slate-900 transition-colors uppercase text-sm"
                     >
                        Get Syllabus via WhatsApp
                     </motion.button>
                   </a>
                  </div>
                </motion.div>
              );
            })}
         </motion.div>
       </div>
    </section>
  );
}
