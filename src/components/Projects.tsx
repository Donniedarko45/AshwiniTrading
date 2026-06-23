import React from 'react';

export default function Projects() {
  const projects = [
    {
      type: "LIVE CLIENT PROJECT",
      title: "AI-Powered Content Summarizer",
      author: "Priya R.",
      company: "Flipkart",
      tags: ["GPT-4", "Custom GPT", "Notion AI"],
      desc: <>Custom GPT trained on brand voice. Now generating <span className="text-blue-600 font-bold">40+ marketing assets</span> per week internally.</>
    },
    {
      type: "LIVE CLIENT PROJECT",
      title: "n8n Workflow Automation",
      author: "Arjun M.",
      company: "BookMyScans",
      tags: ["n8n", "WhatsApp Business API", "Google Sheets"],
      desc: <>Automated lead-to-WhatsApp pipeline. Cut response time from <span className="text-blue-600 font-bold">4 hours to 90 seconds</span>.</>
    },
    {
      type: "LIVE CLIENT PROJECT",
      title: "Performance Marketing Campaign",
      author: "Sneha K.",
      company: "Decfort",
      tags: ["Meta Ads", "GA4", "Looker Studio"],
      desc: <>Meta Advantage+ campaign at ₹2L monthly spend. Generated <span className="text-blue-600 font-bold">312 qualified leads at ₹640 CPL</span>.</>
    },
    {
      type: "LIVE CLIENT PROJECT",
      title: "SEO Ranking Project",
      author: "Rahul V.",
      company: "Amazon",
      tags: ["Ahrefs", "GSC", "AI-assisted content briefs"],
      desc: <>Moved <span className="text-blue-600 font-bold">8 commercial keywords</span> from page 3 to page 1 in 45 days.</>
    },
    {
      type: "LIVE CLIENT PROJECT",
      title: "Landing Page Creation & Deployment",
      author: "Anjali D.",
      company: "Razorpay",
      tags: ["Webflow", "GA4", "Hotjar"],
      desc: <>Built and shipped 4 conversion-optimized pages with A/B tests. Conversion rate improved <span className="text-blue-600 font-bold">from 1.2% to 4.5%</span>.</>
    },
    {
      type: "LIVE CLIENT PROJECT",
      title: "AI Chatbot for Customer Support",
      author: "Karthik P.",
      company: "Ola",
      tags: ["Claude API", "Make.com", "Intercom"],
      desc: <>Claude-powered chatbot handling <span className="text-blue-600 font-bold">60% of Tier 1 support queries</span> automatically.</>
    }
  ];

  return (
    <section id="projects" className="bg-[#FFFDF7] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl">
          Real work our students built – for real companies
        </h2>
        <p className="text-slate-600 text-lg font-medium mb-16 max-w-3xl leading-relaxed">
          Every project below was deployed, used, and measured by Companies.<br/>
          Not just a simulation. Your project list will look like this in 90 days.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {projects.map((proj, i) => (
              <div key={i} className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col h-full">
                 <div className="text-[#FF7B47] text-[10px] font-extrabold tracking-widest uppercase flex items-center gap-2 mb-4 bg-orange-50 w-fit px-2.5 py-1 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF7B47]" />
                    {proj.type}
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">{proj.title}</h3>
                 <p className="text-sm font-medium text-slate-600 mb-6">
                   Built by <span className="font-bold text-slate-900">{proj.author}</span> for <span className="font-bold text-slate-900">{proj.company}</span>
                 </p>
                 
                 <div className="flex flex-wrap gap-2 mb-8">
                    {proj.tags.map((tag, j) => (
                       <span key={j} className="bg-slate-100 text-slate-500 font-bold text-[11px] px-3 py-1 rounded-full">{tag}</span>
                    ))}
                 </div>

                 <p className="text-slate-600 text-[15px] font-medium mt-auto leading-relaxed">
                    {proj.desc}
                 </p>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
}
