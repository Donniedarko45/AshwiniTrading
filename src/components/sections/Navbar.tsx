import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { navLinks } from '@/data/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

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

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? 'bg-brand-bg-dark/95 backdrop-blur-md border-b border-white/10 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-12 max-w-[1600px] mx-auto">
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
                className="h-14 w-14 object-contain flex-shrink-0 transition-transform group-hover:scale-105 drop-shadow-lg"
              />
              <div className="text-white flex flex-col leading-tight text-left">
                <span className="text-[17px] font-extrabold tracking-tight">Ashwini Trading</span>
                <span className="text-sm font-semibold tracking-wide text-slate-300">Academy</span>
              </div>
            </a>
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
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </motion.div>

          {/* Contact Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:flex items-center gap-4"
          >
            <motion.a 
              href="#/join-us"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-orange-grad-start to-brand-orange-grad-end text-slate-950 text-sm font-black tracking-wide hover:brightness-110 transition-all shadow-md shadow-brand-orange/15 cursor-pointer inline-flex items-center justify-center"
            >
              Join Us
            </motion.a>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-bold tracking-wide hover:bg-white/10 transition-colors bg-white/5"
            >
              Hire from us
            </motion.button>
            
            <a
              href="tel:+919845961990"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold tracking-wide hover:bg-white/10 transition-colors"
            >
              <div className="bg-brand-orange rounded-full p-1 w-5 h-5 flex items-center justify-center shadow-lg shadow-brand-orange/40">
                <Phone className="w-3 h-3 text-slate-950 fill-slate-950" />
              </div>
              +91 9845961990
            </a>

            <a
              href="https://wa.me/919845961990?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Ashwini%20Trading%20Academy."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold tracking-wide hover:bg-white/10 transition-colors"
            >
              <div className="bg-[#25D366] rounded-full p-1 w-5 h-5 flex items-center justify-center shadow-[0_0_10px_rgba(37,211,102,0.5)]">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-white">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.182 1.449 4.825 1.451 5.436 0 9.859-4.407 9.862-9.823.001-2.623-1.02-5.088-2.871-6.942-1.851-1.854-4.312-2.874-6.932-2.875-5.437 0-9.86 4.408-9.863 9.825-.001 1.762.461 3.483 1.337 5.016l-.99 3.618 3.708-.971zm11.367-6.416c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.667.149-.198.298-.766.967-.939 1.165-.173.199-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.667-1.611-.913-2.206-.24-.579-.484-.501-.667-.51l-.57-.01c-.197 0-.518.074-.79.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                </svg>
              </div>
              WhatsApp
            </a>
          </motion.div>

          {/* Mobile Menu, WhatsApp & Call Button */}
          <div className="flex lg:hidden items-center gap-2.5">
            <a
              href="tel:+919845961990"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 active:bg-white/20 transition-colors flex items-center justify-center"
              aria-label="Call Us"
            >
              <Phone className="w-5 h-5 text-brand-orange" />
            </a>
            
            <a
              href="https://wa.me/919845961990?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Ashwini%20Trading%20Academy."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 active:bg-white/20 transition-colors flex items-center justify-center"
              aria-label="Chat on WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#25D366]">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.182 1.449 4.825 1.451 5.436 0 9.859-4.407 9.862-9.823.001-2.623-1.02-5.088-2.871-6.942-1.851-1.854-4.312-2.874-6.932-2.875-5.437 0-9.86 4.408-9.863 9.825-.001 1.762.461 3.483 1.337 5.016l-.99 3.618 3.708-.971zm11.367-6.416c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.667.149-.198.298-.766.967-.939 1.165-.173.199-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.667-1.611-.913-2.206-.24-.579-.484-.501-.667-.51l-.57-.01c-.197 0-.518.074-.79.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
              </svg>
            </a>
            
            <button
              onClick={toggleMenu}
              className="p-2 text-white hover:text-slate-300 focus:outline-none touch-target flex items-center justify-center"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
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
            className="fixed inset-0 z-40 bg-brand-bg-dark pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-5 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-xl font-semibold text-slate-200 hover:text-white py-3 border-b border-white/5 active:bg-white/5 rounded-lg px-2 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-slate-500">→</span>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-8 pb-safe">
              <a
                href="tel:+919845961990"
                onClick={closeMenu}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-to-r from-brand-orange-grad-start to-brand-orange-grad-end text-slate-950 text-base font-black tracking-wide hover:brightness-110 transition-all shadow-lg shadow-brand-orange/15"
              >
                <Phone className="w-5 h-5 fill-slate-950 text-slate-950" />
                Call +91 9845961990
              </a>
                         <a
                href="https://wa.me/919845961990?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Ashwini%20Trading%20Academy."
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#25D366] text-white text-base font-bold tracking-wide hover:bg-[#22c35e] transition-colors shadow-lg shadow-brand-success/15"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.182 1.449 4.825 1.451 5.436 0 9.859-4.407 9.862-9.823.001-2.623-1.02-5.088-2.871-6.942-1.851-1.854-4.312-2.874-6.932-2.875-5.437 0-9.86 4.408-9.863 9.825-.001 1.762.461 3.483 1.337 5.016l-.99 3.618 3.708-.971zm11.367-6.416c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.667.149-.198.298-.766.967-.939 1.165-.173.199-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.667-1.611-.913-2.206-.24-.579-.484-.501-.667-.51l-.57-.01c-.197 0-.518.074-.79.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                WhatsApp Us
              </a>
              
              <a
                href="#/join-us"
                onClick={closeMenu}
                className="flex items-center justify-center w-full py-4 rounded-xl bg-gradient-to-r from-brand-orange-grad-start to-brand-orange-grad-end text-slate-950 text-base font-black tracking-wide hover:brightness-110 transition-all shadow-md shadow-brand-orange/15 text-center"
              >
                Join Us
              </a>

              <button
                onClick={() => {
                  closeMenu();
                  const finalCta = document.getElementById('final-cta');
                  if (finalCta) finalCta.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-4 rounded-xl border border-white/20 text-white text-base font-bold tracking-wide hover:bg-white/10 transition-colors bg-white/5"
              >
                Hire from us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
