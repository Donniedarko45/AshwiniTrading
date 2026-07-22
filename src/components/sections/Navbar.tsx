import React, { useEffect, useState } from 'react';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { navLinks } from '@/data/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState('');
  const { scrollY } = useScroll();

  useEffect(() => {
    const syncHash = () => setCurrentHash(window.location.hash || '#');
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const isActiveLink = (href: string) => {
    if (href === '#/all-courses' && currentHash.startsWith('#/course-details/')) {
      return true;
    }
    return currentHash === href;
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-3 shadow-sm' 
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-12 max-w-[1400px] mx-auto">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <a 
              href="#"
              className="flex items-center gap-3 group cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="Ashwini Trading Academy – SEBI Registered RA"
                className="h-10 w-10 object-contain flex-shrink-0 transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col leading-tight text-left text-brand-navy">
                <span className="text-[15px] font-extrabold tracking-tight">Ashwini Trading</span>
                <span className="text-[11px] font-semibold tracking-wide text-slate-500">Academy</span>
              </div>
            </a>
          </motion.div>

          {/* Nav Links — centered */}
          <motion.div 
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             className="hidden lg:flex items-center gap-1 text-[13px] font-medium text-slate-600"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={isActiveLink(link.href) ? 'page' : undefined}
                className={`relative px-3 py-2 rounded-lg transition-colors ${
                  isActiveLink(link.href) 
                    ? 'text-brand-primary font-bold bg-brand-primary/5' 
                    : 'hover:text-brand-navy hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Right Side — CTA only */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:flex items-center gap-3"
          >
            <a
              href="tel:+918861756040"
              className="flex items-center justify-center w-10 h-10 rounded-full transition-colors bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-brand-navy"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/918861756040"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full transition-colors bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <motion.button 
              onClick={() => {
                const form = document.getElementById('name-card');
                if (form) {
                  form.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.hash = '#/contact-us';
                }
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="h-10 px-5 bg-cta-gold text-brand-navy font-bold text-[13px] rounded-lg shadow-brand-gold hover:shadow-brand-gold-lg hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center"
            >
              Book Free Demo
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleMenu}
              className="p-2 focus:outline-none flex items-center justify-center transition-colors rounded-lg text-brand-navy hover:bg-slate-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-2 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={isActiveLink(link.href) ? 'page' : undefined}
                  className={`text-lg font-semibold py-4 border-b border-slate-100 px-2 transition-colors flex items-center justify-between ${
                    isActiveLink(link.href) ? 'text-brand-primary' : 'text-brand-navy'
                  }`}
                >
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-8 pb-safe">
              <button
                onClick={() => {
                  closeMenu();
                  const form = document.getElementById('name-card');
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.hash = '#/contact-us';
                  }
                }}
                className="w-full h-14 bg-cta-gold text-brand-navy font-bold text-[15px] rounded-xl shadow-brand-gold transition-all duration-300 flex items-center justify-center"
              >
                Book Free Demo
              </button>
              
              <div className="grid grid-cols-2 gap-4 mt-2">
                <a
                  href="tel:+918861756040"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-slate-200 text-slate-700 text-[14px] font-bold hover:bg-slate-50 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
                
                <a
                  href="https://wa.me/918861756040"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-brand-secondary bg-brand-secondary/5 text-brand-secondary text-[14px] font-bold hover:bg-brand-secondary/10 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
