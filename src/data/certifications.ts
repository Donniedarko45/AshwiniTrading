export interface Certification {
  provider: string;
  color: string;
  border: string;
  title: string;
}

export const certifications: Certification[] = [
  { provider: "GOOGLE", color: "text-brand-primary bg-brand-primary/10", border: 'group-hover:border-brand-primary/30', title: "Ads Search Certification" },
  { provider: "GOOGLE", color: "text-brand-primary bg-brand-primary/10", border: 'group-hover:border-brand-primary/30', title: "Ads Display Certification" },
  { provider: "GOOGLE", color: "text-brand-primary bg-brand-primary/10", border: 'group-hover:border-brand-primary/30', title: "Ads Video Certification" },
  { provider: "GOOGLE", color: "text-brand-primary bg-brand-primary/10", border: 'group-hover:border-brand-primary/30', title: "Analytics (GA4)" },
  { provider: "MICROSOFT", color: "text-brand-secondary bg-brand-secondary/10", border: 'group-hover:border-brand-secondary/30', title: "Bing Ads Search" },
  { provider: "META", color: "text-brand-secondary bg-brand-secondary/10", border: 'group-hover:border-brand-secondary/30', title: "Blueprint Digital Marketing" },
  { provider: "HUBSPOT", color: "text-brand-primary bg-brand-primary/10", border: 'group-hover:border-brand-primary/30', title: "Inbound Marketing" },
  { provider: "HUBSPOT", color: "text-brand-primary bg-brand-primary/10", border: 'group-hover:border-brand-primary/30', title: "Content Marketing" },
  { provider: "HUBSPOT", color: "text-brand-primary bg-brand-primary/10", border: 'group-hover:border-brand-primary/30', title: "Email Marketing" },
  { provider: "SEMRUSH", color: "text-brand-primary bg-brand-primary/10", border: 'group-hover:border-brand-primary/30', title: "SEO Toolkit" },
  { provider: "GOOGLE", color: "text-brand-primary bg-brand-primary/10", border: 'group-hover:border-brand-primary/30', title: "Digital Garage" },
  { provider: "LINKEDIN", color: "text-brand-secondary bg-brand-secondary/10", border: 'group-hover:border-brand-secondary/30', title: "Marketing Fundamentals" },
];
