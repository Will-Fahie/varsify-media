export function About() {
  return (
    <section id="about" className="relative w-full py-8 md:py-12 bg-transparent">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black to-transparent" />
      
      {/* The container is now relative to sit on top of the gradient */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt">
        
       <div className="flex flex-col items-center max-w-3xl mx-auto">
         <div className="space-y-6 text-center">
           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
             We are a media agency focused on delivering high-level promotion for UK university sports.
           </h2>
           <p className="text-muted-foreground">
             Our mission is to elevate UK university-level sports to the standard of professional teams, increasing their visibility and impact.
           </p>
           <div>
             <h3 className="text-xl font-semibold mb-2">Our services to achieve this goal include:</h3>
             <ul className="list-disc list-inside text-muted-foreground space-y-1">
               <li>Training reels</li>
               <li>Match highlights</li>
               <li>Trend-driven content</li>
               <li>Player personality spotlights</li>
             </ul>
           </div>
         </div>
       </div>
     </div>
   </section>
  );
}
