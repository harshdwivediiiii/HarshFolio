"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
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

      <section className="relative mt-10 flex flex-col-reverse items-center justify-between px-4 pb-16 sm:px-8 lg:mt-0 lg:flex-row lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <div className="mb-6 flex min-h-[140px] flex-col justify-center font-extrabold sm:min-h-[160px] lg:min-h-[220px]">
            <span className="mb-2 block text-3xl text-violet-500 dark:text-primary-400 sm:text-4xl">
              Hello, I&apos;m
            </span>
            <span className="break-words bg-gradient-to-r from-violet-400 via-fuchsia-500 to-blue-500 bg-[length:200%_auto] bg-clip-text pb-2 text-4xl leading-tight text-transparent animate-gradient sm:text-5xl sm:whitespace-nowrap lg:text-7xl xl:text-8xl">
              Harshvardhan
            </span>
            <span className="mt-2 block bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-3xl text-transparent dark:from-gray-100 dark:to-gray-400 sm:text-4xl lg:text-5xl">
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

          <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-gray-700 dark:text-gray-300 sm:text-xl lg:mx-0">
            Passionate about building innovative solutions with cutting-edge
            technology. Crafting elegant code to solve real-world problems.
          </p>
          <p className="mt-2 text-sm italic text-gray-500 dark:text-gray-400 sm:text-base">
            &quot;Transforming ideas into scalable solutions.&quot;
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Button
              className="rounded-full bg-violet-600 px-8 py-6 text-lg text-white shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all hover:bg-violet-700 hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"
              asChild
            >
              <Link href="#contact">Hire Me</Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-2 px-8 py-6 text-lg text-gray-800 transition-all hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
              asChild
            >
              <Link href="/resume.pdf" target="_blank">
                Download CV
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex justify-center space-x-6 lg:justify-start">
            <Link
              href="https://github.com/harshdwivediiiii"
              target="_blank"
              className="transform text-3xl text-gray-600 transition-colors hover:scale-110 hover:text-violet-500 dark:text-gray-400 dark:hover:text-violet-400"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/harshvardhan-dwivedi-86b375290"
              target="_blank"
              className="transform text-3xl text-gray-600 transition-colors hover:scale-110 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://twitter.com/harshdwivediiii"
              target="_blank"
              className="transform text-3xl text-gray-600 transition-colors hover:scale-110 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300"
            >
              <FaTwitter />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mb-12 flex flex-1 justify-center self-center lg:mb-0 lg:justify-end lg:self-start"
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-400 to-blue-500 opacity-30 blur transition duration-1000 group-hover:opacity-60 group-hover:duration-200" />

            <div className="relative flex items-center justify-center rounded-2xl bg-white p-2 shadow-xl dark:bg-[#111111]">
              <div className="relative h-[350px] w-[280px] overflow-hidden rounded-xl sm:h-[400px] sm:w-[320px] lg:h-[480px] lg:w-[380px]">
                <Image
                  src="/images/hero-image.png"
                  alt="Harshvardhan Dwivedi"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-violet-500 opacity-50 blur-2xl filter mix-blend-multiply animate-blob" />
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-500 opacity-50 blur-2xl filter mix-blend-multiply animate-blob animation-delay-2000" />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
