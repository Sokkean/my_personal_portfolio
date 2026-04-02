"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 md:left-6 md:right-6 lg:left-0 lg:right-0 max-w-6xl lg:mx-auto bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] z-50 text-zinc-900 dark:text-zinc-100 transition-all duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <h1 className="font-bold text-xl">Sokkean</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {menu.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="hover:text-blue-500">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button and Theme Toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-transparent px-4 pb-4 space-y-3">
          {menu.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                onClick={() => setOpen(false)}
                className="block"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}