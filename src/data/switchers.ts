export interface CareerSwitcher {
  name: string;
  meta: string;
  image: string;
  fromTitle: string;
  fromSalary: string;
  toTitle: string;
  toSalary: string;
  quote: string;
}

export const careerSwitchers: CareerSwitcher[] = [
  {
    name: "Vinay K.",
    meta: "March 2025 batch · Switched at age 27",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    fromTitle: "BPO at Infosys",
    fromSalary: "₹3.2 LPA",
    toTitle: "Performance Marketing Analyst at Razorpay",
    toSalary: "₹7.8 LPA",
    quote: "I was 5 years into a BPO job that was going nowhere. 90 days here, 2.4x salary jump."
  },
  {
    name: "Megha Raghupathy",
    meta: "January 2025 batch · Switched at age 25",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    fromTitle: "B.Tech graduate at TCS support",
    fromSalary: "₹4.1 LPA",
    toTitle: "SEO Specialist at WATConsult",
    toSalary: "₹6.5 LPA",
    quote: "I never used my engineering degree. Digital marketing was the first work I actually enjoyed."
  },
  {
    name: "Fazil MD",
    meta: "November 2024 batch · Switched at age 28",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    fromTitle: "School teacher",
    fromSalary: "₹2.8 LPA",
    toTitle: "Content & Email Marketing at Mamaearth",
    toSalary: "₹5.2 LPA",
    quote: "I was the oldest in my batch by 4 years. Nobody made it weird. We were all there for the same reason."
  }
];
