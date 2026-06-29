import React from 'react';
import { academyReviews } from '@/data/reviews';
import { LeadForm } from '@/components/shared/LeadForm';

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
              TESTIMONIALS
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-navy tracking-tight leading-tight">
              Hear From <br className="hidden md:block" />
              <span className="text-brand-primary italic">Our Students</span>
            </h2>
          </div>
          <p className="text-slate-600 text-base md:text-lg font-light max-w-sm leading-relaxed">
            Real experiences and success stories from our learning community.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 border-t border-l border-slate-200 bg-white">
          {academyReviews.map((review, i) => {
            return (
              <div 
                key={i} 
                className="p-10 md:p-14 border-r border-b border-slate-200 hover:bg-slate-50 transition-colors duration-300 flex flex-col justify-between"
              >
                {/* Platform Badge */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-mono text-slate-400 tracking-wider">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {review.platform !== 'none' && (
                    <div className="text-slate-400">
                      {review.platform === 'whatsapp' ? (
                        <span className="text-xs font-mono uppercase tracking-widest text-brand-secondary border border-brand-secondary/20 bg-brand-secondary/5 px-2 py-1">WhatsApp</span>
                      ) : (
                        <span className="text-xs font-mono uppercase tracking-widest border border-slate-200 bg-slate-50 px-2 py-1">Message</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Review Content */}
                <div className="flex-1">
                  <p className="font-serif text-xl sm:text-2xl text-brand-navy leading-relaxed italic mb-8">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="border-t border-slate-200 pt-6 mt-6">
                  <h4 className="font-bold text-brand-navy tracking-wide uppercase text-sm">
                    {review.name}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Block */}
        <div id="final-cta" className="max-w-4xl mx-auto text-center mt-24 sm:mt-32 mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-brand-navy mb-6 tracking-tight">
            Begin Your <span className="text-brand-primary italic">Learning Journey</span>
          </h2>
          <p className="text-slate-600 font-light mb-10 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Take the first step towards building a strong foundation in the stock market. Fill in your details, and our academic counsellor will help you choose the program that best matches your learning goals.
          </p>
          
          <div className="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest border border-brand-primary/30 bg-brand-primary/5 px-4 py-2 mb-12">
            SEBI Registered Research Analyst
          </div>

          <div className="max-w-lg mx-auto text-left">
            <LeadForm 
              layout="card" 
              theme="light" 
              buttonText="Request a Callback" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
