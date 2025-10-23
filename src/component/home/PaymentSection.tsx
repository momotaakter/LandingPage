// components/ImageSection.tsx
"use client";

import Image from "next/image";
import TitleSection from './../ui/TitleSection';

interface BoxProps {
  bgColor: string;
  imgSrc: string;
  text: string;
}

const boxes: BoxProps[] = [
  { bgColor: "bg-[#F3FEFE]", imgSrc: "/image/featuresSection/Bootstrap.jpg", text: "Bootstrap v4.00" },
  { bgColor: "bg-[#F3FEFE]", imgSrc: "/image/featuresSection/Bootstrap.jpg", text: "Bootstrap v4.00" },
  { bgColor: "bg-[#F3FEFE]", imgSrc: "/image/featuresSection/Bootstrap.jpg", text: "Bootstrap v4.00" },
];

export default function PaymentSection() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-12">
        <TitleSection
             title="Multiple internaiton payment system"
             paragraph="Experience the future of eCommerce with our comprehensive delivery solution. From smart cart systems to inventory management, we make online operations seamless and efficient."
           />


      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-center gap-6 pt-9">
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`${box.bgColor} flex flex-col items-center justify-center py-9 rounded-lg shadow-md w-64`}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 relative mb-4">
                <Image
                  src={box.imgSrc}
                  alt={box.text}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-sm sm:text-base font-medium">
                {box.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
