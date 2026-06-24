import React from 'react';
import { BookOpen, TrendingUp, ShieldCheck, FileText, Briefcase, Cpu, CheckCircle2, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer, scaleUp } from '@/lib/animations';

export default function Achieve90Days() {
  const achievements = [
    {
      title: "Understand Stock Market Fundamentals",
      desc: "Learn how stock markets work, how companies create value, and how investors build wealth from the ground up.",
      icon: BookOpen,
      color: "text-blue-400",
      glow: "bg-blue-500/10",
      border: "border-blue-500/25 group-hover:border-blue-400/40"
    },
    {
      title: "Read Charts Like a Professional",
      desc: "Identify trends, support, resistance levels, breakouts, and learn to gauge real-time market momentum.",
      icon: TrendingUp,
      color: "text-purple-400",
      glow: "bg-purple-500/10",
      border: "border-brand-purple/25 group-hover:border-brand-purple/40"
    },
    {
      title: "Learn Risk Management",
      desc: "Protect your capital using proven money management techniques, strict position sizing, and stop-loss execution.",
      icon: ShieldCheck,
      color: "text-emerald-400",
      glow: "bg-emerald-500/10",
      border: "border-emerald-500/25 group-hover:border-emerald-400/40"
    },
    {
      title: "Build Your Own Trading & Investment Plan",
      desc: "Create a structured, rule-based approach tailored to your specific financial goals and risk tolerance profile.",
      icon: FileText,
      color: "text-brand-orange",
      glow: "bg-brand-orange/10",
      border: "border-brand-orange/25 group-hover:border-brand-orange/40"
    },
    {
      title: "Understand Mutual Funds & Portfolio Building",
      desc: "Learn the mechanics of diversification, SIPs, tactical asset allocation, and long-term compounding wealth creation.",
      icon: Briefcase,
      color: "text-pink-400",
      glow: "bg-pink-500/10",
      border: "border-pink-500/25 group-hover:border-pink-400/40"
    },
    {
      title: "Use AI for Market Research",
      desc: "Leverage modern AI tools and automated screening systems to analyze companies, sectors, and market trends faster.",
      icon: Cpu,
      color: "text-cyan-400",
      glow: "bg-cyan-500/10",
      border: "border-cyan-500/25 group-hover:border-cyan-400/40"
    }
  ];

  return (
    <section id="achievements" className="relative bg-[#0B0A11] py-24 md:py-32 px-5 sm:px-6 md:px-12 overflow-hidden border-b border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-brand-glow/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-indigo-950/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange font-extrabold text-xs tracking-widest uppercase mb-4">
            <Calendar className="w-3.5 h-3.5 text-brand-orange" />
            90-Day Journey
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            What You Will <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-purple to-brand-blue">Achieve in 90 Days</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-semibold max-w-2xl mx-auto leading-relaxed">
            From absolute beginner to a disciplined, structured market participant. Here is your roadmap to trading and investing confidence.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {achievements.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div 
                key={idx}
                variants={scaleUp}
                className={`relative rounded-3xl p-6 sm:p-8 bg-[#110B24]/40 border ${item.border} backdrop-blur-xl flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1.5 hover:bg-[#110B24]/60 hover:shadow-[0_12px_40px_-15px_rgba(0,0,0,0.6)]`}
              >
                {/* Background glow circle */}
                <div className={`absolute top-4 right-4 w-20 h-20 rounded-full ${item.glow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="h-full flex flex-col justify-between">
                  <div>
                    {/* Icon and check header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-5.5 h-5.5 text-emerald-400 shrink-0" strokeWidth={2.5} />
                        <span className="text-emerald-400 font-extrabold text-xs tracking-widest uppercase">Verified Goal</span>
                      </div>
                      <div className={`p-2.5 rounded-xl bg-white/5 ${item.color} transition-transform duration-500 group-hover:scale-110`}>
                        <IconComponent className="w-5.5 h-5.5" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-white mb-3 tracking-tight leading-snug group-hover:text-brand-orange transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm sm:text-[14.5px] font-semibold leading-relaxed mt-1">
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
