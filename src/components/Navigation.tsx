import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary">
            GIGLABS
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-smooth ${isActive('/') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`transition-smooth ${isActive('/services') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`transition-smooth ${isActive('/about') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-smooth ${isActive('/contact') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
            >
              Contact Us
            </Link>
          </div>

          {/* WhatsApp Contact */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex flex-col items-end text-sm">
              <span className="text-foreground font-medium">Good on WhatsApp</span>
              <span className="text-muted-foreground">+1 234 567 890</span>
            </div>
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleWhatsAppClick}
              className="transition-smooth hover:bg-green-50 hover:border-green-500"
              title="Contact us on WhatsApp"
            >
              <MessageCircle className="h-5 w-5 text-green-600" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;