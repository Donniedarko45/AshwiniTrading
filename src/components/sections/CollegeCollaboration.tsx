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
  Star
} from 'lucide-react';
import { 
  collaborationHighlights, 
  collaborationReviews, 
  collaborationGallery, 
  founderQuote 
} from '@/data/collaborations';
import { fadeIn, staggerContainer, scaleUp } from '@/lib/animations';

const iconMap = {
  BookOpen: BookOpen,
  Sparkles: Sparkles,
  Award: Award,
  TrendingUp: TrendingUp,
  Users: Users,
  GraduationCap: GraduationCap
};

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

  return (
    <div className="bg-[#110B29] min-h-screen text-white overflow-hidden relative pb-16 pt-24">
      {/* Decorative background glows */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-brand-glow/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-[#311054]/30 rounded-full blur-[160px] pointer-events-none" />

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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-xs font-bold text-brand-orange-light uppercase tracking-widest">
              Empowering Next-Gen Investors
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            College Collaboration <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">
              Program
            </span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            We partner with premier educational institutions to host financial literacy workshops, practical stock market training, and certification programs for students.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <a href="#inquiry-form">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-brand-orange-grad-start to-brand-orange-grad-end text-white text-base font-bold uppercase tracking-wider rounded-xl border-0 shadow-lg shadow-orange-500/20 cursor-pointer"
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
                <Phone className="w-5 h-5 text-brand-emerald" />
                Call Advisor
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            { value: '25+', label: 'Workshops Conducted' },
            { value: '5,000+', label: 'Students Certified' },
            { value: '15+', label: 'College Partners' },
            { value: '100%', label: 'Practical Curriculum' }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              variants={scaleUp}
              className="glass-card rounded-[24px] p-6 text-center border border-white/10 hover:border-white/20 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-3xl md:text-4xl font-extrabold text-brand-orange-light mb-2">{stat.value}</div>
              <div className="text-xs md:text-sm font-semibold text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Workshop Highlights */}
        <div className="mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Workshop Highlights
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">
              We deliver rich, comprehensive training programs designed to bridge the gap between classroom theory and real-world trading execution.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {collaborationHighlights.map((highlight, idx) => {
              const Icon = iconMap[highlight.iconName] || BookOpen;
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
                    {highlight.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed text-sm font-medium">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Real Photographic Evidence Gallery */}
        <div className="mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
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

        {/* Lightbox Modal */}
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
                <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden rounded-[20px] bg-[#0A0D26]">
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

        {/* Featured Institution & Quote */}
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

        {/* Student Reviews */}
        <div className="mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
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
            className="glass-card rounded-[32px] border border-white/10 bg-brand-bg-card/50 overflow-hidden relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-orange to-yellow-400" />
            
            <div className="p-8 md:p-12 relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                  Request a College Workshop
                </h2>
                <p className="text-slate-400 font-medium text-sm md:text-base max-w-xl mx-auto">
                  Complete the short request form below to schedule a trading seminar or institutional workshop for your college.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-emerald/10 border border-brand-emerald/30 p-8 rounded-2xl text-center flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-emerald/20 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="w-8 h-8 text-brand-emerald" />
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
                    <div className="space-y-2">
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
                          className="w-full bg-[#0A0D26]/60 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange focus:outline-none transition-all placeholder:text-slate-600"
                          placeholder="e.g. Dr. Ramesh Kumar"
                        />
                      </div>
                    </div>

                    {/* Designation */}
                    <div className="space-y-2">
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
                          className="w-full bg-[#0A0D26]/60 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange focus:outline-none transition-all placeholder:text-slate-600"
                          placeholder="e.g. Professor / Placement Officer"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* College/Institution Name */}
                    <div className="space-y-2">
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
                          className="w-full bg-[#0A0D26]/60 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange focus:outline-none transition-all placeholder:text-slate-600"
                          placeholder="e.g. Christ University, Bangalore"
                        />
                      </div>
                    </div>

                    {/* Preferred Month */}
                    <div className="space-y-2">
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
                          className="w-full bg-[#0A0D26]/60 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange focus:outline-none transition-all cursor-pointer placeholder:text-slate-600"
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
                    <div className="space-y-2">
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
                          className="w-full bg-[#0A0D26]/60 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange focus:outline-none transition-all placeholder:text-slate-600"
                          placeholder="e.g. name@institution.edu"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
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
                          className="w-full bg-[#0A0D26]/60 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange focus:outline-none transition-all placeholder:text-slate-600"
                          placeholder="e.g. +91 98765 43210"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
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
                        className="w-full bg-[#0A0D26]/60 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange focus:outline-none transition-all placeholder:text-slate-600"
                        placeholder="Please describe expected student strength, course focus (basics, options, or careers), etc..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4.5 bg-gradient-to-r from-brand-orange-grad-start to-brand-orange-grad-end text-white text-base font-bold uppercase tracking-wider rounded-xl border-0 shadow-lg shadow-orange-500/20 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 transition-opacity"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Send Collaboration Request'
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
