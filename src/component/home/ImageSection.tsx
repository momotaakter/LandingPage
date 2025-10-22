"use client";

import Image from "next/image";


export default function ImageSection() {
  return (
    <main className="w-full flex flex-col space-y-20 py-16">
      {/* ---------- Section 1 ---------- */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-12">
        {/* Left: Image */}
        <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-[400px]">
          <Image
            src="/image/manage-img2.png"
            alt="Section 1 Image"
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Creative Design Section
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            This section displays an image on the left and text on the right.
            The layout remains fully responsive across all screen sizes.
          </p>
        </div>
      </section>

      {/* ---------- Section 2 ---------- */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 px-6 md:px-12">
        {/* Right: Image */}
        <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-[400px]">
          <Image
            src="/image/manage-img2.png"
            alt="Section 2 Image"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Left: Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Responsive Layout Section
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            In this section, the text is on the left and the image is on the
            right. On smaller screens, both stack vertically for perfect
            responsiveness.
          </p>
        </div>
      </section>
    </main>
  );
}
