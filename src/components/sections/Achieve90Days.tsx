import React from 'react';
import { BookOpen, TrendingUp, ShieldCheck, FileText, Briefcase, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';

export default function Achieve90Days() {
  const achievements = [
    {
      num: "01",
      title: "Market Fundamentals",
      desc: "Learn how stock markets work, how companies create value, and how investors build wealth from the ground up.",
      icon: BookOpen
    },
    {
      num: "02",
      title: "Chart Reading",
      desc: "Identify trends, support, resistance levels, breakouts, and learn to gauge real-time market momentum.",
      icon: TrendingUp
    },
    {
      num: "03",
      title: "Risk Management",
      desc: "Protect your capital using proven money management techniques, strict position sizing, and stop-loss execution.",
      icon: ShieldCheck
    },
    {
      num: "04",
      title: "Trading Plan",
      desc: "Create a structured, rule-based approach tailored to your specific financial goals and risk tolerance profile.",
      icon: FileText
    },
    {
      num: "05",
      title: "Portfolio Building",
      desc: "Learn the mechanics of diversification, SIPs, tactical asset allocation, and long-term compounding wealth creation.",
      icon: Briefcase
    },
    {
      num: "06",
      title: "AI Research",
      desc: "Leverage modern AI tools and automated screening systems to analyze companies, sectors, and market trends faster.",
      icon: Cpu
    }
  ];

  return (
    <section id="achievements" className="relative bg-white py-24 md:py-32 px-5 sm:px-6 md:px-12 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200 pb-8"
        >
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 border border-slate-300 text-slate-500 font-mono text-xs tracking-widest uppercase mb-6">
              90-Day Journey
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-navy tracking-tight leading-tight">
              What You Will <span className="text-brand-primary italic">Achieve</span>
            </h2>
          </div>
          <p className="text-slate-600 text-base md:text-lg font-light max-w-md leading-relaxed">
            From absolute beginner to a disciplined, structured market participant. Here is your roadmap to trading confidence.
          </p>
        </motion.div>

        {/* Achievements Grid (Tabular) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {achievements.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="group flex flex-col pt-4 relative transition-all duration-500"
              >
                {/* Large Background Number */}
                <div className="absolute -top-6 -left-4 text-8xl font-serif font-black text-slate-100 group-hover:text-brand-primary/10 transition-colors z-0 select-none pointer-events-none">
                  {item.num}
                </div>

                <div className="relative z-10 flex flex-col h-full pl-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-brand-navy text-white group-hover:bg-brand-primary transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h3 className="font-serif text-2xl font-medium text-brand-navy mb-3 group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-[15px] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
