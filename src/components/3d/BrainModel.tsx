"use client";

import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function BrainModel() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const particlesRef = useRef<THREE.Points>(null!);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.5;
      meshRef.current.rotation.x = time * 0.2;

      // Pulse effect
      const targetScale = hovered
        ? 1.2
        : 1 + Math.sin(time * 2) * 0.05;

      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );

      // Emissive animation
      const material =
        meshRef.current.material as THREE.MeshStandardMaterial;

      material.emissiveIntensity = THREE.MathUtils.lerp(
        material.emissiveIntensity,
        hovered ? 1.5 : 0.5,
        0.1
      );
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = -time * 0.2;

      const targetScale = hovered ? 1.5 : 1;

      particlesRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
  });

  // ✅ FIX: memoize particle positions (important)
  const particleCount = 200;

  const positions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2 + Math.random();

      const i3 = i * 3;

      arr[i3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i3 + 2] = r * Math.cos(phi);
    }

    return arr;
  }, []);

  return (
    <group>
      {/* Brain mesh */}
      <mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={() => {
          window.dispatchEvent(new CustomEvent("open-about"));
        }}
      >
        <icosahedronGeometry args={[1.5, 3]} />

        <meshStandardMaterial
          color="#00FFFF"
          emissive="#8A2BE2"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          {/* ✅ FIXED HERE */}
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>

        <pointsMaterial
          size={0.05}
          color="#00FFFF"
          transparent
          opacity={0.6}
        />
      </points>
    </group>
  );
}