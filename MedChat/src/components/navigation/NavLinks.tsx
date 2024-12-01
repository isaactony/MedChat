import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact Us' },
];

export function NavLinks() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="hidden md:flex items-center space-x-8">
      {links.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}