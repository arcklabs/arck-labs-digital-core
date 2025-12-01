import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Services: ["Web Development", "Mobile Apps", "AI Solutions", "UI/UX Design"],
    Company: ["About Us", "Portfolio", "Academy", "Blog"],
    Resources: ["Documentation", "Support", "Privacy Policy", "Terms of Service"],
    Connect: ["Contact", "Careers", "Partnerships", "Newsletter"],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", color: "google-blue" },
    { icon: Twitter, href: "#", color: "google-blue" },
    { icon: Instagram, href: "#", color: "google-red" },
    { icon: Linkedin, href: "#", color: "google-blue" },
    { icon: Github, href: "#", color: "google-green" },
  ];

  return (
    <footer className="relative border-t border-border">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-google-blue via-google-red via-google-yellow to-google-green" />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-google-blue to-google-green bg-clip-text text-transparent">
              Arck Labs
            </h3>
            <p className="text-muted-foreground mb-6">
              Building digital experiences, intelligent systems & creative innovation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-${social.color}/50 transition-colors group`}
                >
                  <social.icon className={`w-5 h-5 text-muted-foreground group-hover:text-${social.color} transition-colors`} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Arck Labs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
