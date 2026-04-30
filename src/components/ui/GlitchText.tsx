"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const chars = "!<>-_\\\\/[]{}—=+*^?#________";
    const originalText = text;
    
    // Initial glitch in
    let iterations = 0;
    const interval = setInterval(() => {
      textRef.current!.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return originalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      if (iterations >= originalText.length) {
        clearInterval(interval);
      }
      iterations += 1 / 3;
    }, 30);

    // Occasional random glitch effect
    const randomGlitch = () => {
      if (!textRef.current) return;
      
      gsap.to(textRef.current, {
        x: () => Math.random() * 4 - 2,
        y: () => Math.random() * 4 - 2,
        skewX: () => Math.random() * 10 - 5,
        duration: 0.1,
        repeat: 3,
        yoyo: true,
        onComplete: () => {
          gsap.set(textRef.current, { x: 0, y: 0, skewX: 0 });
        }
      });
      
      setTimeout(randomGlitch, 3000 + Math.random() * 5000);
    };

    const timeout = setTimeout(randomGlitch, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text]);

  return <span ref={textRef} className={className}>{text}</span>;
}
