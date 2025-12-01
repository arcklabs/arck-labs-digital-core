import { motion } from "framer-motion";
import { Bot, Zap, BarChart3, MessageSquare, Cpu, Sparkles } from "lucide-react";

const AIShowcase = () => {
  const aiSolutions = [
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description: "Intelligent conversational agents for customer support",
      color: "google-blue",
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline workflows with intelligent automation",
      color: "google-yellow",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "AI-powered insights and predictive analytics",
      color: "google-red",
    },
    {
      icon: Cpu,
      title: "Smart Business Tools",
      description: "Custom AI solutions for your unique needs",
      color: "google-green",
    },
    {
      icon: Sparkles,
      title: "Content Generation",
      description: "AI-assisted content creation and optimization",
      color: "google-blue",
    },
    {
      icon: Bot,
      title: "Machine Learning",
      description: "Custom ML models trained on your data",
      color: "google-red",
    },
  ];

  return (
    <section id="ai-solutions" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-google-blue/5 rounded-full blur-3xl animate-glow" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-google-blue/30 rounded-full text-sm text-muted-foreground mb-6">
            <Bot className="w-4 h-4 text-google-blue" />
            Powered by Artificial Intelligence
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI <span className="text-google-yellow">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiSolutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group bg-card border border-border rounded-2xl p-6 hover:border-${solution.color}/50 transition-all duration-300 hover:shadow-lg hover:shadow-${solution.color}/10`}
            >
              <div className={`w-14 h-14 bg-${solution.color}/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <solution.icon className={`w-7 h-7 text-${solution.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-muted-foreground">{solution.description}</p>
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
            <h3 className="text-2xl font-bold mb-4">Ready to Integrate AI?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how artificial intelligence can revolutionize your business processes
            </p>
            <button className="px-8 py-3 bg-google-blue hover:bg-google-blue/90 text-white rounded-full transition-colors">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIShowcase;
