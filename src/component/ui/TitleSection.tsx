// components/TextBlock.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

type TextBlockProps = {
  title: string;
  paragraph: string;
};

export default function TitleSection({ title, paragraph }: TextBlockProps) {
  return (
    <motion.div
      className="max-w-[900px] text-center mx-auto px-4 pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[120px]"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h1
        className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight capitalize text-gray-900"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        {title}
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="mt-4 md:mt-6 lg:mt-8 text-base md:text-lg lg:text-xl leading-relaxed text-gray-600 font-sans capitalize"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.3 }
        }}
      >
        {paragraph}
      </motion.p>
    </motion.div>
  );
}
