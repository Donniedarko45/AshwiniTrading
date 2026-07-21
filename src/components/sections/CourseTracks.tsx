import React from 'react';
import { motion } from 'motion/react';
import { staggerContainer, fadeIn } from '@/lib/animations';
import { coursesData } from '@/data/courses';

export default function CourseTracks() {
  const homeCourses = [...coursesData]
    .filter(course =>
      ['foundation', 'basics-to-advanced', 'nism-certified'].includes(course.id)
    )
    .sort((a, b) => {
      const priceA = parseInt(a.fee.replace(/[^0-9]/g, ''), 10) || 0;
      const priceB = parseInt(b.fee.replace(/[^0-9]/g, ''), 10) || 0;
      return priceA - priceB;
    });

  return (
    <section id="courses" className="py-24 md:py-32 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200 pb-8"
        >
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 border border-slate-300 text-slate-500 font-mono text-xs tracking-widest uppercase mb-6 bg-white">
              COURSE TRACKS
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-navy tracking-tight leading-tight">
              Choose your track – <br className="hidden md:block" />
              <span className="text-brand-primary italic">for every goal.</span>
            </h2>
          </div>
        </motion.div>
 
        <motion.div 
          className="grid lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {homeCourses.map((course) => {
            return (
              <motion.div 
                key={course.id}
                variants={fadeIn} 
                className={`group p-8 md:p-10 rounded-2xl border transition-all duration-500 flex flex-col h-full relative ${
                  course.badgeType === 'flagship'
                    ? 'border-brand-primary bg-white shadow-[0_8px_30px_rgb(201,162,39,0.15)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(201,162,39,0.25)] scale-[1.02] z-10'
                    : 'border-slate-200/60 bg-white hover:border-brand-primary/30 surface-card-light hover:-translate-y-1 hover:shadow-lg'
                }`}
              >
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {course.badgeType === 'popular' && (
                    <div className="px-3 py-1 rounded-full border border-brand-secondary/30 bg-brand-secondary/5 text-brand-secondary font-bold text-[10px] tracking-widest uppercase">
                      Most Popular
                    </div>
                  )}
                  {course.badgeType === 'flagship' && (
                    <div className="px-3 py-1 rounded-full border border-brand-primary bg-brand-primary/10 text-brand-primary font-bold text-[10px] tracking-widest uppercase shadow-sm">
                      Flagship Program
                    </div>
                  )}
                  <div className="px-3 py-1 rounded-full border border-slate-300 bg-white text-slate-500 font-bold text-[10px] tracking-widest uppercase">
                    {course.badge}
                  </div>
                </div>

                 <h3 className="font-serif text-3xl font-medium text-brand-navy mb-8 tracking-tight group-hover:text-brand-primary transition-colors min-h-[4rem] flex items-start">
                  {course.title}
                </h3>
                
                <div className="space-y-4 mb-10">
                  <div className="flex gap-4 border-b border-slate-100 pb-2">
                    <span className="w-24 text-slate-400 font-mono text-xs tracking-widest uppercase mt-0.5">Duration</span>
                    <span className="font-medium text-slate-700 text-sm">{course.duration}</span>
                  </div>
                  <div className="flex gap-4 border-b border-slate-100 pb-2">
                    <span className="w-24 text-slate-400 font-mono text-xs tracking-widest uppercase mt-0.5">Format</span>
                    <span className="font-medium text-slate-700 text-sm">{course.format}</span>
                  </div>
                  <div className="flex gap-4 border-b border-slate-100 pb-2">
                    <span className="w-24 text-slate-400 font-mono text-xs tracking-widest uppercase mt-0.5">Schedule</span>
                    <span className="font-medium text-slate-700 text-sm">{course.schedule}</span>
                  </div>
                </div>

                <div className="mb-12 flex-grow">
                  <div className="text-slate-400 font-bold text-[10px] tracking-widest uppercase mb-4">Topics Covered</div>
                  <ul className="space-y-3">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="text-brand-primary shrink-0 mt-0.5 font-bold">›</div>
                        <span className="text-slate-600 font-light text-[15px]">{topic}</span>
                      </li>
                    ))}
                    
                    {course.idealAudience && (
                      <li className="flex items-start gap-3 mt-6 text-[14px] font-medium text-slate-600 p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                        <span><strong>Ideal for:</strong> {course.idealAudience}</span>
                      </li>
                    )}
                    
                    {course.bonus && (
                      <li className="flex items-start gap-3 mt-3 text-[14px] font-medium text-brand-success p-4 rounded-xl border border-brand-success/30 bg-brand-success/5 shadow-sm">
                        <span><strong>Bonus:</strong> {course.bonus}</span>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mt-auto space-y-4 pt-8 border-t border-slate-200">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <div className="text-slate-400 font-mono text-[10px] tracking-widest uppercase mb-1">Course Fee</div>
                      <div className="text-2xl font-serif text-brand-navy">
                        {course.fee}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-400 font-mono text-[10px] tracking-widest uppercase mb-1">Next Batch In</div>
                      <div className="text-sm font-medium text-brand-primary">{course.nextBatch}</div>
                    </div>
                  </div>
                  
                  <a href={`#/course-details/${course.id}`} className="block w-full">
                    <motion.button 
                      whileHover={{ scale: 1.01 }} 
                      whileTap={{ scale: 0.99 }} 
                      className="w-full h-12 flex justify-center items-center gap-2 rounded-xl border border-brand-navy bg-brand-navy text-white font-bold text-xs tracking-widest uppercase hover:bg-slate-900 transition-colors cursor-pointer hover:-translate-y-0.5 shadow-md"
                    >
                       View Course Details
                    </motion.button>
                  </a>
                  
                  <a href={`https://wa.me/918861756040?text=Hi%2C%20I%20want%20to%20download%20the%20syllabus%20for%20${encodeURIComponent(course.title)}.`} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <motion.button 
                      whileHover={{ scale: 1.01 }} 
                      whileTap={{ scale: 0.99 }} 
                      className="w-full h-12 rounded-xl border border-slate-300 bg-white text-slate-700 font-bold text-xs tracking-widest uppercase hover:bg-slate-50 transition-colors cursor-pointer hover:-translate-y-0.5 shadow-sm"
                    >
                       Get Syllabus via WhatsApp
                     </motion.button>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Explore All Courses Button */}
        <div className="mt-16 flex justify-center">
          <a href="#/all-courses">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-brand-primary bg-brand-primary/5 text-brand-primary font-bold text-xs tracking-widest uppercase hover:bg-brand-primary hover:text-brand-navy transition-colors flex items-center gap-3 cursor-pointer"
            >
              Explore All 12 Courses
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
}
