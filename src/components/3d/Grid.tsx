"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function GridBackground() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (gridRef.current) {
      // Subtle movement for the grid to make it feel alive
      gridRef.current.position.z = (state.clock.elapsedTime * 0.2) % 1;
    }
  });

  return (
    <group position={[0, -2.5, 0]}>
      <gridHelper
        ref={gridRef}
        args={[100, 100, "#8A2BE2", "#00FFFF"]}
        position={[0, 0, 0]}
      />
    </group>
  );
}
