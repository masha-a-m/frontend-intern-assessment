import Image from "next/image";
import { Zap } from "lucide-react";

export default function CapacityDevelopment() {
  const developments = [
    "Tailored Training Programs",
    "Expert-Led Workshops",
    "Personalized Mentorship",
    "Technical Skills Enhancement",
    "Collaborative Learning Environment",
    "Ongoing Support and Resources",
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
  
  {/* Right Image - First on mobile, right on desktop */}
  <div className="w-full lg:w-1/2 order-1 lg:order-2">
    <div className="relative w-full h-[250px] md:h-[405px] rounded-tl-[40px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] overflow-hidden">
      <Image
        src="/images/capacity-img.jpg"
        alt="Capacity Development workshop with professionals"
        fill
        className="object-cover"
      />
    </div>
  </div>

  {/* Left Content - Second on mobile, left on desktop */}
  <div className="lg:w-1/2 order-2 lg:order-1">
    <h2 className="text-[#151515] font-semibold text-3xl md:text-4xl lg:text-[40px] leading-[150%] tracking-[3%] mb-6 font-sans">
      Capacity Development
    </h2>
    
    <p className="text-[#696969] text-[18px] leading-[150%] font-normal mb-8 font-sans">
      At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:
    </p>
    
    <div className="space-y-3">
      {developments.map((item) => (
        <div key={item} className="flex items-center gap-3">
          <div className="ml-0 lg:ml-10">
            <Zap size={20} className="text-[#480F39] fill-[#480F39]" />
          </div>
          <span className="text-[#696969] text-[18px] leading-[150%] font-normal font-sans">
            {item}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>
    </section>
  );
}