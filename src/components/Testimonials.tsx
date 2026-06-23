import React from 'react';
import { motion } from 'motion/react';
import { staggerContainer, scaleUp, fadeIn } from '../lib/animations';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Frontend Developer at TechCorp",
    content: "The MERN stack course completely transformed my career. The curriculum was hands-on, and the mentorship I received was invaluable in landing my dream job.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Michael Chen",
    role: "UX Designer at StudioX",
    content: "I transitioned from graphic design to UI/UX within 4 months. The portfolio projects we built during the course were exactly what employers wanted to see.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Emily Rodriguez",
    role: "Data Analyst at FinServe",
    content: "The Data Science program is intense but incredibly rewarding. The real-world datasets we worked on prepared me perfectly for my current role.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-slate-50 border-t border-slate-100 overflow-hidden relative">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-blue-600 text-sm font-extrabold tracking-widest uppercase mb-4">
              Student Success
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-6">
              Don't just take our word for it.
            </h3>
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
           {testimonials.map((testimonial, index) => (
             <motion.div
               key={testimonial.name}
               variants={scaleUp}
               className="bg-white rounded-[24px] p-8 md:p-10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-slate-200 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 cursor-default relative group"
             >
                {/* Quote Icon */}
                <div className="text-slate-100 mb-6 text-7xl font-serif leading-none absolute top-4 right-6 transition-colors duration-300 group-hover:text-blue-50">
                  "
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-8 relative z-10 font-medium">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <div className="font-bold text-slate-900 leading-tight">{testimonial.name}</div>
                    <div className="text-xs text-blue-600 font-bold uppercase tracking-wider mt-1">{testimonial.role}</div>
                  </div>
                </div>
             </motion.div>
           ))}
        </motion.div>
      </div>
    </section>
  );
}
