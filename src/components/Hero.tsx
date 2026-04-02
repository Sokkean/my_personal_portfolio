"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Background from "./Background";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* Interactive Background */}
      <Background />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">

        {/* Left Text Content with Linear Motion */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "linear" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Hi, I'm <span className="text-blue-500">Sokkean</span>
          </h1>

          <motion.h2
            className="mt-4 text-xl text-gray-600 dark:text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "linear" }}
          >
            Backend Developer (NestJS & Laravel)
          </motion.h2>

          <motion.p
            className="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: "linear" }}
          >
            I build scalable APIs, database design, and system architecture,
            focusing on NestJS and Laravel with clean code and high performance.
          </motion.p>

          <motion.div
            className="mt-6 flex gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.6, ease: "linear" }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image with Animation */}
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "linear" }}
          className="flex justify-center"
        >
          <Image
            src="/profile.png" // place your image in public folder
            alt="profile"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}