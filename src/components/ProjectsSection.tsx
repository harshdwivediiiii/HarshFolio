"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { projects } from "@/constants/Index";
import Link from "next/link";

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const boundingRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [isHovered, setIsHovered] = useState(false);

  // Tilt and Glow Effect based on mouse position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!boundingRef.current) return;
    const { left, top } = boundingRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative group h-full"
    >
      <div
        ref={boundingRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex flex-col h-full bg-[#0A0A0C]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 overflow-hidden transition-all duration-300"
      >
        {/* Dynamic Glow following mouse */}
        <motion.div
          className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                rgba(0, 255, 255, 0.15),
                transparent 80%
              )
            `,
          }}
        />

        {/* Hover Border Glow */}
        <div className="absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/50 rounded-2xl transition-colors duration-500 shadow-[inset_0_0_20px_rgba(0,255,255,0)] group-hover:shadow-[inset_0_0_20px_rgba(0,255,255,0.2)] pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
            {project.blurb}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-xs font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>

          <Link href={project.link} target="_blank" className="mt-auto">
            <button className="w-full sm:w-auto px-6 py-2 rounded-full border border-cyan-500/30 text-cyan-400 font-mono text-sm hover:bg-cyan-500/10 transition-all group-hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] flex items-center justify-center gap-2">
              View Deployment
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V48h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path></svg>
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
            Featured Projects
          </h2>
          <p className="text-gray-400 font-mono tracking-widest uppercase">&gt; Initializing subroutines</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}