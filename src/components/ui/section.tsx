import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Eyebrow from "./eyebrow";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  eyebrowIcon?: LucideIcon;
  accent?: "blue" | "red" | "yellow" | "green";
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  children: React.ReactNode;
}

/**
 * Standard section shell: eyebrow + heading + description, consistent max-width, spacing, and
 * scroll-in motion. Sections compose this instead of re-implementing the same header markup so
 * heading rhythm stays consistent as more sections adopt the design system.
 */
const Section = ({ id, eyebrow, eyebrowIcon, accent = "blue", title, description, align = "center", className, children }: SectionProps) => {
  const isCentered = align === "center";

  return (
    <section id={id} className={cn("py-24 md:py-32 px-4", className)}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn("mb-16", isCentered ? "text-center max-w-3xl mx-auto" : "max-w-2xl")}
        >
          {eyebrow && (
            <div className={cn("mb-6", isCentered ? "flex justify-center" : "flex")}>
              <Eyebrow icon={eyebrowIcon} accent={accent}>
                {eyebrow}
              </Eyebrow>
            </div>
          )}
          <h2 className="text-headline mb-6">{title}</h2>
          {description && <p className="text-body-lg text-muted-foreground">{description}</p>}
        </motion.div>

        {children}
      </div>
    </section>
  );
};

export default Section;
