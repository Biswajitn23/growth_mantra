import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Project {
  title: string;
  tag: string;
  color: string;
  media?: string | string[];
}

const projects: Project[] = [
  { title: "AI Campaign", tag: "AI", color: "bg-gv-mid", media: "https://media.giphy.com/media/aYp9pukBYKvPMKrmPw/giphy.gif" },
  { title: "UGC Campaign", tag: "UGC", color: "bg-gv-neon", media: "https://media.giphy.com/media/idsPDBUSBfu60KlULc/giphy.gif" },

  { title: "Influencer Campaign", tag: "Influencer", color: "bg-gv-deep", media: "https://media.giphy.com/media/vEqTvEdZf1Q89ZJSJa/giphy.gif" },

  { title: "Web Project", tag: "Web", color: "bg-gv-mid", media: ["https://res.cloudinary.com/dhobvmeds/image/upload/v1772041156/plywood_home_yvsso6.png", "https://res.cloudinary.com/dhobvmeds/image/upload/v1772041155/kainosverse_rhkh3e.png"] },

  { title: "App Project", tag: "App", color: "bg-gv-neon", media: "https://media.giphy.com/media/vDIvSow6xmdEEVJqkM/giphy.gif" },

  { title: "Social Media Growth Case Study", tag: "Social", color: "bg-gv-deep", media: "https://media.giphy.com/media/SxqoSsf0T40rrEjrY8/giphy.gif" },


];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  // Rotate web project images every 2 seconds
  useEffect(() => {
    const webProjectMedia = projects.find(p => p.title === "Web Project")?.media;
    if (!Array.isArray(webProjectMedia) || webProjectMedia.length === 0) return;

    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % (webProjectMedia as string[]).length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const renderMedia = (media: string | string[] | undefined, isWebProject: boolean = false) => {
    if (!media) return null;

    if (Array.isArray(media)) {
      // For web project with rotating images
      return (
        <img
          src={media[activeImageIndex]}
          alt="project"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />

      );
    }

    // For single media (GIF or image)
    return (
      <img
        src={media}
        alt="project"
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />

    );
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">
            Our <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card bg-card rounded-2xl overflow-hidden border border-border group cursor-pointer"
            >
              <div className="aspect-video bg-secondary relative overflow-hidden">
                {p.media ? (
                  renderMedia(p.media, p.title === "Web Project")
                ) : (
                  <>
                    <video
                      autoPlay={inView}
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    >

                      <source src="https://res.cloudinary.com/dhobvmeds/video/upload/v1772038989/1000528518_bwhha9.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-br from-gv-mid/40 to-gv-neon/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <span className="text-white font-heading font-bold text-2xl drop-shadow-lg">{p.title[0]}</span>
                      </div>
                    </div>
                  </>
                )}

              </div>
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-accent-foreground ${p.color}/20 mb-3`}>
                  {p.tag}
                </span>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">{p.title}</h3>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
