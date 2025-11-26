import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, Code, Palette, Smartphone, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  const slides = [
    {
      title: "Innovative Software Solutions",
      description: "Transform your business with cutting-edge technology",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
    },
    {
      title: "Custom Web Development",
      description: "Tailored solutions for your unique business needs",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&q=80",
    },
    {
      title: "Mobile-First Approach",
      description: "Reach your customers anywhere, anytime",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1920&q=80",
    },
  ];

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Maintainable and scalable solutions",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized for speed and efficiency",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Perfect on all devices",
    },
    {
      icon: Palette,
      title: "Modern UI/UX",
      description: "Beautiful and intuitive interfaces",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Carousel */}
      <section className="relative">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[600px] w-full">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
                  </div>
                  <div className="relative container mx-auto px-4 h-full flex items-center">
                    <div className="max-w-2xl animate-fade-in">
                      <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                        {slide.description}
                      </p>
                      <div className="flex gap-4">
                        <Button size="lg" asChild>
                          <Link to="/contact">
                            Get Started <ArrowRight className="ml-2" />
                          </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                          <Link to="/services">Learn More</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We deliver excellence in every project with our proven approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life with innovative software solutions
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Contact Us Today <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
