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
const AboutUs = React.lazy(() => import('@/components/sections/AboutUs'));
const ContactUs = React.lazy(() => import('@/components/sections/ContactUs'));
const AdminPanel = React.lazy(() => import('@/components/sections/AdminPanel'));

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'courses' | 'details' | 'collaboration' | 'join' | 'reviews' | 'checkout' | 'payment-status' | 'payment-success' | 'payment-failed' | 'about-us' | 'contact-us' | 'admin-panel'>('landing');
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
      } else if (hash === '#/about-us') {
        setCurrentView('about-us');
        window.scrollTo(0, 0);
      } else if (hash === '#/contact-us') {
        setCurrentView('contact-us');
        window.scrollTo(0, 0);
      } else if (hash === '#/admin-panel') {
        setCurrentView('admin-panel');
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

  const showNavbar = !['checkout', 'payment-status', 'payment-success', 'payment-failed'].includes(currentView);

  return (
    <div className="min-h-screen bg-brand-bg-dark font-sans selection:bg-brand-primary/30 text-slate-800 relative">
      {/* Global Noise Texture */}
      <div className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.015] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {showNavbar && <Navbar />}
      <main>
        {currentView === 'landing' && (
          <>
            {/* 1. Hero Banner + Book Free Demo Form */}
            <Hero />

            {/* 2. About Ashwini Trading Academy */}
            <LazySection importFunc={() => import('@/components/sections/Achieve90Days')} />

            {/* 3. Why Choose Us */}
            <LazySection importFunc={() => import('@/components/sections/WhyChooseUs')} />

            {/* 4. Featured Courses (Our Learning Programs) */}
            <LazySection importFunc={() => import('@/components/sections/CoursesWithAI')} />

            {/* 5. Learning Approach + Why Learn With Us */}
            <LazySection importFunc={() => import('@/components/sections/LearningJourneyCTA')} />

            {/* 6. Meet the Mentor */}
            <LazySection importFunc={() => import('@/components/sections/MeetMentor')} />

            {/* 7. Student Testimonials (Learner Success Stories) */}
            <LazySection importFunc={() => import('@/components/sections/Reviews')} />

            {/* 8. Corporate & College Training */}
            <LazySection importFunc={() => import('@/components/sections/MediaAwards')} />

            {/* 9. Blogs & Insights Preview */}
            <LazySection importFunc={() => import('@/components/sections/BlogsPreview')} />

            {/* 11. NISM Certifications */}
            <LazySection importFunc={() => import('@/components/sections/Certifications')} />

            {/* 12. FAQs */}
            <LazySection importFunc={() => import('@/components/sections/HonestFAQ')} />

            {/* 13. Final Call-to-Action */}
            <LazySection importFunc={() => import('@/components/sections/FinalCTANew')} />
          </>
        )}
        {currentView === 'join' && <JoinUs />}
        {currentView === 'reviews' && <ReviewsPage />}
        {currentView === 'about-us' && (
          <Suspense fallback={<div className="w-full min-h-[60vh] bg-brand-bg-dark flex items-center justify-center text-slate-800">Loading About Page...</div>}>
            <AboutUs />
          </Suspense>
        )}
        {currentView === 'contact-us' && (
          <Suspense fallback={<div className="w-full min-h-[60vh] bg-brand-bg-dark flex items-center justify-center text-slate-800">Loading Contact Page...</div>}>
            <ContactUs />
          </Suspense>
        )}
        {currentView === 'admin-panel' && (
          <Suspense fallback={<div className="w-full min-h-[60vh] bg-brand-bg-dark flex items-center justify-center text-slate-800">Loading Admin Dashboard...</div>}>
            <AdminPanel />
          </Suspense>
        )}
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
