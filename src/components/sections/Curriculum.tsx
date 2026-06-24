import React from 'react';
import { motion } from 'motion/react';
import { staggerContainer, scaleUp, fadeIn } from '@/lib/animations';
import { workshopCourses } from '@/data/curriculum';

export default function Curriculum() {
  return (
    <section id="curriculum" className="bg-[#FAFBFD] py-16 md:py-28 px-5 sm:px-6 md:px-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="text-brand-orange font-extrabold text-sm tracking-widest uppercase mb-4">OUR WORKSHOPS & PROGRAMS</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-light-heading tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Learn AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-cyan">Trading & Analysis</span>
          </h2>
          <p className="text-brand-light-body text-lg sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Gain a professional edge. Master fundamental analysis, technical chart reading, and derivatives strategies using AI tools.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 lg:gap-10 text-left items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {workshopCourses.map((course) => {
            const isPremium = course.id === 'futures-options-trader-pro';
            return (
              <motion.div 
                key={course.id}
                variants={scaleUp} 
                className={`border rounded-[32px] p-6 sm:p-8 flex flex-col hover:shadow-xl transition-all duration-300 h-full group bg-white ${
                  isPremium ? 'border-brand-orange shadow-md ring-2 ring-brand-orange/10' : 'border-slate-100 shadow-sm'
                }`}
              >
                {/* Badges & Meta Info */}
                <div className="flex justify-between items-center mb-6">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${
                    isPremium ? 'bg-brand-orange/10 text-brand-orange-hover' : 'bg-brand-cyan/10 text-brand-cyan-hover'
                  }`}>
                    {course.badge}
                  </span>
                  <span className="text-lg font-extrabold text-brand-light-heading">{course.fee}</span>
                </div>

                <h3 className={`text-xl sm:text-2xl font-extrabold text-brand-light-heading mb-4 leading-snug tracking-tight transition-colors ${
                  isPremium ? 'group-hover:text-brand-orange' : 'group-hover:text-brand-cyan'
                }`}>
                  {course.title}
                </h3>
                
                <p className="text-brand-light-body text-sm leading-relaxed mb-6 flex-grow">
                  {course.tagline}
                </p>

                {/* Summarized preview points */}
                <div className="mb-8 bg-slate-50/50 rounded-2xl p-5 border border-slate-100">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Highlights Include:</div>
                  <ul className="space-y-3">
                    {course.modules.slice(0, 3).map((mod, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-success/10 text-brand-success flex items-center justify-center">
                          <svg className="w-3 h-3 text-brand-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-brand-light-body font-medium text-[13.5px] line-clamp-1">{mod.title}</span>
                      </li>
                    ))}
                    {course.modules.length > 3 && (
                      <li className="text-[12.5px] text-slate-400 font-semibold pl-8">
                        + {course.modules.length - 3} more training modules
                      </li>
                    )}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="space-y-3 mt-auto">
                  <a href={`#/course-details/${course.id}`} className="block w-full">
                    <motion.button 
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }} 
                      className={`w-full font-bold py-4 rounded-xl transition-all flex justify-center items-center gap-2 uppercase cursor-pointer text-sm ${
                        isPremium 
                          ? 'bg-gradient-to-r from-brand-orange-grad-start to-brand-orange-grad-end text-slate-950 hover:brightness-110 shadow-lg shadow-brand-orange/15 border-transparent' 
                          : 'bg-brand-bg-dark hover:bg-slate-900 text-white border-transparent shadow-md'
                      }`}
                    >
                      View Full Syllabus
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
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
