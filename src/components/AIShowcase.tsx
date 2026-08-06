import { motion } from "framer-motion";
import { Bot, Zap, BarChart3, MessageSquare, Cpu, Sparkles } from "lucide-react";
import Section from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const aiSolutions = [
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "Conversational agents that handle first-line customer support.",
    color: "google-blue",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Replace a manual, repetitive workflow with an automated one.",
    color: "google-yellow",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Turn scattered business data into a dashboard people actually check.",
    color: "google-red",
  },
  {
    icon: Cpu,
    title: "Smart Business Tools",
    description: "Custom internal tools scoped to how your team actually works.",
    color: "google-green",
  },
  {
    icon: Sparkles,
    title: "Content Generation",
    description: "AI-assisted drafting for marketing and product content, human-edited.",
    color: "google-blue",
  },
  {
    icon: Bot,
    title: "Machine Learning",
    description: "Custom models trained on your own data, not a generic API wrapper.",
    color: "google-red",
  },
];

const AIShowcase = () => {
  return (
    <Section
      id="ai-solutions"
      eyebrow="Powered by Artificial Intelligence"
      eyebrowIcon={Bot}
      accent="yellow"
      title={
        <>
          AI <span className="text-google-yellow">Solutions</span>
        </>
      }
      description="Practical AI applied to a specific business process, not a demo."
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-google-blue/5 rounded-full blur-3xl animate-glow" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {aiSolutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group bg-card border border-border rounded-2xl p-6 hover:border-${solution.color}/50 hover:shadow-md transition-all duration-base ease-out-expo`}
          >
            <div className={`w-14 h-14 bg-${solution.color}/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-base ease-out-expo`}>
              <solution.icon className={`w-7 h-7 text-${solution.color}`} />
            </div>
            <h3 className="text-title mb-2">{solution.title}</h3>
            <p className="text-muted-foreground text-body">{solution.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="gradient-border p-8 max-w-3xl mx-auto">
          <h3 className="text-title mb-4">Have a workflow worth automating?</h3>
          <p className="text-muted-foreground mb-6">
            Tell us what's eating up your team's time and we'll scope what's realistic to automate.
          </p>
          <Button asChild variant="premium" size="lg">
            <a href="#contact">Talk to Us</a>
          </Button>
        </div>
      </motion.div>
    </Section>
  );
};

export default AIShowcase;
