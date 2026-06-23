import React from 'react';

export default function WhyHireUs() {
  return (
    <section className="bg-[#FCFAFE] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-[56px] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl">
          Why <span className="text-[#8B5CF6]">500+</span> Bangalore companies hire our <span className="text-[#8B5CF6]">digital marketing</span> graduates first
        </h2>
        <p className="text-slate-600 text-lg md:text-xl font-medium mb-12">
          Three reasons hiring managers told us they keep coming back:
        </p>
        
        <div className="w-full h-[500px] bg-slate-200 rounded-[32px] overflow-hidden shadow-2xl">
           <img 
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Hiring manager shaking hands with a successful graduate" 
              className="w-full h-full object-cover object-top" 
            />
        </div>
      </div>
    </section>
  );
}
