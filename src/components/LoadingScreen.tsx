"use client";

import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const { progress, active } = useProgress();
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide loading screen when progress reaches 100% or after a timeout if 3D isn't loading
    if (!active && progress === 100) {
      setTimeout(() => setShow(false), 500); // Small delay for smooth transition
    }
  }, [progress, active]);

  // Fallback to hide after 3 seconds anyway if there are no heavy assets
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#050507] flex flex-col items-center justify-center"
        >
          {/* Glitch Neon Text */}
          <div className="relative mb-12">
            <h1 
              className="text-4xl md:text-6xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] glitch-text uppercase tracking-widest"
              data-text="SYS.INITIALIZING"
            >
              SYS.INITIALIZING
            </h1>
          </div>

          {/* Horizontal Neon Loading Bar */}
          <div className="w-64 md:w-96 h-1 bg-gray-800 rounded-full overflow-hidden relative shadow-[0_0_10px_rgba(0,255,255,0.2)]">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.2 }}
              className="absolute top-0 left-0 h-full bg-cyan-400 shadow-[0_0_10px_rgba(0,255,255,1)]"
            />
          </div>

          {/* Percentage */}
          <motion.p className="mt-4 font-mono text-cyan-400 text-sm tracking-widest font-bold">
            {Math.round(progress)}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
