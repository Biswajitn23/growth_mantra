export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border section-padding py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-heading text-lg font-bold tracking-tight">
          <span className="gold-text">Growth</span>
          <span className="text-foreground"> Mantra</span>
        </div>
        <div className="flex items-center gap-8">
          {['Services', 'Results', 'Testimonials', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 Growth Mantra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
