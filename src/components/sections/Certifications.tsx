import React, { useState } from 'react';
import { Award, BookOpen, ShieldCheck, Trophy, ZoomIn, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { fadeIn, staggerContainer } from '@/lib/animations';

export default function Certifications() {
  const [isOpen, setIsOpen] = useState(false);

  const certifications = [
    {
      series: "NISM Series V-A",
      title: "Mutual Fund Distributors",
      desc: "Certification Examination",
      gradient: "from-brand-secondary/20 to-transparent",
      border: "border-brand-secondary/30",
      iconColor: "text-brand-secondary"
    },
    {
      series: "NISM Series VIII",
      title: "Equity Derivatives",
      desc: "Certification Examination",
      gradient: "from-brand-secondary/20 to-transparent",
      border: "border-brand-secondary/30",
      iconColor: "text-brand-secondary"
    },
    {
      series: "NISM Series XV",
      title: "Research Analyst",
      desc: "Certification Examination",
      gradient: "from-brand-primary/20 to-transparent",
      border: "border-brand-primary/30",
      iconColor: "text-brand-primary"
    }
  ];

  return (
    <section id="certifications" className="relative bg-brand-bg-dark py-24 md:py-32 px-5 sm:px-6 md:px-12 overflow-hidden border-b border-white/5">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-brand-glow/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] bg-brand-glow/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary font-extrabold text-xs tracking-widest uppercase mb-6"
            >
              <Award className="w-4 h-4 text-brand-primary animate-pulse" />
              NISM Certification Training Included
            </motion.div>
            
            <motion.h2 
              variants={fadeIn}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
            >
              Build Knowledge. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Earn Certifications.</span> Create Opportunities.
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed mb-8 max-w-2xl"
            >
              To enhance employability and industry readiness, students will receive dedicated preparation and guidance for highly valued regulatory certifications:
            </motion.p>

            {/* Certifications Cards Stack */}
            <motion.div variants={fadeIn} className="space-y-4 mb-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className={`relative p-5 rounded-2xl bg-gradient-to-r ${cert.gradient} border ${cert.border} backdrop-blur-md flex items-center gap-5 transition-transform hover:translate-x-2 duration-300`}
                >
                  <div className={`p-3 rounded-xl bg-white/5 ${cert.iconColor} shrink-0`}>
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-black tracking-widest uppercase text-slate-400 block mb-1">{cert.series}</span>
                    <h4 className="text-white font-extrabold text-base sm:text-lg tracking-tight leading-tight">{cert.title}</h4>
                    <p className="text-slate-400 text-xs font-semibold mt-0.5">{cert.desc}</p>
                  </div>
                  <div className="ml-auto pr-2">
                    <ShieldCheck className={`w-6.5 h-6.5 ${cert.iconColor} opacity-80`} />
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.p 
              variants={fadeIn}
              className="text-slate-400 text-sm font-semibold leading-relaxed max-w-2xl border-l-2 border-brand-secondary/40 pl-4 py-1"
            >
              Our structured training helps students understand the concepts, examination patterns, and practical applications required to successfully clear these certifications on their first attempt.
            </motion.p>
          </motion.div>

          {/* Column 2: Award & Recognition Certificate (lg:col-span-5) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center h-full"
          >
            <div className="text-left w-full max-w-[360px] sm:max-w-[400px] mb-4 lg:hidden">
              <div className="text-xs font-bold text-brand-primary tracking-wider uppercase mb-1">Award & Recognition</div>
              <h4 className="text-white font-bold text-xl">Udyog Yogdaan Puraskar</h4>
            </div>

            <div 
              onClick={() => setIsOpen(true)}
              className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[3/4.2] rounded-[24px] p-2 bg-gradient-to-br from-brand-primary/30 via-brand-bg-card to-brand-accent/40 border border-brand-primary/20 shadow-2xl shadow-brand-primary/15 group cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-brand-primary/25 hover:border-brand-primary/40"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-10" />

              {/* Certificate Image Wrapper */}
              <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-slate-900 border border-white/5">
                <img 
                  src="/nmis.png" 
                  alt="Udyog Yogdaan Puraskar Certificate given to Ashwini Trading Academy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 z-20">
                  <div className="p-3.5 bg-brand-primary text-slate-950 rounded-full shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <span className="text-white text-xs font-extrabold uppercase tracking-widest bg-slate-900/90 px-3 py-1 rounded-md mt-2">
                    Click to Zoom
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block text-center w-full max-w-[360px] sm:max-w-[400px] mt-6 px-2">
              <div className="text-[10px] font-black text-brand-primary/90 tracking-widest uppercase mb-1 flex items-center justify-center gap-1.5">
                <Trophy className="w-4.5 h-4.5 text-brand-primary" />
                Awarded Academy
              </div>
              <h4 className="text-white font-extrabold text-base leading-snug">Udyog Yogdaan Puraskar for Best Trading Academy</h4>
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
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            {/* Close trigger on background */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setIsOpen(false)} />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-[550px] max-h-[90vh] aspect-[3/4.2] bg-white rounded-3xl overflow-hidden shadow-2xl z-10 p-1 border border-brand-primary"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-50 bg-black/75 hover:bg-black text-white p-2.5 rounded-full border-0 cursor-pointer shadow-lg hover:scale-105 transition-transform"
                aria-label="Close cert modal"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>

              <img 
                src="/nmis.png" 
                alt="Udyog Yogdaan Puraskar Certificate given to Ashwini Trading Academy"
                className="w-full h-full object-contain bg-slate-900 rounded-[20px]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
