export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Reviews', href: '#reviews' },
  { label: 'Courses', href: '#/all-courses' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'College Collaboration', href: '#/college-collaboration' },
  { label: '1% Change', href: '#/1-change' },
  { label: 'FAQs', href: '#faq' }
];
