import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, CheckCircle, ZoomIn, X } from 'lucide-react';
import { fadeIn } from '@/lib/animations';

export default function Certifications() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="certifications" className="relative bg-[#0F0A24] py-24 md:py-32 px-5 sm:px-6 md:px-12 overflow-hidden border-b border-white/5">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/10 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 font-extrabold text-xs tracking-widest uppercase mb-6">
              <Award className="w-4 h-4 text-yellow-500 animate-spin-slow" />
              Award & Recognition
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Recognized as the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Best Stock Trading Academy</span> in Bangalore
            </h2>
            
            <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed mb-8">
              We are deeply honored to receive the prestigious <strong className="text-white">Udyog Yogdaan Puraskar</strong> in Bengaluru. This award recognizes our commitment to delivering top-tier trading mentorship, options trading expertise, and practical stock market education.
            </p>

            {/* Benefit Bullets */}
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-1 rounded-full bg-yellow-500/20 text-yellow-400 mt-1 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Elite Industry Benchmark</h4>
                  <p className="text-slate-400 text-sm mt-0.5">Awarded for our structured, practical-first pedagogy in financial markets education.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-1 rounded-full bg-yellow-500/20 text-yellow-400 mt-1 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">SEBI Registered Mentorship</h4>
                  <p className="text-slate-400 text-sm mt-0.5">Guided by research analysts who adhere to strict risk management and execution processes.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-1 rounded-full bg-yellow-500/20 text-yellow-400 mt-1 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">10,000+ Learners Empowered</h4>
                  <p className="text-slate-400 text-sm mt-0.5">A trusted network of students, corporate professionals, and full-time traders across India.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Certificate Card Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div 
              onClick={() => setIsOpen(true)}
              className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[3/4.2] rounded-[24px] p-2 bg-gradient-to-br from-yellow-500/30 via-slate-800 to-indigo-900/40 border border-yellow-500/20 shadow-[0_0_50px_rgba(234,179,8,0.15)] group cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(234,179,8,0.25)] hover:border-yellow-400/40"
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
                  <div className="p-3.5 bg-yellow-500 text-slate-950 rounded-full shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <span className="text-white text-xs font-extrabold uppercase tracking-widest bg-slate-900/90 px-3 py-1 rounded-md mt-2">
                    Click to Zoom
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Lightbox / Modal Modal */}
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
              className="relative w-full max-w-[550px] max-h-[90vh] aspect-[3/4.2] bg-white rounded-3xl overflow-hidden shadow-2xl z-10 p-1 border border-yellow-400"
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
