import React from 'react';

export default function Placements() {
  return (
    <section id="placements" className="bg-[#100b2e] py-24 px-8 relative overflow-hidden">
       {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="mb-16">
          <h2 className="text-[#00d2ff] font-semibold text-2xl mb-2">Digital Marketing Course in Bangalore</h2>
          <h3 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            with <span className="text-[#9d72ff]">100% placement</span> - here's the<br/>package band
          </h3>
          <p className="text-slate-300 mt-6 text-lg">Of our last 4 batches - 312 students total:</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Bars */}
          <div className="flex-1 space-y-12">
            {/* Bar 1 */}
            <div>
              <div className="flex justify-between items-end mb-3">
                <span className="text-white font-bold text-xl">₹3-5 LPA</span>
                <span className="text-white font-bold text-3xl leading-none">26%</span>
              </div>
              <div className="w-full h-10 bg-white/5 rounded-full overflow-hidden mb-3 relative backdrop-blur-sm border border-white/5">
                <div className="absolute top-0 left-0 h-full bg-[#3b82f6] rounded-full w-[26%] shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              </div>
              <div className="text-[#8e95b0] text-sm font-medium">Freshers joining agencies as executives</div>
            </div>

            {/* Bar 2 */}
            <div>
              <div className="flex justify-between items-end mb-3">
                <span className="text-white font-bold text-xl">₹5-8 LPA</span>
                <span className="text-white font-bold text-3xl leading-none">54%</span>
              </div>
              <div className="w-full h-10 bg-white/5 rounded-full overflow-hidden mb-3 relative backdrop-blur-sm border border-white/5">
                <div className="absolute top-0 left-0 h-full bg-[#7C5CFC] rounded-full w-[54%] shadow-[0_0_15px_rgba(124,92,252,0.5)]" />
              </div>
              <div className="text-[#8e95b0] text-sm font-medium">Mid-tier agencies & funded startups</div>
            </div>

            {/* Bar 3 */}
            <div>
              <div className="flex justify-between items-end mb-3">
                <span className="text-white font-bold text-xl">₹8-12 LPA</span>
                <span className="text-white font-bold text-3xl leading-none">16%</span>
              </div>
              <div className="w-full h-10 bg-white/5 rounded-full overflow-hidden mb-3 relative backdrop-blur-sm border border-white/5">
                <div className="absolute top-0 left-0 h-full bg-[#E07A5F] rounded-full w-[16%] shadow-[0_0_15px_rgba(224,122,95,0.5)]" />
              </div>
              <div className="text-[#8e95b0] text-sm font-medium">Jr Working pros switching careers, top performers</div>
            </div>

            {/* Bar 4 */}
            <div>
              <div className="flex justify-between items-end mb-3">
                <span className="text-white font-bold text-xl">₹12+ LPA</span>
                <span className="text-white font-bold text-3xl leading-none">4%</span>
              </div>
              <div className="w-full h-10 bg-white/5 rounded-full overflow-hidden mb-3 relative backdrop-blur-sm border border-white/5">
                <div className="absolute top-0 left-0 h-full bg-[#E63946] rounded-full w-[4%] shadow-[0_0_15px_rgba(230,57,70,0.5)]" />
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="w-full lg:max-w-[420px] pt-4">
            <div className="bg-[#12163b] rounded-3xl p-10 border border-white/5 shadow-2xl">
              <div className="space-y-10">
                <div className="flex justify-between items-center border-b border-white/10 pb-8">
                  <div className="text-[#8e95b0] text-xs font-bold tracking-widest uppercase">Average Package</div>
                  <div className="text-white text-3xl font-extrabold tracking-tight">₹5.6 LPA</div>
                </div>
                
                <div className="flex justify-between items-center border-b border-white/10 pb-8">
                  <div className="text-[#8e95b0] text-xs font-bold tracking-widest uppercase">Lowest Accepted</div>
                  <div className="text-white text-3xl font-extrabold tracking-tight">₹3.2 LPA</div>
                </div>
                
                <div className="flex justify-between items-start pt-2">
                  <div className="text-[#8e95b0] text-xs font-bold tracking-widest uppercase mt-2">Highest</div>
                  <div className="text-right">
                    <div className="text-white text-3xl font-extrabold tracking-tight mb-2">₹22 LPA</div>
                    <div className="text-[#8e95b0] text-xs font-medium">Flipkart, 2026</div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-slate-300 text-[17px] italic mt-8 leading-relaxed max-w-sm pl-2 opacity-90">
              We publish the floor as well as the ceiling.<br/>Most don't.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
