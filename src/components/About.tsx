import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "10+ years of industry experience",
  "Expert team of certified professionals",
  "Agile development methodology",
  "24/7 dedicated support",
];

export const About = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(330_100%_60%/0.08)_0%,transparent_50%)]" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Building the <span className="bg-gradient-primary bg-clip-text text-transparent">Future</span> of Technology
            </h2>
            <p className="text-lg text-muted-foreground">
              We are a forward-thinking technology company dedicated to delivering innovative solutions that drive business growth and digital transformation.
            </p>
            <p className="text-lg text-muted-foreground">
              Our team combines technical expertise with creative problem-solving to tackle the most complex challenges in the digital landscape.
            </p>
            
            <div className="space-y-3 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" variant="outline" className="mt-6">
              Learn About Our Mission
            </Button>
          </div>
          
          {/* Right visual element */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm p-8">
              <div className="space-y-4">
                {/* Code-like visual elements */}
                <div className="h-3 bg-primary/20 rounded-full w-3/4" />
                <div className="h-3 bg-secondary/20 rounded-full w-1/2" />
                <div className="h-3 bg-accent/20 rounded-full w-2/3" />
                <div className="h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mt-6" />
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="h-16 bg-card rounded-lg border border-primary/20" />
                  <div className="h-16 bg-card rounded-lg border border-secondary/20" />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-glow-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
