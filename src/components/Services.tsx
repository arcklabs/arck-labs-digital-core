import { motion } from "framer-motion";
import { Code2, Palette, Wrench, GraduationCap } from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceCategories = [
    {
      icon: Code2,
      title: "Digital Solutions",
      color: "google-blue",
      services: [
        "Web Development",
        "Mobile App Development",
        "AI Business Systems",
        "Digital Marketing",
        "Product Design (UI/UX)",
      ],
    },
    {
      icon: Palette,
      title: "Creative Media",
      color: "google-red",
      services: [
        "Graphic Design",
        "Photography",
        "Video Editing",
        "Visual Branding",
        "Content Creation",
      ],
    },
    {
      icon: Wrench,
      title: "Tech & Consultancy",
      color: "google-yellow",
      services: [
        "Computer Hardware Services",
        "PC Builds & Upgrades",
        "Repairs & Maintenance",
        "Tech Consultancy",
        "Gadget Reviews",
      ],
    },
    {
      icon: GraduationCap,
      title: "Arck Labs Academy",
      color: "google-green",
      services: [
        "Short Courses",
        "Bootcamps",
        "Technical Training",
        "Design & AI Programs",
        "Certifications",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-google-green">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions across four major divisions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <ServiceCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
