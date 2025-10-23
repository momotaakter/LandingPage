// components/HeroSection.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function LastSection() {

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center text-center">
      {/* Background Image */}
      <Image
        src="/image/hero/delivery-bg.jpg"
        alt="Delivery Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-8">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-snug sm:leading-tight">
          Purchase The HomeDelivery & <br className="hidden sm:block" />
          Create Beautiful Online Store
        </h1>
        <div className="mt-6">
          <button className="bg-[#00D8D6] text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-[#00b5b3] transition">
            Buy It Now
          </button>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="absolute bottom-6 right-6">
        <button
          type="button"
          onClick={scrollToTop}
          className="bg-[#00D8D6] p-3 rounded-full shadow-md hover:bg-[#00b5b3] transition"
          title="Scroll to top"
          aria-label="Scroll to top of page"
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
        </button>
      </div>
    </section>
  );
}
