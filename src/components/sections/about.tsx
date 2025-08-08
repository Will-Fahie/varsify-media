export function About() {
  return (
    <section id="about" className="relative w-full py-8 md:py-12 bg-transparent">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black to-transparent" />
      {/* The container is now relative to sit on top of the gradient */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-16 md:pt-0">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              We are a media agency focused on delivering high-level promotion for UK university sports.
            </h2>
            <p className="text-muted-foreground">
              Our mission is to elevate UK university-level sports to the standard of professional teams, increasing their visibility and impact. Our services include: training reels, match highlights, trend-driven content, and player personality spotlights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}