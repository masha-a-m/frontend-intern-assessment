import Image from "next/image";
import { Zap } from "lucide-react";

export default function PersonalisedTraining() {
  const trainings = [
    "Leadership Development",
    "Soft Skills Development",
    "Industry Specific Knowledge",
    "Technical Skills Enhancement",
    "Time Management and Productivity",
    "Career Development",
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-[250px] md:h-[378px] rounded-tl-[33px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] overflow-hidden">
            <Image
              src="/images/personalised-img.jpg"
              alt="Personalised Individual Training Session one-on-one mentoring"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2">
          <h2 className="text-[#151515] font-semibold text-3xl md:text-4xl lg:text-[40px] leading-[150%] tracking-[3%] mb-6 font-sans">
            Personalised Individual Training
          </h2>
          
          <p className="text-[#696969] text-[18px] leading-[150%] font-normal mb-8 font-sans">
            Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.
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