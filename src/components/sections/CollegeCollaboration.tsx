import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Sparkles, 
  Award, 
  TrendingUp, 
  Users, 
  GraduationCap, 
  ArrowLeft, 
  Phone, 
  Mail, 
  User, 
  Building, 
  Calendar, 
  MessageSquare, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  X,
  MapPin,
  Star,
  Check,
  Target,
  Layers,
  HelpCircle,
  ShieldCheck,
  Landmark,
  Home
} from 'lucide-react';
import { 
  collaborationHighlights, 
  collaborationReviews, 
  collaborationGallery, 
  founderQuote 
} from '@/data/collaborations';
import { fadeIn, staggerContainer, scaleUp } from '@/lib/animations';

export default function CollegeCollaboration() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [formState, setFormState] = useState({
    fullName: '',
    designation: '',
    collegeName: '',
    email: '',
    phone: '',
    preferredMonth: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        fullName: '',
        designation: '',
        collegeName: '',
        email: '',
        phone: '',
        preferredMonth: '',
        message: ''
      });
    }, 1500);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'unset';
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === 0 ? collaborationGallery.length - 1 : (prev ?? 0) - 1));
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === collaborationGallery.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  };

  // Programs offered data mapping
  const programs = [
    { title: 'Guest Lectures', desc: 'Industry-focused sessions designed to introduce students to the world of finance, investing, and capital markets.', icon: BookOpen, color: 'gold' },
    { title: 'Financial Literacy Workshops', desc: 'Interactive workshops that help students understand personal finance, wealth creation, budgeting, and investing.', icon: Landmark, color: 'blue' },
    { title: 'Stock Market Awareness Programs', desc: 'Practical sessions covering stock markets, investing principles, and market functioning.', icon: TrendingUp, color: 'gold' },
    { title: 'Career Guidance Sessions', desc: 'Helping students understand various career paths available in the financial services sector.', icon: GraduationCap, color: 'blue' },
    { title: 'NISM Certification Awareness Programs', desc: 'Guidance on industry-recognized certifications that can strengthen students\' professional profiles.', icon: Award, color: 'gold' },
    { title: 'Skill Development Seminars', desc: 'Programs focused on practical financial skills, analytical thinking, and market understanding.', icon: Sparkles, color: 'blue' }
  ];

  return (
    <div className="bg-gradient-to-b from-brand-bg-dark via-brand-bg-deep to-brand-bg-dark min-h-screen text-white overflow-hidden relative pb-20 pt-24">
      {/* Background grid dot overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} aria-hidden="true" />
      
      {/* Decorative background glows */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-brand-glow/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-brand-glow/10 rounded-full blur-[160px] pointer-events-none" />

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
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-1.5 mb-6 text-brand-orange">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest">
              CAMPUS COLLABORATION
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
            Partner With Us to Empower <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-cyan">
              Future Finance Professionals
            </span>
          </h1>

          <p className="text-slate-200 text-lg md:text-xl font-bold leading-relaxed max-w-3xl mx-auto mb-6">
            Bridging the Gap Between Academic Learning and Industry Skills
          </p>

          <p className="text-slate-400 text-[15px] sm:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            In today's competitive world, academic qualifications alone are often not enough. Students need practical skills, financial awareness, and industry exposure to enhance their career opportunities. Ashwini Trading Academy collaborates with colleges and educational institutions to provide industry-oriented programs, seminars, workshops, and certification guidance that help students develop valuable skills in the capital markets and financial services industry. Let's work together to prepare students for the opportunities of tomorrow.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <a href="#inquiry-form">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-brand-orange-grad-start to-brand-orange-grad-end text-slate-950 text-base font-black uppercase tracking-wider rounded-xl border-0 shadow-lg shadow-brand-orange/15 cursor-pointer"
              >
                Collaborate Now
              </motion.button>
            </a>
            <a href="tel:+919845961990">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white text-base font-bold uppercase tracking-wider rounded-xl border border-white/10 cursor-pointer flex items-center gap-2 transition-colors"
              >
                <Phone className="w-5 h-5 text-brand-orange" />
                Call Advisor
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Section 2: Why College Collaborations Matter */}
        <div className="mb-24 text-center max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-bold tracking-widest uppercase mb-4">
              BENEFITS
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Why College Collaborations Matter
            </h2>
            <p className="text-slate-300 max-w-3xl mx-auto font-semibold leading-relaxed">
              The employment landscape is evolving rapidly, and employers increasingly value practical skills alongside academic achievements. Our programs help students:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-left">
            {[
              'Develop financial literacy and investment awareness',
              'Understand real-world financial markets',
              'Explore career opportunities in the financial services industry',
              'Gain exposure to industry-relevant certifications',
              'Build analytical and decision-making skills',
              'Enhance employability through practical knowledge',
              'Learn skills that complement their academic education'
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-brand-bg-card/45 border border-white/5 rounded-2xl p-5 hover:border-brand-orange/30 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange mb-4">
                  <Check className="w-4 h-4 stroke-[3px]" />
                </div>
                <p className="font-bold text-[14px] text-slate-200 leading-snug">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3: Programs We Offer for Colleges */}
        <div className="mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold tracking-widest uppercase mb-4">
              OUR PROGRAMS
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Programs We Offer for Colleges
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {programs.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <motion.div 
                  key={idx}
                  variants={scaleUp}
                  className="bg-brand-bg-card/40 rounded-[28px] p-8 border border-white/5 hover:border-brand-orange/20 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl group-hover:bg-brand-orange/10 transition-colors pointer-events-none" />
                  
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 ${
                    prog.color === 'gold' ? 'bg-brand-orange/10 border-brand-orange/20 text-brand-orange' : 'bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan'
                  }`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-brand-orange-light transition-colors">
                    {prog.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed text-sm font-medium">
                    {prog.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Section 4: Benefits Grid (Students vs Institutions) */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24 items-stretch">
          
          {/* Benefits for Students */}
          <motion.div 
            className="bg-brand-bg-card/30 border border-white/5 rounded-[32px] p-8 md:p-10 text-left hover:border-brand-orange/30 transition-colors"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-black text-brand-orange mb-4 tracking-tight flex items-center gap-3">
              <GraduationCap className="w-6 h-6" />
              Benefits for Students
            </h3>
            <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-6">Students Gain:</p>
            <div className="space-y-3">
              {[
                'Industry-Relevant Knowledge',
                'Financial Awareness',
                'Career Exposure',
                'Analytical Skills',
                'Certification Guidance',
                'Networking Opportunities',
                'Enhanced Employability'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 stroke-[3.5px]" />
                  </span>
                  <span className="text-slate-200 text-[14px] font-bold leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Benefits for Educational Institutions */}
          <motion.div 
            className="bg-brand-bg-card/30 border border-white/5 rounded-[32px] p-8 md:p-10 text-left hover:border-brand-cyan/30 transition-colors"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-black text-brand-cyan mb-4 tracking-tight flex items-center gap-3">
              <Building className="w-6 h-6" />
              Benefits for Educational Institutions
            </h3>
            <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-6">Colleges Can Offer Their Students:</p>
            <div className="space-y-3">
              {[
                'Industry Exposure',
                'Value-Added Learning Opportunities',
                'Skill Development Initiatives',
                'Career-Oriented Financial Education',
                'Expert Sessions by Industry Professionals',
                'Enhanced Student Engagement',
                'Stronger Industry-Academia Connect'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-cyan/20 text-brand-cyan flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 stroke-[3.5px]" />
                  </span>
                  <span className="text-slate-200 text-[14px] font-bold leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Section 5: Workshops in Action Gallery (PRESERVED EXACTLY AS REQUESTED) */}
        <div className="mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
              Workshops in Action
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">
              Click on any photograph to view the gallery of our trading seminars conducted in packed auditoriums.
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {collaborationGallery.map((img, idx) => (
              <motion.div
                key={idx}
                variants={scaleUp}
                onClick={() => openLightbox(idx)}
                className="group cursor-pointer rounded-[24px] overflow-hidden border border-white/10 hover:border-brand-orange/30 transition-all duration-300 bg-brand-bg-card relative aspect-[3/2] shadow-lg"
              >
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                  <span className="text-xs font-semibold text-slate-200 line-clamp-2">
                    {img.caption}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/20 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange-light" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Lightbox Modal (PRESERVED EXACTLY) */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-sm"
              onClick={closeLightbox}
            >
              <button 
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-3 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors cursor-pointer"
                aria-label="Close Gallery"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
                {/* Images Swiper */}
                <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden rounded-[20px] bg-brand-bg-card-dark">
                  <img 
                    src={collaborationGallery[lightboxIndex].url} 
                    alt={collaborationGallery[lightboxIndex].caption} 
                    className="max-w-full max-h-full object-contain"
                  />
                  
                  {/* Navigation Buttons */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 p-3 bg-black/70 hover:bg-black text-white rounded-full border border-white/25 transition-colors cursor-pointer flex items-center justify-center"
                    aria-label="Previous Image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 p-3 bg-black/70 hover:bg-black text-white rounded-full border border-white/25 transition-colors cursor-pointer flex items-center justify-center"
                    aria-label="Next Image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Caption / Stats */}
                <div className="text-center mt-6 px-6 max-w-3xl">
                  <p className="text-slate-200 text-base font-semibold leading-relaxed">
                    {collaborationGallery[lightboxIndex].caption}
                  </p>
                  <span className="inline-block mt-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Image {lightboxIndex + 1} of {collaborationGallery.length}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section 6: Our Impact & Areas Covered */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24 items-stretch">
          
          {/* Our Impact */}
          <motion.div 
            className="bg-brand-bg-card/40 border border-white/5 rounded-[32px] p-8 md:p-10 text-left flex flex-col justify-between hover:border-brand-success/30 transition-colors"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div>
              <h3 className="text-2xl font-black text-brand-success mb-4 tracking-tight flex items-center gap-3">
                <Target className="w-6 h-6" />
                Our Impact
              </h3>
              <p className="text-slate-300 font-semibold mb-6 text-[15px]">
                Through our seminars and workshops, students have gained:
              </p>
              <div className="space-y-3">
                {[
                  'Awareness about financial markets',
                  'Understanding of investment concepts',
                  'Exposure to career opportunities in finance',
                  'Practical knowledge beyond classroom education',
                  'Motivation to pursue industry certifications'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-success/20 text-brand-success flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 stroke-[3.5px]" />
                    </span>
                    <span className="text-slate-200 text-sm font-bold leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Areas Covered During Seminars */}
          <motion.div 
            className="bg-brand-bg-card/40 border border-white/5 rounded-[32px] p-8 md:p-10 text-left hover:border-brand-orange/30 transition-colors"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-black text-brand-orange mb-4 tracking-tight flex items-center gap-3">
              <Layers className="w-6 h-6" />
              Areas Covered During Seminars
            </h3>
            <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-6">Course Modules:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Introduction to Financial Markets',
                'Importance of Financial Literacy',
                'Career Opportunities in Capital Markets',
                'Basics of Investing and Wealth Creation',
                'Mutual Funds & SIPs',
                'Stock Market Fundamentals',
                'NISM Certifications and Benefits',
                'Future Industry Skills Required'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 bg-white/5 border border-white/5 rounded-xl">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange/15 text-brand-orange flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-slate-200 text-[13px] font-bold leading-tight mt-0.5">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Featured Institution & Quote (PRESERVED EXACTLY AS REQUESTED) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24">
          {/* Institutional Partner Card */}
          <motion.div 
            className="lg:col-span-5 glass-card rounded-[32px] p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-300 relative group overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-brand-orange/10 p-3.5 rounded-2xl border border-brand-orange/20">
                <Building className="w-6 h-6 text-brand-orange-light" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">Featured Collaboration</span>
                <h3 className="text-xl font-bold text-white tracking-tight">Green Valley International School</h3>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed text-sm font-medium mb-6">
              Empowering students with foundational modules on asset allocation and savings behavior. Learning and growing together to make high-quality financial literacy an essential component of school curriculum.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-400">Interactive Curriculum</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-400">Certificates Awarded</span>
            </div>
          </motion.div>

          {/* Founder Quote Card */}
          <motion.div 
            className="lg:col-span-7 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="absolute -top-12 -left-6 text-8xl text-brand-orange/10 font-serif select-none pointer-events-none">“</div>
            <div className="relative glass-card rounded-[32px] p-8 md:p-10 border border-brand-orange/10 bg-brand-bg-card/30">
              <p className="text-lg md:text-xl font-semibold text-slate-200 leading-relaxed italic mb-8">
                "{founderQuote.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-brand-orange/30 bg-brand-bg-card">
                  {/* Preserved founder photo */}
                  <img 
                    src="/assets/Ashwini SD.png" 
                    alt="Ashwini SD" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{founderQuote.author}</h4>
                  <p className="text-xs font-medium text-slate-400">{founderQuote.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Student Reviews (PRESERVED EXACTLY) */}
        <div className="mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
              What Students & Admin Say
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">
              Real testimonials verified from Google Reviews highlighting our training success and quiz engagement.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {collaborationReviews.map((review, idx) => (
              <motion.div 
                key={idx}
                variants={scaleUp}
                className="glass-card rounded-[28px] p-8 border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1.5 mb-5 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-slate-300 text-sm leading-relaxed font-medium mb-6 line-clamp-6">
                    "{review.reviewText}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <h4 className="font-bold text-white text-sm">{review.name}</h4>
                    <p className="text-[11px] font-semibold text-slate-500">{review.role}</p>
                  </div>
                  <div className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                    {review.source}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Inquiry Form & CTA Section */}
        <div id="inquiry-form" className="max-w-4xl mx-auto">
          <motion.div 
            className="glass-card rounded-[32px] border border-white/10 bg-brand-bg-card/50 overflow-hidden relative shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-orange to-brand-cyan" />
            
            <div className="p-8 md:p-12 relative z-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold tracking-widest uppercase mb-4">
                  CAMPUS INVITATION
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
                  Invite Us to Your Campus
                </h2>
                <p className="text-slate-300 font-semibold text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                  We welcome opportunities to collaborate with colleges, universities, educational institutions, and student development cells. Together, we can help students gain practical financial knowledge, explore career opportunities, and develop skills that contribute to their future success.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-success/10 border border-brand-success/30 p-8 rounded-2xl text-center flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-success/20 flex items-center justify-center shadow-lg shadow-brand-success/10">
                    <CheckCircle2 className="w-8 h-8 text-brand-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Request Submitted Successfully!</h3>
                  <p className="text-slate-300 text-sm max-w-md">
                    Thank you for reaching out. An advisor from Ashwini Trading Academy will review your details and connect with you within 24 hours.
                  </p>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="fullName" className="block text-xs font-bold text-slate-300 uppercase tracking-widest">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formState.fullName}
                          onChange={handleInputChange}
                          className="w-full bg-brand-bg-deep/60 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 focus:outline-none transition-all placeholder:text-slate-600"
                          placeholder="e.g. Dr. Ramesh Kumar"
                        />
                      </div>
                    </div>

                    {/* Designation */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="designation" className="block text-xs font-bold text-slate-300 uppercase tracking-widest">
                        Designation / Role
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                        <input
                          type="text"
                          id="designation"
                          name="designation"
                          required
                          value={formState.designation}
                          onChange={handleInputChange}
                          className="w-full bg-brand-bg-deep/60 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 focus:outline-none transition-all placeholder:text-slate-600"
                          placeholder="e.g. Professor / Placement Officer"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* College/Institution Name */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="collegeName" className="block text-xs font-bold text-slate-300 uppercase tracking-widest">
                        College / Institution Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                        <input
                          type="text"
                          id="collegeName"
                          name="collegeName"
                          required
                          value={formState.collegeName}
                          onChange={handleInputChange}
                          className="w-full bg-brand-bg-deep/60 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 focus:outline-none transition-all placeholder:text-slate-600"
                          placeholder="e.g. Christ University, Bangalore"
                        />
                      </div>
                    </div>

                    {/* Preferred Month */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="preferredMonth" className="block text-xs font-bold text-slate-300 uppercase tracking-widest">
                        Preferred Workshop Month
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                        <select
                          id="preferredMonth"
                          name="preferredMonth"
                          required
                          value={formState.preferredMonth}
                          onChange={handleInputChange}
                          className="w-full bg-brand-bg-deep/60 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 focus:outline-none transition-all cursor-pointer placeholder:text-slate-600"
                        >
                          <option value="" disabled className="text-slate-800 bg-white">Select a month</option>
                          <option value="immediate" className="text-slate-800 bg-white">As soon as possible</option>
                          <option value="next_month" className="text-slate-800 bg-white">Next Month</option>
                          <option value="2_3_months" className="text-slate-800 bg-white">In 2-3 Months</option>
                          <option value="next_semester" className="text-slate-800 bg-white">Next Semester</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="email" className="block text-xs font-bold text-slate-300 uppercase tracking-widest">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleInputChange}
                          className="w-full bg-brand-bg-deep/60 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 focus:outline-none transition-all placeholder:text-slate-600"
                          placeholder="e.g. name@institution.edu"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-300 uppercase tracking-widest">
                        Contact Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formState.phone}
                          onChange={handleInputChange}
                          className="w-full bg-brand-bg-deep/60 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 focus:outline-none transition-all placeholder:text-slate-600"
                          placeholder="e.g. +91 98765 43210"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="message" className="block text-xs font-bold text-slate-300 uppercase tracking-widest">
                      Requirements & Details
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                      <textarea
                         id="message"
                         name="message"
                         rows={4}
                         value={formState.message}
                         onChange={handleInputChange}
                         className="w-full bg-brand-bg-deep/60 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 focus:outline-none transition-all placeholder:text-slate-600"
                         placeholder="Please describe expected student strength, course focus (basics, options, or careers), etc..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="space-y-4 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4.5 bg-gradient-to-r from-brand-orange-grad-start to-brand-orange-grad-end text-slate-950 text-base font-black uppercase tracking-wider rounded-xl border-0 shadow-lg shadow-brand-orange/15 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Let's Build Future-Ready Students"
                      )}
                    </motion.button>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-slate-400 font-bold text-xs sm:text-sm tracking-wider uppercase mt-4 border-t border-white/5 pt-4">
                      <a href="tel:9845961990" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
                        <Phone className="w-4 h-4 text-brand-orange" />
                        Contact: 9845961990
                      </a>
                      <span className="hidden sm:inline opacity-30">•</span>
                      <span className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-brand-cyan" />
                        Ashwini Trading Academy
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest text-center">
                      Industry Knowledge • Financial Literacy • Career Development
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
