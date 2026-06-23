import React from 'react';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-500 py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 text-white p-2 w-10 h-10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-900">
                Bluetick<span className="text-blue-600">Academy</span>
              </span>
            </div>
            <p className="text-slate-500 mb-6 max-w-sm leading-relaxed text-sm">
              Empowering the next generation of tech leaders with industry-aligned education, real-world projects, and dedicated career support.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-400 hover:text-blue-600">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-400 hover:text-blue-600">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-400 hover:text-blue-600">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-400 hover:text-blue-600">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-blue-600 transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Career Support</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Hire From Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Cookie Guidelines</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>support@bluetickacademy.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="text-slate-400">123 Innovation Drive,<br/>Tech City, TC 90210</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-100 text-center md:text-left md:flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-slate-400">
          <p>&copy; {new Date().getFullYear()} BLUETICK ACADEMY. ALL RIGHTS RESERVED.</p>
          <div className="mt-4 md:mt-0 flex gap-6 justify-center">
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
