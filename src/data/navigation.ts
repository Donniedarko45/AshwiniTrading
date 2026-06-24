export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Reviews', href: '#reviews' },
  { label: 'Courses', href: '#/all-courses' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Projects', href: '#projects' },
  { label: 'College Collaboration', href: '#/college-collaboration' },
  { label: 'FAQs', href: '#faq' }
];
