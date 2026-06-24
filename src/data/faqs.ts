export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const honestFAQsLeft: FAQItem[] = [
  {
    id: "q1",
    question: "Do I need prior stock market knowledge?",
    answer: "No. The course is designed for complete beginners as well as experienced learners."
  },
  {
    id: "q2",
    question: "Is the course available online?",
    answer: "Yes. Both online and offline learning options are available."
  },
  {
    id: "q3",
    question: "Will I receive certification?",
    answer: "Yes. Students receive a course completion certificate."
  }
];

export const honestFAQsRight: FAQItem[] = [
  {
    id: "q4",
    question: "How long is the course?",
    answer: "The duration depends on the selected program and learning path."
  },
  {
    id: "q5",
    question: "Will I learn live market analysis?",
    answer: "Yes. Practical examples and live market discussions are included."
  },
  {
    id: "q6",
    question: "Can working professionals join?",
    answer: "Absolutely. Flexible learning options are available."
  }
];
