import React from 'react';
import { BookOpen, TrendingUp, ShieldCheck, FileText, Briefcase, Cpu, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer, scaleUp } from '@/lib/animations';

export default function Achieve90Days() {
  const achievements = [
    {
      num: "01",
      title: "Understand Stock Market Fundamentals",
      desc: "Learn how stock markets work, how companies create value, and how investors build wealth from the ground up.",
      icon: BookOpen,
      accentColor: "text-brand-cyan",
      glowColor: "bg-brand-cyan/10"
    },
    {
      num: "02",
      title: "Read Charts Like a Professional",
      desc: "Identify trends, support, resistance levels, breakouts, and learn to gauge real-time market momentum.",
      icon: TrendingUp,
      accentColor: "text-brand-orange",
      glowColor: "bg-brand-orange/10"
    },
    {
      num: "03",
      title: "Learn Risk Management",
      desc: "Protect your capital using proven money management techniques, strict position sizing, and stop-loss execution.",
      icon: ShieldCheck,
      accentColor: "text-brand-cyan",
      glowColor: "bg-brand-cyan/10"
    },
    {
      num: "04",
      title: "Build Your Own Trading & Investment Plan",
      desc: "Create a structured, rule-based approach tailored to your specific financial goals and risk tolerance profile.",
      icon: FileText,
      accentColor: "text-brand-orange",
      glowColor: "bg-brand-orange/10"
    },
    {
      num: "05",
      title: "Understand Mutual Funds & Portfolio Building",
      desc: "Learn the mechanics of diversification, SIPs, tactical asset allocation, and long-term compounding wealth creation.",
      icon: Briefcase,
      accentColor: "text-brand-cyan",
      glowColor: "bg-brand-cyan/10"
    },
    {
      num: "06",
      title: "Use AI for Market Research",
      desc: "Leverage modern AI tools and automated screening systems to analyze companies, sectors, and market trends faster.",
      icon: Cpu,
      accentColor: "text-brand-orange",
      glowColor: "bg-brand-orange/10"
    }
  ];

  return (
    <section id="achievements" className="relative bg-brand-bg-dark py-24 md:py-32 px-5 sm:px-6 md:px-12 overflow-hidden border-b border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-brand-glow/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-brand-glow/20 rounded-full blur-[130px] pointer-events-none" />

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
            What You Will <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-cyan">Achieve in 90 Days</span>
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
                className="relative rounded-3xl p-8 bg-brand-bg-card/40 border border-white/5 backdrop-blur-xl flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-orange/30 hover:shadow-[0_12px_40px_-15px_rgba(0,0,0,0.6)]"
              >
                {/* Background glow circle */}
                <div className={`absolute top-6 right-6 w-24 h-24 rounded-full ${item.glowColor} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="h-full flex flex-col justify-between relative z-10">
                  <div>
                    {/* Number & Icon Header */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-3xl font-black text-white/15 group-hover:text-brand-orange/80 transition-colors duration-300 tracking-tighter select-none font-mono">
                        {item.num}
                      </span>
                      <div className={`p-3 rounded-2xl bg-white/5 ${item.accentColor} transition-transform duration-500 group-hover:scale-110`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-xl font-extrabold text-white mb-4 tracking-tight leading-snug group-hover:text-brand-orange transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm sm:text-[15px] font-semibold leading-relaxed mt-2">
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
