import React from 'react';
import { Award, Trophy, TrendingUp, Users, Tv } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';

export default function MediaAwards() {
  const items = [
    {
      title: "Financial Awareness Programs",
      desc: "Featured in major financial awareness programs and public literacy campaigns spreading structured trading knowledge.",
      icon: Tv,
      span: "lg:col-span-4"
    },
    {
      title: "Industry Recognition",
      desc: "Commended by industry leaders and networks for delivering outstanding training quality, options strategies, and risk management pedagogy.",
      icon: Award,
      span: "lg:col-span-8"
    },
    {
      title: "Educational Workshops",
      desc: "Over 100+ high-impact stock market seminars and interactive workshops conducted across leading colleges, institutions, and corporate teams.",
      icon: Users,
      span: "lg:col-span-8"
    },
    {
      title: "Investor Awareness Initiatives",
      desc: "Dedicated to educating retail investors on market realities, systematic investment planning, and protecting capital from high-risk exposure.",
      icon: TrendingUp,
      span: "lg:col-span-4"
    }
  ];

  return (
    <section id="media-awards" className="relative bg-white py-24 md:py-32 px-5 sm:px-6 md:px-12 border-b border-slate-200">
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
            <div className="inline-block px-3 py-1 border border-slate-300 text-slate-500 font-mono text-xs tracking-widest uppercase mb-6 bg-white">
              Media & Awards
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-navy tracking-tight leading-tight">
              Recognized for <br className="hidden md:block" />
              <span className="text-brand-primary italic">Excellence</span>
            </h2>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
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
                variants={fadeIn}
                className={`${item.span} group relative p-8 md:p-10 bg-white rounded-3xl border border-slate-200 hover:border-brand-primary/40 shadow-sm hover:shadow-[0_20px_40px_-12px_rgb(15,23,42,0.08)] transition-all duration-500 flex flex-col h-full overflow-hidden hover:-translate-y-1`}
              >
                {/* Subtle gradient hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex items-center justify-between mb-12">
                  <span className="text-sm font-mono text-slate-400 tracking-wider">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="text-brand-primary">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="font-serif text-2xl font-medium text-brand-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Full Width Alumni Achievement Banner Card */}
          <motion.div 
            variants={fadeIn}
            className="lg:col-span-12 p-8 md:p-10 rounded-3xl bg-brand-navy border border-brand-navy-light text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl overflow-hidden relative"
          >
            {/* Background texture for the dark banner */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="text-brand-primary">
                <Trophy className="w-10 h-10" />
              </div>
              <div className="max-w-2xl">
                <h3 className="font-serif text-2xl sm:text-3xl font-medium mb-3 text-white tracking-tight">
                  Student Achievement Awards
                </h3>
                <p className="text-slate-300 text-[15px] font-light leading-relaxed">
                  Celebrating the milestones, trading consistency, and career success of our outstanding academy graduates. We actively support and reward disciplined execution and consistent performance.
                </p>
              </div>
            </div>

            <div className="shrink-0 bg-white/5 border border-white/10 px-8 py-6 text-center">
              <div className="text-brand-primary font-serif text-4xl mb-1">100%</div>
              <div className="text-slate-400 text-xs font-mono tracking-widest uppercase">Practical Pedagogy</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Tagline Banner */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16 sm:mt-20 border-y border-slate-200 py-8 text-center"
        >
          <p className="font-serif text-brand-navy text-xl sm:text-2xl font-medium italic tracking-wide">
            "Building a financially aware and educated investment community."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
