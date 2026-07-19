export interface WorkshopModule {
  title: string;
  points?: string[];
}

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface WorkshopCourse {
  id: string;
  badge: string;
  title: string;
  duration: string;
  fee: string;
  tagline: string;
  overview?: string;
  idealAudience?: string[];
  skillsYoullGain?: string[];
  bonuses: string[];
  modules: WorkshopModule[];
  outcomes?: string[];
  liveApplication?: string[];
  toolsCovered?: string[];
  courseIncludes?: string[];
  faqs?: CourseFAQ[];
  nextSteps?: string[];
}

export const workshopCourses: WorkshopCourse[] = [
  {
    id: 'foundation',
    badge: '3 Hours',
    title: 'Stock Market Foundation',
    duration: '3 Hours',
    fee: '₹3,999',
    tagline: 'Build Your Financial Knowledge from the Ground Up',
    overview: 'Begin your financial learning journey by understanding what financial markets are, why they exist, and how they contribute to economic growth. This program introduces the core concepts that every investor and trader should know — from stock market basics to live market demonstrations.',
    idealAudience: ['Beginners', 'Students', 'Working Professionals', 'First-Time Investors', 'Entrepreneurs', 'Anyone interested in learning about the stock market'],
    skillsYoullGain: [
      'Understand how financial markets work',
      'Learn the structure of the Indian stock market',
      'Differentiate between investing and trading',
      'Understand key market participants',
      'Learn about major investment products',
      'Understand Demat & Trading Accounts',
      'Learn how stock exchanges function',
      'Experience a live market demonstration',
      'Build confidence to continue your financial education'
    ],
    bonuses: [
      'Course Completion Certificate from Ashwini Trading Academy',
      'Stock Market Terminology Cheat Sheet',
      'Beginner Investment Checklist'
    ],
    modules: [
      {
        title: 'Module 1: Introduction to Financial Markets',
        points: [
          'What are Financial Markets?',
          'Importance of Financial Markets',
          'Types of Financial Markets',
          'Primary Market vs Secondary Market',
          'Capital Market vs Money Market',
          'Indian Financial Market Structure'
        ]
      },
      {
        title: 'Module 2: Understanding the Stock Market',
        points: [
          'What is the Stock Market?',
          'Equity Shares',
          'Why Companies Get Listed',
          'Market Capitalization',
          'Large Cap, Mid Cap & Small Cap',
          'NSE & BSE',
          'Role of SEBI'
        ]
      },
      {
        title: 'Module 3: Market Participants & Investment Products',
        points: [
          'Retail Investors',
          'Institutional Investors',
          'FIIs & DIIs',
          'Mutual Funds',
          'ETFs',
          'Bonds',
          'Gold ETFs',
          'REITs & InvITs'
        ]
      },
      {
        title: 'Module 4: Demat & Trading Accounts',
        points: [
          'Demat Account',
          'Trading Account',
          'Depositories (NSDL & CDSL)',
          'Depository Participants',
          'Account Opening Process',
          'Brokerage Charges'
        ]
      },
      {
        title: 'Module 5: Investing Basics',
        points: [
          'Investing vs Trading',
          'Long-Term Investing',
          'Swing Trading',
          'Intraday Trading',
          'Risk & Return',
          'Diversification'
        ]
      },
      {
        title: 'Module 6: Understanding Market Indices',
        points: [
          'What is an Index?',
          'Nifty 50',
          'Sensex',
          'Bank Nifty',
          'Sectoral Indices',
          'Index Movements'
        ]
      },
      {
        title: 'Module 7: Live Market Demonstration',
        points: [
          'Market Watch',
          'Price Quotes',
          'Bid & Ask',
          'Market Depth',
          'Order Types',
          'Live Stock Observation'
        ]
      },
      {
        title: 'Module 8: Your Learning Roadmap',
        points: [
          'Introduction to Fundamental Analysis',
          'Introduction to Technical Analysis',
          'Introduction to Futures & Options',
          'AI in Financial Markets',
          'Choosing Your Learning Path'
        ]
      }
    ],
    courseIncludes: [
      '3 Hours of Instructor-Led Training',
      'Digital Study Material',
      'Live Market Demonstration',
      'Interactive Q&A Session',
      'Course Completion Certificate',
      'Post-Session Learning Resources'
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
    ],
    nextSteps: [
      'Fundamental Analysis with AI',
      'Technical Analysis with AI',
      'Technical Analysis — 15 Days',
      'Basics to Advanced Stock Market Program'
    ],
    faqs: [
      { question: 'Which course is best for beginners?', answer: 'We recommend starting with the Stock Market Foundation program before progressing to advanced courses.' },
      { question: 'Are the courses available online?', answer: 'Yes. Most programs are available in Online, Classroom, or Hybrid learning modes.' },
      { question: 'Do I need prior market knowledge?', answer: 'No. We offer programs for complete beginners as well as experienced learners.' }
    ]
  },
  {
    id: 'fundamental-ai',
    badge: '3 Hours',
    title: 'Fundamental Analysis with AI',
    duration: '3 Hours',
    fee: '₹2,999',
    tagline: 'Learn to Evaluate Companies Like an Investor',
    overview: 'Understand financial statements, business performance, valuation basics, and explore how AI can make company research faster and more efficient. Learn to evaluate companies like professional investors, read annual reports in minutes and estimate intrinsic value using AI models.',
    idealAudience: ['Investors', 'Portfolio Builders', 'Wealth Enthusiasts'],
    skillsYoullGain: [
      'Analyze balance sheets and P&L statements using AI',
      'Identify high-quality growth businesses',
      'Compute safety margins for investments',
      'Use AI for annual report summarization',
      'Screening for multibagger stocks',
      'Detect management quality and red flags'
    ],
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
    courseIncludes: [
      '3 Hours of Instructor-Led Training',
      'Digital Study Material',
      'AI Prompt Library',
      'Interactive Q&A Session',
      'Course Completion Certificate'
    ],
    liveApplication: [
      'Real-Time Annual Report Summarization using ChatGPT/Gemini',
      'Interactive Valuation Exercises for Nifty 50 Companies'
    ],
    outcomes: [
      'Analyze balance sheets and P&L statements in minutes using AI',
      'Identify high-quality growth businesses with sustainable competitive advantages',
      'Compute safety margins and make informed, research-driven investments'
    ],
    faqs: [
      { question: 'Do I need prior knowledge of finance?', answer: 'Basic awareness of financial markets is helpful but not mandatory.' },
      { question: 'Will I learn to use AI tools?', answer: 'Yes. The course integrates AI tools like ChatGPT and Gemini for financial analysis.' }
    ]
  },
  {
    id: 'technical-ai',
    badge: '3 Hours',
    title: 'Technical Analysis with AI',
    duration: '3 Hours',
    fee: '₹2,999',
    tagline: 'Discover Smarter Ways to Analyze Charts',
    overview: 'Learn how Artificial Intelligence can assist with chart analysis, stock screening, market research, and technical decision-making. Discover smarter ways to analyze charts, identify support/resistance, draw trendlines, and scan potential trade setups automatically using AI.',
    idealAudience: ['Traders', 'Chart Analysts', 'Swing Investors'],
    skillsYoullGain: [
      'Identify trends and support/resistance zones automatically',
      'Scan 500+ stocks for specific breakout structures instantly',
      'Manage risk using quantitative rules',
      'Build custom scanners on Chartink and TradingView',
      'AI-powered candlestick and pattern detection',
      'Risk-reward planning with AI tools'
    ],
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
    courseIncludes: [
      '3 Hours of Instructor-Led Training',
      'Digital Study Material',
      'AI Templates & Scanner Configs',
      'Interactive Q&A Session',
      'Course Completion Certificate'
    ],
    liveApplication: [
      'Building Custom Scanners on Chartink and TradingView',
      'Live Stock Screening Using Real-Time AI Prompts'
    ],
    outcomes: [
      'Identify trends and support/resistance zones automatically using tools',
      'Scan a database of 500+ stocks for specific breakout structures instantly',
      'Manage risk and place stop-losses using quantitative rules'
    ],
    faqs: [
      { question: 'Do I need coding skills?', answer: 'No coding skills are required. AI tools handle the complexity for you.' },
      { question: 'Which AI tools will be covered?', answer: 'The course covers ChatGPT, Gemini, TradingView AI features, and Chartink.' }
    ]
  },
  {
    id: 'technical-15',
    badge: '15 Days',
    title: 'Technical Analysis — 15 Days',
    duration: '15 Days',
    fee: '₹6,999',
    tagline: 'Master the Art of Reading Price Charts with Confidence',
    overview: 'Technical Analysis is one of the most widely used approaches for understanding market behavior. This program is designed to help you build a strong foundation in chart reading, price action, candlestick analysis, trend identification, support & resistance, indicators, and trading psychology. Through structured learning and practical chart analysis, you\'ll develop the skills to interpret market movements with greater confidence.',
    idealAudience: ['Beginners who want to learn Technical Analysis', 'Intraday Traders', 'Swing Traders', 'Positional Traders', 'Investors', 'Working Professionals', 'College Students', 'Anyone interested in chart-based market analysis'],
    skillsYoullGain: [
      'Read and interpret candlestick charts',
      'Identify market trends',
      'Understand support & resistance',
      'Use technical indicators effectively',
      'Analyze chart patterns',
      'Apply price action concepts',
      'Improve trade planning',
      'Develop disciplined trading habits'
    ],
    bonuses: [
      'Technical Analysis Workbook (PDF)',
      '1 Month Doubt-Clearing Community Access'
    ],
    modules: [
      {
        title: 'Module 1: Introduction to Technical Analysis',
        points: [
          'What is Technical Analysis?',
          'Technical Analysis vs Fundamental Analysis',
          'Dow Theory',
          'Market Assumptions',
          'Types of Charts',
          'Time Frames',
          'Chart Navigation'
        ]
      },
      {
        title: 'Module 2: Understanding Candlestick Charts',
        points: [
          'Candlestick Structure',
          'Bullish Candles',
          'Bearish Candles',
          'Doji',
          'Hammer',
          'Hanging Man',
          'Shooting Star',
          'Inverted Hammer',
          'Marubozu',
          'Spinning Top'
        ]
      },
      {
        title: 'Module 3: Multiple Candlestick Patterns',
        points: [
          'Bullish Engulfing',
          'Bearish Engulfing',
          'Piercing Pattern',
          'Dark Cloud Cover',
          'Morning Star',
          'Evening Star',
          'Three White Soldiers',
          'Three Black Crows',
          'Harami',
          'Tweezer Tops & Bottoms'
        ]
      },
      {
        title: 'Module 4: Market Structure & Trend Analysis',
        points: [
          'Higher Highs & Higher Lows',
          'Lower Highs & Lower Lows',
          'Uptrend',
          'Downtrend',
          'Sideways Market',
          'Trend Reversal',
          'Trend Continuation',
          'Trend Strength'
        ]
      },
      {
        title: 'Module 5: Support & Resistance',
        points: [
          'Static Support',
          'Static Resistance',
          'Dynamic Support',
          'Dynamic Resistance',
          'Role Reversal',
          'Breakout',
          'Breakdown',
          'False Breakouts'
        ]
      },
      {
        title: 'Module 6: Trendlines & Price Channels',
        points: [
          'Drawing Trendlines',
          'Valid Trendlines',
          'Trendline Breaks',
          'Ascending Channel',
          'Descending Channel',
          'Horizontal Channel'
        ]
      },
      {
        title: 'Module 7: Technical Indicators',
        points: [
          'Moving Average',
          'Exponential Moving Average',
          'RSI',
          'MACD',
          'Bollinger Bands',
          'VWAP (Introduction)',
          'Volume',
          'Open Interest (Introduction)'
        ]
      },
      {
        title: 'Module 8: Chart Patterns',
        points: [
          'Double Top',
          'Double Bottom',
          'Head & Shoulders',
          'Inverse Head & Shoulders',
          'Triangle Patterns',
          'Rectangle Pattern',
          'Flag',
          'Pennant',
          'Cup & Handle'
        ]
      },
      {
        title: 'Module 9: Introduction to Price Action',
        points: [
          'Price Action Basics',
          'Momentum',
          'Impulse & Correction',
          'Breakout Confirmation',
          'Retest',
          'Market Context'
        ]
      },
      {
        title: 'Module 10: Risk Management & Trading Psychology',
        points: [
          'Risk Management Basics',
          'Position Sizing',
          'Stop Loss',
          'Risk-Reward Ratio',
          'Emotional Discipline',
          'Trading Mistakes',
          'Building a Trading Routine'
        ]
      },
      {
        title: 'Module 11: Practical Chart Analysis',
        points: [
          'Trend Identification',
          'Support & Resistance Marking',
          'Pattern Recognition',
          'Indicator Analysis',
          'Chart Discussion',
          'Trade Planning Exercise'
        ]
      }
    ],
    toolsCovered: [
      'TradingView',
      'Chartink (Introduction)',
      'NSE Website',
      'BSE Website',
      'Basic Charting Platforms'
    ],
    courseIncludes: [
      '15 Days of Live Online Training',
      'Digital Study Material',
      'Practical Chart Analysis Sessions',
      'Daily Practice Exercises',
      'Interactive Q&A Sessions',
      'Course Completion Certificate'
    ],
    liveApplication: [
      'Historical Chart Marking Projects',
      'Interactive Support & Resistance Drawing Workshops',
      'TradingView navigation practice'
    ],
    outcomes: [
      'Read candlestick charts confidently',
      'Identify market trends',
      'Draw support & resistance levels',
      'Use technical indicators effectively',
      'Recognize chart patterns',
      'Understand price action basics',
      'Apply risk management principles',
      'Analyze charts independently'
    ],
    faqs: [
      { question: 'Do I need prior experience?', answer: 'No. This course is designed for beginners and those looking to strengthen their technical analysis skills.' },
      { question: 'Will I practice on real charts?', answer: 'Yes. The program includes practical chart analysis sessions using live and historical market examples.' },
      { question: 'Will I learn trading strategies?', answer: 'This course focuses on building a strong technical analysis foundation. Advanced strategy development is covered in the 30-Day Technical Analysis Professional program.' },
      { question: 'Will I receive study material?', answer: 'Yes. Digital learning resources are included.' }
    ]
  },
  {
    id: 'technical-30-online',
    badge: '30 Days',
    title: 'Technical Analysis Professional — 30 Days',
    duration: '30 Days',
    fee: '₹9,999',
    tagline: 'Master Advanced Technical Analysis Through Practical Market Learning',
    overview: 'The Technical Analysis Professional Program is designed for learners who want to move beyond the basics and develop a structured approach to analyzing the financial markets. Through advanced chart analysis, price action, trading strategies, and live market sessions, you\'ll gain practical knowledge that can help you confidently interpret market behavior.',
    idealAudience: ['Students who have completed Technical Analysis (15 Days)', 'Swing Traders', 'Intraday Traders', 'Positional Traders', 'Working Professionals', 'Investors looking to improve chart analysis', 'Anyone wanting advanced technical analysis skills'],
    skillsYoullGain: [
      'Advanced Price Action',
      'Multi-Timeframe Analysis',
      'Advanced Chart Patterns',
      'Fibonacci Analysis',
      'Advanced Technical Indicators',
      'Trading Strategies',
      'Sector Analysis',
      'Scanner Building',
      'Trading Psychology',
      'Live Market Analysis'
    ],
    bonuses: [
      'Advanced PineScript Scanners Library',
      'Trading Psychology Masterclass Recordings'
    ],
    modules: [
      {
        title: 'Module 1: Advanced Market Structure',
        points: [
          'Market Structure',
          'Trend Continuation',
          'Trend Reversal',
          'Accumulation',
          'Distribution',
          'Break of Structure (BOS)',
          'Change of Character (CHOCH)',
          'Liquidity Concepts'
        ]
      },
      {
        title: 'Module 2: Advanced Price Action',
        points: [
          'Price Action Confirmation',
          'Breakout Validation',
          'Pullback Trading',
          'Fake Breakouts',
          'Momentum Analysis',
          'Consolidation',
          'Range Trading',
          'Trend Continuation Setups'
        ]
      },
      {
        title: 'Module 3: Advanced Support & Resistance',
        points: [
          'Zone-Based Support & Resistance',
          'Demand & Supply Concepts',
          'Dynamic Levels',
          'Role Reversal',
          'Multiple Timeframe Levels',
          'Strong vs Weak Levels'
        ]
      },
      {
        title: 'Module 4: Fibonacci Analysis',
        points: [
          'Fibonacci Retracement',
          'Fibonacci Extension',
          'Entry Planning',
          'Target Planning',
          'Confluence Zones'
        ]
      },
      {
        title: 'Module 5: Advanced Technical Indicators',
        points: [
          'Advanced RSI',
          'MACD Combinations',
          'VWAP',
          'ATR',
          'ADX',
          'Bollinger Bands',
          'Volume Analysis',
          'Indicator Confluence'
        ]
      },
      {
        title: 'Module 6: Advanced Chart Patterns',
        points: [
          'Cup & Handle',
          'Ascending Triangle',
          'Descending Triangle',
          'Symmetrical Triangle',
          'Broadening Patterns',
          'Flags',
          'Pennants',
          'Wedges'
        ]
      },
      {
        title: 'Module 7: Trading Strategies',
        points: [
          'Breakout Strategy',
          'Pullback Strategy',
          'Trend Following',
          'Swing Trading',
          'Positional Trading',
          'Momentum Trading',
          'Gap Analysis'
        ]
      },
      {
        title: 'Module 8: Scanner Building & Stock Selection',
        points: [
          'Introduction to Chartink',
          'Creating Stock Scanners',
          'Breakout Scanner',
          'Volume Scanner',
          'Trend Scanner',
          'Momentum Scanner',
          'Watchlist Creation'
        ]
      },
      {
        title: 'Module 9: Sector & Relative Strength Analysis',
        points: [
          'Sector Rotation',
          'Relative Strength',
          'Strong vs Weak Stocks',
          'Market Leadership',
          'Index Comparison'
        ]
      },
      {
        title: 'Module 10: Trading Psychology & Risk Management',
        points: [
          'Emotional Discipline',
          'Trading Plan',
          'Position Sizing',
          'Risk-to-Reward',
          'Trade Journaling',
          'Performance Review',
          'Common Trading Mistakes'
        ]
      },
      {
        title: 'Module 11: Live Market Training',
        points: [
          'Live Chart Analysis',
          'Trade Planning',
          'Market Observation',
          'Breakout Identification',
          'Strategy Discussion',
          'Trade Review Sessions'
        ]
      }
    ],
    toolsCovered: [
      'TradingView (Advanced)',
      'Chartink',
      'NSE India',
      'BSE India',
      'Screener.in',
      'Excel',
      'AI Tools for Market Analysis'
    ],
    courseIncludes: [
      '30 Days of Live Training',
      'Online / Offline / Hybrid Learning',
      'Live Market Sessions',
      'Digital Study Material',
      'Chart Analysis Workbook',
      'Scanner Templates',
      'Trading Journal Template',
      'Interactive Q&A Sessions',
      'Course Completion Certificate'
    ],
    liveApplication: [
      'Live Market Hours Technical Analysis Practice',
      'Custom Scanner Building Workshops',
      'Backtesting Trading Setups in Google Sheets'
    ],
    outcomes: [
      'Analyze charts using advanced technical concepts',
      'Apply multiple technical tools together',
      'Build trading strategies with confidence',
      'Create stock scanners',
      'Understand market structure',
      'Plan trades with better discipline',
      'Improve chart reading skills through practical learning',
      'Develop a structured market analysis process'
    ],
    faqs: [
      { question: 'Do I need to complete the 15-Day Technical Analysis course first?', answer: 'While it\'s recommended, learners with a strong understanding of basic technical analysis may also benefit from this program.' },
      { question: 'Will there be live market sessions?', answer: 'Yes. Practical market sessions are included to help you apply the concepts discussed during the course.' },
      { question: 'Will I learn ready-made trading strategies?', answer: 'You\'ll learn structured analytical approaches and strategy frameworks, along with guidance on how to evaluate and refine them through practice.' }
    ]
  },
  {
    id: 'technical-30-offline',
    badge: '30 Days Live',
    title: 'Technical Analysis Professional (Live Training)',
    duration: '30 Days',
    fee: '₹14,999',
    tagline: 'Advanced Technical Analysis with Classroom + Live Market Training',
    overview: 'Advanced technical analysis including classroom sessions, online revision materials, and hands-on live market training at our Bengaluru facility. This program covers all online course modules plus in-person mentoring and live market desk access.',
    idealAudience: ['Bengaluru Local Traders', 'Full-Time Trading Aspirants'],
    skillsYoullGain: [
      'All online Technical Analysis Professional skills',
      'Classroom-based advanced chart analysis',
      'Live market execution and terminal navigation',
      'Direct mentor corrections on analysis',
      'Trading journaling and performance audit'
    ],
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
    toolsCovered: [
      'TradingView (Advanced)',
      'Chartink',
      'NSE India',
      'BSE India',
      'Screener.in'
    ],
    courseIncludes: [
      '30 Days of Live Training',
      'Classroom Learning + Online Revision',
      'Live Market Training',
      'Digital Study Material',
      'Printed Workbook',
      'Trading Logbook',
      'Course Completion Certificate'
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
    ],
    faqs: [
      { question: 'Is this only available in Bengaluru?', answer: 'Yes. The offline component requires attendance at our Bengaluru facility.' },
      { question: 'Does this include the online course content?', answer: 'Yes. You get all online modules plus classroom mentorship and live market training.' }
    ]
  },
  {
    id: 'futures-options-15',
    badge: '15 Days',
    title: 'Futures & Options — 15 Days',
    duration: '15 Days',
    fee: '₹9,999',
    tagline: 'Learn the Fundamentals of Derivatives Trading',
    overview: 'Understand Futures, Options, Option Chains, Greeks, Open Interest, and risk management through structured learning. This program is designed for traders who want to understand how derivatives work and build a foundation for more advanced F&O strategies.',
    idealAudience: ['Beginners in Derivatives', 'Stock Traders looking to expand', 'Investors', 'Working Professionals', 'Anyone interested in understanding F&O markets'],
    skillsYoullGain: [
      'Understand derivatives market structure',
      'Read and decode option chains',
      'Understand intrinsic and time value',
      'Learn Option Greeks basics',
      'Identify high-probability option buying setups',
      'Apply basic risk management and position sizing'
    ],
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
        title: 'Module 3: Premium Pricing & Greeks',
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
    courseIncludes: [
      '15 Days of Live Online Training',
      'Digital Study Material',
      'Option Chain Analysis Workshops',
      'Interactive Q&A Sessions',
      'Risk Calculator Tool',
      'Course Completion Certificate'
    ],
    liveApplication: [
      'Option Chain Analysis Workshops',
      'Risk-Reward Simulation Games'
    ],
    outcomes: [
      'Read option chain sheets and identify support/resistance using OI data',
      'Understand premium pricing variables and time decay risks',
      'Plan option buying trades with defined stop-losses and position sizing'
    ],
    faqs: [
      { question: 'Do I need prior F&O knowledge?', answer: 'No. This program is designed for beginners who want to understand derivatives.' },
      { question: 'Will I learn trading strategies?', answer: 'You will learn basic option buying strategies and risk management. Advanced strategies are covered in the 30-Day program.' }
    ]
  },
  {
    id: 'futures-options-30-online',
    badge: '30 Days',
    title: 'Futures & Options Professional — 30 Days',
    duration: '30 Days',
    fee: '₹14,999',
    tagline: 'Master Advanced Derivatives Trading with Professional-Level Market Analysis',
    overview: 'This advanced program is designed for learners who already understand the fundamentals of Futures & Options and want to build professional-level analytical skills. Through structured modules, practical demonstrations, and live market sessions, you\'ll learn how to interpret option data, evaluate different trading strategies, manage risk, and develop a disciplined derivatives trading process.',
    idealAudience: ['Students who have completed the 15-Day F&O Program', 'Technical Traders', 'Active Options Traders', 'Swing & Positional Traders', 'Working Professionals', 'Anyone looking to deepen their understanding of derivatives'],
    skillsYoullGain: [
      'Advanced Option Chain Analysis',
      'Advanced Option Greeks',
      'Implied Volatility & Volatility Analysis',
      'Multi-Leg Option Strategies',
      'Option Buying & Option Selling Concepts',
      'Futures Trading Techniques',
      'Trade Planning & Risk Management',
      'Live Market Analysis'
    ],
    bonuses: [
      'Option Spread Strategy Planner (Excel)',
      'sensibull Custom Layout Configurations'
    ],
    modules: [
      {
        title: 'Module 1: Advanced Futures Market',
        points: [
          'Futures Market Structure',
          'Contract Rollover',
          'Basis & Cost of Carry',
          'Open Interest Analysis',
          'Long & Short Build-Up',
          'Futures Volume Analysis',
          'Expiry Dynamics'
        ]
      },
      {
        title: 'Module 2: Advanced Option Chain Analysis',
        points: [
          'Advanced Option Chain Reading',
          'OI Build-Up',
          'OI Unwinding',
          'Long Build-Up',
          'Short Build-Up',
          'Long Unwinding',
          'Short Covering',
          'PCR Analysis'
        ]
      },
      {
        title: 'Module 3: Option Greeks in Depth',
        points: [
          'Delta',
          'Gamma',
          'Theta',
          'Vega',
          'Rho',
          'Greek Interaction',
          'Practical Greek Interpretation'
        ]
      },
      {
        title: 'Module 4: Implied Volatility & Volatility Analysis',
        points: [
          'Historical Volatility',
          'Implied Volatility',
          'IV Rank',
          'IV Percentile',
          'Volatility Crush',
          'Choosing Strategies Based on IV'
        ]
      },
      {
        title: 'Module 5: Advanced Option Buying Strategies',
        points: [
          'Long Call',
          'Long Put',
          'Call Debit Spread',
          'Put Debit Spread',
          'Momentum Setups',
          'Trend-Based Entries'
        ]
      },
      {
        title: 'Module 6: Advanced Option Selling Strategies',
        points: [
          'Short Straddle',
          'Short Strangle',
          'Iron Condor',
          'Iron Butterfly',
          'Credit Spreads',
          'Covered Call',
          'Cash-Secured Put'
        ]
      },
      {
        title: 'Module 7: Strategy Selection & Trade Planning',
        points: [
          'Bullish Markets',
          'Bearish Markets',
          'Sideways Markets',
          'High Volatility',
          'Low Volatility',
          'Entry Planning',
          'Exit Planning'
        ]
      },
      {
        title: 'Module 8: Risk Management for F&O',
        points: [
          'Position Sizing',
          'Capital Allocation',
          'Maximum Loss Planning',
          'Stop-Loss Techniques',
          'Risk-to-Reward',
          'Portfolio Risk'
        ]
      },
      {
        title: 'Module 9: Live Market Sessions',
        points: [
          'Live Option Chain Analysis',
          'Strategy Discussions',
          'Futures Analysis',
          'Trade Planning',
          'Market Observation',
          'Trade Review',
          'Risk Evaluation'
        ]
      }
    ],
    toolsCovered: [
      'NSE Option Chain',
      'Sensibull',
      'Opstra',
      'TradingView',
      'NSE India',
      'Excel',
      'AI Tools for Market Analysis'
    ],
    courseIncludes: [
      '30 Days of Live Training',
      'Online / Offline / Hybrid Learning',
      'Live Market Sessions',
      'Digital Study Material',
      'Option Strategy Workbook',
      'Risk Management Templates',
      'Interactive Q&A Sessions',
      'Course Completion Certificate'
    ],
    liveApplication: [
      'Sensibull/Opstra Simulator Practice',
      'Live Volatility Scanning Sessions',
      'Strategy Backtesting Projects'
    ],
    outcomes: [
      'Analyze advanced option chain data',
      'Understand and interpret Option Greeks',
      'Evaluate volatility in options markets',
      'Select suitable option strategy frameworks',
      'Plan and manage derivatives trades',
      'Apply disciplined risk management',
      'Build confidence in advanced F&O analysis'
    ],
    faqs: [
      { question: 'Do I need prior F&O knowledge?', answer: 'Yes. A basic understanding of Futures & Options is recommended. Completing the 15-Day F&O Program first will help you get the most from this course.' },
      { question: 'Will I learn option selling?', answer: 'Yes. The course introduces common option-selling concepts and strategies, along with their associated risks and practical considerations.' },
      { question: 'Are live market sessions included?', answer: 'Yes. Guided live market analysis sessions are included to help reinforce the concepts taught during the course.' },
      { question: 'Will I receive study materials?', answer: 'Yes. You\'ll receive digital study materials, strategy workbooks, and practical learning resources.' }
    ]
  },
  {
    id: 'futures-options-30-offline',
    badge: '30 Days Live',
    title: 'Futures & Options Professional (Live Training)',
    duration: '30 Days',
    fee: '₹19,999',
    tagline: 'Advanced Derivatives with Classroom + Live Expiry Trading',
    overview: 'Advanced derivatives program with interactive classroom learning, live expiry day execution sessions, and offline mentoring. Includes all online F&O Professional modules plus in-person classroom access and live trading desk experience.',
    idealAudience: ['Bengaluru Option Traders', 'Full-Time Income Seekers'],
    skillsYoullGain: [
      'All online F&O Professional skills',
      'Live expiry day execution',
      'Classroom derivatives mentorship',
      'Real-time trade adjustments',
      'Professional risk management'
    ],
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
    toolsCovered: [
      'NSE Option Chain',
      'Sensibull',
      'Opstra',
      'TradingView'
    ],
    courseIncludes: [
      '30 Days of Live Training',
      'Classroom + Online Hybrid',
      'Live Expiry Trading Sessions',
      'Digital Study Material',
      'Strategy Workbook',
      'Course Completion Certificate'
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
    ],
    faqs: [
      { question: 'Is this only available in Bengaluru?', answer: 'Yes. The offline component requires attendance at our Bengaluru facility.' },
      { question: 'Does it include the online course?', answer: 'Yes. You get all online F&O Professional modules plus classroom and live trading access.' }
    ]
  },
  {
    id: 'ai-analysis',
    badge: '4 Hours',
    title: 'AI for Fundamental & Technical Analysis',
    duration: '4 Hours',
    fee: '₹5,000',
    tagline: 'Learn How AI Can Improve Your Market Research',
    overview: 'Discover practical AI techniques for company analysis, chart analysis, stock screening, research, and productivity. A comprehensive 4-hour masterclass showing you how to integrate LLMs (ChatGPT, Gemini, Perplexity) into daily stock research, valuation modeling, and strategy backtesting.',
    idealAudience: ['Busy Professionals', 'Traders & Investors wanting automation', 'Students', 'Anyone interested in AI for finance'],
    skillsYoullGain: [
      'Use AI tools for stock market research',
      'Analyze annual reports in minutes using AI',
      'Build AI-powered stock scanners',
      'Automate trade journals and performance audits',
      'Prompt engineering for financial analysis',
      'AI-assisted chart pattern recognition'
    ],
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
    toolsCovered: [
      'ChatGPT',
      'Google Gemini',
      'Perplexity AI',
      'TradingView',
      'Chartink'
    ],
    courseIncludes: [
      '4 Hours of Instructor-Led Masterclass',
      'Digital Study Material',
      'AI Prompt Library (Value ₹4,999)',
      'Interactive Q&A Session',
      'Course Completion Certificate'
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
    ],
    faqs: [
      { question: 'Do I need coding skills?', answer: 'No. AI tools handle the technical complexity. You will learn prompt engineering.' },
      { question: 'Which AI tools are covered?', answer: 'ChatGPT, Google Gemini, Perplexity AI, and integrations with TradingView and Chartink.' }
    ]
  },
  {
    id: 'basics-to-advanced',
    badge: '2 Months',
    title: 'Basics to Advanced Stock Market Program',
    duration: '2 Months',
    fee: '₹50,000',
    tagline: 'One Complete Program. Everything You Need to Learn.',
    overview: 'Whether you\'re a beginner taking your first step into the stock market or someone looking to build professional trading skills, this comprehensive program provides a structured learning journey from the fundamentals to advanced market analysis. The course combines classroom learning, practical exercises, AI-powered research, live market sessions, and real-world case studies to help you build confidence and analytical skills.',
    idealAudience: ['Complete Beginners', 'College Students', 'Working Professionals', 'Investors', 'Traders', 'Business Owners', 'Finance Enthusiasts', 'Anyone looking to build a career in the stock market'],
    skillsYoullGain: [
      'Stock Market Fundamentals',
      'Fundamental Analysis',
      'Technical Analysis',
      'Price Action',
      'Futures & Options',
      'AI for Market Research',
      'Risk Management',
      'Trading Psychology',
      'Portfolio Building',
      'Live Market Analysis'
    ],
    bonuses: [
      'Recorded Video Course Access (Lifetime)',
      '1-on-1 Mentor Reviews & Audits',
      'Premium Toolkit (Worth ₹15,000)'
    ],
    modules: [
      {
        title: 'Module 1: Financial Market Foundation',
        points: [
          'Financial Markets',
          'Primary & Secondary Markets',
          'NSE & BSE',
          'SEBI',
          'Market Participants',
          'Market Indices',
          'Investment Products'
        ]
      },
      {
        title: 'Module 2: Fundamental Analysis',
        points: [
          'Financial Statements',
          'Ratio Analysis',
          'Annual Reports',
          'Business Models',
          'Industry Analysis',
          'Company Valuation',
          'Stock Selection'
        ]
      },
      {
        title: 'Module 3: Technical Analysis',
        points: [
          'Candlestick Analysis',
          'Trend Analysis',
          'Support & Resistance',
          'Price Action',
          'Chart Patterns',
          'Technical Indicators',
          'Multi-Timeframe Analysis'
        ]
      },
      {
        title: 'Module 4: Advanced Technical Analysis',
        points: [
          'Advanced Price Action',
          'Fibonacci',
          'Scanner Building',
          'Sector Analysis',
          'Relative Strength',
          'Trading Strategies',
          'Live Chart Analysis'
        ]
      },
      {
        title: 'Module 5: Futures & Options',
        points: [
          'Futures',
          'Options',
          'Option Chain',
          'Open Interest',
          'Option Greeks',
          'Option Strategies',
          'Volatility Analysis'
        ]
      },
      {
        title: 'Module 6: AI in Stock Market',
        points: [
          'AI for Research',
          'AI for Fundamental Analysis',
          'AI for Technical Analysis',
          'Prompt Engineering',
          'AI Productivity Tools',
          'Market Summaries',
          'Research Automation'
        ]
      },
      {
        title: 'Module 7: Portfolio Management',
        points: [
          'Asset Allocation',
          'Diversification',
          'Investment Planning',
          'Goal-Based Investing',
          'Portfolio Review',
          'Rebalancing Techniques'
        ]
      },
      {
        title: 'Module 8: Risk Management & Trading Psychology',
        points: [
          'Position Sizing',
          'Risk-to-Reward Ratio',
          'Capital Preservation',
          'Emotional Discipline',
          'Trading Journal',
          'Performance Review'
        ]
      },
      {
        title: 'Module 9: Practical Learning & Live Market Sessions',
        points: [
          'Live Market Observation',
          'Chart Analysis',
          'Company Research',
          'Option Chain Analysis',
          'Strategy Discussions',
          'Case Studies',
          'Trading Simulations'
        ]
      },
      {
        title: 'Module 10: Career Development & Professional Growth',
        points: [
          'Building a Trading Plan',
          'Developing an Investment Framework',
          'Professional Ethics',
          'Financial Career Opportunities',
          'Continuous Learning Roadmap'
        ]
      }
    ],
    toolsCovered: [
      'TradingView',
      'Chartink',
      'Screener.in',
      'NSE India',
      'BSE India',
      'Sensibull',
      'Opstra',
      'Microsoft Excel',
      'ChatGPT',
      'Google Gemini',
      'Perplexity AI'
    ],
    courseIncludes: [
      '2 Months of Instructor-Led Training',
      'Online / Offline / Hybrid Learning',
      'Live Market Sessions',
      'Practical Assignments',
      'Real-Time Market Analysis',
      'Digital Study Material',
      'Lifetime Access to Recorded Sessions*',
      'Course Completion Certificate',
      'Dedicated Doubt-Clearing Sessions',
      'Trading & Investment Templates',
      'AI Prompt Library',
      'Portfolio Review Framework'
    ],
    liveApplication: [
      'Daily Live Market Hours Classes',
      'Guided Stock Research Projects',
      'Simulator Practice & Peer Reviews'
    ],
    outcomes: [
      'Understand financial markets with confidence',
      'Analyze companies using fundamental analysis',
      'Read and interpret technical charts',
      'Evaluate Futures & Options markets',
      'Use AI to improve market research',
      'Develop structured trading and investment plans',
      'Apply disciplined risk management',
      'Build and review investment portfolios',
      'Make informed market decisions based on research'
    ],
    faqs: [
      { question: 'Do I need any prior stock market knowledge?', answer: 'No. This program starts from the basics and progressively covers advanced topics.' },
      { question: 'Will I receive practical exposure?', answer: 'Yes. The course includes live market sessions, assignments, chart analysis, and practical demonstrations.' },
      { question: 'Is this course suitable for working professionals?', answer: 'Yes. Flexible learning modes are available through Online, Offline, and Hybrid options.' },
      { question: 'Will I receive a certificate?', answer: 'Yes. A Course Completion Certificate is awarded upon successful completion.' }
    ]
  },
  {
    id: 'nism-certified',
    badge: '6 Months',
    title: 'NISM Certified Stock Market Program',
    duration: '6 Months',
    fee: '₹99,999',
    tagline: 'Build a Professional Career in the Indian Stock Market',
    overview: 'The NISM Certified Stock Market Program is designed for individuals who want to gain a strong understanding of the Indian financial markets while preparing for NISM certification. Along with exam preparation, the program includes practical training in investing, technical analysis, fundamental analysis, derivatives, AI-powered market research, and live market sessions. Whether you\'re aiming for a career in finance or looking to strengthen your market knowledge, this program provides a structured path to professional development.',
    idealAudience: ['Students pursuing careers in Finance', 'MBA & Commerce Graduates', 'Working Professionals', 'Aspiring Research Analysts', 'Future Investment Professionals', 'Investors & Traders', 'Anyone preparing for NISM Certification'],
    skillsYoullGain: [
      'NISM Certification Syllabus',
      'Financial Market Fundamentals',
      'Fundamental Analysis',
      'Technical Analysis',
      'Futures & Options',
      'AI for Financial Research',
      'Portfolio Management',
      'Risk Management',
      'Live Market Analysis',
      'Professional Ethics & Compliance'
    ],
    bonuses: [
      'NISM Official Study Guides & Mock Test Papers',
      'Resume Review & Interview Preparation Workshops',
      'Internship Letter for eligible candidates'
    ],
    modules: [
      {
        title: 'Module 1: Introduction to Indian Financial Markets',
        points: [
          'Financial Markets',
          'Regulatory Framework',
          'SEBI',
          'NSE & BSE',
          'Market Participants',
          'Clearing & Settlement',
          'Investment Products'
        ]
      },
      {
        title: 'Module 2: NISM Certification Preparation',
        points: [
          'Complete NISM Exam Syllabus',
          'Exam-Oriented Concepts',
          'Practice Questions',
          'Mock Tests',
          'Previous Pattern Discussion',
          'Revision Sessions'
        ]
      },
      {
        title: 'Module 3: Fundamental Analysis',
        points: [
          'Financial Statements',
          'Ratio Analysis',
          'Company Valuation',
          'Industry Analysis',
          'Economic Indicators',
          'Business Models'
        ]
      },
      {
        title: 'Module 4: Technical Analysis',
        points: [
          'Candlestick Patterns',
          'Trend Analysis',
          'Support & Resistance',
          'Chart Patterns',
          'Technical Indicators',
          'Price Action',
          'Multi-Timeframe Analysis'
        ]
      },
      {
        title: 'Module 5: Futures & Options',
        points: [
          'Futures Contracts',
          'Options Contracts',
          'Option Chain Analysis',
          'Open Interest',
          'Option Greeks',
          'Strategy Basics',
          'Risk Management'
        ]
      },
      {
        title: 'Module 6: AI in Financial Markets',
        points: [
          'AI for Research',
          'AI Prompt Engineering',
          'AI for Fundamental Analysis',
          'AI for Technical Analysis',
          'AI Productivity Tools',
          'Research Automation'
        ]
      },
      {
        title: 'Module 7: Portfolio Management & Wealth Creation',
        points: [
          'Asset Allocation',
          'Diversification',
          'Goal-Based Investing',
          'Portfolio Construction',
          'Portfolio Review',
          'Rebalancing'
        ]
      },
      {
        title: 'Module 8: Risk Management & Trading Psychology',
        points: [
          'Capital Protection',
          'Position Sizing',
          'Risk-to-Reward Ratio',
          'Emotional Discipline',
          'Trading Journal',
          'Performance Evaluation'
        ]
      },
      {
        title: 'Module 9: Practical Market Training',
        points: [
          'Live Market Sessions',
          'Stock Research',
          'Technical Chart Analysis',
          'Option Chain Analysis',
          'Case Studies',
          'Trading Simulations',
          'Group Discussions'
        ]
      },
      {
        title: 'Module 10: Career Development',
        points: [
          'Resume Building',
          'Interview Preparation',
          'Communication Skills',
          'Financial Industry Career Paths',
          'Professional Ethics',
          'Continuous Learning Roadmap'
        ]
      }
    ],
    toolsCovered: [
      'TradingView',
      'Chartink',
      'Screener.in',
      'NSE India',
      'BSE India',
      'Sensibull',
      'Opstra',
      'Microsoft Excel',
      'ChatGPT',
      'Google Gemini',
      'Perplexity AI'
    ],
    courseIncludes: [
      '6 Months of Comprehensive Training',
      'Online / Offline / Hybrid Learning',
      'NISM Exam Preparation',
      'Mock Tests & Practice Papers',
      'Live Market Sessions',
      'Practical Assignments',
      'Digital Study Material',
      'AI Prompt Library',
      'Portfolio Analysis Templates',
      'Course Completion Certificate',
      'Dedicated Doubt-Clearing Sessions'
    ],
    liveApplication: [
      'NISM Mock Exam Series',
      'Research Report Projects',
      'Advisory Pitch Simulations'
    ],
    outcomes: [
      'Understand Indian financial markets comprehensively',
      'Prepare confidently for the relevant NISM certification exam',
      'Analyze companies using fundamental analysis',
      'Read and interpret technical charts',
      'Understand Futures & Options concepts',
      'Use AI to enhance financial research',
      'Build and review investment portfolios',
      'Apply disciplined risk management',
      'Develop professional financial market skills'
    ],
    faqs: [
      { question: 'Is the NISM exam fee included in the course fee?', answer: 'Please check with the academy for the latest details regarding exam registration and applicable fees.' },
      { question: 'Do I receive an official NISM certificate after this course?', answer: 'The official NISM certificate is issued by NISM only after you successfully pass the relevant NISM examination.' },
      { question: 'Is this course suitable for beginners?', answer: 'Yes. The curriculum starts with the fundamentals and gradually progresses to advanced concepts.' },
      { question: 'Will I get practical exposure?', answer: 'Yes. The program includes live market sessions, assignments, mock tests, and practical case studies.' }
    ]
  }
];
