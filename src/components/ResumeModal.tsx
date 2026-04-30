"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/store/useAppStore";
import { Download, X } from "lucide-react";

export default function ResumeModal() {
  const { isResumeOpen, setResumeOpen } = useAppStore();

  return (
    <AnimatePresence>
      {isResumeOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md"
          onClick={() => setResumeOpen(false)}
        >
          {/* Cyberpunk Modal Container */}
          <motion.div
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl h-[85vh] bg-[#0A0A0C]/90 border border-cyan-500/50 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,255,255,0.2)] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-cyan-500/30 bg-cyan-950/20 backdrop-blur-sm">
              <h2 className="text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                SYS.DOSSIER // RESUME
              </h2>
              
              <div className="flex items-center gap-4">
                <a 
                  href="/resume.pdf" 
                  download 
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-black font-mono text-sm transition-all shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] group"
                >
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  DOWNLOAD
                </a>
                
                <button 
                  onClick={() => setResumeOpen(false)}
                  className="p-2 rounded-full bg-white/5 border border-transparent hover:border-pink-500/50 text-gray-400 hover:text-pink-400 transition-all hover:bg-pink-500/10 shadow-[0_0_0_rgba(255,0,255,0)] hover:shadow-[0_0_15px_rgba(255,0,255,0.5)]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Glowing accents */}
            <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_15px_rgba(138,43,226,1)]" />
            <div className="absolute bottom-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_15px_rgba(0,255,255,1)]" />

            {/* PDF Viewer */}
            <div className="flex-1 relative w-full h-full bg-[#050507]">
              {/* Fallback loader in background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin" />
                  <p className="font-mono text-cyan-400/50 text-sm tracking-widest animate-pulse">DECRYPTING...</p>
                </div>
              </div>
              
              <iframe
                src="/resume.pdf"
                className="relative z-10 w-full h-full border-none mix-blend-lighten"
                title="Resume PDF"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
