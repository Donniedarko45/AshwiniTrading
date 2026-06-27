import React from 'react';
import { motion } from 'motion/react';
import { staggerContainer, scaleUp, fadeIn } from '@/lib/animations';
import { 
  LineChart, Sparkles, Cpu, GraduationCap, 
  UserCheck, Route, Users, Briefcase 
} from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Practical Market Learning",
      desc: "Learn through real market case studies, chart analysis, and research-based examples that bridge the gap between theory and practical application."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Technical & Fundamental Analysis",
      desc: "Master price action, chart patterns, indicators, financial statements, valuation techniques, and stock selection methodologies."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-Powered Market Research",
      desc: "Discover how Artificial Intelligence can enhance stock screening, market research, data analysis, and investment decision-making."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "NISM Certification Preparation",
      desc: "Comprehensive training for NISM Certification Examinations with structured guidance, concept clarity, and exam-oriented preparation."
    },
    {
      icon: <Route className="w-6 h-6" />,
      title: "Beginner to Advanced Curriculum",
      desc: "A step-by-step learning path designed to help beginners build strong fundamentals and progressively develop advanced market expertise."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Industry-Experienced Faculty",
      desc: "Learn from experienced market professionals committed to delivering practical, research-driven financial education."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Online & Classroom Learning",
      desc: "Choose flexible learning options with interactive online sessions or classroom training designed to suit your schedule."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Career & Professional Development",
      desc: "Prepare for professional careers in trading, advisory, investing, and wealth management."
    }
  ];

  return (
    <section id="why-choose-us" className="relative py-24 md:py-32 bg-brand-bg-deep px-5 sm:px-6 md:px-12 overflow-hidden border-t border-slate-200/80">
      {/* Subtle background decorative glows */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-widest uppercase mb-4">
            ADVANTAGES
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.1] mb-6">
            Why Choose <br className="sm:hidden" />
            <span className="text-brand-primary">
              Ashwini Trading Academy?
            </span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Learn the skills that matter in today's financial markets. Master Technical Analysis, Fundamental Analysis, Futures & Options, risk management, and stock selection through both manual research and AI-powered analysis. Our structured approach helps you build the knowledge and confidence to analyse the markets independently and make informed investment decisions.
          </p>
        </motion.div>

        {/* 8-Card Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {points.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={scaleUp}
              className="relative overflow-hidden bg-white border border-slate-200/80 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between hover:border-brand-primary/45 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              {/* Radial glow background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Watermark index number */}
              <div className="absolute top-4 right-6 text-slate-200/40 font-extrabold text-4xl group-hover:text-brand-primary/20 transition-colors duration-300 select-none">
                {String(idx + 1).padStart(2, '0')}
              </div>

              <div>
                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary/10 group-hover:text-brand-primary group-hover:border-brand-primary/20 transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-extrabold text-brand-navy mb-3 tracking-tight group-hover:text-brand-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
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
