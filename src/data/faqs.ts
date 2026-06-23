export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const honestFAQsLeft: FAQItem[] = [
  {
    id: "q1",
    question: "Q1. Is the 100% placement rate real?",
    answer: "Yes. In our last 4 batches, every student who completed the portfolio and mock interviews was placed. We cap batches to ensure this attention."
  },
  {
    id: "q2",
    question: "Q2. What's the lowest package any alumnus has accepted?",
    answer: "Our lowest recorded package in the last year was ₹3.6 LPA for an absolute fresher. The average is ₹4.5L - ₹6L, and experienced switchers have gone up to ₹12L."
  },
  {
    id: "q3",
    question: "Q3. Why pay for a course when Google offers free certifications?",
    answer: "Certifications are multiple-choice tests. Employers hire based on what you can do. We teach you how to actually run campaigns, spend budgets, and optimize pipelines."
  },
  {
    id: "q4",
    question: "Q4. Are your trainers actually working practitioners?",
    answer: "100%. Our trainers are active leads and directors at partner agencies. They bring live dashboards and real client problems to the classroom."
  }
];

export const honestFAQsRight: FAQItem[] = [
  {
    id: "q5",
    question: "Q5. What happens if I don't get placed in 90 days?",
    answer: "Our placement support has no artificial end date. We continue setting up interviews and refining your portfolio until you lock down an offer."
  },
  {
    id: "q6",
    question: "Q6. I'm 26 with 3 years of work experience – won't I feel out of place?",
    answer: "Not at all. 41% of our students are working professionals switching careers. We have weekend batches designed for exactly your demographic."
  },
  {
    id: "q7",
    question: "Q7. Is the AI curriculum real or just marketing?",
    answer: "It's deeply integrated. You won't just 'learn about AI'—you will use GPT-4, Midjourney, and n8n to automate creatives, build landing pages, and optimize operations."
  },
  {
    id: "q8",
    question: "Q8. Can I talk to a current Ashwini Trading Academy alumnus before joining?",
    answer: "Absolutely. We encourage it. Ask our admissions team to connect you with an alumnus on LinkedIn who transitioned from a similar background."
  }
];
