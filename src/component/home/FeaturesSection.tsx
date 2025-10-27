// components/ImageSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BoxProps {
  bgColor: string;
  imgSrc: string;
  text: string;
}

const boxes: BoxProps[] = [
  { bgColor: "bg-[#F3FEFE]", imgSrc: "/image/featuresSection/Bootstrap.jpg", text: "Bootsrap v4.00" },
  { bgColor: "bg-[#F3FEFE]", imgSrc: "/image/featuresSection/Bootstrap.jpg", text: "Bootsrap v4.00" },
  { bgColor: "bg-[#F3FEFE]", imgSrc: "/image/featuresSection/Bootstrap.jpg", text: "Bootsrap v4.00" },
  { bgColor: "bg-[#F3FEFE]", imgSrc: "/image/featuresSection/Bootstrap.jpg", text: "Bootsrap v4.00" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1
  }
};

export default function FeaturesSection() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-12">
      <motion.div
        className="max-w-[1200px] mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {boxes.map((box, index) => (
          <motion.div
            key={index}
            className={`${box.bgColor} flex flex-col items-center justify-center py-9 pt-9 rounded-lg shadow-md hover-lift hover-glow cursor-pointer`}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex flex-col items-center justify-center">
              <motion.div
                className="w-20 h-20 sm:w-24 sm:h-24 relative mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={box.imgSrc}
                  alt={box.text}
                  fill
                  className="object-contain"
                />
              </motion.div>
              <motion.p
                className="text-center text-sm sm:text-base font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {box.text}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
