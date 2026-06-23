import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Text */}
          <div className="lg:w-1/2">
             <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-blue-600 text-sm font-bold tracking-wider uppercase mb-3"
              >
                The Bluetick Difference
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight leading-tight mb-6"
              >
                We bridge the gap between education and employment.
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 mb-8 leading-relaxed"
              >
                Traditional education focuses on theory. We focus on what actually gets you hired. Our project-based approach ensures you graduate with a strong portfolio.
              </motion.p>

              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                 className="space-y-4 mb-10"
              >
                {[
                  "Portfolio-building real-world projects",
                  "Direct access to top hiring managers",
                  "Lifetime access to community & updates",
                  "Dedicated success manager for every student"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4 }}
              >
                 <Button className="rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-bold px-8 h-12 transition-colors">
                   Explore Curriculum
                 </Button>
              </motion.div>
          </div>

          {/* Right Image Layout */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:w-1/2 relative"
          >
             <div className="absolute inset-0 bg-blue-50 blur-3xl -z-10 rounded-full" />
             <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600" 
                  alt="Students learning" 
                  className="rounded-2xl w-full h-[300px] object-cover border border-slate-100 shadow-sm transform translate-y-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" 
                  alt="Team collaboration" 
                  className="rounded-2xl w-full h-[300px] object-cover border border-slate-100 shadow-sm"
                />
             </div>
             
             {/* Floating Badge */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl border border-slate-100 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_10px_10px_-5px_rgba(0,0,0,0.02)] p-4 flex items-center gap-4 w-[280px]"
             >
                <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">100% Guaranteed</div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-widest font-bold">Placement Assistance</div>
                </div>
             </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
