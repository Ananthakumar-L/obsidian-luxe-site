import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "ProjectHub Pro",
      description: "Complete project management solution for modern teams",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      features: ["Task Management", "Team Collaboration", "Time Tracking", "Analytics"],
      rating: 4.8,
      price: "$29/month",
    },
    {
      name: "DataViz Suite",
      description: "Advanced data visualization and analytics platform",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      features: ["Interactive Dashboards", "Real-time Data", "Custom Reports", "API Integration"],
      rating: 4.9,
      price: "$49/month",
    },
    {
      name: "SecureAuth",
      description: "Enterprise-grade authentication and security solution",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      features: ["Multi-factor Auth", "SSO", "Audit Logs", "Compliance Ready"],
      rating: 4.7,
      price: "$99/month",
    },
    {
      name: "CloudSync",
      description: "Seamless file synchronization and backup solution",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      features: ["Auto Backup", "File Sharing", "Version Control", "Encryption"],
      rating: 4.6,
      price: "$19/month",
    },
    {
      name: "ChatFlow",
      description: "AI-powered customer support chatbot platform",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&q=80",
      features: ["AI Responses", "Multi-channel", "Analytics", "Custom Training"],
      rating: 4.8,
      price: "$79/month",
    },
    {
      name: "DevOps Toolkit",
      description: "Complete CI/CD and deployment automation suite",
      image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&q=80",
      features: ["CI/CD Pipelines", "Container Support", "Monitoring", "Auto-scaling"],
      rating: 4.9,
      price: "$149/month",
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-accent/10 via-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready-to-use software solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl">{product.name}</CardTitle>
                    <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm font-semibold">{product.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button>
                      Learn More <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
