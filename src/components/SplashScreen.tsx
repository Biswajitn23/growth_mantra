import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 15);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                y: "-100%",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center section-hero"
        >
            <div className="relative">
                {/* Logo with pulsing glow */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: [0.8, 1.1, 1],
                        opacity: 1,
                        filter: ["blur(10px)", "blur(0px)"]
                    }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative z-10"
                >
                    <img src="/logo.svg" alt="GrowVanta" className="h-24 md:h-32 w-auto mb-8" />
                </motion.div>

                {/* Animated Rings */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 -m-8 rounded-full border border-gv-neon/20 border-dashed"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 -m-16 rounded-full border border-gv-light-purple/10"
                />
            </div>

            <div className="w-64 md:w-80 mt-12 overflow-hidden">
                <div className="flex justify-between items-end mb-2">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground/60"
                    >
                        Initializing Growth Engine
                    </motion.p>
                    <span className="text-gv-neon font-heading font-bold text-sm">{progress}%</span>
                </div>

                {/* Progress track */}
                <div className="h-[2px] w-full bg-white/10 rounded-full relative overflow-hidden">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-gv-mid-purple to-gv-neon shadow-[0_0_15px_hsla(var(--gv-light-purple),0.8)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Background floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -100],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            bottom: "-10%"
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default SplashScreen;
