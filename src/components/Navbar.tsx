import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];


  return (
    <>
      <motion.div
        className="scroll-progress"
        style={{
          scaleX,
          transformOrigin: "0%",
          width: "100%"
        }}
      />

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-gv-dark/90 backdrop-blur-xl shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <img src="/logo.svg" alt="GrowVanta" className="h-10 w-auto" />
            <span className="font-heading text-xl font-bold text-primary-foreground tracking-tight">
              Grow<span className="gradient-text">Vanta</span>
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="gradient-btn !py-2 !px-6 text-sm">
              Get Proposal
            </a>
          </div>


          {/* Mobile toggle */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gv-dark/95 backdrop-blur-xl border-t border-white/10 px-6 pb-6"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-primary-foreground/80 hover:text-primary-foreground font-medium"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="gradient-btn inline-block mt-2 !py-2 !px-6 text-sm">
              Get Proposal
            </a>
          </motion.div>
        )}

      </motion.nav>
    </>
  );
};

export default Navbar;
