"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/constants/Index";
import Image from "next/image";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative min-h-screen py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400 mb-4 drop-shadow-[0_0_10px_rgba(138,43,226,0.5)]">
            Experience Timeline
          </h2>
          <p className="text-gray-400 font-mono tracking-widest uppercase animate-pulse">&gt; System logs</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-400 to-transparent md:-translate-x-1/2 opacity-50 shadow-[0_0_15px_rgba(0,255,255,0.5)]" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-center justify-between mb-16 ${
                  isLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Space for the other side */}
                <div className="hidden md:block w-5/12" />

                {/* Center Node */}
                <div className="absolute left-[20px] md:left-1/2 w-8 h-8 rounded-full bg-[#0A0A0C] border-4 border-cyan-400 -translate-x-1/2 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.8)] z-10">
                  <div className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                </div>

                {/* Content Card */}
                <div className="w-full pl-14 md:pl-0 md:w-5/12">
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(138,43,226,0.3)" }}
                    className="relative p-6 sm:p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group transition-all"
                  >
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.title}
                        </h3>
                        <span className="text-sm font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/30 whitespace-nowrap w-fit">
                          {exp.date}
                        </span>
                      </div>
                      
                      <div className="text-lg text-gray-300 font-medium mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center p-1.5 overflow-hidden border border-white/20">
                          {/* Fallback image icon if empty */}
                          <Image src={exp.icon || "/vercel.svg"} alt={exp.company_name} width={24} height={24} className="object-contain" />
                        </span>
                        {exp.company_name}
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.points.map((point, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start leading-relaxed">
                            <span className="mr-3 mt-1.5 text-cyan-400 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 shadow-[0_0_5px_rgba(0,255,255,0.8)]" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      {exp.techStack && (
                        <div className="flex flex-wrap gap-2">
                          {exp.techStack.map((tech, i) => (
                            <span key={i} className="text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-2 py-1 rounded-md">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
