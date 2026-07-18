import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const courses = [
  {
    id: 'foundation',
    title: 'Stock Market Foundation Program',
    slug: 'stock-market-foundation',
    description: 'Build a strong foundation by understanding how financial markets work, NSE/BSE structure, retail/institutional roles, Demat setup, and basics of investing/trading.',
    thumbnail: '/assets/images/courses/foundation.jpg',
    price: 4999.0,
    discountPrice: 3999.0,
    isActive: true,
  },
  {
    id: 'fundamental-ai',
    title: 'Fundamental Analysis with AI',
    slug: 'fundamental-analysis-with-ai',
    description: 'Learn to evaluate companies like professional investors. Read annual reports in minutes and estimate intrinsic value using AI models.',
    thumbnail: '/assets/images/courses/fundamental-ai.jpg',
    price: 4999.0,
    discountPrice: 2999.0,
    isActive: true,
  },
  {
    id: 'technical-ai',
    title: 'Technical Analysis with AI',
    slug: 'technical-analysis-with-ai',
    description: 'Discover smarter ways to analyze charts, identify support/resistance, draw trendlines, and scan potential trade setups automatically using AI.',
    thumbnail: '/assets/images/courses/technical-ai.jpg',
    price: 4999.0,
    discountPrice: 2999.0,
    isActive: true,
  },
  {
    id: 'technical-15',
    title: 'Technical Analysis -- 15 Days',
    slug: 'technical-analysis-15-days',
    description: 'Master the fundamentals of chart reading. Understand candlestick patterns, trends, support/resistance, indicators, and price action through structured exercises.',
    thumbnail: '/assets/images/courses/technical-15.jpg',
    price: 9999.0,
    discountPrice: 6999.0,
    isActive: true,
  },
  {
    id: 'technical-30-online',
    title: 'Technical Analysis Professional (Online)',
    slug: 'technical-analysis-professional-online',
    description: 'Go beyond the basics with advanced price action, Fibonacci analysis, sector/relative strength analysis, scanners, and live market practice (Online Mode).',
    thumbnail: '/assets/images/courses/technical-30.jpg',
    price: 14999.0,
    discountPrice: 9999.0,
    isActive: true,
  },
  {
    id: 'technical-30-offline',
    title: 'Technical Analysis Professional (Live Training)',
    slug: 'technical-analysis-professional-live',
    description: 'Advanced technical analysis including classroom sessions, online revision materials, and hands-on live market training at our Bengaluru facility.',
    thumbnail: '/assets/images/courses/technical-30-live.jpg',
    price: 19999.0,
    discountPrice: 14999.0,
    isActive: true,
  },
  {
    id: 'futures-options-15',
    title: 'Futures & Options -- 15 Days',
    slug: 'futures-options-15-days',
    description: 'Learn the fundamentals of derivatives trading. Understand options, options chains, Greeks, open interest, and essential risk management.',
    thumbnail: '/assets/images/courses/fo-15.jpg',
    price: 14999.0,
    discountPrice: 9999.0,
    isActive: true,
  },
  {
    id: 'futures-options-30-online',
    title: 'Futures & Options Professional (Online)',
    slug: 'futures-options-professional-online',
    description: 'Master advanced option Greeks, implied volatility rank, multi-leg strategies, and institutional-level risk management (Online Mode).',
    thumbnail: '/assets/images/courses/fo-30.jpg',
    price: 19999.0,
    discountPrice: 14999.0,
    isActive: true,
  },
  {
    id: 'futures-options-30-offline',
    title: 'Futures & Options Professional (Live Training)',
    slug: 'futures-options-professional-live',
    description: 'Advanced derivatives program with interactive classroom learning, live expiry day execution sessions, and offline mentoring.',
    thumbnail: '/assets/images/courses/fo-30-live.jpg',
    price: 24999.0,
    discountPrice: 19999.0,
    isActive: true,
  },
  {
    id: 'ai-analysis',
    title: 'AI for Fundamental & Technical Analysis',
    slug: 'ai-for-fundamental-and-technical',
    description: 'A comprehensive 4-hour masterclass showing you how to integrate LLMs (ChatGPT, Gemini, Perplexity) into daily stock research, valuation modeling, and strategy backtesting.',
    thumbnail: '/assets/images/courses/ai-analysis.jpg',
    price: 6000.0,
    discountPrice: 5000.0,
    isActive: true,
  },
  {
    id: 'basics-to-advanced',
    title: 'Basics to Advanced Stock Market Program',
    slug: 'basics-to-advanced-program',
    description: 'One complete program covering everything you need to learn: fundamentals, long-term investing, technical analysis, futures & options, AI, risk management, and trading psychology.',
    thumbnail: '/assets/images/courses/basics-advanced.jpg',
    price: 75000.0,
    discountPrice: 50000.0,
    isActive: true,
  },
  {
    id: 'nism-certified',
    title: 'NISM Certified Stock Market Program',
    slug: 'nism-certified-program',
    description: 'Build a career in financial services. Complete 6-month program preparing you for NISM Series V-A, VIII, and X-A examinations along with practical market skills.',
    thumbnail: '/assets/images/courses/nism-certified.jpg',
    price: 120000.0,
    discountPrice: 99999.0,
    isActive: true,
  },
];

const coupons = [
  {
    code: 'WELCOME10',
    discountType: 'PERCENTAGE',
    discountValue: 10.0,
    maxUses: 1000,
    expiryDate: new Date('2030-12-31T23:59:59Z'),
    isActive: true,
  },
  {
    code: 'EARLYBIRD',
    discountType: 'FIXED',
    discountValue: 1500.0,
    maxUses: 100,
    expiryDate: new Date('2030-12-31T23:59:59Z'),
    isActive: true,
  },
  {
    code: 'FREECOURSE',
    discountType: 'PERCENTAGE',
    discountValue: 100.0,
    maxUses: 5,
    expiryDate: new Date('2030-12-31T23:59:59Z'),
    isActive: true,
  },
];

const blogs = [
  {
    title: 'Introduction to Technical Analysis for Beginners',
    slug: 'intro-to-technical-analysis',
    content: 'Technical analysis is the study of historical market data, including price and volume, to identify patterns and predict future market movements. Unlike fundamental analysis, which focuses on a company\'s financial statements and intrinsic value, technical analysis relies on charts and indicators to gauge market sentiment.\n\nKey Concepts:\n1. Candlestick Charts: The primary tool for technical traders. Each candlestick represents price action over a specific timeframe, showing the open, high, low, and close.\n2. Support and Resistance: Critical levels where buyers or sellers historically step in, creating floors and ceilings for the price.\n3. Trendlines: Diagonal lines drawn on charts to identify the direction and strength of market trends.\n\nDeveloping a disciplined approach to chart reading can help you make more structured decisions in your trading journey.',
    summary: 'Learn the foundational concepts of technical analysis, including candlestick patterns, support/resistance, and how price charts work.',
    category: 'Technical Analysis',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop',
    published: true,
  },
  {
    title: 'How Artificial Intelligence is Transforming Stock Market Research',
    slug: 'ai-transforming-market-research',
    content: 'Artificial Intelligence (AI) is changing the landscape of financial research. From scanning hundreds of stock charts in seconds to summarizing 200-page annual reports, AI-powered tools are helping investors and traders save hours of manual effort every week.\n\nPractical Applications:\n1. Financial Document Summarization: Large Language Models (LLMs) can extract key management commentary and flag potential red flags from balance sheets.\n2. Automatic Pattern Recognition: Algorithms can scan stock databases for breakout charts and candlestick formations.\n3. Sentiment Analysis: AI can analyze news feeds and social media to monitor market sentiment towards specific sectors.\n\nIntegrating AI into your investment workflow doesn\'t replace human decision-making, but it makes research much more efficient.',
    summary: 'Discover how modern investors use AI to read annual reports in minutes, scan charts, and perform quick market research.',
    category: 'AI & Finance',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
    published: true,
  },
];

const testimonials = [
  {
    name: 'Srinivas R.',
    role: 'IT Professional (Technical Analysis Program)',
    content: 'The 15-day Technical Analysis course gave me structural clarity on drawing support/resistance and understanding price trends. The focus on live chart examples made all the difference.',
    rating: 5,
    courseId: 'technical-15',
  },
  {
    name: 'Megha Sharma',
    role: 'MBA Student (Basics to Advanced Program)',
    content: 'Coming from a non-trading background, I found the curriculum incredibly simple. The NISM preparation combined with live simulator practice built my confidence.',
    rating: 5,
    courseId: 'basics-to-advanced',
  },
  {
    name: 'Karthik N.',
    role: 'Retail Trader (Futures & Options Program)',
    content: 'Highly recommend the 30-day F&O course. The option Greeks and volatility concepts were explained in such a simple, non-mathematical way that I could apply them instantly in live market hours.',
    rating: 5,
    courseId: 'futures-options-30-online',
  },
];

const faqs = [
  {
    question: 'Who can join your programs?',
    answer: 'Our programs are designed for complete beginners, college students, working professionals, investors, traders, entrepreneurs, and anyone interested in learning about financial markets.',
    category: 'GENERAL',
  },
  {
    question: 'Do I need any prior financial knowledge?',
    answer: 'No. Our foundational courses start from scratch, explaining basic terminology. Advanced courses are structured to build upon these foundations step-by-step.',
    category: 'GENERAL',
  },
  {
    question: 'Are practical sessions included?',
    answer: 'Yes. Every program emphasizes hands-on learning, featuring live market observations, case studies, chart marking exercises, and platform demonstrations.',
    category: 'COURSE',
  },
];

const settings = [
  {
    key: 'contact_details',
    value: JSON.stringify({
      phone: '+91 88617 56040 | 9845961990',
      email: 'info@ashwinitradingacademy.com',
      address: 'Ashwini Trading Academy, Bengaluru, Karnataka, India',
      businessHours: {
        weekdays: 'Monday -- Saturday: 9:00 AM -- 7:00 PM',
        sunday: 'Sunday: Closed / By Appointment',
      },
      socials: {
        instagram: 'https://instagram.com/ashwinitradingacademy',
        youtube: 'https://youtube.com/ashwinitradingacademy',
        facebook: 'https://facebook.com/ashwinitradingacademy',
        linkedin: 'https://linkedin.com/company/ashwinitradingacademy',
        telegram: 'https://t.me/ashwinitradingacademy',
        whatsapp: 'https://wa.me/919845961990',
      },
    }),
  },
  {
    key: 'homepage_banners',
    value: JSON.stringify({
      badge: 'GUIDED BY A SEBI REGISTERED RESEARCH ANALYST',
      title: 'Finance Made Simple.',
      subtitle: 'Learn. Understand. Grow.',
      description: 'At Ashwini Trading Academy, we believe financial education should be simple, practical, and accessible to everyone. Whether you\'re a beginner, student, working professional, investor, trader, or entrepreneur, our structured learning programs help you build the knowledge and confidence to understand financial markets and make informed financial decisions.',
    }),
  },
  {
    key: 'seo_settings',
    value: JSON.stringify({
      title: 'Ashwini Trading Academy - SEBI Registered Research Analyst',
      description: 'Learn stock market trading, fundamental analysis, technical analysis, futures & options, and AI tools under SEBI-registered mentorship in Bengaluru.',
      keywords: 'trading academy, stock market courses, technical analysis, options trading, NISM certification, SEBI analyst',
      canonicalUrl: 'https://ashwinitradingacademy.com',
    }),
  },
];

async function main() {
  console.log('Seeding courses...');
  for (const course of courses) {
    await prisma.course.upsert({
      where: { id: course.id },
      update: course,
      create: course,
    });
  }
  console.log(`Seeded ${courses.length} courses.`);

  console.log('Seeding coupons...');
  for (const coupon of coupons) {
    await prisma.coupon.upsert({
      where: { code: coupon.code },
      update: coupon,
      create: coupon,
    });
  }
  console.log(`Seeded ${coupons.length} coupons.`);

  console.log('Seeding blogs...');
  for (const blog of blogs) {
    await prisma.blog.upsert({
      where: { slug: blog.slug },
      update: blog,
      create: blog,
    });
  }
  console.log(`Seeded ${blogs.length} blogs.`);

  console.log('Seeding testimonials...');
  // Delete existing testimonials to prevent duplicate seeding
  await prisma.testimonial.deleteMany({});
  for (const testimonial of testimonials) {
    await prisma.testimonial.create({
      data: testimonial,
    });
  }
  console.log(`Seeded ${testimonials.length} testimonials.`);

  console.log('Seeding FAQs...');
  await prisma.fAQ.deleteMany({});
  for (const faq of faqs) {
    await prisma.fAQ.create({
      data: faq,
    });
  }
  console.log(`Seeded ${faqs.length} FAQs.`);

  console.log('Seeding settings...');
  for (const setting of settings) {
    await prisma.setting.upsert({
      where: { key: setting.key },
      update: setting,
      create: setting,
    });
  }
  console.log(`Seeded settings.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
