import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, Zap } from 'lucide-react';
import { staggerContainer, fadeIn, scaleUp } from '@/lib/animations';

export default function WhyHireUs() {
  const reasons = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-brand-accent" />,
      title: "Zero Ramp-up Time",
      desc: "Our graduates have already run ₹50K+ in live ad spend and built dashboards. They ship on day one."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-secondary-hover" />,
      title: "AI-Native Workflows",
      desc: "They don't just write copy; they automate content velocity using GPT-4, n8n, and Midjourney pipelines."
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-primary-hover" />,
      title: "ROI Obsessed",
      desc: "Trained to focus on CPA, LTV, and CAC. They speak the language of founders and revenue leaders."
    }
  ];

  return (
    <section id="whyhireus" className="bg-brand-bg-dark py-32 px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Why <span className="text-brand-secondary">500+</span> Bangalore companies pick our graduates <span className="underline decoration-brand-secondary/30 underline-offset-4">first.</span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl font-medium">
            Three reasons hiring managers told us they keep coming back:
          </p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleUp}
          className="w-full h-[400px] md:h-[500px] bg-brand-bg-card rounded-[32px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)] mb-20"
        >
           <img 
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Hiring manager shaking hands with a successful graduate" 
              className="w-full h-full object-cover object-top" 
            />
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeIn}
              className="bg-brand-bg-card border border-white/10 rounded-[24px] p-8 md:p-10 hover:shadow-lg hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-bg-dark border border-white/10 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {idx === 0 ? (
                  <CheckCircle2 className="w-6 h-6 text-brand-secondary" />
                ) : reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4 tracking-tight">{reason.title}</h3>
              <p className="text-slate-300 leading-relaxed font-medium">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
