"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", value: "15+" },
  { label: "Open Source PRs", value: "10+" },
  { label: "Hackathons Attended", value: "3" },
  { label: "Years Coding", value: "2+" },
];

const StatsSection: React.FC = () => {
  return (
    <div className="py-12 bg-white dark:bg-black relative my-8 overflow-hidden z-10 w-full">
      <div className="absolute inset-0 bg-violet-600/5 dark:bg-violet-900/10 skew-y-3 transform origin-bottom-left z-0"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-[#111] shadow-xl border border-gray-100 dark:border-gray-800 backdrop-blur-sm relative group overflow-hidden"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-blue-500 opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
              <h3 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-semibold text-sm sm:text-base uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
