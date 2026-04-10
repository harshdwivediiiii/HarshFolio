"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";
import { motion } from "framer-motion";

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
      <ul className="grid grid-cols-2 gap-2 list-disc pl-4 text-violet-600 dark:text-violet-400 font-medium">
        <li><span className="text-gray-700 dark:text-gray-300">Artificial Intelligence</span></li>
        <li><span className="text-gray-700 dark:text-gray-300">Machine Learning</span></li>
        <li><span className="text-gray-700 dark:text-gray-300">Computer Vision (OpenCV, YOLO)</span></li>
        <li><span className="text-gray-700 dark:text-gray-300">Python & C++</span></li>
        <li><span className="text-gray-700 dark:text-gray-300">TensorFlow & PyTorch</span></li>
        <li><span className="text-gray-700 dark:text-gray-300">MERN Stack (Web Dev)</span></li>
        <li><span className="text-gray-700 dark:text-gray-300">LLMs, RAG, CNNs & RNNs</span></li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 text-violet-600 dark:text-violet-400 font-medium">
        <li><span className="text-gray-700 dark:text-gray-300">Sophomore, CSE AI/ML Engineering</span></li>
      </ul>
    ),
  },
  {
    title: "Goals",
    id: "goals",
    content: (
      <ul className="list-disc pl-4 text-violet-600 dark:text-violet-400 font-medium space-y-1">
        <li><span className="text-gray-700 dark:text-gray-300">Preparing for Google Summer of Code (GSoC)</span></li>
        <li><span className="text-gray-700 dark:text-gray-300">Actively participating in hackathons</span></li>
        <li><span className="text-gray-700 dark:text-gray-300">Building advanced AI-driven applications</span></li>
        <li><span className="text-gray-700 dark:text-gray-300">Contributing to the open-source community</span></li>
      </ul>
    ),
  },
  {
    title: "Languages and Tools",
    id: "languages-and-tools",
    content: (
      <div>
        <h2 className="text-lg font-semibold mb-3">💻 Tech Stack:</h2>
        <div className="flex flex-wrap gap-2">
          {/* Note: I intentionally removed the badges here since we have a dedicated TechMarquee section now, but we can list top ones or keep them. Let's keep a curated list of interactive elements. */}
          {["Python", "C++", "TypeScript", "JavaScript", "React", "Node.js", "Express", "MongoDB", "TensorFlow", "PyTorch", "OpenCV", "Flask", "YOLOv8", "RNN/CNN", "RAG"].map((lang) => (
             <span key={lang} className="px-3 py-1 bg-violet-100 dark:bg-violet-900/40 text-violet-800 dark:text-violet-200 rounded-full text-sm font-semibold border border-violet-200 dark:border-violet-800 hover:scale-105 transition-transform cursor-default">
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
      className="text-gray-700 dark:text-white bg-white dark:bg-transparent py-8 sm:py-16 scroll-mt-20"
      id="about"
    >
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div 
          className="flex justify-center items-center w-full mb-8 md:mb-0 relative group"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
          <Image
            src="/images/about-image.png"
            width={400}
            height={400}
            alt="About Me"
            className="rounded-2xl shadow-2xl w-[250px] h-[250px] object-cover sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px] border-4 border-white dark:border-[#111] relative z-10 transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </motion.div>
        
        <motion.div 
          className="mt-0 text-left flex flex-col h-full w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 relative inline-block w-fit">
            About Me
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-violet-500 rounded-full"></span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-medium">
            I am an <span className="text-violet-600 dark:text-violet-400 font-bold">AI/ML Engineer</span> with a strong interest in building intelligent solutions. Currently, I specialize in computer vision, deep learning, and robust web applications using the MERN stack. I'm preparing for GSoC and actively participating in hackathons to sharpen my problem-solving abilities. My ultimate goal is to integrate cutting-edge AI architectures into scalable, real-world platforms.
          </p>
          
          <div className="flex flex-wrap sm:flex-row justify-start mt-4 gap-2 border-b border-gray-200 dark:border-gray-800 pb-2">
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
            className="mt-6 sm:mt-8 min-h-[150px]"
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;