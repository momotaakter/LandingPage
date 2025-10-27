"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageSection() {
  return (
    <main className="w-full flex flex-col space-y-20 py-16">
      {/* ---------- Section 1 ---------- */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-12">
        {/* Left: Image */}
        <motion.div
          className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-[400px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/image/manage-img2.png"
            alt="Section 1 Image"
            fill
            className="object-cover rounded-lg shadow-lg hover-scale"
            priority
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Creative Design Section
          </motion.h2>
          <motion.p
            className="text-gray-600 text-base sm:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            This section displays an image on the left and text on the right.
            The layout remains fully responsive across all screen sizes.
          </motion.p>
        </motion.div>
      </section>

      {/* ---------- Section 2 ---------- */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 px-6 md:px-12">
        {/* Right: Image */}
        <motion.div
          className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-[400px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/image/manage-img2.png"
            alt="Section 2 Image"
            fill
            className="object-cover rounded-lg shadow-lg hover-scale"
          />
        </motion.div>

        {/* Left: Text */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Responsive Layout Section
          </motion.h2>
          <motion.p
            className="text-gray-600 text-base sm:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            In this section, the text is on the left and the image is on the
            right. On smaller screens, both stack vertically for perfect
            responsiveness.
          </motion.p>
        </motion.div>
      </section>
    </main>
  );
}
