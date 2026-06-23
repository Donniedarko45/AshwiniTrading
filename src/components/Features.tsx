import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, MonitorSmartphone, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    name: 'Industry-Aligned Curriculum',
    description: 'Learn skills that top employers are actively looking for right now.',
    icon: TrendingUp,
  },
  {
    name: '1-on-1 Mentorship',
    description: 'Get personalized guidance from seasoned industry professionals.',
    icon: CheckCircle2,
  },
  {
    name: 'Learn Anywhere, Anytime',
    description: 'Access our high-quality video content on any device, from anywhere.',
    icon: MonitorSmartphone,
  },
  {
    name: 'Flexible Learning Pace',
    description: 'Structure your learning journey according to your own schedule.',
    icon: Clock,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 text-sm font-bold tracking-wider uppercase mb-3"
          >
            Advantages
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight leading-tight mb-6"
          >
            Why Choose Bluetick Academy?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500"
          >
            We provide a comprehensive learning experience designed to take you from beginner to job-ready professional in months, not years.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border border-slate-200 shadow-none hover:border-blue-300 hover:shadow-sm transition-all h-full bg-white rounded-2xl">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 leading-snug">{feature.name}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
