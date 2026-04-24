"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Aisha Yusuf",
    subtitle: "Founder, CraftHub NG",
    text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    image: "/images/aisha.png"
  },
  {
    name: "John Davies",
    subtitle: "Marketing Manager, E-Commerce Emporium",
    text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    image: "/images/john.png"
  },
  {
    name: "Chinonse Nwankwo",
    subtitle: "HR Director, FutureTech Solutions",
    text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    image: "/images/chinonso.png"
  },
  {
    name: "Chioma Okafor",
    subtitle: "Creative Director, DesignHub",
    text: "The Creative and Digital Media services at Tobams Group brought our ideas to life. Simple, creative, and impactful – exactly what we needed for our projects.",
    image: "/images/fourth-img.jpg"
  }
];

export default function Testimonials() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 350;

  const nextTestimonial = () => {
    setScrollPosition(prev => Math.min(prev + cardWidth, (testimonials.length - 1) * cardWidth));
  };

  const prevTestimonial = () => {
    setScrollPosition(prev => Math.max(prev - cardWidth, 0));
  };

  return (
    <section className="bg-[#F5F5F5] py-16 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[#151515] font-bold text-3xl md:text-4xl lg:text-[40px] leading-[130%] text-center mb-12 font-sans">
          Testimonials
        </h2>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-300"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="min-w-[300px] md:min-w-[350px] bg-white border-l-4 border-[#EF4353] rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#151515] font-semibold text-[16px] leading-[150%] font-sans">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#696969] text-[14px] leading-[150%] font-normal font-sans">
                      {testimonial.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-[#151515] text-[18px] leading-[150%] font-normal font-sans">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-end gap-3 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-8 h-8 bg-[#F043541A] rounded-lg flex items-center justify-center hover:bg-[#F0435433] transition-colors"
            >
              <ChevronLeft size={20} className="text-[#EF4353]" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-8 h-8 bg-[#F043541A] rounded-lg flex items-center justify-center hover:bg-[#F0435433] transition-colors"
            >
              <ChevronRight size={20} className="text-[#EF4353]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}