// components/ResponsiveImage.tsx
"use client";

import Image from "next/image";
import TitleSection from "../ui/TitleSection";
import { motion } from "framer-motion";

export default function DynamicSection() {
  return (
    <section className="w-full py-12">
      <TitleSection
        title="Dynamic Home page"
        paragraph="Experience the future of eCommerce with our comprehensive delivery solution. From smart cart systems to inventory management, we make online operations seamless and efficient."
      />

      <motion.div
        className="w-full relative rounded-lg p-4 pb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center max-w-full"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/image/index-page.png"
              alt="Dynamic Home Page Illustration"
              fill
              className="object-contain object-center mt-10 hover-scale"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}