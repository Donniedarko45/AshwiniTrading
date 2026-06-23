export interface CurriculumPoint {
  text: string;
  type?: 'THEORY' | 'PRACTICAL' | 'HANDS-ON PROJECT';
}

export interface CurriculumModule {
  id: string;
  indexText: string;
  title: string;
  durationText: string;
  points: CurriculumPoint[];
  isNote?: boolean;
}

export interface CourseTrackData {
  key: string;
  badge: string;
  badgeColorClass: string;
  title: string;
  scheduleText: string;
  modulesCountText: string;
  modules: CurriculumModule[];
}

export const curriculumData: CourseTrackData[] = [
  {
    key: 'PCP',
    badge: 'COURSE 1 - PCP',
    badgeColorClass: 'text-blue-600 bg-blue-50 border-blue-200',
    title: 'Professional Certification in Digital Marketing with AI',
    scheduleText: '3 Months · 132 Hours · Mon–Fri Weekdays',
    modulesCountText: '11 modules',
    modules: [
      {
        id: 'M1',
        indexText: '1 / 11',
        title: 'Digital Marketing Foundation & Business Thinking',
        durationText: '2 Sessions · 4 Hours',
        points: [
          { text: 'Introduction to marketing, DM evolution, and the digital marketing ecosystem', type: 'THEORY' },
          { text: 'Principles of marketing, ATL/BTL/TTL funnels, and integrated strategy' }
        ]
      },
      {
        id: 'M2',
        indexText: '2 / 11',
        title: 'Website Design & Development with AI – WordPress',
        durationText: '2 Sessions · 4 Hours',
        points: [
          { text: 'WordPress website setup - domain, hosting, and site structure', type: 'PRACTICAL' },
          { text: 'Elementor page builder - designing professional pages without code' }
        ]
      },
      {
        id: 'M3',
        indexText: '3 / 11',
        title: 'SEO with AI – Classic + Next-Gen Search',
        durationText: '12 Sessions · 24 Hours',
        points: [
          { text: 'Keyword research and strategic topic planning', type: 'THEORY' },
          { text: 'On-page SEO - content, headings, image optimization, anchor tags', type: 'PRACTICAL' }
        ]
      }
    ]
  },
  {
    key: 'PGCP',
    badge: 'COURSE 2 - PGCP',
    badgeColorClass: 'text-purple-600 bg-purple-50 border-purple-200',
    title: 'Post Graduate Certification in AI-Driven Digital Marketing',
    scheduleText: '5 Months · 220 Hours · All 13 Modules + 3 Specialisations + 5 Industry Deep Dives',
    modulesCountText: '9 modules',
    modules: [
      {
        id: 'Note',
        indexText: '1 / 9',
        title: 'Modules 1–10 – Same as Course 1, But Deeper',
        durationText: 'Expanded content, more live projects',
        isNote: true,
        points: [
          { text: 'Module 3 SEO: + programmatic SEO, parasite SEO, international SEO, and App Store SEO (ASO)', type: 'PRACTICAL' },
          { text: 'Module 4 Social Media: + HeyGen AI video, Veo 3, and advanced influencer agreement frameworks', type: 'THEORY' }
        ]
      },
      {
        id: 'M11',
        indexText: '2 / 9',
        title: 'Performance Marketing & E-Commerce Growth',
        durationText: '9 Sessions · 18 Hours',
        points: [
          { text: 'Performance marketing strategy - audience targeting, segmentation, and persona building with AI', type: 'PRACTICAL' },
          { text: 'Amazon Advertising - Sponsored Products, Sponsored Brands, Sponsored Display', type: 'PRACTICAL' }
        ]
      },
      {
        id: 'M12',
        indexText: '3 / 9',
        title: 'Online Reputation Management & Brand Protection',
        durationText: '3 Sessions · 6 Hours',
        points: [
          { text: 'ORM fundamentals - why your online reputation is your most valuable marketing asset', type: 'THEORY' },
          { text: 'Social listening with AI - Brand24, Mention, Google Alerts', type: 'PRACTICAL' }
        ]
      }
    ]
  },
  {
    key: 'ELEVATE',
    badge: 'COURSE 3 - ELEVATE™',
    badgeColorClass: 'text-amber-600 bg-amber-50 border-amber-200',
    title: 'Digital Marketing + AI for Business Teams',
    scheduleText: '7 Months · 268 Hours · Months 1–5 same as PGCP; Months 6–7 add the AI for Business Teams track',
    modulesCountText: '16 modules',
    modules: [
      {
        id: '★',
        indexText: 'Included',
        title: 'Everything in PGCP – fully included',
        durationText: 'All 5 months of PGCP, then 2 more',
        isNote: true,
        points: [
          { text: 'All 13 PGCP modules + 3 specialisations (SEO & AI Search, Performance Marketing, AI E-Commerce)', type: 'PRACTICAL' },
          { text: '5 industry domain deep dives + the real-budget agency capstone', type: 'HANDS-ON PROJECT' }
        ]
      },
      {
        id: 'B1',
        indexText: '1 / 16',
        title: 'AI Business Strategy Overview & Maturity Model',
        durationText: 'Theory & Strategy',
        points: [
          { text: 'AI transformation lifecycle', type: 'THEORY' },
          { text: 'Top 20 AI business patterns', type: 'THEORY' },
          { text: 'AI maturity assessment', type: 'THEORY' }
        ]
      },
      {
        id: 'B2',
        indexText: '2 / 16',
        title: 'AI-Native Analytics & Business Insight Generation',
        durationText: 'Hands-on Analytics',
        points: [
          { text: 'Conversational analytics', type: 'PRACTICAL' },
          { text: 'Text-to-SQL', type: 'PRACTICAL' },
          { text: 'Multi-source synthesis', type: 'PRACTICAL' }
        ]
      }
    ]
  }
];
