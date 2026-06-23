import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, Zap } from 'lucide-react';
import { staggerContainer, fadeIn, scaleUp } from '@/lib/animations';

export default function WhyHireUs() {
  const reasons = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-purple-600" />,
      title: "Zero Ramp-up Time",
      desc: "Our graduates have already run ₹50K+ in live ad spend and built dashboards. They ship on day one."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: "AI-Native Workflows",
      desc: "They don't just write copy; they automate content velocity using GPT-4, n8n, and Midjourney pipelines."
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-600" />,
      title: "ROI Obsessed",
      desc: "Trained to focus on CPA, LTV, and CAC. They speak the language of founders and revenue leaders."
    }
  ];

  return (
    <section id="whyhireus" className="bg-white py-32 px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-6">
            Why <span className="text-brand-blue">500+</span> Bangalore companies pick our graduates <span className="underline decoration-blue-200 underline-offset-4">first.</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-medium">
            Three reasons hiring managers told us they keep coming back:
          </p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleUp}
          className="w-full h-[400px] md:h-[500px] bg-slate-100 rounded-[32px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] mb-20"
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
              className="bg-slate-50 border border-slate-200 rounded-[24px] p-8 md:p-10 hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
