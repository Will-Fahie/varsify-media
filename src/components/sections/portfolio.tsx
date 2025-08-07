'use client';

import React, { useState, useEffect } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

const trailers = [
  'https://www.instagram.com/reel/DGvQDdYMbbn/',
  'https://www.instagram.com/p/DG0JFqwiya-/',
  'https://www.instagram.com/reel/DHOqC3xsfRv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
];

const highlights = [
    'https://www.instagram.com/p/DFym_zuNjIx/',
    'https://www.instagram.com/p/DHvtHiGMYl2/',
    'https://www.instagram.com/p/DHjw3c5sk1n/',
];

const ClientOnlyInstagramEmbed = ({ url }: { url: string }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <InstagramEmbed url={url} width="100%" />;
};


export function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-8 md:py-12 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Our Work
            </h2>
          </div>
          <div className="w-full max-w-6xl">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 font-headline">
              Trailers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trailers.map((url, index) => (
                <div key={index} className="flex justify-center w-full">
                  <ClientOnlyInstagramEmbed url={url} />
                </div>
              ))}
            </div>
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mt-12 mb-8 font-headline">
                Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {highlights.map((url, index) => (
                    <div key={index} className="flex justify-center w-full">
                        <ClientOnlyInstagramEmbed url={url} />
                    </div>
                ))}
            </div>
            <div className="mt-12">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 font-headline">
                    From Our Upcoming Documentary
                </h3>
                <div className="aspect-video w-full rounded-lg overflow-hidden border border-border/20">
                    <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/l8_EHYnTNxQ?fs=0&modestbranding=1"
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
