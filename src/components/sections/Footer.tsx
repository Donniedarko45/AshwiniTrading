import React from 'react';
import { Phone, Mail, MapPin, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-bg-dark text-slate-400 py-16 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          
          {/* Column 1: About */}
          <div className="md:col-span-5">
            <h3 className="text-white font-bold text-lg mb-6">Ashwini Trading Academy</h3>
            <p className="text-slate-400 leading-relaxed text-sm font-semibold max-w-md">
              Empowering Individuals Through Financial Education, building financial literacy, confidence, skills, and future-ready career opportunities.
            </p>
          </div>

          {/* Column 2: Courses */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6">Courses</h3>
            <ul className="space-y-4 text-slate-400 text-sm font-semibold">
              <li>Advanced Trading Strategies (Duration: 15 Days)</li>
              <li>Certified Trading Program (Duration: 60 Days)</li>
              <li>Technical Analysis Mastery (Duration: 25 Days)</li>
              <li>Free Stock Market Workshop</li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="md:col-span-4">
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-slate-400 text-sm font-semibold">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-300 shrink-0" />
                <a href="tel:+919845961990" className="hover:text-white transition-colors">+91 9845961990</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-300 shrink-0" />
                <a href="mailto:info@ashwinitradingacademy.com" className="hover:text-white transition-colors">info@ashwinitradingacademy.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                <span>545, 2nd Floor, Chinmaya Mission Hospital Rd, Stage 1, Indiranagar, Bengaluru, Karnataka 560038</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Copyright, Links, Socials Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-slate-400 font-semibold">
            
            {/* Copyright Stacking */}
            <div>
              <div>© 2026 Ashwini Trading Academy.</div>
              <div>All Rights Reserved.</div>
            </div>

            {/* Legal / Policy Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-md bg-neutral-950 border border-white/5 flex items-center justify-center text-white hover:bg-neutral-900 hover:scale-105 transition-all" 
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-md bg-neutral-950 border border-white/5 flex items-center justify-center text-white hover:bg-neutral-900 hover:scale-105 transition-all" 
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Bottom-most Course Quick Links */}
          <div className="mt-8 text-[13px] text-slate-500 font-semibold leading-relaxed text-center flex flex-wrap justify-center gap-x-8 gap-y-2">
            <span>Advanced Trading Strategies (Duration: 15 Days)</span>
            <span>Certified Trading Program (Duration: 60 Days)</span>
            <span>Technical Analysis Mastery (Duration: 25 Days)</span>
            <span>Free Stock Market Workshop</span>
          </div>

        </div>

      </div>
    </footer>
  );
}

