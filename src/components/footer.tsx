import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    // Apply full-width and centering classes directly to the footer
    <footer className="w-full flex flex-col items-center justify-center gap-4 py-8">
      <p className="text-sm text-muted-foreground text-center">
        © {new Date().getFullYear()} Varsify Media. All rights reserved.
      </p>

      {/* This div wrapper is optional but good practice if you add more icons */}
      <div className="flex items-center">
        <Button variant="ghost" size="icon" asChild>
          <Link href="https://www.instagram.com/varsifymedia/" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </footer>
  );
}