import { motion } from "framer-motion";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { allLogos } from "@/components/LogoIcons";

const TrustedPartners = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <div>
            <GradientHeading variant="secondary" size="sm" className="mb-4">
              Trusted by Leading Brands
            </GradientHeading>
            {/* <GradientHeading size="xl" className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Trusted by Leading Brands
            </GradientHeading> */}
          </div>
          
          <div className="flex justify-center">
            <LogoCarousel columnCount={4} logos={allLogos} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartners;