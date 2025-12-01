import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, GraduationCap } from "lucide-react";

const About = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology",
      color: "google-blue",
    },
    {
      icon: Target,
      title: "Creativity",
      description: "Crafting unique solutions for every challenge",
      color: "google-red",
    },
    {
      icon: Eye,
      title: "Intelligence",
      description: "AI-powered systems that learn and adapt",
      color: "google-yellow",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Empowering the next generation of tech leaders",
      color: "google-green",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-google-blue">Arck Labs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a multi-disciplinary digital innovation company delivering world-class creative and technical solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-google-blue rounded-full" />
              Our Mission
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To deliver innovative digital solutions that transform businesses and empower individuals through technology, creativity, and education.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-google-green rounded-full" />
              Our Vision
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To become Africa's leading creative-tech innovation lab, recognized for excellence in digital transformation and technical education.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-4">Our Core Pillars</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-google-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-google-blue/10"
            >
              <div className={`w-12 h-12 bg-${pillar.color}/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <pillar.icon className={`w-6 h-6 text-${pillar.color}`} />
              </div>
              <h4 className="text-xl font-semibold mb-2">{pillar.title}</h4>
              <p className="text-muted-foreground">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
