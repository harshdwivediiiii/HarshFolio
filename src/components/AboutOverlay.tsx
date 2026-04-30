"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, stats } from "@/constants/Index";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { useAppStore } from "@/store/useAppStore";

const StatItem = ({ label, value, suffix, isVisible }: { label: string, value: number, suffix: string, isVisible: boolean }) => {
  const count = useCounterAnimation(value, 2000, isVisible);
  return (
    <div className="bg-black/30 p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center transition-all hover:bg-white/5">
      <span className="text-3xl sm:text-4xl font-mono text-cyan-400 font-bold flex items-center drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
        {count}
        {suffix}
      </span>
      <span className="text-xs sm:text-sm text-gray-400 mt-2 uppercase tracking-wider text-center font-semibold">{label}</span>
    </div>
  );
};

export default function AboutOverlay() {
  const { isAboutOpen, setAboutOpen } = useAppStore();

  return (
    <AnimatePresence>
      {isAboutOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={() => setAboutOpen(false)}
        >
          {/* Background glowing circles */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/30 rounded-full blur-[100px] mix-blend-screen" 
          />
          <motion.div 
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ delay: 0.1 }}
            className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-purple-500/30 rounded-full blur-[100px] mix-blend-screen" 
          />

          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-[#0A0A0C]/80 border border-cyan-500/30 p-8 sm:p-10 rounded-3xl backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,255,0.1)] overflow-hidden"
          >
            {/* Inner Glow Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
            
            <button 
              onClick={() => setAboutOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>

            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 neon-text">
              About Me
            </h2>
            
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 font-light">
              {profile.tagline}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <StatItem key={idx} label={stat.label} value={stat.value as number} suffix={stat.suffix} isVisible={isAboutOpen} />
              ))}
            </div>
            
            <div className="mt-10 flex justify-end">
              <button 
                onClick={() => setAboutOpen(false)}
                className="rounded-full border border-cyan-400 bg-cyan-400/10 px-8 py-3 text-sm font-mono text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)]"
              >
                Close System
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
