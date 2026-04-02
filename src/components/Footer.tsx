"use client";

import { motion } from "framer-motion";
import { SiGithub,SiTelegram } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 pb-8 pt-12 relative z-10 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-8 py-10 bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-colors duration-300">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Sokkean<span className="text-blue-500">.</span>
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
              Backend Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500 hover:shadow-md transition-all border border-gray-200 dark:border-gray-800"
            >
              <SiGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://t.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500 hover:shadow-md transition-all border border-gray-200 dark:border-gray-800"
            >
              <SiTelegram className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Sokkean. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
            <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
