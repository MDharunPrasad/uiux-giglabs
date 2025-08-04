import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { motion } from "framer-motion";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      designation: "Lead UI/UX Designer",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Sarah Chen",
      designation: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      designation: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "Graphic Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      name: "David Kim",
      designation: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 6,
      name: "Lisa Wang",
      designation: "Brand Strategist",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Talented professionals dedicated to bringing your vision to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <AnimatedTooltip items={teamMembers} />
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;