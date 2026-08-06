import { Code2, Palette, Wrench, GraduationCap } from "lucide-react";
import Section from "@/components/ui/section";
import ServiceCard from "./ServiceCard";

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

const Services = () => {
  return (
    <Section
      id="services"
      eyebrow="What We Offer"
      accent="green"
      title={
        <>
          Our <span className="text-google-green">Services</span>
        </>
      }
      description="Four divisions, one point of contact — from a single landing page to a full product build."
    >
      <div className="grid md:grid-cols-2 gap-8">
        {serviceCategories.map((category, index) => (
          <ServiceCard key={index} category={category} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Services;
