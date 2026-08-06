import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Academy", href: "#academy" },
  { label: "AI Solutions", href: "#ai-solutions" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,box-shadow] duration-base ease-out-expo",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent border-b border-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold bg-gradient-to-r from-google-blue to-google-green bg-clip-text text-transparent">
          Arck Labs
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-small font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild size="sm" variant="premium">
            <a href="#contact">Start a Project</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col gap-8 pt-16">
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <SheetClose key={link.href} asChild>
                  <a href={link.href} className="text-title text-foreground hover:text-google-blue transition-colors">
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </div>
            <SheetClose asChild>
              <Button asChild size="lg" variant="premium">
                <a href="#contact">Start a Project</a>
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
