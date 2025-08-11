import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustedPartners from "@/components/TrustedPartners";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection_new";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (servicesRef.current) {
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <TrustedPartners />
        <ProcessSection />
        <div ref={servicesRef}>
          <ServicesSection />
        </div>
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
