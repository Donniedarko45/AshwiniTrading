import React from 'react';
import { hiringBrandCategories } from '@/data/alumni';

export default function Alumni() {
  return (
    <section id="placements" className="bg-[#EAF3FF] py-32 relative overflow-hidden">
      {/* Light dot pattern background layer */}
       <div 
        className="absolute inset-0 opacity-[0.2]" 
        style={{
          backgroundImage: 'radial-gradient(#1e3a8a 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-16">
          Trusted by 10,000+ digital marketers<br/>across India
        </h2>

        <div className="mb-4 text-brand-blue font-bold text-sm tracking-widest uppercase">
          OUR ALUMNI WORK AT
        </div>
        
        <div className="space-y-16 mt-16">
          {hiringBrandCategories.map((category, index) => (
            <div key={index}>
              <div className="inline-flex items-center justify-center border border-blue-200 bg-blue-100/80 text-blue-800 rounded-full px-5 py-2 text-xs font-bold tracking-widest uppercase mb-10">
                {category.categoryName}
              </div>
              <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-70 mix-blend-multiply hover:opacity-100 transition-all duration-500">
                {category.brands.map((brand, bIdx) => (
                  <span key={bIdx} className={`text-2xl md:text-3xl ${brand.boldClass} ${brand.colorClass} flex items-center gap-2`}>
                    {brand.logoSvg === 'adobe' && (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.54 0L24 24H14l-4.56-11.45L14.54 0zM9.46 0L0 24h10l4.56-11.45L9.46 0z" />
                      </svg>
                    )}
                    {brand.logoSvg === 'ola' && (
                      <div className="w-6 h-6 rounded-full bg-[#CBE903] border-[6px] border-black" />
                    )}
                    {brand.logoSvg === 'pharmeasy' && (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    )}
                    {brand.logoSvg === 'bookmyscans' && (
                      <div className="w-4 h-4 rounded-full bg-cyan-400" />
                    )}
                    {brand.logoSvg === 'edumerge' && (
                      <span className="text-2xl font-bold text-orange-500 italic">
                        <span className="text-blue-700">edu</span>merge
                      </span>
                    )}
                    {brand.logoSvg === 'porter' && (
                      <span>PORTER<span className="text-blue-500">°</span></span>
                    )}
                    {brand.logoSvg === 'homelane' && (
                      <div className="flex items-center gap-2 leading-none">
                        <div className="w-8 h-8 bg-red-500 shrink-0" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
                        <span>Home<br />Lane</span>
                      </div>
                    )}
                    
                    {/* Render name if not custom styled as SVG replacement in the map above */}
                    {!['edumerge', 'porter', 'homelane'].includes(brand.logoSvg || '') && brand.name}
                    
                    {brand.hasSpecialIndicator && (
                      <span className="text-purple-600 text-xl align-top">{brand.specialText}</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
