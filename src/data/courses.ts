export interface Course {
  id: string;
  badge: string;
  badgeType: 'standard' | 'popular' | 'flagship';
  title: string;
  duration: string;
  format: string;
  schedule: string;
  fee: string;
  idealAudience?: string;
  bonus?: string;
  topics: string[];
  colorTheme: 'blue' | 'indigo' | 'orange';
  nextBatch: string;
  remainingSeatsText?: string;
}

export const coursesData: Course[] = [
  {
    id: 'foundation',
    badge: 'Foundation',
    badgeType: 'standard',
    title: 'Stock Market Foundation Program',
    duration: '2 Weeks',
    format: 'Online & Offline',
    schedule: 'Monday – Friday | 2 Hours Per Day',
    fee: '₹4,999',
    idealAudience: 'College Students, Working Professionals, Homemakers, New Investors, Aspiring Traders',
    topics: [
      'Stock Market Fundamentals (NSE, BSE, Nifty, Sensex, IPOs)',
      'Getting Started (Demat & Trading Account Setup, Order Types, Watchlists)',
      'Smart Investing Basics (Fundamental Analysis, Key Ratios, Good Companies)',
      'Technical Analysis for Beginners (Charts, Support/Resistance, Moving Averages)',
      'Risk Management (Position Sizing, Stop Loss, Trading Psychology)',
      'Wealth Creation Strategies (SIP, Compound Power, Diversification)',
      'AI-Powered Stock Market Learning (Stock Research, AI Prompts)',
      'Practical Learning (Live Market Demo, TradingView, Real Case Studies)'
    ],
    colorTheme: 'blue',
    nextBatch: 'Starts Monday'
  },
  {
    id: 'investor',
    badge: 'Fundamental',
    badgeType: 'standard',
    title: 'Smart Investor Program',
    duration: '3 Weeks',
    format: 'Live Sessions + Recordings',
    schedule: 'Weekends | 2 hours/day',
    fee: '₹7,999',
    idealAudience: 'Investors',
    bonus: '10 Stock Analysis Case Studies',
    topics: [
      'Financial Statements Analysis',
      'Balance Sheet Reading',
      'Profit & Loss Statement',
      'Cash Flow Analysis',
      'PE Ratio, PB Ratio, ROE, ROCE',
      'Debt Analysis',
      'Finding Multibagger Stocks',
      'Sector Analysis',
      'Valuation Basics',
      'Building a Long-Term Portfolio'
    ],
    colorTheme: 'blue',
    nextBatch: 'Starts Saturday'
  },
  {
    id: 'technical-mastery',
    badge: 'Technical',
    badgeType: 'popular',
    title: 'Technical Analysis Mastery',
    duration: '4 Weeks',
    format: 'Live Sessions + Practice',
    schedule: 'Mon – Wed | 2 hours/day',
    fee: '₹14,999',
    idealAudience: 'Traders',
    bonus: 'Daily Chart Reading Practice',
    topics: [
      'Candlestick Patterns',
      'Support & Resistance',
      'Trendline Trading',
      'Moving Averages',
      'RSI',
      'MACD',
      'Bollinger Bands',
      'Volume Analysis',
      'Chart Patterns',
      'Breakout Trading',
      'Swing Trading Strategies',
      'Position Sizing'
    ],
    colorTheme: 'indigo',
    nextBatch: '12 Days',
    remainingSeatsText: '6 seats left'
  },
  {
    id: 'intraday-pro',
    badge: 'Intraday',
    badgeType: 'popular',
    title: 'Intraday Trader Pro',
    duration: '4 Weeks',
    format: 'Live Market Trading',
    schedule: 'Mon – Fri | Live Market',
    fee: '₹19,999',
    bonus: '30 Days Live Market Sessions',
    topics: [
      'Intraday Trading Framework',
      'Market Opening Strategies',
      'CPR Trading',
      'VWAP Strategy',
      'ORB (Opening Range Breakout)',
      'Momentum Trading',
      'Risk-Reward Management',
      'Live Market Psychology',
      'Scanner Setup',
      'Trade Journal Maintenance'
    ],
    colorTheme: 'indigo',
    nextBatch: '10 Days',
    remainingSeatsText: '4 seats left'
  },
  {
    id: 'options-masterclass',
    badge: 'Options',
    badgeType: 'popular',
    title: 'Options Trading Masterclass',
    duration: '4 Weeks',
    format: 'Live Expiry Sessions',
    schedule: 'Tue & Thu | 2 hours/day',
    fee: '₹24,999',
    bonus: 'Live Expiry Trading Sessions',
    topics: [
      'Futures & Options Basics',
      'Option Chain Analysis',
      'Open Interest Analysis',
      'Greeks (Delta, Theta, Vega)',
      'Option Buying Strategies',
      'Option Selling Strategies',
      'Weekly Expiry Trading',
      'Hedging Techniques',
      'Adjustment Strategies',
      'Capital Protection'
    ],
    colorTheme: 'indigo',
    nextBatch: '8 Days',
    remainingSeatsText: '5 seats left'
  },
  {
    id: 'professional-trader',
    badge: 'Pro Trader',
    badgeType: 'popular',
    title: 'Professional Trader Program',
    duration: '6 Weeks',
    format: 'Complete Practical',
    schedule: 'Weekdays & Weekends',
    fee: '₹34,999',
    bonus: '60 Days Mentorship',
    topics: [
      'Technical Analysis & Charting',
      'Intraday Trading Frameworks',
      'Swing Trading Strategies',
      'Futures & Options Trading',
      'Trading Psychology & Discipline',
      'Risk & Money Management',
      'Trading Business Setup',
      'Capital Allocation',
      'Portfolio Building'
    ],
    colorTheme: 'indigo',
    nextBatch: '12 Days',
    remainingSeatsText: '7 seats left'
  },
  {
    id: 'research-analyst',
    badge: 'Analyst',
    badgeType: 'standard',
    title: 'Research Analyst Program',
    duration: '4 Weeks',
    format: 'Theory + Financial Modeling',
    schedule: 'Weekends | 3 hours/day',
    fee: '₹39,999',
    bonus: 'Research Report Templates',
    topics: [
      'Fundamental Analysis',
      'Financial Modeling Basics',
      'Equity Research Report Writing',
      'Industry Analysis',
      'Company Valuation',
      'DCF Basics',
      'Earnings Analysis',
      'Result Analysis',
      'Target Price Calculation',
      'Professional Research Framework'
    ],
    colorTheme: 'blue',
    nextBatch: '15 Days'
  },
  {
    id: 'wealth-portfolio',
    badge: 'Wealth',
    badgeType: 'standard',
    title: 'Wealth Creation & Portfolio Management Program',
    duration: '6 Weeks',
    format: 'Strategic Planning',
    schedule: 'Saturdays | 3 hours/day',
    fee: '₹49,999',
    bonus: 'Model Portfolio + 1-Year Reviews',
    topics: [
      'Asset Allocation',
      'Portfolio Construction',
      'Multibagger Framework',
      'Sector Rotation',
      'Market Cycles',
      'Retirement Planning',
      'SIP & Mutual Funds',
      'Risk Management',
      'Wealth Preservation',
      'Creating Passive Income Portfolio'
    ],
    colorTheme: 'blue',
    nextBatch: '14 Days'
  },
  {
    id: 'beginner-to-advanced',
    badge: 'Best-Seller',
    badgeType: 'flagship',
    title: 'Beginner to Advanced Trader Program',
    duration: '2 Months',
    format: 'Complete Mentorship',
    schedule: 'Live Market + Theory',
    fee: '₹50,000',
    bonus: 'Recorded Videos + Study Material + Certificate',
    topics: [
      'Stock Market Basics',
      'Fundamental Analysis',
      'Technical Analysis',
      'Swing Trading',
      'Intraday Trading',
      'Futures Trading',
      'Options Trading',
      'Risk Management',
      'Trading Psychology',
      'Live Market Sessions'
    ],
    colorTheme: 'orange',
    nextBatch: '12 Days',
    remainingSeatsText: '3 seats left'
  }
];
