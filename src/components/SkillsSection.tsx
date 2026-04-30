"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import SkillsNetwork from "@/components/3d/SkillsNetwork";

export default function SkillsSection() {
  return (
    <section id="skills" className="relative min-h-screen flex flex-col items-center justify-center py-20 z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-8 z-20 pointer-events-none"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 drop-shadow-[0_0_15px_rgba(138,43,226,0.5)]">
          Skills & Tech Stack
        </h2>
        <p className="text-gray-400 font-mono text-lg tracking-widest uppercase animate-pulse">
          &gt; Interactive Neural Graph
        </p>
      </motion.div>

      <div className="relative w-full h-[500px] md:h-[700px] z-20 pointer-events-auto">
        <div className="absolute inset-0 bg-cyan-500/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }} className="w-full h-full">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#00FFFF" />
          <pointLight position={[-10, -10, -10]} intensity={2} color="#8A2BE2" />
          <Suspense fallback={null}>
            <SkillsNetwork />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
