import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Cloud, Palette, Database, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices. From simple landing pages to complex enterprise solutions.",
      features: ["React & TypeScript", "Responsive Design", "SEO Optimized", "Performance Focused"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      features: ["React Native", "iOS & Android", "Push Notifications", "Offline Support"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to modernize your business operations and reduce costs.",
      features: ["AWS & Azure", "Serverless Architecture", "DevOps", "Auto-scaling"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed with your users in mind. We create experiences that delight and convert.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Robust database solutions designed for reliability, performance, and scalability to handle your growing data needs.",
      features: ["SQL & NoSQL", "Data Migration", "Optimization", "Backup Solutions"],
    },
    {
      icon: Shield,
      title: "Security & Testing",
      description: "Comprehensive security audits and testing to ensure your applications are safe, reliable, and compliant.",
      features: ["Penetration Testing", "Code Review", "Compliance", "Monitoring"],
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive software development services tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We're flexible and can adapt our services to match your specific requirements
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
