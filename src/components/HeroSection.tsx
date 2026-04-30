"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import GlitchText from "@/components/ui/GlitchText";
import { Canvas } from "@react-three/fiber";
import BrainModel from "@/components/3d/BrainModel";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  },
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-100px)] flex-col-reverse items-center justify-between z-10 lg:flex-row">
      
      {/* Left Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 text-center lg:text-left z-20"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="mb-2 block text-2xl font-mono text-cyan-400 sm:text-3xl tracking-widest uppercase">
            Hello, I am
          </span>
          <h1 className="text-5xl font-extrabold sm:text-6xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-500 drop-shadow-[0_0_15px_rgba(138,43,226,0.5)]">
            <GlitchText text="Harshvardhan" />
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6 font-mono">
          <span className="block text-2xl sm:text-4xl text-gray-300">
            &gt; <TypeAnimation
              sequence={[
                "AI/ML Engineer", 1500,
                "Full-Stack Developer", 1500,
                "Open Source Contributor", 1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-cyan-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]"
            />
            <span className="animate-pulse">_</span>
          </span>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl lg:mx-0 backdrop-blur-sm bg-black/20 p-4 rounded-xl border border-white/5"
        >
          Building intelligent systems and immersive interfaces at the intersection of machine learning and modern web. Transforming ideas into scalable solutions.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col justify-center gap-6 sm:flex-row lg:justify-start">
          <Link href="#projects">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.7)", y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-cyan-400 bg-cyan-400/10 px-8 py-4 text-lg font-mono text-cyan-400 transition-all backdrop-blur-md w-full sm:w-auto"
            >
              View Projects
            </motion.button>
          </Link>
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(138, 43, 226, 0.7)", y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-purple-500 bg-purple-500/10 px-8 py-4 text-lg font-mono text-purple-400 transition-all backdrop-blur-md w-full sm:w-auto"
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 flex justify-center space-x-8 lg:justify-start">
          {[
            { icon: FaGithub, href: "https://github.com/harshdwivediiiii", color: "hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/harshvardhan-d-86b375290", color: "hover:text-blue-400 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" },
            { icon: FaTwitter, href: "https://twitter.com/harshdwivediiii", color: "hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" }
          ].map((item, idx) => (
            <Link key={idx} href={item.href} target="_blank" className={`transform text-3xl text-gray-500 transition-all duration-300 hover:scale-125 ${item.color}`}>
              <item.icon />
            </Link>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Content - 3D Canvas */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative flex h-[400px] w-full flex-1 justify-center lg:h-[600px] z-20 cursor-pointer pointer-events-auto"
      >
        <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full mix-blend-screen" />
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="w-full h-full">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00FFFF" />
          <pointLight position={[-10, -10, -10]} intensity={1.5} color="#8A2BE2" />
          <Suspense fallback={null}>
            <BrainModel />
          </Suspense>
        </Canvas>
      </motion.div>

    </section>
  );
};

export default HeroSection;