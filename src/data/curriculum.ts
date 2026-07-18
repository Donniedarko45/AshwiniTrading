export interface WorkshopModule {
  title: string;
  points?: string[];
}

export interface WorkshopCourse {
  id: string;
  badge: string;
  title: string;
  duration: string;
  fee: string;
  tagline: string;
  idealAudience?: string[];
  bonuses: string[];
  modules: WorkshopModule[];
  outcomes?: string[];
  liveApplication?: string[];
}

export const workshopCourses: WorkshopCourse[] = [
  {
    id: 'foundation',
    badge: '3 Hours',
    title: 'Stock Market Foundation Program',
    duration: '3 Hours',
    fee: '₹3,999',
    tagline: 'Build a strong foundation by understanding how financial markets work, NSE/BSE structure, retail/institutional roles, Demat setup, and basics of investing/trading.',
    idealAudience: ['College Students', 'Working Professionals', 'New Investors', 'Aspiring Traders'],
    bonuses: [
      'Course Completion Certificate from Ashwini Trading Academy',
      'Stock Market Terminology Cheat Sheet',
      'Beginner Investment Checklist'
    ],
    modules: [
      {
        title: 'Module 1: Introduction to Financial Markets',
        points: [
          'What are Financial Markets and why they exist',
          'Primary Market vs Secondary Market',
          'Capital Market vs Money Market',
          'Indian Financial Market Structure'
        ]
      },
      {
        title: 'Module 2: Understanding the Stock Market',
        points: [
          'What is the Stock Market & Equity Shares',
          'Why Companies Get Listed & Market Capitalization',
          'Large Cap, Mid Cap & Small Cap Stocks',
          'NSE & BSE exchanges & SEBI Regulations'
        ]
      },
      {
        title: 'Module 3: Market Participants & Products',
        points: [
          'Retail Investors, FIIs & DIIs',
          'Mutual Funds & ETFs',
          'Bonds & REITs'
        ]
      },
      {
        title: 'Module 4: Demat & Trading Accounts',
        points: [
          'Demat vs Trading Account roles',
          'Depositories (NSDL & CDSL) & DPs',
          'Account opening process & brokerage charges'
        ]
      },
      {
        title: 'Module 5: Investing Basics',
        points: [
          'Investing vs Trading differentiation',
          'Intraday, Swing, and Long-Term approaches',
          'Risk & Return basics, Power of Diversification'
        ]
      },
      {
        title: 'Module 6: Live Market Demonstration',
        points: [
          'Market Watch & Quote reading',
          'Bid, Ask, Market Depth & Order types',
          'Navigating trading platforms in real-time'
        ]
      }
    ],
    liveApplication: [
      'Live Trading Platform Demo',
      'Real-Time Watchlist Setup',
      'Simulated Buy/Sell Order Exercises'
    ],
    outcomes: [
      'Understand how stock exchanges and SEBI function',
      'Differentiate between retail, institutional, and mutual fund flows',
      'Navigate live trading terminals and understand order logs',
      'Develop a roadmap for advanced stock market education'
    ]
  },
  {
    id: 'fundamental-ai',
    badge: '3 Hours',
    title: 'Fundamental Analysis with AI',
    duration: '3 Hours',
    fee: '₹2,999',
    tagline: 'Learn to evaluate companies like professional investors. Read annual reports in minutes and estimate intrinsic value using AI models.',
    idealAudience: ['Investors', 'Portfolio Builders', 'Wealth Enthusiasts'],
    bonuses: [
      '100+ AI Prompts for Financial Statement Analysis',
      'Intrinsic Value Calculator Template'
    ],
    modules: [
      {
        title: 'Module 1: AI Stock Screening Framework',
        points: [
          'Finding sector leaders and growth stocks using AI tools',
          'Setting up custom filters for revenue and margin growth',
          'Identifying monopolies and competitive moats'
        ]
      },
      {
        title: 'Module 2: AI-Powered Annual Report Analysis',
        points: [
          'How to extract management commentary from 200+ page reports',
          'Detecting red flags, pledge shares, and corporate governance issues',
          'Auditing promoter actions and financial footnotes using LLMs'
        ]
      },
      {
        title: 'Module 3: Evaluating Financial Performance',
        points: [
          'Revenue, operating profit, and net profit growth cycles',
          'Debt-to-equity metrics and cash flow health analysis',
          'ROE & ROCE interpretation and intrinsic value calculation formulas'
        ]
      }
    ],
    liveApplication: [
      'Real-Time Annual Report Summarization using ChatGPT/Gemini',
      'Interactive Valuation Exercises for Nifty 50 Companies'
    ],
    outcomes: [
      'Analyze balance sheets and P&L statements in minutes using AI',
      'Identify high-quality growth businesses with sustainable competitive advantages',
      'Compute safety margins and make informed, research-driven investments'
    ]
  },
  {
    id: 'technical-ai',
    badge: '3 Hours',
    title: 'Technical Analysis with AI',
    duration: '3 Hours',
    fee: '₹2,999',
    tagline: 'Discover smarter ways to analyze charts, identify support/resistance, draw trendlines, and scan potential trade setups automatically using AI.',
    idealAudience: ['Traders', 'Chart Analysts', 'Swing Investors'],
    bonuses: [
      'AI Trading View Layout Template',
      'Technical Indicator Settings Cheat Sheet'
    ],
    modules: [
      {
        title: 'Module 1: AI Charting Tools Overview',
        points: [
          'Introduction to automated charting platforms and AI plugins',
          'Setting up dynamic layout templates for quick screening',
          'Using AI prompts to write PineScript or scan indicators'
        ]
      },
      {
        title: 'Module 2: Automated Support, Resistance & Trends',
        points: [
          'Algorithm-based S&R zone plotting',
          'AI Trendline draw setups & breakout confirmation',
          'Price channels and multi-timeframe trends analysis'
        ]
      },
      {
        title: 'Module 3: AI Candlestick & Pattern Scanners',
        points: [
          'Automatic detection of Doji, Hammers, and Engulfing patterns',
          'Screening Head & Shoulders, Triangles, and Flags using AI',
          'Confirming patterns with volume profiles and indicator confluences'
        ]
      }
    ],
    liveApplication: [
      'Building Custom Scanners on Chartink and TradingView',
      'Live Stock Screening Using Real-Time AI Prompts'
    ],
    outcomes: [
      'Identify trends and support/resistance zones automatically using tools',
      'Scan a database of 500+ stocks for specific breakout structures instantly',
      'Manage risk and place stop-losses using quantitative rules'
    ]
  },
  {
    id: 'technical-15',
    badge: '15 Days',
    title: 'Technical Analysis -- 15 Days',
    duration: '15 Days',
    fee: '₹6,999',
    tagline: 'Master the fundamentals of chart reading. Understand candlestick patterns, trends, support/resistance, indicators, and price action through structured exercises.',
    idealAudience: ['Beginner Traders', 'Active Investors', 'Students'],
    bonuses: [
      'Technical Analysis Workbook (PDF)',
      '1 Month Doubt-Clearing Community Access'
    ],
    modules: [
      {
        title: 'Module 1: Introduction to Technical Analysis & Dow Theory',
        points: [
          'History and logic of price charting',
          'Difference between fundamental and technical views',
          'Dow Theory principles and market assumptions'
        ]
      },
      {
        title: 'Module 2: Candlestick Formations & Formations Psychology',
        points: [
          'Single Candlesticks: Hammer, Doji, Shooting Star, Marubozu',
          'Multiple Patterns: Engulfing, Morning/Evening Star, Harami',
          'Understanding buyer-seller psychology behind each candle'
        ]
      },
      {
        title: 'Module 3: Trend Analysis & Support/Resistance Levels',
        points: [
          'Higher Highs/Lows structure for Uptrend, Lower Highs/Lows for Downtrend',
          'Drawing horizontal support and resistance lines',
          'Trendlines, price channels, and dynamic moving averages'
        ]
      },
      {
        title: 'Module 4: Technical Indicators & Patterns',
        points: [
          'Moving Averages (SMA & EMA) and crossovers',
          'RSI & MACD indicators for momentum and divergence',
          'Classic chart patterns: Double Tops/Bottoms, Head & Shoulders, Flags'
        ]
      },
      {
        title: 'Module 5: Risk Management & Trading Psychology',
        points: [
          'Position sizing rules and capital protection',
          'Calculating Risk-to-Reward ratio for every entry',
          'Emotional discipline: avoiding FOMO, greed, and panic selling'
        ]
      }
    ],
    liveApplication: [
      'Historical Chart Marking Projects',
      'Interactive Support & Resistance Drawing Workshops',
      'TradingView navigation practice'
    ],
    outcomes: [
      'Read and mark candlestick charts independently',
      'Identify key trend directions and market cycle phases',
      'Mark institutional buying and selling zones (Support & Resistance) accurately',
      'Formulate a basic trade plan with stop-loss and target boundaries'
    ]
  },
  {
    id: 'technical-30-online',
    badge: '30 Days',
    title: 'Technical Analysis Professional (Online)',
    duration: '30 Days',
    fee: '₹9,999',
    tagline: 'Go beyond the basics with advanced price action, Fibonacci analysis, sector/relative strength analysis, scanners, and live market practice (Online Mode).',
    idealAudience: ['Swing Traders', 'Active Day Traders', 'Advanced Chart Learners'],
    bonuses: [
      'Advanced PineScript Scanners Library',
      'Trading Psychology Masterclass Recordings'
    ],
    modules: [
      {
        title: 'Module 1: Advanced Market Structure',
        points: [
          'Break of Structure (BOS) & Change of Character (CHOCH)',
          'Liquidity sweeps, fair value gaps, and institutional footprints',
          'Accumulation & Distribution cycle deep-dive'
        ]
      },
      {
        title: 'Module 2: Advanced Price Action Confirmation',
        points: [
          'Validating breakouts vs false breakdowns (fakeouts)',
          'Pullback entries, dynamic test levels, and trigger candles',
          'Volume Profile analysis (Point of Control, Value Area)'
        ]
      },
      {
        title: 'Module 3: Fibonacci Retracements & Extensions',
        points: [
          'Using Fibonacci to locate entries, pullbacks, and extension targets',
          'Confluence zone identification combining multiple indicators',
          'Multi-timeframe support/resistance zones mapping'
        ]
      },
      {
        title: 'Module 4: Professional Trading Strategies',
        points: [
          'Swing trading setups for 5-15 day holds',
          'Intraday trading models (Opening Range Breakout, VWAP crossovers)',
          'Building customized scanners on Chartink for stock selection'
        ]
      }
    ],
    liveApplication: [
      'Live Market Hours Technical Analysis Practice',
      'Custom Scanner Building Workshops',
      'Backtesting Trading Setups in Google Sheets'
    ],
    outcomes: [
      'Identify high-probability market entries using structure breaks and liquidity',
      'Develop systematic swing and day trading strategies with precise rules',
      'Perform relative strength analysis to find outperforming stocks in active sectors'
    ]
  },
  {
    id: 'technical-30-offline',
    badge: '30 Days Live',
    title: 'Technical Analysis Professional (Live Training)',
    duration: '30 Days',
    fee: '₹14,999',
    tagline: 'Advanced technical analysis including classroom sessions, online revision materials, and hands-on live market training at our Bengaluru facility.',
    idealAudience: ['Bengaluru Local Traders', 'Full-Time Trading Aspirants'],
    bonuses: [
      'All Online Technical Analysis Professional Content & Templates',
      'Classroom Access & Personal Mentorship Sessions',
      'Premium Printed Workbook & Trading Logbook'
    ],
    modules: [
      {
        title: 'Module 1: Classroom Advanced Technical Studies',
        points: [
          'Detailed in-person explanation of advanced price action concepts',
          'Physical chart marking reviews and layout corrections',
          'Direct Q&A with SEBI-registered mentor'
        ]
      },
      {
        title: 'Module 2: Live Market Trading Room Experience',
        points: [
          'Real-time stock screening during live market hours',
          'Observing price action, execution speeds, and bid-ask spreads',
          'Interactive trading setups discussions on active screens'
        ]
      },
      {
        title: 'Module 3: Trading Journaling & Audit',
        points: [
          'Maintaining a physical/digital trading logbook',
          'Auditing weekly performance, win rates, and drawdowns',
          'Correcting psychological mistakes and performance roadblocks'
        ]
      }
    ],
    liveApplication: [
      'Live Trading Desk Observations',
      'Classroom Peer Review Projects',
      'Daily Performance Auditing'
    ],
    outcomes: [
      'Understand live market execution and terminal navigation with ease',
      'Receive direct corrections on analysis mistakes from the mentor',
      'Establish a disciplined daily trading preparation routine'
    ]
  },
  {
    id: 'futures-options-15',
    badge: '15 Days',
    title: 'Futures & Options -- 15 Days',
    duration: '15 Days',
    fee: '₹9,999',
    tagline: 'Learn the fundamentals of derivatives trading. Understand options, options chains, Greeks, open interest, and essential risk management.',
    idealAudience: ['Beginners in Derivatives', 'Stock Traders looking to expand'],
    bonuses: [
      'F&O Terminologies Cheat Sheet',
      'Risk Calculator Tool (Excel)'
    ],
    modules: [
      {
        title: 'Module 1: Introduction to Derivatives',
        points: [
          'What are derivatives, Futures, and Options contracts',
          'Lot sizes, margin requirements, expiry dates, and settlement',
          'Long/Short positions in futures'
        ]
      },
      {
        title: 'Module 2: Option Chain Basics',
        points: [
          'Calls (CE) and Puts (PE) definitions',
          'Decoding Option Chains: strike prices, bid/ask, premium',
          'Open Interest (OI) and Put-Call Ratio (PCR)'
        ]
      },
      {
        title: 'Module 3: Premium pricing & Greeks',
        points: [
          'Intrinsic Value vs Extrinsic Value',
          'Time Decay (Theta) and how it affects premiums before expiry',
          'Overview of Delta, Gamma, and Vega'
        ]
      },
      {
        title: 'Module 4: Simple Buying Strategies',
        points: [
          'Buying Single Calls vs Buying Single Puts based on outlook',
          'Managing risk on buying setups, setting stop-losses',
          'Avoiding option buyer decay traps'
        ]
      }
    ],
    liveApplication: [
      'Option Chain Analysis Workshops',
      'Risk-Reward Simulation Games'
    ],
    outcomes: [
      'Read option chain sheets and identify support/resistance using OI data',
      'Understand premium pricing variables and time decay risks',
      'Plan option buying trades with defined stop-losses and position sizing'
    ]
  },
  {
    id: 'futures-options-30-online',
    badge: '30 Days',
    title: 'Futures & Options Professional (Online)',
    duration: '30 Days',
    fee: '₹14,999',
    tagline: 'Master advanced option Greeks, implied volatility rank, multi-leg strategies, and institutional-level risk management (Online Mode).',
    idealAudience: ['Active Options Traders', 'Swing Traders', 'Income Generators'],
    bonuses: [
      'Option Spread Strategy Planner (Excel)',
      'sensibull Custom Layout Configurations'
    ],
    modules: [
      {
        title: 'Module 1: Advanced Futures Market',
        points: [
          'Rollovers, Cost of Carry, and basis spreads',
          'Identifying accumulation/distribution via futures volume & OI',
          'Analyzing long/short build-ups and short-covering cycles'
        ]
      },
      {
        title: 'Module 2: Advanced Option Chain Analysis',
        points: [
          'Reading changes in OI in real-time during live hours',
          'Put-Call Ratio (PCR) analysis for market reversals',
          'Identifying institutional zones of buying/selling'
        ]
      },
      {
        title: 'Module 3: Advanced Option Greeks & Volatility',
        points: [
          'Delta neutral concepts and dynamic Gamma squeezes',
          'Theta decay scaling and Vega sensitivity analysis',
          'Implied Volatility Rank (IVR), Percentile (IVP), and volatility crushes'
        ]
      },
      {
        title: 'Module 4: Multi-Leg Options Strategies',
        points: [
          'Directional Spreads: Bull Call Spreads, Bear Put Spreads',
          'Income Strategies: Short Straddles, Short Strangles, Iron Condors',
          'Hedging techniques and adjustment rules for selling setups'
        ]
      }
    ],
    liveApplication: [
      'Sensibull/Opstra Simulator Practice',
      'Live Volatility Scanning Sessions',
      'Strategy Backtesting Projects'
    ],
    outcomes: [
      'Design, backtest, and deploy multi-leg option strategies',
      'Manage options portfolios with Greek-neutral adjustments',
      'Use volatility rank to select between buying and selling strategies'
    ]
  },
  {
    id: 'futures-options-30-offline',
    badge: '30 Days Live',
    title: 'Futures & Options Professional (Live Training)',
    duration: '30 Days',
    fee: '₹19,999',
    tagline: 'Advanced derivatives program with interactive classroom learning, live expiry day execution sessions, and offline mentoring.',
    idealAudience: ['Bengaluru Option Traders', 'Full-Time Income Seekers'],
    bonuses: [
      'All Online F&O Professional Content & Tools',
      'In-Person Classroom Mentorship Access',
      'Expiry Day Live Trading Desk Access'
    ],
    modules: [
      {
        title: 'Module 1: Advanced Derivatives Classroom Lectures',
        points: [
          'Detailed in-person study of option selling mechanics',
          'Analyzing multi-leg risk structures and margins',
          'Direct doubt-clearing sessions on custom adjustments'
        ]
      },
      {
        title: 'Module 2: Live Expiry Day Trading Sessions',
        points: [
          'Trading weekly index expiries (Nifty, Bank Nifty) in live hours',
          'Monitoring premium decay, Gamma spikes, and volatility crushes',
          'Interactive discussion on real-time trade adjustments'
        ]
      },
      {
        title: 'Module 3: Professional Risk Management',
        points: [
          'Setting daily/weekly loss limits and drawdowns plans',
          'Managing margin requirements and leverage risks',
          'Structuring a trading business plan'
        ]
      }
    ],
    liveApplication: [
      'Live Expiry Day Execution',
      'Live Adjustments Demonstrations',
      'Classroom Peer Case Studies'
    ],
    outcomes: [
      'Trade options expiries with hands-on live adjustments coaching',
      'Understand institutional risk control and capital allocation frameworks',
      'Build a structured plan to operate options trading as a business'
    ]
  },
  {
    id: 'ai-analysis',
    badge: '4 Hours',
    title: 'AI for Fundamental & Technical Analysis',
    duration: '4 Hours',
    fee: '₹5,000',
    tagline: 'A comprehensive 4-hour masterclass showing you how to integrate LLMs (ChatGPT, Gemini, Perplexity) into daily stock research, valuation modeling, and strategy backtesting.',
    idealAudience: ['Busy Professionals', 'Traders & Investors wanting automation', 'Students'],
    bonuses: [
      'Custom GPTs/Prompts Library (Value ₹4,999)',
      'Python Script for basic chart downloads'
    ],
    modules: [
      {
        title: 'Module 1: AI Prompt Engineering for Finance',
        points: [
          'Writing precise, structured prompts for financial analysis',
          'Using ChatGPT, Google Gemini, and Perplexity for quick lookups',
          'Automating market news and sector summaries'
        ]
      },
      {
        title: 'Module 2: AI-Powered Company Valuations',
        points: [
          'Summarizing annual reports and management transcripts in minutes',
          'Instructing AI to extract balance sheet ratios and highlight anomalies',
          'AI-assisted DCF (Discounted Cash Flow) modeling step-by-step'
        ]
      },
      {
        title: 'Module 3: AI-Powered Technical Analysis & Strategy',
        points: [
          'Using AI to generate TradingView PineScript or scan indicators',
          'Backtesting simple trading strategies using AI coding assistance',
          'Creating automated trade journals and audit workflows'
        ]
      }
    ],
    liveApplication: [
      'Summarizing Live Annual Reports',
      'Generating Custom Scanners using AI Prompts',
      'Drafting research notes with AI assistance'
    ],
    outcomes: [
      'Save 10+ hours every week on manual stock research and scanning',
      'Analyze complex financial documents instantly using customized LLM tools',
      'Write basic chart scanning code and automate logbooks using prompts'
    ]
  },
  {
    id: 'basics-to-advanced',
    badge: '2 Months',
    title: 'Basics to Advanced Stock Market Program',
    duration: '2 Months',
    fee: '₹50,000',
    tagline: 'One complete program covering everything you need to learn: fundamentals, long-term investing, technical analysis, futures & options, AI, risk management, and trading psychology.',
    idealAudience: ['Complete Beginners', 'Aspiring Traders', 'Long-Term Investors', 'Finance Professionals'],
    bonuses: [
      'Recorded Video Course Access (Lifetime)',
      '1-on-1 Mentor Reviews & Audits',
      'Premium Toolkit (Worth ₹15,000)'
    ],
    modules: [
      {
        title: 'Module 1: Stock Market Foundations',
        points: [
          'History and structure of Indian financial markets',
          'Demat accounts, depositories, NSE, BSE, and SEBI regulations',
          'Retail, institutional, and mutual fund flows'
        ]
      },
      {
        title: 'Module 2: Fundamental Analysis & Valuations',
        points: [
          'Reading financial statements, balance sheets, and cash flows',
          'Core ratio analysis and annual report decoding using AI',
          'Monopoly business models and margin of safety calculations'
        ]
      },
      {
        title: 'Module 3: Basic to Advanced Technical Analysis',
        points: [
          'Candlestick structures, support/resistance, and trendlines',
          'Market structure (BOS, CHOCH) and price action concepts',
          'Indicators, chart patterns, and scanner building'
        ]
      },
      {
        title: 'Module 4: Futures & Options Trading',
        points: [
          'Futures rollovers and options chain decoding',
          'Option Greeks, implied volatility rank, and time decay',
          'Multi-leg strategies (Spreads, Iron Condors) and adjustments'
        ]
      },
      {
        title: 'Module 5: Risk Management & Trading Psychology',
        points: [
          'Capital preservation frameworks and position sizing',
          'Maintaining digital logbooks and weekly trade audits',
          'Emotional discipline: handling losses and maintaining consistency'
        ]
      }
    ],
    liveApplication: [
      'Daily Live Market Hours Classes',
      'Guided Stock Research Projects',
      'Simulator Practice & Peer Reviews'
    ],
    outcomes: [
      'Master financial markets from complete basics to professional trading standards',
      'Analyze businesses, read price charts, and trade derivatives systematically',
      'Implement institutional risk management and trading psychology controls'
    ]
  },
  {
    id: 'nism-certified',
    badge: '6 Months',
    title: 'NISM Certified Stock Market Program',
    duration: '6 Months',
    fee: '₹99,999',
    tagline: 'Build a career in financial services. Complete 6-month program preparing you for NISM Series V-A, VIII, and X-A examinations along with practical market skills.',
    idealAudience: ['Finance Career Seekers', 'MBA/Commerce Graduates', 'Aspiring Research Analysts'],
    bonuses: [
      'NISM Official Study Guides & Mock Test Papers',
      'Resume Review & Interview Preparation Workshops',
      'Internship Letter for eligible candidates'
    ],
    modules: [
      {
        title: 'Module 1: Indian Securities Market Framework',
        points: [
          'In-depth study of capital markets, regulations, and intermediaries',
          'SEBI guidelines, listing requirements, and compliance laws',
          'Role of depositories, clearing houses, and custodians'
        ]
      },
      {
        title: 'Module 2: NISM Series V-A: Mutual Fund Distributors',
        points: [
          'Mutual fund types, structures, and schemes',
          'Net Asset Value (NAV) calculations and fee structures',
          'Investment advisory processes and ethical practices'
        ]
      },
      {
        title: 'Module 3: NISM Series VIII: Equity Derivatives',
        points: [
          'Equity derivative markets, indices, and stock options',
          'Margining systems, clearing, and settlement calculations',
          'Mock test assessments and review of previous exam patterns'
        ]
      },
      {
        title: 'Module 4: NISM Series X-A: Investment Adviser (Level 1)',
        points: [
          'Personal financial planning, asset allocation, and tax planning',
          'Evaluating investment products and investment advisory laws',
          'Case study discussions and mock question solutions'
        ]
      },
      {
        title: 'Module 5: Practical Financial Analysis & Career Prep',
        points: [
          'Writing institutional equity research reports',
          'Navigating terminal databases (TradingView, Screener, Sensibull)',
          'Resume building, communication skills, and mock interviews'
        ]
      }
    ],
    liveApplication: [
      'NISM Mock Exam Series',
      'Research Report Projects',
      'Advisory Pitch Simulations'
    ],
    outcomes: [
      'Prepare confidently for NISM Series V-A, VIII, and X-A examinations',
      'Draft institutional-quality research reports and investment advisory advice',
      'Transition smoothly into professional careers in financial services'
    ]
  }
];
