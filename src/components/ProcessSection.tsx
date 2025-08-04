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
          <GradientHeading variant="light" size="sm" className="mb-4">
            HOW WE WORK
          </GradientHeading>
          <GradientHeading variant="light" size="xl">
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
                className="group relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                  {index + 1}
                </div>
                
                {/* Card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 h-full border border-white/20 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-white/30">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-xl text-white mb-3">{step.title}</h3>
                  <p className="text-white/80 text-sm mb-4 font-medium">{step.description}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{step.details}</p>
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