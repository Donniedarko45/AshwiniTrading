import React from 'react';
import { X, Check } from 'lucide-react';

export default function InterviewReadiness() {
  const othersList = [
    "\"I've watched a few YouTube tutorials on Google Ads.\"",
    "Resume lists certifications but no projects.",
    "Can name the tools, can't operate them.",
    "Asked \"show me a campaign you've run\" → silence.",
    "Asked \"what's your CTR benchmark?\" → guesses.",
    "Talks about \"wanting to learn\" - sounds like a beginner."
  ];

  const ashwiniList = [
    "\"I've run 3 live campaigns for BookMyScans, Decfort, and [BRAND] during my course.\"",
    "Resume opens with project metrics: \"Reduced CPA from ₹1,200 to ₹380.\"",
    "Pulls out the phone and walks through a live Looker Studio dashboard.",
    "Asked \"what's your CTR benchmark?\" → \"Search 4-6%, display 0.5–1%, depending on industry.\"",
    "Discusses what they've already shipped - sounds like a junior practitioner, not a student.",
    "Walks out with the offer the same week."
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-brand-blue font-bold tracking-widest text-sm uppercase mb-4">
          INTERVIEW READINESS
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-[56px] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-10 md:mb-16 max-w-4xl">
          How most freshers walk into a digital marketing interview – <span className="text-brand-blue">and how Ashwini Trading Academy students walk in</span>
        </h2>
        
        <div className="rounded-3xl overflow-hidden mb-10 sm:mb-16">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Student presenting dashboard in an interview"
            className="w-full h-[250px] sm:h-[400px] md:h-[600px] object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 sm:mb-16">
          {/* Others Card */}
          <div className="bg-white border-t-[6px] border-red-400 rounded-2xl p-5 sm:p-8 md:p-12 shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-red-500 mb-8">How others attend interviews</h3>
            <ul className="space-y-6">
              {othersList.map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="mt-1 min-w-[24px] h-6 flex items-center justify-center rounded-full bg-red-100 text-red-500">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-700 text-base sm:text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ashwini Trading Card */}
          <div className="bg-white border-t-[6px] border-brand-blue rounded-2xl p-5 sm:p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">How Ashwini Trading Academy students attend interviews</h3>
            <ul className="space-y-6">
              {ashwiniList.map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="mt-1 min-w-[24px] h-6 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-700 text-base sm:text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-slate-500 text-base sm:text-xl font-medium max-w-2xl mx-auto italic">
          The difference isn't the certificate. It's what you can do with your phone open on the table.
        </p>
      </div>
    </section>
  );
}
