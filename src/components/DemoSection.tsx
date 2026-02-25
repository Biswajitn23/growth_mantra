import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Film, Users, Pause, Volume2, VolumeX } from "lucide-react";

const demos = [
  {
    icon: Film,
    title: "Viral UGC Ad",
    desc: "A high-energy, authentic testimonial designed to build instant trust and drive direct-response sales.",
    video: "https://res.cloudinary.com/dhobvmeds/video/upload/v1772038876/WhatsApp_Video_2026-02-25_at_6.25.35_PM_1_zxtjqc.mp4"
  },
  {
    icon: Play,
    title: "Product Showcase",
    desc: "A sleek, cinematic look into product utility that highlights key benefits with scroll-stopping visuals.",
    video: "https://res.cloudinary.com/dhobvmeds/video/upload/v1772038844/WhatsApp_Video_2026-02-25_at_6.25.36_PM_1_shmlxf.mp4"
  },
  {
    icon: Film,
    title: "Lifestyle Content",
    desc: "Authentic lifestyle integration that shows your brand in the real world, resonating with target audiences.",
    video: "https://res.cloudinary.com/dhobvmeds/video/upload/v1772038819/WhatsApp_Video_2026-02-25_at_6.25.36_PM_2_s7sip7.mp4"
  },
  {
    icon: Play,
    title: "Hook-Driven Ad",
    desc: "Optimized for the first 3 seconds to maximize retention and lower your Customer Acquisition Cost (CAC).",
    video: "https://res.cloudinary.com/dhobvmeds/video/upload/v1772038802/WhatsApp_Video_2026-02-25_at_6.25.36_PM_so9eyi.mp4"
  },
  {
    icon: Film,
    title: "Brand Storytelling",
    desc: "Deep-dive content that builds brand affinity and long-term customer loyalty through real human connection.",
    video: "https://res.cloudinary.com/dhobvmeds/video/upload/v1772038756/WhatsApp_Video_2026-02-25_at_6.25.35_PM_kox8e3.mp4"
  },
  {
    icon: Film,
    title: "UGC Ad Demo",
    desc: "Watch authentic creator-driven ads that drive real conversions.",
    video: "https://res.cloudinary.com/dhobvmeds/video/upload/v1772038989/1000528518_bwhha9.mp4"
  },
];


const DemoCard = ({ d, i, inView }: { d: any; i: number; inView: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);


  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      // Pause all other videos on the page
      document.querySelectorAll('video').forEach(vid => {
        if (vid !== videoRef.current) {
          vid.pause();
        }
      });
      videoRef.current.play();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(current);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newTime = (parseFloat(e.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(parseFloat(e.target.value));
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.15 }}
      className="rounded-2xl border border-border bg-card overflow-hidden group cursor-pointer h-full flex flex-col"
      onClick={d.video ? togglePlay : undefined}
    >
      <div className="aspect-video bg-black/90 relative flex items-center justify-center overflow-hidden">
        {d.video ? (
          <>
            <video
              ref={videoRef}
              loop
              playsInline
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            >

              <source src={d.video} type="video/mp4" />
            </video>
            <div className={`absolute inset-0 bg-gv-dark/40 transition-opacity duration-500 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`} />

            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className={`absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/40 transition-all ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
            </button>

            {/* Seek Bar */}
            <div
              className={`absolute bottom-0 left-0 w-full px-4 pb-14 transition-opacity duration-300 z-20 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress}
                onChange={handleSeek}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-gv-light hover:accent-gv-light transition-all"
              />
            </div>

          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gv-mid/20 to-gv-neon/10 group-hover:from-gv-mid/30 group-hover:to-gv-neon/20 transition-all" />
        )}

        <div className={`relative w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-gv-light/40 group-hover:scale-110 transition-all duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'} z-10`}>
          {isPlaying ? (
            <Pause className="w-8 h-8 text-white" />
          ) : (
            <Play className={d.video ? "w-8 h-8 text-white fill-white" : "w-8 h-8 text-gv-mid fill-gv-mid"} />
          )}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-2">{d.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};


const DemoSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">
            Experience Our Systems <span className="gradient-text">in Action</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {demos.map((d, i) => (
            <DemoCard key={d.title} d={d} i={i} inView={inView} />
          ))}
        </div>

        <div className="text-center">
          <a href="#contact" className="gradient-btn text-lg">
            Book Live Demo
          </a>
        </div>
      </div>
    </section>
  );
};


export default DemoSection;
