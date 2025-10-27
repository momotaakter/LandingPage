// components/ResponsiveImage.tsx
"use client";

import Image from "next/image";
import TitleSection from "../ui/TitleSection";
import { motion } from "framer-motion";

export default function DynamicSection() {
  return (
    <section className="w-full  flex flex-col items-center pb-10">
      <TitleSection
        title="Dynamic Home page"
        paragraph="Experience the future of eCommerce with our comprehensive delivery solution. From smart cart systems to inventory management, we make online operations seamless and efficient."
      />

      <motion.div
        className="relative rounded-lg p-4 pb-6 flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* 🔹 Fixed-size image container */}
          <motion.div
            className="relative w-[400px] h-[600px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/image/dynamic.png"
              alt="Dynamic Home Page Illustration"
              fill
              className="object-cover object-center rounded-lg shadow-lg"
              priority
            />




          </motion.div>

 


        </motion.div>

   <motion.button
            className="mt-10 bg-[#00D8D6] text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-[#00b5b3] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 25px rgba(0, 216, 214, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Demo
          </motion.button>




      </motion.div>
    </section>
  );
}
