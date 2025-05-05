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
              background: theme === "dark" ? "#1a1a1a" : "#fff",
              color: theme === "dark" ? "#fff" : "#000",
              boxShadow: "0 3px 15px rgba(0,0,0,0.2)",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "dark"
                  ? "7px solid #1a1a1a"
                  : "7px solid #fff",
            }}
            date={exp.date}
            iconStyle={{ background: exp.iconBg }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <Image
                  src={exp.icon}
                  alt={exp.company_name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            }
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {exp.company_name}
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
