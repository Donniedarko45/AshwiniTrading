import React from 'react';
import { Phone, Mail, MapPin, Youtube, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-slate-700 relative z-10 font-mono">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-700">
          
          {/* Column 1: About */}
          <div className="lg:col-span-4 p-8 md:p-12 text-left">
            <h3 className="text-white font-serif font-medium text-2xl mb-6 tracking-tight">Ashwini Trading Academy</h3>
            <p className="text-slate-400 leading-relaxed text-sm font-light max-w-sm">
              Empowering Individuals Through Financial Education, building financial literacy, confidence, skills, and future-ready career opportunities.
            </p>
            <div className="mt-8 inline-block px-3 py-1 border border-brand-primary/30 text-brand-primary font-bold text-[10px] tracking-widest uppercase">
              SEBI Registered Research Analyst
            </div>
          </div>

          {/* Column 2: Courses */}
          <div className="lg:col-span-4 p-8 md:p-12 text-left">
            <h4 className="text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-8">Programs</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-start gap-2 border-b border-slate-700/50 pb-3">
                <span className="text-brand-primary text-xs mt-0.5">›</span>
                <a href="#" className="hover:text-white transition-colors">Advanced Trading Strategies (15 Days)</a>
              </li>
              <li className="flex items-start gap-2 border-b border-slate-700/50 pb-3">
                <span className="text-brand-primary text-xs mt-0.5">›</span>
                <a href="#" className="hover:text-white transition-colors">Certified Trading Program (60 Days)</a>
              </li>
              <li className="flex items-start gap-2 border-b border-slate-700/50 pb-3">
                <span className="text-brand-primary text-xs mt-0.5">›</span>
                <a href="#" className="hover:text-white transition-colors">Technical Analysis Mastery (25 Days)</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary text-xs mt-0.5">›</span>
                <a href="#" className="hover:text-white transition-colors">Free Stock Market Workshop</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-4 p-8 md:p-12 text-left">
            <h4 className="text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-8">Contact & Location</h4>
            <ul className="space-y-6 text-slate-300 text-sm">
              <li className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <a href="tel:+919845961990" className="hover:text-white transition-colors">+91 9845961990</a>
              </li>
              <li className="flex items-center gap-4 border-t border-slate-700/50 pt-4">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <a href="mailto:info@ashwinitradingacademy.com" className="hover:text-white transition-colors break-all">info@ashwinitradingacademy.com</a>
              </li>
              <li className="flex items-start gap-4 border-t border-slate-700/50 pt-4">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">545, 2nd Floor, CMH Road, Stage 1, Indiranagar, Bengaluru, Karnataka 560038</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 p-8 md:px-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          
          {/* Copyright */}
          <div className="text-[10px] text-slate-500 tracking-widest uppercase">
            © {new Date().getFullYear()} Ashwini Trading Academy.<br className="lg:hidden" /> All rights reserved.
          </div>

          {/* SEO Links & Socials Container */}
          <div className="flex flex-col lg:items-end gap-4">
            {/* Row 1 */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-slate-400 tracking-widest uppercase">
              <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-slate-400">Privacy Policy</a>
              <span className="text-slate-700">|</span>
              <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-slate-400">Terms & Conditions</a>
              <span className="text-slate-700">|</span>
              <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-slate-400">Contact Us</a>
            </div>
            
            {/* Row 2 + Socials */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-[10px] text-slate-500 tracking-widest uppercase">
              <a href="#" className="hover:text-white transition-colors">Course Fees</a>
              <span className="text-slate-700">|</span>
              <a href="#" className="hover:text-white transition-colors">Stock Market Training</a>
              
              {/* Social Icons Stack */}
              <div className="flex items-center gap-4 lg:ml-4 lg:pl-4 lg:border-l border-slate-700 pt-2 lg:pt-0 w-full lg:w-auto mt-2 lg:mt-0">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-white transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
