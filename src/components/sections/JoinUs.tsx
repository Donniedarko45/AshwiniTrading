import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fadeIn, staggerContainer, scaleUp } from '@/lib/animations';
import { 
  User, Mail, Phone, Globe, MapPin, ShieldCheck, CheckCircle2, 
  ChevronRight, Award, GraduationCap, Briefcase, Landmark, Home, 
  TrendingUp, HelpCircle, BookOpen, Layers, Target, Check, ArrowRight, Brain
} from 'lucide-react';

export default function JoinUs() {
  // Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [learningMode, setLearningMode] = useState<'online' | 'offline'>('online');
  const [isNotARobot, setIsNotARobot] = useState(false);
  
  const [errors, setErrors] = useState<{ name?: string; email?: string; mobile?: string; robot?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form Validation & Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!mobile.trim()) {
      newErrors.mobile = 'Mobile is required';
    } else if (!/^\d{10}$/.test(mobile.replace(/\D/g, ''))) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number';
    }

    if (!isNotARobot) {
      newErrors.robot = 'Please confirm you are not a robot';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setName('');
      setEmail('');
      setMobile('');
      setLearningMode('online');
      setIsNotARobot(false);
    }, 1500);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('join-form-card');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-bg-dark via-brand-bg-deep to-brand-bg-dark text-white pt-28 pb-20 relative overflow-hidden">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} aria-hidden="true" />
      
      {/* Background Glows */}
      <div className="absolute top-10 left-[-10%] w-[600px] h-[600px] bg-brand-glow/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-[-10%] w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section 1: Hero split row (Text vs Form) */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e3c974]/10 border border-[#e3c974]/20 text-[#e3c974] text-xs font-bold tracking-widest uppercase mb-6">
                ✨ ADMISSIONS OPEN 2026
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-white mb-6">
                Build Your Future in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3c974] via-[#74d1f5] to-white">
                  Capital Markets
                </span>
              </h1>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                Gain practical knowledge, industry-relevant skills, and confidence through our career-oriented stock market education programs. 
                Whether you are a student, working professional, entrepreneur, homemaker, or aspiring investor, Ashwini Trading Academy provides structured learning designed to help you understand financial markets and unlock new opportunities for personal and professional growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={scrollToForm}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-orange-grad-start to-brand-orange-grad-end text-slate-950 font-extrabold text-base uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#e3c974]/10 cursor-pointer"
                >
                  Enroll Now
                </button>
                
                <a
                  href="https://wa.me/919845961990?text=Hi%2C%20I%20want%20to%20know%20more%20about%20joining%20Ashwini%20Trading%20Academy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-extrabold text-base uppercase tracking-wider hover:bg-white/10 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Lead Registration Form */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              id="join-form-card"
              className="bg-brand-bg-card/80 backdrop-blur-2xl p-6 sm:p-8 rounded-[28px] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              {/* Top accent gradient stripe */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#e3c974] via-[#74d1f5] to-[#3b82f6]" />

              <h2 className="text-2xl font-extrabold tracking-tight mb-2 text-white">Join the Academy</h2>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6">Register your seat today</p>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Input */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Full Name</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                          <User className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          placeholder="Your full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full h-12 bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 text-white text-[15px] focus:outline-none focus:ring-1 focus:ring-[#e3c974] placeholder:text-slate-500 transition-all"
                        />
                      </div>
                      {errors.name && <span className="text-xs font-bold text-red-500 block">{errors.name}</span>}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Email Address</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                          <Mail className="w-4 h-4" />
                        </span>
                        <input
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full h-12 bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 text-white text-[15px] focus:outline-none focus:ring-1 focus:ring-[#e3c974] placeholder:text-slate-500 transition-all"
                        />
                      </div>
                      {errors.email && <span className="text-xs font-bold text-red-500 block">{errors.email}</span>}
                    </div>

                    {/* Mobile Input */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Mobile Number</label>
                      <div className="flex gap-2">
                        <div className="w-16 h-12 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 font-bold text-[14px]">
                          +91
                        </div>
                        <div className="relative flex-1">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                            <Phone className="w-4 h-4" />
                          </span>
                          <input
                            type="tel"
                            maxLength={10}
                            placeholder="10-digit mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                            className="w-full h-12 bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 text-white text-[15px] focus:outline-none focus:ring-1 focus:ring-[#e3c974] placeholder:text-slate-500 transition-all"
                          />
                        </div>
                      </div>
                      {errors.mobile && <span className="text-xs font-bold text-red-500 block">{errors.mobile}</span>}
                    </div>

                    {/* Learning Mode Radio Option */}
                    <div className="space-y-2 text-left">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Learning Mode</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setLearningMode('online')}
                          className={`h-12 rounded-xl border flex items-center justify-center gap-2 font-bold text-sm cursor-pointer transition-all ${
                            learningMode === 'online'
                              ? 'border-[#e3c974] bg-[#e3c974]/10 text-white shadow-md'
                              : 'border-white/5 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <Globe className="w-4 h-4" />
                          Online Live
                        </button>
                        
                        <button
                          type="button"
                          onClick={() => setLearningMode('offline')}
                          className={`h-12 rounded-xl border flex items-center justify-center gap-2 font-bold text-sm cursor-pointer transition-all ${
                            learningMode === 'offline'
                              ? 'border-[#74d1f5] bg-[#74d1f5]/10 text-white shadow-md'
                              : 'border-white/5 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <MapPin className="w-4 h-4" />
                          Offline (Blr)
                        </button>
                      </div>
                    </div>

                    {/* Robot Captcha Checkbox */}
                    <div className="p-4 rounded-xl border border-white/5 bg-slate-950/40 text-left">
                      <label className="flex items-center gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={isNotARobot}
                          onChange={(e) => {
                            setIsNotARobot(e.target.checked);
                            if (errors.robot) setErrors(prev => ({ ...prev, robot: undefined }));
                          }}
                          className="sr-only"
                        />
                        <div className={`w-6 h-6 rounded border flex items-center justify-center transition-all shrink-0 ${
                          isNotARobot 
                            ? 'bg-[#10B981] border-[#10B981] text-white' 
                            : 'border-white/20 bg-white/5 hover:border-white/40'
                        }`}>
                          {isNotARobot && <Check className="w-4 h-4 stroke-[3px]" />}
                        </div>
                        <span className="text-[14px] font-semibold text-slate-300">I am not a robot</span>
                      </label>
                      {errors.robot && <span className="text-xs font-bold text-red-500 mt-2 block">{errors.robot}</span>}
                    </div>

                    {/* Register Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full h-13 flex items-center justify-center bg-gradient-to-r from-brand-orange-grad-start to-brand-orange-grad-end text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl border-0 shadow-lg shadow-[#e3c974]/10 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? 'Registering...' : 'Register'}
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <CheckCircle2 className="w-14 h-14 text-[#10B981] mb-4 animate-bounce" />
                    <h3 className="text-xl font-bold text-white mb-2">Registration Complete!</h3>
                    <p className="text-slate-300 text-sm max-w-xs mb-6">
                      Thank you for choosing Ashwini Trading Academy. Our admissions representative will contact you shortly to complete your enrollment.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-lg border border-white/20 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Register Another User
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

        {/* Section 2: Why Choose Us */}
        <div className="mb-24 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#74d1f5]/10 border border-[#74d1f5]/20 text-[#74d1f5] text-xs font-bold tracking-widest uppercase mb-4">
              WHY US
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
              Why Choose Ashwini Trading Academy?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg font-medium max-w-3xl mx-auto leading-relaxed mb-12">
              At Ashwini Trading Academy, we focus on practical learning that helps students understand how financial markets operate in the real world.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {[
              'Industry-Oriented Curriculum',
              'Practical Market Learning',
              'Live Market Analysis Sessions',
              'NISM Certification Preparation',
              'Beginner-Friendly Teaching',
              'Experienced Mentorship',
              'Career Development Support',
              'Continuous Learning Assistance'
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-brand-bg-card/35 border border-white/5 rounded-2xl p-5 hover:border-[#e3c974]/30 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-[#e3c974]/10 border border-[#e3c974]/20 flex items-center justify-center text-[#e3c974] mb-4">
                  <Check className="w-4 h-4 stroke-[3px]" />
                </div>
                <h4 className="font-bold text-[15px] text-white tracking-tight">{item}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3: Who Can Join? */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold tracking-widest uppercase mb-4">
              ELIGIBILITY
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Who Can Join?</h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: 'Students', desc: 'Build a strong foundation in financial markets and enhance your career opportunities.', icon: GraduationCap, color: 'gold' },
              { title: 'Working Professionals', desc: 'Learn investing and wealth creation strategies while advancing your financial knowledge.', icon: Briefcase, color: 'blue' },
              { title: 'Entrepreneurs', desc: 'Understand financial markets and make informed investment decisions.', icon: Landmark, color: 'gold' },
              { title: 'Homemakers', desc: 'Develop financial awareness and learn how to manage and grow wealth confidently.', icon: Home, color: 'blue' },
              { title: 'Aspiring Traders', desc: 'Gain practical market knowledge and develop disciplined market approaches.', icon: TrendingUp, color: 'gold' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={scaleUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-brand-bg-card/40 border border-white/5 rounded-3xl p-6 hover:border-[#74d1f5]/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
                      item.color === 'gold' ? 'bg-[#e3c974]/10 text-[#e3c974]' : 'bg-[#74d1f5]/10 text-[#74d1f5]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-lg text-white mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-slate-400 text-[13px] leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Section 4: What You Will Learn */}
        <div className="mb-24 bg-brand-bg-card/25 border border-white/5 rounded-[36px] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-glow/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e3c974]/10 border border-[#e3c974]/20 text-[#e3c974] text-xs font-bold tracking-widest uppercase mb-4">
                SYLLABUS HIGHLIGHTS
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white">What You Will Learn</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                { title: 'Capital Market Fundamentals', desc: 'Understand stock exchanges, market participants, financial instruments, and market functioning.' },
                { title: 'Technical Analysis', desc: 'Learn chart patterns, candlestick analysis, support and resistance, trend identification, and market psychology.' },
                { title: 'Futures & Options', desc: 'Understand derivatives, risk management concepts, and advanced market strategies.' },
                { title: 'Mutual Funds & Wealth Creation', desc: 'Learn SIPs, portfolio building, asset allocation, and long-term wealth creation principles.' },
                { title: 'Risk Management', desc: 'Develop the discipline and techniques required to manage risk effectively in financial markets.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start text-left">
                  <span className="w-6 h-6 rounded-full bg-[#e3c974]/15 flex items-center justify-center text-[#e3c974] text-xs font-bold shrink-0 mt-1">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-extrabold text-lg text-white mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certification Block */}
            <div className="p-6 rounded-2xl border border-[#74d1f5]/25 bg-[#74d1f5]/5 text-left relative overflow-hidden">
              <div className="absolute top-[-50%] right-[-10%] w-48 h-48 bg-[#74d1f5]/10 rounded-full blur-[70px]" />
              <div className="flex flex-col sm:flex-row gap-4 items-start relative z-10">
                <div className="p-3 bg-[#74d1f5]/10 border border-[#74d1f5]/20 rounded-xl text-[#74d1f5] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-lg text-white mb-2 tracking-tight">NISM Certification Training</h4>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed font-medium">
                    Comprehensive, structured preparation for regulatory examinations and professional licensing in India:
                  </p>
                  <ul className="grid sm:grid-cols-3 gap-3">
                    {[
                      'Series V-A (Mutual Fund)',
                      'Series VIII (Equity Derivatives)',
                      'Series XV (Research Analyst)'
                    ].map((cert, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-2 text-[13px] text-slate-300 font-semibold bg-white/5 border border-white/5 rounded-lg px-3 py-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#74d1f5] shrink-0" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section 5: Learning Methodology */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#74d1f5]/10 border border-[#74d1f5]/20 text-[#74d1f5] text-xs font-bold tracking-widest uppercase mb-4">
              METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">Our Learning Methodology</h2>
            <p className="text-slate-400 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              We believe that learning should be practical, engaging, and application-focused.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {[
              { title: 'Interactive Classroom Sessions', icon: BookOpen },
              { title: 'Real-Time Market Examples', icon: Target },
              { title: 'Case Studies & Exercises', icon: Layers },
              { title: 'Concept-Based Learning', icon: Brain },
              { title: 'Doubt Clearing Sessions', icon: HelpCircle },
              { title: 'Continuous Guidance & Assessment', icon: ShieldCheck }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex gap-4 items-start p-5 bg-brand-bg-card/25 border border-white/5 rounded-2xl">
                  <div className="p-3 bg-[#74d1f5]/10 border border-[#74d1f5]/20 rounded-xl text-[#74d1f5] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[15px] text-white leading-snug tracking-tight mt-1">{item.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 6: Benefits */}
        <div className="mb-24 max-w-4xl mx-auto bg-brand-bg-card/40 border border-white/5 rounded-[36px] p-8 md:p-12 text-left">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-xs font-bold tracking-widest uppercase mb-4">
              KEY BENEFITS
            </div>
            <h2 className="text-3xl font-extrabold text-white">Benefits of Joining</h2>
          </div>

          <p className="text-slate-300 font-semibold mb-6 text-[15px]">By the end of the program, you will:</p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Understand how financial markets function',
              'Develop analytical and decision-making skills',
              'Build confidence in investing and participation',
              'Improve financial literacy',
              'Prepare for industry certifications',
              'Explore opportunities in the market ecosystem',
              'Gain practical knowledge for real-world scenarios'
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 stroke-[3.5px]" />
                </span>
                <span className="text-slate-200 text-sm font-bold leading-tight">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 7: Success Quote */}
        <div className="mb-24 text-center max-w-3xl mx-auto p-8 rounded-3xl bg-brand-bg-card/20 border border-[#e3c974]/20 relative">
          <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 bg-slate-950 px-4 text-slate-500 font-serif text-3xl">“</div>
          <h3 className="text-2xl font-black text-[#e3c974] mb-4 tracking-tight">Student Success Begins Here</h3>
          <p className="text-slate-300 text-base leading-relaxed font-medium">
            Our mission is to empower individuals with financial knowledge, market awareness, and practical skills that contribute to informed decision-making and long-term growth. Join a learning community committed to education, discipline, and continuous improvement.
          </p>
        </div>

        {/* Section 8: Call to Action / Bottom Card */}
        <div className="bg-gradient-to-r from-brand-orange-grad-start to-brand-orange-grad-end rounded-[36px] p-8 md:p-12 text-slate-950 text-center relative overflow-hidden shadow-2xl shadow-[#e3c974]/20">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '20px 20px' }} aria-hidden="true" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-none mb-4">
              Take the First Step Towards Financial Knowledge
            </h3>
            <p className="text-slate-900 font-extrabold text-lg uppercase tracking-wider mb-8">
              Start Your Learning Journey Today
            </p>
            <p className="text-slate-900 font-semibold leading-relaxed mb-8 max-w-2xl mx-auto text-[15px] sm:text-base">
              Whether your goal is financial awareness, professional development, certification preparation, or understanding capital markets, Ashwini Trading Academy is here to support your journey.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:9845961990"
                className="flex items-center gap-3 px-8 py-4 bg-slate-950 text-[#e3c974] rounded-xl font-extrabold text-base uppercase tracking-wider hover:bg-slate-900 transition-colors shadow-xl"
              >
                <Phone className="w-5 h-5 fill-[#e3c974]" />
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
