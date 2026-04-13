"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TabButton from "./TabButton";

interface Tab {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: Tab[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid list-disc grid-cols-2 gap-2 pl-4 font-medium text-violet-600 dark:text-violet-400">
        <li>
          <span className="text-gray-700 dark:text-gray-300">
            Artificial Intelligence
          </span>
        </li>
        <li>
          <span className="text-gray-700 dark:text-gray-300">
            Machine Learning
          </span>
        </li>
        <li>
          <span className="text-gray-700 dark:text-gray-300">
            Computer Vision (OpenCV, YOLO)
          </span>
        </li>
        <li>
          <span className="text-gray-700 dark:text-gray-300">
            Python & C++
          </span>
        </li>
        <li>
          <span className="text-gray-700 dark:text-gray-300">
            TensorFlow & PyTorch
          </span>
        </li>
        <li>
          <span className="text-gray-700 dark:text-gray-300">
            MERN Stack (Web Dev)
          </span>
        </li>
        <li>
          <span className="text-gray-700 dark:text-gray-300">
            LLMs, RAG, CNNs & RNNs
          </span>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 font-medium text-violet-600 dark:text-violet-400">
        <li>
          <span className="text-gray-700 dark:text-gray-300">
            Sophomore, CSE AI/ML Engineering
          </span>
        </li>
      </ul>
    ),
  },
  {
    title: "Goals",
    id: "goals",
    content: (
      <ul className="list-disc space-y-1 pl-4 font-medium text-violet-600 dark:text-violet-400">
        <li>
          <span className="text-gray-700 dark:text-gray-300">
            Preparing for Google Summer of Code (GSoC)
          </span>
        </li>
        <li>
          <span className="text-gray-700 dark:text-gray-300">
            Actively participating in hackathons
          </span>
        </li>
        <li>
          <span className="text-gray-700 dark:text-gray-300">
            Building advanced AI-driven applications
          </span>
        </li>
        <li>
          <span className="text-gray-700 dark:text-gray-300">
            Contributing to the open-source community
          </span>
        </li>
      </ul>
    ),
  },
  {
    title: "Languages and Tools",
    id: "languages-and-tools",
    content: (
      <div>
        <h2 className="mb-3 text-lg font-semibold">Tech Stack:</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Python",
            "C++",
            "TypeScript",
            "JavaScript",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "TensorFlow",
            "PyTorch",
            "OpenCV",
            "Flask",
            "YOLOv8",
            "RNN/CNN",
            "RAG",
          ].map((lang) => (
            <span
              key={lang}
              className="cursor-default rounded-full border border-violet-200 bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-800 transition-transform hover:scale-105 dark:border-violet-800 dark:bg-violet-900/40 dark:text-violet-200"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");

  const handleTabChange = (id: string) => {
    setTab(id);
  };

  return (
    <section
      className="scroll-mt-20 bg-white py-8 text-gray-700 dark:bg-transparent dark:text-white sm:py-16"
      id="about"
    >
      <div className="flex flex-col items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 xl:px-16 sm:py-16">
        <motion.div
          className="relative mb-8 flex w-full items-center justify-center group md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-30 blur transition duration-1000 group-hover:opacity-70" />
          <Image
            src="/images/about-image.png"
            width={400}
            height={400}
            alt="About Me"
            className="relative z-10 h-[250px] w-[250px] rounded-2xl border-4 border-white object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105 dark:border-[#111] sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px] xl:h-[400px] xl:w-[400px]"
            priority
          />
        </motion.div>

        <motion.div
          className="mt-0 flex h-full w-full flex-col text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="relative mb-6 inline-block w-fit text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            About Me
            <span className="absolute -bottom-2 left-0 h-1 w-1/2 rounded-full bg-violet-500" />
          </h2>
          <p className="mb-6 text-base font-medium leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
            I am an{" "}
            <span className="font-bold text-violet-600 dark:text-violet-400">
              AI/ML Engineer
            </span>{" "}
            with a strong interest in building intelligent solutions.
            Currently, I specialize in computer vision, deep learning, and
            robust web applications using the MERN stack. I&apos;m preparing
            for GSoC and actively participating in hackathons to sharpen my
            problem-solving abilities. My ultimate goal is to integrate
            cutting-edge AI architectures into scalable, real-world platforms.
          </p>

          <div className="mt-4 flex flex-wrap justify-start gap-2 border-b border-gray-200 pb-2 dark:border-gray-800 sm:flex-row">
            {TAB_DATA.map(({ id, title }) => (
              <TabButton
                key={id}
                selectTab={() => handleTabChange(id)}
                active={tab === id}
              >
                {title}
              </TabButton>
            ))}
          </div>

          <motion.div
            className="mt-6 min-h-[150px] sm:mt-8"
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {TAB_DATA.find((item) => item.id === tab)?.content}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
