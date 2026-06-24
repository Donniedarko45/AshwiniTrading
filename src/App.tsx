import React, { useState, useEffect } from 'react';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import MobileStickyBar from '@/components/shared/MobileStickyBar';
import { LazySection } from '@/components/shared/LazySection';

// Static components for above-the-fold rendering
export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'courses'>('landing');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#/all-courses') {
        setCurrentView('courses');
      } else {
        setCurrentView('landing');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#110B29] font-sans selection:bg-orange-500/30 text-white">
      <Navbar />
      <main>
        {currentView === 'landing' ? (
          <>
            {/* Above the fold (static render) */}
            <Hero />

            {/* Below the fold (lazy loaded on proximity scroll) */}
            <LazySection importFunc={() => import('@/components/sections/Alumni')} />
            <LazySection importFunc={() => import('@/components/sections/WhyHireUs')} />
            <LazySection importFunc={() => import('@/components/sections/Placements')} />
            <LazySection importFunc={() => import('@/components/sections/PlacementSystem')} />
            <LazySection importFunc={() => import('@/components/sections/Reviews')} />
            <LazySection importFunc={() => import('@/components/sections/PlacementsCTA')} />
            <LazySection importFunc={() => import('@/components/sections/CourseTracks')} />
            <LazySection importFunc={() => import('@/components/sections/Curriculum')} />
            <LazySection importFunc={() => import('@/components/sections/CurriculumCTA')} />
            <LazySection importFunc={() => import('@/components/sections/Certifications')} />
            <LazySection importFunc={() => import('@/components/sections/Projects')} />
            <LazySection importFunc={() => import('@/components/sections/InterviewReadiness')} />
            <LazySection importFunc={() => import('@/components/sections/ResumeTransformation')} />
            <LazySection importFunc={() => import('@/components/sections/ResumeCTA')} />
            <LazySection importFunc={() => import('@/components/sections/DayInLife')} />
            <LazySection importFunc={() => import('@/components/sections/CareerSwitchers')} />
            <LazySection importFunc={() => import('@/components/sections/Comparison')} />
            <LazySection importFunc={() => import('@/components/sections/HonestFAQ')} />
            <LazySection importFunc={() => import('@/components/sections/FinalCTA')} />
          </>
        ) : (
          <LazySection importFunc={() => import('@/components/sections/AllCourses')} />
        )}
      </main>

      {/* Footer is always at the bottom, so lazy load it as well */}
      <LazySection importFunc={() => import('@/components/sections/Footer')} />

      {/* Sticky Bottom Bar for Mobile Conversion */}
      <MobileStickyBar />
    </div>
  );
}
