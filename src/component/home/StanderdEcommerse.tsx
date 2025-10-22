"use client";

import Image from "next/image";
import TitleSection from "../ui/TitleSection";

export default function StanderdEcommerse() {
  return (
    <section className="relative w-full min-h-auto flex flex-col justify-center items-center text-center overflow-hidden pb-20">
      {/* Background image */}
      <Image
        src="/image/ecommerce.png"
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Semi-transparent black overlay */}
      <div className="absolute inset-0 bg-black/90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-8">
        {/* Text */}
         




 <div className="max-w-[900px] text-center mx-auto px-4 pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[120px]]">
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight capitalize text-white">
       Standerd E- Commerse
      </h1>

      {/* Paragraph */}
      <p className="mt-4 md:mt-6 lg:mt-8 text-base md:text-lg lg:text-xl leading-relaxed text-white capitalize">
      Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem ipsum, hold advertisements, editorials, and filler befo
      </p>
    </div>


        {/* Bottom image */}
        <div className="relative w-full max-w-[900px] mt-8">
          <Image
            src="/image/ecommerce.png"
            alt="Showcase"
            width={900}
            height={700}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
