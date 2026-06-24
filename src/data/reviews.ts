export interface Review {
  name: string;
  date: string;
  rating: number;
  isVerified: boolean;
  avatarText?: string;
  avatarColor?: string;
  avatarImage?: string;
  text: string;
  fullText?: string;
}

export const googleReviews: Review[] = [
  {
    name: "Christu Steevard",
    date: "1 year ago",
    rating: 5,
    isVerified: true,
    avatarText: "C",
    avatarColor: "bg-[#7c3aed]", // Violet
    avatarImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
    text: "Hi,\nAshwini and the team conducted a workshop on trading and stock market for our students. It was one of the best...",
    fullText: "Hi,\nAshwini and the team conducted a workshop on trading and stock market for our students. It was one of the best workshops that we ever had. They were very professional and well organized. Students admired the technical knowledge that Ashwini has. So happy about the quiz and certifications they gave. I would recommend that every college and schools should have the workshop on trading and stock market and she would be a best option to organise.\n\nThank you"
  },
  {
    name: "rïThVîk",
    date: "1 year ago",
    rating: 5,
    isVerified: true,
    avatarText: "R",
    avatarColor: "bg-[#2563eb]", // Blue
    avatarImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    text: "very good , nice experience i learned about trading a lot"
  },
  {
    name: "Pragya",
    date: "1 year ago",
    rating: 5,
    isVerified: true,
    avatarText: "P",
    avatarColor: "bg-[#047857]", // Emerald
    text: "This Academy has given me so much of knowlegde, that im a very confident trader now!! thanku ashwini ma'am"
  },
  {
    name: "pavithra E",
    date: "1 year ago",
    rating: 5,
    isVerified: true,
    avatarText: "P",
    avatarColor: "bg-[#4f46e5]", // Indigo
    text: "Great place for learning About Stock Market"
  },
  {
    name: "Prakash Raushan",
    date: "1 year ago",
    rating: 5,
    isVerified: true,
    avatarText: "P",
    avatarColor: "bg-[#ea580c]", // Orange
    avatarImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
    text: "Ashwini is very knowledgeable person... She has very much in depth knowledge of stock market. She explains the concept really well and doesn't stop till we...",
    fullText: "Ashwini is very knowledgeable person... She has very much in depth knowledge of stock market. She explains the concept really well and doesn't stop till we understand it.\n\nShe has a kind heart and she is really good person. Keep up the good work."
  },
  {
    name: "suma m",
    date: "1 year ago",
    rating: 5,
    isVerified: true,
    avatarText: "S",
    avatarColor: "bg-[#db2777]", // Pink
    avatarImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
    text: "I have attended there course the way presentation has made is impressive, easy to learn and understand."
  },
  {
    name: "jackson lawrence",
    date: "1 year ago",
    rating: 5,
    isVerified: true,
    avatarText: "J",
    avatarColor: "bg-[#475569]", // Slate
    text: "At ashwini trading academy I learned all about stock market and especially FNO and Ashwini mam was very friendly and was clearing all the doubts I had with any...",
    fullText: "At ashwini trading academy I learned all about stock market and especially FNO and Ashwini mam was very friendly and was clearing all the doubts I had with any topics related to stock market."
  },
  {
    name: "S mary Mary",
    date: "1 year ago",
    rating: 5,
    isVerified: true,
    avatarText: "S",
    avatarColor: "bg-[#b91c1c]", // Red
    text: "Ashwini trading academy is increased my trading skills I am very thankful to this trading academy it is very use full I had a grate time enrolling the course with...",
    fullText: "Ashwini trading academy is increased my trading skills I am very thankful to this trading academy it is very use full I had a grate time enrolling the course with Ashwini trading academy"
  },
  {
    name: "Kalidas Vasu1969",
    date: "1 year ago",
    rating: 5,
    isVerified: true,
    avatarText: "K",
    avatarColor: "bg-[#0d9488]", // Teal
    text: "Good training center, as my son is one of the student of ashwini trading academy,he enjoyed learning trading and could learn more details about trading"
  }
];
