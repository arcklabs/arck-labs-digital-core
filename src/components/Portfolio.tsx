import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      color: "google-blue",
      description: "Full-stack shopping experience with AI recommendations",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      color: "google-green",
      description: "Secure fintech solution with biometric authentication",
    },
    {
      title: "Brand Identity System",
      category: "Creative Media",
      color: "google-red",
      description: "Complete visual branding for tech startup",
    },
    {
      title: "AI Dashboard Analytics",
      category: "AI Solutions",
      color: "google-yellow",
      description: "Real-time business intelligence platform",
    },
    {
      title: "Corporate Photography",
      category: "Photography",
      color: "google-red",
      description: "Professional product and team photography",
    },
    {
      title: "SaaS Product Design",
      category: "UI/UX Design",
      color: "google-blue",
      description: "User-centered design for enterprise software",
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-google-red">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our best work across different industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-background border border-border rounded-2xl p-6 hover:border-${project.color}/50 transition-all duration-300 cursor-pointer overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 bg-${project.color}/10 text-${project.color} text-sm rounded-full`}>
                    {project.category}
                  </span>
                  <ExternalLink className={`w-5 h-5 text-${project.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-foreground transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>

                <div className={`mt-4 w-12 h-1 bg-${project.color} rounded-full group-hover:w-full transition-all duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
