import React from 'react';
import { Phone, Mail, MapPin, Youtube, Instagram, Linkedin, Facebook, Send, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy border-t border-white/10 relative z-10 font-mono text-slate-300">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        
        {/* Main Footer Grid (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Branding */}
          <div className="flex flex-col text-left">
            <h3 className="text-white font-serif font-medium text-2xl mb-3 tracking-tight">Ashwini Trading Academy</h3>
            <p className="text-brand-primary font-serif italic text-base mb-6">Finance Made Simple.</p>
            <p className="text-slate-300 font-serif text-sm mb-6">Learn. Understand. Grow.</p>
            
            <div className="mb-6 inline-flex items-center w-fit px-4 py-2 rounded-full bg-brand-primary/5 border border-brand-primary/20 text-brand-primary font-bold text-[10px] tracking-widest uppercase shadow-sm">
              SEBI Registered Research Analyst
            </div>

            {/* Follow Us */}
            <h4 className="text-white font-bold tracking-wider uppercase text-xs mb-3">Follow Us</h4>
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

          {/* Column 2: Quick Links */}
          <div className="flex flex-col text-left lg:pl-8">
            <h4 className="text-white font-bold tracking-wider uppercase text-sm mb-8">Quick Links</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-brand-primary text-xs">›</span>
                <a href="#" className="hover:text-white transition-colors">Home</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-primary text-xs">›</span>
                <a href="#/about-us" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-primary text-xs">›</span>
                <a href="#/all-courses" className="hover:text-white transition-colors">Courses</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-primary text-xs">›</span>
                <a href="#/reviews" className="hover:text-white transition-colors">Reviews & Student Success</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-primary text-xs">›</span>
                <a href="#/college-collaboration" className="hover:text-white transition-colors">Corporate & College Training</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-primary text-xs">›</span>
                <a href="#/contact-us" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div className="flex flex-col text-left lg:pl-4">
            <h4 className="text-white font-bold tracking-wider uppercase text-sm mb-8">Courses</h4>
            <ul className="space-y-3.5 text-slate-300 text-xs">
              <li className="flex items-center gap-2">
                <span className="text-brand-primary text-xs">›</span>
                <a href="#/course-details/foundation" className="hover:text-white transition-colors">Stock Market Foundation</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-primary text-xs">›</span>
                <a href="#/course-details/fundamental-ai" className="hover:text-white transition-colors">Fundamental Analysis with AI</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-primary text-xs">›</span>
                <a href="#/course-details/technical-ai" className="hover:text-white transition-colors">Technical Analysis with AI</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-primary text-xs">›</span>
                <a href="#/course-details/technical-15" className="hover:text-white transition-colors">Technical Analysis (15 Days)</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-primary text-xs">›</span>
                <a href="#/course-details/technical-30-online" className="hover:text-white transition-colors">Technical Analysis Professional</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-primary text-xs">›</span>
                <a href="#/course-details/futures-options-15" className="hover:text-white transition-colors">Futures & Options (15 Days)</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-primary text-xs">›</span>
                <a href="#/course-details/futures-options-30-online" className="hover:text-white transition-colors">Futures & Options Professional</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-primary text-xs">›</span>
                <a href="#/course-details/basics-to-advanced" className="hover:text-white transition-colors">Basics to Advanced Program</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-primary text-xs">›</span>
                <a href="#/course-details/nism-certified" className="hover:text-white transition-colors">NISM Certified Program</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Business Hours */}
          <div className="flex flex-col text-left">
            <h4 className="text-white font-bold tracking-wider uppercase text-sm mb-8">Contact Information</h4>
            <ul className="space-y-5 text-slate-300 text-xs mb-8">
              <li className="flex items-center gap-3.5 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors shrink-0">
                  <Phone className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-primary transition-colors" />
                </div>
                <a href="tel:+918861756040" className="hover:text-white transition-colors">+91 88617 56040 | 9845961990</a>
              </li>
              <li className="flex items-center gap-3.5 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors shrink-0">
                  <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-primary transition-colors" />
                </div>
                <a href="mailto:info@ashwinitradingacademy.com" className="hover:text-white transition-colors break-all">info@ashwinitradingacademy.com</a>
              </li>
              <li className="flex items-start gap-3.5 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-primary transition-colors" />
                </div>
                <span className="leading-relaxed">2nd floor, 545/1, Chinmaya Mission Hospital Rd, Stage 1, Indiranagar, Bengaluru, Karnataka 560038</span>
              </li>
            </ul>

            {/* Business Hours */}
            <h4 className="text-white font-bold tracking-wider uppercase text-xs mb-3">Business Hours</h4>
            <div className="text-slate-400 text-xs space-y-1.5 bg-white/5 p-3.5 rounded-xl border border-white/10">
              <div className="flex justify-between">
                <span>Mon – Sat:</span>
                <span className="text-white font-semibold">9:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-white font-semibold">Closed / Appointment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Google Review Note & Back to Top */}
        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span>⭐⭐⭐⭐⭐</span>
            <span>Rated 4.9 on Google Business</span>
          </div>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 border border-white/10 rounded-xl transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to Top
          </button>
        </div>

        {/* Disclaimer Text */}
        <div className="mt-8 bg-black/10 border border-white/10 p-5 rounded-2xl text-[11px] text-slate-400 leading-relaxed text-justify">
          <strong className="text-white block mb-1">Disclaimer:</strong>
          The information provided on this website is for educational and informational purposes only. It should not be construed as financial, investment, legal, or tax advice. Investing and trading in financial markets involve risks, including the potential loss of capital. Please make your financial decisions responsibly and conduct independent research before investing.
        </div>

      </div>

      {/* Bottom Bar: Copyright and Legal */}
      <div className="border-t border-white/10 bg-black/20 text-[11px] text-slate-400">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="flex flex-wrap justify-center md:justify-start gap-6 font-bold uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>

          {/* Copyright */}
          <div className="tracking-widest uppercase text-center md:text-right font-medium">
            © 2026 Ashwini Trading Academy. All Rights Reserved. | Designed & Developed by Boost D Brands.
          </div>

        </div>
      </div>
    </footer>
  );
}
