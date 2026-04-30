"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import GridBackground from "./Grid";
import Particles from "./Particles";

export default function SceneWrapper() {
  return (
    <div className="fixed inset-0 z-0 h-screen w-screen pointer-events-none bg-[#0A0A10]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: false, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00FFFF" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#8A2BE2" />
        
        <Suspense fallback={null}>
          <GridBackground />
          <Particles />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
