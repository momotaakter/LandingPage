"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between  py-4 px-4 sm:px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-1 text-2xl font-bold">
          <span className="text-black">HOME</span>
          <span className="text-[#00BABB]">DELIVERY</span>
              


        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-[#00BABB] transition">Features</a>
          <a href="#" className="hover:text-[#00BABB] transition">Documentation</a>
          <button className="bg-[#00BABB] text-white px-5 py-2 rounded-md hover:bg-[#00a9a9] transition">
            Live Preview
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            <a href="#" className="hover:text-[#00BABB]">Features</a>
            <a href="#" className="hover:text-[#00BABB]">Documentation</a>
            <button className="bg-[#00BABB] text-white px-5 py-2 rounded-md hover:bg-[#00a9a9] transition">
              Live Preview
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
