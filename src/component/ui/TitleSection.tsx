// components/TextBlock.tsx
import React from "react";

type TextBlockProps = {
  title: string;
  paragraph: string;
};

export default function TitleSection({ title, paragraph }: TextBlockProps) {
  return (
    <div className="max-w-[900px] text-center mx-auto px-4 pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[120px]">
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight capitalize  text-gray-900">
        {title}
      </h1>

      {/* Paragraph */}
      <p className="mt-4 md:mt-6 lg:mt-8 text-base md:text-lg lg:text-xl leading-relaxed text-gray-600 font-sans capitalize">
        {paragraph}
      </p>
    </div>
  );
}
