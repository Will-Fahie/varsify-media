'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const navLinks = [
  { href: '#about', label: 'Who We Are' },
  { href: '#portfolio', label: 'What We Do' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Header() {
  return (
    <header className="absolute top-0 z-50 w-full">
      {/* Changed h-20 to min-h-20 to allow the header to grow */}
      <div className="container flex min-h-20 items-center py-2">
        {/* Removed nav menu options */}
      </div>
    </header>
  );
}