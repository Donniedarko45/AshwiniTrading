import React, { useState, useEffect, Suspense } from 'react';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import MobileStickyBar from '@/components/shared/MobileStickyBar';
import FloatingSocials from '@/components/shared/FloatingSocials';
import { LazySection } from '@/components/shared/LazySection';
import JoinUs from '@/components/sections/JoinUs';
import ReviewsPage from '@/components/sections/ReviewsPage';

// Lazy load full page routes to load immediately on navigation (without intersection observer)
const AllCourses = React.lazy(() => import('@/components/sections/AllCourses'));
const CourseDetails = React.lazy(() => import('@/components/sections/CourseDetails'));
const CollegeCollaboration = React.lazy(() => import('@/components/sections/CollegeCollaboration'));

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'courses' | 'details' | 'collaboration' | 'join' | 'reviews'>('landing');

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
      } else if (hash === '#/join-us') {
        setCurrentView('join');
        window.scrollTo(0, 0);
      } else if (hash === '#/reviews') {
        setCurrentView('reviews');
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
    <div className="min-h-screen bg-brand-bg-dark font-sans selection:bg-brand-primary/30 text-white">
      <Navbar />
      <main>
        {currentView === 'landing' && (
          <>
            {/* Above the fold (static render) */}
            <Hero />

            {/* Below the fold (lazy loaded on proximity scroll) */}
            <LazySection importFunc={() => import('@/components/sections/Achieve90Days')} />
            <LazySection importFunc={() => import('@/components/sections/Reviews')} />
            <LazySection importFunc={() => import('@/components/sections/CoursesWithAI')} />
            <LazySection importFunc={() => import('@/components/sections/CourseTracks')} />
            <LazySection importFunc={() => import('@/components/sections/Curriculum')} />
            <LazySection importFunc={() => import('@/components/sections/Certifications')} />
            <LazySection importFunc={() => import('@/components/sections/MediaAwards')} />
            <LazySection importFunc={() => import('@/components/sections/HonestFAQ')} />
            <LazySection importFunc={() => import('@/components/sections/FinalCTA')} />
          </>
        )}
        {currentView === 'join' && <JoinUs />}
        {currentView === 'reviews' && <ReviewsPage />}
        {currentView === 'courses' && (
          <Suspense fallback={<div className="w-full min-h-[60vh] bg-brand-bg-dark flex items-center justify-center text-white">Loading Courses...</div>}>
            <AllCourses />
          </Suspense>
        )}
        {currentView === 'details' && (
          <Suspense fallback={<div className="w-full min-h-[60vh] bg-brand-bg-dark flex items-center justify-center text-white">Loading Syllabus...</div>}>
            <CourseDetails />
          </Suspense>
        )}
        {currentView === 'collaboration' && (
          <Suspense fallback={<div className="w-full min-h-[60vh] bg-brand-bg-dark flex items-center justify-center text-white">Loading...</div>}>
            <CollegeCollaboration />
          </Suspense>
        )}
        {/* 1% Change section removed */}
      </main>

      {/* Footer is always at the bottom, so lazy load it as well */}
      <LazySection importFunc={() => import('@/components/sections/Footer')} />

      {/* Sticky Bottom Bar for Mobile Conversion */}
      <MobileStickyBar />

      {/* Floating WhatsApp and Telegram Support Icons */}
      <FloatingSocials />
    </div>
  );
}
