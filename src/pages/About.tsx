import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, Target, Users, Lightbulb, Award, Globe, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const coreValues = [
    {
      icon: Users,
      title: "Customer-Centric Approach",
      description: "We prioritize our clients' needs and build long-term partnerships based on mutual success."
    },
    {
      icon: Lightbulb,
      title: "Value Driven Innovation",
      description: "We constantly explore new technologies to deliver cutting-edge solutions that drive growth."
    },
    {
      icon: Target,
      title: "Culture of Continuous Improvement",
      description: "We embrace collaboration and continuous learning to deliver excellence in every project."
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Projects Delivered" },
    { number: "100+", label: "Happy Clients" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative w-full py-20 lg:py-28 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 -z-10 w-full" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/5 to-primary/10 rounded-full blur-3xl -z-10" />
          
          <div className="max-w-4xl mx-auto text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium mb-6 shadow-soft">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
                About GIGLABS
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Digital Transformation &{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  AI Solutions
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Your partner for digital transformation and rewiring for AI to elevate your business. 
                We specialize in crafting tailored solutions that meet the unique needs of our clients across various industries.
              </p>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-blue-100/50 group-hover:shadow-blue transition-all duration-300">
                      <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Highlight */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 border-y border-blue-100">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Our Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide end-to-end digital transformation through integrated solutions and expert services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: Zap, title: "Digital Integration", desc: "Streamline processes with automation", color: "blue" },
                { icon: Target, title: "Data & AI", desc: "Unlock insights with intelligent solutions", color: "indigo" },
                { icon: Globe, title: "DevOps", desc: "Accelerate delivery and collaboration", color: "sky" },
                { icon: Award, title: "Quality Engineering", desc: "Ensure excellence throughout development", color: "blue" }
              ].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft border border-blue-100/50 group-hover:shadow-blue transition-all duration-300 h-full">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-white py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, hsl(217, 91%, 60%) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="container mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-primary rounded-full text-sm font-medium">
                  <Target className="w-4 h-4" />
                  Our Mission
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Accelerating Innovation with{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Integrated Solutions
                  </span>
                </h2>
                
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To deliver high quality and cost-effective software solutions that help companies and entrepreneurs achieve their goals and stay ahead of the competition.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Harnessing Technology:</strong> We solve complex challenges, drive efficiency, and enhance user experiences for our clients.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Quality Focus:</strong> We strive to be the premier choice for organizations seeking top-tier software development expertise.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Exceeding Expectations:</strong> We deliver cutting-edge solutions that fuel growth in a rapidly evolving digital landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80" 
                    alt="Digital transformation workspace"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-blue-100"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Global Reach</div>
                      <div className="text-sm text-muted-foreground">Singapore & India</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Core Values
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Giglabs experts evaluate new technologies constantly in ongoing R&D efforts that make sure 
                the right solution is a perfect match for you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {coreValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="group"
                    whileHover={{ y: -10 }}
                  >
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft hover:shadow-blue transition-all duration-300 border border-blue-100/50 hover:border-blue-200 h-full relative overflow-hidden">
                      {/* Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors group-hover:scale-110 transform duration-300">
                          <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-20 relative overflow-hidden border-t border-gray-100">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 50px 50px, hsl(224, 76%, 48%) 2px, transparent 0)`,
              backgroundSize: '100px 100px'
            }} />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/3 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
          
          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready to unlock your{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  business's full potential?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Take the first step towards transformative growth today. Contact us now to schedule 
                a consultation and discover how our tailored solutions can propel your business towards its goals.
              </p>
              <motion.button
                className="gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-glow transition-all duration-300 inline-flex items-center gap-2 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
