import React from 'react';
import { motion } from 'motion/react';
import { staggerContainer, fadeIn } from '@/lib/animations';
import {
  LineChart, Sparkles, Cpu, GraduationCap,
  UserCheck, Route, Users, Briefcase
} from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "Practical Market Learning",
      desc: "Learn through real market case studies, chart analysis, and research-based examples that bridge the gap between theory and practical application."
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Technical & Fundamental Analysis",
      desc: "Master price action, chart patterns, indicators, financial statements, valuation techniques, and stock selection methodologies."
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "AI-Powered Market Research",
      desc: "Discover how Artificial Intelligence can enhance stock screening, market research, data analysis, and investment decision-making."
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "NISM Certification Preparation",
      desc: "Comprehensive training for NISM Certification Examinations with structured guidance, concept clarity, and exam-oriented preparation."
    },
    {
      icon: <Route className="w-5 h-5" />,
      title: "Beginner to Advanced Curriculum",
      desc: "A step-by-step learning path designed to help beginners build strong fundamentals and progressively develop advanced market expertise."
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Industry-Experienced Faculty",
      desc: "Learn from experienced market professionals committed to delivering practical, research-driven financial education."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Online & Classroom Learning",
      desc: "Choose flexible learning options with interactive online sessions or classroom training designed to suit your schedule."
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Career & Professional Development",
      desc: "Prepare for professional careers in trading, advisory, investing, and wealth management."
    }
  ];

  const orderClasses = [
    'lg:order-1', // Step 1
    'lg:order-2', // Step 2
    'lg:order-3', // Step 3
    'lg:order-4', // Step 4
    'lg:order-8', // Step 5 (placed in Column 4 of Row 2)
    'lg:order-7', // Step 6 (placed in Column 3 of Row 2)
    'lg:order-6', // Step 7 (placed in Column 2 of Row 2)
    'lg:order-5'  // Step 8 (placed in Column 1 of Row 2)
  ];

  const getConnector = (idx: number) => {
    if (idx === 0 || idx === 1 || idx === 2) {
      // Horizontal connector pointing Right
      return (
        <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-[2px] bg-brand-primary/20 z-20 -translate-y-1/2 pointer-events-none">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(201,162,39,0.8)] animate-pulse" />
        </div>
      );
    }
    if (idx === 3) {
      // Vertical connector pointing Down
      return (
        <div className="hidden lg:block absolute left-1/2 bottom-[-48px] w-[2px] h-12 bg-brand-primary/20 z-20 -translate-x-1/2 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(201,162,39,0.8)] animate-pulse" />
        </div>
      );
    }
    if (idx === 4 || idx === 5 || idx === 6) {
      // Horizontal connector pointing Left
      return (
        <div className="hidden lg:block absolute top-1/2 -left-8 w-8 h-[2px] bg-brand-primary/20 z-20 -translate-y-1/2 pointer-events-none">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(201,162,39,0.8)] animate-pulse" />
        </div>
      );
    }
    return null;
  };

  return (
    <section id="why-choose-us" className="relative py-24 md:py-32 bg-slate-50 px-5 sm:px-6 md:px-12 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Header Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200 pb-8"
        >
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 border border-slate-300 text-slate-500 font-mono text-xs tracking-widest uppercase mb-6 bg-white">
              ADVANTAGES
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-navy tracking-tight leading-tight text-balance">
              Why Choose <br className="hidden md:block" />
              <span className="text-brand-primary italic">Ashwini Trading Academy?</span>
            </h2>
          </div>
          <p className="text-slate-600 text-base md:text-lg font-light max-w-lg leading-relaxed text-pretty">
            Learn the skills that matter in today's financial markets. Master Technical Analysis, Fundamental Analysis, Futures & Options, risk management, and stock selection through both manual research and AI-powered analysis. Our structured approach helps you build the knowledge and confidence to analyse the markets independently and make informed investment decisions.
          </p>
        </motion.div>

        {/* 8-Card Grid Layout (Flowchart S-Curve) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
        >
          {points.map((item, idx) => {
            const connector = getConnector(idx);
            const orderClass = orderClasses[idx];
            return (
              <motion.div
                key={idx}
                variants={fadeIn}
                className={`${orderClass} group bg-white border border-slate-200 rounded-[24px] p-8 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_-12px_rgba(15,23,42,0.1)] hover:border-brand-primary/40 transition-[border-color,box-shadow,transform] duration-300 flex flex-col h-full relative`}
              >
                {connector}
                
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <span className="text-xs font-mono text-brand-primary font-bold tracking-wider tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-[color,background-color] duration-300">
                    <div className="w-5 h-5 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="font-serif text-2xl font-medium text-brand-navy mb-4 group-hover:text-brand-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed font-light text-pretty">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
