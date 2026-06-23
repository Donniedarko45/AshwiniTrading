import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-bg-dark text-slate-400 py-16 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6 cursor-pointer group">
            <img
              src="/logo.png"
              alt="Ashwini Trading Academy – SEBI Registered RA"
              className="h-16 w-16 object-contain flex-shrink-0 transition-transform group-hover:scale-105 drop-shadow-lg"
            />
            <div className="text-white flex flex-col leading-tight">
              <span className="text-[17px] font-extrabold tracking-tight">Ashwini Trading</span>
              <span className="text-sm font-semibold tracking-wide text-slate-400">Academy</span>
            </div>
          </div>
            <p className="text-slate-500 mb-8 max-w-sm leading-relaxed text-sm font-medium">
              Ashwini Trading Academy — a SEBI Registered Research Analyst empowering India's next generation of stock market and finance professionals.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-slate-400">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors text-slate-400">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors text-slate-400">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors text-slate-400">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest opacity-90">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-brand-blue transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-brand-blue transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Career Support</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Hire From Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest opacity-90">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Cookie Guidelines</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest opacity-90">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="hover:text-brand-blue transition-colors cursor-pointer">support@ashwinitrading.com</li>
              <li className="hover:text-brand-blue transition-colors cursor-pointer">+91 9606 9955 25</li>
              <li className="text-slate-500 pt-2 leading-relaxed">Indiranagar, Bangalore<br/>Next to Metro Station</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center md:text-left md:flex justify-between items-center text-[11px] uppercase tracking-widest font-bold text-slate-500">
          <p>&copy; {new Date().getFullYear()} ASHWINI TRADING ACADEMY. ALL RIGHTS RESERVED.</p>
          <div className="mt-4 md:mt-0 flex gap-6 justify-center">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
