"use client";
import { useState } from "react";
import { User, ChevronUp, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block w-full bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-24">
          {/* Top Row with Logo and Buttons */}
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="relative w-[188px] h-[73px]">
              <Image
                src="/images/logo.png"
                alt="Tobams Group Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {/* Account Button */}
              <button className="flex items-center gap-2 bg-[#571244] border border-[#571244] rounded-md px-4 py-2 hover:bg-[#6b1653] transition-colors">
                <div className="bg-[#DDD0DA] rounded-full p-1">
                  <User size={16} className="text-[#571244]" strokeWidth={2} />
                </div>
                <span className="text-white font-semibold text-[18px] font-sans">
                  Account
                </span>
                <ChevronDown size={18} className="text-white" />
              </button>
              
              {/* Take Assessment Button */}
              <button className="bg-[#EF4353] border border-[#EF4353] rounded-md px-6 py-2 hover:bg-[#f05a68] transition-colors">
                <span className="text-white font-semibold text-[18px] font-sans">
                  Take Assessment
                </span>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen h-px bg-gray-300" />

          {/* Navigation Links */}
          <div className="flex justify-center items-center gap-8 py-4 flex-wrap">
            {[
              { name: "About", hasIcon: true, active: true },
              { name: "What We Do", hasIcon: true, active: false },
              { name: "Jobs", hasIcon: true, active: false },
              { name: "Projects", hasIcon: false, active: false },
              { name: "TG Academy", hasIcon: false, active: false },
              { name: "Strategic Partnership", hasIcon: false, active: false },
              { name: "Pricing", hasIcon: false, active: false },
              { name: "Book a Consultation", hasIcon: false, active: false },
            ].map((item) => (
              <a
                key={item.name}
                href="#"
                className={`flex items-center gap-1 text-[18px] font-sans transition-colors ${
                  item.active
                    ? "text-[#571244] font-semibold border-b-2 border-[#571244] pb-1"
                    : "text-[#151515] font-normal hover:text-[#571244]"
                }`}
              >
                {item.name}
                {item.hasIcon && <ChevronDown size={16} />}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center p-4 bg-white">
        <div className="relative w-[140px] h-[54px]">
          <Image
            src="/images/logo.png"
            alt="Tobams Group Logo"
            fill
            className="object-contain"
          />
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="bg-[#151515] rounded-md p-2"
        >
          <Menu size={24} className="text-white" />
        </button>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}