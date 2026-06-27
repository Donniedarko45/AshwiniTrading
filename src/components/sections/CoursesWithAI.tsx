import React from 'react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer, scaleUp } from '@/lib/animations';
import { Brain, Zap, Check, ArrowRight } from 'lucide-react';

export default function CoursesWithAI() {
  const courses = [
    {
      id: 'fundamental-ai',
      detailsId: 'fundamental-analysis-masterclass',
      title: 'Fundamental Analysis with AI',
      subtitle: 'Learn how to evaluate companies and build long-term wealth',
      badge: 'Perfect for Long-Term Investors',
      theme: 'gold',
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
      gradient: 'from-brand-primary/20 to-transparent',
      borderColor: 'group-hover:border-brand-primary/45',
      glowColor: 'bg-brand-primary/10',
      badgeClass: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20',
      iconClass: 'bg-brand-primary/10 text-brand-primary',
      btnClass: 'bg-gradient-to-r from-brand-primary-grad-start to-brand-primary-grad-end text-brand-navy hover:brightness-110 shadow-lg shadow-brand-primary/15'
    },
    {
      id: 'technical-ai',
      detailsId: 'technical-analysis-masterclass',
      title: 'Technical Analysis with AI',
      subtitle: 'Master chart-based trading and high-probability setups',
      badge: 'Perfect for Traders',
      theme: 'blue',
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
      gradient: 'from-brand-secondary/20 to-transparent',
      borderColor: 'group-hover:border-brand-secondary/45',
      glowColor: 'bg-brand-secondary/10',
      badgeClass: 'bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20',
      iconClass: 'bg-brand-secondary/10 text-brand-secondary',
      btnClass: 'bg-gradient-to-r from-brand-secondary-light to-brand-secondary text-brand-navy hover:brightness-110 shadow-lg shadow-brand-secondary/15'
    }
  ];

  return (
    <section id="courses-ai" className="relative py-24 md:py-32 bg-gradient-to-b from-brand-bg-dark to-brand-bg-deep overflow-hidden px-5 sm:px-6 md:px-12 border-t border-b border-slate-200/80">
      {/* Background grid dot overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0F172A 1px, transparent 0)', backgroundSize: '24px 24px' }} aria-hidden="true" />
      
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/25 text-brand-primary text-xs font-bold tracking-widest uppercase mb-4">
            COURSE SELECTION
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-brand-navy tracking-tight leading-none mb-6">
            Explore Stock Market <br className="hidden sm:inline" />
            <span className="text-brand-primary">Courses with AI</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            Learn how Artificial Intelligence can enhance Technical Analysis and Fundamental Analysis through smarter research, stock screening, pattern recognition, and data-driven insights.
          </p>
        </motion.div>

        {/* Course Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <motion.div
                key={course.id}
                variants={scaleUp}
                className="group relative rounded-[32px] p-6 sm:p-8 md:p-10 bg-white border border-slate-200/80 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-xl"
              >
                {/* Glow effect on hover */}
                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${course.glowColor} -translate-y-1/2 translate-x-1/2`} />
                
                {/* Visual accent border */}
                <div className={`absolute inset-0 border border-transparent rounded-[32px] transition-colors duration-500 ${course.borderColor}`} />
 
                <div className="relative z-10">
                  {/* Top Row: Icon & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
                    <div className={`p-3.5 rounded-2xl ${course.iconClass} shadow-inner transition-transform duration-500 group-hover:scale-110`}>
                       <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wide uppercase border ${course.badgeClass} shadow-sm`}>
                      {course.badge}
                    </span>
                  </div>
 
                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-black text-brand-navy mb-3 tracking-tight">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-medium mb-8 leading-relaxed">
                    {course.subtitle}
                  </p>
 
                  {/* Points list */}
                  <div className="space-y-4 mb-8 sm:mb-10">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">What you will learn:</div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {course.points.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${course.iconClass}`}>
                            <Check className="w-3.5 h-3.5 stroke-[3px]" />
                          </span>
                          <span className="text-slate-600 text-[14px] font-medium leading-tight">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
 
                {/* Bottom Row: CTA Button */}
                <div className="relative z-10 mt-auto pt-6 border-t border-slate-100">
                  <a href={`#/course-details/${course.detailsId}`} className="block w-full">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 border-0 shadow-lg cursor-pointer transition-all ${course.btnClass}`}
                    >
                      {course.ctaText}
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </a>
                  <div className="text-center text-[11px] text-slate-500 font-semibold mt-3.5 tracking-wider uppercase">
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
