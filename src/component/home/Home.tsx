"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // 🟢 Framer Motion import
import TitleSection from "../ui/TitleSection";
import FeaturesSection from "./FeaturesSection";
import ResponsiveSection from "./ResponsiveSection";
import DynamicSection from "./DynamicSection";
import StanderdEcommerse from "./StanderdEcommerse";
import ImageSection from "./ImageSection";
import PaymentSection from "./PaymentSection";
import AnotherFeaturesSection from "./AnotherFeaturesSection";
import LastSection from "./LastSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col overflow-x-hidden">
     

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-12 md:py-20">
        {/* Text Content with animation */}
        <motion.div
          className="flex-1 text-center md:text-left md:text-justify space-y-4"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#00BABB]">
            Welcome To Home Delivery
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify md:text-left">
            Home Delivery is a one-stop solution to all your needs related to an
            eCommerce Store. From smart-cart systems to inventory management,
            Home delivery makes the online operation and management of an
            eCommerce Store a cakewalk.
          </p>
          <p className="text-gray-600 leading-relaxed text-justify md:text-left">
            With the cutting-edge page design and easy-to-navigate layout, this
            is a full-fledged eCommerce application that allows you to customize
            its pages according to your design needs.
          </p>
          <p className="text-gray-600 leading-relaxed text-justify md:text-left">
            Have a look at the live preview of this top-notch application by
            clicking below.
          </p>
          <motion.div
            className="flex gap-5 justify-center md:justify-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="btn-primary"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0, 188, 182, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Live Preview
            </motion.button>
            <motion.button
              className="btn-primary"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0, 188, 182, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image with animation */}
        <motion.div
          className="flex-1 flex justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/image/delivery-boy.png"
            alt="Home Delivery Illustration"
            width={500}
            height={400}
            className="w-full max-w-xs md:max-w-lg"
          />
        </motion.div>
      </section>

      <TitleSection
        title="Our General Features"
        paragraph="Experience the future of eCommerce with our comprehensive delivery solution. From smart cart systems to inventory management, we make online operations seamless and efficient."
      />

      <FeaturesSection />
      <ResponsiveSection />
      <DynamicSection />
      <StanderdEcommerse />
      <ImageSection />
      <PaymentSection />
      <AnotherFeaturesSection />
      <LastSection />
    </main>
  );
}
