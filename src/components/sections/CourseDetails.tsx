import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fadeIn } from '@/lib/animations';
import { workshopCourses, WorkshopCourse } from '@/data/curriculum';
import { Button } from '@/components/ui/button';

export default function CourseDetails() {
  const [course, setCourse] = useState<WorkshopCourse | null>(null);
  const [expandedModules, setExpandedModules] = useState<Record<number, boolean>>({ 0: true });

  const parseIdFromHash = () => {
    const hash = window.location.hash; // e.g. "#/course-details/futures-options-trader-pro"
    const prefix = '#/course-details/';
    if (hash.startsWith(prefix)) {
      const id = hash.substring(prefix.length);
      const found = workshopCourses.find(c => c.id === id);
      if (found) {
        setCourse(found);
        // Reset accordion: expand the first module by default
        setExpandedModules({ 0: true });
      }
    }
  };

  useEffect(() => {
    parseIdFromHash();
    window.scrollTo(0, 0);

    const handleHashChange = () => {
      parseIdFromHash();
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleModule = (idx: number) => {
    setExpandedModules(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  if (!course) {
    return (
      <section className="py-32 px-5 text-center bg-brand-light-bg min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-extrabold text-brand-light-heading mb-4">Course Not Found</h2>
        <p className="text-brand-light-body mb-8 max-w-md">The course you are looking for does not exist or has been moved.</p>
        <a href="#">
          <Button variant="dark" size="lg" className="cursor-pointer">
            Back to Home
          </Button>
        </a>
      </section>
    );
  }

  const isPremium = course.id === 'futures-options-trader-pro';

  return (
    <section className="py-24 px-5 sm:px-6 md:px-12 bg-brand-light-bg">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="flex justify-start mb-8">
          <a href="#">
            <motion.div whileHover={{ x: -4 }} className="inline-block">
              <Button
                variant="light-outline"
                size="sm"
                className="gap-2 border-0 bg-brand-light-surface hover:bg-brand-light-border/40 text-brand-light-body hover:text-brand-light-heading cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Button>
            </motion.div>
          </a>
        </div>

        {/* Header Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12 text-left"
        >
          <span className={`text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border ${
            isPremium 
              ? 'bg-brand-primary/10 text-brand-primary border-brand-primary/20' 
              : 'bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20'
          }`}>
            {course.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-light-heading tracking-tight mt-4 mb-4 leading-tight">
            {course.title}
          </h1>
          <p className="text-brand-light-body text-lg sm:text-xl font-medium leading-relaxed mb-6">
            {course.tagline}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-b border-brand-light-border py-6 my-8">
            <div>
              <div className="text-brand-light-muted font-bold text-xs tracking-widest uppercase mb-1">Duration</div>
              <div className="font-extrabold text-brand-light-heading text-lg">{course.duration}</div>
            </div>
            <div>
              <div className="text-brand-light-muted font-bold text-xs tracking-widest uppercase mb-1">Program Fee</div>
              <div className={`font-extrabold text-lg ${isPremium ? 'text-brand-primary' : 'text-brand-secondary'}`}>
                {course.fee} <span className="text-xs text-brand-light-muted font-bold">Incl. GST</span>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-brand-light-muted font-bold text-xs tracking-widest uppercase mb-1">Format</div>
              <div className="font-extrabold text-brand-light-heading text-base">Live Interactive + Recordings</div>
            </div>
          </div>
        </motion.div>

        {/* Ideal Audience / Who should attend */}
        {course.idealAudience && (
          <div className="mb-12 bg-brand-light-card rounded-[24px] p-6 border border-brand-light-border">
            <h3 className="text-base font-extrabold text-brand-light-heading uppercase tracking-widest mb-4">Who Should Attend?</h3>
            <div className="grid sm:grid-cols-2 gap-3.5">
              {course.idealAudience.map((audience, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-secondary/10 text-brand-secondary flex items-center justify-center">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </span>
                  <span className="text-brand-light-body font-semibold text-sm">{audience}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Syllabus / Accordion */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-brand-light-heading mb-6 tracking-tight">Full Course Syllabus</h2>
          <div className="space-y-4">
            {course.modules.map((mod, idx) => {
              const isExpanded = !!expandedModules[idx];
              return (
                <div 
                  key={idx} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'border-brand-primary shadow-sm' : 'border-brand-light-border hover:border-brand-primary/30'
                  }`}
                >
                  <button 
                    onClick={() => toggleModule(idx)}
                    className="w-full text-left p-5 flex justify-between items-center bg-brand-light-card hover:bg-brand-light-surface/50 transition-colors border-0 cursor-pointer font-sans"
                  >
                    <span className="font-extrabold text-brand-light-heading text-base md:text-[17px] pr-4 hover:text-brand-primary transition-colors">{mod.title}</span>
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isExpanded ? 'bg-brand-primary/10 text-brand-primary rotate-180' : 'bg-brand-light-surface text-brand-light-muted'
                    }`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-6 pt-2 bg-brand-light-surface/50 border-t border-brand-light-border">
                          {mod.points && mod.points.length > 0 ? (
                            <ul className="space-y-3.5">
                              {mod.points.map((pt, pIdx) => (
                                <li key={pIdx} className="flex gap-3 items-start">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 flex-shrink-0" />
                                  <span className="text-brand-light-body text-sm font-medium leading-relaxed">{pt}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-brand-light-muted text-sm italic">Detailed breakdown is practice-oriented and updated live per market cycles.</p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Market Application */}
        {course.liveApplication && (
          <div className="mb-12 bg-brand-secondary/5 border border-brand-secondary/20 rounded-[28px] p-6 sm:p-8">
            <h3 className="text-lg font-extrabold text-brand-light-heading mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Live Market Application Included
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3.5">
              {course.liveApplication.map((app, idx) => (
                <li key={idx} className="flex gap-2.5 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary flex-shrink-0" />
                  <span className="text-brand-light-body font-semibold text-sm">{app}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Bonuses Box */}
        <div className="mb-12 bg-brand-success/5 border border-brand-success/20 rounded-[28px] p-6 sm:p-8">
          <h3 className="text-lg font-extrabold text-brand-light-heading mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-8z" />
            </svg>
            Special Bonuses & Materials Included
          </h3>
          <div className="space-y-4">
            {course.bonuses.map((bonus, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-brand-light-card rounded-xl border border-brand-light-border shadow-sm">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-success/10 text-brand-success flex items-center justify-center font-bold text-xs mt-0.5">
                  ✓
                </span>
                <span className="text-brand-light-body text-sm font-semibold">{bonus}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        {course.outcomes && (
          <div className="mb-12">
            <h3 className="text-xl font-extrabold text-brand-light-heading mb-6 tracking-tight">Program Outcomes</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {course.outcomes.map((outcome, idx) => (
                <div key={idx} className="border border-brand-light-border rounded-xl p-4 bg-brand-light-card shadow-sm flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-secondary/10 text-brand-secondary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-brand-light-body font-semibold text-sm">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Enroll CTA Box */}
        <div className="bg-brand-navy rounded-[32px] p-6 sm:p-10 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight">Reserve Your Seat Today</h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Limited slots per batch to ensure interactive teaching and live Q&A. Apply now to speak with a mentor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={`#/checkout/${course.id}`} className="w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button size="lg" className="w-full font-extrabold text-[15px] tracking-wide uppercase cursor-pointer">
                  Enroll In Program
                </Button>
              </motion.div>
            </a>
            <a 
              href={`https://wa.me/918861756040?text=Hi%2C%20I%20want%20to%20enroll%20in%20${encodeURIComponent(course.title)}.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full font-extrabold text-[15px] tracking-wide uppercase cursor-pointer">
                  Inquire on WhatsApp
                </Button>
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
