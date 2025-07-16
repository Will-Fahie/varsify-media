import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Portfolio } from '@/components/sections/portfolio';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col bg-gradient-to-br from-background to-purple-950/20">
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
