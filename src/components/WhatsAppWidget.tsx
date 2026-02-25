import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    const whatsappNumber = "+918839707272";

    const message = "Hi GrowVanta! I'd like to discuss a growth plan for my brand.";

    const handleOpenChat = () => {
        const url = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="fixed bottom-6 left-6 z-[9999] flex flex-col items-start gap-4 pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="bg-gv-dark/95 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden w-[320px] pointer-events-auto"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-gv-mid to-gv-light p-5 text-white">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-white/10 shadow-sm">
                                        <img src="/logo.svg" alt="GV" className="w-6 h-6" />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-sm">GrowVanta</h3>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                            <span className="text-[10px] text-white/80">Online</span>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-6 bg-[#0B0314] relative">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-4">
                                <p className="text-white/80 text-xs italic leading-relaxed">
                                    "Scaling brands with AI & UGC is what we do best. Start a conversation to get your custom growth strategy."
                                </p>
                            </div>

                            <button
                                onClick={handleOpenChat}
                                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:translate-y-[-2px]"
                            >
                                <MessageCircle size={18} />
                                Start Chat on WhatsApp
                            </button>

                            <p className="text-[10px] text-center text-white/30 mt-4">
                                Typically replies in under 5 minutes
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] cursor-pointer pointer-events-auto group border-4 border-white/10"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} className="fill-current" />}
            </motion.button>


        </div>
    );
};

export default WhatsAppWidget;
