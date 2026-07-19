import React from 'react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { Check, BookOpen, Brain, Lightbulb, TrendingUp } from 'lucide-react';

export default function LearningJourneyCTA() {
  const steps = [
    {
      icon: BookOpen,
      title: "Build Your Foundation",
      desc: "Understand the fundamentals of financial markets.",
      color: "from-blue-500 to-cyan-400",
      glow: "bg-blue-500/20",
      ring: "ring-blue-500/30",
      accent: "text-blue-400",
      barColor: "bg-blue-500",
    },
    {
      icon: Brain,
      title: "Strengthen Your Knowledge",
      desc: "Learn fundamental and technical concepts through structured lessons.",
      color: "from-violet-500 to-purple-400",
      glow: "bg-violet-500/20",
      ring: "ring-violet-500/30",
      accent: "text-violet-400",
      barColor: "bg-violet-500",
    },
    {
      icon: Lightbulb,
      title: "Apply What You Learn",
      desc: "Develop practical understanding using real-world market examples.",
      color: "from-amber-500 to-yellow-400",
      glow: "bg-amber-500/20",
      ring: "ring-amber-500/30",
      accent: "text-amber-400",
      barColor: "bg-amber-500",
    },
    {
      icon: TrendingUp,
      title: "Continue Learning",
      desc: "Build financial knowledge that helps you make informed decisions throughout your life.",
      color: "from-emerald-500 to-green-400",
      glow: "bg-emerald-500/20",
      ring: "ring-emerald-500/30",
      accent: "text-emerald-400",
      barColor: "bg-emerald-500",
    }
  ];

  const whyLearnItems = [
    { title: "Structured Learning Curriculum", desc: "A clear roadmap from beginner to advanced financial concepts." },
    { title: "Practical Learning", desc: "Understand concepts through real market examples and interactive sessions." },
    { title: "Research-Driven Education", desc: "Guided by a SEBI Registered Research Analyst." },
    { title: "Flexible Learning Options", desc: "Choose Online, Classroom, or Hybrid learning." },
    { title: "Interactive Sessions", desc: "Learn through discussions, activities, and practical exercises." },
    { title: "Continuous Learning Support", desc: "Our commitment to your learning continues beyond the classroom." }
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-navy relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Learning Approach Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 sm:mb-20 border-b border-white/10 pb-8"
        >
          <div className="inline-block px-3 py-1 border border-white/20 text-slate-300 font-mono text-xs tracking-widest uppercase mb-6 bg-white/5">
            OUR LEARNING APPROACH
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight leading-tight">
            Learn <span className="text-brand-primary italic">Step by Step.</span>
          </h2>
        </motion.div>

        {/* Journey Graph — Desktop */}
        <motion.div 
          className="hidden lg:block mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Progress Track Line */}
          <div className="relative">
            {/* Background track */}
            <div className="absolute top-[52px] left-[calc(12.5%-16px)] right-[calc(12.5%-16px)] h-[3px] bg-white/10 rounded-full" />
            
            {/* Animated fill track */}
            <motion.div 
              className="absolute top-[52px] left-[calc(12.5%-16px)] h-[3px] rounded-full bg-gradient-to-r from-blue-500 via-violet-500 via-amber-500 to-emerald-500"
              initial={{ width: "0%" }}
              whileInView={{ width: "calc(100% - (25% - 32px))" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* 4 Step Nodes */}
            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeIn}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Node Circle */}
                    <motion.div 
                      className="relative mb-8"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
                    >
                      {/* Glow ring */}
                      <div className={`absolute -inset-3 rounded-full ${step.glow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      {/* Pulsing outer ring */}
                      <motion.div
                        className={`absolute -inset-2 rounded-full border-2 border-dashed ${step.ring} opacity-30`}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />

                      {/* Main circle */}
                      <div className={`relative w-[72px] h-[72px] rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg ring-4 ring-brand-navy z-10`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>

                      {/* Step badge */}
                      <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-brand-navy border border-white/10 text-[9px] font-mono tracking-widest z-20 ${step.accent}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                    </motion.div>

                    {/* Content Card */}
                    <motion.div 
                      className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.06] transition-all duration-500 w-full group-hover:-translate-y-1"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + idx * 0.15, duration: 0.5 }}
                    >
                      <h3 className={`font-serif text-lg font-medium text-white mb-2 group-hover:${step.accent} transition-colors duration-300`}>
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-sm font-light leading-relaxed text-pretty">
                        {step.desc}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Journey Graph — Mobile / Tablet (Vertical Timeline) */}
        <motion.div 
          className="lg:hidden mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="relative pl-12 sm:pl-16">
            {/* Vertical track line */}
            <div className="absolute left-[18px] sm:left-[22px] top-0 bottom-0 w-[3px] bg-white/10 rounded-full" />
            <motion.div 
              className="absolute left-[18px] sm:left-[22px] top-0 w-[3px] rounded-full bg-gradient-to-b from-blue-500 via-violet-500 via-amber-500 to-emerald-500"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="space-y-10">
              {steps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeIn}
                    className="relative group"
                  >
                    {/* Node on the track */}
                    <motion.div 
                      className={`absolute -left-12 sm:-left-16 top-2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg ring-4 ring-brand-navy z-10`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15, duration: 0.4, type: "spring" }}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-500">
                      <div className={`text-[10px] font-mono tracking-widest mb-2 ${step.accent}`}>
                        STEP {String(idx + 1).padStart(2, '0')}
                      </div>
                      <h3 className="font-serif text-lg font-medium text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-sm font-light leading-relaxed text-pretty">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Why Learn With Us Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="mb-12 border-b border-white/10 pb-8">
            <div className="inline-block px-3 py-1 border border-white/20 text-slate-300 font-mono text-xs tracking-widest uppercase mb-6 bg-white/5">
              WHY LEARN WITH US
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight">
              What Makes Ashwini Trading Academy <span className="text-brand-primary italic">Different?</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8"
            variants={staggerContainer}
          >
            {whyLearnItems.map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-brand-primary stroke-[3px]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
