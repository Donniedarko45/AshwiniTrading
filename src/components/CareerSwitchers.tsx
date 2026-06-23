import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function CareerSwitchers() {
  const switchers = [
    {
      name: "Vinay K.",
      meta: "March 2025 batch · Switched at age 27",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      fromTitle: "BPO at Infosys",
      fromSalary: "₹3.2 LPA",
      toTitle: "Performance Marketing Analyst at Razorpay",
      toSalary: "₹7.8 LPA",
      quote: "I was 5 years into a BPO job that was going nowhere. 90 days here, 2.4x salary jump."
    },
    {
      name: "Megha Raghupathy",
      meta: "January 2025 batch · Switched at age 25",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      fromTitle: "B.Tech graduate at TCS support",
      fromSalary: "₹4.1 LPA",
      toTitle: "SEO Specialist at WATConsult",
      toSalary: "₹6.5 LPA",
      quote: "I never used my engineering degree. Digital marketing was the first work I actually enjoyed."
    },
    {
      name: "Fazil MD",
      meta: "November 2024 batch · Switched at age 28",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      fromTitle: "School teacher",
      fromSalary: "₹2.8 LPA",
      toTitle: "Content & Email Marketing at Mamaearth",
      toSalary: "₹5.2 LPA",
      quote: "I was the oldest in my batch by 4 years. Nobody made it weird. We were all there for the same reason."
    }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4">
          CAREER SWITCHERS
        </div>
        <h2 className="text-4xl md:text-[56px] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl">
          Switching from a non-marketing job? You're not alone – <span className="text-blue-600">41%</span> of our students are.
        </h2>
        <p className="text-lg text-slate-600 mb-16 max-w-3xl">
          In our last 4 batches, 41% of students came from non-marketing backgrounds - IT, BPO, sales, finance, even teaching.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {switchers.map((person, idx) => (
            <div key={idx} className="bg-white border text-left rounded-3xl p-6 md:p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src={person.image} 
                  alt={person.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{person.name}</h3>
                  <p className="text-slate-500 text-xs mt-0.5">{person.meta}</p>
                </div>
              </div>

              {/* Journey Box */}
              <div className="bg-slate-50 rounded-2xl p-6 mb-8 flex-1 border border-slate-100">
                <div className="mb-6">
                  <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-1">FROM</div>
                  <div className="font-bold text-slate-900">{person.fromTitle}</div>
                  <div className="text-slate-600 font-semibold">{person.fromSalary}</div>
                </div>

                <div className="flex justify-center mb-6">
                  <ArrowDown className="w-5 h-5 text-slate-400" />
                </div>

                <div>
                  <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-1">TO</div>
                  <div className="font-bold text-slate-900 mb-0.5">{person.toTitle}</div>
                  <div className="text-emerald-600 font-bold">{person.toSalary}</div>
                </div>
              </div>

              {/* Quote */}
              <div className="border-t border-slate-200 border-dashed pt-6 mt-auto">
                <p className="text-slate-600 text-sm font-medium italic leading-relaxed">
                  {person.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-lg font-medium max-w-2xl mx-auto italic">
          Working pros switching careers: weekend batches + Sunday mock interviews are built specifically for you.
        </p>
      </div>
    </section>
  );
}
