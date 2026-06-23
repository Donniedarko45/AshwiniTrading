import React, { useState } from 'react';
import { curriculumData } from '@/data/curriculum';

export default function Curriculum() {
  const [activeTab, setActiveTab] = useState('PCP');

  const activeCourse = curriculumData.find(c => c.key === activeTab) || curriculumData[0];

  const tabButtonStyles = {
    PCP: {
      active: 'bg-blue-50 border-blue-200 text-blue-700',
      dot: 'bg-blue-500'
    },
    PGCP: {
      active: 'bg-purple-50 border-purple-200 text-purple-700',
      dot: 'bg-purple-500'
    },
    ELEVATE: {
      active: 'bg-amber-50 border-amber-200 text-amber-700',
      dot: 'bg-amber-500'
    }
  };

  const getModuleStyles = (courseKey: string) => {
    switch (courseKey) {
      case 'PCP':
        return {
          border: 'border-slate-200',
          badge: 'bg-blue-50 text-blue-700',
          bullet: 'bg-blue-400'
        };
      case 'PGCP':
        return {
          border: 'border-purple-200',
          badge: 'bg-purple-100 text-purple-700',
          bullet: 'bg-purple-400'
        };
      case 'ELEVATE':
        return {
          border: 'border-amber-200',
          badge: 'bg-amber-100 text-amber-800',
          bullet: 'bg-amber-500'
        };
      default:
        return {
          border: 'border-slate-200',
          badge: 'bg-slate-100 text-slate-700',
          bullet: 'bg-slate-400'
        };
    }
  };

  const getPointTypeBadge = (type?: 'THEORY' | 'PRACTICAL' | 'HANDS-ON PROJECT') => {
    if (!type) return null;
    switch (type) {
      case 'THEORY':
        return <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider">THEORY</span>;
      case 'PRACTICAL':
        return <span className="text-[10px] font-bold text-brand-emerald bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wider">PRACTICAL</span>;
      case 'HANDS-ON PROJECT':
        return <span className="text-[10px] font-bold text-brand-orange bg-orange-50 px-2 py-0.5 rounded uppercase tracking-wider">HANDS-ON PROJECT</span>;
      default:
        return null;
    }
  };

  return (
    <section id="curriculum" className="bg-white py-24 px-6 md:px-12">
       <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            What our <span className="text-brand-blue">digital marketing training in Bangalore</span> covers – every module, every topic
          </h2>
          <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto leading-relaxed mb-10">
            3 courses. One direction: your dream job. Every hour in Course 1 counts toward Course 2. Every hour in Course 2 counts toward Course 3. Nothing is repeated. Everything builds.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
             {curriculumData.map(course => {
                const styles = tabButtonStyles[course.key as keyof typeof tabButtonStyles];
                const isActive = activeTab === course.key;
                return (
                  <button 
                    key={course.key}
                    onClick={() => setActiveTab(course.key)} 
                    className={`px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all border ${
                      isActive ? styles.active : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${styles.dot}`} />
                      {course.badge}
                    </div>
                  </button>
                );
             })}
          </div>
       </div>

       <div className="max-w-7xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-8">
                <div>
                   <div className={`text-[10px] font-extrabold tracking-widest uppercase px-2 py-1 rounded w-fit mb-2 border ${activeCourse.badgeColorClass}`}>
                     ● {activeCourse.badge}
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900">{activeCourse.title}</h3>
                   <p className="text-slate-500 text-sm font-medium mt-1">{activeCourse.scheduleText}</p>
                </div>
                <div className="hidden sm:flex flex-col items-end gap-2">
                   <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                     {activeCourse.modulesCountText}
                   </span>
                   <button className="bg-brand-orange text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 hover:bg-brand-orange-hover transition-colors">
                     SWIPE →
                   </button>
                </div>
             </div>

             <div className="flex overflow-x-auto gap-6 pb-8 snap-x">
                {activeCourse.modules.map((mod, index) => {
                  const mStyles = getModuleStyles(activeCourse.key);
                  const isNoteCard = !!mod.isNote;
                  
                  return (
                    <div 
                      key={index}
                      className={`min-w-[340px] md:min-w-[400px] rounded-3xl p-6 shadow-sm snap-start shrink-0 border ${
                        isNoteCard 
                          ? 'bg-slate-50 border-slate-200' 
                          : `bg-white ${mStyles.border}`
                      }`}
                    >
                       <div className="flex justify-between items-start mb-6">
                          <div className={`text-xs font-bold px-3 py-1 rounded-lg ${
                            isNoteCard ? 'bg-slate-200 text-slate-700' : mStyles.badge
                          }`}>
                            {mod.id}
                          </div>
                          <div className="text-slate-400 text-xs font-bold">{mod.indexText}</div>
                       </div>
                       
                       <h4 className="text-[19px] font-bold text-slate-900 mb-2 line-clamp-2 min-h-[56px]">
                         {mod.title}
                       </h4>
                       <p className="text-slate-500 text-xs font-medium mb-6">{mod.durationText}</p>
                       
                       <ul className="space-y-6">
                          {mod.points.map((pt, pIdx) => (
                             <li key={pIdx} className="flex gap-3">
                                <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${mStyles.bullet}`}/>
                                <div>
                                   <p className="text-sm font-medium text-slate-700 mb-2">{pt.text}</p>
                                   {getPointTypeBadge(pt.type)}
                                </div>
                             </li>
                          ))}
                       </ul>
                    </div>
                  );
                })}
             </div>
          </div>
       </div>
    </section>
  );
}
