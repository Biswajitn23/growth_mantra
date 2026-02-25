import { Instagram } from "lucide-react";

const columns = [
  {
    title: "Services",
    links: [
      { label: "AI Video Creation", href: "#services" },
      { label: "Influencer Marketing", href: "#services" },
      { label: "Web Development", href: "#services" },
      { label: "SEO Optimization", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Process", href: "#about" },
      { label: "Careers", href: "#contact" },
      { label: "Blog", href: "#contact" },
    ],
  },
  {
    title: "Projects",
    links: [
      { label: "Case Studies", href: "#projects" },
      { label: "Portfolio", href: "#projects" },
      { label: "Testimonials", href: "#about" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "hello@growvanta.com", href: "mailto:hello@growvanta.com" },
      { label: "+91 88397 07272", href: "tel:+918839707272" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/growvanta", icon: Instagram },
];



const FooterSection = () => {
  return (
    <footer className="section-deep py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="GrowVanta" className="h-8 w-auto" />
              <p className="font-heading text-xl font-bold text-primary-foreground">
                Grow<span className="gradient-text">Vanta</span>
              </p>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              The 360° Growth Engine for Ambitious Brands.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary-foreground/50 hover:bg-gv-mid/20 hover:border-gv-mid/30 transition-all cursor-pointer group"
                >
                  <s.icon className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}

            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-heading font-semibold text-primary-foreground text-sm mb-4">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-primary-foreground/50 text-sm hover:text-primary-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-primary-foreground/30 text-sm">
            © 2026 GrowVanta Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
