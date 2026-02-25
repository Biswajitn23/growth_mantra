import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
    const [isPointer, setIsPointer] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    // HALO (Smooth trailing)
    const mouseX = useSpring(0, { stiffness: 400, damping: 40 });
    const mouseY = useSpring(0, { stiffness: 400, damping: 40 });

    // DOT (High precision/fast)
    const dotX = useSpring(0, { stiffness: 1000, damping: 40 });
    const dotY = useSpring(0, { stiffness: 1000, damping: 40 });



    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            dotX.set(e.clientX);
            dotY.set(e.clientY);

            if (isHidden) setIsHidden(false);

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest('button') !== null ||
                target.closest('a') !== null ||
                target.getAttribute('role') === 'button'
            );

        };


        const handleMouseLeave = () => setIsHidden(true);
        const handleMouseEnter = () => setIsHidden(false);

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [mouseX, mouseY, isHidden]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[10000] hidden md:block">

            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[hsl(var(--gv-light-purple))] bg-[hsl(var(--gv-light-purple)/0.05)]"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isHidden ? 0 : 1,
                    scale: isPointer ? 1.4 : 1,
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[hsl(var(--gv-light-purple))] shadow-[0_0_15px_hsla(var(--gv-light-purple),0.6)]"
                style={{
                    x: dotX,
                    y: dotY,

                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isHidden ? 0 : 1,
                    scale: isPointer ? 0.5 : 1,
                }}
            />

        </div>
    );
};

export default CustomCursor;
