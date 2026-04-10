"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaChevronDown, } from "react-icons/fa";
import { Button } from "@/components/ui/button";


const HeroSection: React.FC = () => {
  return (
    <>
      <Head>
        <title>Harshvardhan Dwivedi | Web Developer & AI/ML Engineer</title>
        <meta
          name="description"
          content="Portfolio of Harshvardhan Dwivedi - a Web Developer and AI/ML Engineer passionate about building innovative solutions with cutting-edge technology."
        />
      </Head>

      <section className="relative lg:py-20 flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 mt-10 lg:mt-0 pb-16">
        {/* Left - Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left flex-1"
        >
          <div className="mb-6 font-extrabold flex flex-col justify-center min-h-[140px] sm:min-h-[160px] lg:min-h-[220px]">
            <span className="text-3xl sm:text-4xl text-green-500 dark:text-primary-400 mb-2 block">
              Hello, I&apos;m
            </span>
            <span className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent break-words sm:whitespace-nowrap pb-2 leading-tight">
              Harshvardhan
            </span>
            <span className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent mt-2 block">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1500,
                  "AI/ML Engineer",
                  1500,
                  "Tech Enthusiast",
                  1500,
                  "Open Source Contributor",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>

          <p className="text-lg sm:text-xl mb-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Passionate about building innovative solutions with cutting-edge technology.
            Crafting elegant code to solve real-world problems.
          </p>
          <p className="italic text-sm sm:text-base mt-2 text-gray-500 dark:text-gray-400">
            “Transforming ideas into scalable solutions.”
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg transition-all shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]" asChild>
              <Link href="#contact">Hire Me</Link>
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-2 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-gray-800 dark:text-gray-200" asChild>
              <Link href="/resume.pdf" target="_blank">Download CV</Link>
            </Button>
          </div>

          <div className="flex justify-center lg:justify-start mt-8 space-x-6">
            <Link
              href="https://github.com/harshdwivediiiii"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors transform hover:scale-110 text-3xl"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/harshvardhan-dwivedi-86b375290"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors transform hover:scale-110 text-3xl"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://twitter.com/harshdwivediiii"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors transform hover:scale-110 text-3xl"
            >
              <FaTwitter />
            </Link>
          </div>
        </motion.div>

        {/* Right - Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative self-center lg:self-start mb-12 lg:mb-0 flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Background glowing blob */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative rounded-2xl bg-white dark:bg-[#111111] p-2 flex items-center justify-center shadow-xl">
              <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] lg:w-[380px] lg:h-[480px] overflow-hidden rounded-xl">
                <Image
                  src="/images/hero-image.png"
                  alt="Harshvardhan Dwivedi"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
          </div>
        </motion.div>

        {/* Optional: Background particles can be added here */}
      </section>
    </>
  );
};

export default HeroSection;
