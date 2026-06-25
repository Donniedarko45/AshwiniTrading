import React from 'react';
import { academyReviews } from '@/data/reviews';
import { LeadForm } from '@/components/shared/LeadForm';

export default function Reviews() {
  return (
    <section 
      id="reviews" 
      className="bg-brand-light-bg py-24 relative border-b border-brand-light-border" 
      style={{
        backgroundImage: 'linear-gradient(to right, var(--color-brand-light-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-brand-light-border) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-20 text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-light-heading tracking-tight leading-[1.1] mb-6">
            Hear From <span className="text-brand-primary">Our Students</span>
          </h2>
          <p className="text-brand-light-body text-lg sm:text-xl font-semibold">
            Success Stories from Our Learning Community
          </p>
        </div>

        {/* Reviews Grid - 2x2 layout matching screenshot */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-14 lg:gap-x-12 lg:gap-y-16 max-w-5xl mx-auto mt-12">
          {academyReviews.map((review, i) => {
            return (
              <div 
                key={i} 
                className="bg-brand-bg-card rounded-[28px] px-8 py-10 shadow-sm border border-white/10 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center relative min-h-[220px]"
              >
                {/* Floating Platform Badge */}
                {review.platform !== 'none' && (
                  <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-md z-10 ${
                    review.platform === 'whatsapp' 
                      ? 'bg-brand-success shadow-brand-success/20 text-white' 
                      : 'bg-brand-secondary shadow-brand-secondary/20 text-slate-950'
                  }`}>
                    {review.platform === 'whatsapp' ? (
                      <svg className="w-5.5 h-5.5 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.182 1.449 4.825 1.451 5.436 0 9.859-4.407 9.862-9.823.001-2.623-1.02-5.088-2.871-6.942-1.851-1.854-4.312-2.874-6.932-2.875-5.437 0-9.86 4.408-9.863 9.825-.001 1.762.461 3.483 1.337 5.016l-.99 3.618 3.708-.971zm11.367-6.416c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.667.149-.198.298-.766.967-.939 1.165-.173.199-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.667-1.611-.913-2.206-.24-.579-.484-.501-.667-.51l-.57-.01c-.197 0-.518.074-.79.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
                      </svg>
                    ) : (
                      <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 5.582 2 10c0 1.846.797 3.518 2.135 4.805L3.105 19.33c-.157.48.332.91.77.67l3.873-2.127C9.074 18.23 10.495 18.5 12 18.5c5.523 0 10-3.582 10-8S17.523 2 12 2zm1 11H7v-2h6v2zm4-4H7V7h10v2z" />
                      </svg>
                    )}
                  </div>
                )}

                {/* Review Content */}
                <div className="w-full text-center">
                  <h4 className="text-brand-light-heading font-extrabold text-xl mb-4 tracking-tight">
                    {review.name}
                  </h4>
                  <p className="text-brand-light-body text-sm sm:text-[15px] font-medium leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Block */}
        <div className="max-w-4xl mx-auto text-center mt-24 sm:mt-32 mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-brand-light-heading mb-4 tracking-tight">
            You could be our next <span className="text-brand-primary underline decoration-[5px] decoration-brand-primary/30 underline-offset-4">success story</span>.
          </h2>
          <p className="text-brand-light-body font-medium mb-8 text-base sm:text-lg">
            Few seats left for the upcoming mentorship batch.
          </p>
          <div className="inline-flex items-center gap-2 text-brand-success-light font-bold text-[13px] bg-brand-success/15 border border-brand-success/30 px-4 py-2 rounded-full mb-12 shadow-sm tracking-wide">
            <svg className="w-4 h-4 text-brand-success-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
            SEBI Registered Research Analyst Mentorship
          </div>

          <LeadForm 
            layout="bar" 
            theme="dark" 
            buttonText="DOWNLOAD SYLLABUS & REPORT" 
          />
          
          <div className="text-brand-light-muted text-sm font-medium mt-6">
            <span className="text-brand-primary font-bold">7 seats left</span> · No spam · Reply within 15 mins
          </div>
        </div>
      </div>
    </section>
  );
}
