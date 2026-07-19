import React from 'react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { ArrowRight } from 'lucide-react';

export default function CoursesWithAI() {
  const courses = [
    {
      id: 'basics',
      title: 'Basics of Financial Markets',
      desc: 'Build a strong foundation by understanding how financial markets work and how different investment products function.',
      detailsId: 'foundation',
    },
    {
      id: 'fundamental',
      title: 'Fundamental Analysis',
      desc: 'Learn how to evaluate companies, interpret financial statements, and understand business performance.',
      detailsId: 'fundamental-analysis-masterclass',
    },
    {
      id: 'technical',
      title: 'Technical Analysis',
      desc: 'Master charts, trends, price action, indicators, and market behaviour through practical learning.',
      detailsId: 'technical-analysis-masterclass',
    },
    {
      id: 'fno',
      title: 'Futures & Options',
      desc: 'Understand derivatives, risk management, trading strategies, and market concepts through structured education.',
      detailsId: 'futures-options-30-online',
    },
    {
      id: 'complete',
      title: 'Complete Stock Market Program',
      desc: 'A comprehensive learning program covering financial markets from beginner to advanced levels.',
      detailsId: 'basics-to-advanced',
    },
    {
      id: 'ai',
      title: 'AI for Financial Markets',
      desc: 'Learn how Artificial Intelligence is transforming investing, financial research, and market analysis.',
      detailsId: 'ai-fundamental-technical',
    }
  ];

  return (
    <section id="featured-courses" className="relative py-24 md:py-32 bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200 pb-8"
        >
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 border border-slate-300 text-slate-500 font-mono text-xs tracking-widest uppercase mb-6 bg-slate-50">
              OUR LEARNING PROGRAMS
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-navy tracking-tight leading-tight text-balance">
              Choose the Right Program <br className="hidden md:block" />
              <span className="text-brand-primary italic">for Your Learning Journey.</span>
            </h2>
          </div>
        </motion.div>

        {/* 6 Course Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              variants={fadeIn}
              className="group relative p-8 md:p-10 bg-white rounded-[24px] border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_-12px_rgb(15,23,42,0.08)] hover:border-brand-primary/40 transition-[border-color,box-shadow,transform] duration-500 flex flex-col justify-between hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle gradient hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                {/* Number */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm font-mono text-slate-400 tracking-wider tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-2xl font-medium text-brand-navy mb-4 tracking-tight group-hover:text-brand-primary transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-slate-600 text-[15px] font-light leading-relaxed text-pretty mb-8">
                  {course.desc}
                </p>
              </div>

              {/* CTA Button */}
              <div className="relative z-10 mt-auto pt-6 border-t border-slate-200">
                <a href={`#/course-details/${course.detailsId}`} className="block w-full">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.96 }}
                    className="group/btn w-full h-12 flex items-center justify-center gap-2 border border-brand-primary bg-brand-primary/5 text-brand-primary font-bold text-xs tracking-widest uppercase hover:bg-brand-primary hover:text-brand-navy transition-[color,background-color] duration-300"
                  >
                    Explore Course
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover/btn:scale-110" />
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Programs Button */}
        <div className="mt-16 flex justify-center">
          <a href="#/all-courses">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-brand-navy bg-brand-navy text-white font-bold text-xs tracking-widest uppercase hover:bg-slate-900 transition-colors flex items-center gap-3 cursor-pointer rounded-xl shadow-md"
            >
              View All Programs
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
}
