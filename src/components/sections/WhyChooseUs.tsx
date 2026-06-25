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
      desc: "Learn through live market examples instead of only theoretical concepts."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Updated 2026 Curriculum",
      desc: "Course content designed to reflect current market conditions and technologies."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-Integrated Learning",
      desc: "Understand how AI can enhance research, analysis, and decision-making."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Beginner-Friendly Approach",
      desc: "Simple teaching methods suitable for students, professionals, and homemakers."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Experienced Trainers",
      desc: "Learn from market participants with practical exposure."
    },
    {
      icon: <Route className="w-6 h-6" />,
      title: "Structured Learning Path",
      desc: "Step-by-step progression from basic concepts to advanced topics."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Support",
      desc: "Network and learn alongside fellow market enthusiasts."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Career Opportunities",
      desc: "Explore roles related to market research, investing, and financial services."
    }
  ];

  return (
    <section id="why-choose-us" className="relative py-24 md:py-32 bg-brand-bg-dark px-5 sm:px-6 md:px-12 overflow-hidden border-t border-white/5">
      {/* Subtle background decorative glows */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-brand-glow/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-brand-glow/5 rounded-full blur-[130px] pointer-events-none" />

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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Why Choose <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-white">
              Ashwini Trading Academy?
            </span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            We bridge the gap between financial theory and real-world execution through a practical, modern learning framework.
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
              className="relative overflow-hidden bg-brand-bg-card/40 backdrop-blur-md border border-white/5 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between hover:border-brand-primary/30 transition-all duration-300 group"
            >
              {/* Radial glow background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Watermark index number */}
              <div className="absolute top-4 right-6 text-slate-800/25 font-extrabold text-4xl group-hover:text-brand-primary/15 transition-colors duration-300 select-none">
                {String(idx + 1).padStart(2, '0')}
              </div>

              <div>
                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-secondary mb-6 group-hover:bg-brand-primary/10 group-hover:text-brand-primary group-hover:border-brand-primary/20 transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight group-hover:text-brand-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-[14px] leading-relaxed font-medium">
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
