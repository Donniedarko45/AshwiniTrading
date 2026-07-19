import React from 'react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { ArrowRight, BookOpen, TrendingUp, Cpu } from 'lucide-react';

export default function BlogsPreview() {
  const blogPosts = [
    {
      category: "Financial Markets",
      title: "Understanding the Basics of Stock Market Investing",
      desc: "A beginner's guide to understanding how the stock market works, key participants, and how to get started with your investment journey.",
      icon: BookOpen,
    },
    {
      category: "Technical Analysis",
      title: "Top 5 Chart Patterns Every Trader Should Know",
      desc: "Learn the most important chart patterns that help traders identify potential market movements and make informed trading decisions.",
      icon: TrendingUp,
    },
    {
      category: "AI in Finance",
      title: "How AI is Transforming Financial Research",
      desc: "Explore how Artificial Intelligence tools are making company analysis, stock screening, and market research faster and more efficient.",
      icon: Cpu,
    }
  ];

  return (
    <section id="blogs-preview" className="relative bg-white py-24 md:py-32 px-5 sm:px-6 md:px-12 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200 pb-8"
        >
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 border border-slate-300 text-slate-500 font-mono text-xs tracking-widest uppercase mb-6 bg-slate-50">
              BLOGS & INSIGHTS
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-navy tracking-tight leading-tight text-balance">
              Keep Learning <br className="hidden md:block" />
              <span className="text-brand-primary italic">Beyond the Classroom.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-base md:text-lg font-light max-w-sm leading-relaxed text-pretty">
            Explore educational articles, market insights, and practical guides on financial markets, investing, fundamental analysis, technical analysis, and emerging trends in finance.
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {blogPosts.map((post, idx) => {
            const IconComponent = post.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="group relative p-8 bg-white rounded-[24px] border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_-12px_rgb(15,23,42,0.08)] hover:border-brand-primary/40 transition-all duration-500 flex flex-col hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex-1">
                  <div className="flex items-center justify-between mb-8">
                    <span className="px-3 py-1 border border-brand-primary/30 bg-brand-primary/5 text-brand-primary font-bold text-[10px] tracking-widest uppercase">
                      {post.category}
                    </span>
                    <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-brand-primary transition-colors" />
                  </div>
                  
                  <h3 className="font-serif text-xl font-medium text-brand-navy mb-4 group-hover:text-brand-primary transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-light leading-relaxed text-pretty">
                    {post.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-8 pt-6 border-t border-slate-200">
                  <span className="text-brand-primary text-xs font-bold tracking-widest uppercase group-hover:underline cursor-pointer flex items-center gap-1">
                    Coming Soon
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Explore Blog Button */}
        <div className="mt-16 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 border border-brand-primary bg-brand-primary/5 text-brand-primary font-bold text-xs tracking-widest uppercase hover:bg-brand-primary hover:text-brand-navy transition-colors flex items-center gap-3 cursor-pointer rounded-xl"
          >
            Explore Blog
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
