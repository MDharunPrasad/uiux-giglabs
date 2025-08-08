import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Palette, Figma, Code, Smartphone, Globe, Brush, Layout, Zap, Layers, TabletSmartphone, Eye, Rocket, Camera, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ServicesSection = () => {
  const navigate = useNavigate();
  
  const handleLearnMore = () => {
    console.log('Learn More clicked - navigating to services');
    navigate('/services', { replace: false });
    // Use requestAnimationFrame to ensure navigation completes first
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  const handleViewAllServices = () => {
    console.log('View All Services clicked - navigating to services');
    navigate('/services', { replace: false });
    // Use requestAnimationFrame to ensure navigation completes first
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };
  
  const services = [
    {
      category: "Web Design",
      icon: Monitor,
      definition: "Crafting digital experiences that engage and convert users through intuitive design and seamless user interface development.",
      features: [
        "Hand Drawn Wireframes",
        "HiFi Designs", 
        "Prototypes",
        "WordPress Sites",
        "UI/UX Designs"
      ],
      relatedIcons: [
        { icon: Monitor, label: "Desktop" },
        { icon: TabletSmartphone, label: "Responsive" },
        { icon: Code, label: "Development" },
        { icon: Figma, label: "Design Tools" },
        { icon: Layout, label: "Layouts" },
        { icon: Zap, label: "Performance" }
      ]
    },
    {
      category: "Graphic Design",
      icon: Palette,
      definition: "Building powerful brand identities through visual storytelling and creative design solutions that make your business memorable.",
      features: [
        "Logo Design",
        "Social Media Banners",
        "Product Mockups",
        "Advertisement Mockups",
        "Photo Editing",
        "Brand & Visual Design"
      ],
      relatedIcons: [
        { icon: Palette, label: "Branding" },
        { icon: Brush, label: "Creative" },
        { icon: Camera, label: "Photography" },
        { icon: Eye, label: "Visual" },
        { icon: Rocket, label: "Marketing" },
        { icon: Target, label: "Strategy" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Professional Design & 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
              Development Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to elevate your brand and drive business growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-blue transition-all duration-500 p-8 h-full border border-gray-100 hover:border-blue-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="gradient-primary p-4 rounded-xl shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">{service.category}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {service.definition}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-800 mb-4 text-lg">What we offer:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/70 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-6 gap-4 mb-8">
                    {service.relatedIcons.map((iconItem, iconIndex) => {
                      const IconComponent = iconItem.icon;
                      return (
                        <div key={iconIndex} className="flex flex-col items-center group/icon">
                          <div className="bg-gray-100 p-3 rounded-lg group-hover/icon:bg-blue-100 transition-colors duration-300">
                            <IconComponent className="w-6 h-6 text-gray-600 group-hover/icon:text-primary transition-colors duration-300" />
                          </div>
                          <div className="text-xs text-gray-500 mt-2 text-center">
                            {iconItem.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Learn More Button */}
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 text-primary border-primary hover:bg-primary hover:text-white transition-all duration-300 px-6 py-3 text-lg group"
                    onClick={handleLearnMore}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary text-white hover:bg-primary/90 transition-colors text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl"
            onClick={handleViewAllServices}
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
