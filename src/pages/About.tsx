import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const tabContent = {
    mission: {
      title: "Our Mission",
      description: "To deliver high quality and cost-effective software solutions that help companies and entrepreneurs achieve their goals and stay ahead of the competition.",
      points: [
        {
          title: "Harnessing the power of technology",
          description: "We are committed to harnessing the power of technology to solve complex challenges, drive efficiency, and enhance user experiences for our clients."
        },
        {
          title: "Relentless focus on quality",
          description: "With a relentless focus on quality, collaboration, and continuous improvement, we strive to be the premier choice for organizations seeking top-tier software development expertise and excellence."
        },
        {
          title: "Exceeding client expectations",
          description: "To deliver cutting-edge software solutions that exceed client expectations, fueling their growth and success in a rapidly evolving digital landscape."
        }
      ]
    },
    vision: {
      title: "Our Vision",
      description: "To envision a world where technology seamlessly integrates with everyday life, empowering individuals and businesses to thrive in an interconnected digital ecosystem.",
      points: [
        {
          title: "Lead the forefront of innovation",
          description: "Our vision is to lead the forefront of innovation, shaping the future of software development with groundbreaking solutions that revolutionize industries and drive societal progress."
        },
        {
          title: "Create a culture of collaboration",
          description: "We aspire to create a culture of creativity and collaboration, where every member of our team is inspired to push boundaries, challenge conventions, and redefine what's possible in software."
        },
        {
          title: "Relentless commitment to excellence",
          description: "With a relentless commitment to excellence and a passion for solving complex problems, we aim to set new standards of quality and reliability in the software development industry."
        }
      ]
    },
    values: {
      title: "Our Values",
      description: "At the heart of our values lies a dedication to sustainability and social responsibility, leveraging technology to create positive change and make a lasting impact on the world.",
      points: [
        {
          title: "Customer-Centricity",
          description: "We prioritize the needs and goals of our clients above all else, striving to exceed their expectations and build long-term partnerships based on mutual success and satisfaction."
        },
        {
          title: "Innovation",
          description: "We embrace innovation as the driving force behind our solutions, constantly pushing boundaries and exploring new technologies to deliver cutting-edge software products."
        },
        {
          title: "Integrity",
          description: "We conduct our business with honesty, transparency, and integrity, building trust with our clients, partners, and team members through ethical practices and accountability."
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative container mx-auto px-6 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 -z-10" />
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse" />
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-100 rounded-full opacity-30 animate-pulse delay-1000" />
          
          <div className="text-center max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                About GIGLABS
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500 bg-clip-text text-transparent leading-tight">
                Professional Design &<br />
                Development Services
              </h1>
              
              <motion.p 
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                We specialize in crafting tailored solutions that meet the unique needs of our clients across various industries.
              </motion.p>
              
              <motion.div
                className="flex flex-wrap justify-center gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-white shadow-lg rounded-lg border border-gray-100">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-gray-700 font-medium">10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white shadow-lg rounded-lg border border-gray-100">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span className="text-gray-700 font-medium">500+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white shadow-lg rounded-lg border border-gray-100">
                  <div className="w-3 h-3 bg-orange-500 rounded-full" />
                  <span className="text-gray-700 font-medium">100+ Happy Clients</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Image */}
            <motion.div 
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/src/assets/modern-workspace.jpg" 
                    alt="Professional workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Stats Card */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">99%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                </motion.div>
                
                {/* Background Decoration */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-200 rounded-full opacity-60 -z-10" />
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-200 rounded-full opacity-40 -z-10" />
              </div>
            </motion.div>

            {/* Right Content */}
            <div className="space-y-8 order-1 lg:order-2">
              {/* Tab Navigation */}
              <div className="relative">
                <div className="flex flex-wrap gap-2 border-b border-gray-200 relative">
                  {Object.entries(tabContent).map(([key, content]) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`relative px-6 py-4 font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                        activeTab === key
                          ? "text-blue-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {content.title}
                      {activeTab === key && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                          layoutId="activeTab"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-2xl border border-gray-100">
                    <p className="text-gray-700 leading-relaxed italic text-lg">
                      {tabContent[activeTab].description}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {tabContent[activeTab].points.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                            <Check className="w-4 h-4 text-blue-600" />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-bold text-blue-600 text-lg group-hover:text-blue-700 transition-colors duration-300">
                            {point.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gray-50 py-16 my-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Ready to unlock your business's full potentials?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Take the first step towards transformative growth today. Contact us now to schedule a consultation and discover how our tailored solutions can propel your business towards its goals.
                </p>
                <motion.button
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call To Action
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="/src/assets/modern-workspace.jpg" 
                    alt="Business consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;