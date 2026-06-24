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
          <div className="text-brand-blue font-extrabold text-sm tracking-widest uppercase mb-4">OUR WORKSHOPS & PROGRAMS</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Learn AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Trading & Analysis</span>
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
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
                  isPremium ? 'border-indigo-200 shadow-md ring-2 ring-indigo-500/10' : 'border-slate-100 shadow-sm'
                }`}
              >
                {/* Badges & Meta Info */}
                <div className="flex justify-between items-center mb-6">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${
                    isPremium ? 'bg-indigo-100 text-indigo-700' : 'bg-blue-50 text-blue-700'
                  }`}>
                    {course.badge}
                  </span>
                  <span className="text-lg font-extrabold text-slate-900">{course.fee}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 leading-snug tracking-tight group-hover:text-brand-blue transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {course.tagline}
                </p>

                {/* Summarized preview points */}
                <div className="mb-8 bg-slate-50/50 rounded-2xl p-5 border border-slate-100">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Highlights Include:</div>
                  <ul className="space-y-3">
                    {course.modules.slice(0, 3).map((mod, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-slate-700 font-medium text-[13.5px] line-clamp-1">{mod.title}</span>
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
                      className={`w-full font-bold py-4 rounded-xl shadow-sm border transition-all flex justify-center items-center gap-2 uppercase cursor-pointer text-sm ${
                        isPremium 
                          ? 'bg-indigo-600 hover:bg-indigo-700 text-white border-transparent' 
                          : 'bg-slate-900 hover:bg-black text-white border-transparent'
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
