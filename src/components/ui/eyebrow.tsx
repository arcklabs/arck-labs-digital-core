import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  accent?: "blue" | "red" | "yellow" | "green";
  className?: string;
}

const borderClasses = {
  blue: "border-google-blue/30",
  red: "border-google-red/30",
  yellow: "border-google-yellow/30",
  green: "border-google-green/30",
} as const;

const iconClasses = {
  blue: "text-google-blue",
  red: "text-google-red",
  yellow: "text-google-yellow",
  green: "text-google-green",
} as const;

/** Small pill label used above a section heading to set context before the headline lands. */
const Eyebrow = ({ icon: Icon, children, accent = "blue", className }: EyebrowProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 bg-card border rounded-full text-small font-medium text-foreground/80",
        borderClasses[accent],
        className,
      )}
    >
      {Icon && <Icon className={cn("w-4 h-4", iconClasses[accent])} />}
      {children}
    </span>
  );
};

export default Eyebrow;
