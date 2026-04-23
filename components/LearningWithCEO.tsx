import Image from "next/image";
import { Zap } from "lucide-react";

export default function LearningWithCEO() {
  const features = [
    "Strategic Career Guidance",
    "Leadership Development",
    "CV Development",
    "Sustainability Leadership",
    "Communication Skills",
    "Business Model",
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#EF435333] rounded-2xl p-6 md:p-10">
          <p className="text-[#1671D9] italic text-[20px] leading-[130%] font-sans mb-2">
            Learning with Our CEO:
          </p>
          
          <h2 className="text-[#571244] italic text-2xl md:text-3xl lg:text-[32px] leading-[130%] mb-6 font-sans">
            Transformation Hub With Jite Newton
          </h2>
          
          <p className="text-[#151515] text-[18px] leading-[150%] font-normal mb-8 font-sans">
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you're seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Image */}
            <div className="lg:w-1/2">
              <div className="relative w-full h-[250px] md:h-[340px] rounded-lg overflow-hidden">
                <Image
                  src="/images/transformation-hub-img.jpg"
                  alt="CEO Jite Newton speaking at Transformation Hub webinar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Features Grid */}
            <div className="lg:w-1/2">
              <div className="bg-[#FFFFFF4D] rounded-md p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <div key={feature} className="bg-white rounded-xl p-2 flex items-center gap-3">
                      <Zap size={26} className="text-[#571244] fill-slate-200"  />  
                      <span className="text-[#151515] text-[14px] md:text-[13px] leading-[150%] font-normal font-sans">
                        {feature}
                      </span>
                    </div>
                  ))}

                </div>
                
                <button className="mt-6 bg-[#571244] hover:bg-[#6b1653] rounded-md px-6 py-2.5 flex items-center gap-2 transition-colors">
                  <span className="text-white font-semibold text-[16px] leading-[150%] font-sans">
                    Learn More
                  </span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.16666 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      transform="rotate(-45 10 10)"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}