"use client";

import { motion } from "framer-motion";
import { Server, Database, Shield, Zap, Code2, Cpu } from "lucide-react";

const expertise = [
  {
    icon: <Server className="w-7 h-7 text-blue-500 dark:text-blue-400" />,
    title: "Backend Frameworks",
    description: "Architecting scalable applications utilizing NestJS for enterprise-grade Node.js and Laravel for elegant PHP solutions.",
    delay: 0.1,
  },
  {
    icon: <Code2 className="w-7 h-7 text-purple-500 dark:text-purple-400" />,
    title: "API Development",
    description: "Designing and building robust, well-documented RESTful APIs ensuring seamless data pipelines for frontend clients.",
    delay: 0.2,
  },
  {
    icon: <Database className="w-7 h-7 text-emerald-500 dark:text-emerald-400" />,
    title: "Database Architecture",
    description: "Structuring complex schemas, indexing strategies, and optimizing query performance across relational and NoSQL databases.",
    delay: 0.3,
  },
  {
    icon: <Shield className="w-7 h-7 text-red-500 dark:text-red-400" />,
    title: "Security & Auth",
    description: "Implementing hardened authentication workflows, robust authorization guards, and ensuring secure data handling policies.",
    delay: 0.4,
  },
  {
    icon: <Zap className="w-7 h-7 text-yellow-500 dark:text-yellow-400" />,
    title: "Performance Optimization",
    description: "Utilizing deep caching techniques, background queues, and efficient algorithms to guarantee blazing fast microservices.",
    delay: 0.5,
  },
  {
    icon: <Cpu className="w-7 h-7 text-indigo-500 dark:text-indigo-400" />,
    title: "System Architecture",
    description: "Planning long-term logical system layers and applying clean code principles like SOLID to ensure massive scalability.",
    delay: 0.6,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent dark:bg-gray-900 transition-colors duration-300">
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
            About <span className="text-blue-500">Me</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            I am a passionate <strong className="text-gray-900 dark:text-white">Backend Developer</strong> who thrives on building the unseen engines that power modern web applications. While the frontend dictates the look and feel, I focus on the logic, data flow, and architecture that make applications fast, secure, and infinitely scalable.
          </motion.p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
