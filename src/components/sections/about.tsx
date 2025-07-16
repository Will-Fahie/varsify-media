import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, Target, Clapperboard } from "lucide-react";

const values = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Creativity",
    description: "We push creative boundaries to produce unique and engaging content that stands out."
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Innovation",
    description: "Utilizing the latest technology and techniques to deliver cutting-edge media solutions."
  },
  {
    icon: <Clapperboard className="h-8 w-8 text-primary" />,
    title: "Energy",
    description: "We bring passion and energy to every project, capturing the dynamic spirit of sports."
  }
];

export function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Our Mission
            </h2>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl/relaxed">
              At Varsify Media, our mission is to empower athletes and sports organizations by creating high-impact digital content. We believe in the power of storytelling to connect with audiences, build brands, and inspire the next generation of talent.
            </p>
          </div>
          
          <div className="w-full max-w-5xl">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 font-headline">
              Our Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <Card key={value.title} className="bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader className="items-center text-center">
                    {value.icon}
                    <CardTitle className="mt-4">{value.title}</CardTitle>
                    <CardDescription className="mt-2 text-foreground/70">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
