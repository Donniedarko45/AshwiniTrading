import React from 'react';
import { academyReviews } from '@/data/reviews';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn } from '@/lib/animations';

export default function Reviews() {
  return (
    <section 
      id="reviews" 
      className="bg-slate-50 py-24 md:py-32 relative border-b border-slate-200" 
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200 pb-8">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 border border-slate-300 text-slate-500 font-mono text-xs tracking-widest uppercase mb-6 bg-white">
              LEARNER SUCCESS STORIES
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-navy tracking-tight leading-tight text-balance">
              Hear from <br className="hidden md:block" />
              <span className="text-brand-primary italic">Our Learners.</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed text-pretty mb-6">
              The learning journey of our learners reflects our commitment to quality education, practical learning, and structured guidance. Read their experiences and discover how financial education has helped them build confidence.
            </p>
            <a href="#/reviews">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-12 px-6 flex items-center justify-center gap-2 border border-brand-primary bg-brand-primary/5 text-brand-primary font-bold text-xs tracking-widest uppercase hover:bg-brand-primary hover:text-brand-navy transition-[color,background-color] duration-300 group"
              >
                Read All Reviews
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {academyReviews.map((review, i) => {
            return (
              <div 
                key={i} 
                className="group py-12 border-t border-slate-200 transition-[border-color] duration-500 hover:border-brand-primary flex flex-col justify-between h-full"
              >
                {/* Platform Badge */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 tracking-wider group-hover:text-brand-primary transition-colors tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {review.platform !== 'none' && (
                    <div className="text-slate-400">
                      {review.platform === 'whatsapp' ? (
                        <span className="text-xs font-mono uppercase tracking-widest text-brand-secondary border border-brand-secondary/20 bg-brand-secondary/5 px-3 py-1 rounded-full">WhatsApp</span>
                      ) : (
                        <span className="text-xs font-mono uppercase tracking-widest border border-slate-200 bg-slate-50 px-3 py-1 rounded-full">Message</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Review Content */}
                <div className="flex-1">
                  <p className="font-serif text-2xl md:text-[28px] text-brand-navy leading-[1.4] mb-12 max-w-[65ch] transition-colors group-hover:text-slate-900 text-pretty">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="pt-6 flex items-center justify-between">
                  <h4 className="font-bold text-brand-navy tracking-wide uppercase text-sm group-hover:text-brand-primary transition-colors">
                    — {review.name}
                  </h4>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((_, star) => (
                      <svg key={star} className="w-4 h-4 text-brand-primary fill-brand-primary" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
