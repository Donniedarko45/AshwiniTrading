import React from 'react';
import { motion } from 'motion/react';
import { Check, Compass, Star, Users, Award, BookOpen, Target, ShieldCheck } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/button';

export default function AboutUs() {
  const values = [
    { title: 'Simplicity', desc: 'We explain complex financial concepts in a way that is easy to understand for everyone.' },
    { title: 'Practical Learning', desc: 'We combine theory with real-market examples to enhance real-world understanding.' },
    { title: 'Integrity', desc: 'We believe in ethical, transparent, and research-driven financial education.' },
    { title: 'Continuous Learning', desc: 'Financial learning never stops. We support and encourage lifelong learning.' },
    { title: 'Excellence', desc: 'We strive to deliver high-quality education that creates meaningful learning experiences.' }
  ];
 
  const whyUs = [
    { title: 'Structured Learning', desc: 'A carefully designed curriculum that helps learners progress from foundations to advanced knowledge.' },
    { title: 'Practical Education', desc: 'Learn through real market examples, case studies, discussions, and practical sessions.' },
    { title: 'Research-Driven Approach', desc: 'Our educational methodology is guided by research, discipline, and ethical practices.' },
    { title: 'Beginner Friendly', desc: 'Whether you\'re new to finance or looking to enhance your skills, our programs suit all stages.' },
    { title: 'Flexible Learning', desc: 'Choose from Online, Classroom, or Hybrid learning modes based on your convenience.' },
    { title: 'Lifelong Learning', desc: 'Our objective is not just to teach a course but to build lasting financial confidence.' }
  ];

  const whoWeHelp = [
    'Students', 'Working Professionals', 'Investors', 'Traders',
    'Entrepreneurs', 'Business Owners', 'Finance Enthusiasts', 'Anyone interested in financial markets'
  ];

  const steps = [
    { num: '01', title: 'Learn', desc: 'Understand the fundamentals through structured lessons.' },
    { num: '02', title: 'Understand', desc: 'Build clarity with simplified explanations and guided learning.' },
    { num: '03', title: 'Apply', desc: 'Strengthen your knowledge through practical examples and real-world applications.' },
    { num: '04', title: 'Grow', desc: 'Continue developing your financial knowledge with confidence and discipline.' }
  ];

  return (
    <section className="bg-brand-bg-deep pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto space-y-24 relative z-10">
        
        {/* 1. Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <span className="text-xs font-bold tracking-widest text-brand-primary uppercase bg-brand-primary/10 border border-brand-primary/20 px-4 py-2 rounded-full inline-block">
            An Institute of Financial Education
          </span>
          <motion.h1 
            variants={fadeIn}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-brand-navy leading-tight tracking-tight text-balance"
          >
            Understanding Finance <span className="text-brand-primary italic">Starts Here</span>
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-slate-600 text-base sm:text-lg leading-relaxed font-light"
          >
            At Ashwini Trading Academy, we believe that financial education should be simple, practical, and accessible to everyone. Our mission is to empower learners with the knowledge and confidence to understand financial markets through structured education, practical learning, and a research-driven approach.
          </motion.p>
        </motion.div>

        {/* 2. Our Story, Mission, Vision Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6 space-y-6 bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm">
            <h2 className="text-2xl font-serif font-semibold text-brand-navy">Our Story</h2>
            <div className="h-1 w-12 bg-brand-primary rounded" />
            <p className="text-slate-600 leading-relaxed text-sm">
              Every successful journey begins with a purpose. Ashwini Trading Academy was established with a simple vision—to make financial education easy to understand for every learner. While many people find finance complicated, we believe that the right guidance and a structured approach can make even the most complex concepts simple.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              Our programs are designed to bridge the gap between theory and practical understanding, enabling learners to develop financial knowledge they can apply with confidence throughout their lives.
            </p>
          </div>
          <div className="md:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-brand-navy">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To make financial education simple, practical, and accessible by delivering structured learning experiences that empower individuals to understand financial markets and make informed financial decisions.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary flex-shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-brand-navy">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To become one of India's most trusted institutes for financial education by creating confident, knowledgeable, and financially aware learners through quality education and ethical practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Core Values */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-serif font-semibold text-brand-navy">Our Core Values</h2>
            <p className="text-slate-500 text-sm">The pillars that define our teaching and student operations.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200/50 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-xs mb-4">
                  0{i + 1}
                </div>
                <h4 className="font-bold text-brand-navy mb-2 text-base">{v.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Why Choose Us & Who We Help */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Why Choose Us */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-3xl font-serif font-semibold text-brand-navy">Why Choose Ashwini Trading Academy?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {whyUs.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/15 text-brand-primary flex items-center justify-center mt-1">
                    <Check className="w-3.5 h-3.5 stroke-[3px]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-brand-navy text-sm sm:text-base">{item.title}</h4>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who We Help */}
          <div className="lg:col-span-4 bg-brand-navy rounded-3xl p-8 text-white relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-xl font-bold mb-6 tracking-tight">Who We Help</h3>
            <div className="space-y-3">
              {whoWeHelp.map((person, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  <span className="text-slate-300 font-medium text-[13px] sm:text-sm">{person}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. NISM Certifications Block */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/60 shadow-sm grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="text-[10px] font-bold bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary tracking-widest px-3 py-1 rounded-full uppercase inline-block">
              Career Readiness
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-brand-navy leading-tight">
              NISM Certification Preparation Programs
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Prepare for industry-recognized National Institute of Securities Markets (NISM) certification examinations through our structured learning and mock assessment modules. Designed to help aspiring finance professionals build strong conceptual knowledge and prepare confidently for certifications.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-xs font-bold text-slate-700">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/50">
                ✔️ Mutual Fund Distributors (Series V-A)
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/50">
                ✔️ Equity Derivatives (Series VIII)
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/50">
                ✔️ Investment Adviser L1 (Series X-A)
              </div>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center">
            <div className="bg-brand-navy p-6 rounded-2xl text-center text-white border border-white/10 w-full max-w-sm">
              <Award className="w-12 h-12 text-brand-primary mx-auto mb-4 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Preparation Advisory</span>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                NISM examinations are conducted officially by NISM. Our program serves as an exam training guide to help you build conceptual clarity before taking the tests.
              </p>
            </div>
          </div>
        </div>

        {/* 6. Meet the Founder */}
        <div className="bg-brand-navy rounded-[36px] p-8 sm:p-12 text-white grid md:grid-cols-12 gap-8 items-center shadow-xl relative overflow-hidden">
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="md:col-span-4 flex flex-col items-center">
            <div className="w-48 h-48 rounded-full border-4 border-brand-primary/30 overflow-hidden relative group">
              <img 
                src="/assets/founder.png" 
                alt="Ashwini SD" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h4 className="text-xl font-bold mt-4">Ashwini SD</h4>
            <p className="text-brand-primary text-xs font-bold uppercase tracking-widest mt-1">Founder & Mentor</p>
            <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mt-0.5">SEBI Registered Research Analyst</span>
          </div>

          <div className="md:col-span-8 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-serif font-medium leading-tight">Meet the Founder & Principal Mentor</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              Ashwini SD founded Ashwini Trading Academy with the vision of making financial education simple and accessible. Through structured teaching, practical learning, and a research-driven approach, the focus is on helping every learner build financial knowledge with clarity, confidence, and a strong foundation for lifelong learning.
            </p>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 text-[13px] text-slate-300 max-w-md">
              <ShieldCheck className="w-5 h-5 text-brand-primary flex-shrink-0" />
              <span>Regulated guidance by a SEBI Registered Research Analyst ensuring transparency and ethics.</span>
            </div>
          </div>
        </div>

        {/* 7. Teaching Methodology */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-serif font-semibold text-brand-navy">Our Teaching Methodology</h2>
            <p className="text-slate-500 text-sm">We believe in a step-by-step approach to master financial concepts.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200/50 shadow-sm relative overflow-hidden">
                <span className="absolute top-[-10px] right-0 text-7xl font-extrabold opacity-[0.04] text-brand-navy select-none">
                  {st.num}
                </span>
                <h4 className="font-extrabold text-brand-navy text-lg mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-primary" />
                  {st.title}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Call to Action */}
        <div className="bg-brand-navy rounded-[32px] p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight">Ready to Start Your Financial Learning Journey?</h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Whether you're beginning your financial education or looking to advance your knowledge, we're here to support you at every stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#" className="w-full sm:w-auto">
              <Button size="lg" className="w-full font-bold text-[14px] tracking-wide uppercase cursor-pointer bg-cta-gold text-brand-navy">
                Book a Free Demo Class
              </Button>
            </a>
            <a href="#/all-courses" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full font-bold text-[14px] tracking-wide uppercase cursor-pointer border-white/20 hover:bg-white/10 text-white">
                Explore Our Programs
              </Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
