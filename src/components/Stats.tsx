import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Users, GraduationCap, Briefcase } from 'lucide-react';
import { staggerContainer, scaleUp } from '../lib/animations';

const stats = [
  {
    id: 1,
    name: 'Active Students',
    value: '50K+',
    icon: Users,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100'
  },
  {
    id: 2,
    name: 'Success Rate',
    value: '95%',
    icon: Trophy,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'border-orange-100'
  },
  {
    id: 3,
    name: 'Expert Instructors',
    value: '200+',
    icon: GraduationCap,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100'
  },
  {
    id: 4,
    name: 'Placement Partners',
    value: '500+',
    icon: Briefcase,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100'
  },
];

export default function Stats() {
  return (
    <section className="relative z-20 -mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="bg-white/95 backdrop-blur-xl rounded-[24px] border border-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-8 md:p-10"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4 divide-y divide-slate-100 md:divide-y-0 md:divide-x">
            {stats.map((stat, index) => {
               const Icon = stat.icon;
               return (
                  <motion.div
                    key={stat.id}
                    variants={scaleUp}
                    className={`flex flex-col items-center justify-center text-center group ${index > 1 ? 'pt-8 md:pt-0' : ''}`}
                  >
                    <div className={`p-4 rounded-2xl ${stat.bg} ${stat.border} border mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 shadow-sm`}>
                      <Icon className={`w-7 h-7 ${stat.color}`} strokeWidth={2.5} />
                    </div>
                    <div className="text-4xl font-extrabold text-[#111827] tracking-tight mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      {stat.name}
                    </div>
                  </motion.div>
               );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
