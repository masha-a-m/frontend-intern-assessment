import Image from "next/image";
import { Zap } from "lucide-react";

export default function ManagementDevelopment() {
  const programs = [
    "Enhanced Leadership Skills",
    "Improved Employee Engagement",
    "Stronger Organisational Culture",
    "Sustainable Growth",
  ];

  return (
    <section className="bg-[#F5F5F5] py-16 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#2C0922] rounded-[20px] p-6 md:p-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[639px] rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[8px] overflow-hidden">
                <Image
                  src="/images/management-dvlp-img.jpg"
                  alt="Management Development Program for corporate leaders"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2">
              <h2 className="text-white font-semibold text-3xl md:text-4xl lg:text-[40px] leading-[150%] tracking-[3%] mb-6 font-sans">
                Management Development Program
              </h2>
              
              <p className="text-white text-[18px] leading-[150%] font-normal mb-8 font-sans">
                Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high-performing leaders they need to thrive.
                <br /><br />
                Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities designed to improve leadership, strategic thinking, communication, and other essential managerial competencies for corporate organisations.
              </p>
              
              <div className="space-y-4">
                {programs.map((program) => (
                  <div key={program} className="bg-[#8F6182] rounded-lg px-4 py-2 flex items-center gap-3 w-full md:w-[560px] h-10">
                    <Zap size={20} className="text-white fill-white" />
                    <span className="text-white text-[16px] leading-[150%] font-normal font-sans">
                      {program}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}