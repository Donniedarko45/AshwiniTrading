import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  TrendingUp, 
  Sparkles, 
  BookOpen, 
  Apple, 
  GraduationCap, 
  Smartphone, 
  ArrowLeft, 
  Phone, 
  CheckCircle2, 
  Quote
} from 'lucide-react';
import { coursesData } from '@/data/courses';
import { pillars, objectives, impactEquivalencies } from '@/data/onePercentChange';
import { fadeIn, staggerContainer, scaleUp } from '@/lib/animations';

const iconMap = {
  Heart: Heart,
  TrendingUp: TrendingUp,
  Sparkles: Sparkles,
  BookOpen: BookOpen,
  Apple: Apple,
  GraduationCap: GraduationCap,
  Smartphone: Smartphone
};

export default function OnePercentChange() {
  const [selectedCourseId, setSelectedCourseId] = useState(coursesData[1]?.id || coursesData[0]?.id); // Smart Investor default
  const [studentCount, setStudentCount] = useState(100);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper to parse fee string (e.g., "₹7,999") to number
  const getNumericFee = (feeStr: string) => {
    return parseInt(feeStr.replace(/[^0-9]/g, ''), 10) || 0;
  };

  const selectedCourse = coursesData.find(c => c.id === selectedCourseId) || coursesData[0];
  const courseFee = getNumericFee(selectedCourse.fee);
  const contributionPerStudent = Math.round(courseFee * 0.01);
  const totalContribution = contributionPerStudent * studentCount;

  return (
    <div className="bg-[#110B29] min-h-screen text-white overflow-hidden relative pb-20 pt-24">
      {/* Decorative background glows */}
      <div className="absolute top-24 left-1/3 w-[500px] h-[500px] bg-brand-glow/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-32 right-1/4 w-[600px] h-[600px] bg-[#43126c]/30 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
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

        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-brand-orange/10 border border-brand-orange/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-xs font-bold text-brand-orange-light uppercase tracking-widest">
              Social Impact & Purpose
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            1% Change <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-pink-500">
              Makes a Difference
            </span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            At Ashwini Trading Academy, we’re driven by a purpose beyond profit. Our <strong className="text-white">1% for Change</strong> initiative dedicates 1% of our earnings to uplift those in need, fostering a culture of compassion, support, and community growth.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <a href="#impact-calculator">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-brand-orange-grad-start to-brand-orange-grad-end text-white text-base font-bold uppercase tracking-wider rounded-xl border-0 shadow-lg shadow-orange-500/20 cursor-pointer"
              >
                See the Impact
              </motion.button>
            </a>
            <a href="tel:+919845961990">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white text-base font-bold uppercase tracking-wider rounded-xl border border-white/10 cursor-pointer flex items-center gap-2 transition-colors"
              >
                <Phone className="w-5 h-5 text-brand-emerald" />
                Speak to Team
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Why We Give Back - Three Pillars */}
        <div className="mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Why We Give Back
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">
              We believe that success grows richer when shared. Challenges are part of everyone's journey, and even the smallest gesture can create lasting impact.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {pillars.map((pillar, idx) => {
              const Icon = iconMap[pillar.iconName] || Heart;
              return (
                <motion.div 
                  key={idx}
                  variants={scaleUp}
                  className="glass-card rounded-[28px] p-8 border border-white/5 hover:border-brand-orange/20 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl group-hover:bg-brand-orange/10 transition-colors pointer-events-none" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-brand-orange-light" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-brand-orange-light transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed text-sm font-medium">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Interactive Social Impact Calculator (WOW Feature) */}
        <div id="impact-calculator" className="mb-24 scroll-mt-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Interactive Impact Calculator
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">
              See how your educational journey contributes directly to social empowerment. Select a course and slide to see the collective force of student cohorts!
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
            className="glass-card rounded-[32px] border border-white/10 bg-brand-bg-card/40 p-6 md:p-10 max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Interactive Inputs */}
              <div className="lg:col-span-6 space-y-8">
                
                {/* Course Selector Cards */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
                    1. Select an Academy Program
                  </label>
                  
                  {/* Custom Horizontal Scrollable Course Selection list */}
                  <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                    {coursesData.slice(0, 6).map((course) => {
                      const isSelected = course.id === selectedCourseId;
                      return (
                        <button
                          key={course.id}
                          onClick={() => setSelectedCourseId(course.id)}
                          className={`flex-shrink-0 text-left px-5 py-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                            isSelected 
                              ? 'bg-gradient-to-br from-brand-orange/20 to-pink-500/10 border-brand-orange shadow-lg shadow-orange-500/10 scale-[1.02]' 
                              : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                          }`}
                        >
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                            {course.badge}
                          </div>
                          <div className="text-sm font-extrabold text-white line-clamp-1 mb-2 max-w-[160px]">
                            {course.title}
                          </div>
                          <div className="text-base font-black text-brand-orange-light">
                            {course.fee}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Student Enrollment Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label htmlFor="student-slider" className="block text-xs font-bold text-slate-300 uppercase tracking-widest">
                      2. Number of Enrolled Students
                    </label>
                    <span className="bg-brand-orange/10 border border-brand-orange/20 px-3.5 py-1 rounded-xl text-brand-orange-light text-base font-extrabold">
                      {studentCount} Students
                    </span>
                  </div>

                  <div className="relative pt-2">
                    <input
                      type="range"
                      id="student-slider"
                      min="10"
                      max="500"
                      step="10"
                      value={studentCount}
                      onChange={(e) => setStudentCount(parseInt(e.target.value))}
                      className="w-full h-2 bg-white/5 border border-white/10 rounded-lg appearance-none cursor-pointer accent-brand-orange focus:outline-none"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-bold tracking-wider mt-2">
                      <span>10 STUDENTS</span>
                      <span>250 STUDENTS</span>
                      <span>500 STUDENTS</span>
                    </div>
                  </div>
                </div>

                {/* Math Recap Bar */}
                <div className="bg-[#0A0D26]/60 border border-white/5 p-5 rounded-2xl space-y-2">
                  <div className="flex justify-between text-sm font-semibold text-slate-400">
                    <span>Course Fee:</span>
                    <span className="text-white font-bold">{selectedCourse.fee}</span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold text-slate-400">
                    <span>1% Contribution per Student:</span>
                    <span className="text-brand-orange-light font-bold">₹{contributionPerStudent}</span>
                  </div>
                  <div className="border-t border-white/5 pt-3 flex justify-between items-center">
                    <span className="text-sm font-bold text-white uppercase tracking-wider">Total Fund Generated:</span>
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">
                      ₹{totalContribution.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Column: Dynamic Real-world Impact Display */}
              <div className="lg:col-span-6 space-y-6">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">
                  3. Real-world Impact Generated
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {impactEquivalencies.map((eq, idx) => {
                    const count = Math.floor(totalContribution / eq.cost);
                    const Icon = iconMap[eq.iconName] || BookOpen;

                    return (
                      <motion.div
                        key={idx}
                        layout
                        className="bg-[#0A0D26]/40 border border-white/5 hover:border-white/10 rounded-2xl p-5 relative overflow-hidden group transition-all duration-300"
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-brand-orange/5 transition-colors pointer-events-none" />
                        
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-slate-300 group-hover:text-brand-orange-light transition-colors" />
                          </div>
                          
                          {/* Pulsing glow indicator if count > 0 */}
                          {count > 0 ? (
                            <span className="flex h-2 w-2 relative">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
                            </span>
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-slate-700" />
                          )}
                        </div>

                        <div className="text-2xl font-black text-white group-hover:text-brand-orange-light transition-colors mb-1">
                          {count > 0 ? `${count.toLocaleString('en-IN')} ${eq.unit}` : `0 ${eq.unit}`}
                        </div>

                        <div className="text-sm font-bold text-slate-300 mb-2">
                          {eq.name}
                        </div>

                        <p className="text-slate-500 text-xs font-medium leading-relaxed">
                          {eq.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-4.5 text-xs font-semibold text-slate-300 leading-relaxed">
                  📢 <strong className="text-white">Empowerment Principle:</strong> Every single student who learns to trade/invest at Ashwini Trading Academy automatically becomes a sponsor for social welfare. Learning and giving back are perfectly integrated.
                </div>

              </div>

            </div>
          </motion.div>
        </div>

        {/* Mission Objectives Checklist */}
        <div className="mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Our Vision and Objectives
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">
              Through the 1% for Change initiative, we aim to build a legacy of compassion, setting a standard for financial growth that walks hand-in-hand with social service.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {objectives.map((obj, idx) => (
              <motion.div
                key={idx}
                variants={scaleUp}
                className="glass-card rounded-2xl p-6 border border-white/5 flex gap-4 items-start"
              >
                <div className="bg-brand-emerald/10 p-2 rounded-xl border border-brand-emerald/20 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-emerald" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1.5 tracking-tight">
                    {obj.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Founder Quote (Ashwini Commitment) */}
        <div className="mb-24 max-w-4xl mx-auto">
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="absolute -top-12 -left-6 text-8xl text-brand-orange/10 font-serif select-none pointer-events-none">“</div>
            <div className="relative glass-card rounded-[32px] p-8 md:p-10 border border-brand-orange/10 bg-brand-bg-card/30">
              
              <div className="flex items-center gap-3 mb-6">
                <Quote className="w-6 h-6 text-brand-orange-light shrink-0" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Personal Pledge</span>
              </div>

              <p className="text-lg md:text-xl font-semibold text-slate-200 leading-relaxed italic mb-8">
                "Financial literacy has the power to transform lives. But financial success is incomplete if it doesn't extend to uplift those who are fighting for basic needs. With our 1% for Change initiative, we pledge to turn every professional trader we train into a vehicle of hope and support for society's most vulnerable."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-brand-orange/30 bg-brand-bg-card">
                  <img 
                    src="/assets/Ashwini SD.png" 
                    alt="Ashwini SD" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Ashwini SD</h4>
                  <p className="text-xs font-medium text-slate-400">Founder, SEBI Registered Research Analyst & Philanthropist</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Final CTA Card */}
        <motion.div 
          className="glass-card rounded-[32px] border border-white/10 bg-gradient-to-r from-[#1E1145] to-[#120B2E] p-8 md:p-12 text-center relative overflow-hidden max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleUp}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Be the Change. Learn & Empower.
          </h2>
          
          <p className="text-slate-300 max-w-2xl mx-auto font-semibold text-sm md:text-base leading-relaxed mb-8">
            Every enrollment in our trading and investing programs directly feeds the 1% social fund. Join hands with us to build your financial future while building a better world, together.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#/all-courses">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-brand-orange-grad-start to-brand-orange-grad-end text-white text-base font-bold uppercase tracking-wider rounded-xl border-0 shadow-lg shadow-orange-500/20 cursor-pointer"
              >
                Explore Courses
              </motion.button>
            </a>
            <a href="tel:+919845961990">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white text-base font-bold uppercase tracking-wider rounded-xl border border-white/10 cursor-pointer flex items-center gap-2 transition-colors"
              >
                Get in Touch
              </motion.button>
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
