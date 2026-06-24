import React from 'react';
import { motion } from 'motion/react';
import { fadeIn } from '@/lib/animations';

interface SectionHeaderProps {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
}

export function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  theme = 'light'
}: SectionHeaderProps) {
  const isCenter = align === 'center';
  const isLight = theme === 'light';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      className={`max-w-4xl mb-16 md:mb-20 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      }`}
    >
      {badge && (
        <div className={`font-extrabold text-xs sm:text-sm tracking-widest uppercase mb-4 ${
          isLight ? 'text-brand-orange' : 'text-brand-cyan'
        }`}>
          {badge}
        </div>
      )}
      
      <h2 className={`text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] ${
        isLight ? 'text-brand-light-heading' : 'text-white'
      }`}>
        {title}
      </h2>

      {description && (
        <p className={`text-lg md:text-xl font-medium mt-6 leading-relaxed max-w-3xl ${
          isCenter ? 'mx-auto' : ''
        } ${
          isLight ? 'text-brand-light-body' : 'text-slate-300'
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
