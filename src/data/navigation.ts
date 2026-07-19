export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#/about-us' },
  { label: 'Courses', href: '#/all-courses' },
  { label: 'Reviews', href: '#/reviews' },
  { label: 'Corporate & College Training', href: '#/college-collaboration' },
  { label: 'Contact Us', href: '#/contact-us' }
];
