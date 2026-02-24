const columns = [
  {
    title: "Services",
    links: ["AI Video Creation", "Influencer Marketing", "Web Development", "SEO Optimization"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Process", "Careers", "Blog"],
  },
  {
    title: "Projects",
    links: ["Case Studies", "Portfolio", "Testimonials"],
  },
  {
    title: "Contact",
    links: ["hello@growvanta.com", "+1 (555) 123-4567"],
  },
];

const FooterSection = () => {
  return (
    <footer className="section-deep py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-heading text-xl font-bold text-primary-foreground mb-4">
              Grow<span className="gradient-text">Vanta</span>
            </p>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              The 360° Growth Engine for Ambitious Brands.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {["X", "In", "Ig", "Yt"].map((s) => (
                <div
                  key={s}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary-foreground/50 text-xs font-bold hover:bg-gv-mid/20 hover:border-gv-mid/30 transition-all cursor-pointer"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-heading font-semibold text-primary-foreground text-sm mb-4">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-primary-foreground/50 text-sm hover:text-primary-foreground transition-colors">
                      {link}
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
