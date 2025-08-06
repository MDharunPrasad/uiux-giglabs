import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Check, Monitor, Code, Figma, Smartphone, Globe, Layers, Palette, Brush, Camera, Eye, Rocket, Target, Package, Image, Printer, FileImage, Presentation, Users } from "lucide-react";
import { useEffect } from "react";

const Services = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const serviceCategories = [
    {
      title: "Web Design",
      description: "Creating stunning, user-focused designs that convert visitors into customers.",
      detailedDescription: [
        "We specialize in creating modern, responsive websites that provide exceptional user experiences across all devices.",
        "Our web design process focuses on understanding your business goals and target audience to deliver designs that drive conversions."
      ],
      features: [
        "Custom Website Design",
        "Responsive Layouts",
        "User Experience (UX) Design",
        "User Interface (UI) Design",
        "Wireframing & Prototyping"
      ],
      relatedIcons: [
        { icon: Monitor, label: "Desktop Design" },
        { icon: Code, label: "Development" },
        { icon: Figma, label: "Design Tools" },
        { icon: Smartphone, label: "Mobile First" },
        { icon: Globe, label: "Web Standards" },
        { icon: Layers, label: "UI Components" }
      ],
      images: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      title: "Logo Design", 
      description: "Memorable brand identities that make your business stand out.",
      detailedDescription: [
        "Your logo is the face of your brand, and we craft memorable designs that capture your company's essence and values.",
        "Our logo design process involves deep research into your industry, competitors, and target market to create unique solutions."
      ],
      features: [
        "Brand Identity Development",
        "Logo Conceptualization",
        "Typography Selection", 
        "Color Palette Creation",
        "Brand Guidelines"
      ],
      relatedIcons: [
        { icon: Palette, label: "Color Design" },
        { icon: Brush, label: "Creative Design" },
        { icon: Eye, label: "Visual Identity" },
        { icon: Target, label: "Brand Focus" },
        { icon: Rocket, label: "Brand Launch" },
        { icon: Users, label: "Brand Strategy" }
      ],
      images: [
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      title: "Product Mockups",
      description: "Professional mockups that showcase your products in the best light.",
      detailedDescription: [
        "Professional product mockups that bring your designs to life and showcase them in realistic, engaging contexts.",
        "We create high-quality presentations that help you visualize your products before production and impress potential clients."
      ],
      features: [
        "Realistic Product Presentations",
        "Multiple Angle Views",
        "Professional Photography Style",
        "Brand Integration",
        "Marketing Ready Assets"
      ],
      relatedIcons: [
        { icon: Package, label: "Product Design" },
        { icon: Camera, label: "Photography" },
        { icon: Image, label: "Visual Assets" },
        { icon: Presentation, label: "Presentations" },
        { icon: FileImage, label: "Mockup Files" },
        { icon: Rocket, label: "Product Launch" }
      ],
      images: [
        "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      title: "Brand and Visuals",
      description: "Comprehensive visual strategies that tell your brand story.",
      detailedDescription: [
        "Complete visual brand strategies that create consistent, memorable experiences across all customer touchpoints.",
        "We develop comprehensive brand systems including visual guidelines, marketing materials, and digital assets."
      ],
      features: [
        "Visual Brand Strategy",
        "Marketing Materials",
        "Social Media Graphics",
        "Print Design",
        "Digital Assets"
      ],
      relatedIcons: [
        { icon: Brush, label: "Creative Design" },
        { icon: Printer, label: "Print Design" },
        { icon: Globe, label: "Digital Assets" },
        { icon: Users, label: "Social Media" },
        { icon: Target, label: "Marketing" },
        { icon: Eye, label: "Brand Vision" }
      ],
      images: [
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Professional Design & Development{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive solutions to elevate your brand and drive business growth
            </p>
          </motion.div>
        </section>

        {/* Services Sections */}
        {serviceCategories.map((category, categoryIndex) => (
          <section 
            key={categoryIndex}
            className={`py-24 ${categoryIndex % 2 === 0 ? 'section-gray' : 'bg-background'}`}
          >
            <div className="container mx-auto px-6">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  {category.title}
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                  {category.description}
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
                {/* Content Section */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`space-y-8 ${categoryIndex % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  {/* 4-line Detailed Description */}
                  <div className="space-y-4">
                    {category.detailedDescription.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-muted-foreground leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* Related Icons */}
                  <div className="py-6">
                    <div className="flex flex-wrap gap-4">
                      {category.relatedIcons.map((iconItem, iconIndex) => {
                        const IconComponent = iconItem.icon;
                        return (
                          <div key={iconIndex} className="relative group">
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 cursor-pointer border border-primary/20 group-hover:border-primary/40">
                              <IconComponent className="w-7 h-7 text-primary" />
                            </div>
                            {/* Tooltip on hover */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                              {iconItem.label}
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground mb-4">What's Included</h4>
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-primary/70 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-foreground font-medium text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="gradient-primary text-white shadow-button hover:shadow-glow transition-spring group mt-8"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>

                {/* Images Section - Improved Layout */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`${categoryIndex % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                    {/* First image - spans full width */}
                    <div className="col-span-2">
                      <img 
                        src={category.images[0]}
                        alt={`${category.title} example 1`}
                        className="w-full aspect-[16/10] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                    {/* Two smaller images below */}
                    <img 
                      src={category.images[1]}
                      alt={`${category.title} example 2`}
                      className="w-full aspect-square object-cover rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
                    />
                    <img 
                      src={category.images[2]}
                      alt={`${category.title} example 3`}
                      className="w-full aspect-square object-cover rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="section-gradient py-24">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Let's collaborate to bring your vision to life with our expert design and development services.
              </p>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary transition-smooth text-lg px-8 py-4"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;