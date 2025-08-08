import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 z-20" />

      {/* 👇 This is the new line for the top gradient 👇 */}
      <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-black to-transparent z-20 opacity-75" />

      <Image
        key="hero-image"
        src="/images/main-image-5.jpeg"
        alt="Main background image"
        fill
        priority
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-20" />
      <div className="relative z-30 container mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col items-center space-y-4">
            {/* 👇 This is the updated line 👇 */}
            <Image 
              key="logo" 
              src="/images/logo.svg" 
              alt="Varsify Media Logo" 
              width={800} 
              height={320} 
              className="opacity-85 w-full max-w-[550px] md:max-w-[800px] lg:max-w-[1000px] h-auto" 
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-20 md:bottom-10 left-1/2 -translate-x-1/2 z-30">
        <div className="animate-bounce flex flex-col items-center text-white">
          <p className="text-sm">Scroll down to see more</p>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
}