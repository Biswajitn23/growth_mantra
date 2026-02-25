import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-2xl bg-gv-dark/80 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center shadow-2xl group hover:border-gv-light/50 transition-colors"
                    aria-label="Scroll to top"
                >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gv-mid/20 to-gv-light/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <ArrowUp className="w-6 h-6 relative z-10 transition-transform group-hover:translate-y-[-2px]" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
