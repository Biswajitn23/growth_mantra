import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Zap,
  Users,
  Megaphone,
  Code2,
  Globe,
  Share2,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

interface Service {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  facilities: string[];
  media?: string;
}


const services: Service[] = [
  {
    id: 1,
    icon: Zap,
    title: "AI Video Production",
    media: "https://media.giphy.com/media/ncOwu46pAXIUR5xr8p/giphy.gif",

    facilities: [
      "AI-powered ad video creation",
      "Script generation & optimization",
      "Product explainer videos",
      "Short-form AI reels",
      "Automated personalization",
      "Performance-based creative testing",
    ],
  },
  {
    id: 2,
    icon: Users,
    title: "UGC Video",
    media: "https://media.giphy.com/media/MRunD35tZZHyiEZp3i/giphy.gif",

    facilities: [
      "Creator sourcing & coordination",
      "Testimonial & product demo videos",
      "Short-form content production",
      "Conversion-driven UGC ads",
      "Multi-platform formatting",
      "Performance tracking",
    ],
  },
  {
    id: 3,
    icon: Megaphone,
    title: "Influencer Marketing",
    media: "https://media.giphy.com/media/73266bI4plkBgTtzzp/giphy.gif",


    facilities: [
      "Influencer research & vetting",
      "Campaign planning & execution",
      "Contract & negotiation handling",
      "Cross-platform activation",
      "Performance reporting dashboard",
    ],
  },
  {
    id: 4,
    icon: Code2,
    title: "Web & App Development",
    media: "https://media.giphy.com/media/QB47pnlEYhVGH4sYn1/giphy.gif",


    facilities: [
      "High-converting website design",
      "Landing page funnels",
      "E-commerce development",
      "Mobile app development",
      "UI/UX optimization",
      "Speed & performance enhancement",
    ],
  },
  {
    id: 5,
    icon: Globe,
    title: "SEO & GMB Optimization",
    media: "https://media.giphy.com/media/UHw9pfIvr3BrbOyccA/giphy.gif",

    facilities: [
      "Keyword research strategy",
      "On-page & technical SEO",
      "Local SEO optimization",
      "Google My Business management",
      "Monthly ranking reports",
    ],
  },
  {
    id: 6,
    icon: Share2,
    title: "Social Media Marketing",
    media: "https://media.giphy.com/media/SxqoSsf0T40rrEjrY8/giphy.gif",

    facilities: [
      "Content strategy",
      "Creative post design",
      "Reel & short-form strategy",
      "Paid ads management",
      "Growth & engagement optimization",
      "Performance analytics",
    ],
  },
  {
    id: 7,
    icon: MessageCircle,
    title: "WhatsApp Automation",
    media: "https://media.giphy.com/media/GEaGtNxyUlfqFSF2on/giphy.gif",

    facilities: [
      "WhatsApp Business API setup",
      "Automated chatbot flows",
      "Lead nurturing automation",
      "Broadcast campaign setup",
      "CRM integration",
    ],
  },
];

const WhatWeDeliverSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p
            className="font-heading font-semibold text-sm tracking-[0.15em] uppercase mb-3"
            style={{ color: "hsl(var(--gv-mid-purple))" }}
          >
            Premium Services
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">
            What We <span className="gradient-text">Deliver</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => toggleCard(service.id)}
                className="relative"
              >
                <motion.div
                  layout
                  className="bg-white rounded-[20px] border-2 overflow-hidden cursor-pointer transition-all duration-300 group"
                  style={{
                    borderColor:
                      expandedId === service.id
                        ? "hsl(var(--gv-deep-purple))"
                        : "transparent",
                    boxShadow:
                      expandedId === service.id
                        ? "0 16px 48px hsla(270, 55%, 24%, 0.15)"
                        : "0 8px 32px hsla(270, 55%, 24%, 0.08)",
                  }}
                >
                  {/* Card Header */}
                  <motion.div
                    layout
                    className="p-0 overflow-hidden"
                  >
                    {/* Media Image */}
                    {service.media && (
                      <div className="w-full h-48 overflow-hidden">
                        <img
                          src={service.media}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />

                      </div>
                    )}

                    {/* Title Section */}
                    <div
                      className="p-8"
                      style={{
                        background:
                          "linear-gradient(to bottom right, white, hsla(var(--gv-lavender), 0.3))",
                      }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
                          style={{
                            background:
                              "linear-gradient(to bottom right, hsla(var(--gv-light-purple), 0.2), hsla(var(--gv-mid-purple), 0.1))",
                          }}
                        >
                          <service.icon
                            className="w-8 h-8 text-gv-mid"
                          />

                        </div>
                        <motion.div
                          animate={{ rotate: expandedId === service.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown
                            className="w-5 h-5"
                            style={{ color: "hsl(var(--gv-mid-purple))" }}
                          />
                        </motion.div>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {service.title}
                      </h3>
                    </div>
                  </motion.div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {expandedId === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div
                          className="px-8 py-6 space-y-3"
                          style={{
                            borderTop:
                              "1px solid hsla(var(--gv-mid-purple), 0.2)",
                          }}
                        >
                          {service.facilities.map((facility, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.2,
                                delay: idx * 0.05,
                              }}
                              className="flex items-start gap-3"
                            >
                              <div
                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                style={{
                                  backgroundColor:
                                    "hsl(var(--gv-light-purple))",
                                }}
                              />
                              <span className="text-sm text-foreground/80 leading-relaxed">
                                {facility}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDeliverSection;
