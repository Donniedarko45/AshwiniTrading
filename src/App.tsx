import React, { useState, useEffect, Suspense } from 'react';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import MobileStickyBar from '@/components/shared/MobileStickyBar';
import { LazySection } from '@/components/shared/LazySection';

// Lazy load full page routes to load immediately on navigation (without intersection observer)
const AllCourses = React.lazy(() => import('@/components/sections/AllCourses'));
const CourseDetails = React.lazy(() => import('@/components/sections/CourseDetails'));
const CollegeCollaboration = React.lazy(() => import('@/components/sections/CollegeCollaboration'));

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'courses' | 'details' | 'collaboration'>('landing');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/all-courses') {
        setCurrentView('courses');
        window.scrollTo(0, 0);
      } else if (hash.startsWith('#/course-details/')) {
        setCurrentView('details');
        window.scrollTo(0, 0);
      } else if (hash === '#/college-collaboration') {
        setCurrentView('collaboration');
        window.scrollTo(0, 0);
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
        {currentView === 'landing' && (
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
        )}
        {currentView === 'courses' && (
          <Suspense fallback={<div className="w-full min-h-[60vh] bg-[#110B29] flex items-center justify-center text-white">Loading Courses...</div>}>
            <AllCourses />
          </Suspense>
        )}
        {currentView === 'details' && (
          <Suspense fallback={<div className="w-full min-h-[60vh] bg-[#110B29] flex items-center justify-center text-white">Loading Syllabus...</div>}>
            <CourseDetails />
          </Suspense>
        )}
        {currentView === 'collaboration' && (
          <Suspense fallback={<div className="w-full min-h-[60vh] bg-[#110B29] flex items-center justify-center text-white">Loading...</div>}>
            <CollegeCollaboration />
          </Suspense>
        )}
      </main>

      {/* Footer is always at the bottom, so lazy load it as well */}
      <LazySection importFunc={() => import('@/components/sections/Footer')} />

      {/* Sticky Bottom Bar for Mobile Conversion */}
      <MobileStickyBar />
    </div>
  );
}
