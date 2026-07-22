import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fadeIn, staggerContainer, scaleUp } from '@/lib/animations';
import { 
  Star, Trophy, Check, Phone, ArrowLeft, Sparkles,
  BookOpen, Users, Award, GraduationCap, Video, Calendar, ChevronDown, Plus, Minus
} from 'lucide-react';
import { academyReviews } from '@/data/reviews';

const chooseUsPoints = [
  'Comprehensive Curriculum from Beginner to Advanced',
  'Practical Learning with Live Market Sessions',
  'Industry-Oriented Training',
  'AI-Integrated Stock Market Education',
  'Online, Offline & Hybrid Learning Options',
  'Interactive Classroom Experience',
  'Hands-on Chart Analysis & Case Studies',
  'Comprehensive Study Materials',
  'Dedicated Doubt-Clearing Sessions',
  'Career-Oriented Learning Programs'
];

const communityGroups = [
  'Children (8+ years) learning the fundamentals of financial literacy and investing',
  'School Students',
  'College Students',
  'Working Professionals',
  'Entrepreneurs & Business Owners',
  'Homemakers',
  'Investors',
  'Aspiring Traders',
  'Retired Professionals',
  'Individuals from diverse educational and professional backgrounds'
];

const galleryItems = [
  { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop', caption: 'Interactive Classroom Training' },
  { url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600&auto=format&fit=crop', caption: 'Live Market Observation Sessions' },
  { url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop', caption: 'Stock Market Seminars & Workshops' },
  { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop', caption: 'Educational Guest Lectures' },
  { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop', caption: 'Certificate Distribution Ceremony' },
  { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop', caption: 'Collaborative Group Discussions' }
];

const videos = [
  { id: 'v1', thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop', title: 'Technical Analysis Student Review', duration: '2:15' },
  { id: 'v2', thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop', title: 'Basics to Advanced Journey Feedback', duration: '3:45' },
  { id: 'v3', thumbnail: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=400&auto=format&fit=crop', title: 'Futures & Options Student Review', duration: '1:50' }
];

const reviewsPageFAQs = [
  {
    question: 'Are the testimonials on this page from real students?',
    answer: 'Yes. The testimonials featured on this page have been shared by students who have attended our training programs.'
  },
  {
    question: 'Can I speak with existing students before enrolling?',
    answer: 'Where appropriate and with the student\'s consent, the academy may facilitate interactions with current or former students.'
  },
  {
    question: 'Are video testimonials available?',
    answer: 'Yes. Student testimonials are regularly shared through our official YouTube channel and social media platforms.'
  },
  {
    question: 'Are the courses suitable for beginners?',
    answer: 'Absolutely. Our programs are designed to accommodate learners at different experience levels, from complete beginners to experienced market participants.'
  }
];

export default function ReviewsPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-brand-navy pt-28 pb-20 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        
        {/* Hero Header Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-600 font-mono text-xs tracking-widest uppercase mb-6 bg-white">
            <div className="flex items-center gap-0.5 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-brand-primary text-brand-primary" />
              ))}
            </div>
            Trusted by Learners. Inspired by Success.
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-6 leading-tight text-brand-navy text-balance">
            Reviews & Student Success
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-3xl mx-auto text-pretty">
            At Ashwini Trading Academy, we believe that the greatest reflection of our commitment is the success and confidence our students gain through structured learning. Every learner begins with a unique goal — some aspire to understand investing, some want to master technical analysis, while others seek to build a strong foundation in the financial markets.
          </p>
        </motion.div>

        {/* Why Thousands Choose ATA */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-8 text-center">
            Why Thousands of Learners Choose Ashwini Trading Academy
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {chooseUsPoints.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-success/15 text-brand-success flex items-center justify-center font-bold text-xs mt-0.5">
                  ✓
                </span>
                <span className="text-slate-700 font-semibold text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Student Community Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-4">Our Student Community</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Financial education has no age limit. Our students come from diverse age groups, educational backgrounds, and professions, creating a vibrant learning community united by a passion for understanding the financial markets.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {communityGroups.map((group, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col justify-between h-full hover:border-brand-primary/40 hover:shadow-sm transition-all">
                <span className="text-brand-primary font-mono text-xs font-bold mb-4">GROUP 0{idx+1}</span>
                <span className="text-slate-800 font-bold text-xs leading-snug">{group}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-xs mt-6 text-center leading-relaxed font-semibold">
            Note: Learners below 18 years of age are encouraged to participate with the consent and guidance of a parent or guardian.
          </p>
        </div>

        {/* Student Reviews / Testimonials Grid */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-8 text-center">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {academyReviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex gap-1 mb-6 text-brand-primary">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="font-serif text-lg sm:text-xl text-slate-700 leading-relaxed italic mb-8">
                    "{review.text}"
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm uppercase tracking-wider mb-1">{review.name}</h4>
                    <p className="text-xs font-mono text-slate-500 uppercase">{review.role}</p>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest px-3 py-1 rounded-full border border-slate-200 bg-slate-50">
                    {review.platform}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Gallery Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-3">Student Gallery</h2>
            <p className="text-slate-500 text-sm">Take a glimpse into the vibrant learning environment at Ashwini Trading Academy.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, idx) => (
              <div key={idx} className="group overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-50 relative aspect-[4/3]">
                <img 
                  src={item.url} 
                  alt={item.caption} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex items-end">
                  <p className="text-white text-xs font-mono tracking-widest uppercase">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-3">Video Testimonials</h2>
            <p className="text-slate-500 text-sm">Watch our students share their experiences, learning journey, and feedback about their time with us.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {videos.map((vid, idx) => (
              <div key={vid.id} className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 aspect-video">
                <img 
                  src={vid.thumbnail} 
                  alt={vid.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/50">
                  <div className="w-12 h-12 rounded-full bg-white text-brand-navy flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold drop-shadow-md">
                  {vid.title}
                </div>
                <div className="absolute top-3 right-3 bg-black/60 px-2 py-0.5 rounded text-[10px] text-white font-mono">
                  {vid.duration}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews Badge Mockup */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-2xl shadow-sm">
              🌐
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-brand-navy">Google Reviews</h3>
              <p className="text-slate-500 text-xs mt-0.5 max-w-md">We are grateful for the trust our students place in us. Explore genuine reviews shared by learners who have experienced our programs.</p>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center min-w-[200px] shadow-sm">
            <div className="text-3xl font-extrabold text-brand-navy mb-1">4.9 / 5</div>
            <div className="flex gap-0.5 text-brand-primary mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Google Business Rating</div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16 text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {reviewsPageFAQs.map((faq, idx) => {
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
                    className="w-full text-left p-5 flex justify-between items-center bg-white hover:bg-slate-50/50 border-0 cursor-pointer font-sans"
                  >
                    <span className="font-extrabold text-brand-navy text-base pr-4">{faq.question}</span>
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isExpanded ? 'bg-brand-primary/10 text-brand-primary rotate-180' : 'bg-slate-100 text-slate-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
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
        </div>

        {/* CTA Card */}
        <div className="bg-brand-navy text-white p-8 sm:p-12 relative rounded-[32px] overflow-hidden shadow-2xl border border-white/10 text-center">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-primary/15 blur-[100px] rounded-full pointer-events-none" />
          <h3 className="font-serif text-3xl sm:text-4xl font-medium mb-4 text-balance">
            Begin Your Learning Journey Today
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Join a growing community of learners who are building their financial knowledge through structured education, practical market exposure, and continuous guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#/join-us">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-gradient-to-r from-brand-primary-grad-start to-brand-primary-grad-end text-brand-navy font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg cursor-pointer">
                🟢 Book a Free Demo Class
              </motion.button>
            </a>
            <a href="#/all-courses">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-white/10 border border-white/30 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl cursor-pointer hover:bg-white/20 transition-colors">
                🔵 Explore Our Courses
              </motion.button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
