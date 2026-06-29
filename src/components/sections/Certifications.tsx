import React, { useState } from 'react';
import { BookOpen, ShieldCheck, Trophy, ZoomIn, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';

export default function Certifications() {
  const [isOpen, setIsOpen] = useState(false);

  const certifications = [
    {
      series: "NISM Series V-A",
      title: "Mutual Fund Distributors",
      desc: "Certification Examination",
    },
    {
      series: "NISM Series VIII",
      title: "Equity Derivatives",
      desc: "Certification Examination",
    },
    {
      series: "NISM Series XV",
      title: "Research Analyst",
      desc: "Certification Examination",
    }
  ];

  return (
    <section id="certifications" className="relative bg-slate-50 py-24 md:py-32 px-5 sm:px-6 md:px-12 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: NISM Certifications (lg:col-span-7) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-7 text-left"
          >
            <motion.div 
              variants={fadeIn}
              className="inline-block px-3 py-1 border border-brand-primary/30 text-brand-primary font-mono text-xs tracking-widest uppercase mb-6 bg-brand-primary/5"
            >
              NISM Certification Training
            </motion.div>
            
            <motion.h2 
              variants={fadeIn}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-navy tracking-tight leading-tight mb-6"
            >
              Build Knowledge. <br className="hidden md:block" />
              <span className="text-brand-primary italic">Earn Certifications.</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-slate-600 text-base md:text-lg font-light leading-relaxed mb-10 max-w-2xl"
            >
              To enhance employability and industry readiness, students will receive dedicated preparation and guidance for highly valued regulatory certifications.
            </motion.p>

            {/* Certifications List */}
            <motion.div variants={fadeIn} className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="group flex items-center gap-5 p-6 rounded-2xl border border-slate-200/60 bg-white hover:border-brand-primary/30 surface-card-light transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors shrink-0 hidden sm:flex">
                    <BookOpen className="w-5 h-5 text-slate-600 group-hover:text-brand-primary transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-slate-400 block mb-1 group-hover:text-brand-primary transition-colors">{cert.series}</span>
                    <h4 className="font-serif text-brand-navy font-medium text-xl tracking-tight leading-tight group-hover:text-brand-primary transition-colors">{cert.title}</h4>
                    <p className="text-slate-500 text-sm font-light mt-1">{cert.desc}</p>
                  </div>
                  <div className="ml-auto text-slate-300 group-hover:text-brand-primary transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.p 
              variants={fadeIn}
              className="text-slate-600 text-[15px] font-light leading-relaxed max-w-2xl border-l border-brand-primary pl-4 py-1 mt-8"
            >
              Our structured training helps students understand the concepts, examination patterns, and practical applications required to successfully clear these certifications.
            </motion.p>
          </motion.div>

          {/* Column 2: Award & Recognition Certificate (lg:col-span-5) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center h-full"
          >
            <div className="w-full max-w-[400px]">
              <div className="text-left w-full mb-4">
                <div className="text-xs font-mono text-slate-500 tracking-widest uppercase mb-1 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-brand-primary" />
                  Award & Recognition
                </div>
                <h4 className="font-serif text-brand-navy font-medium text-2xl">Udyog Yogdaan Puraskar</h4>
              </div>

              <div 
                onClick={() => setIsOpen(true)}
                className="relative w-full aspect-[3/4.2] p-2 bg-white border border-slate-200 group cursor-pointer overflow-hidden transition-all duration-300 hover:border-brand-primary"
              >
                <div className="relative w-full h-full overflow-hidden bg-slate-50 border border-slate-200">
                  <img 
                    src="/nmis.png" 
                    alt="Udyog Yogdaan Puraskar Certificate given to Ashwini Trading Academy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 z-20">
                    <div className="text-white">
                      <ZoomIn className="w-8 h-8" />
                    </div>
                    <span className="text-white text-xs font-mono uppercase tracking-widest border border-white/20 bg-white/10 px-3 py-1">
                      View Certificate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-navy/95 flex items-center justify-center p-4"
          >
            {/* Close trigger on background */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setIsOpen(false)} />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-[600px] max-h-[90vh] aspect-[3/4.2] bg-white p-2 border border-slate-200 z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-4 -right-4 z-50 bg-white hover:bg-slate-50 border border-slate-200 text-brand-navy p-2 cursor-pointer transition-colors"
                aria-label="Close cert modal"
              >
                <X className="w-5 h-5" />
              </button>

              <img 
                src="/nmis.png" 
                alt="Udyog Yogdaan Puraskar Certificate given to Ashwini Trading Academy"
                className="w-full h-full object-contain bg-slate-50 border border-slate-200"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
