import { FileText, Layout, Palette, Code, TestTube, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { GradientHeading } from "@/components/ui/gradient-heading";

const ProcessSection = () => {
  const processSteps = [
    { 
      icon: FileText, 
      title: "Requirements", 
      description: "Understanding your vision",
      details: "We dive deep into your business goals, target audience, and project requirements to create a comprehensive roadmap for success."
    },
    { 
      icon: Layout, 
      title: "Planning", 
      description: "Strategic roadmap",
      details: "Our team develops a detailed project timeline, technical specifications, and resource allocation to ensure smooth execution."
    },
    { 
      icon: Palette, 
      title: "Design", 
      description: "Creative excellence",
      details: "We craft stunning visual designs and user experiences that align with your brand identity and engage your target audience."
    },
    { 
      icon: Code, 
      title: "Development", 
      description: "Building perfection",
      details: "Our developers bring designs to life using cutting-edge technologies and best practices to ensure optimal performance."
    },
    { 
      icon: TestTube, 
      title: "Testing", 
      description: "Quality assurance",
      details: "Rigorous testing across devices and browsers ensures your project meets the highest standards of quality and functionality."
    },
    { 
      icon: Truck, 
      title: "Deliver", 
      description: "Launch & support",
      details: "We handle the deployment process and provide ongoing support to ensure your project's continued success and growth."
    },
  ];

  return (
    <section className="section-gradient py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <GradientHeading variant="light" size="sm" className="mb-0 text-white font-semibold tracking-wider">
              HOW WE WORK
            </GradientHeading>
          </div>
          <GradientHeading variant="light" size="xl" className="text-white drop-shadow-lg">
            Our Process
          </GradientHeading>
        </motion.div>
        
        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-white via-orange-50 to-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-lg z-10 shadow-lg border-2 border-white">
                  {index + 1}
                </div>
                
                {/* Card */}
                <div className="bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-md rounded-3xl p-8 h-full border-2 border-white/40 shadow-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-xl text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-orange-600 text-sm mb-4 font-semibold">{step.description}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{step.details}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;