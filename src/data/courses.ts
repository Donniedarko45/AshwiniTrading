export interface Course {
  id: string;
  badge: string;
  badgeType: 'standard' | 'popular' | 'flagship';
  title: string;
  shortDescription: string;
  duration: string;
  format: string;
  schedule: string;
  fee: string;
  regularPrice?: string;
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
    title: 'Stock Market Foundation',
    shortDescription: 'Perfect for beginners who want to understand how the stock market works before moving on to investing or trading.',
    duration: '3 Hours',
    format: 'Online | Offline',
    schedule: 'Flexible Batches | Weekend & Weekday Options',
    fee: '₹3,999',
    idealAudience: 'College Students, Working Professionals, New Investors, Aspiring Traders',
    topics: [
      'Introduction to Financial Markets & Structure',
      'Stock Market Basics (Shares, Listing, Cap Sizes)',
      'NSE, BSE & SEBI Regulations',
      'Market Participants (Retail, DII, FII)',
      'Demat & Trading Account Infrastructure',
      'Investing Basics vs Intraday/Swing Trading',
      'Understanding Market Indices (Nifty, Sensex)',
      'Live Trading Platform Navigation Demonstration'
    ],
    colorTheme: 'blue',
    nextBatch: 'Starts Monday'
  },
  {
    id: 'basics-to-advanced',
    badge: 'Best-Seller',
    badgeType: 'flagship',
    title: 'Basics to Advanced Stock Market Program',
    shortDescription: 'A comprehensive learning journey covering Stock Market Basics, Fundamental Analysis, Technical Analysis, Futures & Options, AI, Trading Psychology, Risk Management, and Practical Market Learning.',
    duration: '2 Months',
    format: 'Online | Offline | Hybrid',
    schedule: 'Weekdays & Weekends Options',
    fee: '₹50,000',
    bonus: 'Recorded Videos + Study Material + Certificate',
    topics: [
      'Financial Market Foundations (NSE, BSE, SEBI)',
      'Comprehensive Fundamental Analysis & Valuation',
      'Basic to Advanced Technical Analysis & Charting',
      'Price Action & Trend Trading Mastery',
      'Futures & Options Foundations & Strategies',
      'AI Tools Integration for Fast Stock Research',
      'Asset Allocation, Portfolio Construct & Rebalance',
      'Risk Management, Journaling & Trading Psychology'
    ],
    colorTheme: 'orange',
    nextBatch: '12 Days',
    remainingSeatsText: '3 seats left'
  },
  {
    id: 'nism-certified',
    badge: 'Career Pro',
    badgeType: 'flagship',
    title: 'NISM Certified Stock Market Program',
    shortDescription: 'Prepare for NISM Series V-A, Series VIII, and Series XV examinations while completing our comprehensive Basics to Advanced Stock Market Program.',
    duration: '6 Months',
    format: 'Online | Classroom',
    schedule: 'Comprehensive Learning Curriculum',
    fee: '₹99,999',
    bonus: 'Mock Tests & Study Materials Included',
    topics: [
      'Comprehensive Indian Financial Market Frameworks',
      'NISM Series V-A: Mutual Fund Distributors Prep',
      'NISM Series VIII: Equity Derivatives Exam Prep',
      'NISM Series X-A: Investment Adviser Level 1 Prep',
      'Full Basics to Advanced Practical Course Syllabus',
      'Professional Resumes & Interview Readiness Coaching',
      'Regulatory Compliance & Financial Advisory Ethics'
    ],
    colorTheme: 'orange',
    nextBatch: '10 Days'
  },
  {
    id: 'fundamental-ai',
    badge: 'Fundamental',
    badgeType: 'standard',
    title: 'Fundamental Analysis with AI',
    shortDescription: 'Understand financial statements, business performance, valuation basics, and explore how AI can make company research faster and more efficient.',
    duration: '3 Hours',
    format: 'Online | Offline',
    schedule: 'Flexible Batches | Weekend Options',
    fee: '₹2,999',
    idealAudience: 'Investors, Portfolio Builders, Wealth Enthusiasts',
    topics: [
      'Financial Statements Analysis',
      'Key Ratios (PE, PB, ROE, ROCE)',
      'Annual Reports Analysis in Minutes Using AI',
      'Screening Multibaggers with AI Prompts',
      'Management Quality & Red Flags Detection',
      'Estimating Intrinsic Value & Margin of Safety'
    ],
    colorTheme: 'blue',
    nextBatch: 'Starts Saturday'
  },
  {
    id: 'technical-ai',
    badge: 'Technical',
    badgeType: 'standard',
    title: 'Technical Analysis with AI',
    shortDescription: 'Learn how Artificial Intelligence can assist with chart analysis, stock screening, market research, and technical decision-making.',
    duration: '3 Hours',
    format: 'Online | Offline',
    schedule: 'Flexible Batches | Weekend Options',
    fee: '₹2,999',
    idealAudience: 'Traders, Chart Analysts, Swing Investors',
    topics: [
      'Introduction to AI Chart Reading Tools',
      'Automated Support & Resistance Plotting',
      'AI Candlestick & Pattern Detection',
      'Creating AI Custom Trading Scanners',
      'Identifying High-Probability Setups',
      'Risk-Reward Planning with AI Tools'
    ],
    colorTheme: 'indigo',
    nextBatch: 'Starts Saturday'
  },
  {
    id: 'technical-15',
    badge: 'Technical 15D',
    badgeType: 'popular',
    title: 'Technical Analysis — 15 Days',
    shortDescription: 'Build a strong understanding of candlestick patterns, trends, support & resistance, indicators, and price action through structured practical learning.',
    duration: '15 Days',
    format: 'Online',
    schedule: 'Monday – Friday | 1 Hour Per Day',
    fee: '₹6,999',
    idealAudience: 'Beginner Traders, Investors, Students',
    topics: [
      'Philosophy of Technical Analysis & Dow Theory',
      'Reading Single & Multiple Candlestick Patterns',
      'Market Structure (Uptrend, Downtrend, Range)',
      'Drawing Static & Dynamic Support/Resistance',
      'Trendlines & Price Channels Execution',
      'RSI, MACD, Moving Averages & Volume Analysis',
      'Key Chart Patterns (Double Top, Head & Shoulders)',
      'Basic Risk Management & Trading Psychology'
    ],
    colorTheme: 'indigo',
    nextBatch: 'Starts Monday'
  },
  {
    id: 'technical-30-online',
    badge: 'Technical 30D',
    badgeType: 'popular',
    title: 'Technical Analysis Professional — 30 Days',
    shortDescription: 'Go beyond the basics with advanced chart analysis, trading strategies, market psychology, and practical learning through live market sessions.',
    duration: '30 Days',
    format: 'Online | Offline',
    schedule: 'Monday – Friday | 1.5 Hours Per Day',
    fee: '₹9,999',
    idealAudience: 'Active Traders, Swing Traders, Positional Investors',
    topics: [
      'Advanced Market Structure (BOS, CHOCH, Liquidity)',
      'Advanced Price Action & Breakout Validations',
      'Demand/Supply Zones & Zone-Based S&R',
      'Fibonacci Retracement & Confluence Trading',
      'Advanced Indicators (ADX, ATR, VWAP, Volume Profile)',
      'Advanced Pattern Trading (Cup & Handle, Wedges)',
      'Building Trading Scanners & Stock Selection',
      'Sector & Relative Strength Analysis'
    ],
    colorTheme: 'indigo',
    nextBatch: '12 Days'
  },
  {
    id: 'technical-30-offline',
    badge: 'Technical 30D Live',
    badgeType: 'popular',
    title: 'Technical Analysis Professional (Live Training)',
    shortDescription: 'Advanced technical analysis with classroom sessions, online revision, and hands-on live market training at our Bengaluru facility.',
    duration: '30 Days',
    format: 'Offline + Live Market Training',
    schedule: 'Bengaluru Classroom + Live Market Hours',
    fee: '₹14,999',
    idealAudience: 'Full-Time Traders, Local Bengaluru Learners',
    topics: [
      'All Online Advanced Technical Analysis Modules',
      'Classroom Sessions with Direct Mentor Feedback',
      'Live Market Hours Practical Training',
      'Trading View Desktop Platform Setup',
      'Scanner Customization & Screen Setup Help',
      'Live Trading Psychology Counseling'
    ],
    colorTheme: 'indigo',
    nextBatch: '12 Days',
    remainingSeatsText: '6 seats left'
  },
  {
    id: 'futures-options-15',
    badge: 'F&O 15D',
    badgeType: 'popular',
    title: 'Futures & Options — 15 Days',
    shortDescription: 'Understand Futures, Options, Option Chains, Greeks, Open Interest, and risk management through structured learning.',
    duration: '15 Days',
    format: 'Online',
    schedule: 'Monday – Friday | 1 Hour Per Day',
    fee: '₹9,999',
    idealAudience: 'Traders looking to enter Derivatives',
    topics: [
      'Derivatives Market Structure (Futures vs Options)',
      'Contract Specifications, Lot Sizes & Settlement',
      'Option Chain Decoding & Open Interest Basics',
      'Intrinsic Value, Time Value & Time Decay',
      'Option Greeks Basics (Delta, Theta, Gamma, Vega)',
      'High Probability Option Buying Setups',
      'Basic Risk Management & Position Sizing'
    ],
    colorTheme: 'indigo',
    nextBatch: '8 Days'
  },
  {
    id: 'futures-options-30-online',
    badge: 'F&O 30D',
    badgeType: 'popular',
    title: 'Futures & Options Professional — 30 Days',
    shortDescription: 'Learn advanced options strategies, market analysis, and practical applications through guided learning and live market training.',
    duration: '30 Days',
    format: 'Online',
    schedule: 'Monday – Friday | 1.5 Hours Per Day',
    fee: '₹14,999',
    idealAudience: 'Active F&O Traders, Option Sellers & Buyers',
    topics: [
      'Advanced Futures Build-Up & Rollover Analysis',
      'Advanced Option Chain Reading & PCR Analysis',
      'Option Greeks in Depth & Greek Interactions',
      'Implied Volatility Rank (IVR) & Volatility Crush',
      'Directional Buying Spreads (Debit Spreads)',
      'Non-Directional Income Selling (Straddles, Strangles)',
      'Iron Condors & Hedging/Adjustment Techniques',
      'Professional Capital Protection & Sizing'
    ],
    colorTheme: 'indigo',
    nextBatch: '8 Days'
  },
  {
    id: 'futures-options-30-offline',
    badge: 'F&O 30D Live',
    badgeType: 'popular',
    title: 'Futures & Options Professional (Live Training)',
    shortDescription: 'Advanced derivatives program with interactive classroom learning, live expiry day execution sessions, and offline mentoring.',
    duration: '30 Days',
    format: 'Offline + Live Expiry Training',
    schedule: 'Bengaluru Classroom + Expiry Day Live Execution',
    fee: '₹19,999',
    idealAudience: 'Aspiring Professional Derivatives Traders',
    topics: [
      'All Online Advanced F&O Modules',
      'Classroom Mentorship at Bengaluru Facility',
      'Live Expiry Day Execution Practice (Sensibull/Opstra)',
      'Live Trading Adjustments Coaching',
      'Interactive Doubt-Clearing Workshops'
    ],
    colorTheme: 'indigo',
    nextBatch: '8 Days',
    remainingSeatsText: '4 seats left'
  },
  {
    id: 'ai-analysis',
    badge: 'AI Special',
    badgeType: 'standard',
    title: 'AI for Fundamental & Technical Analysis',
    shortDescription: 'Discover practical AI techniques for company analysis, chart analysis, stock screening, research, and productivity.',
    duration: '4 Hours',
    format: 'Online | Offline',
    schedule: 'One-Day Masterclass | Weekend Batch',
    fee: '₹5,000',
    regularPrice: '₹6,000',
    bonus: 'AI Prompt Library Book (Worth ₹4,999)',
    topics: [
      'AI Tools Overview (ChatGPT, Gemini, Perplexity)',
      'Prompt Engineering for Stock Market Research',
      'Analyzing Annual Reports in Minutes with LLMs',
      'Letting AI Scan and Recognize Chart Patterns',
      'Building AI Custom Screeners & Scanning Rules',
      'Automating Trade Journals and Performance Audits'
    ],
    colorTheme: 'orange',
    nextBatch: '15 Days'
  }
];
