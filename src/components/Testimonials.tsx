import React from 'react';
import { motion } from 'motion/react';

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
    <section id="testimonials" className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 text-sm font-bold tracking-wider uppercase mb-3"
          >
            Student Success
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight leading-tight mb-6"
          >
            Don't Just Take Our Word For It
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {testimonials.map((testimonial, index) => (
             <motion.div
               key={testimonial.name}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.15 }}
               className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:border-blue-200 transition-colors relative"
             >
                {/* Quote Icon */}
                <div className="text-slate-100 mb-6 text-6xl font-serif leading-none absolute top-4 right-6">
                  "
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-8 relative z-10">
                  {testimonial.content}
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-xs text-slate-500 font-medium">{testimonial.role}</div>
                  </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
