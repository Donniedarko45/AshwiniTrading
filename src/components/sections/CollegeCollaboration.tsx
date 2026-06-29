import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Sparkles, 
  Award, 
  TrendingUp, 
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
  Star,
  Check,
  Target,
  Layers,
  Landmark
} from 'lucide-react';
import { 
  collaborationHighlights, 
  collaborationReviews, 
  collaborationGallery, 
  founderQuote 
} from '@/data/collaborations';
import { fadeIn, staggerContainer } from '@/lib/animations';

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

  const programs = [
    { title: 'Guest Lectures', desc: 'Industry-focused sessions designed to introduce students to the world of finance, investing, and capital markets.', icon: BookOpen },
    { title: 'Financial Literacy Workshops', desc: 'Interactive workshops that help students understand personal finance, wealth creation, budgeting, and investing.', icon: Landmark },
    { title: 'Stock Market Awareness Programs', desc: 'Practical sessions covering stock markets, investing principles, and market functioning.', icon: TrendingUp },
    { title: 'Career Guidance Sessions', desc: 'Helping students understand various career paths available in the financial services sector.', icon: GraduationCap },
    { title: 'NISM Certification Awareness Programs', desc: 'Guidance on industry-recognized certifications that can strengthen students\' professional profiles.', icon: Award },
    { title: 'Skill Development Seminars', desc: 'Programs focused on practical financial skills, analytical thinking, and market understanding.', icon: Sparkles }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white pt-32 pb-20 relative border-b border-white/10">
        <div className="absolute inset-0 border-b border-white/10 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          
          <div className="mb-12">
            <a href="/">
              <motion.button
                whileHover={{ x: -4 }}
                className="inline-flex items-center gap-2 text-white/70 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </motion.button>
            </a>
          </div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeIn} className="mb-8 inline-block">
               <div className="px-4 py-2 border border-white/20 text-xs font-mono tracking-widest text-white/70 uppercase">
                 Campus Collaboration
               </div>
            </motion.div>

            <motion.h1 
              variants={fadeIn}
              className="font-serif text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight mb-8"
            >
              Partner With Us to Empower <br />
              <span className="text-brand-primary italic">Future Finance Professionals</span>
            </motion.h1>

            <motion.p 
              variants={fadeIn}
              className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12"
            >
              Bridging the gap between academic learning and industry skills. Let's work together to prepare students for the opportunities of tomorrow.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <a href="#inquiry-form" className="inline-block">
                <button className="px-8 py-4 bg-brand-primary text-brand-navy font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors cursor-pointer">
                  Collaborate Now
                </button>
              </a>
              <a href="tel:+919845961990" className="inline-block">
                <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-colors flex items-center gap-2 cursor-pointer">
                  <Phone className="w-4 h-4 text-brand-primary" />
                  Call Advisor
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 border-b border-slate-200 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <div className="text-brand-primary font-mono text-xs uppercase tracking-widest mb-4">Benefits</div>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-navy mb-6">
                Why College Collaborations Matter
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The employment landscape is evolving rapidly, and employers increasingly value practical skills alongside academic achievements. Our programs help students bridge that gap.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
                {[
                  'Develop financial literacy and investment awareness',
                  'Understand real-world financial markets',
                  'Explore career opportunities in the financial services industry',
                  'Gain exposure to industry-relevant certifications',
                  'Build analytical and decision-making skills',
                  'Enhance employability through practical knowledge',
                  'Learn skills that complement their academic education'
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 flex items-start gap-4 hover:bg-slate-50 transition-colors">
                    <Check className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <p className="font-medium text-slate-800 leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-24 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-brand-primary font-mono text-xs uppercase tracking-widest mb-4">Our Programs</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-navy">Programs We Offer for Colleges</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {programs.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <div key={idx} className="bg-white p-10 flex flex-col hover:bg-slate-50 transition-colors">
                  <Icon className="w-8 h-8 text-brand-primary mb-6" />
                  <h3 className="text-xl font-bold text-brand-navy mb-4 tracking-tight">{prog.title}</h3>
                  <p className="text-slate-600 leading-relaxed flex-1">{prog.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Split Grid */}
      <section className="py-24 border-b border-slate-200 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {/* Students */}
            <div className="bg-white p-10 lg:p-16">
              <h3 className="font-serif text-3xl font-medium text-brand-navy mb-8 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-brand-primary" />
                Benefits for Students
              </h3>
              <div className="space-y-4">
                {[
                  'Industry-Relevant Knowledge',
                  'Financial Awareness',
                  'Career Exposure',
                  'Analytical Skills',
                  'Certification Guidance',
                  'Networking Opportunities',
                  'Enhanced Employability'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-brand-primary rounded-none" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Institutions */}
            <div className="bg-white p-10 lg:p-16">
              <h3 className="font-serif text-3xl font-medium text-brand-navy mb-8 flex items-center gap-3">
                <Building className="w-8 h-8 text-brand-primary" />
                For Institutions
              </h3>
              <div className="space-y-4">
                {[
                  'Industry Exposure',
                  'Value-Added Learning Opportunities',
                  'Skill Development Initiatives',
                  'Career-Oriented Financial Education',
                  'Expert Sessions by Industry Professionals',
                  'Enhanced Student Engagement',
                  'Stronger Industry-Academia Connect'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-brand-navy rounded-none" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-navy mb-4">Workshops in Action</h2>
            <p className="text-slate-600 max-w-2xl text-lg">
              A glimpse into our trading seminars conducted in packed auditoriums.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {collaborationGallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group cursor-pointer border border-slate-200 bg-slate-50 relative aspect-[3/2] overflow-hidden"
              >
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <p className="text-white text-sm font-mono tracking-wide">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 border-b border-slate-200 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-navy mb-4">
              What Students & Admin Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {collaborationReviews.map((review, idx) => (
              <div key={idx} className="bg-white p-10 flex flex-col">
                <div className="flex gap-1 mb-6 text-brand-primary">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 italic leading-relaxed mb-8 flex-1">
                  "{review.reviewText}"
                </p>
                <div className="border-t border-slate-100 pt-6">
                  <h4 className="font-bold text-brand-navy uppercase tracking-wider text-sm mb-1">{review.name}</h4>
                  <p className="text-xs font-mono text-slate-500 uppercase">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="inquiry-form" className="py-24 bg-brand-navy text-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="border border-white/20 p-8 md:p-16 relative">
            <div className="absolute top-0 right-0 p-6 flex gap-2">
              <div className="w-1.5 h-1.5 bg-brand-primary rounded-none" />
              <div className="w-1.5 h-1.5 bg-white/20 rounded-none" />
              <div className="w-1.5 h-1.5 bg-white/20 rounded-none" />
            </div>

            <div className="mb-12">
              <div className="text-brand-primary font-mono text-xs uppercase tracking-widest mb-4">Campus Invitation</div>
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">Invite Us to Your Campus</h2>
              <p className="text-white/70 max-w-2xl leading-relaxed">
                We welcome opportunities to collaborate with colleges, universities, and student development cells to help students gain practical financial knowledge.
              </p>
            </div>

            {isSubmitted ? (
              <div className="border border-brand-primary p-8 text-center bg-brand-primary/5">
                <CheckCircle2 className="w-12 h-12 text-brand-primary mx-auto mb-6" />
                <h3 className="font-serif text-3xl font-medium mb-4">Request Received</h3>
                <p className="text-white/70 mb-8">An advisor will review your details and connect within 24 hours.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 border border-white/20 hover:bg-white/5 font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-white/50 uppercase tracking-widest mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formState.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-white/50 uppercase tracking-widest mb-2">Designation / Role</label>
                    <input
                      type="text"
                      name="designation"
                      required
                      value={formState.designation}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors font-mono text-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-white/50 uppercase tracking-widest mb-2">Institution Name</label>
                    <input
                      type="text"
                      name="collegeName"
                      required
                      value={formState.collegeName}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-white/50 uppercase tracking-widest mb-2">Preferred Timeline</label>
                    <select
                      name="preferredMonth"
                      required
                      value={formState.preferredMonth}
                      onChange={handleInputChange}
                      className="w-full bg-brand-navy border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors font-mono text-sm appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select Timeline</option>
                      <option value="immediate">Immediate</option>
                      <option value="next_month">Next Month</option>
                      <option value="next_semester">Next Semester</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-white/50 uppercase tracking-widest mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-white/50 uppercase tracking-widest mb-2">Contact Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors font-mono text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/50 uppercase tracking-widest mb-2">Requirements</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors font-mono text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand-primary text-brand-navy font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? "Processing..." : "Submit Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-navy flex flex-col items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-4 text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
              <div className="relative w-full h-[60vh] flex items-center justify-center border border-white/10 bg-brand-navy">
                <img 
                  src={collaborationGallery[lightboxIndex].url} 
                  alt={collaborationGallery[lightboxIndex].caption} 
                  className="max-w-full max-h-full object-contain grayscale"
                />
                <button 
                  onClick={prevImage}
                  className="absolute left-4 p-4 text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 p-4 text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>
              <div className="text-center mt-8">
                <p className="text-white font-mono text-sm tracking-wide">
                  {collaborationGallery[lightboxIndex].caption}
                </p>
                <div className="mt-4 w-8 h-px bg-brand-primary mx-auto" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
