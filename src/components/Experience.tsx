"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences, ExperienceType } from "@/constants/Index";

// ✅ Lucide Icons
import { Briefcase, Building, ExternalLink, MapPin, Star } from "lucide-react";
import Link from "next/link";

// ✅ Typewriter effect (optional basic variant)
const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
    },
  }),
};

const Experience = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const headingText = "Experience";


  return (
    <section className="py-10">
      {/* 🔠 Animated Heading */}
      <motion.h2
        className="text-3xl font-bold text-center mb-10 flex justify-center gap-1"
        initial="hidden"
        animate="visible"
      >
        <Briefcase  size={28} className="text-black dark:text-white" />
        {headingText.split("").map((char, i) => (
          <motion.span key={i} custom={i} variants={textVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h2>

      <VerticalTimeline>
        {experiences.map((exp: ExperienceType, index: number) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: theme === "dark" ? "#000000" : "#ffffff",
              color: theme === "dark" ? "#ffffff" : "#000000",
              boxShadow: "0 3px 15px rgba(0,0,0,0.2)",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "dark"
                  ? "7px solid #000000"
                  : "7px solid #ffffff",
            }}
            date={exp.date}
            iconStyle={{ background: exp.iconBg || "#E6DEDD" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <Image
                  src={exp.icon}
                  alt={exp.company_name}
                  width={40}
                  height={40}
                  className={`object-contain `}
                />
              </div>
            }
          >
            <div className="space-y-2">
             <h3 className="text-xl font-semibold flex items-center gap-2"> <Building size={18} /> {exp.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                {exp.link ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-500 flex items-center gap-1"
                  >
                    {exp.company_name} <ExternalLink size={14} />
                  </a>
                ) : (
                  exp.company_name
                )}
              </p>

              {exp.location && (
                <p className="text-sm text-gray-400 flex items-center gap-1">
                  <MapPin size={14} /> {exp.location}
                </p>
              )}
              {exp.badge && (
                 <Link 
                 href={exp.badge.link}
                 target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-800 text-xs font-semibold px-2 py-1 rounded-md transition-all duration-300 hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-700 hover:shadow-lg"
  >
    <Star size={12} className="text-yellow-500 transition-transform duration-300 group-hover:rotate-12" />
    <Image
      src={exp.badge.image}
      alt="Badge"
      width={200}
      height={40}
      className="transition-transform duration-300 hover:scale-105"
    />
  </Link>
)}
  <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              {exp.techStack && (
                <div className="flex flex-wrap mt-3 gap-2">
                  {exp.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
