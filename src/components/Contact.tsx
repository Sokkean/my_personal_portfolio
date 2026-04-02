"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { SiTelegram } from "react-icons/si";

const contactMethods = [
  {
    icon: <Phone className="w-8 h-8 text-blue-500" />,
    title: "Phone",
    value: "+1 (234) 567-890", // Placeholder, user will change it
    link: "tel:+1234567890",
    description: "Mon-Fri from 8am to 5pm.",
    delay: 0.1,
  },
  {
    icon: <Mail className="w-8 h-8 text-green-500" />,
    title: "Email",
    value: "hello@example.com",
    link: "mailto:hello@example.com",
    description: "Our friendly team is here to help.",
    delay: 0.2,
  },
  {
    icon: <SiTelegram className="w-8 h-8 text-[#26A5E4]" />,
    title: "Telegram",
    value: "@your_telegram",
    link: "https://t.me/your_telegram",
    description: "Send me a direct message anytime.",
    delay: 0.3,
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent dark:bg-gray-900 transition-colors duration-300">
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
            Get In <span className="text-blue-500">Touch</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Whether you have a question about a complex backend integration, want to discuss an API structure, or just want to say hi, feel free to drop a message.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.a
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: method.delay }}
              className="bg-white dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all hover:-translate-y-1 group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {method.title}
              </h3>
              <p className="text-blue-500 font-medium mb-3">
                {method.value}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {method.description}
              </p>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
