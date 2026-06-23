import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { staggerContainer, scaleUp } from '../lib/animations';

export default function Certifications() {
  const certs = [
    { provider: "GOOGLE", color: "text-amber-600 bg-amber-50", border: 'group-hover:border-amber-200', title: "Ads Search Certification" },
    { provider: "GOOGLE", color: "text-amber-600 bg-amber-50", border: 'group-hover:border-amber-200', title: "Ads Display Certification" },
    { provider: "GOOGLE", color: "text-amber-600 bg-amber-50", border: 'group-hover:border-amber-200', title: "Ads Video Certification" },
    { provider: "GOOGLE", color: "text-amber-600 bg-amber-50", border: 'group-hover:border-amber-200', title: "Analytics (GA4)" },
    { provider: "MICROSOFT", color: "text-blue-600 bg-blue-50", border: 'group-hover:border-blue-200', title: "Bing Ads Search" },
    { provider: "META", color: "text-purple-600 bg-purple-50", border: 'group-hover:border-purple-200', title: "Blueprint Digital Marketing" },
    { provider: "HUBSPOT", color: "text-orange-600 bg-orange-50", border: 'group-hover:border-orange-200', title: "Inbound Marketing" },
    { provider: "HUBSPOT", color: "text-orange-600 bg-orange-50", border: 'group-hover:border-orange-200', title: "Content Marketing" },
    { provider: "HUBSPOT", color: "text-orange-600 bg-orange-50", border: 'group-hover:border-orange-200', title: "Email Marketing" },
    { provider: "SEMRUSH", color: "text-pink-600 bg-pink-50", border: 'group-hover:border-pink-200', title: "SEO Toolkit" },
    { provider: "GOOGLE", color: "text-amber-600 bg-amber-50", border: 'group-hover:border-amber-200', title: "Digital Garage" },
    { provider: "LINKEDIN", color: "text-blue-700 bg-blue-50", border: 'group-hover:border-blue-300', title: "Marketing Fundamentals" },
  ];

  return (
    <section className="bg-slate-50 py-32 px-6 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-6">
            Get Certified by <span className="text-[#EA4335]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span> &<br/>
            <span className="text-[#00A4EF]">Microsoft</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
            Industry certifications for Google Ads & Bing Ads + 12 more globally recognized certifications included.
          </p>
        </div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {certs.map((cert, i) => (
             <motion.div 
               key={i} 
               variants={scaleUp}
               className={`bg-white border border-slate-200 ${cert.border} rounded-[20px] p-6 shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative group cursor-default`}
             >
                <div className="absolute top-5 right-5 bg-emerald-100 rounded-full w-6 h-6 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 origin-center">
                    <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={3} />
                </div>
                <div className={`text-[11px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-md w-fit mb-5 ${cert.color}`}>
                   {cert.provider}
                </div>
                <h4 className="text-[17px] font-bold text-slate-800 pr-6 tracking-tight leading-snug">{cert.title}</h4>
             </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-blue-50/50 text-slate-700 p-6 rounded-2xl font-medium border border-blue-100/50 flex gap-2 w-full md:w-max px-8 text-center mx-auto"
        >
            <span><strong className="font-extrabold text-[#111827]">12 certifications.</strong> All recognized by recruiters and listable on LinkedIn. We don't charge extra - they're part of the program.</span>
        </motion.div>
      </div>
    </section>
  );
}
