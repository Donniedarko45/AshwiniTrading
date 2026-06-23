export interface ComparisonRow {
  feature: string;
  bluetick: string;
  self: string;
  online: string;
  other: string;
}

export const comparisonData: ComparisonRow[] = [
  {
    feature: "Trainers",
    bluetick: "Working agency practitioners",
    self: "None",
    online: "Career trainers, rarely practitioners",
    other: "Mixed, varies by batch",
  },
  {
    feature: "Live agency projects",
    bluetick: "3 in 90 days, real client briefs",
    self: "None",
    online: "Simulated only",
    other: "Sometimes, no commitment",
  },
  {
    feature: "Placement support",
    bluetick: "6 months, named alumni evidence",
    self: "None",
    online: "Generic webinars + portal",
    other: "Variable, no fixed window",
  },
  {
    feature: "AI-native curriculum",
    bluetick: "Quarterly updates",
    self: "Self-curated",
    online: "Slow to update",
    other: "Often outdated",
  },
  {
    feature: "Local BLR network",
    bluetick: "300+ Bangalore HRs",
    self: "None",
    online: "Pan-India, not Bangalore-specific",
    other: "Limited to direct contacts",
  }
];
