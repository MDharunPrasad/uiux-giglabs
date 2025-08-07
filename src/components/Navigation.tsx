import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            GIGLABS
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`transition-smooth relative ${
                  isActive(link.path) 
                    ? 'text-primary font-semibold after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side items */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Desktop WhatsApp Contact */}
            <div className="hidden xl:flex flex-col items-end">
              <span className="text-foreground font-semibold text-base lg:text-lg">Let's Connect!</span>
              <span className="text-muted-foreground text-xs lg:text-sm">Chat with us instantly</span>
            </div>
            
            {/* WhatsApp Button */}
            <Button 
              onClick={handleWhatsAppClick}
              className="gradient-primary text-white px-3 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 md:gap-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-semibold hidden md:inline">WhatsApp</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-blue-50 transition-colors duration-200 text-primary"
              variant="ghost"
              size="sm"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-blue-100">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-smooth text-center py-2 px-4 rounded-md ${
                    isActive(link.path) 
                      ? 'text-primary font-semibold bg-blue-50' 
                      : 'text-foreground hover:text-primary hover:bg-blue-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 text-center">
                <span className="text-foreground font-semibold text-sm">Let's Connect!</span>
                <br />
                <span className="text-muted-foreground text-xs">Chat with us instantly</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;