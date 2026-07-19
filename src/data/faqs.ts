export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const honestFAQsLeft: FAQItem[] = [
  {
    id: "q1",
    question: "Who can join your programs?",
    answer: "Our programs are designed for beginners, students, professionals, investors, traders, entrepreneurs, and anyone interested in learning financial markets."
  },
  {
    id: "q2",
    question: "Do I need any prior knowledge?",
    answer: "No. We offer beginner-friendly programs as well as advanced learning paths."
  },
  {
    id: "q3",
    question: "What learning modes are available?",
    answer: "Online, Classroom, and Hybrid."
  }
];

export const honestFAQsRight: FAQItem[] = [
  {
    id: "q4",
    question: "Are practical sessions included?",
    answer: "Yes. Practical learning is an important part of every program."
  },
  {
    id: "q5",
    question: "How do I choose the right course?",
    answer: "Book a free demo class, and our academic counsellor will help you choose the right learning program."
  }
];
