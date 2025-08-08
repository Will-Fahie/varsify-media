'use client';

import React, { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';

const instagramPosts = [
  {
    url: 'https://www.instagram.com/reel/DGvQDdYMbbn/',
    image: '/images/1.jpg',
    title: 'Rugby',
  },
  {
    url: 'https://www.instagram.com/p/DG0JFqwiya-/',
    image: '/images/2.jpg',
    title: 'Boxing',
  },
  {
    url: 'https://www.instagram.com/reel/DHOqC3xsfRv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    image: '/images/3.jpg',
    title: 'Football',
  },
  {
    url: 'https://www.instagram.com/p/DFym_zuNjIx/',
    image: '/images/4.jpg',
    title: 'OUABC',
  },
  {
    url: 'https://www.instagram.com/p/DHvtHiGMYl2/',
    image: '/images/5.jpg',
    title: 'OUAFC',
  },
  {
    url: 'https://www.instagram.com/p/DHjw3c5sk1n/',
    image: '/images/6.jpg',
    title: 'OUABC',
  },
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
    <section id="portfolio" className="w-full py-8 md:py-12 bg-transparent relative">
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
            {/* You can add a trailers grid here if needed */}
            <div className="grid grid-cols-3 gap-8">
              {instagramPosts.slice(0, 3).map((post, idx) => (
                <a
                  key={idx}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-lg overflow-hidden shadow-lg border border-border/20 hover:scale-105 transition-transform bg-background"
                >
                  <img
                    src={post.image}
                    alt="Instagram post preview"
                    className="w-full aspect-[3/4] object-cover group-hover:brightness-75 transition-all"
                  />
                  <div className="absolute inset-0 bg-black/50 z-10" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
                    <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg mb-2 px-2" style={{textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>{post.title}</span>
                    <span className="text-lg md:text-xl font-semibold text-white rounded px-3 py-1 drop-shadow-md" style={{textShadow: '0 1px 4px rgba(0,0,0,0.4)'}}>Tap to view</span>
                  </div>
                </a>
              ))}
            </div>
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mt-12 mb-8 font-headline">
              Highlights
            </h3>
            <div className="grid grid-cols-3 gap-8">
              {instagramPosts.slice(3).map((post, idx) => (
                <a
                  key={idx}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-lg overflow-hidden shadow-lg border border-border/20 hover:scale-105 transition-transform bg-background"
                >
                  <img
                    src={post.image}
                    alt="Instagram post preview"
                    className="w-full aspect-[3/4] object-cover group-hover:brightness-75 transition-all"
                  />
                  <div className="absolute inset-0 bg-black/50 z-10" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
                    <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg mb-2 px-2" style={{textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>{post.title}</span>
                    <span className="text-lg md:text-xl font-semibold text-white rounded px-3 py-1 drop-shadow-md" style={{textShadow: '0 1px 4px rgba(0,0,0,0.4)'}}>Tap to view</span>
                  </div>
                </a>
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
      
      {/* Black fade at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
}