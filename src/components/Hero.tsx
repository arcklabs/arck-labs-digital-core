import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Eyebrow from "@/components/ui/eyebrow";
import { ArrowRight, MapPin, Code2, Bot, Palette, GraduationCap } from "lucide-react";

const capabilities = [
  { icon: Code2, label: "Web & Mobile" },
  { icon: Bot, label: "AI Systems" },
  { icon: Palette, label: "Creative Media" },
  { icon: GraduationCap, label: "Technical Training" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-12">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-google-blue/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-google-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-google-red/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex justify-center"
        >
          <Eyebrow icon={MapPin} accent="blue">
            Digital Innovation Lab &middot; Nairobi, Kenya
          </Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-display mb-6"
        >
          Digital products, AI systems
          <br />
          <span className="bg-gradient-to-r from-google-blue via-google-green to-google-yellow bg-clip-text text-transparent">
            built from Kenya
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-body-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Arck Labs is a founder-led digital innovation lab building web &amp; mobile products, AI
          systems, and creative media &mdash; and now onboarding founding clients and Academy learners.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button asChild size="xl" variant="premium" className="group">
            <a href="#contact">
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button asChild size="xl" variant="outline" className="border-google-green text-google-green hover:bg-google-green/10">
            <a href="#services">Explore Services</a>
          </Button>
        </motion.div>

        {/* What we do — replaces fabricated stats with an honest capability summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 gradient-border p-8 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex flex-col items-center gap-3 text-center">
                <div className="w-11 h-11 bg-google-blue/10 rounded-xl flex items-center justify-center">
                  <capability.icon className="w-5 h-5 text-google-blue" />
                </div>
                <div className="text-small font-medium text-foreground">{capability.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
