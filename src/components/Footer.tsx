const exploreLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "AI Solutions", href: "#ai-solutions" },
  { label: "Academy", href: "#academy" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border">
      {/* Gradient line — Tailwind's `via-*` utility only supports one color stop, so a genuine
          4-color gradient needs the CSS custom property defined in index.css instead. */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[image:var(--gradient-multi)]" />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-title mb-4 bg-gradient-to-r from-google-blue to-google-green bg-clip-text text-transparent">
              Arck Labs
            </h3>
            <p className="text-muted-foreground text-body">
              A founder-led digital innovation lab based in Nairobi, Kenya — product development,
              AI, creative media, and technical training.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="mailto:arcklabs101@gmail.com" className="hover:text-foreground transition-colors">
                  arcklabs101@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+254705186317" className="hover:text-foreground transition-colors">
                  +254 705 186 317
                </a>
              </li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-muted-foreground text-small">
            &copy; {new Date().getFullYear()} Arck Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
