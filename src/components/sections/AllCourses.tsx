import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { staggerContainer, scaleUp, fadeIn } from '@/lib/animations';
import { coursesData } from '@/data/courses';

const themeStyles = {
  blue: {
    container: 'bg-white border-slate-200 hover:border-brand-secondary/45 shadow-sm',
    badge: 'bg-brand-secondary/10 text-brand-secondary-hover border-brand-secondary/20',
    bullet: 'bg-brand-secondary',
    extraItem: 'bg-slate-50 border-slate-200',
    extraIcon: 'bg-brand-secondary/10 text-brand-secondary-hover',
    emiText: 'text-brand-navy',
    batchBg: 'bg-brand-secondary/10 border-brand-secondary/20 text-slate-700',
    primaryButton: 'bg-brand-navy hover:bg-slate-900 text-white'
  },
  indigo: {
    container: 'bg-white border-[3px] border-brand-primary shadow-xl z-10 lg:scale-100',
    badge: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20',
    bullet: 'bg-brand-primary',
    extraItem: 'bg-brand-primary/5 border-brand-primary/20',
    extraIcon: 'bg-brand-primary/10 text-brand-primary',
    emiText: 'text-brand-primary',
    batchBg: 'bg-brand-primary/10 border-brand-primary/20 text-slate-700',
    primaryButton: 'bg-gradient-to-r from-brand-primary-grad-start to-brand-primary-grad-end text-brand-navy hover:brightness-110 shadow-lg shadow-brand-primary/15'
  },
  orange: {
    container: 'bg-white border-slate-200 hover:border-brand-primary/45 shadow-sm shadow-md',
    badge: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20',
    bullet: 'bg-brand-primary',
    extraItem: 'bg-slate-50 border-brand-primary/10',
    extraIcon: 'bg-brand-primary/10 text-brand-primary',
    emiText: 'text-brand-primary',
    batchBg: 'bg-brand-primary/10 border-brand-primary/20 text-slate-700',
    primaryButton: 'bg-brand-navy hover:bg-slate-900 text-white'
  }
};

export default function AllCourses() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-24 px-5 sm:px-6 md:px-12 bg-white text-center">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="flex justify-start mb-8">
          <a href="#">
            <motion.button
              whileHover={{ x: -4 }}
              className="inline-flex items-center gap-2 text-slate-600 hover:text-brand-navy font-bold text-sm bg-slate-100/50 hover:bg-slate-100 px-5 py-3 rounded-xl border border-slate-200/80 cursor-pointer transition-colors backdrop-blur-md"
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-navy tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Explore All <span className="text-brand-primary">Trading Programs</span>
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl font-semibold max-w-2xl mx-auto">
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
                    <div className="bg-brand-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full w-fit uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg> 
                      Most Popular
                    </div>
                  )}
                  {course.badgeType === 'flagship' && (
                    <div className="bg-brand-primary text-brand-navy text-xs font-bold px-4 py-1.5 rounded-full w-fit uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                      ★ Flagship Program
                    </div>
                  )}
                  <div className={`border text-xs font-bold px-4 py-1.5 rounded-full w-fit uppercase tracking-widest shadow-sm ${styles.badge}`}>
                    {course.badge}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy mb-6 leading-snug tracking-tight">
                  {course.title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex gap-4">
                    <span className="w-20 text-slate-500 font-bold text-xs tracking-widest uppercase mt-0.5">Duration</span>
                    <span className="font-semibold text-slate-700 text-[14px]">{course.duration}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-20 text-slate-500 font-bold text-xs tracking-widest uppercase mt-0.5">Format</span>
                    <span className="font-semibold text-slate-700 text-[14px]">{course.format}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-20 text-slate-500 font-bold text-xs tracking-widest uppercase mt-0.5">Schedule</span>
                    <span className="font-semibold text-slate-700 text-[14px]">{course.schedule}</span>
                  </div>
                </div>

                <div className="mb-6 flex-grow">
                  <div className="text-slate-500 font-bold text-xs tracking-widest uppercase mb-3">Topics Covered</div>
                  <ul className="space-y-2.5">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 group-hover:scale-125 transition-transform ${styles.bullet}`}/>
                        <span className="text-slate-600 font-medium text-[14px]">{topic}</span>
                      </li>
                    ))}
                    
                    {course.idealAudience && (
                      <li className={`flex items-start gap-3 mt-4 text-[14px] font-medium text-slate-600 p-3 rounded-xl border shadow-sm ${styles.extraItem}`}>
                        <span className={`rounded-full p-1 mt-0.5 shrink-0 ${styles.extraIcon}`}>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                          </svg>
                        </span>
                        <span><strong>Ideal for:</strong> {course.idealAudience}</span>
                      </li>
                    )}
                    
                    {course.bonus && (
                      <li className={`flex items-start gap-3 mt-3 text-[14px] font-medium text-slate-700 p-3 rounded-xl border shadow-sm bg-brand-success/10 border-brand-success/25`}>
                        <span className={`rounded-full p-1 mt-0.5 shrink-0 bg-brand-success/15 text-brand-success`}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-8z" />
                          </svg>
                        </span>
                        <span><strong>Bonus:</strong> {course.bonus}</span>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 shadow-sm">
                    <div className="text-slate-500 font-bold text-xs tracking-widest uppercase mb-1">Course Fee</div>
                    <div className={`text-2xl font-extrabold ${styles.emiText} my-0.5`}>
                      {course.fee}
                    </div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      One-time Investment (All Taxes Incl.)
                    </div>
                  </div>
                  
                  <div className={`rounded-2xl p-4 border ${styles.batchBg}`}>
                    <div className="font-bold text-xs tracking-widest uppercase mb-1 opacity-70">Next Batch In</div>
                    <div className="font-bold text-base">{course.nextBatch}</div>
                    {course.remainingSeatsText && (
                      <div className="inline-flex items-center gap-2 bg-white/50 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-600 shadow-sm border border-slate-200/60 mt-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-success animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"/>
                        {course.remainingSeatsText}
                      </div>
                    )}
                  </div>
                  
                  <a href={`#/checkout/${course.id}`} className="block w-full">
                    <motion.button 
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }} 
                      className={`w-full font-bold py-4.5 rounded-xl shadow-md border-0 transition-colors flex justify-center items-center gap-2 mt-2 uppercase cursor-pointer ${styles.primaryButton}`}
                    >
                       ENROLL NOW <span className="text-xl leading-none">→</span>
                    </motion.button>
                  </a>
                  
                  <a href={`https://wa.me/918861756040?text=Hi%2C%20I%20want%20to%20download%20the%20syllabus%20for%20${encodeURIComponent(course.title)}.`} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <motion.button 
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }} 
                      className="w-full bg-white border border-slate-200 text-brand-navy font-bold py-4.5 rounded-xl hover:bg-slate-50 transition-colors uppercase text-sm shadow-sm cursor-pointer"
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
