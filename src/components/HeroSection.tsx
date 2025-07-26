"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaChevronDown, FaSun, FaMoon } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const HeroSection: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const textColor = theme === "light" ? "text-black" : "text-white";

  return (
    <>
      <Head>
        <title>Harshvardhan Dwivedi | Web Developer & AI/ML Engineer</title>
        <meta
          name="description"
          content="Portfolio of Harshvardhan Dwivedi - a Web Developer and AI/ML Engineer passionate about building innovative solutions with cutting-edge technology."
        />
      </Head>

      <section className="relative lg:py-20 flex flex-col-reverse sm:flex-row items-center justify-between px-4 sm:px-8">
        {/* Theme Toggle Button */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="absolute top-5 right-5 text-2xl text-green-500"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        {/* Left - Text Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center sm:text-left"
        >
          <h1 className={`mb-4 text-4xl sm:text-6xl lg:text-7xl font-extrabold ${textColor}`}>
            <span className="text-green-500 dark:text-primary-400">Hello, I&apos;m</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
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

          <p className="text-lg sm:text-xl mb-2 text-gray-700 dark:text-gray-300">
            Passionate about building innovative solutions with cutting-edge technology.
          </p>
          <p className="italic text-sm sm:text-base mt-2 text-gray-500 dark:text-gray-400">
            “Transforming ideas into scalable solutions.”
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button variant="outline" asChild>
              <Link href="#contact">Hire Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/resume.pdf" target="_blank">Download CV</Link>
            </Button>
          </div>

          <div className="flex justify-center sm:justify-start mt-6 space-x-4">
            <Link
              href="https://github.com/harshdwivediiiii"
              target="_blank"
              className="text-gray-700 dark:text-white text-2xl hover:text-gray-400"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/harshvardhan-dwivedi-86b375290"
              target="_blank"
              className="text-gray-700 dark:text-white text-2xl hover:text-gray-400"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://twitter.com/harshdwivediiii"
              target="_blank"
              className="text-gray-700 dark:text-white text-2xl hover:text-gray-400"
            >
              <FaTwitter />
            </Link>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mt-10 text-3xl text-green-500"
          >
            <FaChevronDown />
          </motion.div>
        </motion.div>

        {/* Right - Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="rounded bg-white dark:bg-[#000000] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex items-center justify-center shadow-lg">
            <Image
              src="/images/hero-image.png"
              alt="Harshvardhan Dwivedi"
              width={400}
              height={400}
              priority
              className="rounded object-cover border-4 border-green-500"
            />
          </div>
        </motion.div>

        {/* Optional: Background particles can be added here */}
      </section>
    </>
  );
};

export default HeroSection;
