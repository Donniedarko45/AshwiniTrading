import React from 'react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { 
  Star, Trophy, Check, Phone, ArrowLeft, Sparkles,
  BookOpen, Users, Award, GraduationCap, Video, Calendar, TrendingUp
} from 'lucide-react';
import { academyReviews } from '@/data/reviews';

export default function ReviewsPage() {
  const classroomExperiences = [
    { title: "Workshop Sessions", desc: "Interactive classroom learning covering key investing and trading concepts.", icon: BookOpen },
    { title: "Live Market Training", desc: "Real-time analysis and trade planning sessions during market hours.", icon: Video },
    { title: "Certification Programs", desc: "Rigorous NISM exam preparation for mutual funds, derivatives, and research analysis.", icon: Award },
    { title: "Student Activities", desc: "Practical exercises, charting challenges, and collaborative market research.", icon: Users },
    { title: "Learning Events", desc: "Special guest lectures, seminars, and networking sessions with market experts.", icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-white text-brand-navy pt-28 pb-20 border-b border-slate-200">
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Back Button */}
        <div className="flex justify-start mb-12">
          <a href="/">
            <motion.button
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-navy font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </motion.button>
          </a>
        </div>

        {/* Hero Header Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 text-xs font-mono tracking-widest uppercase mb-8">
            <div className="flex items-center gap-0.5 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-brand-primary text-brand-primary" />
              ))}
            </div>
            Rated by Our Students
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-[1.05] text-balance">
            Student Reviews & <br />
            <span className="text-brand-primary italic">Success Stories</span>
          </h1>

          <p className="text-brand-navy text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-8 text-pretty">
            Trusted by Aspiring Traders, Investors & Finance Professionals
          </p>

          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium text-pretty">
            At Ashwini Trading Academy, we believe that the success of our students is the true measure of our success. From complete beginners to aspiring finance professionals, our students have gained practical market knowledge, confidence, and valuable skills through our programs.
          </p>
        </motion.div>

        {/* Section 1: What Our Students Say (Testimonials) */}
        <div className="mb-24">
          <div className="mb-12">
            <div className="text-brand-primary font-mono text-xs uppercase tracking-widest mb-4">Testimonials</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-navy text-balance">What Our Students Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {academyReviews.map((review, idx) => (
              <div
                key={idx}
                className="group bg-white p-10 rounded-2xl border border-slate-200/60 surface-card-light transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6 text-brand-primary">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="font-serif text-xl text-slate-700 leading-relaxed italic mb-8 max-w-[65ch] text-pretty">
                    "{review.text}"
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm uppercase tracking-wider mb-1 group-hover:text-brand-primary transition-colors">{review.name}</h4>
                    <p className="text-xs font-mono text-slate-500 uppercase">{review.role}</p>
                  </div>
                  {review.platform !== 'none' && (
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest px-3 py-1 rounded-full border border-slate-200 bg-slate-50">
                      {review.platform}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Student Success Stories (split grid layout) */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-24 items-start">
          {/* Left Text and Checklist */}
          <motion.div 
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="text-brand-primary font-mono text-xs uppercase tracking-widest mb-4">Achievements</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-navy mb-8 text-balance">
              Student Success Stories
            </h2>
            <p className="text-brand-navy font-mono text-sm uppercase tracking-widest mb-6">
              From Learning to Achieving
            </p>
            <p className="text-slate-600 leading-relaxed mb-8 text-pretty">
              Many of our students started with little or no knowledge of the stock market. Through structured learning, practical sessions, and continuous support, they developed the confidence to understand markets, make informed decisions, and pursue opportunities in the financial sector.
            </p>
            
            <div className="space-y-4">
              {[
                'Successfully completed NISM Certifications',
                'Improved financial knowledge and investment skills',
                'Built confidence in market analysis',
                'Started their journey in the capital markets industry'
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-brand-primary rounded-none" />
                  <span className="text-slate-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image/Success Showcase */}
          <motion.div 
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'NISM Certified Students',
                'Successful Course Graduates',
                'Dedicated Learners & Market Enthusiasts',
                'Future Finance Professionals'
              ].map((item, idx) => (
                <div key={idx} className="group bg-white p-8 flex flex-col justify-center h-40 rounded-2xl border border-slate-200/60 surface-card-light transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-lg">
                  <div className="w-12 h-12 flex items-center justify-center text-brand-primary bg-brand-primary/10 rounded-full font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                    🏆
                  </div>
                  <span className="text-slate-800 font-bold leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section 3: Why Students Choose ATA */}
        <div className="mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <div className="text-brand-primary font-mono text-xs uppercase tracking-widest mb-4">Advantages</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-navy text-balance">
              Why Students Choose Us
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Practical Market Training', icon: TrendingUp },
              { title: 'Live Market Learning', icon: Video },
              { title: 'NISM Certification Guidance', icon: Award },
              { title: 'Beginner-Friendly Approach', icon: GraduationCap },
              { title: 'Career-Focused Curriculum', icon: Sparkles },
              { title: 'Continuous Learning Support', icon: Users },
              { title: 'Experienced Faculty', icon: BookOpen }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="group bg-white p-8 rounded-2xl border border-slate-200/60 surface-card-light transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-lg flex flex-col items-start">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 transition-colors">
                    <Icon className="w-6 h-6 text-brand-primary transition-transform group-hover:scale-110" />
                  </div>
                  <h4 className="font-bold text-slate-800 leading-snug group-hover:text-brand-primary transition-colors">{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 4: Classroom & Learning Experience */}
        <div className="mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <div className="text-brand-primary font-mono text-xs uppercase tracking-widest mb-4">Experience</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-navy mb-6 text-balance">
              Classroom & Learning
            </h2>
            <p className="text-slate-600 max-w-2xl font-medium leading-relaxed text-pretty">
              Our students learn through interactive sessions, real-market examples, case studies, and practical demonstrations designed to bridge the gap between theory and practice.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {classroomExperiences.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="group bg-white p-8 rounded-2xl border border-slate-200/60 surface-card-light transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-lg flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 transition-colors">
                    <IconComponent className="w-6 h-6 text-brand-primary transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="font-bold text-brand-navy tracking-tight leading-snug mb-4 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium text-pretty">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 5: Bottom CTA Card */}
        <div className="bg-brand-navy text-white p-10 md:p-20 relative rounded-[32px] overflow-hidden shadow-2xl mt-12 border border-white/10">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute top-0 right-0 p-8 flex gap-3 z-10 hidden sm:flex">
            <div className="w-2 h-2 rounded-full bg-brand-primary" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
          
          <div className="max-w-3xl relative z-10">
            <h3 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-balance">
              Join Our Growing Learning Community
            </h3>
            <p className="text-brand-primary font-bold text-sm tracking-widest uppercase mb-8 flex items-center gap-2">
              Start your stock market learning journey today
            </p>
            <p className="text-white/80 leading-relaxed mb-12 text-lg font-medium text-pretty">
              Whether you are a student, working professional, entrepreneur, homemaker, or aspiring investor, our programs are designed to help you build strong financial knowledge and market confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <a
                href="tel:9845961990"
                className="inline-flex items-center gap-3 px-8 py-4 bg-cta-gold text-brand-navy font-bold rounded-xl shadow-brand-gold hover:shadow-brand-gold-lg active:scale-[0.96] active:translate-y-0 transition-[color,background-color,border-color,box-shadow,transform] duration-300 group"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Call 9845961990
              </a>
              
              <div className="text-center sm:text-left">
                <span className="block text-xl font-bold tracking-tight text-white mb-1">Ashwini Trading Academy</span>
                <span className="block text-xs font-bold text-brand-primary/80 uppercase tracking-widest">Learn • Analyze • Grow</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
