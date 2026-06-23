import React from 'react';

export default function DayInLife() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4">
          INSIDE A BLUETICK TUESDAY
        </div>
        <h2 className="text-4xl md:text-[56px] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-12 max-w-4xl">
          What a Tuesday at BlueTick actually looks like
        </h2>

        <div className="relative mb-20">
          <div className="rounded-3xl overflow-hidden shadow-xl h-[400px] md:h-[600px] relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Students collaborating in class"
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay to ensure text readability if needed */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          <div className="md:absolute bottom-[-40px] left-1/2 md:-translate-x-1/2 w-full md:w-[80%] max-w-3xl bg-white rounded-2xl p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 mt-[-60px] md:mt-0 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <div className="text-blue-600 font-bold text-lg hidden md:block">
                Batch size: capped at 24.
              </div>
              <div className="text-blue-600 font-bold text-lg hidden md:block">
                Trainer-to-student ratio: 1:15.
              </div>
              <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2 md:ml-auto w-max">
                Tuesday <span className="w-1 h-1 rounded-full bg-blue-300" /> 10:30 AM
              </div>
            </div>
            
            {/* Mobile shows these in block instead */}
            <div className="text-blue-600 font-bold text-lg mb-4 md:hidden">
              Batch size: capped at 24. <br/>Trainer-to-student ratio: 1:15.
            </div>

            <p className="text-slate-700 text-lg md:text-xl leading-relaxed">
              Students reviewing each other's live Google Ads campaigns. Trainer pulls up a real-time performance dashboard from one of his agency accounts. Class breaks into groups of 4 to optimize a real client funnel due tomorrow.
            </p>
          </div>
        </div>

        <p className="text-center text-slate-500 text-xl md:text-2xl font-medium max-w-3xl mx-auto italic mt-12 md:mt-24">
          No theory lectures. Every session is a live build. Every Friday is portfolio review.
        </p>
      </div>
    </section>
  );
}
