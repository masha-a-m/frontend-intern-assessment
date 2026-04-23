import Image from "next/image";

export default function LearningManagement() {
  const courses = [
    "Business Analysis",
    "Design Thinking",
    "Effective Communication",
    "Entrepreneurship",
    "Career Development",
    "Business Model",
  ];

  return (
    <section className="bg-[#5712441A] py-16 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 items-center">
  
  {/* Mobile: Heading first */}
  <div className="block lg:hidden w-full">
    <h2 className="text-[#571244] font-semibold text-3xl md:text-4xl leading-[150%] tracking-[3%] mb-6 font-sans text-center">
      Learning Management System
    </h2>
  </div>

  {/* Left Image */}
  <div className="lg:w-1/2 flex justify-center">
    <div className="relative w-[300px] h-[300px] md:w-[456px] md:h-[456px] lg:w-[557px] lg:h-[568px] rounded-full overflow-hidden">
      <Image
        src="/images/lms-img.jpg"
        alt="Learning Management System Platform Interface"
        fill
        className="object-cover"
      />
    </div>
  </div>

  {/* Right Content */}
  <div className="lg:w-1/2">
    {/* Desktop heading - hidden on mobile */}
    <h2 className="hidden lg:block text-[#571244] font-semibold text-3xl md:text-4xl lg:text-[30px] leading-[150%] tracking-[3%] mb-6 font-sans">
      Learning Management System
    </h2>
    
    <div className="bg-[#5712441A] rounded-lg p-6">
      <p className="text-[#151515] text-[18px] leading-[150%] font-normal mb-6 font-sans">
        TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents
        on their learning journey. From technical courses covering the latest programming languages
        and development frameworks to soft skills training in leadership, effective communication and
        project management, TG Academy offers a wide range of courses to cater to diverse learning needs.
        With accessible and interactive learning materials, individuals can enhance their skills and stay
        ahead in today's competitive tech landscape.
      </p>
      
      <p className="text-[#571244] font-bold text-[18px] leading-[150%] mb-4 font-sans">
        Some of our courses include:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {courses.map((course) => (
          <div key={course} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#151515] rounded-full" />
            <span className="text-[#151515] text-[12px] leading-[150%] font-normal font-sans">
              {course}
            </span>
          </div>
        ))}
      </div>
      
      {/* Mobile button - INSIDE the container (visible only on mobile) */}
      <button className="mt-8 md:hidden bg-[#571244] hover:bg-[#6b1653] rounded-md px-6 py-2.5 flex items-center gap-2 transition-colors">
        <span className="text-white font-semibold text-[18px] leading-[150%] font-sans">
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
    
    {/* Desktop button - OUTSIDE the container (visible only on desktop) */}
    <button className="hidden md:flex mt-8 bg-[#571244] hover:bg-[#6b1653] rounded-md px-6 py-2.5 items-center gap-2 transition-colors">
      <span className="text-white font-semibold text-[18px] leading-[150%] font-sans">
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
    </section>
  );
}