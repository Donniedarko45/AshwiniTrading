import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Users, GraduationCap, Briefcase } from 'lucide-react';

const stats = [
  {
    id: 1,
    name: 'Active Students',
    value: '50K+',
    icon: Users,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    id: 2,
    name: 'Success Rate',
    value: '95%',
    icon: Trophy,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10'
  },
  {
    id: 3,
    name: 'Expert Instructors',
    value: '200+',
    icon: GraduationCap,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10'
  },
  {
    id: 4,
    name: 'Placement Partners',
    value: '500+',
    icon: Briefcase,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  },
];

export default function Stats() {
  return (
    <section className="py-12 bg-transparent relative z-20 -mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4 divide-y divide-slate-100 md:divide-y-0 md:divide-x">
            {stats.map((stat, index) => {
               const Icon = stat.icon;
               return (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex flex-col items-center justify-center text-center ${index > 1 ? 'pt-8 md:pt-0' : ''}`}
                  >
                    <div className={`p-4 rounded-xl ${stat.bg} mb-4`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 tracking-tight mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      {stat.name}
                    </div>
                  </motion.div>
               );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
