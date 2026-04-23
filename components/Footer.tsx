import Image from "next/image";
import { Linkedin, Instagram, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      {/* Top Section - Call to Action */}
      <div className="bg-[#1D0617] py-10 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-[#f3f3f3] text-[18px] leading-[150%] font-normal font-sans">
              Ready to be a part of something extraordinary?
            </p>
            <h3 className="text-[#f3f3f3] text-2xl md:text-3xl lg:text-[30px] mt-2 font-semibold leading-[130%] font-sans">
              Let's work together to create a difference
            </h3>
          </div>
          <button className="bg-[#571244] hover:bg-[#6b1653] rounded-md px-6 py-3 transition-colors self-start md:self-end">
  <span className="text-[#f1f1f1] font-semibold text-[18px] font-sans">
    Get In Touch
  </span>
</button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#11040E] py-8 px-4 md:px-8 lg:px-16 xl:px-24 border-t-2 border-[#b1afaf]">
        <div className="max-w-[1440px] mx-auto">
          {/* Footer Grid - 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-3 mt-4">
            {/* Column 1 - Logo & Info */}
            <div>
              <div className="relative w-[188px] h-[113px] mb-1 -mt-7 ">
                <Image
                  src="/images/logo.png"
                  alt="Tobams Group Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-[#cac9c9] text-[16px] leading-[150%] tracking-[3%] font-normal mb-4 font-sans">
                Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
              </p>
              <div className="flex gap-5">
  {/* LinkedIn */}
  <button className="bg-white p-2.5 rounded-full hover:bg-gray-100 transition-colors" aria-label="LinkedIn">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#151515]">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  </button>
  
  {/* Instagram */}
  <button className="bg-white p-2.5 rounded-full hover:bg-gray-100 transition-colors" aria-label="Instagram">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="black" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#151515]">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  </button>
  
  {/* Twitter/X */}
  <button className="bg-white p-2.5 rounded-full hover:bg-gray-100 transition-colors" aria-label="X">
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#151515" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M17 1l-5 6-5-6H2l8 9-8 9h5l5-6 5 6h5l-8-9 8-9h-5z" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
</button>
</div>
            </div>

            {/* Column 2 - What We Do */}
            <div>
              <h4 className="text-[#cac9c9] font-bold text-[20px] leading-[100%] mb-4 font-sans">
                What We Do
              </h4>
              <div className="space-y-3">
                {[
                  "Sustainability Services",
                  "Strategy Planning and Implementation",
                  "Tech Talent Solutions",
                  "Training and Development",
                  "IT Consulting Services",
                  "Social Impact",
                  "Talent Recruitment",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-[#cac9c9] text-[16px] leading-[150%] tracking-[3%] font-normal hover:text-[#EF4353] transition-colors font-sans"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3 - Company */}
            <div>
              <h4 className="text-[#cac9c9] font-bold text-[20px] leading-[100%] mb-4 font-sans">
                Company
              </h4>
              <div className="space-y-3">
                {[
                  "About",
                  "Jobs",
                  "Projects",
                  "Our Founder",
                  "Business Model",
                  "The Team",
                  "Contact Us",
                  "Blog",
                  "FAQs",
                  "Testimonials",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-[#cac9c9] text-[16px] leading-[150%] tracking-[3%] font-normal hover:text-[#EF4353] transition-colors font-sans"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 4 - Solution */}
            <div>
              <h4 className="text-[#cac9c9] font-bold text-[20px] leading-[100%] mb-4 font-sans">
                Solution
              </h4>
              <div className="space-y-3">
                {[
                  "Tobams Group Academy",
                  "Help a Tech Talent",
                  "Campus Ambassadors Program",
                  "Join Our Platform",
                  "Pricing",
                  "Book a Consultation",
                  "Join Our Slack Community",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-[#cac9c9] text-[16px] leading-[150%] tracking-[3%] font-normal hover:text-[#EF4353] transition-colors font-sans"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Registered Offices Box */}
          <div className="bg-[#FFFFFF0F] rounded-lg px-12 py-8 mb-6 mt-16">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Left Section - Offices */}
              <div className="lg:w-4/5">
                <h4 className="text-[#cac9c9] font-bold text-[20px] leading-[100%] mb-4 font-sans">
                  Registered Offices
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[#EF4353] font-semibold text-[16px] leading-[150%] mb-2 font-sans">
                      United Kingdom
                    </p>
                    <p className="text-[#cac9c9] text-[16px] leading-[150%] font-normal font-sans">
                      07451196 (Registered by Company House)<br />
                      Vine Cottages, 215 North Street, Romford,<br />
                      Essex, United Kingdom, RM1 4QA
                    </p>
                  </div>
                  <div>
                    <p className="text-[#EF4353] font-semibold text-[16px] leading-[150%] mb-2 font-sans">
                      Nigeria
                    </p>
                    <p className="text-[#cac9c9] text-[16px] leading-[150%] font-normal font-sans">
                      RC 1048722 (Registered by the Corporate Affairs Commission)<br />
                      4, Muaz Close, Angwar-Rimi
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Section - Contact */}
              <div className="lg:w-1/5">
                <h4 className="text-[#cac9c9] font-bold text-[20px] leading-[100%] mb-8 font-sans">
                  Contact Information
                </h4>
                <div className="space-y-4 pr-4">
                  <div className="flex items-center gap-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="#EF4353" 
                      stroke="black" 
                      strokeWidth="1" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="w-5 h-5 flex-shrink-0"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 7L2 7" />
                    </svg>
                    <a href="mailto:theteam@tobamsgroup.com" className="text-[#cac9c9] text-[16px] leading-[150%] tracking-[3%] font-normal hover:underline font-sans">
                      theteam@tobamsgroup.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={20} className="text-[#EF4353] fill-[#EF4353]" />
                    <a href="tel:+447886600748" className="text-[#cac9c9] text-[16px] leading-[150%] tracking-[3%] font-normal hover:underline font-sans">
                      +447886600748
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
         <div className="border-t border-[#b8b8b8] border-opacity-12 pt-9 mt-9">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    {/* On mobile: Order 2 (bottom), on desktop: Order 1 (left) */}
    <div className="order-2 md:order-1">
      <p className="text-[#cac9c9] text-[16px] leading-[24px] font-light font-sans text-center md:text-left">
        Copyright ⓒ Tobams Group, 2024. All rights reserved.
      </p>
    </div>
    
    {/* On mobile: Order 1 (top), on desktop: Order 2 (right) */}
    <div className="flex gap-6 md:gap-10 order-1 md:order-2">
      <a href="#" className="text-[#cac9c9] text-[14px] md:text-[16px] leading-[36px] font-light underline underline-offset-0 hover:text-[#EF4353] transition-colors font-sans">
        Terms and Conditions
      </a>
      <a href="#" className="text-[#cac9c9] text-[14px] md:text-[16px] leading-[36px] font-light underline underline-offset-0 hover:text-[#EF4353] transition-colors font-sans">
        Privacy Policy
      </a>
      <a href="#" className="text-[#cac9c9] text-[14px] md:text-[16px] leading-[36px] font-light underline underline-offset-0 hover:text-[#EF4353] transition-colors font-sans">
        Cookies Policy
      </a>
    </div>
  </div>
</div>
        </div>
      </div>
    </footer>
  );
}