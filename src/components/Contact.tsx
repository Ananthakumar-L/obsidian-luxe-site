import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-primary/30 bg-card/50 backdrop-blur-sm p-8 md:p-12 shadow-elevated">
            {/* Glow effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
            
            <div className="relative z-10 text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-background/50 backdrop-blur-sm mb-4">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Get In Touch</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Start Your <span className="bg-gradient-primary bg-clip-text text-transparent">Next Project?</span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how we can help transform your ideas into reality with cutting-edge technology solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Button size="lg" variant="glow" className="group">
                  <Mail className="mr-2" />
                  Contact Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a Call
                </Button>
              </div>
              
              <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
                <div>📧 info@company.com</div>
                <div className="hidden sm:block">•</div>
                <div>📞 +1 (555) 123-4567</div>
                <div className="hidden sm:block">•</div>
                <div>📍 San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
