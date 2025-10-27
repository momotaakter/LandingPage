// components/HeroSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LastSection() {

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden max-w-full">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src="/image/hero/delivery-bg.jpg"
          alt="Delivery Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 px-4 sm:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-snug sm:leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Purchase The HomeDelivery & <br className="hidden sm:block" />
          Create Beautiful Online Store
        </motion.h1>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-[#00D8D6] text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-[#00b5b3] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 25px rgba(0, 216, 214, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Buy It Now
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll to top button */}
      <motion.div
        className="absolute bottom-6 right-6"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        viewport={{ once: true }}
      >
        <motion.button
          type="button"
          onClick={scrollToTop}
          className="bg-[#00D8D6] p-3 rounded-full shadow-md hover:bg-[#00b5b3] transition-all duration-300"
          title="Scroll to top"
          aria-label="Scroll to top of page"
          whileHover={{ 
            scale: 1.2,
            boxShadow: "0 5px 15px rgba(0, 216, 214, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
}
