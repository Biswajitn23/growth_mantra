import { useState, useRef } from "react";
import "../styles/text-strip.css";

const AnimatedTextStrip = () => {
  const [isPaused, setIsPaused] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={stripRef}
      className="animated-text-strip section-deep"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={`text-strip-track ${isPaused ? "paused" : "scrolling"}`}>
        {/* Original text */}
        <span className="text-strip-item">GrowVanta Media</span>
        <span className="text-strip-separator">•</span>

        {/* Duplicated for seamless loop */}
        <span className="text-strip-item">GrowVanta Media</span>
        <span className="text-strip-separator">•</span>

        <span className="text-strip-item">GrowVanta Media</span>
        <span className="text-strip-separator">•</span>

        <span className="text-strip-item">GrowVanta Media</span>
        <span className="text-strip-separator">•</span>

        <span className="text-strip-item">GrowVanta Media</span>
        <span className="text-strip-separator">•</span>

        <span className="text-strip-item">GrowVanta Media</span>
        <span className="text-strip-separator">•</span>

        {/* Extra repetitions for smooth infinite loop */}
        <span className="text-strip-item">GrowVanta Media</span>
        <span className="text-strip-separator">•</span>
      </div>
    </div>
  );
};

export default AnimatedTextStrip;
