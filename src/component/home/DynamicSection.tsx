// components/ResponsiveImage.tsx
import Image from "next/image";
import TitleSection from "../ui/TitleSection";

export default function DynamicSection() {
  return (
    <section className="w-full py-12 ">
      

    <TitleSection
        title="Dynamic Home page"
        paragraph="Experience the future of eCommerce with our comprehensive delivery solution. From smart cart systems to inventory management, we make online operations seamless and efficient."
      />



        <div className="w-full relative rounded-lg  p-4">
          <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center ">
            <Image
              src="/image/index-page.png"
              alt="Responsive Design Illustration"
              fill
             
              className="object-contain object-center mt-10"
              priority
            />
          </div>
        </div>
    </section>
  );
}