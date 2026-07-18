export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#/about-us' },
  { label: 'Courses', href: '#/all-courses' },
  { label: 'Reviews & Success', href: '#/reviews' },
  { label: 'Corporate Training', href: '#/corporate-college' },
  { label: 'Contact Us', href: '#/contact-us' }
];
