import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B0A11]/80 backdrop-blur-md border-b border-white/10 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-12 max-w-[1600px] mx-auto">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="text-white text-3xl font-extrabold flex items-center gap-2 tracking-tight">
             <svg className="w-8 h-8 flex-shrink-0 transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M11.5 2.5L2 8.5L11.5 14.5L21 8.5L11.5 2.5Z" fill="#3B82F6"/>
               <path d="M2.5 13.5L11.5 19L20.5 13.5" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
               <path d="M2.5 18L11.5 23.5L20.5 18" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
             <span className="leading-none">BlueTick<br /><span className="text-lg font-medium tracking-normal text-slate-300">Academy</span></span>
          </div>
        </motion.div>

        {/* Nav Links */}
        <motion.div 
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           className="hidden lg:flex items-center gap-8 text-slate-300 text-[15px] font-medium tracking-wide"
        >
          {['Placements', 'Courses', 'Curriculum', 'Projects', 'Trainers', 'FAQs'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="relative hover:text-white transition-colors py-2 group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </motion.div>

        {/* Contact Buttons */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:flex items-center gap-4"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-bold tracking-wide hover:bg-white/10 transition-colors bg-white/5"
          >
            Hire from us
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold tracking-wide hover:bg-white/10 transition-colors"
          >
            <div className="bg-emerald-500 rounded-full p-1 w-5 h-5 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.5)]">
              <Phone className="w-3 h-3 text-white fill-white" />
            </div>
            +91-9606 9955 25
          </motion.button>
          
        </motion.div>
      </div>
    </motion.nav>
  );
}
