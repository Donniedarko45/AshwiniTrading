export interface CourseTrack {
  id: string;
  badge: string;
  badgeType: 'standard' | 'popular' | 'flagship';
  title: string;
  duration: string;
  format: string;
  schedule: string;
  emi: string;
  totalFee: string;
  nextBatch: string;
  remainingSeatsText?: string;
  hireableRoles: string[];
  features: string[];
  colorTheme: 'blue' | 'indigo' | 'orange';
}

export const courseTracks: CourseTrack[] = [
  {
    id: 'pcp-3m',
    badge: '3-Month Track',
    badgeType: 'standard',
    title: 'Professional Certification Program in Digital Marketing & Analytics',
    duration: '3 Months',
    format: 'Classroom + Online available',
    schedule: 'Mon – Fri | 2 hours/day',
    emi: '₹5,000',
    totalFee: '₹45,000',
    nextBatch: '16 Days',
    hireableRoles: [
      'SEO Executive / SEO Analyst',
      'Social Media Executive',
      'Google Ads / PPC Executive',
      'Content Marketing Executive',
      'Email Marketing Executive',
      'Digital Marketing Coordinator',
      'Performance Marketer'
    ],
    features: [
      '15+ live projects · 20+ tools with AI',
      '7 industry certifications included'
    ],
    colorTheme: 'blue'
  },
  {
    id: 'pgcp-5m',
    badge: '5-Month Track',
    badgeType: 'popular',
    title: 'Post Graduate Program in Digital Marketing & Analytics',
    duration: '5 Months',
    format: 'Classroom + Online available',
    schedule: 'Weekdays & Weekends',
    emi: '₹7,500',
    totalFee: '₹75,000',
    nextBatch: '12 Days',
    remainingSeatsText: '9 of 24 seats remaining',
    hireableRoles: [
      'Digital Marketing Executive',
      'Performance Marketing Executive',
      'GEO/AEO Specialist',
      'Social Media Marketing Executive',
      'Content Strategist',
      'CRM & Marketing AI Automation Specialist',
      'E-Commerce Marketing Manager',
      'Growth Marketer'
    ],
    features: [
      '25+ live projects · 60+ tools with AI',
      '12 industry certifications included · 2 specialisations'
    ],
    colorTheme: 'indigo'
  },
  {
    id: 'elevate-7m',
    badge: '7-Month Track',
    badgeType: 'flagship',
    title: 'ELEVATE™ – Digital Marketing + AI for Business Teams',
    duration: '7 Months',
    format: 'Classroom + Online available',
    schedule: 'Weekdays & Weekends',
    emi: '₹10,000',
    totalFee: '₹99,000',
    nextBatch: '12 Days',
    hireableRoles: [
      'Performance Marketing Expert',
      'AI Operations Executive',
      'AI & Marketing Strategist',
      'Business Growth Executive',
      'MarTech Executive',
      'Growth & Revenue Specialist',
      'AI Business Transformation Consultant',
      'AI Agency Founder'
    ],
    features: [
      'All PGCP modules + 16 AI-for-Business modules · 268 hours total',
      '12 certifications + AI Business specialisation'
    ],
    colorTheme: 'orange'
  }
];
