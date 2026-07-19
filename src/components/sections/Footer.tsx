import React from 'react';
import { Phone, Mail, MapPin, Youtube, Instagram, Linkedin, Facebook, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-white/10 relative z-10 font-mono">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        
        {/* Main Footer Grid (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Branding */}
          <div className="flex flex-col text-left">
            <h3 className="text-white font-serif font-medium text-2xl mb-3 tracking-tight">Ashwini Trading Academy</h3>
            <p className="text-brand-primary font-serif italic text-base mb-6">Finance Made Simple.</p>
            <p className="text-slate-300 font-serif text-sm mb-6">Learn. Understand. Grow.</p>
            <div className="mt-2 inline-flex items-center w-fit px-4 py-2 rounded-full bg-brand-primary/5 border border-brand-primary/20 text-brand-primary font-bold text-[10px] tracking-widest uppercase shadow-sm">
              SEBI Registered Research Analyst
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col text-left lg:pl-8">
            <h4 className="text-white font-bold tracking-wider uppercase text-sm mb-8">Quick Links</h4>
            <ul className="space-y-5 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-brand-primary text-xs mt-0.5">›</span>
                <a href="#" className="hover:text-white transition-colors">Home</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-primary text-xs mt-0.5">›</span>
                <a href="#/about-us" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-primary text-xs mt-0.5">›</span>
                <a href="#/all-courses" className="hover:text-white transition-colors">Courses</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-primary text-xs mt-0.5">›</span>
                <a href="#/reviews" className="hover:text-white transition-colors">Reviews</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-primary text-xs mt-0.5">›</span>
                <a href="#/college-collaboration" className="hover:text-white transition-colors">Corporate & College Training</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-primary text-xs mt-0.5">›</span>
                <a href="#" className="hover:text-white transition-colors">Blog</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-primary text-xs mt-0.5">›</span>
                <a href="#/contact-us" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col text-left lg:pl-4">
            <h4 className="text-white font-bold tracking-wider uppercase text-sm mb-8">Legal</h4>
            <ul className="space-y-5 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-brand-primary text-xs mt-0.5">›</span>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-primary text-xs mt-0.5">›</span>
                <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-primary text-xs mt-0.5">›</span>
                <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-primary text-xs mt-0.5">›</span>
                <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-primary text-xs mt-0.5">›</span>
                <a href="#" className="hover:text-white transition-colors">Risk Disclosure</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Follow Us */}
          <div className="flex flex-col text-left">
            <h4 className="text-white font-bold tracking-wider uppercase text-sm mb-8">Contact</h4>
            <ul className="space-y-6 text-slate-300 text-sm">
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors shrink-0">
                  <Phone className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-primary transition-colors" />
                </div>
                <a href="tel:+918861756040" className="hover:text-white transition-colors">+91 88617 56040 | 9845961990</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors shrink-0">
                  <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-primary transition-colors" />
                </div>
                <a href="mailto:info@ashwinitradingacademy.com" className="hover:text-white transition-colors break-all">info@ashwinitradingacademy.com</a>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-primary transition-colors" />
                </div>
                <span className="leading-relaxed mt-1.5">Ashwini Trading Academy, Bengaluru, Karnataka, India</span>
              </li>
            </ul>

            {/* Follow Us */}
            <h4 className="text-white font-bold tracking-wider uppercase text-sm mt-10 mb-4">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Divider and Copyright Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <div className="text-[11px] text-slate-500 tracking-widest uppercase text-center sm:text-left">
            © 2026 Ashwini Trading Academy. All Rights Reserved.
          </div>

          {/* Designed by */}
          <div className="text-[11px] text-slate-500 tracking-widest uppercase text-center sm:text-right">
            Designed & Developed by Boost D Brands.
          </div>

        </div>
      </div>
    </footer>
  );
}
