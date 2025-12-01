import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import AIShowcase from "@/components/AIShowcase";
import Academy from "@/components/Academy";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <AIShowcase />
      <Academy />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
