import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section className="container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About GIGLABS
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a creative design and development agency dedicated to transforming ideas into stunning digital experiences.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;