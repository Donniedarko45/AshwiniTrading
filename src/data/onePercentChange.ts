export interface PillarItem {
  title: string;
  description: string;
  iconName: 'Heart' | 'TrendingUp' | 'Sparkles';
}

export interface ObjectiveItem {
  title: string;
  description: string;
}

export interface ImpactEquivalency {
  name: string;
  cost: number;
  unit: string;
  iconName: string;
  description: string;
}

export const pillars: PillarItem[] = [
  {
    title: 'A Responsibility to Give Back',
    description: 'Success is not just about personal gain; it’s our duty to share and uplift others through meaningful contributions.',
    iconName: 'Heart'
  },
  {
    title: 'Multiplying the Value of Success',
    description: 'We believe that true success is amplified when it benefits more than just ourselves, creating a ripple effect of positive impact.',
    iconName: 'TrendingUp'
  },
  {
    title: 'Creating Lasting Change',
    description: 'Small, consistent efforts have the power to make a significant difference, and we are committed to being a catalyst for that change.',
    iconName: 'Sparkles'
  }
];

export const objectives: ObjectiveItem[] = [
  {
    title: 'Fulfilling Our Duty to Society',
    description: 'Engaging actively in societal welfare, ensuring that our success is tied to the growth of underprivileged communities.'
  },
  {
    title: 'Leading by Example',
    description: 'Setting a benchmark for corporate social responsibility in financial education, showing that business is about service as much as growth.'
  },
  {
    title: 'Empowering Growth and Opportunity',
    description: 'Providing direct access to resources, learning kits, and technology that enable kids to dream bigger and achieve more.'
  },
  {
    title: 'Building a Legacy of Positive Impact',
    description: 'Ensuring that our efforts create sustainable, long-term changes that keep impacting lives positively for generations.'
  },
  {
    title: 'A Shared Responsibility for a Better Tomorrow',
    description: 'Engaging our students and team members to participate in the act of giving back, co-creating a cooperative model of social impact.'
  },
  {
    title: 'Inviting Others to Be a Force for Good',
    description: 'Inspiring other individuals, academies, and business entities to pledge a portion of their earnings to social welfare.'
  }
];

export const impactEquivalencies: ImpactEquivalency[] = [
  {
    name: 'Financial Literacy Kits',
    cost: 250,
    unit: 'Kits',
    iconName: 'BookOpen',
    description: 'Fundamental finance books, calculators, worksheets, and study notebooks for children in local municipal schools.'
  },
  {
    name: 'Nutritious Meals',
    cost: 50,
    unit: 'Meals',
    iconName: 'Apple',
    description: 'Freshly cooked, hygienic, and wholesome meals for kids and families in marginalized communities.'
  },
  {
    name: 'Education Scholarships',
    cost: 1500,
    unit: 'Monthly Scholarships',
    iconName: 'GraduationCap',
    description: 'Covers school fees, transport, and basic learning materials for a child to continue high school.'
  },
  {
    name: 'Digital Learning Tablets',
    cost: 6000,
    unit: 'Tablets',
    iconName: 'Smartphone',
    description: 'Equips village study centers with high-quality tablet computers loaded with foundational math and reading software.'
  }
];
