"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTheme } from "next-themes";

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const textColor = theme === "light" ? "text-black" : "text-white";

  return (
    <section className="lg:py-20 flex flex-col-reverse sm:flex-row items-center justify-between">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center sm:text-left"
      >
        <h1 className={`mb-4 text-4xl sm:text-6xl lg:text-7xl font-extrabold ${textColor}`}>
          <span className="text-green-500 dark:text-primary-400">Hello, I&apos;m</span>
          <br />
          <span className={textColor}>
            <TypeAnimation
              sequence={[
                "Harshvardhan Dwivedi",
                1000,
                "Web Developer",
                1000,
                "AN AI/ML Engineer",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="text-lg sm:text-xl mb-6 text-gray-700 dark:text-gray-300">
          Passionate about building innovative solutions with cutting-edge technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="outline" asChild>
            <Link href="/contact">Hire Me</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/resume.pdf">Download CV</Link>
          </Button>
        </div>
        <div className="flex justify-center sm:justify-start mt-6 space-x-4">
          <Link href="https://github.com/harshdwivediiiii" target="_blank" className="text-gray-700 dark:text-white text-2xl hover:text-gray-400">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/harshvardhan-dwivedi-86b375290" target="_blank" className="text-gray-700 dark:text-white text-2xl hover:text-gray-400">
            <FaLinkedin />
          </Link>
          <Link href="https://twitter.com/harshdwivediiii" target="_blank" className="text-gray-700 dark:text-white text-2xl hover:text-gray-400">
            <FaTwitter />
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="rounded bg-white dark:bg-[#000000] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
          <Image
            src="/images/hero-image.png"
            alt="Harshvardhan Dwivedi"
            width={400}
            height={400}
            className="rounded object-cover border-4 border-green-500 shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
