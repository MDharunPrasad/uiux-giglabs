import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, Target, Users, Lightbulb, Award, Globe, Zap, Monitor, Palette, Code, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleGetStarted = () => {
    navigate('/contact');
    // Use requestAnimationFrame to ensure navigation completes first
    requestAnimationFrame(() => {
      setTimeout(() => {
        const targetElement = document.getElementById('start-your-project');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  };

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
                We design, connect, and{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  innovate.
                </span>
              </h1>

              {/* Brand one-liner */}
              <p className="text-lg lg:text-xl text-foreground font-semibold max-w-3xl mx-auto">
                From concept to code — we bring your vision to life.
              </p>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                As specialists in UX/UI design, system integrations (Boomi, Tibco, Workato), custom app development, and AI solutions,
                we help businesses turn ideas into exceptional digital experiences.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                From intuitive interfaces to seamless backend integrations, we ensure your technology works beautifully — and works together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Who{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  We Are
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We are a passionate team of technology experts dedicated to designing seamless user experiences, building robust integrations, and delivering intelligent solutions that help businesses grow. From the first pixel of your app's interface to the last line of backend code, we ensure every detail works in harmony to create value for you and your customers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Story
                  </span>
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Founded with a vision to bridge the gap between design and functionality, we started our journey helping businesses make their applications not just work—but delight. Over time, we expanded our expertise into enterprise integration platforms like Boomi, Tibco, and Workato, enabling organizations to connect systems, automate processes, and scale faster.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Today, we've grown into a multi-disciplinary team delivering end-to-end solutions: from crafting user-friendly interfaces and developing custom applications from scratch to building AI-driven tools that redefine how businesses operate.
                  </p>
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
                    alt="Our journey and growth"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 30px 30px, hsl(217, 91%, 60%) 1px, transparent 0)`,
              backgroundSize: '60px 60px'
            }} />
          </div>

          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                What{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  We Do
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive solutions that combine creativity, technical excellence, and business insight.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Monitor,
                  title: "UX/UI Design",
                  description: "Human-centered designs that are intuitive, accessible, and engaging."
                },
                {
                  icon: Code,
                  title: "Integration Services",
                  description: "Seamless data and process integration using Boomi, Tibco, and Workato to connect your business ecosystem."
                },
                {
                  icon: Globe,
                  title: "Product Application Development",
                  description: "From concept to launch, we build scalable, high-performance applications tailored to your needs."
                },
                {
                  icon: Brain,
                  title: "AI Services",
                  description: "Implementing machine learning, natural language processing, and automation solutions that give you a competitive edge."
                }
              ].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft border border-blue-100/50 group-hover:shadow-blue transition-all duration-300 h-full">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors group-hover:scale-110 transform duration-300">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-center">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="bg-gray-50 py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To deliver technology solutions that combine creativity, technical excellence, and business insight—helping our clients transform ideas into impactful digital experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Values
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Users,
                  title: "User First",
                  description: "Every design and solution starts with understanding your audience."
                },
                {
                  icon: Lightbulb,
                  title: "Innovation Driven",
                  description: "We adopt and adapt cutting-edge technology to solve real business problems."
                },
                {
                  icon: Target,
                  title: "Quality Focused",
                  description: "We never compromise on performance, reliability, or usability."
                },
                {
                  icon: Globe,
                  title: "Collaborative Spirit",
                  description: "We believe in partnerships, not just projects."
                }
              ].map((value, index) => {
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

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Choose Us
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We combine expertise in both design and integration for a seamless digital ecosystem.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Target,
                  title: "Expertise in Design & Integration",
                  description: "Expertise in both design and integration for a seamless digital ecosystem."
                },
                {
                  icon: Award,
                  title: "Certified Professionals",
                  description: "Certified professionals in Boomi, Tibco, and Workato platforms."
                },
                {
                  icon: Zap,
                  title: "Proven Track Record",
                  description: "Proven track record in custom app development and AI-powered solutions."
                },
                {
                  icon: Users,
                  title: "Transparent Process",
                  description: "Transparent process with clear communication at every step."
                }
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft border border-blue-100/50 group-hover:shadow-blue transition-all duration-300 h-full">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors group-hover:scale-110 transform duration-300">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-center">
                        {benefit.description}
                      </p>
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
                Let's Build Something{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Great Together
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Whether you're starting from scratch, looking to connect your business systems, or exploring the power of AI, we're here to make it happen.
              </p>
              <motion.button
                className="gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-glow transition-all duration-300 inline-flex items-center gap-2 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetStarted}
              >
                Contact us to start your journey
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

