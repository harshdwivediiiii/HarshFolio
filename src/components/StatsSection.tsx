"use client";
import React, { useEffect, useState, useRef, Suspense } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const stats = [
  { label: "Projects Built", value: 15, suffix: "+" },
  { label: "Hackathons", value: 3, suffix: "" },
  { label: "GitHub Commits", value: 1200, suffix: "+" },
  { label: "AI Models Trained", value: 15, suffix: "+" },
];

function ParticleBursts() {
  const pointsRef = useRef<THREE.Points>(null!);
  const particleCount = 500;
  
  const [positions] = useState(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  });

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.1;
      pointsRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00FFFF"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, motionValue]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const StatsSection: React.FC = () => {
  return (
    <div className="py-24 relative overflow-hidden z-10 w-full min-h-[400px] flex items-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <ParticleBursts />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0A0A0C] via-transparent to-[#0A0A0C]" />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 neon-text"
          >
            SYSTEM_STATS
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
              className="p-8 rounded-2xl glass-neon relative group overflow-hidden cursor-crosshair transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] border border-cyan-500/20 hover:border-cyan-400"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />
              
              <h3 className="text-5xl sm:text-6xl font-black text-white mb-2 tracking-tighter drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
                <AnimatedNumber value={stat.value} />
                <span className="text-cyan-400">{stat.suffix}</span>
              </h3>
              
              <p className="text-cyan-100/70 font-mono text-xs sm:text-sm uppercase tracking-widest mt-4">
                {stat.label}
              </p>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400 opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
