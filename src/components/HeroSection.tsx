import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/assets/modern-workspace.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-blue-700/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium shadow-soft">
              <Sparkles className="w-4 h-4" />
              Professional UI/UX Design
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Creative Design Services{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                Tailored for You
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Transform your ideas into stunning digital experiences with our expert UI/UX design and development services that captivate and convert.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-blue hover:shadow-xl transition-all duration-300 group text-lg px-8 py-4 transform hover:scale-105"
                onClick={() => navigate('/services')}
              >
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg px-8 py-4 transform hover:scale-105"
                onClick={() => navigate('/contact')}
              >
                Start Your Project
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-blue">
              <img
                src={heroImage}
                alt="Modern web design workspace"
                className="w-full h-auto object-cover animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-blue border border-blue-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;