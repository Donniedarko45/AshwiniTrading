import React from 'react';
import { motion } from 'motion/react';
import { staggerContainer, fadeIn } from '@/lib/animations';
import { BookOpen, Lightbulb, ShieldCheck, GraduationCap } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Simple Learning",
      desc: "Complex financial concepts explained in a simple and structured manner."
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Practical Learning",
      desc: "Learn through real market examples, practical sessions, and interactive discussions."
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Trusted Guidance",
      desc: "Learn under the guidance of a SEBI Registered Research Analyst with a focus on ethical and research-driven financial education."
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Learn at Every Stage",
      desc: "Whether you're just beginning or looking to expand your knowledge, our programs are designed to support your learning journey."
    }
  ];

  return (
    <section id="why-choose-us" className="relative py-24 md:py-32 bg-slate-50 px-5 sm:px-6 md:px-12 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Header Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200 pb-8"
        >
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 border border-slate-300 text-slate-500 font-mono text-xs tracking-widest uppercase mb-6 bg-white">
              WHY CHOOSE ASHWINI TRADING ACADEMY
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-navy tracking-tight leading-tight text-balance">
              Financial Education <br className="hidden md:block" />
              <span className="text-brand-primary italic">Designed for Every Learner.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-base md:text-lg font-light max-w-lg leading-relaxed text-pretty">
            At Ashwini Trading Academy, we focus on making financial education easy to understand through structured learning, practical examples, and a research-driven approach. Our goal is not just to teach concepts but to help learners build confidence and develop a strong foundation in financial markets.
          </p>
        </motion.div>

        {/* 4-Card Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
        >
          {points.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="group bg-white border border-slate-200 rounded-[24px] p-8 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_-12px_rgba(15,23,42,0.1)] hover:border-brand-primary/40 transition-[border-color,box-shadow,transform] duration-300 flex flex-col h-full relative"
              >
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <span className="text-xs font-mono text-brand-primary font-bold tracking-wider tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-[color,background-color] duration-300">
                    <div className="w-5 h-5 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="font-serif text-2xl font-medium text-brand-navy mb-4 group-hover:text-brand-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed font-light text-pretty">
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
