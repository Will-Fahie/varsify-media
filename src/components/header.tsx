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
        {/* Added flex-wrap, justify-center, and gap for better responsive behavior */}
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-start">
          {navLinks.map((link) => (
            <Button key={link.label} variant="link" asChild className="text-foreground/80 hover:text-foreground transition-colors">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}