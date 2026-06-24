export interface WorkshopModule {
  title: string;
  points?: string[];
}

export interface WorkshopCourse {
  id: string;
  title: string;
  duration: string;
  fee: string;
  tagline: string;
  idealAudience?: string[];
  bonuses: string[];
  modules: WorkshopModule[];
  outcomes?: string[];
  liveApplication?: string[];
  badge: string;
}

export const workshopCourses: WorkshopCourse[] = [
  {
    id: 'fundamental-analysis-masterclass',
    badge: '1-Day Workshop',
    title: 'AI Powered Fundamental Analysis Masterclass',
    duration: '1 Day',
    fee: '₹2,999',
    tagline: 'Learn how smart investors use AI to find multibagger stocks, read annual reports in minutes, and estimate company intrinsic values.',
    idealAudience: ['Investors', 'Fundamental Analysts', 'Long-term Wealth Creators'],
    bonuses: [
      '100 AI Prompts for Finding Multibagger Stocks'
    ],
    modules: [
      {
        title: 'Module 1: Find Multibagger Stocks in 10 Minutes Using AI',
        points: [
          'AI Stock Screening Framework',
          'Finding Hidden Growth Stocks',
          'Sector Leaders Identification',
          'Future Industry Analysis'
        ]
      },
      {
        title: 'Module 2: Read 200-Page Annual Reports in 15 Minutes',
        points: [
          'AI Annual Report Analysis',
          'Promoter Quality Check',
          'Management Commentary Analysis',
          'Red Flags Detection'
        ]
      },
      {
        title: 'Module 3: AI Formula to Identify Wealth-Creating Companies',
        points: [
          'Revenue Growth Analysis',
          'Profit Growth Analysis',
          'Debt Analysis',
          'ROE & ROCE Analysis',
          'Intrinsic Value Calculation'
        ]
      },
      {
        title: 'Module 4: AI Competitive Advantage Scanner',
        points: [
          'Monopoly Businesses',
          'Market Leaders',
          'Emerging Sector Winners',
          'Future Growth Opportunities'
        ]
      },
      {
        title: 'Module 5: Create Professional Research Reports Using AI',
        points: [
          'Institutional Style Reports',
          'Investment Thesis Creation',
          'Target Price Estimation',
          'Risk Analysis Framework'
        ]
      },
      {
        title: 'Module 6: Live Case Studies',
        points: [
          'Analyse Reliance in 5 Minutes',
          'Analyse TCS in 5 Minutes',
          'Analyse a Small-Cap Stock in 5 Minutes'
        ]
      }
    ],
    outcomes: [
      'Screen and filter stocks using AI in minutes',
      'Quickly extract insights and red flags from annual reports',
      'Compute intrinsic value and margins of safety for any company',
      'Draft institutional-quality research reports'
    ]
  },
  {
    id: 'technical-analysis-masterclass',
    badge: '1-Day Workshop',
    title: 'AI Powered Technical Analysis Masterclass',
    duration: '1 Day',
    fee: '₹2,999',
    tagline: 'Let AI find high-probability trades, identify chart patterns, and build your automated trading system.',
    idealAudience: ['Intraday Traders', 'Swing Traders', 'Technical Analysis Learners'],
    bonuses: [
      '100 Ready-to-Use AI Trading Prompts'
    ],
    modules: [
      {
        title: 'Module 1: Let AI Find High Probability Trades for You',
        points: [
          'AI Trade Scanner',
          'Momentum Stock Detection',
          'Breakout Stock Identification',
          'Swing Trading Opportunities'
        ]
      },
      {
        title: 'Module 2: AI Chart Reading Like a Professional Trader',
        points: [
          'Trend Identification',
          'Support & Resistance Detection',
          'Pattern Recognition',
          'Market Structure Analysis'
        ]
      },
      {
        title: 'Module 3: AI Candlestick Secrets',
        points: [
          'Bullish Patterns',
          'Bearish Patterns',
          'Reversal Signals',
          'Continuation Signals'
        ]
      },
      {
        title: 'Module 4: AI Based Intraday Trading Setup',
        points: [
          'Opening Range Breakout',
          'VWAP Strategy',
          'Scalping Opportunities',
          'Momentum Trading'
        ]
      },
      {
        title: 'Module 5: AI Based Swing Trading Framework',
        points: [
          '5-10 Day Swing Trades',
          'Position Trading Setups',
          'Breakout Strategies',
          'Volume Confirmation'
        ]
      },
      {
        title: 'Module 6: Build Your Personal AI Trading Assistant',
        points: [
          'Custom Trading Prompts',
          'Watchlist Creation',
          'Trade Journal Automation',
          'Daily Market Analysis'
        ]
      },
      {
        title: 'Module 7: Live Market Analysis',
        points: [
          'Nifty Analysis',
          'Bank Nifty Analysis',
          'Live Stock Selection',
          'Real-Time Trade Planning'
        ]
      }
    ],
    outcomes: [
      'Automate pattern scanning on daily and weekly charts',
      'Plan precise entries, stop losses, and target exits with AI scanners',
      'Create personalized trading rules and journal automated insights',
      'Identify swing and intraday setups within live trading environments'
    ]
  },
  {
    id: 'stock-market-accelerator',
    badge: '1-Day Workshop',
    title: 'AI Stock Market Accelerator',
    duration: '1 Day',
    fee: '₹2,999',
    tagline: 'Learn How Smart Traders and Investors Use AI to Analyse Stocks, Find Multibaggers, Create Trading Setups and Save 10+ Hours Every Week.',
    idealAudience: ['Beginners', 'Traders & Investors', 'Busy Professionals wanting to save time'],
    bonuses: [
      'AI Stock Analysis Toolkit',
      'AI Trading Checklist',
      'AI Multibagger Finder Framework',
      'AI Prompt Book (Worth ₹4,999)',
      'Workshop Certificate'
    ],
    modules: [
      { title: 'Module 1: How Smart Investors Use AI' },
      { title: 'Module 2: Find Multibagger Stocks Before Everyone Else' },
      { title: 'Module 3: AI-Based Fundamental Analysis' },
      { title: 'Module 4: AI-Based Technical Analysis' },
      { title: 'Module 5: AI-Based Swing Trading' },
      { title: 'Module 6: AI-Based Intraday Trading' },
      { title: 'Module 7: AI-Based Portfolio Building' },
      { title: 'Module 8: Build Your Personal AI Research Analyst' },
      { title: 'Module 9: Live Market Analysis Using AI' },
      { title: 'Module 10: 50 Powerful AI Prompts Every Trader Must Use' }
    ]
  },
  {
    id: 'futures-options-trader-pro',
    badge: '10-Day Program',
    title: 'Futures & Options Trader Pro',
    duration: '10 Days',
    fee: '₹24,999',
    tagline: 'Learn the process used by disciplined traders to analyse, plan, execute and manage Futures & Options trades with confidence.',
    idealAudience: [
      'Traders looking to enter F&O trading',
      'Option Buyers and Sellers',
      'Technical Analysis Learners',
      'Working Professionals',
      'Individuals seeking a structured approach to derivatives trading'
    ],
    bonuses: [
      'Trading Psychology for F&O Traders (Fear & Greed, Handle Loss, Consistency)',
      'Capital Protection Framework (Daily/Weekly Loss Limits, Position Sizing)',
      'Ready-to-Use Trading Templates (Market Prep Sheet, Trade Journal, Risk Calculator)'
    ],
    modules: [
      {
        title: 'Module 1: Foundation of Futures & Options',
        points: [
          'Understanding Derivatives Market',
          'Futures vs Options',
          'Market Participants',
          'Contract Specifications',
          'Lot Sizes, Expiry & Settlement'
        ]
      },
      {
        title: 'Module 2: Option Chain Decoding',
        points: [
          'Understanding Option Chain Structure',
          'Open Interest Analysis',
          'Change in Open Interest',
          'Identifying Support & Resistance using OI',
          'Put-Call Ratio (PCR)'
        ]
      },
      {
        title: 'Module 3: The Science Behind Option Premiums',
        points: [
          'Intrinsic Value & Time Value',
          'Factors Affecting Option Premium',
          'Understanding Volatility',
          'Time Decay Explained',
          'Premium Behaviour Before Expiry'
        ]
      },
      {
        title: 'Module 4: Option Greeks Made Simple',
        points: [
          'Delta',
          'Gamma',
          'Theta',
          'Vega',
          'How Professionals Use Greeks in Trading'
        ]
      },
      {
        title: 'Module 5: High Probability Option Buying Strategies',
        points: [
          'Momentum Breakout Trading',
          'Trend Following Strategies',
          'Gap Trading Setups',
          'Intraday Option Buying Framework',
          'Swing Trading in Options'
        ]
      },
      {
        title: 'Module 6: Professional Option Selling Techniques',
        points: [
          'Why Institutions Prefer Selling',
          'Probability-Based Trading',
          'Income Generation Strategies',
          'Risk-Controlled Option Selling',
          'Capital Management Framework'
        ]
      },
      {
        title: 'Module 7: Futures Trading Mastery',
        points: [
          'Long & Short Futures',
          'Trend Identification',
          'Futures Build-Up Analysis',
          'Open Interest Interpretation',
          'Risk Management in Futures'
        ]
      },
      {
        title: 'Module 8: Expiry Day Trading Strategies',
        points: [
          'Weekly Expiry Opportunities',
          'Expiry Premium Behaviour',
          'Intraday Expiry Setups',
          'Risk Management on Expiry Days',
          'Live Trade Planning'
        ]
      },
      {
        title: 'Module 9: Advanced F&O Strategies',
        points: [
          'Bull Call Spread, Bear Put Spread, Bull Put Spread',
          'Covered Call, Protective Put',
          'Iron Condor Concept & Hedging Techniques'
        ]
      },
      {
        title: 'Module 10: Building a Professional Trading System',
        points: [
          'Trade Selection Process',
          'Entry & Exit Framework',
          'Position Sizing & Risk-to-Reward Planning',
          'Trading Journal & Performance Tracking'
        ]
      }
    ],
    liveApplication: [
      'Real-Time Option Chain Analysis',
      'Live Trade Setup Identification',
      'Nifty & Bank Nifty Analysis',
      'Trade Planning Sessions',
      'Market Preparation Framework'
    ],
    outcomes: [
      'Read Option Chain like a professional',
      'Understand Greeks and Premium Movement',
      'Trade Futures & Options systematically',
      'Create high-probability trade setups',
      'Manage risk effectively',
      'Build a structured F&O trading plan'
    ]
  }
];
