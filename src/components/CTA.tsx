import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500 via-blue-600 to-slate-900 opacity-90" />
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl mix-blend-overlay pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-900/40 rounded-full blur-3xl mix-blend-overlay pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-6"
        >
           Ready to Accelerate Your Career?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Join thousands of successful alumni. Start learning today and take the first step towards your dream job.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-50 rounded-xl h-14 px-8 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] w-full sm:w-auto font-bold">
            Get Started Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-blue-400 text-white hover:bg-white/10 rounded-xl h-14 px-8 w-full sm:w-auto font-bold bg-transparent">
            Contact Advisor
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
