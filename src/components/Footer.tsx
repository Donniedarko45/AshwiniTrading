import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0A11] text-slate-400 py-16 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 cursor-pointer group">
              <div className="text-white text-3xl font-extrabold flex items-center gap-2 tracking-tight">
                 <svg className="w-8 h-8 flex-shrink-0 transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M11.5 2.5L2 8.5L11.5 14.5L21 8.5L11.5 2.5Z" fill="#3B82F6"/>
                   <path d="M2.5 13.5L11.5 19L20.5 13.5" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M2.5 18L11.5 23.5L20.5 18" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
                 <span className="leading-none">BlueTick<br /><span className="text-lg font-medium tracking-normal text-slate-400">Academy</span></span>
              </div>
            </div>
            <p className="text-slate-500 mb-8 max-w-sm leading-relaxed text-sm font-medium">
              Empowering the next generation of tech leaders with industry-aligned education, real-world projects, and dedicated career support.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-slate-400">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors text-slate-400">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors text-slate-400">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors text-slate-400">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest opacity-90">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Career Support</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Hire From Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest opacity-90">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cookie Guidelines</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest opacity-90">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">support@bluetickacademy.com</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">+91 9606 9955 25</li>
              <li className="text-slate-500 pt-2 leading-relaxed">Indiranagar, Bangalore<br/>Next to Metro Station</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center md:text-left md:flex justify-between items-center text-[11px] uppercase tracking-widest font-bold text-slate-500">
          <p>&copy; {new Date().getFullYear()} BLUETICK ACADEMY. ALL RIGHTS RESERVED.</p>
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
