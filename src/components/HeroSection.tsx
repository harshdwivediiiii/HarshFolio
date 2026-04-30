"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FileText } from "lucide-react";
import GlitchText from "@/components/ui/GlitchText";
import { useAppStore } from "@/store/useAppStore";
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
  const { setResumeOpen } = useAppStore();

  // Parallax tilt effect for the Avatar
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const rotateX = useTransform(mouseY, [-200, 200], [15, -15]);
  const rotateY = useTransform(mouseX, [-200, 200], [-15, 15]);

  return (
    <section className="relative flex min-h-[calc(100vh-100px)] flex-col-reverse items-center justify-between z-10 lg:flex-row gap-12 lg:gap-0">

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
                "Cyberpunk Enthusiast", 1500,
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

        <motion.div variants={itemVariants} className="flex flex-col justify-center gap-6 sm:flex-row lg:justify-start flex-wrap">
          <button
            onClick={() => setResumeOpen(true)}
            className="group relative rounded-full border border-pink-500 bg-pink-500/10 px-8 py-4 text-lg font-mono text-pink-400 transition-all backdrop-blur-md w-full sm:w-auto hover:-translate-y-1 shadow-[0_0_15px_rgba(255,0,255,0.3)] hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] flex items-center justify-center gap-2 overflow-hidden"
          >
            <span className="absolute inset-0 w-0 bg-pink-500/20 transition-all duration-300 ease-out group-hover:w-full" />
            <FileText className="w-5 h-5 relative z-10" />
            <span className="relative z-10 uppercase font-bold tracking-wider">View Resume</span>
          </button>
          <Link href="#projects" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.7)", y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-cyan-400 bg-cyan-400/10 px-8 py-4 text-lg font-mono text-cyan-400 transition-all backdrop-blur-md w-full"
            >
              View Projects
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