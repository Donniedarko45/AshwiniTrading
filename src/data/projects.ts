export interface StudentProject {
  type: string;
  title: string;
  author: string;
  company: string;
  tags: string[];
  descHtml: string;
}

export const studentProjects: StudentProject[] = [
  {
    type: "LIVE CLIENT PROJECT",
    title: "AI-Powered Content Summarizer",
    author: "Priya R.",
    company: "Flipkart",
    tags: ["GPT-4", "Custom GPT", "Notion AI"],
    descHtml: "Custom GPT trained on brand voice. Now generating <span class='text-blue-600 font-bold'>40+ marketing assets</span> per week internally."
  },
  {
    type: "LIVE CLIENT PROJECT",
    title: "n8n Workflow Automation",
    author: "Arjun M.",
    company: "BookMyScans",
    tags: ["n8n", "WhatsApp Business API", "Google Sheets"],
    descHtml: "Automated lead-to-WhatsApp pipeline. Cut response time from <span class='text-blue-600 font-bold'>4 hours to 90 seconds</span>."
  },
  {
    type: "LIVE CLIENT PROJECT",
    title: "Performance Marketing Campaign",
    author: "Sneha K.",
    company: "Decfort",
    tags: ["Meta Ads", "GA4", "Looker Studio"],
    descHtml: "Meta Advantage+ campaign at ₹2L monthly spend. Generated <span class='text-blue-600 font-bold'>312 qualified leads at ₹640 CPL</span>."
  },
  {
    type: "LIVE CLIENT PROJECT",
    title: "SEO Ranking Project",
    author: "Rahul V.",
    company: "Amazon",
    tags: ["Ahrefs", "GSC", "AI-assisted content briefs"],
    descHtml: "Moved <span class='text-blue-600 font-bold'>8 commercial keywords</span> from page 3 to page 1 in 45 days."
  },
  {
    type: "LIVE CLIENT PROJECT",
    title: "Landing Page Creation & Deployment",
    author: "Anjali D.",
    company: "Razorpay",
    tags: ["Webflow", "GA4", "Hotjar"],
    descHtml: "Built and shipped 4 conversion-optimized pages with A/B tests. Conversion rate improved <span class='text-blue-600 font-bold'>from 1.2% to 4.5%</span>."
  },
  {
    type: "LIVE CLIENT PROJECT",
    title: "AI Chatbot for Customer Support",
    author: "Karthik P.",
    company: "Ola",
    tags: ["Claude API", "Make.com", "Intercom"],
    descHtml: "Claude-powered chatbot handling <span class='text-blue-600 font-bold'>60% of Tier 1 support queries</span> automatically."
  }
];
