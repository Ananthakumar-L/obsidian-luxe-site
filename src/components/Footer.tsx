import { Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Macrozn" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold">Macrozn</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Next-generation technology solutions for modern businesses.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cloud Solutions</a></li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Macrozn. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
