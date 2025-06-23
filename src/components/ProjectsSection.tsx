"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useTheme } from "next-themes";

const projectsData = [
  { 
    id: 1, 
    title: "Next.js Portfolio Website", 
    description: "Welcome to my project showcase! 🚀 Here, you'll find a collection of my work, ranging from AI-driven applications to full-stack web solutions. Each project reflects my passion for building efficient, scalable, and user-friendly products.I love tackling complex problems, whether it's creating decentralized platforms, developing intelligent systems, or designing seamless UI/UX experiences. Check out my projects below and feel free to explore the code, demos, and case studies!",
    image: "/images/projects/1.png", 
    tag: ["All", "Web"], 
    gitUrl: "https://github.com/harshdwivediiiii/HarshFolio", 
    previewUrl: "/" 
  },
  { 
    id: 2, 
    title: "CrackIt AI", 
    description: "CrackIt AI is an AI-powered exam preparation platform built using Next.js, Clerk, and Gemini AI. It provides students with personalized study plans, intelligent practice tests, and real-time performance analysis to help them ace competitive exams. The platform integrates AI-driven question generation, adaptive learning techniques, and a secure authentication system via Clerk. With an intuitive UI and seamless user experience, CrackIt AI ensures students stay ahead by offering smart recommendations, progress tracking, and AI-powered doubt resolution. Whether you're preparing for an entrance exam or a professional certification, CrackIt AI is your ultimate study companion.",
    image: "/images/projects/2.png", 
    tag: ["All", "AI", "Web"], 
    gitUrl: "https://github.com/harshdwivediiiii/Crackit-AI", 
    previewUrl: "https://crackit-ai-mkrw-5q11z0tfc-harshbi-clouds-projects.vercel.app" 
  },
  { 
    id: 3, 
    title: "FormFlow AI", 
    description: "FormFlow AI is a smart form automation and data collection system, leveraging Next.js, Clerk, and Gemini AI. It streamlines workflows, enhances data accuracy, and simplifies complex forms using AI-driven suggestions. With Gemini AI, the platform provides auto-completion, error detection, and intelligent data validation, making form-filling effortless. Clerk ensures secure authentication, while Next.js offers a fast and dynamic user experience. Ideal for businesses and enterprises, FormFlow AI reduces manual entry, increases efficiency, and improves data-driven decision-making. Whether for lead generation, surveys, or registration forms, FormFlow AI optimizes the process with cutting-edge AI automation.",
    image: "/images/projects/3.png", 
    tag: ["All", "AI", "Web"], 
    gitUrl: "https://github.com/harshdwivediiiii/FormFlow-AI", 
    previewUrl: "https://form-flow-ai-kozg-harshbi-clouds-projects.vercel.app" 
  },
  { 
    id: 4, 
    title: "E-commerce Application", 
    description: "This Next.js and TypeScript-based e-commerce application is a secure, scalable, and high-performance online shopping platform. Integrated with Clerk for authentication, it ensures seamless user onboarding and secure transactions. The app features a robust product management system, shopping cart functionality, order tracking, and a smooth checkout experience. With server-side rendering (SSR) and static site generation (SSG), it provides fast page loads and excellent SEO performance. Designed with a responsive and user-friendly interface, this e-commerce solution is perfect for startups and businesses looking to enhance their online presence with a modern and scalable storefront.",
    image: "/images/projects/4.png", 
    tag: ["All", "Web"], 
    gitUrl: "https://github.com/harshdwivediiiii/E-commerce", 
    previewUrl: "https://e-commerce-s5t8.vercel.app" 
  },
  { 
    id: 5, 
    title: "FoodFly", 
    description: "FoodFly is a modern and user-friendly food delivery application built with React. Designed to provide a seamless ordering experience, FoodFly allows users to browse restaurants, customize meals, and track orders in real time. The platform features intelligent search, advanced filtering, and secure payment integration, ensuring a smooth and efficient checkout process. With an intuitive UI, responsive design, and optimized performance, FoodFly offers a fast and engaging user experience. Whether you're a restaurant owner looking to expand your online reach or a customer craving a quick meal, FoodFly makes food ordering simple, convenient, and hassle-free.",
    image: "/images/projects/5.png", 
    tag: ["All", "Mobile"], 
    gitUrl: "https://github.com/harshdwivediiiii/Foodfly", 
    previewUrl: "https://foodfly-blue.vercel.app" 
  },
  {
    id: 6,
    title: "Pathfinder AI",
    description: "Pathfinder AI is an AI-based career path guidance tool that analyzes your skills, interests, and personality traits to provide personalized career recommendations. Built using React, AI/ML and supported by intelligent algorithms, it offers users helpful insights, actionable next steps, and tailored career roadmaps.",
    image: "/images/projects/6.png",
    tag: ["All", "AI", "Web"],
    gitUrl: "https://github.com/harshdwivediiiii/pathfinder-ai",
    previewUrl: "https://pathfinder-ai-auta.vercel.app"
  }
];
const ProjectsSection = () => {
  const { theme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("light");
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (theme !== undefined) {
      setCurrentTheme(theme === "system" ? systemTheme || "light" : theme);
    }
  }, [theme, systemTheme]);

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  return (
    <section id="projects">
      <h2 suppressHydrationWarning className={`text-center text-4xl font-bold mt-4 mb-8 md:mb-12 ${currentTheme === "dark" ? "text-white" : "text-black"}`}>
        My Projects
      </h2>
      <div className={`flex flex-row justify-center items-center gap-2 py-6 ${currentTheme === "dark" ? "text-white" : "text-black"}`}>
        <ProjectTag onClick={() => setTag("All")} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={() => setTag("Web")} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={() => setTag("Mobile")} name="Mobile" isSelected={tag === "Mobile"} />
        <ProjectTag onClick={() => setTag("AI")} name="AI" isSelected={tag === "AI"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li key={project.id} initial={{ y: 50, opacity: 0 }} animate={isInView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
