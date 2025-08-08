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
                  
                  {/* Animated SVG Section */}
                  <div className="mb-6 flex justify-center">
                    {service.category === "Web Design" ? (
                      <div className="relative w-64 h-40 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 overflow-hidden">
                        {/* Animated Website Mockup */}
                        <svg className="w-full h-full" viewBox="0 0 240 120" fill="none">
                          {/* Browser Window */}
                          <rect x="10" y="15" width="220" height="90" rx="8" fill="white" className="drop-shadow-md"/>
                          <rect x="10" y="15" width="220" height="20" rx="8" fill="#f3f4f6"/>
                          <circle cx="25" cy="25" r="3" fill="#ef4444" className="animate-pulse"/>
                          <circle cx="35" cy="25" r="3" fill="#f59e0b" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                          <circle cx="45" cy="25" r="3" fill="#10b981" className="animate-pulse" style={{animationDelay: '1s'}}/>
                          
                          {/* Content Lines with Animation */}
                          <rect x="25" y="45" width="190" height="4" rx="2" fill="#3b82f6" className="animate-pulse"/>
                          <rect x="25" y="55" width="150" height="3" rx="1.5" fill="#6b7280" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                          <rect x="25" y="63" width="170" height="3" rx="1.5" fill="#6b7280" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                          
                          {/* Mobile Device */}
                          <rect x="190" y="40" width="35" height="60" rx="6" fill="white" className="drop-shadow-md animate-bounce" style={{animationDuration: '3s'}}/>
                          <rect x="195" y="45" width="25" height="2" rx="1" fill="#3b82f6"/>
                          <rect x="195" y="50" width="20" height="1.5" rx="0.75" fill="#6b7280"/>
                          <rect x="195" y="54" width="22" height="1.5" rx="0.75" fill="#6b7280"/>
                        </svg>
                        
                        {/* Floating Code Elements */}
                        <div className="absolute top-2 right-2 text-blue-500 animate-bounce" style={{animationDelay: '1s', animationDuration: '2s'}}>
                          &lt;/&gt;
                        </div>
                        <div className="absolute bottom-2 left-2 text-blue-400 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2.5s'}}>
                          { }
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-64 h-40 bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-4 overflow-hidden">
                        {/* Animated Design Elements */}
                        <svg className="w-full h-full" viewBox="0 0 240 120" fill="none">
                          {/* Artboard */}
                          <rect x="20" y="20" width="200" height="80" rx="8" fill="white" className="drop-shadow-md"/>
                          
                          {/* Color Palette */}
                          <circle cx="40" cy="40" r="8" fill="#ef4444" className="animate-pulse"/>
                          <circle cx="60" cy="40" r="8" fill="#3b82f6" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                          <circle cx="80" cy="40" r="8" fill="#10b981" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                          <circle cx="100" cy="40" r="8" fill="#f59e0b" className="animate-pulse" style={{animationDelay: '0.9s'}}/>
                          
                          {/* Design Elements */}
                          <rect x="130" y="35" width="60" height="30" rx="4" fill="#f3f4f6" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
                          <rect x="135" y="40" width="50" height="3" rx="1.5" fill="#6b7280"/>
                          <rect x="135" y="46" width="35" height="2" rx="1" fill="#6b7280"/>
                          <rect x="135" y="50" width="45" height="2" rx="1" fill="#6b7280"/>
                          
                          {/* Typography */}
                          <text x="40" y="75" fontSize="8" fill="#374151" className="animate-pulse">Aa</text>
                          <text x="60" y="75" fontSize="12" fill="#374151" className="animate-pulse" style={{animationDelay: '0.4s'}}>Aa</text>
                          <text x="85" y="75" fontSize="16" fill="#374151" className="animate-pulse" style={{animationDelay: '0.8s'}}>Aa</text>
                          
                          {/* Logo Placeholder */}
                          <circle cx="160" cy="80" r="15" fill="#8b5cf6" className="animate-spin" style={{animationDuration: '4s'}}/>
                          <rect x="153" y="77" width="14" height="2" rx="1" fill="white"/>
                          <rect x="153" y="81" width="10" height="2" rx="1" fill="white"/>
                        </svg>
                        
                        {/* Floating Design Tools */}
                        <div className="absolute top-2 right-2 text-purple-500 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2s'}}>
                          ✏️
                        </div>
                        <div className="absolute bottom-2 left-2 text-pink-500 animate-bounce" style={{animationDelay: '1s', animationDuration: '2.5s'}}>
                          🎨
                        </div>
                        <div className="absolute top-6 left-6 text-purple-400 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3s'}}>
                          ✨
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {service.definition}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-800 mb-4 text-lg">What we offer:</h4>
                    <div className="grid grid-cols-2 gap-6">
                      {/* First Column - First 3 features */}
                      <div className="space-y-3">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/70 rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Second Column - Remaining features */}
                      <div className="space-y-3">
                        {service.features.slice(3).map((feature, featureIndex) => (
                          <div key={featureIndex + 3} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/70 rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
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
