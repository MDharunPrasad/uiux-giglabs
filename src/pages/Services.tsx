import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "Web Design",
      description: "Creating stunning, user-focused designs that convert visitors into customers.",
      features: [
        "Custom Website Design",
        "Responsive Layouts",
        "User Experience (UX) Design",
        "User Interface (UI) Design",
        "Wireframing & Prototyping"
      ],
      images: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80"
      ]
    },
    {
      title: "Logo Design", 
      description: "Memorable brand identities that make your business stand out.",
      features: [
        "Brand Identity Development",
        "Logo Conceptualization",
        "Typography Selection", 
        "Color Palette Creation",
        "Brand Guidelines"
      ],
      images: [
        "https://images.unsplash.com/photo-1581090464777-f3220bbe1e8b?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=500&q=80"
      ]
    },
    {
      title: "Product Mockups",
      description: "Professional mockups that showcase your products in the best light.",
      features: [
        "Realistic Product Presentations",
        "Multiple Angle Views",
        "Professional Photography Style",
        "Brand Integration",
        "Marketing Ready Assets"
      ],
      images: [
        "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&q=80"
      ]
    },
    {
      title: "Brand and Visuals",
      description: "Comprehensive visual strategies that tell your brand story.",
      features: [
        "Visual Brand Strategy",
        "Marketing Materials",
        "Social Media Graphics",
        "Print Design",
        "Digital Assets"
      ],
      images: [
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80"
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
            className={`py-20 ${categoryIndex % 2 === 0 ? 'section-gray' : 'bg-background'}`}
          >
            <div className="container mx-auto px-6">
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
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {category.description}
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Features List */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`space-y-6 ${categoryIndex % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className="space-y-4">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-primary/70 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
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

                {/* Images Grid */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`${categoryIndex % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  {category.images.length === 3 ? (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <img 
                          src={category.images[0]}
                          alt={`${category.title} example 1`}
                          className="w-full aspect-square object-cover rounded-2xl shadow-glow hover:scale-105 transition-transform duration-500"
                        />
                        <img 
                          src={category.images[1]}
                          alt={`${category.title} example 2`}
                          className="w-full aspect-square object-cover rounded-2xl shadow-glow hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex items-center">
                        <img 
                          src={category.images[2]}
                          alt={`${category.title} example 3`}
                          className="w-full aspect-square object-cover rounded-2xl shadow-glow hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={category.images[0]}
                      alt={category.title}
                      className="w-full aspect-video object-cover rounded-2xl shadow-glow hover:scale-105 transition-transform duration-500"
                    />
                  )}
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