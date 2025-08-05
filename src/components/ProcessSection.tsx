import { GradientHeading } from "@/components/ui/gradient-heading";

const ProcessSection = () => {
  const graphicDesignFeatures = [
    "Logo Design",
    "Social Media Banners", 
    "Product Mockups",
    "Advertisement Mockups",
    "Photo Editing",
    "Brand & Visual Design"
  ];

  return (
    <section className="section-gradient py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <GradientHeading variant="light" size="sm" className="mb-0 text-white font-semibold tracking-wider">
              OUR SERVICES
            </GradientHeading>
          </div>
          <GradientHeading variant="light" size="xl" className="text-white drop-shadow-lg">
            Graphic Design
          </GradientHeading>
        </div>
        
        {/* Graphic Design Section */}
        <div className="grid md:grid-cols-2 items-center gap-2">
          {/* Service Content - Left */}
          <div className="order-1 md:pl-8 space-y-6">
            {/* Features List */}
            <div className="space-y-4">
              {graphicDesignFeatures.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Image - Right */}
          <div className="order-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl w-full max-w-lg h-96 overflow-hidden shadow-2xl mx-auto border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&h=600&q=80"
                alt="Graphic Design showcase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;