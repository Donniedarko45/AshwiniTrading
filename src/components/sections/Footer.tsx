import React from 'react';
import { Phone, Mail, MapPin, Youtube, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#040614] text-slate-400 py-16 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          
          {/* Column 1: About */}
          <div className="md:col-span-5 text-left">
            <h3 className="text-white font-extrabold text-xl mb-6 tracking-tight">Ashwini Trading Academy</h3>
            <p className="text-slate-400 leading-relaxed text-sm font-semibold max-w-sm">
              Empowering Individuals Through Financial Education, building financial literacy, confidence, skills, and future-ready career opportunities.
            </p>
          </div>

          {/* Column 2: Courses */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-slate-400 text-[11px] font-extrabold tracking-widest uppercase mb-6">Courses</h4>
            <ul className="space-y-4 text-white text-sm font-semibold">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Advanced Trading Strategies (Duration: 15 Days)</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Certified Trading Program (Duration: 60 Days)</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Technical Analysis Mastery (Duration: 25 Days)</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Free Stock Market Workshop</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-4 text-left">
            <h4 className="text-slate-400 text-[11px] font-extrabold tracking-widest uppercase mb-6">Contact</h4>
            <ul className="space-y-4 text-white text-sm font-semibold">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="tel:+919845961990" className="hover:text-brand-orange transition-colors">+91 9845961990</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="mailto:info@ashwinitradingacademy.com" className="hover:text-brand-orange transition-colors">info@ashwinitradingacademy.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span className="leading-relaxed text-white">545, 2nd Floor, CMH Road, Stage 1, Indiranagar, Bengaluru, Karnataka 560038</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Copyright, Links, Socials Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 text-[11px] font-bold text-slate-500 tracking-wide">
            
            {/* Copyright */}
            <div className="shrink-0 text-left">
              © 2026 Ashwini Trading Academy. All rights reserved.
            </div>

            {/* SEO Links & Socials Container */}
            <div className="flex flex-col gap-3 w-full lg:w-auto text-left lg:text-right">
              {/* Row 1 */}
              <div className="flex flex-wrap lg:justify-end gap-x-4 gap-y-1.5">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                <a href="#" className="hover:text-white transition-colors">Contact Us</a>
                <a href="#" className="hover:text-white transition-colors">Stock Market Course Near Me</a>
                <a href="#" className="hover:text-white transition-colors">Best Stock Market Course in Bangalore</a>
              </div>
              
              {/* Row 2 + Socials */}
              <div className="flex flex-wrap lg:justify-end items-center gap-x-4 gap-y-1.5">
                <a href="#" className="hover:text-white transition-colors">Trading Course Online</a>
                <a href="#" className="hover:text-white transition-colors">Course Fees</a>
                <a href="#" className="hover:text-white transition-colors">Trading Course with Placement</a>
                <a href="#" className="hover:text-white transition-colors">Stock Market Training in Bangalore</a>
                
                {/* Social Icons Stack */}
                <div className="flex items-center gap-3 ml-2 border-l border-white/10 pl-3">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="w-3.5 h-3.5 text-slate-500 hover:text-white transition-colors" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-3.5 h-3.5 text-slate-500 hover:text-white transition-colors" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <Youtube className="w-3.5 h-3.5 text-slate-500 hover:text-white transition-colors" />
                  </a>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" aria-label="Location">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
