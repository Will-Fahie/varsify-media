import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Varsify Media
            </h1>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
              Creative Sports Media Solutions. We craft compelling training reels, match highlights, and player personality spotlights to elevate your game.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#portfolio">View Our Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
