import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { staggerContainer, scaleUp, fadeIn } from '@/lib/animations';
import { coursesData } from '@/data/courses';

const themeStyles = {
  blue: {
    container: 'bg-brand-bg-card/50 border-white/10 hover:border-brand-secondary/35',
    badge: 'bg-brand-secondary/10 text-brand-secondary-hover border-brand-secondary/20',
    bullet: 'bg-brand-secondary',
    extraItem: 'bg-white/5 border-white/10',
    extraIcon: 'bg-brand-secondary/10 text-brand-secondary-hover',
    emiText: 'text-white',
    batchBg: 'bg-brand-secondary/10 border-brand-secondary/20 text-slate-200',
    primaryButton: 'bg-slate-800 hover:bg-slate-700 text-white shadow-md'
  },
  indigo: {
    container: 'bg-brand-bg-card border-[3px] border-brand-primary shadow-2xl z-10 lg:scale-100',
    badge: 'bg-brand-primary/10 text-brand-primary-hover border-brand-primary/20',
    bullet: 'bg-brand-primary',
    extraItem: 'bg-brand-primary/5 border-brand-primary/10',
    extraIcon: 'bg-brand-primary/10 text-brand-primary',
    emiText: 'text-brand-primary-hover',
    batchBg: 'bg-brand-primary/10 border-brand-primary/20 text-slate-200',
    primaryButton: 'bg-gradient-to-r from-brand-primary-grad-start to-brand-primary-grad-end text-slate-950 hover:brightness-110 shadow-lg shadow-brand-primary/15'
  },
  orange: {
    container: 'bg-brand-bg-card/50 border-white/10 hover:border-brand-primary/35 shadow-md',
    badge: 'bg-brand-primary/10 text-brand-primary-hover border-brand-primary/20',
    bullet: 'bg-brand-primary',
    extraItem: 'bg-white/5 border-brand-primary/10',
    extraIcon: 'bg-brand-primary/10 text-brand-primary',
    emiText: 'text-brand-primary-hover',
    batchBg: 'bg-brand-primary/10 border-brand-primary/20 text-slate-200',
    primaryButton: 'bg-slate-800 hover:bg-slate-700 text-white shadow-md'
  }
};

export default function AllCourses() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-24 px-5 sm:px-6 md:px-12 bg-brand-bg-dark text-center">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="flex justify-start mb-8">
          <a href="#">
            <motion.button
              whileHover={{ x: -4 }}
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-bold text-sm bg-white/5 hover:bg-white/10 px-5 py-3 rounded-xl border border-white/10 cursor-pointer transition-colors backdrop-blur-md"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </motion.button>
          </a>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-16"
        >
          <div className="text-brand-primary font-extrabold text-sm tracking-widest uppercase mb-4">OUR CURRICULUM</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-light-heading tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Explore All <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Trading Programs</span>
          </h1>
          <p className="text-brand-light-body text-lg sm:text-xl font-semibold max-w-2xl mx-auto">
            From stock market basics to advanced quantitative options trading. Choose the track that fits your goals.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left items-stretch"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {coursesData.map((course) => {
            const styles = themeStyles[course.colorTheme];
            return (
              <motion.div 
                key={course.id}
                variants={scaleUp} 
                className={`border rounded-[32px] p-5 sm:p-8 flex flex-col hover:shadow-xl transition-all duration-300 h-full group ${styles.container}`}
              >
                {/* Badges */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {course.badgeType === 'popular' && (
                    <div className="bg-brand-secondary text-slate-950 text-xs font-bold px-4 py-1.5 rounded-full w-fit uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg> 
                      Most Popular
                    </div>
                  )}
                  {course.badgeType === 'flagship' && (
                    <div className="bg-brand-primary text-slate-950 text-xs font-bold px-4 py-1.5 rounded-full w-fit uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                      ★ Flagship Program
                    </div>
                  )}
                  <div className={`border text-xs font-bold px-4 py-1.5 rounded-full w-fit uppercase tracking-widest shadow-sm ${styles.badge}`}>
                    {course.badge}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-brand-light-heading mb-6 leading-snug tracking-tight">
                  {course.title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex gap-4">
                    <span className="w-20 text-slate-500 font-bold text-xs tracking-widest uppercase mt-0.5">Duration</span>
                    <span className="font-semibold text-slate-200 text-[14px]">{course.duration}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-20 text-slate-500 font-bold text-xs tracking-widest uppercase mt-0.5">Format</span>
                    <span className="font-semibold text-slate-200 text-[14px]">{course.format}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-20 text-slate-500 font-bold text-xs tracking-widest uppercase mt-0.5">Schedule</span>
                    <span className="font-semibold text-slate-200 text-[14px]">{course.schedule}</span>
                  </div>
                </div>

                <div className="mb-6 flex-grow">
                  <div className="text-slate-500 font-bold text-xs tracking-widest uppercase mb-3">Topics Covered</div>
                  <ul className="space-y-2.5">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 group-hover:scale-125 transition-transform ${styles.bullet}`}/>
                        <span className="text-slate-300 font-medium text-[14px]">{topic}</span>
                      </li>
                    ))}
                    
                    {course.idealAudience && (
                      <li className={`flex items-start gap-3 mt-4 text-[14px] font-medium text-slate-300 p-3 rounded-xl border shadow-sm ${styles.extraItem}`}>
                        <span className={`rounded-full p-1 mt-0.5 shrink-0 ${styles.extraIcon}`}>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                          </svg>
                        </span>
                        <span><strong>Ideal for:</strong> {course.idealAudience}</span>
                      </li>
                    )}
                    
                    {course.bonus && (
                      <li className={`flex items-start gap-3 mt-3 text-[14px] font-medium text-slate-200 p-3 rounded-xl border shadow-sm bg-brand-success/15 border-brand-success/20`}>
                        <span className={`rounded-full p-1 mt-0.5 shrink-0 bg-brand-success/10 text-brand-success`}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-8z" />
                          </svg>
                        </span>
                        <span><strong>Bonus:</strong> {course.bonus}</span>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10 shadow-sm">
                    <div className="text-slate-400 font-bold text-xs tracking-widest uppercase mb-1">Course Fee</div>
                    <div className={`text-2xl font-extrabold ${styles.emiText} my-0.5`}>
                      {course.fee}
                    </div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      One-time Investment (All Taxes Incl.)
                    </div>
                  </div>
                  
                  <div className={`rounded-2xl p-4 border ${styles.batchBg}`}>
                    <div className="font-bold text-xs tracking-widest uppercase mb-1 opacity-70">Next Batch In</div>
                    <div className="font-bold text-base">{course.nextBatch}</div>
                    {course.remainingSeatsText && (
                      <div className="inline-flex items-center gap-2 bg-white/5 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-300 shadow-sm border border-white/10 mt-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-success animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"/>
                        {course.remainingSeatsText}
                      </div>
                    )}
                  </div>
                  
                  <a href="#final-cta" className="block w-full">
                    <motion.button 
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }} 
                      className={`w-full font-bold py-4.5 rounded-xl shadow-md border-0 transition-colors flex justify-center items-center gap-2 mt-2 uppercase ${styles.primaryButton}`}
                    >
                       {course.badgeType === 'popular' ? 'APPLY FOR ADMISSION' : 'BOOK FREE COUNSELING'} <span className="text-xl leading-none">→</span>
                    </motion.button>
                  </a>
                  
                  <a href={`https://wa.me/919845961990?text=Hi%2C%20I%20want%20to%20download%20the%20syllabus%20for%20${encodeURIComponent(course.title)}.`} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <motion.button 
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }} 
                      className="w-full bg-white/5 border border-white/10 text-white font-bold py-4.5 rounded-xl hover:bg-white/10 transition-colors uppercase text-sm"
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
