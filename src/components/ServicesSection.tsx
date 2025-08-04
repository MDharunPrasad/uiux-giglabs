import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Monitor, Palette, Smartphone, Code, Camera, PenTool } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      category: "Web Design",
      icon: Monitor,
      description: "Creating user-centered designs that drive engagement and conversion.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80",
      features: [
        "Hand Drawn Wireframes",
        "HiFi Designs", 
        "Prototypes",
        "WordPress Sites",
        "UI/UX Designs"
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      category: "Graphic Design",
      icon: Palette,
      description: "Building strong brand identities through creative visual solutions.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1e8b?auto=format&fit=crop&w=500&q=80",
      features: [
        "Logo Design",
        "Social Media Banners",
        "Product Mockups", 
        "Advertisement Mockups",
        "Photo Editing",
        "Brand & Visual Design"
      ],
      gradient: "from-pink-500 to-orange-500"
    },
    {
      category: "Mobile Design",
      icon: Smartphone,
      description: "Responsive and intuitive mobile experiences for all devices.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=500&q=80",
      features: [
        "Mobile App UI",
        "Responsive Design",
        "Touch Interactions",
        "Cross-Platform",
        "User Testing"
      ],
      gradient: "from-green-500 to-teal-500"
    },
    {
      category: "Web Development",
      icon: Code,
      description: "Robust and scalable web solutions using modern technologies.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&q=80",
      features: [
        "Frontend Development",
        "Backend Solutions",
        "API Integration",
        "Database Design",
        "Performance Optimization"
      ],
      gradient: "from-indigo-500 to-blue-600"
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
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
              >
                {/* Service Header */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="relative">
                    <img 
                      src={service.image}
                      alt={service.category}
                      className="w-24 h-24 object-cover rounded-2xl shadow-medium"
                    />
                    <div className={`absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{service.category}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
                
                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all cursor-pointer">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
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
            className="gradient-primary text-white shadow-button hover:shadow-glow transition-spring group text-lg px-8 py-4"
            onClick={() => navigate('/services')}
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;