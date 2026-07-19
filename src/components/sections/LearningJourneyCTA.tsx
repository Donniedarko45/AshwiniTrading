import React from 'react';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { Check, BookOpen, Brain, Lightbulb, TrendingUp } from 'lucide-react';

export default function LearningJourneyCTA() {
  const steps = [
    {
      icon: BookOpen,
      title: "Build Your Foundation",
      desc: "Understand the fundamentals of financial markets."
    },
    {
      icon: Brain,
      title: "Strengthen Your Knowledge",
      desc: "Learn fundamental and technical concepts through structured lessons."
    },
    {
      icon: Lightbulb,
      title: "Apply What You Learn",
      desc: "Develop practical understanding using real-world market examples."
    },
    {
      icon: TrendingUp,
      title: "Continue Learning",
      desc: "Build financial knowledge that helps you make informed decisions throughout your life."
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

        {/* 4 Steps Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="group relative p-8 rounded-[24px] bg-white/5 border border-white/10 hover:border-brand-primary/40 hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-brand-primary font-bold tracking-wider tabular-nums">
                    Step {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-brand-primary/20 group-hover:text-brand-primary transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-medium text-white mb-3 group-hover:text-brand-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-[15px] leading-relaxed font-light text-pretty">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
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
