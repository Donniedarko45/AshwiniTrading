import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { navLinks } from '@/data/navigation';

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
          ? 'bg-brand-bg-dark/85 backdrop-blur-md border-b border-white/10 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-12 max-w-[1600px] mx-auto">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <img
            src="/logo.png"
            alt="Ashwini Trading Academy – SEBI Registered RA"
            className="h-14 w-14 object-contain flex-shrink-0 transition-transform group-hover:scale-105 drop-shadow-lg"
          />
          <div className="text-white flex flex-col leading-tight">
            <span className="text-[17px] font-extrabold tracking-tight">Ashwini Trading</span>
            <span className="text-sm font-semibold tracking-wide text-slate-300">Academy</span>
          </div>
        </motion.div>

        {/* Nav Links */}
        <motion.div 
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           className="hidden lg:flex items-center gap-8 text-slate-300 text-[15px] font-medium tracking-wide"
        >
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="relative hover:text-white transition-colors py-2 group"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
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
          
          <a
            href="tel:+919606995525"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold tracking-wide hover:bg-white/10 transition-colors"
          >
            <div className="bg-brand-emerald rounded-full p-1 w-5 h-5 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.5)]">
              <Phone className="w-3 h-3 text-white fill-white" />
            </div>
            +91-9606 9955 25
          </a>
        </motion.div>
      </div>
    </motion.nav>
  );
}
