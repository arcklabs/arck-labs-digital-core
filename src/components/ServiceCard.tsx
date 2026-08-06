import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

interface ServiceCardProps {
  category: {
    icon: LucideIcon;
    title: string;
    color: string;
    services: string[];
  };
  index: number;
}

const ServiceCard = ({ category, index }: ServiceCardProps) => {
  const Icon = category.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group bg-card border border-${category.color}/20 rounded-2xl p-8 hover:border-${category.color}/50 hover:shadow-lg transition-all duration-base ease-out-expo`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-16 h-16 bg-${category.color}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-base ease-out-expo`}>
          <Icon className={`w-8 h-8 text-${category.color}`} />
        </div>
        <h3 className="text-title">{category.title}</h3>
      </div>

      <ul className="space-y-3">
        {category.services.map((service, idx) => (
          <li key={idx} className="flex items-start gap-3 text-body text-muted-foreground group-hover:text-foreground transition-colors">
            <Check className={`w-5 h-5 text-${category.color} mt-0.5 flex-shrink-0`} />
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;
