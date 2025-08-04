import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustedPartners from "@/components/TrustedPartners";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <TrustedPartners />
        <ProcessSection />
        <ServicesSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
