
"use client";
import Image from "next/image";
import TitleSection from '../ui/TitleSection';
import FeaturesSection from "./FeaturesSection";
import ResponsiveSection from './ResponsiveSection';
import DynamicSection from "./DynamicSection";
import StanderdEcommerse from "./StanderdEcommerse";
import ImageSection from "./ImageSection";



export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-6 md:px-16 py-4 shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/next.svg" alt="Home Delivery Logo" width={36} height={36} />
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            <span className="text-black">HOME</span>
            <span className="text-[#00BCBA]"> DELIVERY</span>
          </h1>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-teal-500 transition">
            Features
          </a>
          <a href="#" className="hover:text-teal-500 transition">
            Documentation
          </a>

   <a href="#" className="bg-teal-500 text-white font-medium px-4 py-2 rounded-md hover:bg-teal-600 transition">
       Live Preview
          </a>



        </nav>

       
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-12 md:py-20">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left md:text-justify space-y-4">
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
        <div className="flex gap-5 justify-center md:justify-start">
        <button className="btn-primary">Live Preview</button>
        <button className="btn-primary">Get Started</button>
        </div>


        </div>

        {/* Image - Appears on top in mobile, larger size */}
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <Image
            src="/image/delivery-boy.png"
            alt="Home Delivery Illustration"
            width={500}
            height={400}
            className="w-full max-w-xs md:max-w-lg"
          />
        </div>
      </section>

    <TitleSection
        title="Our General Features"
        paragraph="Experience the future of eCommerce with our comprehensive delivery solution. From smart cart systems to inventory management, we make online operations seamless and efficient."
      />


<FeaturesSection></FeaturesSection>

<ResponsiveSection></ResponsiveSection>
 <DynamicSection></DynamicSection>
<StanderdEcommerse></StanderdEcommerse>
<ImageSection></ImageSection>



    </main>
  );
}
