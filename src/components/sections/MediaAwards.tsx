import React from 'react';
import { Award, Trophy, TrendingUp, Users, Tv, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer, scaleUp } from '@/lib/animations';

export default function MediaAwards() {
  const items = [
    {
      title: "Financial Awareness Programs",
      desc: "Featured in major financial awareness programs and public literacy campaigns spreading structured trading knowledge.",
      icon: Tv,
      color: "text-brand-cyan",
      bgGlow: "bg-brand-cyan/10",
      border: "border-brand-cyan/20",
      span: "lg:col-span-4"
    },
    {
      title: "Industry Recognition",
      desc: "Commended by industry leaders and networks for delivering outstanding training quality, options strategies, and risk management pedagogy.",
      icon: Award,
      color: "text-brand-orange",
      bgGlow: "bg-brand-orange/10",
      border: "border-brand-orange/20",
      span: "lg:col-span-8"
    },
    {
      title: "Educational Workshops",
      desc: "Over 100+ high-impact stock market seminars and interactive workshops conducted across leading colleges, institutions, and corporate teams.",
      icon: Users,
      color: "text-brand-cyan",
      bgGlow: "bg-brand-cyan/10",
      border: "border-brand-cyan/20",
      span: "lg:col-span-8"
    },
    {
      title: "Investor Awareness Initiatives",
      desc: "Dedicated to educating retail investors on market realities, systematic investment planning, and protecting capital from high-risk exposure.",
      icon: TrendingUp,
      color: "text-brand-orange",
      bgGlow: "bg-brand-orange/10",
      border: "border-brand-orange/20",
      span: "lg:col-span-4"
    }
  ];

  return (
    <section id="media-awards" className="relative bg-brand-bg-dark py-24 md:py-32 px-5 sm:px-6 md:px-12 overflow-hidden border-b border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] bg-brand-glow/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10%] w-[600px] h-[600px] bg-brand-glow/20 rounded-full blur-[140px] pointer-events-none" />

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
            <Sparkles className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
            Media & Awards
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Recognized for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-cyan">Financial Education Excellence</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {items.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div 
                key={idx}
                variants={scaleUp}
                className={`${item.span} relative rounded-3xl p-6 sm:p-8 bg-brand-bg-card/40 border ${item.border} backdrop-blur-xl flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1 hover:bg-brand-bg-card/60 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]`}
              >
                {/* Background Glow */}
                <div className={`absolute top-4 right-4 w-24 h-24 rounded-full ${item.bgGlow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  <div className={`p-4 rounded-2xl bg-white/5 ${item.color} w-fit mb-6 transition-transform duration-500 group-hover:scale-110`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 tracking-tight group-hover:text-brand-orange transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base font-semibold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Full Width Alumni Achievement Banner Card */}
          <motion.div 
            variants={scaleUp}
            className="lg:col-span-12 relative rounded-3xl p-8 bg-gradient-to-r from-brand-bg-card via-brand-bg-deep to-brand-bg-card border border-brand-orange/20 overflow-hidden group transition-all duration-500 hover:border-brand-orange/40 hover:shadow-[0_12px_40px_rgba(249,115,22,0.1)] flex flex-col md:flex-row items-center justify-between gap-8"
          >
            {/* Ambient gold glow */}
            <div className="absolute inset-0 bg-radial-gradient from-brand-orange/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left relative z-10">
              <div className="p-5 rounded-2xl bg-brand-orange/10 text-brand-orange shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                <Trophy className="w-10 h-10 animate-bounce-slow" />
              </div>
              <div className="max-w-2xl">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
                  Student Achievement Awards
                </h3>
                <p className="text-slate-300 text-sm sm:text-base font-semibold leading-relaxed">
                  Celebrating the milestones, trading consistency, and career success of our outstanding academy graduates. We actively support and reward disciplined execution and consistent performance.
                </p>
              </div>
            </div>

            <div className="shrink-0 relative z-10 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-md text-center">
              <div className="text-brand-orange text-3xl font-black mb-1">100%</div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">Practical Pedagogy</div>
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Tagline Banner */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16 sm:mt-20 relative rounded-2xl p-6 bg-gradient-to-r from-brand-orange/10 to-brand-cyan/10 border border-white/5 backdrop-blur-xl text-center shadow-lg"
        >
          <p className="text-slate-200 text-lg sm:text-xl font-bold tracking-wide italic">
            "Building a financially aware and educated investment community."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
