import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { staggerContainer, scaleUp, fadeIn } from '@/lib/animations';
import { coursesData } from '@/data/courses';

const themeStyles = {
  blue: {
    container: 'surface-card-light border-slate-200 hover:border-brand-secondary/45 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg',
    badge: 'bg-brand-secondary/10 text-brand-secondary-hover border-brand-secondary/20',
    bullet: 'bg-brand-secondary',
    extraItem: 'bg-slate-50 border-slate-200',
    extraIcon: 'bg-brand-secondary/10 text-brand-secondary-hover',
    emiText: 'text-brand-navy',
    batchBg: 'bg-brand-secondary/10 border-brand-secondary/20 text-slate-700',
    primaryButton: 'bg-brand-navy hover:bg-slate-900 text-white hover:-translate-y-0.5'
  },
  indigo: {
    container: 'surface-card-light border-[3px] border-brand-primary z-10 lg:scale-100 transition-all duration-500 hover:-translate-y-1 shadow-[0_20px_40px_-15px_rgba(201,162,39,0.2)]',
    badge: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20',
    bullet: 'bg-brand-primary',
    extraItem: 'bg-brand-primary/5 border-brand-primary/20',
    extraIcon: 'bg-brand-primary/10 text-brand-primary',
    emiText: 'text-brand-primary',
    batchBg: 'bg-brand-primary/10 border-brand-primary/20 text-slate-700',
    primaryButton: 'bg-gradient-to-r from-brand-primary-grad-start to-brand-primary-grad-end text-brand-navy hover:brightness-110 shadow-brand-gold hover:shadow-brand-gold-lg hover:-translate-y-0.5'
  },
  orange: {
    container: 'surface-card-light border-slate-200 hover:border-brand-primary/45 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg',
    badge: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20',
    bullet: 'bg-brand-primary',
    extraItem: 'bg-slate-50 border-brand-primary/10',
    extraIcon: 'bg-brand-primary/10 text-brand-primary',
    emiText: 'text-brand-primary',
    batchBg: 'bg-brand-primary/10 border-brand-primary/20 text-slate-700',
    primaryButton: 'bg-brand-navy hover:bg-slate-900 text-white hover:-translate-y-0.5'
  }
};

const whyChooseItems = [
  'Beginner-Friendly Learning',
  'Industry-Relevant Curriculum',
  'Practical Market Exposure',
  'AI-Integrated Learning',
  'Online & Classroom Training',
  'Expert-Led Sessions',
  'Flexible Learning Paths',
  'Certificate of Completion*'
];

const courseFAQs = [
  { question: 'Which course is best for beginners?', answer: 'We recommend starting with the Stock Market Foundation program before progressing to advanced courses.' },
  { question: 'Are the courses available online?', answer: 'Yes. Most programs are available in Online, Classroom, or Hybrid learning modes.' },
  { question: 'Do I need prior market knowledge?', answer: 'No. We offer programs for complete beginners as well as experienced learners.' },
  { question: 'Will I receive study materials?', answer: 'Yes. Learning resources are provided based on the course you enroll in.' },
  { question: 'Do I receive a certificate after completing the course?', answer: 'Eligible programs include a course completion certificate.' }
];

export default function AllCourses() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-24 px-5 sm:px-6 md:px-12 bg-white text-center">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="flex justify-start mb-8">
          <a href="#">
            <motion.button
              whileHover={{ x: -4 }}
              className="inline-flex items-center gap-2 text-slate-600 hover:text-brand-navy font-bold text-sm bg-slate-100/50 hover:bg-slate-100 px-5 py-3 rounded-xl border border-slate-200/80 cursor-pointer transition-colors backdrop-blur-md"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </motion.button>
          </a>
        </div>

        {/* Hero Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12"
        >
          <div className="text-brand-primary font-extrabold text-sm tracking-widest uppercase mb-4">OUR COURSES</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-navy tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Learn Today. <span className="text-brand-primary">Invest Smarter Tomorrow.</span>
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-8">
            Whether you're taking your first step into the financial markets or looking to advance your knowledge, our carefully designed programs provide structured learning for beginners, investors, traders, and finance professionals. Choose the course that matches your goals and start your learning journey with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#course-grid">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-8 py-4 bg-brand-navy text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-md hover:bg-slate-900 transition-colors cursor-pointer">
                🟢 Explore Our Courses
              </motion.button>
            </a>
            <a href="#/join-us">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-8 py-4 bg-white border-2 border-brand-navy text-brand-navy font-bold text-sm uppercase tracking-wider rounded-xl shadow-sm hover:bg-slate-50 transition-colors cursor-pointer">
                🔵 Book a Free Demo Class
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Why Choose Our Programs */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-16 bg-slate-50 rounded-[28px] p-8 sm:p-10 border border-slate-200 text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-3 text-center">Why Choose Our Programs?</h2>
          <p className="text-slate-600 text-base font-medium max-w-2xl mx-auto text-center mb-8">
            At Ashwini Trading Academy, we believe learning should be practical, structured, and easy to understand. Every program is designed to simplify financial concepts and help you build knowledge through real-world examples and hands-on learning.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {whyChooseItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-slate-200 shadow-sm">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-success/15 text-brand-success flex items-center justify-center">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-slate-700 font-semibold text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-xs mt-4 text-center">(*Applicable for eligible programs)</p>
        </motion.div>

        {/* Section Title */}
        <div id="course-grid" className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Choose the Right Course for You
          </h2>
        </div>

        {/* Course Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left items-stretch"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {coursesData.map((course) => {
            const styles = themeStyles[course.colorTheme];
            return (
              <motion.div 
                key={course.id}
                variants={scaleUp} 
                className={`border rounded-[32px] p-5 sm:p-8 flex flex-col hover:shadow-xl transition-all duration-300 h-full group ${styles.container}`}
              >
                {/* Badges */}
                <div className="flex flex-wrap gap-3 mb-5">
                  {course.badgeType === 'popular' && (
                    <div className="bg-brand-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full w-fit uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg> 
                      Most Popular
                    </div>
                  )}
                  {course.badgeType === 'flagship' && (
                    <div className="bg-brand-primary text-brand-navy text-xs font-bold px-4 py-1.5 rounded-full w-fit uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                      ★ Flagship Program
                    </div>
                  )}
                  <div className={`border text-xs font-bold px-4 py-1.5 rounded-full w-fit uppercase tracking-widest shadow-sm ${styles.badge}`}>
                    {course.badge}
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy mb-3 leading-snug tracking-tight">
                  {course.title}
                </h3>
                
                {/* Short Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {course.shortDescription}
                </p>

                {/* Course Meta: Duration, Mode, Fee */}
                <div className="space-y-3 mb-5">
                  <div className="flex gap-4">
                    <span className="w-20 text-slate-500 font-bold text-xs tracking-widest uppercase mt-0.5">Duration</span>
                    <span className="font-semibold text-slate-700 text-[14px]">{course.duration}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-20 text-slate-500 font-bold text-xs tracking-widest uppercase mt-0.5">Mode</span>
                    <span className="font-semibold text-slate-700 text-[14px]">{course.format}</span>
                  </div>
                </div>

                {/* Ideal Audience */}
                {course.idealAudience && (
                  <div className={`flex items-start gap-3 mb-5 text-[14px] font-medium text-slate-600 p-3 rounded-xl border shadow-sm ${styles.extraItem}`}>
                    <span className={`rounded-full p-1 mt-0.5 shrink-0 ${styles.extraIcon}`}>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                      </svg>
                    </span>
                    <span><strong>Ideal for:</strong> {course.idealAudience}</span>
                  </div>
                )}

                {/* Bonus */}
                {course.bonus && (
                  <div className="flex items-start gap-3 mb-5 text-[14px] font-medium text-slate-700 p-3 rounded-xl border shadow-sm bg-brand-success/10 border-brand-success/25">
                    <span className="rounded-full p-1 mt-0.5 shrink-0 bg-brand-success/15 text-brand-success">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-8z" />
                      </svg>
                    </span>
                    <span><strong>Bonus:</strong> {course.bonus}</span>
                  </div>
                )}

                {/* Pricing */}
                <div className="space-y-3 pt-4 border-t border-slate-100 mt-auto">
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 shadow-sm">
                    <div className="text-slate-500 font-bold text-xs tracking-widest uppercase mb-1">Course Fee</div>
                    <div className={`text-2xl font-extrabold ${styles.emiText} my-0.5`}>
                      {course.fee}
                      {course.regularPrice && (
                        <span className="text-base text-slate-400 line-through ml-2 font-bold">{course.regularPrice}</span>
                      )}
                    </div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      One-time Investment (All Taxes Incl.)
                    </div>
                  </div>
                  
                  <div className={`rounded-2xl p-4 border ${styles.batchBg}`}>
                    <div className="font-bold text-xs tracking-widest uppercase mb-1 opacity-70">Next Batch In</div>
                    <div className="font-bold text-base">{course.nextBatch}</div>
                    {course.remainingSeatsText && (
                      <div className="inline-flex items-center gap-2 bg-white/50 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-600 shadow-sm border border-slate-200/60 mt-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-success animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"/>
                        {course.remainingSeatsText}
                      </div>
                    )}
                  </div>
                  
                  {/* Two CTA Buttons: Explore Course + Enroll Now */}
                  <a href={`#/course-details/${course.id}`} className="block w-full">
                    <motion.button 
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }} 
                      className="w-full bg-white border-2 border-brand-navy text-brand-navy font-bold py-4 rounded-xl shadow-sm hover:bg-slate-50 transition-colors uppercase text-sm cursor-pointer flex justify-center items-center gap-2"
                    >
                      🟢 Explore Course
                    </motion.button>
                  </a>

                  <a href={`#/checkout/${course.id}`} className="block w-full">
                    <motion.button 
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }} 
                      className={`w-full font-bold py-4.5 rounded-xl shadow-md border-0 transition-colors flex justify-center items-center gap-2 uppercase cursor-pointer ${styles.primaryButton}`}
                    >
                       🔵 ENROLL NOW <span className="text-xl leading-none">→</span>
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Not Sure Which Course? CTA */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-20 bg-brand-navy rounded-[32px] p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight relative z-10">
            Not Sure Which Course is Right for You?
          </h2>
          <p className="text-slate-300 text-base max-w-lg mx-auto mb-8 leading-relaxed relative z-10">
            Our academic advisors are here to help you choose the program that best matches your goals, experience, and learning preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a href="#/join-us">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-gradient-to-r from-brand-primary-grad-start to-brand-primary-grad-end text-brand-navy font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg cursor-pointer">
                🟢 Book a Free Demo Class
              </motion.button>
            </a>
            <a href="#/contact-us">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-white/10 border border-white/30 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl cursor-pointer hover:bg-white/20 transition-colors">
                🔵 Talk to an Academic Advisor
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* FAQs Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-20 text-left max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-extrabold text-brand-navy mb-8 text-center tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {courseFAQs.map((faq, idx) => {
              const isExpanded = expandedFAQ === idx;
              return (
                <div 
                  key={idx} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'border-brand-primary shadow-sm' : 'border-slate-200 hover:border-brand-primary/30'
                  }`}
                >
                  <button 
                    onClick={() => setExpandedFAQ(isExpanded ? null : idx)}
                    className="w-full text-left p-5 flex justify-between items-center bg-white hover:bg-slate-50/50 transition-colors border-0 cursor-pointer font-sans"
                  >
                    <span className="font-extrabold text-brand-navy text-base pr-4">{faq.question}</span>
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isExpanded ? 'bg-brand-primary/10 text-brand-primary rotate-180' : 'bg-slate-100 text-slate-400'
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
                        <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed font-medium border-t border-slate-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
