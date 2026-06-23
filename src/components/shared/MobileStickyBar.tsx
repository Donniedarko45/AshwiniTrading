import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export default function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past ~600px
      const scrolledPastHero = window.scrollY > 600;
      
      // Hide when near the final CTA section
      const finalCta = document.getElementById('final-cta');
      let nearFinalCta = false;
      if (finalCta) {
        const rect = finalCta.getBoundingClientRect();
        nearFinalCta = rect.top < window.innerHeight + 100;
      } else {
        nearFinalCta = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 600;
      }
      
      setIsVisible(scrolledPastHero && !nearFinalCta);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0B0A11]/90 backdrop-blur-md border-t border-white/10 px-5 py-3 flex items-center gap-3 lg:hidden pb-safe shadow-[0_-8px_30px_rgba(0,0,0,0.4)] animate-in slide-in-from-bottom duration-300">
      {/* Call CTA Button */}
      <a 
        href="tel:+919606995525" 
        className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-white/20 text-white shrink-0 hover:bg-white/20 transition-all touch-target"
        aria-label="Call admissions advisor"
      >
        <Phone className="w-5 h-5 fill-white text-white" />
      </a>
      
      {/* Primary Apply Button */}
      <button 
        onClick={() => {
          const finalCta = document.getElementById('final-cta');
          if (finalCta) {
            finalCta.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="flex-1 h-12 flex items-center justify-center bg-gradient-to-r from-brand-orange-grad-start to-brand-orange-grad-end hover:from-brand-orange hover:to-brand-orange-hover text-white font-extrabold text-sm sm:text-base tracking-wider rounded-xl uppercase transition-all shadow-lg shadow-orange-500/20 touch-target"
      >
        Apply Now
      </button>
    </div>
  );
}
