import { MessageCircle, Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { icon: MessageCircle, href: "https://wa.me/1234567890", color: "text-green-400" },
    { icon: Instagram, href: "https://instagram.com", color: "text-pink-400" },
    { icon: Facebook, href: "https://facebook.com", color: "text-blue-400" },
    { icon: Linkedin, href: "https://linkedin.com", color: "text-blue-400" },
  ];

  return (
    <footer className="section-dark py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About GIGLABS */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">GIGLABS</h3>
            <p className="text-gray-300 leading-relaxed">
              Transforming creative visions into digital reality through innovative design and development solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.href}
                  className="block text-gray-300 hover:text-white transition-smooth"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} hover:scale-110 transition-smooth`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            © 2025 GIGLABS. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;