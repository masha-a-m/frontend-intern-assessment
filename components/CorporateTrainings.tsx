import Image from "next/image";
import { Zap } from "lucide-react";

export default function CorporateTrainings() {
  const trainings = [
    "Leadership Training",
    "Strategic Planning and Implementation",
    "Project Management",
    "Sustainability Training",
    "Customised Training",
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
  
  {/* Mobile: Image first, then content */}
  
  {/* Right Image - First on mobile, right on desktop */}
  <div className="w-full lg:w-1/2 order-1 lg:order-2">
    <div className="relative w-full h-[250px] md:h-[346px] rounded-tl-[56px] rounded-tr-[24px] rounded-br-[23px] rounded-bl-[12px] overflow-hidden">
      <Image
        src="/images/corporate-training-img.jpg"
        alt="Corporate Training Session with team collaboration"
        fill
        className="object-cover"
      />
    </div>
  </div>

  {/* Left Content - Second on mobile, left on desktop */}
  <div className="lg:w-1/2 order-2 lg:order-1">
    <h2 className="text-[#151515] font-semibold text-3xl md:text-4xl lg:text-[40px] leading-[150%] tracking-[3%] mb-6 font-sans">
      Corporate Trainings
    </h2>
    
    <p className="text-[#696969] text-[18px] leading-[150%] font-normal mb-8 font-sans">
      Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.
    </p>
    
    <div className="space-y-3">
      {trainings.map((training) => (
        <div key={training} className="flex items-center gap-3">
          <div className="ml-0 lg:ml-10">
            <Zap size={20} className="text-[#480F39] fill-[#480F39]" />
          </div>
          <span className="text-[#696969] text-[18px] leading-[150%] font-normal font-sans">
            {training}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>
    </section>
  );
}