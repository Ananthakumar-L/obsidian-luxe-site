import { Code2, Smartphone, Cloud, Shield, Zap, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile apps for iOS and Android",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions and DevOps automation",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security audits and protection solutions",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed and efficiency improvements for existing systems",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Intelligent automation and machine learning implementations",
  },
];

export const Services = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(195_100%_50%/0.08)_0%,transparent_50%)]" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-cyan-glow hover:-translate-y-1"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
