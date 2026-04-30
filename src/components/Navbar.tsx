"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, Info, Folder, Mail, HomeIcon, Briefcase, Activity, Heart, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/useAppStore";

type NavLinkItem = {
  title: string;
  path?: string;
  icon: React.ReactNode;
  action?: () => void;
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setAboutOpen, setResumeOpen } = useAppStore();

  const navLinks: NavLinkItem[] = [
    { title: "Home", path: "#home", icon: <HomeIcon className="w-4 h-4" /> },
    { title: "About", action: () => setAboutOpen(true), icon: <Info className="w-4 h-4" /> },
    { title: "Skills", path: "#skills", icon: <Activity className="w-4 h-4" /> },
    { title: "Projects", path: "#projects", icon: <Folder className="w-4 h-4" /> },
    { title: "Journey", path: "#journey", icon: <Briefcase className="w-4 h-4" /> },
    { title: "Stats", path: "#stats", icon: <Activity className="w-4 h-4" /> },
    { title: "Volunteer", path: "#volunteer", icon: <Heart className="w-4 h-4" /> },
    { title: "Contact", path: "#contact", icon: <Mail className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-neon py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href={"/"}
          className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] transition-all duration-300 tracking-wider font-mono"
        >
          SYS.HWD
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
          {navLinks.map((link, index) => {
            if (link.action) {
              return (
                <button 
                  key={index} 
                  onClick={link.action}
                  className="group relative flex items-center space-x-2 px-3 py-2 text-sm font-mono text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <span className="text-purple-500 group-hover:text-cyan-400 transition-colors duration-300">{link.icon}</span>
                  <span>{link.title}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
                </button>
              )
            }
            return (
              <Link 
                key={index} 
                href={link.path || "#"}
                className="group relative flex items-center space-x-2 px-3 py-2 text-sm font-mono text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <span className="text-purple-500 group-hover:text-cyan-400 transition-colors duration-300">{link.icon}</span>
                <span>{link.title}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
              </Link>
            )
          })}

          {/* Resume Button */}
          <button
            onClick={() => setResumeOpen(true)}
            className="group relative flex items-center gap-2 px-4 py-2 ml-4 bg-cyan-500/10 border border-cyan-500/50 rounded-lg text-cyan-400 font-mono text-sm transition-all duration-300 hover:bg-cyan-500 hover:text-black shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] hover:-translate-y-0.5"
          >
            <FileText className="w-4 h-4" />
            <span>RESUME</span>
            <div className="absolute inset-0 rounded-lg border border-cyan-400/0 group-hover:border-cyan-400/50 group-hover:animate-pulse" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          {/* Mobile Resume Button */}
          <button
            onClick={() => setResumeOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/50 rounded-lg text-cyan-400 font-mono text-xs transition-all duration-300 hover:bg-cyan-500 hover:text-black shadow-[0_0_10px_rgba(0,255,255,0.2)]"
          >
            <FileText className="w-3 h-3" />
            <span>RESUME</span>
          </button>

          <Button 
            variant="ghost" 
            size="icon" 
            className="text-cyan-400 hover:bg-cyan-900/30 hover:text-cyan-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full glass-neon border-t border-cyan-500/20 py-4 flex flex-col px-4 space-y-4 lg:hidden">
          {navLinks.map((link, index) => {
            if (link.action) {
              return (
                <button 
                  key={index} 
                  onClick={() => {
                    link.action!();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-900/20 border border-transparent hover:border-cyan-500/30 transition-all duration-300 font-mono w-full text-left"
                >
                  <span className="text-purple-400">{link.icon}</span>
                  <span>{link.title}</span>
                </button>
              )
            }
            return (
              <Link 
                key={index} 
                href={link.path || "#"}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-900/20 border border-transparent hover:border-cyan-500/30 transition-all duration-300 font-mono"
              >
                <span className="text-purple-400">{link.icon}</span>
                <span>{link.title}</span>
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;