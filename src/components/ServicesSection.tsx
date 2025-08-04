import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Palette } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      category: "Web Design",
      icon: Monitor,
      description: "Creating user-centered designs that drive engagement and conversion.",
      features: [
        "Hand Drawn Wireframes",
        "HiFi Designs", 
        "Prototypes",
        "WordPress Sites",
        "UI/UX Designs"
      ],
      showcaseImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=500&h=500&q=80"
    },
    {
      category: "Graphic Design", 
      icon: Palette,
      description: "Building strong brand identities through creative visual solutions.",
      features: [
        "Logo Design",
        "Social Media Banners",
        "Product Mockups", 
        "Advertisement Mockups",
        "Photo Editing",
        "Brand & Visual Design"
      ],
      showcaseImage: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=500&h=500&q=80"
    }
  ];

  return (
    <section className="section-gray py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design and development solutions tailored to your business needs
          </p>
        </motion.div>
        
        {/* Services Grid - Only 2 Services */}
        <div className="space-y-20 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Left: Service Showcase */}
                <div className="order-2 md:order-1">
                  <div className="bg-gray-100 rounded-2xl w-80 h-80 overflow-hidden shadow-soft">
                    <img 
                      src={service.showcaseImage}
                      alt={`${service.category} showcase`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Right: Service Content */}
                <div className="order-1 md:order-2 space-y-6">
                  {/* Title */}
                  <h3 className="text-3xl font-bold text-foreground">{service.category}</h3>
                  
                  {/* Features List */}
                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-foreground text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all cursor-pointer group">
                    <span className="text-lg">Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-gray-800 transition-colors text-lg px-8 py-4 rounded-lg"
            onClick={() => navigate('/services')}
          >
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;