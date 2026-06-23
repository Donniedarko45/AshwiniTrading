export interface PlacementStep {
  month: string;
  title: string;
  desc: string;
  isGreen?: boolean;
}

export const placementSteps: PlacementStep[] = [
  {
    month: "MONTH 1",
    title: "Foundation + Live Tools",
    desc: "Hands-on training on every tool in the stack. By Day 30, you've run your first real Google Ads campaign with a real budget."
  },
  {
    month: "MONTH 2–3",
    title: "Live Industry Projects",
    desc: "You work on 3 real client briefs from partner agencies. Output goes into a portfolio that hiring managers can actually see."
  },
  {
    month: "MONTH 4",
    title: "Portfolio + Mock Interviews",
    desc: "1:1 portfolio review with a working agency professional. Three rounds of mock interviews including a technical round."
  },
  {
    month: "MONTH 5",
    title: "Recruiter Introductions",
    desc: "Direct introductions to our 500+ hiring partners in Bangalore. Your profile goes on our internal recruiter board."
  },
  {
    month: "6-Month Placement Support",
    title: "",
    desc: "Continued recruiter intros and interview support until you're placed. No artificial end date.",
    isGreen: true
  }
];
