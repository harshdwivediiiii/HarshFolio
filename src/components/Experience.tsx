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

const Experience = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-10">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Experience
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
                  className={`object-contain ${theme === "dark" ? "invert" : ""}`}
                />
              </div>
            }
          >
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{exp.title}</h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {exp.link ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-500"
                  >
                    {exp.company_name}
                  </a>
                ) : (
                  exp.company_name
                )}
              </p>

              {exp.location && (
                <p className="text-sm text-gray-400">{exp.location}</p>
              )}

              {exp.badge && (
                <span className="inline-block bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {exp.badge}
                </span>
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
