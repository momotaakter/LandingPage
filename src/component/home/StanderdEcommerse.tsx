"use client";

import Image from "next/image";
import TitleSection from "../ui/TitleSection";
import { motion } from "framer-motion";

export default function StanderdEcommerse() {
  return (
    <section className="relative w-full min-h-auto flex flex-col justify-center items-center text-center overflow-hidden pb-20 max-w-full">
      {/* Background image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src="/image/ecommerce.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Semi-transparent black overlay */}
      <div className="absolute inset-0 bg-black/90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-8">
        {/* Text */}
        <motion.div
          className="max-w-[900px] text-center mx-auto px-4 pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[120px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.h1
            className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight capitalize text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Standerd E- Commerse
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="mt-4 md:mt-6 lg:mt-8 text-base md:text-lg lg:text-xl leading-relaxed text-white capitalize"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem ipsum, hold advertisements, editorials, and filler befo
          </motion.p>
        </motion.div>

        {/* Bottom image */}
        <motion.div
          className="relative w-full max-w-[900px] mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/image/ecommerce.png"
            alt="Showcase"
            width={900}
            height={700}
            className="w-full h-auto rounded-lg shadow-lg object-cover hover-scale"
          />
        </motion.div>
      </div>
    </section>
  );
}
