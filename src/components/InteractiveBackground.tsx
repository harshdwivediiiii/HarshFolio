"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useTheme } from "next-themes";

export default function InteractiveBackground() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { resolvedTheme } = useTheme();

  // Smooth springs for a more interactive and liquid feel
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseX = useSpring(useMotionValue(0), springConfig);
  const mouseY = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Use clientY since the parent container is fixed
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  // Don't render anything until mounted to avoid SSR hydration mismatch
  if (!mounted) return null;

  const glowBaseColor =
    resolvedTheme === "dark"
      ? "rgba(139, 92, 246, 0.4)"   // Stronger purple in dark mode
      : "rgba(139, 92, 246, 0.25)"; // Softer purple in light mode

  const glowSize = isHovering ? 600 : 400;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden lg:block transition-colors duration-500">
      <motion.div
        className="absolute rounded-full"
        animate={{
          scale: isHovering ? 1.2 : 1,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        style={{
          width: glowSize,
          height: glowSize,
          // Center the glow exactly on the cursor
          x: mouseX,
          y: mouseY,
          // Offset transforms
          translateX: "-50%",
          translateY: "-50%",
          background: `radial-gradient(circle, ${glowBaseColor} 0%, rgba(139,92,246,0) 60%)`,
        }}
      />
    </div>
  );
}
