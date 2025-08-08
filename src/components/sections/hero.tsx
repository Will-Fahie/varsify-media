'use client';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video?.readyState >= 3) {
      setIsVideoLoaded(true);
      return;
    }
    const handleVideoLoad = () => setIsVideoLoaded(true);
    video?.addEventListener('canplay', handleVideoLoad);
    return () => video?.removeEventListener('canplay', handleVideoLoad);
  }, []);

  return (
    <section
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/main-image-5.jpeg)' }}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-20" />
      
      <div className="relative z-30 container mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex flex-col items-center space-y-2">
            <Image 
              key="logo" 
              src="/images/logo.svg" 
              alt="Varsify Media Logo" 
              width={800} 
              height={320} 
              className="opacity-90 w-full max-w-[400px] md:max-w-[500px] lg:max-w-[800px] h-auto" 
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-20 md:bottom-10 left-1/2 -translate-x-1/2 z-30">
        <div className="animate-bounce flex flex-col items-center text-white">
          <p className="text-lg md:text-2xl font-bold">Scroll down to see more</p>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
}