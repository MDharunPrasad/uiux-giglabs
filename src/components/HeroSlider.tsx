import { useState, useEffect, useRef, ComponentType, SVGProps } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Monitor, Palette, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/modern-workspace.jpg";
import webDesignImage from "@/assets/web-development.jpg";
import graphicDesignImage from "@/assets/graphic-design.jpg";
import heroDesignImage from "@/assets/hero-design.jpg";

interface Slide {
  id: number;
  tag: string;
  title: string;
  description: string;
  primaryButton: {
    text: string;
    action: () => void;
  };
  secondaryButton?: {
    text: string;
    action: () => void;
  };
  image: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const HeroSlider = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const lastScrollTime = useRef(0);
  const pauseSafetyTimer = useRef<NodeJS.Timeout | null>(null);

  const slides: Slide[] = [
    {
      id: 1,
      tag: "Professional UI/UX Design",
      title: "Creative Design Services Tailored for You",
      description: "Transform your ideas into stunning digital experiences with our expert UI/UX design and development services that captivate and convert.",
      primaryButton: {
        text: "Explore Our Work",
        action: () => navigate('/services')
      },
      secondaryButton: {
        text: "Start Your Project",
        action: () => navigate('/contact')
      },
      image: heroImage,
      icon: Sparkles
    },
    {
      id: 2,
      tag: "Web Design Services",
      title: "Stunning Websites That Convert",
      description: "From wireframes to high-fidelity designs, we create responsive websites that deliver exceptional user experiences and drive business growth.",
      primaryButton: {
        text: "Learn More",
        action: () => {
          navigate('/services');
          setTimeout(() => {
            const element = document.getElementById('uiux-web-design-complete-solution');
            if (element) {
              element.scrollIntoView({ behavior: 'instant', block: 'start' });
            }
          }, 100);
        }
      },
      image: webDesignImage,
      icon: Monitor
    },
    {
      id: 3,
      tag: "Graphic Design Services",
      title: "Visual Identity That Stands Out",
      description: "Create powerful brand identities with our comprehensive graphic design services including logos, banners, and marketing materials.",
      primaryButton: {
        text: "Learn More",
        action: () => {
          navigate('/services');
          setTimeout(() => {
            const element = document.getElementById('logo-banner-design');
            if (element) {
              element.scrollIntoView({ behavior: 'instant', block: 'start' });
            }
          }, 100);
        }
      },
      image: graphicDesignImage,
      icon: Palette
    },
    {
      id: 4,
      tag: "Ready to Get Started?",
      title: "Let's Bring Your Vision to Life",
      description: "Ready to transform your ideas into reality? Contact us today for a free consultation and discover how we can help grow your business.",
      primaryButton: {
        text: "Contact Us",
        action: () => navigate('/contact')
      },
      image: heroDesignImage,
      icon: Phone
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 4000); // Changed to 4 seconds per request

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  // Safety: ensure we never stay paused forever (e.g., mobile tap triggering mouseenter without mouseleave)
  useEffect(() => {
    if (pauseSafetyTimer.current) {
      clearTimeout(pauseSafetyTimer.current);
      pauseSafetyTimer.current = null;
    }
    if (isPaused) {
      pauseSafetyTimer.current = setTimeout(() => {
        setIsPaused(false);
      }, 4000); // auto-resume after 4s of inactivity
    }
    return () => {
      if (pauseSafetyTimer.current) clearTimeout(pauseSafetyTimer.current);
    };
  }, [isPaused]);

  // Scroll navigation functionality
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isInHeroSection = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (isInHeroSection) {
        const now = Date.now();
        // Throttle scroll events to prevent too rapid changes
        if (now - lastScrollTime.current < 500) return;
        lastScrollTime.current = now;

        e.preventDefault();
        
        if (e.deltaY > 0) {
          // Scrolling down - next slide
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        } else {
          // Scrolling up - previous slide
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        }
        
        // Reset auto-advance timer when user scrolls
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 100);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    // Reset the auto-advance timer when manually navigating
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 100);
  };

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
  // Mobile / touch & unified pointer interactions
  onTouchStart={() => setIsPaused(true)}
  onTouchEnd={() => setIsPaused(false)}
  onTouchCancel={() => setIsPaused(false)}
  onPointerDown={() => setIsPaused(true)}
  onPointerUp={() => setIsPaused(false)}
  onPointerCancel={() => setIsPaused(false)}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-blue-700/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium shadow-soft"
              >
                <IconComponent className="w-4 h-4" />
                {currentSlideData.tag}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                {currentSlideData.title.split(' ').map((word, index) => {
                  if (word === 'You' || word === 'Convert' || word === 'Out' || word === 'Life') {
                    return (
                      <span 
                        key={index}
                        className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent"
                      >
                        {word}{' '}
                      </span>
                    );
                  }
                  return word + ' ';
                })}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-muted-foreground leading-relaxed max-w-xl"
              >
                {currentSlideData.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-blue hover:shadow-xl transition-all duration-300 group text-lg px-8 py-4 transform hover:scale-105"
                  onClick={currentSlideData.primaryButton.action}
                >
                  {currentSlideData.primaryButton.text}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                {currentSlideData.secondaryButton && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg px-8 py-4 transform hover:scale-105"
                    onClick={currentSlideData.secondaryButton.action}
                  >
                    {currentSlideData.secondaryButton.text}
                  </Button>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Right Content - Hero Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${currentSlide}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-blue">
                <img
                  src={currentSlideData.image}
                  alt={`${currentSlideData.tag} illustration`}
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
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-blue-600 scale-125'
                : 'bg-blue-200 hover:bg-blue-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
