"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Particles() {
  const count = 1500;
  const pointsRef = useRef<THREE.Points>(null!);

  // Generate positions & colors
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorA = new THREE.Color("#00FFFF"); // Cyan
    const colorB = new THREE.Color("#8A2BE2"); // Purple

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Position
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;

      // Color
      const mixed = colorA.clone().lerp(colorB, Math.random());
      colors[i3] = mixed.r;
      colors[i3 + 1] = mixed.g;
      colors[i3 + 2] = mixed.b;
    }

    return { positions, colors };
  }, [count]);

  // Animation
  useFrame((state) => {
    if (pointsRef.current) {
      const t = state.clock.elapsedTime;
      pointsRef.current.rotation.y = t * 0.05;
      pointsRef.current.rotation.x = t * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        {/* ✅ FIXED: use args instead of array/count/itemSize */}
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}