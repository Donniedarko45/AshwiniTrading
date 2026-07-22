import React, { useState } from 'react';
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
  X,
  ChevronDown,
  Landmark,
  Briefcase,
  Users,
  Layout,
  Video
} from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/animations';

const partnerUsPoints = [
  'Build Financial Literacy among employees or students',
  'Introduce Stock Market Fundamentals step-by-step',
  'Develop Investment Awareness & risk concepts',
  'Enhance Analytical Thinking using live chart examples',
  'Improve Financial Decision-Making & budgeting principles',
  'Promote Responsible Investing & corporate ethics',
  'Introduce AI in Finance & advanced modern tools',
  'Bridge the Gap Between Theory and Practical application'
];

const whoCanPartner = [
  'Corporates & Startups',
  'MSMEs & Businesses',
  'Colleges & Universities',
  'Engineering & Management Institutions',
  'Commerce Colleges & Schools',
  'Professional Associations & Institutes'
];

const programs = [
  { 
    title: 'Stock Market Foundation Program', 
    desc: 'Introduce participants to the fundamentals of financial markets, investing, and wealth creation.', 
    icon: Landmark 
  },
  { 
    title: 'Technical Analysis Training', 
    desc: 'Learn chart reading, candlestick analysis, trends, support & resistance, and market analysis techniques.', 
    icon: TrendingUp 
  },
  { 
    title: 'Fundamental Analysis Training', 
    desc: 'Understand financial statements, business analysis, company valuation, and investment research.', 
    icon: BookOpen 
  },
  { 
    title: 'Futures & Options Awareness', 
    desc: 'Learn the fundamentals of derivatives, option chains, open interest, and risk management.', 
    icon: Layout 
  },
  { 
    title: 'AI for Financial Markets', 
    desc: 'Discover how Artificial Intelligence can improve market research, productivity, and financial analysis.', 
    icon: Sparkles 
  },
  { 
    title: 'Financial Literacy Workshops', 
    desc: 'Interactive workshops focused on budgeting, saving, investing, wealth creation, and financial planning.', 
    icon: Award 
  }
];

const trainingModes = [
  {
    title: 'Online Training',
    desc: 'Interactive live sessions conducted through virtual platforms.',
    icon: Video
  },
  {
    title: 'Offline Classroom Training',
    desc: 'Instructor-led sessions conducted at your campus or our training center.',
    icon: Building
  },
  {
    title: 'Hybrid Learning',
    desc: 'A combination of classroom training and online learning for maximum flexibility.',
    icon: GraduationCap
  }
];

const programHighlights = [
  'Customized Curriculum',
  'Industry-Relevant Content',
  'Interactive Sessions',
  'Practical Learning',
  'Live Market Demonstrations',
  'AI-Powered Learning',
  'Case Studies & Activities',
  'Q&A & Support',
  'Digital Learning Resources',
  'Course Completion Certificates'
];

const whyFinancialEdMatters = [
  'Understand financial markets comprehensively',
  'Build responsible financial habits',
  'Develop analytical thinking',
  'Improve investment awareness',
  'Enhance career readiness in finance'
];

const trainingSteps = [
  { num: 'Step 1', title: 'Understand Goals', desc: "Understand your organization's learning objectives." },
  { num: 'Step 2', title: 'Curriculum Design', desc: 'Design a customized training curriculum.' },
  { num: 'Step 3', title: 'Schedule Setup', desc: 'Schedule sessions based on your preferred format.' },
  { num: 'Step 4', title: 'Interactive Delivery', desc: 'Deliver engaging and interactive training.' },
  { num: 'Step 5', title: 'Assessments', desc: 'Conduct assessments and practical activities.' },
  { num: 'Step 6', title: 'Certification', desc: 'Provide certificates upon successful completion.' }
];

const whyChooseUsOrgs = [
  'Experienced Trainers',
  'Practical Learning Approach',
  'Industry-Focused Curriculum',
  'Flexible Delivery Modes',
  'Customized Programs',
  'Interactive Teaching Methodology',
  'Continuous Learning Support',
  'Professional Learning Experience'
];

const corporateFAQs = [
  {
    question: 'Can the training program be customized?',
    answer: 'Yes. We customize our training programs based on your organization\'s objectives, audience, and learning requirements.'
  },
  {
    question: 'Do you conduct training at our location?',
    answer: 'Yes. Subject to mutual agreement, we can conduct training sessions at your campus, office, or our training center.'
  },
  {
    question: 'Are online training sessions available?',
    answer: 'Yes. We offer Online, Offline, and Hybrid learning options.'
  },
  {
    question: 'Will participants receive certificates?',
    answer: 'Yes. Participants will receive a Course Completion Certificate from Ashwini Trading Academy after successfully completing the training program.'
  }
];

export default function CollegeCollaboration() {
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
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formState.fullName,
          phone: formState.phone,
          email: formState.email,
          city: formState.collegeName, // Maps to college/organization name
          interestedCourse: 'Corporate & College Training',
          learningMode: formState.preferredMonth,
          message: `Designation: ${formState.designation}. Message: ${formState.message}`
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit enquiry.');
      }

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
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-brand-navy pt-28 pb-20 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        
        {/* Hero Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-brand-primary uppercase bg-brand-primary/10 border border-brand-primary/20 px-4 py-2 rounded-full inline-block mb-6">
            Corporate & College Training
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-6 leading-tight text-brand-navy text-balance">
            Empower Your Workforce and Students with <span className="text-brand-primary italic">Financial Market Education</span>
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Customized Stock Market & Financial Literacy Programs for Corporates, Colleges, Universities, and Educational Institutions. BRIDGE THE GAP BETWEEN THEORY AND PRACTICE.
          </p>
        </motion.div>

        {/* Why Choose ATA (Why Partner With Us) */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-8 text-center">
            Why Choose Ashwini Trading Academy?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {partnerUsPoints.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-primary/15 text-brand-primary flex items-center justify-center font-bold text-xs mt-0.5">
                  ✓
                </span>
                <span className="text-slate-700 font-semibold text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Programs Offered */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-3">Training Programs We Offer</h2>
            <p className="text-slate-500 text-sm">We provide customized financial programs designed to align with your institution's specific objectives.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col hover:border-brand-primary/45 transition-colors shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-brand-navy text-base mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Who Can Partner With Us */}
        <div className="bg-brand-navy text-white rounded-[32px] p-8 sm:p-12 border border-white/10 mb-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-primary/15 blur-[100px] rounded-full pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 text-center relative z-10 text-brand-primary">Who Can Partner With Us?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto relative z-10">
            {whoCanPartner.map((partner, idx) => (
              <div key={idx} className="bg-white/5 border border-white/15 rounded-xl p-5 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-primary shrink-0" />
                <span className="text-slate-200 font-semibold text-sm">{partner}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Training Modes Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-3">Flexible Training Modes</h2>
            <p className="text-slate-500 text-sm">We offer multiple formats to accommodate your organization's scheduling requirements.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {trainingModes.map((mode, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col items-center text-center shadow-sm">
                <span className="text-3xl mb-4">
                  {idx === 0 ? '💻' : idx === 1 ? '🏫' : '🔄'}
                </span>
                <h3 className="font-extrabold text-brand-navy text-base mb-2">{mode.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">{mode.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Program Highlights */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-8 text-center">Program Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {programHighlights.map((highlight, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-center flex flex-col justify-center items-center hover:border-brand-primary/30 transition-colors">
                <span className="text-brand-primary text-xs font-bold uppercase tracking-wider mb-2">⭐</span>
                <span className="text-slate-700 font-bold text-xs">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Financial Education Matters */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-6 text-center">Why Financial Education Matters</h2>
          <p className="text-slate-500 text-sm text-center max-w-2xl mx-auto mb-8">Financial literacy empowers individuals to make informed decisions about saving, investing, budgeting, and long-term wealth creation.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {whyFinancialEdMatters.map((matter, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-center flex flex-col justify-between h-full">
                <span className="text-brand-primary text-xl font-bold mb-3">✓</span>
                <span className="text-slate-800 font-bold text-xs leading-snug">{matter}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Training Process */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-8 text-center">Our Training Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {trainingSteps.map((step, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 relative overflow-hidden flex flex-col justify-between h-full">
                <span className="absolute top-[-10px] right-0 text-5xl font-extrabold opacity-[0.05] text-brand-navy select-none">{idx+1}</span>
                <span className="text-brand-primary font-mono text-[10px] font-bold uppercase tracking-wider mb-3">{step.num}</span>
                <div>
                  <h4 className="font-extrabold text-brand-navy text-xs sm:text-sm mb-1.5">{step.title}</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-semibold">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Organizations Choose Us */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-8 text-center">Why Organizations Choose Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChooseUsOrgs.map((choose, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand-primary rounded-full shrink-0" />
                <span className="text-slate-800 font-bold text-xs">{choose}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto mb-16 text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {corporateFAQs.map((faq, idx) => {
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

        {/* Inquiry Form Section */}
        <section id="inquiry-form" className="py-12 bg-brand-navy text-white rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="p-8 relative">
              <div className="mb-12 text-center">
                <div className="text-brand-primary font-mono text-xs uppercase tracking-widest mb-4">Request Proposal</div>
                <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-6">Partner With Ashwini Trading Academy</h2>
                <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-sm">
                  Let's work together to build a financially aware and market-ready generation through structured, practical, and engaging learning experiences. Invite us to your campus or schedule a consultation.
                </p>
              </div>

              {isSubmitted ? (
                <div className="border border-brand-primary p-8 text-center bg-brand-primary/5 rounded-2xl">
                  <CheckCircle2 className="w-12 h-12 text-brand-primary mx-auto mb-6" />
                  <h3 className="font-serif text-3xl font-medium mb-4">Proposal Request Received</h3>
                  <p className="text-white/70 mb-8">Our training coordinator will contact you shortly with a customized proposal.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-white text-brand-navy font-mono text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer border-0 rounded-xl"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-white/50 uppercase tracking-widest mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formState.fullName}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors font-mono text-sm rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/50 uppercase tracking-widest mb-2">Designation / Role *</label>
                      <input
                        type="text"
                        name="designation"
                        required
                        value={formState.designation}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors font-mono text-sm rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-white/50 uppercase tracking-widest mb-2">Institution / Corporate Name *</label>
                      <input
                        type="text"
                        name="collegeName"
                        required
                        value={formState.collegeName}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors font-mono text-sm rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/50 uppercase tracking-widest mb-2">Preferred Timeline *</label>
                      <select
                        name="preferredMonth"
                        required
                        value={formState.preferredMonth}
                        onChange={handleInputChange}
                        className="w-full bg-brand-navy border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors font-mono text-sm appearance-none cursor-pointer rounded-xl"
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
                      <label className="block text-xs font-mono text-white/50 uppercase tracking-widest mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors font-mono text-sm rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/50 uppercase tracking-widest mb-2">Contact Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formState.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors font-mono text-sm rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/50 uppercase tracking-widest mb-2">Requirements / Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors font-mono text-sm rounded-xl"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-cta-gold text-brand-navy font-bold uppercase tracking-widest text-sm hover:brightness-110 shadow-brand-gold transition-colors disabled:opacity-50 cursor-pointer border-0 rounded-xl"
                  >
                    {isSubmitting ? "Processing..." : "🟢 Request a Corporate Proposal"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
