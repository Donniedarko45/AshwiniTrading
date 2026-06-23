import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function AlumniGrid() {
  const alumni = [
    { name: "Bright Prabahar", date: "Mar'26", role: "CRO Analyst", company: "Ola", salary: "₹18–19 LPA range", image: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
    { name: "Jeevan", date: "Feb'26", role: "Performance Marketing Analyst", company: "Flipkart", salary: "₹7–9 LPA range", image: "https://i.pravatar.cc/150?u=a042581f4e29026024d" },
    { name: "Keerthi Vasan", date: "Mar'26", role: "Marketing Automation Specialist", company: "Ernst & Young", salary: "₹6–8 LPA range", image: "https://i.pravatar.cc/150?u=a04258114e29026702d" },
    { name: "Harini P", date: "Jan'26", role: "Performance Marketing Specialist", company: "Amazon", salary: "₹7–9 LPA range", image: "https://i.pravatar.cc/150?u=a048581f4e29026701d" },
    { name: "Krishna", date: "Feb'26", role: "Digital Marketing Executive", company: "The Website Makers", salary: "₹4–5 LPA range", image: "https://i.pravatar.cc/150?u=a042581f4e29026704b" },
    { name: "Prithvi", date: "Jan'26", role: "Performance Marketing Executive", company: "Responsive Media Tech Services", salary: "₹5–6 LPA range", image: "https://i.pravatar.cc/150?u=a042581f4e29026703d" },
    { name: "Lekha", date: "Apr'26", role: "SEO Strategist", company: "Velvet", salary: "₹6–8 LPA range", image: "https://i.pravatar.cc/150?u=a042581f4e29026704e" },
    { name: "Karthik", date: "Apr'26", role: "Growth Marketer", company: "Brandcrest", salary: "₹5–6 LPA range", image: "https://i.pravatar.cc/150?u=a042581f4e29026704c" },
    { name: "Sanam", date: "Feb'26", role: "Social Media Marketing Executive", company: "Hashconnect", salary: "₹4–5 LPA range", image: "https://i.pravatar.cc/150?u=a042581f4e29026704f" },
  ];

  return (
    <section className="bg-[#F2F7FF] py-24 relative" style={{
        backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
        backgroundSize: '40px 40px'
    }}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Where our 2025–26 batches landed – real names, real companies, real packages
            </h2>
            <p className="text-slate-600 text-lg font-medium">Every name below is a verified BlueTick alumnus.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {alumni.map((alum, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all flex flex-col items-start">
                   <img src={alum.image} alt={alum.name} className="w-16 h-16 rounded-full object-cover mb-4 ring-2 ring-slate-100" />
                   <h4 className="text-xl font-bold text-slate-900">{alum.name}</h4>
                   <p className="text-xs font-medium text-slate-500 mb-4 tracking-wider">{alum.date}</p>
                   <p className="text-slate-700 font-medium mb-6 min-h-[48px] text-[15px] leading-relaxed">
                      {alum.role} @ <span className="font-bold text-slate-900">{alum.company}</span>
                   </p>
                   <div className="inline-block bg-[#F0FDF4] text-[#16A34A] font-bold text-xs px-3 py-1.5 rounded-full border border-[#bbf7d0]">
                      {alum.salary}
                   </div>
                </div>
             ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-br from-[#0B3D91] to-[#011C54] text-white rounded-[32px] p-8 md:p-10 w-fit shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-extrabold text-[#00E5FF] tracking-tighter mb-1 leading-none">+10,000</div>
                <div className="text-2xl font-bold mb-5 tracking-tight text-white">more placed</div>
                <p className="text-blue-100 max-w-[280px] text-sm leading-relaxed font-medium">
                  10,000+ students placed over the last 9 years - and 400+ in just the last 3 months.
                </p>
              </div>
          </div>

          {/* Bottom CTA block */}
          <div className="max-w-4xl mx-auto text-center mt-32 mb-10">
             <h2 className="text-4xl md:text-[44px] font-extrabold text-slate-900 mb-4 tracking-tight">
                These names could be <span className="text-[#8B5CF6] underline decoration-[5px] underline-offset-4">yours</span> in 5 months.
             </h2>
             <p className="text-slate-600 font-medium mb-8 text-lg">Few seats left for the upcoming batch.</p>
             <div className="inline-flex items-center gap-2 text-[#059669] font-bold text-[13px] bg-white border border-[#A7F3D0] px-4 py-2 rounded-full mb-12 shadow-sm tracking-wide">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                312 placed alumni in last 4 months
             </div>

             <div className="bg-white rounded-[24px] p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] flex flex-col md:flex-row gap-4 items-end max-w-3xl mx-auto border border-slate-100">
                <div className="w-full md:w-[35%] text-left">
                  <label className="text-sm font-bold text-slate-900 mb-2 block">Name</label>
                  <Input placeholder="Your full name" className="h-14 border-slate-200 bg-white text-base rounded-xl placeholder:text-slate-400" />
                </div>
                <div className="w-full md:w-[35%] text-left">
                  <label className="text-sm font-bold text-slate-900 mb-2 block">Phone</label>
                  <div className="flex gap-2">
                    <Input value="+91" readOnly className="w-16 bg-slate-50 text-slate-600 font-semibold h-14 text-center border-slate-200 px-0 rounded-xl" />
                    <Input placeholder="10-digit mobile" type="tel" className="flex-1 h-14 border-slate-200 bg-white text-base rounded-xl placeholder:text-slate-400" />
                  </div>
                </div>
                <div className="w-full md:w-[30%]">
                   <Button className="w-full h-14 bg-[#FF7B47] hover:bg-[#E6561B] text-white border-0 font-black text-[15px] tracking-wide rounded-xl shadow-lg">
                      START YOUR DM CAREER →
                   </Button>
                </div>
             </div>
             
             <div className="text-slate-500 text-sm font-medium mt-6">
                <span className="text-blue-600 font-bold">7 seats left</span> · No spam · Reply within 15 mins
             </div>
          </div>

        </div>
    </section>
  );
}
