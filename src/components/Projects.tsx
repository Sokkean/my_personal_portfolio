"use client";

import { motion } from "framer-motion";
import { Server, Database, ShoppingCart, UtensilsCrossed, ArrowUpRight, GitBranch } from "lucide-react";
import { SiNestjs, SiPostgresql, SiRedis, SiSocketdotio, SiLaravel, SiMysql, SiStripe, SiDocker } from "react-icons/si";
import Image from "next/image";

const projects = [
  {
    title: "Enterprise POS System",
    description: "A robust, highly scalable Point of Sale system built with NestJS and PostgreSQL. Features real-time inventory tracking, complex sales reporting algorithms, and multi-tenant architecture for managing multiple branch locations simultaneously.",
    tags: [
      { name: "NestJS", icon: <SiNestjs className="w-4 h-4 text-[#E0234E]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#4169E1]" /> },
      { name: "TypeORM", icon: <Database className="w-4 h-4 text-gray-500" /> },
      { name: "Redis", icon: <SiRedis className="w-4 h-4 text-[#DC382D]" /> },
      { name: "Sockets", icon: <SiSocketdotio className="w-4 h-4 text-black dark:text-white" /> }
    ],
    icon: <ShoppingCart className="w-8 h-8 text-blue-500" />,
    link: "#",
    github: "#",
  },
  {
    title: "Food Delivery Platform",
    description: "High-performance backend for a scalable food delivery application. Developed with Laravel, featuring complex geolocation querying for driver matching, real-time order status updates via WebSockets, and secure payment gateway integrations.",
    tags: [
      { name: "Laravel", icon: <SiLaravel className="w-4 h-4 text-[#FF2D20]" /> },
      { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#4479A1]" /> },
      { name: "WebSockets", icon: <SiSocketdotio className="w-4 h-4 text-black dark:text-white" /> },
      { name: "Stripe API", icon: <SiStripe className="w-4 h-4 text-[#008CDD]" /> },
      { name: "Docker", icon: <SiDocker className="w-4 h-4 text-[#2496ED]" /> }
    ],
    icon: <UtensilsCrossed className="w-8 h-8 text-orange-500" />,
    link: "#",
    github: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-transparent dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Featured <span className="text-blue-500">Projects</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Here are some of the complex backend systems I have architected and built. My focus is on creating reliable, scalable, and high-performance server logic that can handle thousands of concurrent transactions.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all group overflow-hidden relative"
            >
              {/* Background gradient blur */}
              <div className="absolute top-0 right-0 p-12 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div className="w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                  {project.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium flex items-center gap-2 border border-gray-100 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-colors shadow-sm"
                    >
                      {tag.icon}
                      {tag.name}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <GitBranch className="w-5 h-5" />
                    <span>Source Code</span>
                  </a>
                  <a 
                    href={project.link} 
                    className="flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors ml-auto font-medium"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
