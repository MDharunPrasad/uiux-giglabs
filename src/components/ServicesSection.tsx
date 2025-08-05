import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Palette } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import React, { useRef, useEffect, useCallback } from "react";

const ServicesSection = () => {
  const navigate = useNavigate();
  const [webDesignApi, setWebDesignApi] = React.useState<CarouselApi>();
  const [graphicDesignApi, setGraphicDesignApi] = React.useState<CarouselApi>();
  const webDesignIntervalRef = useRef<NodeJS.Timeout>();
  const graphicDesignIntervalRef = useRef<NodeJS.Timeout>();

  const startAutoplay = useCallback((api: CarouselApi, intervalRef: React.MutableRefObject<NodeJS.Timeout | undefined>) => {
    if (!api) return;
    
    intervalRef.current = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 2000);
  }, []);

  const stopAutoplay = useCallback((intervalRef: React.MutableRefObject<NodeJS.Timeout | undefined>) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    if (webDesignApi) {
      startAutoplay(webDesignApi, webDesignIntervalRef);
    }
    return () => stopAutoplay(webDesignIntervalRef);
  }, [webDesignApi, startAutoplay, stopAutoplay]);

  useEffect(() => {
    if (graphicDesignApi) {
      startAutoplay(graphicDesignApi, graphicDesignIntervalRef);
    }
    return () => stopAutoplay(graphicDesignIntervalRef);
  }, [graphicDesignApi, startAutoplay, stopAutoplay]);
  
  const services = [
    {
      category: "Web Design",
      icon: Monitor,
      features: [
        "Hand Drawn Wireframes",
        "HiFi Designs", 
        "Prototypes",
        "WordPress Sites",
        "UI/UX Designs"
      ],
      showcaseImages: [
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&h=600&q=80",
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&h=600&q=80",
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=600&h=600&q=80",
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=600&h=600&q=80"
      ]
    },
    {
      category: "Graphic Design", 
      icon: Palette,
      features: [
        "Logo Design",
        "Social Media Banners",
        "Product Mockups", 
        "Advertisement Mockups",
        "Photo Editing",
        "Brand & Visual Design"
      ],
      showcaseImages: [
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=600&h=600&q=80",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&h=600&q=80",
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=600&h=600&q=80",
        "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=600&h=600&q=80"
      ]
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
        </motion.div>
        
        {/* Services Grid - Only 2 Services */}
        <div className="space-y-20 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isGraphicDesign = service.category === "Graphic Design";
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 items-center ${isGraphicDesign ? 'gap-2' : 'gap-4'}`}
              >
                {/* Service Showcase - Left for Web Design, Right for Graphic Design */}
                <div className={`${isGraphicDesign ? 'order-2' : 'order-2 md:order-1'}`}>
                  <div className="bg-gray-100 rounded-2xl w-full max-w-lg h-96 overflow-hidden shadow-soft mx-auto">
                    <Carousel
                      setApi={isGraphicDesign ? setGraphicDesignApi : setWebDesignApi}
                      className="w-full h-full"
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      onMouseEnter={() => stopAutoplay(isGraphicDesign ? graphicDesignIntervalRef : webDesignIntervalRef)}
                      onMouseLeave={() => startAutoplay(
                        isGraphicDesign ? graphicDesignApi : webDesignApi, 
                        isGraphicDesign ? graphicDesignIntervalRef : webDesignIntervalRef
                      )}
                    >
                      <CarouselContent className="h-full">
                        {service.showcaseImages.map((image, imageIndex) => (
                          <CarouselItem key={imageIndex} className="h-full">
                            <img 
                              src={image}
                              alt={`${service.category} showcase ${imageIndex + 1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  </div>
                </div>

                {/* Service Content - Right for Web Design, Left for Graphic Design */}
                <div className={`${isGraphicDesign ? 'order-1 md:pl-8' : 'order-1 md:order-2'} space-y-6`}>
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
                  
                  {/* Learn More Button */}
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 text-primary border-primary hover:bg-primary hover:text-white transition-all duration-300 px-6 py-3 text-lg"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
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
            className="bg-primary text-white hover:bg-primary/90 transition-colors text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl"
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