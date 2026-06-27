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
const Checkout = React.lazy(() => import('@/components/sections/CheckoutPage'));
const PaymentStatus = React.lazy(() => import('@/components/sections/PaymentStatusPage'));
const PaymentSuccess = React.lazy(() => import('@/components/sections/PaymentSuccessPage'));
const PaymentFailed = React.lazy(() => import('@/components/sections/PaymentFailedPage'));

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'courses' | 'details' | 'collaboration' | 'join' | 'reviews' | 'checkout' | 'payment-status' | 'payment-success' | 'payment-failed'>('landing');
  const [activeCourseId, setActiveCourseId] = useState<string>('');

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
      } else if (hash.startsWith('#/checkout/')) {
        const id = hash.substring('#/checkout/'.length).split('?')[0]; // strip query parameters
        setActiveCourseId(id);
        setCurrentView('checkout');
        window.scrollTo(0, 0);
      } else if (hash.startsWith('#/payment/status')) {
        setCurrentView('payment-status');
        window.scrollTo(0, 0);
      } else if (hash.startsWith('#/payment/success')) {
        setCurrentView('payment-success');
        window.scrollTo(0, 0);
      } else if (hash.startsWith('#/payment/failed')) {
        setCurrentView('payment-failed');
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
    <div className="min-h-screen bg-brand-bg-dark font-sans selection:bg-brand-primary/30 text-slate-800">
      <Navbar />
      <main>
        {currentView === 'landing' && (
          <>
            {/* Above the fold (static render) */}
            <Hero />

            {/* Below the fold (lazy loaded on proximity scroll) */}
            <LazySection importFunc={() => import('@/components/sections/Achieve90Days')} />
            <LazySection importFunc={() => import('@/components/sections/WhyChooseUs')} />
            <LazySection importFunc={() => import('@/components/sections/Reviews')} />
            <LazySection importFunc={() => import('@/components/sections/CoursesWithAI')} />
            <LazySection importFunc={() => import('@/components/sections/CourseTracks')} />
            <LazySection importFunc={() => import('@/components/sections/Curriculum')} />
            <LazySection importFunc={() => import('@/components/sections/Certifications')} />
            <LazySection importFunc={() => import('@/components/sections/MediaAwards')} />
            <LazySection importFunc={() => import('@/components/sections/HonestFAQ')} />
          </>
        )}
        {currentView === 'join' && <JoinUs />}
        {currentView === 'reviews' && <ReviewsPage />}
        {currentView === 'courses' && (
          <Suspense fallback={<div className="w-full min-h-[60vh] bg-brand-bg-dark flex items-center justify-center text-slate-800">Loading Courses...</div>}>
            <AllCourses />
          </Suspense>
        )}
        {currentView === 'details' && (
          <Suspense fallback={<div className="w-full min-h-[60vh] bg-brand-bg-dark flex items-center justify-center text-slate-800">Loading Syllabus...</div>}>
            <CourseDetails />
          </Suspense>
        )}
        {currentView === 'collaboration' && (
          <Suspense fallback={<div className="w-full min-h-[60vh] bg-brand-bg-dark flex items-center justify-center text-slate-800">Loading...</div>}>
            <CollegeCollaboration />
          </Suspense>
        )}
        {currentView === 'checkout' && (
          <Suspense fallback={<div className="w-full min-h-[60vh] bg-brand-bg-dark flex items-center justify-center text-slate-800">Opening Secure Checkout...</div>}>
            <Checkout courseId={activeCourseId} onBack={() => { window.location.hash = '#/all-courses'; }} />
          </Suspense>
        )}
        {currentView === 'payment-status' && (
          <Suspense fallback={<div className="w-full min-h-[60vh] bg-brand-bg-dark flex items-center justify-center text-slate-800">Connecting with Gateway...</div>}>
            <PaymentStatus onNavigate={() => {}} />
          </Suspense>
        )}
        {currentView === 'payment-success' && (
          <Suspense fallback={<div className="w-full min-h-[60vh] bg-brand-bg-dark flex items-center justify-center text-slate-800">Generating Receipt...</div>}>
            <PaymentSuccess />
          </Suspense>
        )}
        {currentView === 'payment-failed' && (
          <Suspense fallback={<div className="w-full min-h-[60vh] bg-brand-bg-dark flex items-center justify-center text-slate-800">Loading Error Details...</div>}>
            <PaymentFailed />
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
