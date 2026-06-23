import React from 'react';
import { Check } from 'lucide-react';

export default function Certifications() {
  const certs = [
    { provider: "GOOGLE", color: "text-amber-600 bg-amber-50", title: "Ads Search Certification" },
    { provider: "GOOGLE", color: "text-amber-600 bg-amber-50", title: "Ads Display Certification" },
    { provider: "GOOGLE", color: "text-amber-600 bg-amber-50", title: "Ads Video Certification" },
    { provider: "GOOGLE", color: "text-amber-600 bg-amber-50", title: "Analytics (GA4)" },
    { provider: "MICROSOFT", color: "text-blue-600 bg-blue-50", title: "Bing Ads Search" },
    { provider: "META", color: "text-purple-600 bg-purple-50", title: "Blueprint Digital Marketing" },
    { provider: "HUBSPOT", color: "text-orange-600 bg-orange-50", title: "Inbound Marketing" },
    { provider: "HUBSPOT", color: "text-orange-600 bg-orange-50", title: "Content Marketing" },
    { provider: "HUBSPOT", color: "text-orange-600 bg-orange-50", title: "Email Marketing" },
    { provider: "SEMRUSH", color: "text-pink-600 bg-pink-50", title: "SEO Toolkit" },
    { provider: "GOOGLE", color: "text-amber-600 bg-amber-50", title: "Digital Garage" },
    { provider: "LINKEDIN", color: "text-blue-700 bg-blue-50", title: "Marketing Fundamentals" },
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
          Get Certified by <span className="text-[#EA4335]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span> &<br/>
          <span className="text-[#00A4EF]">Microsoft</span>
        </h2>
        <p className="text-slate-600 text-lg font-medium mb-16 max-w-2xl">
          Industry certifications for Google Ads & Bing Ads + 12 more globally recognized certifications included.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
             <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm relative hover:shadow-md transition-shadow">
                <div className="absolute top-4 right-4 bg-emerald-500 rounded-full w-5 h-5 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <div className={`text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-sm w-fit mb-4 ${cert.color}`}>
                   {cert.provider}
                </div>
                <h4 className="text-[17px] font-bold text-slate-900 pr-4">{cert.title}</h4>
             </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 text-slate-800 p-6 rounded-2xl font-medium border border-blue-100 flex gap-2">
            <span className="font-extrabold">12 certifications.</span> All recognized by recruiters and listable on LinkedIn. We don't charge extra - they're part of the program.
        </div>
      </div>
    </section>
  );
}
