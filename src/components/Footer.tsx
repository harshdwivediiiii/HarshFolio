"use client";
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="relative bg-[#0A0A0C] text-gray-400 py-12 z-10 overflow-hidden">
      {/* Neon Divider Glow */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_15px_rgba(0,255,255,0.8)]" />
      
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo / Branding */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_10px_rgba(138,43,226,0.6)]">
            SYS.HWD
          </span>
          <p className="text-sm mt-2 text-cyan-500/70 font-mono">
            {currentYear} © HARSHVARDHAN DWIVEDI
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <Link href="https://github.com/harshdwivediiiii" target="_blank" className="p-3 rounded-full bg-cyan-900/20 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(0,255,255,0.6)] group">
            <Github className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          </Link>
          <Link href="https://www.linkedin.com/in/harshvardhan-d-86b375290" target="_blank" className="p-3 rounded-full bg-purple-900/20 border border-purple-500/30 hover:border-purple-400 text-purple-400 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(138,43,226,0.6)] group">
            <Linkedin className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          </Link>
          <Link href="https://x.com/Harshvdwivediii" target="_blank" className="p-3 rounded-full bg-pink-900/20 border border-pink-500/30 hover:border-pink-400 text-pink-400 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(255,0,255,0.6)] group">
            <Twitter className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          </Link>
          <Link href="mailto:harshvardhandwivedi18@gmail.com" className="p-3 rounded-full bg-cyan-900/20 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(0,255,255,0.6)] group">
            <Mail className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
