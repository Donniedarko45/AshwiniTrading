import React from 'react';
import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 max-w-[1600px] mx-auto">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="text-white text-3xl font-extrabold flex items-center gap-2 tracking-tight">
           <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M11.5 2.5L2 8.5L11.5 14.5L21 8.5L11.5 2.5Z" fill="#3B82F6"/>
             <path d="M2.5 13.5L11.5 19L20.5 13.5" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M2.5 18L11.5 23.5L20.5 18" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
           <span className="leading-none">BlueTick<br /><span className="text-lg font-medium tracking-normal text-slate-200">Academy</span></span>
        </div>
      </div>

      {/* Nav Links */}
      <div className="hidden lg:flex items-center gap-8 text-white text-[15px] font-medium tracking-wide">
        <a href="#placements" className="hover:text-blue-400 transition-colors">Placements</a>
        <a href="#courses" className="hover:text-blue-400 transition-colors">Courses</a>
        <a href="#curriculum" className="hover:text-blue-400 transition-colors">Curriculum</a>
        <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
        <a href="#trainers" className="hover:text-blue-400 transition-colors">Trainers</a>
        <a href="#faqs" className="hover:text-blue-400 transition-colors">FAQs</a>
      </div>

      {/* Contact Buttons */}
      <div className="hidden lg:flex items-center gap-4">
        <button className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-bold tracking-wide hover:bg-white/10 transition-colors bg-[#231E44]">
          Hire from us
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C1A3F] border border-white/15 text-white text-sm font-bold tracking-wide hover:bg-[#2C2A4F] transition-colors">
          <div className="bg-green-500 rounded-full p-1 w-5 h-5 flex items-center justify-center">
            <Phone className="w-3 h-3 text-white fill-white" />
          </div>
          +91-9606 9955 25
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C1A3F] border border-white/15 text-white text-sm font-bold tracking-wide hover:bg-[#2C2A4F] transition-colors">
           <div className="bg-white rounded-full p-1 w-5 h-5 flex items-center justify-center">
             <Phone className="w-3 h-3 text-slate-800 fill-slate-800" />
           </div>
          +91-9606 9955 25
        </button>
      </div>
    </nav>
  );
}
