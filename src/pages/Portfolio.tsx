import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      description: "Modern e-commerce solution with advanced features",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Healthcare App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      description: "Patient management and telemedicine platform",
      tech: ["React Native", "Firebase", "TypeScript"],
    },
    {
      title: "Corporate Website",
      category: "design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      description: "Professional corporate website with CMS",
      tech: ["Next.js", "Tailwind", "Sanity"],
    },
    {
      title: "Fitness Tracker",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      description: "iOS and Android fitness tracking application",
      tech: ["Flutter", "Firebase", "ML Kit"],
    },
    {
      title: "Analytics Dashboard",
      category: "web",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      description: "Real-time data visualization platform",
      tech: ["React", "D3.js", "WebSocket"],
    },
    {
      title: "Brand Identity",
      category: "design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      description: "Complete brand identity and design system",
      tech: ["Figma", "Illustrator", "Photoshop"],
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "design", label: "Design" },
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter((project) => project.category === filter);

  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our successful projects and creative designs
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="lg">
                      View Project <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-heading font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Portfolio;
