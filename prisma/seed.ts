import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const courses = [
  // Standard Programs (from coursesData)
  {
    id: 'foundation',
    title: 'Stock Market Foundation Program',
    slug: 'stock-market-foundation-program',
    description: 'Learn stock market basics, Demat setups, NSE/BSE, order types, and risk management fundamentals.',
    thumbnail: '/assets/images/courses/foundation.jpg',
    price: 4999.0,
    discountPrice: 2999.0,
    isActive: true,
  },
  {
    id: 'investor',
    title: 'Smart Investor Program',
    slug: 'smart-investor-program',
    description: 'Master fundamental analysis, balance sheet analysis, valuation, and multibagger stock hunting.',
    thumbnail: '/assets/images/courses/investor.jpg',
    price: 12999.0,
    discountPrice: 7999.0,
    isActive: true,
  },
  {
    id: 'technical-mastery',
    title: 'Technical Analysis Mastery',
    slug: 'technical-analysis-mastery',
    description: 'Master candlestick patterns, support & resistance, moving averages, RSI, and swing trading.',
    thumbnail: '/assets/images/courses/technical-mastery.jpg',
    price: 24999.0,
    discountPrice: 14999.0,
    isActive: true,
  },
  {
    id: 'intraday-pro',
    title: 'Intraday Trader Pro',
    slug: 'intraday-trader-pro',
    description: 'Live market trading strategies including VWAP, ORB, CPR, and risk management.',
    thumbnail: '/assets/images/courses/intraday-pro.jpg',
    price: 29999.0,
    discountPrice: 19999.0,
    isActive: true,
  },
  {
    id: 'options-masterclass',
    title: 'Options Trading Masterclass',
    slug: 'options-trading-masterclass',
    description: 'Futures & Options basics, Option chain, Greeks, buying & selling strategies, and hedging.',
    thumbnail: '/assets/images/courses/options-masterclass.jpg',
    price: 39999.0,
    discountPrice: 24999.0,
    isActive: true,
  },
  {
    id: 'professional-trader',
    title: 'Professional Trader Program',
    slug: 'professional-trader-program',
    description: 'Complete trading roadmap combining technicals, intraday, swing, F&O, and capital allocation.',
    thumbnail: '/assets/images/courses/professional-trader.jpg',
    price: 49999.0,
    discountPrice: 34999.0,
    isActive: true,
  },
  {
    id: 'research-analyst',
    title: 'Research Analyst Program',
    slug: 'research-analyst-program',
    description: 'Professional equity research report writing, financial modeling, and company valuations.',
    thumbnail: '/assets/images/courses/research-analyst.jpg',
    price: 59999.0,
    discountPrice: 39999.0,
    isActive: true,
  },
  {
    id: 'wealth-portfolio',
    title: 'Wealth Creation & Portfolio Management Program',
    slug: 'wealth-creation-portfolio-management',
    description: 'Asset allocation, portfolio construction, sector rotation, and passive income creation.',
    thumbnail: '/assets/images/courses/wealth-portfolio.jpg',
    price: 69999.0,
    discountPrice: 49999.0,
    isActive: true,
  },
  {
    id: 'beginner-to-advanced',
    title: 'Beginner to Advanced Trader Program',
    slug: 'beginner-to-advanced-trader-program',
    description: 'Flagship 2-month complete mentorship covering basics to advanced F&O with live sessions.',
    thumbnail: '/assets/images/courses/beginner-to-advanced.jpg',
    price: 75000.0,
    discountPrice: 50000.0,
    isActive: true,
  },

  // Workshops (from workshopCourses)
  {
    id: 'fundamental-analysis-masterclass',
    title: 'AI Powered Fundamental Analysis Masterclass',
    slug: 'fundamental-analysis-masterclass',
    description: 'Find multibaggers in minutes and read annual reports using AI.',
    thumbnail: '/assets/images/courses/fundamental-workshop.jpg',
    price: 4999.0,
    discountPrice: 2999.0,
    isActive: true,
  },
  {
    id: 'technical-analysis-masterclass',
    title: 'AI Powered Technical Analysis Masterclass',
    slug: 'technical-analysis-masterclass',
    description: 'Let AI scan chart patterns, identify trends, and automate trading structures.',
    thumbnail: '/assets/images/courses/technical-workshop.jpg',
    price: 4999.0,
    discountPrice: 2999.0,
    isActive: true,
  },
  {
    id: 'stock-market-accelerator',
    title: 'AI Stock Market Accelerator',
    slug: 'stock-market-accelerator',
    description: 'Learn how smart traders use AI to analyze stocks, build portfolios, and save hours weekly.',
    thumbnail: '/assets/images/courses/accelerator-workshop.jpg',
    price: 4999.0,
    discountPrice: 2999.0,
    isActive: true,
  },
  {
    id: 'futures-options-trader-pro',
    title: 'Futures & Options Trader Pro',
    slug: 'futures-options-trader-pro',
    description: '10-day intensive F&O program to analyze, plan, and execute trades with confidence.',
    thumbnail: '/assets/images/courses/futures-options-pro.jpg',
    price: 39999.0,
    discountPrice: 24999.0,
    isActive: true,
  },
];

const coupons = [
  {
    code: 'WELCOME10',
    discountType: 'PERCENTAGE',
    discountValue: 10.0, // 10% off
    maxUses: 1000,
    expiryDate: new Date('2030-12-31T23:59:59Z'),
    isActive: true,
  },
  {
    code: 'EARLYBIRD',
    discountType: 'FIXED',
    discountValue: 1500.0, // ₹1500 off flat
    maxUses: 100,
    expiryDate: new Date('2030-12-31T23:59:59Z'),
    isActive: true,
  },
  {
    code: 'FREECOURSE',
    discountType: 'PERCENTAGE',
    discountValue: 100.0, // 100% off (useful for testing)
    maxUses: 5,
    expiryDate: new Date('2030-12-31T23:59:59Z'),
    isActive: true,
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
