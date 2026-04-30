"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ProjectTag from "@/components/ProjectTag";
import { projects } from "@/constants/Index";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const boundingRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
      className="relative group h-full cursor-pointer"
    >
      <div
        ref={boundingRef}
        onMouseMove={handleMouseMove}
        className="relative flex flex-col h-full glass-neon rounded-2xl p-6 sm:p-8 overflow-hidden transition-all duration-300"
      >
        <motion.div
          className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(0, 255, 255, 0.15),
                transparent 80%
              )
            `,
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Project Image */}
          {project.image && (
            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden border border-cyan-500/20 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] to-transparent opacity-80" />
            </div>
          )}

          <h3 className="text-2xl font-bold text-white mb-3 neon-text">
            {project.title}
          </h3>

          <p className="text-gray-300 mb-6 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-mono text-cyan-300 bg-cyan-900/30 border border-cyan-500/30 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-row gap-4">
            {project.previewUrl && project.previewUrl !== "#" && (
              <Link href={project.previewUrl} target="_blank" className="flex-1">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400 text-cyan-400 rounded-full transition-all hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]">
                  <FaExternalLinkAlt size={14} /> Live
                </button>
              </Link>
            )}

            {project.gitUrl && project.gitUrl !== "#" && (
              <Link href={project.gitUrl} target="_blank" className="flex-1">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-400 text-purple-400 rounded-full transition-all hover:shadow-[0_0_15px_rgba(138,43,226,0.5)]">
                  <FaGithub size={16} /> GitHub
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = ["All", "Python", "Next.js", "AI", "ML"];

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((project) =>
        project.tags.includes(selectedTag)
      );

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-[#0A0A0C] to-[#0A0A0C] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-4 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]"
          >
            SYSTEM_OVERRIDE: PROJECTS
          </motion.h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full neon-border" />
        </div>

        {/* 🔥 TAG FILTER */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tags.map((tag) => (
            <ProjectTag
              key={tag}
              name={tag}
              onClick={setSelectedTag}
              isSelected={selectedTag === tag}
            />
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}