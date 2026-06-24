export interface HighlightItem {
  title: string;
  description: string;
  iconName: 'BookOpen' | 'Sparkles' | 'Award' | 'TrendingUp' | 'Users' | 'GraduationCap';
}

export interface CollaborationReview {
  name: string;
  role: string;
  reviewText: string;
  rating: number;
  source: string;
}

export const collaborationHighlights: HighlightItem[] = [
  {
    title: 'Comprehensive Sessions',
    description: 'Interactive and well-structured sessions covering the basics of trading, stock market fundamentals, F&O, and technical analysis.',
    iconName: 'BookOpen'
  },
  {
    title: 'Engaging Activities',
    description: 'Real-time simulated trading games, stock market quizzes, and interactive case studies to apply concepts instantly.',
    iconName: 'Sparkles'
  },
  {
    title: 'Certifications',
    description: 'Industry-recognized certification of participation and completion to add significant value to students\' professional portfolios.',
    iconName: 'Award'
  },
  {
    title: '25+ Courses Access',
    description: 'Special access to standard structured learning tracks, helping students move from stock market beginners to professional level.',
    iconName: 'TrendingUp'
  },
  {
    title: 'Student Clubs Support',
    description: 'Mentorship and guidelines to establish active Finance and Investment Clubs within the campus to foster peer learning.',
    iconName: 'Users'
  },
  {
    title: 'Expert Guidance',
    description: 'Direct interaction and mentorship from SEBI Registered Research Analyst Ashwini SD and her team of market professionals.',
    iconName: 'GraduationCap'
  }
];

export const collaborationReviews: CollaborationReview[] = [
  {
    name: 'Christu Steevard',
    role: 'College Administrator / Coordinator',
    reviewText: 'Ashwini and the team conducted a workshop on trading and stock market for our students. It was one of the best workshops that we ever had. They were very professional and well organized. Students admired the technical knowledge that Ashwini has. So happy about the quiz and certifications they gave. I would recommend that every college and school should have this workshop, and she is the best option to organize it.',
    rating: 5,
    source: 'Google'
  },
  {
    name: 'Pragya',
    role: 'College Student',
    reviewText: 'This Academy has given me so much knowledge that I am a very confident trader now! Thank you Ashwini ma\'am.',
    rating: 5,
    source: 'Google'
  },
  {
    name: 'Prakash Raushan',
    role: 'College Student',
    reviewText: 'Ashwini is a very knowledgeable person. She has very in-depth knowledge of the stock market. She explains the concepts really well and doesn\'t stop until everyone understands it. She has a kind heart and is a really good person. Keep up the good work!',
    rating: 5,
    source: 'Google'
  },
  {
    name: 'Jackson Lawrence',
    role: 'Workshop Participant',
    reviewText: 'At Ashwini Trading Academy I learned all about the stock market, especially F&O. Ashwini mam was very friendly and cleared all the doubts I had on any topics related to the stock market.',
    rating: 5,
    source: 'Google'
  },
  {
    name: 'S mary Mary',
    role: 'College Student',
    reviewText: 'Ashwini Trading Academy has significantly improved my trading skills. I am very thankful to this academy. It is extremely useful and I had a great time enrolling in this course.',
    rating: 5,
    source: 'Google'
  },
  {
    name: 'Kalidas Vasu1969',
    role: 'Parent of Student',
    reviewText: 'Good training center. My son is a student at Ashwini Trading Academy; he thoroughly enjoyed learning trading and got to understand detailed nuances about the markets.',
    rating: 5,
    source: 'Google'
  }
];

export const collaborationGallery = [
  {
    url: 'https://ashwinitradingacademy.com/wp-content/uploads/2025/01/IMG_0039-1024x683.jpg',
    caption: 'Interacting with students during the stock market fundamentals workshop.'
  },
  {
    url: 'https://ashwinitradingacademy.com/wp-content/uploads/2025/01/IMG_0081-1024x683.jpg',
    caption: 'Hands-on training session on technical analysis and charting.'
  },
  {
    url: 'https://ashwinitradingacademy.com/wp-content/uploads/2025/01/IMG_0119-1024x683.jpg',
    caption: 'Interactive Q&A session with students clearing market doubts.'
  },
  {
    url: 'https://ashwinitradingacademy.com/wp-content/uploads/2025/01/IMG_0055-1024x683.jpg',
    caption: 'Presenting student certifications at the close of the training program.'
  }
];

export const founderQuote = {
  text: "I started my stock market journey in 2013 with just ₹500 and a dream. Nine years later, I'm living proof that you don't need a fortune to build one—you just need guts, patience, and the ability to learn from your losses while continuing to push forward!",
  author: 'Ashwini SD',
  role: 'Founder of Ashwini Trading Academy & SEBI Registered Research Analyst'
};
