export interface Alumnus {
  name: string;
  date: string;
  role: string;
  company: string;
  salary: string;
  image: string;
}

export interface HiringBrand {
  name: string;
  colorClass: string;
  logoSvg?: string;
  boldClass?: string;
  hasSpecialIndicator?: boolean;
  specialText?: string;
}

export interface BrandCategory {
  categoryName: string;
  brands: HiringBrand[];
}

export const alumniList: Alumnus[] = [
  { name: "Bright Prabahar", date: "Mar'26", role: "CRO Analyst", company: "Ola", salary: "₹18–19 LPA range", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80" },
  { name: "Jeevan", date: "Feb'26", role: "Performance Marketing Analyst", company: "Flipkart", salary: "₹7–9 LPA range", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80" },
  { name: "Keerthi Vasan", date: "Mar'26", role: "Marketing Automation Specialist", company: "Ernst & Young", salary: "₹6–8 LPA range", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80" },
  { name: "Harini P", date: "Jan'26", role: "Performance Marketing Specialist", company: "Amazon", salary: "₹7–9 LPA range", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80" },
  { name: "Krishna", date: "Feb'26", role: "Digital Marketing Executive", company: "The Website Makers", salary: "₹4–5 LPA range", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80" },
  { name: "Prithvi", date: "Jan'26", role: "Performance Marketing Executive", company: "Responsive Media Tech Services", salary: "₹5–6 LPA range", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80" },
  { name: "Lekha", date: "Apr'26", role: "SEO Strategist", company: "Velvet", salary: "₹6–8 LPA range", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80" },
  { name: "Karthik", date: "Apr'26", role: "Growth Marketer", company: "Brandcrest", salary: "₹5–6 LPA range", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80" },
  { name: "Sanam", date: "Feb'26", role: "Social Media Marketing Executive", company: "Hashconnect", salary: "₹4–5 LPA range", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80" },
];

export const hiringBrandCategories: BrandCategory[] = [
  {
    categoryName: "MNCS & MAANG",
    brands: [
      { name: "Microsoft", colorClass: "text-slate-700", boldClass: "font-bold" },
      { name: "Adobe", colorClass: "text-red-600", boldClass: "font-bold", logoSvg: "adobe" },
      { name: "accenture", colorClass: "text-slate-800", boldClass: "font-bold", hasSpecialIndicator: true, specialText: ">" },
    ]
  },
  {
    categoryName: "FUNDED STARTUPS",
    brands: [
      { name: "PhonePe", colorClass: "text-purple-700", boldClass: "font-bold" },
      { name: "Paytm", colorClass: "text-sky-500", boldClass: "font-bold" },
      { name: "NYKAA", colorClass: "text-pink-600", boldClass: "font-extrabold italic" },
      { name: "OLA", colorClass: "text-slate-800", boldClass: "font-bold", logoSvg: "ola" },
      { name: "lenskart", colorClass: "text-[#000042]", boldClass: "font-bold" },
      { name: "PharmEasy", colorClass: "text-emerald-500", boldClass: "font-bold", logoSvg: "pharmeasy" },
      { name: "ninjacart", colorClass: "text-green-600", boldClass: "font-bold" },
    ]
  },
  {
    categoryName: "HIRING PARTNERS",
    brands: [
      { name: "Bookmyscans", colorClass: "text-purple-600", boldClass: "font-bold", logoSvg: "bookmyscans" },
      { name: "DECFORT", colorClass: "text-slate-600", boldClass: "font-serif font-bold tracking-wider" },
      { name: "edumerge", colorClass: "text-orange-500", boldClass: "font-bold italic", logoSvg: "edumerge" },
      { name: "PORTER°", colorClass: "text-slate-800", boldClass: "font-bold tracking-tight", logoSvg: "porter" },
      { name: "HomeLane", colorClass: "text-red-500", boldClass: "font-bold flex leading-none gap-2", logoSvg: "homelane" },
    ]
  }
];
