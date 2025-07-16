import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { PlayCircle } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Training Reels',
    description: 'Dynamic reels showcasing athlete dedication and skill.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'athlete training',
  },
  {
    title: 'Match Highlights',
    description: 'Capturing the most thrilling moments of the game.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'sports match',
  },
  {
    title: 'Player Spotlights',
    description: 'Telling the personal stories behind the athletes.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'athlete portrait',
  },
  {
    title: 'Team Anthems',
    description: 'High-energy videos that build team spirit and fan excitement.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'sports team',
  },
  {
    title: 'Documentary Series',
    description: 'In-depth series following a team through their season.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'sports documentary',
  },
  {
    title: 'Social Media Shorts',
    description: 'Quick, engaging clips perfect for social platforms.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'social media',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-16 md:py-24 lg:py-32 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Portfolio Showcase
            </h2>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl/relaxed">
              Explore a selection of our work, demonstrating our capability to deliver high-quality, impactful sports media content.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl">
            {portfolioItems.map((item) => (
              <Dialog key={item.title}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden group cursor-pointer border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2">
                    <CardHeader className="p-0 relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={item.aiHint}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <PlayCircle className="h-16 w-16 text-white" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription className="mt-1 text-foreground/70">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
                  <div className="aspect-video">
                    <Image
                      src={item.image.replace('600x400', '1280x720')}
                      alt={item.title}
                      width={1280}
                      height={720}
                      className="object-cover w-full h-full rounded-lg"
                      data-ai-hint={item.aiHint}
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
