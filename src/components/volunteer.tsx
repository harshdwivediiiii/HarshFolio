"use client";

import React, { useRef, Suspense } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NetworkLines() {
  const groupRef = useRef<THREE.Group>(null!);

  const lineCount = 30;

  const points = React.useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < lineCount; i++) {
      const x = (Math.random() - 0.5) * 15;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 10;
      pts.push(new THREE.Vector3(x, y, z));
    }
    return pts;
  }, []);

  const geometry = React.useMemo(() => {
    const geom = new THREE.BufferGeometry().setFromPoints(points);
    return geom;
  }, [points]);

  const material = React.useMemo(() => {
    return new THREE.LineBasicMaterial({
      color: "#FF00FF",
      transparent: true,
      opacity: 0.3,
    });
  }, []);

  const lines = React.useMemo(() => {
    return new THREE.LineSegments(geometry, material);
  }, [geometry, material]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={lines} />
    </group>
  );
}

const VolunteerPage: React.FC = () => {
  return (
    <section className="relative min-h-screen px-4 sm:px-8 py-24 z-10 overflow-hidden">

      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <NetworkLines />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-[#0A0A0C] z-0" />

      <div className="max-w-5xl mx-auto relative z-10">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 mb-4 drop-shadow-[0_0_15px_rgba(255,0,255,0.5)]">
            Volunteering Log
          </h2>
          <p className="text-gray-400 font-mono tracking-widest uppercase animate-pulse">
            &gt; Community initiatives
          </p>
        </motion.div>

        <motion.div
          className="p-6 sm:p-10 rounded-2xl border border-pink-500/30 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(255,0,255,0.2)] transition-all duration-500 bg-white/5 backdrop-blur-xl"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-pink-500 opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity" />

          <div className="flex-shrink-0 relative z-10 border border-white/10 rounded-xl p-2 bg-black/50 backdrop-blur-md">
            <Image
              src="/badges/ambassador_gssoc.png"
              alt="Badge"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-2">
              Campus Ambassador
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 mb-6 mt-4 font-mono text-sm">
              <span className="text-pink-300 bg-pink-500/10 border border-pink-500/30 px-3 py-1 rounded-md">
                GirlScript Summer of Code
              </span>
              <span className="text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-md">
                Sept 2024 – Nov 2024
              </span>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed font-light">
              Promoted open-source culture, mentored peers, and strengthened leadership through community engagement.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default VolunteerPage;