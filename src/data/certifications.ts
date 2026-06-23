export interface Certification {
  provider: string;
  color: string;
  border: string;
  title: string;
}

export const certifications: Certification[] = [
  { provider: "GOOGLE", color: "text-amber-600 bg-amber-50", border: 'group-hover:border-amber-200', title: "Ads Search Certification" },
  { provider: "GOOGLE", color: "text-amber-600 bg-amber-50", border: 'group-hover:border-amber-200', title: "Ads Display Certification" },
  { provider: "GOOGLE", color: "text-amber-600 bg-amber-50", border: 'group-hover:border-amber-200', title: "Ads Video Certification" },
  { provider: "GOOGLE", color: "text-amber-600 bg-amber-50", border: 'group-hover:border-amber-200', title: "Analytics (GA4)" },
  { provider: "MICROSOFT", color: "text-blue-600 bg-blue-50", border: 'group-hover:border-blue-200', title: "Bing Ads Search" },
  { provider: "META", color: "text-purple-600 bg-purple-50", border: 'group-hover:border-purple-200', title: "Blueprint Digital Marketing" },
  { provider: "HUBSPOT", color: "text-orange-600 bg-orange-50", border: 'group-hover:border-orange-200', title: "Inbound Marketing" },
  { provider: "HUBSPOT", color: "text-orange-600 bg-orange-50", border: 'group-hover:border-orange-200', title: "Content Marketing" },
  { provider: "HUBSPOT", color: "text-orange-600 bg-orange-50", border: 'group-hover:border-orange-200', title: "Email Marketing" },
  { provider: "SEMRUSH", color: "text-pink-600 bg-pink-50", border: 'group-hover:border-pink-200', title: "SEO Toolkit" },
  { provider: "GOOGLE", color: "text-amber-600 bg-amber-50", border: 'group-hover:border-amber-200', title: "Digital Garage" },
  { provider: "LINKEDIN", color: "text-blue-700 bg-blue-50", border: 'group-hover:border-blue-300', title: "Marketing Fundamentals" },
];
