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
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-navy tracking-tight leading-tight">
              Why Choose <br className="hidden md:block" />
              <span className="text-brand-primary italic">Ashwini Trading Academy?</span>
            </h2>
          </div>
          <p className="text-slate-600 text-base md:text-lg font-light max-w-lg leading-relaxed">
            Learn the skills that matter in today's financial markets. Master Technical Analysis, Fundamental Analysis, Futures & Options, risk management, and stock selection through both manual research and AI-powered analysis. Our structured approach helps you build the knowledge and confidence to analyse the markets independently and make informed investment decisions.
          </p>
        </motion.div>

        {/* 8-Card Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {points.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              className="group p-8 rounded-2xl border border-slate-200/60 bg-white hover:border-brand-primary/30 surface-card-light transition-all duration-500 hover:-translate-y-1 hover:shadow-lg flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono text-slate-400 tracking-wider group-hover:text-brand-primary transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors">
                  <div className="text-slate-600 group-hover:text-brand-primary transition-colors">
                    {item.icon}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl font-medium text-brand-navy mb-3 group-hover:text-brand-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-[14px] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
