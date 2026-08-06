import { motion } from "framer-motion";
import { Code2, Palette, Bot, GraduationCap } from "lucide-react";
import Section from "@/components/ui/section";

const pillars = [
  {
    icon: Code2,
    title: "Product",
    description: "Web and mobile apps built and shipped end to end, from first wireframe to production.",
    color: "google-blue",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Brand and product design that makes technical work feel simple for the people using it.",
    color: "google-red",
  },
  {
    icon: Bot,
    title: "AI",
    description: "Automation and AI tools scoped to a real workflow a business already has, not a demo.",
    color: "google-yellow",
  },
  {
    icon: GraduationCap,
    title: "Academy",
    description: "Hands-on technical training that takes learners from fundamentals to a working portfolio.",
    color: "google-green",
  },
];

const About = () => {
  return (
    <Section
      id="about"
      title={
        <>
          About <span className="text-google-blue">Arck Labs</span>
        </>
      }
      description="A founder-led digital innovation lab based in Nairobi, working across product development, AI, creative media, and technical education."
      className="relative overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-2xl p-8"
        >
          <h3 className="text-title mb-4 flex items-center gap-2">
            <span className="w-2 h-8 bg-google-blue rounded-full" />
            Our Mission
          </h3>
          <p className="text-muted-foreground text-body leading-relaxed">
            To design and build digital products for African businesses, and use that same
            expertise to train the next generation of technical talent through Arck Labs Academy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-2xl p-8"
        >
          <h3 className="text-title mb-4 flex items-center gap-2">
            <span className="w-2 h-8 bg-google-green rounded-full" />
            Our Vision
          </h3>
          <p className="text-muted-foreground text-body leading-relaxed">
            To become Africa's leading creative-tech innovation lab, recognized for excellence in
            digital transformation and technical education.
          </p>
        </motion.div>
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-title text-center mb-12"
      >
        What We Do
      </motion.h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group bg-card border border-border rounded-2xl p-6 hover:border-google-blue/50 hover:shadow-md transition-all duration-base ease-out-expo"
          >
            <div className={`w-12 h-12 bg-${pillar.color}/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-base ease-out-expo`}>
              <pillar.icon className={`w-6 h-6 text-${pillar.color}`} />
            </div>
            <h4 className="text-lg font-semibold mb-2">{pillar.title}</h4>
            <p className="text-muted-foreground text-small">{pillar.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default About;
