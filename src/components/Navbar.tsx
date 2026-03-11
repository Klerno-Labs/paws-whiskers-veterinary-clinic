```typescript
import React from 'react';
import Link from 'next/link';
import { cn } from '../utils/classnames';

interface NavbarProps {
  logoText: string;
  links: Array<{ label: string; href: string }>;
  ctaLabel: string;
  ctaHref: string;
  emergencyHref: string;
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ logoText, links, ctaLabel, ctaHref, emergencyHref, isScrolled }) => {
  return (
    <nav className={cn('fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl z-50 transition-all duration-300', isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-gray-100' : 'bg-transparent')}>
      <div className="flex justify-between items-center py-4">
        <Link href="/" className="font-bold text-2xl text-slate-900">
          {logoText}
        </Link>
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-slate-600 hover:text-green-600 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          <Link href={ctaHref} className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-700 hover:shadow-lg transform active:scale-95 transition-all">
            {ctaLabel}
          </Link>
          <Link href={emergencyHref} className="text-red-600 hover:underline">
            Emergency
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```