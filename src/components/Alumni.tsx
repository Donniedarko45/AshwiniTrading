import React from 'react';

export default function Alumni() {
  return (
    <section className="bg-[#EAF3FF] py-32 relative overflow-hidden">
      {/* Light dot pattern background layer */}
       <div 
        className="absolute inset-0 opacity-[0.2]" 
        style={{
          backgroundImage: 'radial-gradient(#1e3a8a 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="max-w-6xl mx-auto px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-16">
          Trusted by 10,000+ digital marketers<br/>across India
        </h2>

        <div className="mb-4 text-blue-600 font-bold text-sm tracking-widest uppercase">
          OUR ALUMNI WORK AT
        </div>
        
        <div className="space-y-16 mt-16">
           {/* Section 1 */}
           <div>
              <div className="inline-flex items-center justify-center border border-blue-200 bg-blue-100/80 text-blue-800 rounded-full px-5 py-2 text-xs font-bold tracking-widest uppercase mb-10">
                MNCS & MAANG
              </div>
              <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-70 mix-blend-multiply hover:opacity-100 transition-all duration-500">
                 <span className="text-3xl font-bold text-slate-700">Microsoft</span>
                 <span className="text-3xl font-bold text-red-600 flex items-center gap-2">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M14.54 0L24 24H14l-4.56-11.45L14.54 0zM9.46 0L0 24h10l4.56-11.45L9.46 0z"/></svg>
                    Adobe
                 </span>
                 <span className="text-3xl font-bold text-slate-800">accenture<span className="text-purple-600 text-xl align-top">{'>'}</span></span>
              </div>
           </div>

           {/* Section 2 */}
           <div>
              <div className="inline-flex items-center justify-center border border-blue-200 bg-blue-100/80 text-blue-800 rounded-full px-5 py-2 text-xs font-bold tracking-widest uppercase mb-10">
                FUNDED STARTUPS
              </div>
              <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16 opacity-70 mix-blend-multiply hover:opacity-100 transition-all">
                 <span className="text-2xl font-bold text-purple-700">PhonePe</span>
                 <span className="text-2xl font-bold text-sky-500">Paytm</span>
                 <span className="text-3xl font-extrabold text-pink-600 tracking-tighter italic">NYKAA</span>
                 <span className="text-2xl text-slate-800 font-bold flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-[#CBE903] border-[6px] border-black"/> OLA</span>
                 <span className="text-2xl font-bold text-[#000042]">lenskart</span>
                 <span className="text-2xl font-bold text-emerald-500 flex items-center gap-1">
                   <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                   PharmEasy
                 </span>
                 <span className="text-2xl font-bold text-green-600">ninjacart</span>
              </div>
           </div>

           {/* Section 3 */}
           <div>
              <div className="inline-flex items-center justify-center border border-blue-200 bg-blue-100/80 text-blue-800 rounded-full px-5 py-2 text-xs font-bold tracking-widest uppercase mb-10">
                HIRING PARTNERS
              </div>
              <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-20 opacity-70 mix-blend-multiply hover:opacity-100 transition-all">
                 <span className="text-xl font-bold text-purple-600 flex items-center gap-1"><div className="w-4 h-4 rounded-full bg-cyan-400"/>Bookmyscans</span>
                 <span className="text-2xl font-serif font-bold text-slate-600 tracking-wider">DECFORT</span>
                 <span className="text-2xl font-bold text-orange-500 italic"><span className="text-blue-700">edu</span>merge</span>
                 <span className="text-2xl font-bold text-slate-800 tracking-tight">PORTER<span className="text-blue-500">°</span></span>
                 <span className="text-2xl font-bold text-red-500 flex leading-none gap-2">
                    <div className="w-8 h-8 bg-red-500 shrink-0" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}/>
                    Home<br/>Lane
                 </span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
