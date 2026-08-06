import { motion } from "framer-motion";
import { BookOpen, Clock, Award, Users } from "lucide-react";
import Section from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: BookOpen,
    title: "Industry-Relevant Curriculum",
    description: "Programs designed around the skills employers are actually hiring for",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Cohort-based courses that fit around work and school",
  },
  {
    icon: Award,
    title: "Certifications",
    description: "A certificate you can put on a CV or LinkedIn profile on completion",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "A cohort of learners and a mentor, not a self-paced video library",
  },
];

const plannedPrograms = [
  { name: "Web Development Bootcamp", duration: "12 weeks", color: "google-blue" },
  { name: "UI/UX Design Masterclass", duration: "8 weeks", color: "google-red" },
  { name: "AI & Machine Learning", duration: "10 weeks", color: "google-yellow" },
  { name: "Digital Marketing Pro", duration: "6 weeks", color: "google-green" },
  { name: "Mobile App Development", duration: "12 weeks", color: "google-blue" },
  { name: "Photography & Video Editing", duration: "8 weeks", color: "google-red" },
];

const Academy = () => {
  return (
    <Section
      id="academy"
      eyebrow="Launching Soon"
      accent="green"
      title={
        <>
          Arck Labs <span className="text-google-green">Academy</span>
        </>
      }
      description="Hands-on technical training launching soon out of Nairobi. Join the waitlist to be first in when enrollment opens."
      className="bg-card/50"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-background border border-border rounded-2xl p-6 text-center hover:border-google-green/50 hover:shadow-md transition-all duration-base ease-out-expo"
          >
            <div className="w-12 h-12 bg-google-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <benefit.icon className="w-6 h-6 text-google-green" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
            <p className="text-small text-muted-foreground">{benefit.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-title text-center mb-8">Planned Programs</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plannedPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-background border border-${program.color}/20 rounded-2xl p-6 hover:border-${program.color}/50 transition-colors duration-base ease-out-expo`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 bg-${program.color}/10 text-${program.color} text-small rounded-full`}>
                  Coming Soon
                </span>
              </div>
              <h4 className="text-lg font-semibold mb-2">{program.name}</h4>
              <p className="text-small text-muted-foreground flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {program.duration}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <Button asChild size="xl" variant="premium">
          <a href="#contact">Join the Waitlist</a>
        </Button>
      </motion.div>
    </Section>
  );
};

export default Academy;
