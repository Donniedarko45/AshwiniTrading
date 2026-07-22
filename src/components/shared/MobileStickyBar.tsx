import React, { useState, useEffect } from 'react';

export default function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past ~250px
      const scrolledPastHero = window.scrollY > 250;
      
      // Hide when near the final CTA section
      const finalCta = document.getElementById('final-cta');
      let nearFinalCta = false;
      if (finalCta) {
        const rect = finalCta.getBoundingClientRect();
        nearFinalCta = rect.top < window.innerHeight + 100;
      }
      
      setIsVisible(scrolledPastHero && !nearFinalCta);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApply = () => {
    // 1. Try to find final-cta section
    const finalCta = document.getElementById('final-cta');
    if (finalCta) {
      finalCta.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // 2. Try to find any lead form on the current page
    const formElement = document.querySelector('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // 3. Fallback: Navigate to Join Us / Demo Class page
    window.location.hash = '#/join-us';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-bg-dark/95 backdrop-blur-md border-t border-white/10 px-5 py-3 flex items-center lg:hidden pb-safe shadow-[0_-8px_30px_rgba(0,0,0,0.4)] animate-in slide-in-from-bottom duration-300">
      {/* Primary Apply Button */}
      <button 
        type="button"
        onClick={handleApply}
        className="w-full h-12 flex items-center justify-center bg-gradient-to-r from-brand-primary-grad-start to-brand-primary-grad-end hover:brightness-110 text-brand-navy font-extrabold text-sm sm:text-base tracking-wider rounded-xl uppercase active:scale-[0.96] transition-[box-shadow,filter,transform] duration-250 shadow-lg shadow-brand-primary/15 cursor-pointer touch-target"
      >
        Apply Now
      </button>
    </div>
  );
}
