import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    // Remove bg-transparent and add proper padding/margin to ensure gradient continuity
    <footer className="w-full flex flex-col items-center justify-center gap-4 py-8 pb-12 bg-black">
      <p className="text-sm text-muted-foreground text-center">
        © {new Date().getFullYear()} Varsify Media. All rights reserved.
      </p>
    </footer>
  );
}