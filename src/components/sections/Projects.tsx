import React from 'react';
import { studentProjects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="bg-brand-light-bg py-16 md:py-24 px-5 sm:px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[56px] font-extrabold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl">
          Real work our students built – for real companies
        </h2>
        <p className="text-base sm:text-lg text-slate-300 mb-10 sm:mb-16 max-w-3xl leading-relaxed">
          Every project below was deployed, used, and measured by Companies.<br/>
          Not just a simulation. Your project list will look like this in 90 days.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {studentProjects.map((proj, i) => (
              <div key={i} className="bg-brand-bg-card rounded-[24px] p-5 sm:p-8 shadow-sm hover:shadow-xl transition-shadow border border-white/10 flex flex-col h-full animate-in fade-in slide-in-from-bottom-3 duration-300">
                  <div className="text-brand-primary text-[10px] font-extrabold tracking-widest uppercase flex items-center gap-2 mb-4 bg-brand-primary/10 w-fit px-2.5 py-1 rounded-full border border-brand-primary/20">
                     <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                     {proj.type}
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">{proj.title}</h3>
                  <p className="text-sm font-medium text-slate-400 mb-6">
                    Built by <span className="font-bold text-slate-200">{proj.author}</span> for <span className="font-bold text-slate-200">{proj.company}</span>
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                     {proj.tags.map((tag, j) => (
                        <span key={j} className="bg-white/5 text-slate-300 font-bold text-[11px] px-3 py-1 rounded-full border border-white/5">{tag}</span>
                     ))}
                  </div>

                   <p 
                      className="text-slate-300 text-[15px] font-medium leading-relaxed mb-6 mt-auto"
                      dangerouslySetInnerHTML={{ __html: proj.descHtml }}
                   />
                   <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-extrabold tracking-wider text-brand-secondary hover:text-brand-secondary-light transition-colors cursor-pointer min-h-[44px]">
                     <span>VIEW CAMPAIGN CASE STUDY</span>
                     <span>→</span>
                   </div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
}
