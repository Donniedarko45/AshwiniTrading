export interface Review {
  name: string;
  text: string;
  platform: 'whatsapp' | 'chat' | 'none';
  rating: number;
  role: string;
}

export const academyReviews: Review[] = [
  {
    name: "Ramesh Boopathi",
    text: "I enrolled in the Stock Market Foundation Program. The way Ashwini explains Technical Analysis and market structures with real-time examples made it very simple. I'm now confident in reading charts independently.",
    platform: "whatsapp",
    rating: 5,
    role: "College Student & Aspiring Trader"
  },
  {
    name: "Suman Thakur",
    text: "As a working professional, the weekend batches were perfect. The AI-powered stock screening and company analysis tools saved me hours of research. Truly value for money.",
    platform: "chat",
    rating: 5,
    role: "Working Professional"
  },
  {
    name: "Neelu M",
    text: "I was a complete beginner. The step-by-step curriculum starting from basics to risk management was exactly what I needed. Highly recommend for any homemaker looking to start investing.",
    platform: "whatsapp",
    rating: 5,
    role: "Homemaker & New Investor"
  },
  {
    name: "Christu Steevard",
    text: "The F&O trading concepts were taught in a very disciplined way. The focus on stop-loss, capital protection, and position sizing is what sets this academy apart. Thank you, Ashwini!",
    platform: "none",
    rating: 5,
    role: "Trader"
  }
];
