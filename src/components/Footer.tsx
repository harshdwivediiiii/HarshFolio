"use client";
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Folder, Info, ContactIcon } from "lucide-react";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-[#121212]">
      <div className="container p-12 flex flex-col md:flex-row justify-between items-center">
        <span className="text-lg font-semibold hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Harshfolio</span>
        
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link
            href="/about"
            className="flex items-center gap-2 transition-colors hover:text-primary-500 dark:hover:text-primary-400 hover:scale-105"
          >
            <Info className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
            About
          </Link>
          <Link
            href="/projects"
            className="flex items-center gap-2 transition-colors hover:text-primary-500 dark:hover:text-primary-400 hover:scale-105"
          >
            <Folder className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
            Projects
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 transition-colors hover:text-primary-500 dark:hover:text-primary-400 hover:scale-105"
          >
            <ContactIcon className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
            Contact
          </Link>
        </div>
        {/* Social Links */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="https://github.com/harshdwivediiiii" target="_blank">
            <Github className="w-6 h-6 hover:text-primary-500 dark:hover:text-primary-400 transition-colors hover:scale-110" />
          </Link>
          <Link href="https://www.linkedin.com/in/harshvardhan-dwivedi-86b375290" target="_blank">
            <Linkedin className="w-6 h-6 hover:text-primary-500 dark:hover:text-primary-400 transition-colors hover:scale-110" />
          </Link>
          <Link href="mailto:harshvardhandwivedi18@gmail.com">
            <Mail className="w-6 h-6 hover:text-primary-500 dark:hover:text-primary-400 transition-colors hover:scale-110" />
          </Link>
        </div>
        {/* Copyright */}
        <p className="text-sm mt-4 md:mt-0 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
          © {currentYear} Harshvardhan Dwivedi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
