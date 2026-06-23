import React from 'react';
import { Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#110B29] overflow-hidden pt-36 pb-20">
      {/* Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#392490]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#392490]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-20 items-center justify-between">
        
        {/* Left Column */}
        <div className="flex-1 text-white max-w-3xl">
          <div className="text-xs sm:text-sm font-bold tracking-widest text-[#d1d5db] uppercase mb-10 pl-6 border-l-[3px] border-[#d1d5db]/50 leading-relaxed">
            #1 DIGITAL MARKETING COURSE IN BANGALORE —<br />
            PLACEMENT-FIRST, AI-NATIVE.
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-[110px] font-extrabold leading-[0.85] tracking-tighter mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C37] to-[#FCA048] block mb-2">MASTER</span>
            <span className="block text-white mb-2">DIGITAL</span>
            <span className="block text-white mb-2">MARKETING</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] via-[#EC4899] to-[#D946EF] block mt-1">WITH AI</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl text-[15px]">
             {[
               "100% Placement Record",
               "AI-Native 2026 Curriculum",
               "Trainers with 5-10 yrs Exp",
               "Indiranagar, Next to Metro Station"
             ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#1C1844] border border-white/5 rounded-full px-5 py-3.5 shadow-sm">
                   <div className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full border border-emerald-400">
                     <Check className="w-3 h-3 text-emerald-400" strokeWidth={3} />
                   </div>
                   <span className="text-slate-100 font-bold tracking-wide">{feature}</span>
                </div>
             ))}
          </div>
        </div>

        {/* Right Column / Form Container */}
        <div className="w-full lg:w-[500px] shrink-0 xl:mr-10">
          <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-2xl relative">
            <h3 className="text-3xl font-extrabold text-[#1f2937] mb-2 tracking-tight">Apply for the Next Batch</h3>
            <div className="text-[#FF7B47] font-extrabold mb-8 text-2xl tracking-tight">Few Seats Left</div>

            <form className="space-y-5">
              <div className="space-y-2">
                <label className="text-[15px] font-bold text-slate-900">Name</label>
                <Input placeholder="Your full name" className="h-14 border-slate-200 bg-white text-base rounded-xl placeholder:text-slate-400" />
              </div>

              <div className="space-y-2">
                <label className="text-[15px] font-bold text-slate-900">Phone Number</label>
                <div className="flex gap-2">
                  <Input value="+91" readOnly className="w-20 bg-slate-50 text-slate-600 font-semibold h-14 text-center border-slate-200 rounded-xl" />
                  <Input placeholder="10-digit mobile" type="tel" className="flex-1 h-14 border-slate-200 bg-white text-base rounded-xl placeholder:text-slate-400" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[15px] font-bold text-slate-900">I am a...</label>
                <select className="w-full h-14 rounded-xl border border-slate-200 px-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-700">
                  <option>Choose one</option>
                  <option>Student</option>
                  <option>Working Professional</option>
                  <option>Entrepreneur</option>
                </select>
              </div>

              <Button className="w-full h-16 bg-gradient-to-r from-[#FF8845] to-[#FF6E30] hover:from-[#FF7A30] hover:to-[#E6561B] text-white font-black text-[17px] tracking-wide rounded-[14px] shadow-lg mt-6 border-0">
                START YOUR DM CAREER
              </Button>
              <div className="text-center text-sm text-slate-500 font-medium mt-4">
                No spam calls - ever.
              </div>
            </form>
          </div>

          {/* Badges below form */}
          <div className="flex gap-4 mt-6">
            <div className="flex-1 flex flex-col items-center justify-center relative bg-transparent rounded-xl p-4 min-h-[140px]">
                {/* Wreath icons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-90 pointer-events-none">
                   <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" className="text-[#FFB800] absolute transform scale-125">
                     <path d="M20 60 C20 40 30 25 45 15 C35 30 35 50 40 65 C25 55 15 70 25 85 C15 75 10 50 20 60" fill="currentColor"/>
                     <path d="M100 60 C100 40 90 25 75 15 C85 30 85 50 80 65 C95 55 105 70 95 85 C105 75 110 50 100 60" fill="currentColor"/>
                   </svg>
                </div>
                <div className="text-[#FFB800] font-extrabold text-center text-[13px] leading-tight z-10 tracking-widest uppercase">
                  TOP 10<br/>DIGITAL<br/>MARKETING<br/>ACADEMY IN<br/>INDIA
                </div>
            </div>
            
            <div className="flex-[1.5] bg-gradient-to-r from-[#3f4a86] to-[#46538a] rounded-[16px] p-5 shadow-inner border border-white/10 flex flex-col items-center justify-center text-center">
                <div className="text-white font-extrabold text-[13px] leading-[1.4] mb-3 tracking-wide">
                  RATED BASED ON BEST TRAINED FACULTY AND LATEST CURRICULUM
                </div>
                <div className="flex items-center justify-center gap-1">
                   <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                   <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                   <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
