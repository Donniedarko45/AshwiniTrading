import React from 'react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { Brain, Zap, Check, ArrowRight } from 'lucide-react';

export default function CoursesWithAI() {
  const courses = [
    {
      id: 'fundamental-ai',
      detailsId: 'fundamental-analysis-masterclass',
      title: 'Fundamental Analysis with AI',
      subtitle: 'Learn how to evaluate companies and build long-term wealth',
      badge: 'Perfect for Long-Term Investors',
      icon: Brain,
      points: [
        'Financial Statements Analysis',
        'Profit & Loss Analysis',
        'Balance Sheet Reading',
        'Cash Flow Analysis',
        'Valuation Techniques',
        'Sector Research',
        'AI-Based Company Research',
        'Investment Decision Framework'
      ],
      ctaText: 'Master Fundamental Analysis',
    },
    {
      id: 'technical-ai',
      detailsId: 'technical-analysis-masterclass',
      title: 'Technical Analysis with AI',
      subtitle: 'Master chart-based trading and high-probability setups',
      badge: 'Perfect for Traders',
      icon: Zap,
      points: [
        'Candlestick Patterns',
        'Trend Analysis',
        'Support & Resistance',
        'Volume Analysis',
        'Breakout Strategies',
        'Swing Trading Techniques',
        'AI-Assisted Chart Screening',
        'Risk & Reward Management'
      ],
      ctaText: 'Master Technical Analysis',
    }
  ];

  return (
    <section id="courses-ai" className="relative py-24 md:py-32 bg-slate-50 border-b border-slate-200">
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
            <div className="inline-block px-3 py-1 border border-slate-300 text-slate-500 font-mono text-xs tracking-widest uppercase mb-6 bg-white">
              COURSE SELECTION
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-navy tracking-tight leading-tight">
              Explore Stock Market <br className="hidden md:block" />
              <span className="text-brand-primary italic">Courses with AI</span>
            </h2>
          </div>
          <p className="text-slate-600 text-base md:text-lg font-light max-w-sm leading-relaxed">
            Learn how Artificial Intelligence can enhance Technical and Fundamental Analysis through smarter research, stock screening, and data-driven insights.
          </p>
        </motion.div>

        {/* Course Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {courses.map((course, i) => {
            const IconComponent = course.icon;
            return (
              <motion.div
                key={course.id}
                variants={fadeIn}
                className="group relative p-8 md:p-12 bg-white rounded-[32px] border border-slate-200 shadow-sm hover:shadow-[0_32px_64px_-16px_rgb(15,23,42,0.1)] hover:border-brand-primary/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 overflow-hidden"
              >
                {/* Decorative background glow on hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/0 group-hover:bg-brand-primary/5 blur-3xl rounded-full transition-colors duration-700 pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Top Row: Icon & Badge */}
                  <div className="flex items-center justify-between mb-12">
                    <span className="text-sm font-mono text-slate-400 tracking-wider">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="px-3 py-1 border border-brand-primary/30 bg-brand-primary/5 text-brand-primary font-bold text-[10px] tracking-widest uppercase">
                      {course.badge}
                    </span>
                  </div>
 
                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-3xl font-medium text-brand-navy mb-3 tracking-tight">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-light mb-10 leading-relaxed max-w-sm">
                    {course.subtitle}
                  </p>
 
                  {/* Points list */}
                  <div className="space-y-4 mb-12">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Syllabus Overview</div>
                    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
                      {course.points.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <span className="flex-shrink-0 mt-1 text-brand-primary">
                            <Check className="w-3 h-3 stroke-[3px]" />
                          </span>
                          <span className="text-slate-600 text-[13px] font-medium leading-snug">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
 
                {/* Bottom Row: CTA Button */}
                <div className="relative z-10 mt-auto pt-8 border-t border-slate-200">
                  <a href={`#/course-details/${course.detailsId}`} className="block w-full">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full h-12 flex items-center justify-center gap-2 border border-brand-primary bg-brand-primary/5 text-brand-primary font-bold text-xs tracking-widest uppercase hover:bg-brand-primary hover:text-brand-navy transition-colors"
                    >
                      {course.ctaText}
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </a>
                  <div className="text-center text-[10px] text-slate-400 font-mono mt-4 tracking-widest uppercase">
                    Live Interactive Classes • Hands-on AI Practice
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
 
      </div>
    </section>
  );
}
