import React from 'react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer, scaleUp } from '@/lib/animations';
import { 
  Star, Trophy, Check, Phone, ArrowLeft, ArrowRight,
  BookOpen, Users, Award, Sparkles, GraduationCap, Video, Calendar, TrendingUp
} from 'lucide-react';

export default function ReviewsPage() {
  const testimonials = [
    {
      text: "One of the best stock market training programs I have attended. The concepts are explained in a simple and practical manner.",
      rating: 5,
      author: "Verified Graduate",
      role: "Investor & Course Student"
    },
    {
      text: "The live market sessions helped me understand how real trading works. Highly recommended for beginners.",
      rating: 5,
      author: "Active Trader",
      role: "Mentorship Member"
    },
    {
      text: "The NISM preparation classes were excellent and helped me clear my certification with confidence.",
      rating: 5,
      author: "Finance Professional",
      role: "Certified Analyst"
    }
  ];

  const classroomExperiences = [
    { title: "Workshop Sessions", desc: "Interactive classroom learning covering key investing and trading concepts.", icon: BookOpen },
    { title: "Live Market Training", desc: "Real-time analysis and trade planning sessions during market hours.", icon: Video },
    { title: "Certification Programs", desc: "Rigorous NISM exam preparation for mutual funds, derivatives, and research analysis.", icon: Award },
    { title: "Student Activities", desc: "Practical exercises, charting challenges, and collaborative market research.", icon: Users },
    { title: "Learning Events", desc: "Special guest lectures, seminars, and networking sessions with market experts.", icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-bg-dark via-brand-bg-deep to-brand-bg-dark text-white pt-28 pb-20 relative overflow-hidden">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} aria-hidden="true" />
      
      {/* Background Glows */}
      <div className="absolute top-10 left-[-10%] w-[600px] h-[600px] bg-brand-glow/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-[-10%] w-[600px] h-[600px] bg-brand-glow/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Back Button */}
        <div className="flex justify-start mb-8">
          <a href="#">
            <motion.button
              whileHover={{ x: -4 }}
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-bold text-sm bg-white/5 hover:bg-white/10 px-5 py-3 rounded-xl border border-white/10 cursor-pointer transition-colors backdrop-blur-md"
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
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-widest uppercase mb-6">
            <div className="flex items-center gap-0.5 mr-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current text-brand-primary" />
              ))}
            </div>
            Rated by Our Students
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
            Student Reviews & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-white">
              Success Stories
            </span>
          </h1>

          <p className="text-slate-200 text-lg md:text-xl font-bold leading-relaxed max-w-3xl mx-auto mb-6">
            Trusted by Aspiring Traders, Investors & Finance Professionals
          </p>

          <p className="text-slate-400 text-[15px] sm:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            At Ashwini Trading Academy, we believe that the success of our students is the true measure of our success. From complete beginners to aspiring finance professionals, our students have gained practical market knowledge, confidence, and valuable skills through our programs.
          </p>
        </motion.div>

        {/* Section 1: What Our Students Say (Testimonials) */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-xs font-bold tracking-widest uppercase mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">What Our Students Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((test, idx) => (
              <motion.div
                key={idx}
                variants={scaleUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-brand-bg-card/45 border border-white/5 rounded-3xl p-8 hover:border-brand-primary/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-5 text-brand-primary">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-200 text-[15px] leading-relaxed font-medium italic mb-6">
                    "{test.text}"
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 text-left">
                  <h4 className="font-bold text-white text-sm">{test.author}</h4>
                  <p className="text-xs text-slate-500 font-semibold">{test.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Student Success Stories (split grid layout) */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24 items-center">
          {/* Left Text and Checklist */}
          <motion.div 
            className="text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-widest uppercase mb-4">
              ACHIEVEMENTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Student Success Stories
            </h2>
            <p className="text-slate-300 font-bold text-base sm:text-lg mb-4">
              From Learning to Achieving
            </p>
            <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed font-medium mb-8">
              Many of our students started with little or no knowledge of the stock market. Through structured learning, practical sessions, and continuous support, they developed the confidence to understand markets, make informed decisions, and pursue opportunities in the financial sector.
            </p>
            
            <div className="space-y-3">
              {[
                'Successfully completed NISM Certifications',
                'Improved financial knowledge and investment skills',
                'Built confidence in market analysis',
                'Started their journey in the capital markets industry'
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 stroke-[3.5px]" />
                  </span>
                  <span className="text-slate-200 text-sm font-bold leading-tight">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image/Success Showcase */}
          <motion.div 
            className="bg-brand-bg-card/30 border border-white/5 rounded-[36px] p-8 relative overflow-hidden flex flex-col justify-center text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
          >
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-brand-glow/20 rounded-full blur-[90px] pointer-events-none" />
            <Trophy className="w-14 h-14 text-brand-primary mx-auto mb-6 animate-pulse" />
            <h3 className="text-2xl font-black text-white mb-4 tracking-tight">Student Achievement Highlights</h3>
            
            <div className="grid grid-cols-2 gap-4 text-left">
              {[
                'NISM Certified Students',
                'Successful Course Graduates',
                'Dedicated Learners & Market Enthusiasts',
                'Future Finance Professionals'
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-white/5 border border-white/5 rounded-2xl flex flex-col justify-between">
                  <span className="w-6 h-6 rounded-lg bg-brand-primary/15 flex items-center justify-center text-brand-primary font-bold text-xs shrink-0 mb-3">
                    🏆
                  </span>
                  <span className="text-slate-200 text-[13px] font-bold leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section 3: Why Students Choose ATA */}
        <div className="mb-24 text-center max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-xs font-bold tracking-widest uppercase mb-4">
              ADVANTAGES
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Why Students Choose Ashwini Trading Academy
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-left">
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
                <motion.div
                  key={idx}
                  variants={scaleUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-brand-bg-card/45 border border-white/5 rounded-2xl p-5 hover:border-brand-secondary/30 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center text-brand-secondary mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[14px] text-slate-200 leading-tight">{item.title}</h4>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Section 4: Classroom & Learning Experience */}
        <div className="mb-24 text-center max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-widest uppercase mb-4">
              EXPERIENCE
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Classroom & Learning Experience
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
              Our students learn through interactive sessions, real-market examples, case studies, and practical demonstrations designed to bridge the gap between theory and practice.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
            {classroomExperiences.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={idx}
                  variants={scaleUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-brand-bg-card/40 border border-white/5 rounded-3xl p-6 hover:border-brand-primary/30 transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 mb-5 group-hover:bg-brand-primary/10 group-hover:text-brand-primary group-hover:border-brand-primary/20 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xl mb-3 block">📸</span>
                    <h3 className="font-extrabold text-[15px] text-white tracking-tight leading-snug mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-[12.5px] leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Section 5: Bottom CTA Card */}
        <div className="bg-gradient-to-r from-brand-primary-grad-start to-brand-primary-grad-end rounded-[36px] p-8 md:p-12 text-slate-950 text-center relative overflow-hidden shadow-2xl shadow-brand-primary/15">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '20px 20px' }} aria-hidden="true" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-none mb-4">
              Join Our Growing Learning Community
            </h3>
            <p className="text-slate-900 font-extrabold text-lg uppercase tracking-wider mb-8">
              Start your stock market learning journey today
            </p>
            <p className="text-slate-900 font-semibold leading-relaxed mb-8 max-w-2xl mx-auto text-[15px] sm:text-base">
              Whether you are a student, working professional, entrepreneur, homemaker, or aspiring investor, our programs are designed to help you build strong financial knowledge and market confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:9845961990"
                className="flex items-center gap-3 px-8 py-4 bg-slate-950 text-brand-primary rounded-xl font-extrabold text-base uppercase tracking-wider hover:bg-slate-900 transition-colors shadow-xl"
              >
                <Phone className="w-5 h-5 fill-brand-primary" />
                Call 9845961990
              </a>
              
              <div className="text-slate-950 font-black text-left flex flex-col leading-tight">
                <span className="text-2xl font-black tracking-tighter">Ashwini Trading Academy</span>
                <span className="text-sm font-bold tracking-widest uppercase opacity-80 mt-0.5">Learn • Analyze • Grow</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
