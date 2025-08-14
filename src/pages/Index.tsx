import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import TrustedPartners from "@/components/TrustedPartners";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection_new";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSlider />
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
