"use client";

import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { FaCode, FaServer, FaBrain, FaReact } from "react-icons/fa";

// Flatten some skills for nodes
const mainSkills = [
  { name: "PyTorch", icon: <FaBrain className="text-purple-400 drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]" size={32} /> },
  { name: "TensorFlow", icon: <FaBrain className="text-cyan-400 drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]" size={32} /> },
  { name: "Python", icon: <FaCode className="text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]" size={32} /> },
  { name: "Next.js", icon: <FaReact className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" size={32} /> },
  { name: "FastAPI", icon: <FaServer className="text-teal-400 drop-shadow-[0_0_5px_rgba(45,212,191,0.8)]" size={32} /> },
  { name: "PostgreSQL", icon: <FaServer className="text-blue-400 drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]" size={32} /> },
  { name: "Three.js", icon: <FaCode className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" size={32} /> },
];

export default function SkillsNetwork() {
  const groupRef = useRef<THREE.Group>(null!);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Distribute nodes in a 3D sphere around the center
  const nodes = useMemo(() => {
    return mainSkills.map((skill, i) => {
      const phi = Math.acos(-1 + (2 * i) / mainSkills.length);
      const theta = Math.sqrt(mainSkills.length * Math.PI) * phi;
      
      const r = 3.5;
      const x = r * Math.cos(theta) * Math.sin(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(phi);
      
      return { ...skill, position: new THREE.Vector3(x, y, z) };
    });
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Node */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#0A0A0C" emissive="#8A2BE2" emissiveIntensity={0.8} wireframe />
      </mesh>

      {/* Nodes and connecting lines */}
      {nodes.map((node) => {
        const isHovered = hoveredNode === node.name;
        
        // Line from center to node
        const points = [new THREE.Vector3(0, 0, 0), node.position];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        
        return (
          <group key={node.name}>
            {/* Connecting line */}
            <line geometry={lineGeometry}>
              <lineBasicMaterial color={isHovered ? "#00FFFF" : "#8A2BE2"} transparent opacity={isHovered ? 0.8 : 0.2} linewidth={1} />
            </line>
            
            {/* Satellite Node */}
            <mesh 
              position={node.position}
              onPointerOver={(e) => { e.stopPropagation(); setHoveredNode(node.name); document.body.style.cursor = 'pointer'; }}
              onPointerOut={(e) => { e.stopPropagation(); setHoveredNode(null); document.body.style.cursor = 'auto'; }}
            >
              <sphereGeometry args={[0.5, 32, 32]} />
              <meshStandardMaterial 
                color="#0A0A0C" 
                emissive={isHovered ? "#00FFFF" : "#8A2BE2"} 
                emissiveIntensity={isHovered ? 1.5 : 0.5} 
                transparent 
                opacity={0.8} 
              />
              
              <Html center transform zIndexRange={[100, 0]} distanceFactor={15}>
                <div className={`p-2 rounded-full flex items-center justify-center transition-transform duration-300 ${isHovered ? 'scale-125' : 'scale-100'}`}>
                  {node.icon}
                </div>
                {isHovered && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 bg-[#0A0A0C]/80 backdrop-blur-md border border-cyan-400 rounded-lg text-cyan-400 font-mono text-base font-bold shadow-[0_0_15px_rgba(0,255,255,0.6)] pointer-events-none">
                    {node.name}
                  </div>
                )}
              </Html>
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
