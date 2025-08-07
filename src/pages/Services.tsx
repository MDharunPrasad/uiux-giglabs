import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Check, Monitor, Code, Figma, Smartphone, Globe, Layers, Palette, Brush, Camera, Eye, Rocket, Target, Package, Image, Printer, FileImage, Presentation, Users, Layout, Zap, MousePointer, Play, Settings, Share2, Megaphone, ShoppingCart } from "lucide-react";
import { useEffect } from "react";

const Services = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const serviceCategories = [
    {
      title: "UI/UX Web Design (Complete Solution)",
      description: "End-to-end web design solutions from concept to high-fidelity designs, including wireframes and prototypes.",
      detailedDescription: [
        "Our comprehensive UI/UX web design service covers the entire design journey from initial concept to pixel-perfect final designs.",
        "We follow a systematic approach: Research → Low-Fi Wireframes → High-Fi Wireframes → Interactive Prototypes → Final UI Design."
      ],
      features: [
        "User Research & Analysis",
        "Information Architecture",
        "Low-Fidelity Wireframes",
        "High-Fidelity Wireframes", 
        "Interactive Prototypes",
        "Final UI Design",
        "Responsive Design",
        "User Experience Optimization"
      ],
      relatedIcons: [
        { icon: Monitor, label: "Web Design" },
        { icon: Figma, label: "Design Tools" },
        { icon: Users, label: "User Research" },
        { icon: Layout, label: "Wireframing" },
        { icon: Eye, label: "Visual Design" },
        { icon: Smartphone, label: "Responsive" }
      ],
      images: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      title: "Wireframes (Low-Fi & High-Fi)",
      description: "Strategic blueprints in two levels - basic structure layouts (Low-Fi) and detailed design wireframes (High-Fi).",
      detailedDescription: [
        "Low-Fidelity (Low-Fi) Wireframes: Basic structural layouts focusing on content placement and navigation flow without visual styling.",
        "High-Fidelity (High-Fi) Wireframes: Detailed wireframes with specific spacing, typography, and interactive elements clearly defined."
      ],
      features: [
        "Low-Fi Wireframes (Structure Focus)",
        "High-Fi Wireframes (Detail Focus)",
        "User Flow Mapping",
        "Information Architecture",
        "Content Strategy",
        "Navigation Design",
        "Interactive Elements Planning",
        "Mobile & Desktop Layouts"
      ],
      relatedIcons: [
        { icon: Layout, label: "Structure Design" },
        { icon: Layers, label: "Information Architecture" },
        { icon: Target, label: "User Goals" },
        { icon: MousePointer, label: "User Interaction" },
        { icon: Globe, label: "Web Framework" },
        { icon: Smartphone, label: "Mobile Layout" }
      ],
      images: [
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1607706189992-eae578626c86?auto=format&fit=crop&w=400&q=80", 
        "https://images.unsplash.com/photo-1559251606-c623743a6d76?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      title: "Interactive Prototypes",
      description: "Clickable, interactive demos that simulate the actual user experience before development begins.",
      detailedDescription: [
        "Interactive prototypes are clickable versions of your wireframes that simulate how users will actually interact with your website or app.",
        "These prototypes allow you to test user flows, validate design decisions, and gather feedback before development begins."
      ],
      features: [
        "Clickable Interactive Demos",
        "User Flow Testing",
        "Realistic User Experience",
        "Mobile & Desktop Prototypes",
        "Transition Animations",
        "User Testing Ready",
        "Stakeholder Presentations",
        "Feedback Integration"
      ],
      relatedIcons: [
        { icon: Play, label: "Interactive Demo" },
        { icon: MousePointer, label: "User Interaction" },
        { icon: Zap, label: "Quick Testing" },
        { icon: Smartphone, label: "Mobile Prototypes" },
        { icon: Monitor, label: "Web Prototypes" },
        { icon: Users, label: "User Testing" }
      ],
      images: [
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      title: "WordPress Web Design & Development",
      description: "Custom WordPress websites that combine beautiful design with powerful, easy-to-manage functionality.",
      detailedDescription: [
        "Professional WordPress websites that perfectly blend stunning visual design with robust functionality and user-friendly content management.",
        "Our WordPress solutions include custom theme development, plugin integration, and comprehensive optimization for speed, security, and SEO."
      ],
      features: [
        "Custom WordPress Themes",
        "Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "Security Setup",
        "Plugin Integration",
        "Content Management Training",
        "Ongoing Support"
      ],
      relatedIcons: [
        { icon: Globe, label: "WordPress CMS" },
        { icon: Code, label: "Custom Development" },
        { icon: Rocket, label: "Performance" },
        { icon: Target, label: "SEO Focused" },
        { icon: Settings, label: "Plugin Integration" },
        { icon: Users, label: "User Management" }
      ],
      images: [
        "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      title: "Logo & Banner Design", 
      description: "Memorable brand identities and eye-catching banners that make your business stand out across all platforms.",
      detailedDescription: [
        "Your logo is the cornerstone of your brand identity. We create memorable, versatile logos that capture your company's essence and work across all mediums.",
        "Our banner designs include social media graphics, website banners, and marketing materials that maintain brand consistency."
      ],
      features: [
        "Brand Identity Development",
        "Logo Conceptualization & Design",
        "Social Media Banners",
        "Website Headers & Banners", 
        "Marketing Material Design",
        "Typography & Color Systems",
        "Brand Guidelines Creation",
        "Multiple Format Delivery"
      ],
      relatedIcons: [
        { icon: Palette, label: "Brand Colors" },
        { icon: Brush, label: "Creative Design" },
        { icon: Eye, label: "Visual Identity" },
        { icon: Share2, label: "Social Media" },
        { icon: Image, label: "Banner Design" },
        { icon: Target, label: "Brand Strategy" }
      ],
      images: [
        "/src/assets/logo1.JPG",
        "/src/assets/logo2.JPG",
        "/src/assets/poster3.JPG"
      ]
    },
    {
      title: "Product Mockups",
      description: "Professional product presentations that showcase your designs in realistic, market-ready contexts.",
      detailedDescription: [
        "High-quality product mockups that bring your designs to life and present them in professional, realistic settings.",
        "We create stunning visual presentations that help you showcase products to clients, investors, or customers before production."
      ],
      features: [
        "Realistic Product Presentations",
        "Multiple Angle Views",
        "Professional Photography Style",
        "Brand Integration",
        "Marketing Ready Assets",
        "High-Resolution Output",
        "Various Context Settings",
        "Client Presentation Ready"
      ],
      relatedIcons: [
        { icon: Package, label: "Product Design" },
        { icon: Camera, label: "Photography Style" },
        { icon: Image, label: "Visual Assets" },
        { icon: Presentation, label: "Presentations" },
        { icon: FileImage, label: "Mockup Files" },
        { icon: Rocket, label: "Product Launch" }
      ],
      images: [
        "/src/assets/product mu.JPG",
        "/src/assets/product mu2.JPG",
        "/src/assets/product mu3.JPG"
      ]
    },
    {
      title: "Brand & Visual Design",
      description: "Comprehensive visual brand strategies that create consistent, memorable experiences across all touchpoints.",
      detailedDescription: [
        "Complete visual brand identity systems that tell your brand story and create lasting impressions across all customer interactions.",
        "We develop comprehensive brand guidelines, marketing materials, and digital assets that ensure consistency across all platforms."
      ],
      features: [
        "Complete Visual Brand Strategy",
        "Brand Guidelines & Standards",
        "Marketing Material Design",
        "Social Media Visual Systems",
        "Print Design Solutions",
        "Digital Asset Creation",
        "Brand Application Design",
        "Visual Consistency Management"
      ],
      relatedIcons: [
        { icon: Brush, label: "Creative Design" },
        { icon: Printer, label: "Print Design" },
        { icon: Globe, label: "Digital Assets" },
        { icon: Users, label: "Social Media" },
        { icon: Target, label: "Brand Strategy" },
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
            className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-gray-50/50' : 'bg-background'} border-b border-gray-100`}
          >
            <div className="container mx-auto px-6 max-w-7xl">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {category.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  {category.description}
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                {/* Content Section */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`space-y-6 ${categoryIndex % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  {/* Detailed Description */}
                  <div className="space-y-4">
                    {category.detailedDescription.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-muted-foreground leading-relaxed text-lg">
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* Related Icons */}
                  <div className="py-4">
                    <div className="flex flex-wrap gap-3">
                      {category.relatedIcons.map((iconItem, iconIndex) => {
                        const IconComponent = iconItem.icon;
                        return (
                          <div key={iconIndex} className="relative group">
                            <div className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors border border-primary/20">
                              <IconComponent className="h-4 w-4 text-primary" />
                              <span className="text-sm text-foreground font-medium">{iconItem.label}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-foreground mb-4">What's Included</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-muted-foreground text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="gradient-primary text-white shadow-button hover:shadow-glow transition-spring group mt-6"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>

                {/* Images Section */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`${categoryIndex % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
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
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Let's collaborate to bring your vision to life with our expert design and development services.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 text-lg px-8 py-4 font-semibold shadow-lg hover:shadow-xl"
                >
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;