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
          className="mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200 pb-8"
        >
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 border border-slate-300 text-slate-500 font-mono text-xs tracking-widest uppercase mb-6 bg-white">
              90-Day Journey
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-navy tracking-tight leading-tight text-balance">
              What You Will <span className="text-brand-primary italic">Achieve</span>
            </h2>
          </div>
          <p className="text-slate-600 text-base md:text-lg font-light max-w-md leading-relaxed text-pretty">
            From absolute beginner to a disciplined, structured market participant. Here is your roadmap to trading confidence.
          </p>
        </motion.div>

        {/* Achievements Timeline Graph */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Path line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-primary/10 via-brand-primary/60 to-brand-primary/10 -translate-x-1/2 z-0" />
          
          <div className="space-y-12 md:space-y-16 relative z-10">
            {achievements.map((item, idx) => {
              const IconComponent = item.icon;
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.05 }}
                  variants={fadeIn}
                  className={`group relative flex flex-col md:flex-row items-center justify-between ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Card Container Column */}
                  <div className="w-full md:w-[calc(50%-48px)] pl-16 md:pl-0">
                    <div className="group/card p-8 bg-white border border-slate-200 rounded-[24px] shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_40px_-16px_rgba(15,23,42,0.12)] hover:border-brand-primary/40 transition-[border-color,box-shadow,transform] duration-300 relative">
                      {/* Horizontal Connector Line (Desktop Only) */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 h-[2px] bg-brand-primary/20 group-hover:bg-brand-primary/60 transition-colors duration-300 ${
                        isLeft ? '-right-12' : '-left-12'
                      }`} />

                      {/* Large Background Number (concentric alignment check) */}
                      <div className="absolute -top-3 right-6 text-7xl font-serif font-black text-slate-50 select-none pointer-events-none group-hover:text-brand-primary/5 transition-colors duration-300 tabular-nums">
                        {item.num}
                      </div>

                      <div className="relative z-10">
                        <span className="text-brand-primary font-mono text-xs uppercase tracking-widest mb-2 block tabular-nums">
                          Step {item.num}
                        </span>
                        <h3 className="font-serif text-2xl font-medium text-brand-navy mb-3 group-hover/card:text-brand-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-[15px] leading-relaxed font-light text-pretty">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Circle Node Icon */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-brand-navy border-2 border-brand-primary flex items-center justify-center shadow-md group-hover:bg-brand-primary group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(201,162,39,0.35)] transition-[background-color,transform,box-shadow] duration-300">
                      <IconComponent className="w-5 h-5 text-brand-primary group-hover:text-brand-navy transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Empty space filler for opposite side (Desktop Only) */}
                  <div className="hidden md:block w-[calc(50%-48px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
