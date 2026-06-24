import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fadeIn, scaleUp } from '@/lib/animations';
import { workshopCourses, WorkshopCourse } from '@/data/curriculum';

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
      <section className="py-32 px-5 text-center bg-white min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Course Not Found</h2>
        <p className="text-slate-600 mb-8 max-w-md">The course you are looking for does not exist or has been moved.</p>
        <a href="#">
          <button className="bg-slate-900 hover:bg-black text-white font-bold px-6 py-3.5 rounded-xl cursor-pointer">
            Back to Home
          </button>
        </a>
      </section>
    );
  }

  const isPremium = course.id === 'futures-options-trader-pro';

  return (
    <section className="py-24 px-5 sm:px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="flex justify-start mb-8">
          <a href="#">
            <motion.button
              whileHover={{ x: -4 }}
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-bold text-sm bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-xl border-0 cursor-pointer transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </motion.button>
          </a>
        </div>

        {/* Header Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12 text-left"
        >
          <span className={`text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider ${
            isPremium ? 'bg-indigo-100 text-indigo-700' : 'bg-blue-50 text-blue-700'
          }`}>
            {course.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 mb-4 leading-tight">
            {course.title}
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed mb-6">
            {course.tagline}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-b border-slate-100 py-6 my-8">
            <div>
              <div className="text-slate-500 font-bold text-xs tracking-widest uppercase mb-1">Duration</div>
              <div className="font-extrabold text-slate-900 text-lg">{course.duration}</div>
            </div>
            <div>
              <div className="text-slate-500 font-bold text-xs tracking-widest uppercase mb-1">Program Fee</div>
              <div className={`font-extrabold text-lg ${isPremium ? 'text-indigo-600' : 'text-blue-600'}`}>
                {course.fee} <span className="text-xs text-slate-500 font-bold">Incl. GST</span>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-slate-500 font-bold text-xs tracking-widest uppercase mb-1">Format</div>
              <div className="font-extrabold text-slate-900 text-base">Live Interactive + Recordings</div>
            </div>
          </div>
        </motion.div>

        {/* Ideal Audience / Who should attend */}
        {course.idealAudience && (
          <div className="mb-12 bg-slate-50 rounded-[24px] p-6 border border-slate-100">
            <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-widest mb-4">Who Should Attend?</h3>
            <div className="grid sm:grid-cols-2 gap-3.5">
              {course.idealAudience.map((audience, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </span>
                  <span className="text-slate-700 font-semibold text-sm">{audience}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Syllabus / Accordion */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">Full Course Syllabus</h2>
          <div className="space-y-4">
            {course.modules.map((mod, idx) => {
              const isExpanded = !!expandedModules[idx];
              return (
                <div 
                  key={idx} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'border-blue-500 shadow-sm' : 'border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <button 
                    onClick={() => toggleModule(idx)}
                    className="w-full text-left p-5 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors border-0 cursor-pointer font-sans"
                  >
                    <span className="font-extrabold text-slate-900 text-base md:text-[17px] pr-4">{mod.title}</span>
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isExpanded ? 'bg-blue-50 text-blue-600 rotate-180' : 'bg-slate-100 text-slate-500'
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
                        <div className="px-5 pb-6 pt-2 bg-slate-50/50 border-t border-slate-50">
                          {mod.points && mod.points.length > 0 ? (
                            <ul className="space-y-3.5">
                              {mod.points.map((pt, pIdx) => (
                                <li key={pIdx} className="flex gap-3 items-start">
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                  <span className="text-slate-700 text-sm font-medium leading-relaxed">{pt}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-slate-500 text-sm italic">Detailed breakdown is practice-oriented and updated live per market cycles.</p>
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
          <div className="mb-12 bg-indigo-50/40 border border-indigo-100 rounded-[28px] p-6 sm:p-8">
            <h3 className="text-lg font-extrabold text-indigo-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Live Market Application Included
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3.5">
              {course.liveApplication.map((app, idx) => (
                <li key={idx} className="flex gap-2.5 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  <span className="text-indigo-950 font-semibold text-sm">{app}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Bonuses Box */}
        <div className="mb-12 bg-emerald-50/40 border border-emerald-100 rounded-[28px] p-6 sm:p-8">
          <h3 className="text-lg font-extrabold text-emerald-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-8z" />
            </svg>
            Special Bonuses & Materials Included
          </h3>
          <div className="space-y-4">
            {course.bonuses.map((bonus, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-emerald-100 shadow-sm">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs mt-0.5">
                  ✓
                </span>
                <span className="text-slate-700 text-sm font-semibold">{bonus}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        {course.outcomes && (
          <div className="mb-12">
            <h3 className="text-xl font-extrabold text-slate-900 mb-6 tracking-tight">Program Outcomes</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {course.outcomes.map((outcome, idx) => (
                <div key={idx} className="border border-slate-100 rounded-xl p-4 bg-white shadow-sm flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700 font-semibold text-sm">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Enroll CTA Box */}
        <div className="bg-[#110B29] rounded-[32px] p-6 sm:p-10 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight">Reserve Your Seat Today</h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Limited slots per batch to ensure interactive teaching and live Q&A. Apply now to speak with a mentor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#final-cta" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-[15px] tracking-wide border-0 shadow-lg shadow-blue-500/20 uppercase cursor-pointer"
              >
                Book Free Consultation
              </motion.button>
            </a>
            <a 
              href={`https://wa.me/919845961990?text=Hi%2C%20I%20want%20to%20enroll%20in%20${encodeURIComponent(course.title)}.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4.5 rounded-xl bg-white/5 border border-white/20 hover:bg-white/10 text-white font-extrabold text-[15px] tracking-wide uppercase cursor-pointer"
              >
                Inquire on WhatsApp
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
