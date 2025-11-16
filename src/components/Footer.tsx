import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import prasangLogo from "@/assets/prasang_logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={prasangLogo} 
                alt="Prasang Caterers Logo" 
                className="h-12 w-auto object-contain"
              />
              <h3 className="text-2xl font-serif font-bold">
                Prasang <span className="text-accent">Caterers</span>
              </h3>
            </div>
            <p className="text-background/80">
              Serving delicious experiences since 2009
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>Premium Catering</li>
              <li>Wedding Catering</li>
              <li>Corporate Catering</li>
              <li>Event Management</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/80">
          <p>&copy; 2025 Prasang Caterers and Event Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
