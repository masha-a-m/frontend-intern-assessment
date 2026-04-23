export default function TrainingConsultant() {
  return (
    <section className="bg-[#5712441A] py-12 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[#571244] font-semibold text-3xl md:text-4xl lg:text-[40px] leading-[130%] mb-4 font-sans">
          Training The Consultant
        </h2>
        
        <p className="text-[#571244] font-semibold text-[18px] leading-[150%] mb-6 font-sans">
          Maximise Your Potential as a Certified Trainer:
        </p>
        
        <p className="text-[#151515] text-[16px] leading-[150%] font-normal mb-8 font-sans max-w-6xl">
          With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
        </p>
        
        <div className="bg-[#571244] rounded-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold text-[18px] leading-[150%] mb-2 font-sans">
                  Expert-Led Learning
                </h3>
                <p className="text-white text-[18px] leading-[150%] font-light font-sans">
                  Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold text-[18px] leading-[150%] mb-2 font-sans">
                  Comprehensive Curriculum
                </h3>
                <p className="text-white text-[18px] leading-[150%] font-light font-sans">
                  Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold text-[18px] leading-[150%] mb-2 font-sans">
                  Interactive Workshops
                </h3>
                <p className="text-white text-[18px] leading-[150%] font-light font-sans">
                  Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold text-[18px] leading-[150%] mb-2 font-sans">
                  Global Recognition
                </h3>
                <p className="text-white text-[18px] leading-[150%] font-light font-sans">
                  You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.
                </p>
              </div>
            </div>
          </div>
          
         
        </div>

        <button className="mt-8 bg-[#571244] rounded-md px-6 py-2.5 flex items-center gap-2 hover:bg-[#6b1653] transition-colors">
  <span className="text-white font-semibold text-[18px] leading-[150%] font-sans">
    Learn More
  </span>
  
  {/* Mobile: Chevron Right icon (visible on mobile only) */}
  <svg 
    className="block lg:hidden" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  
  {/* Web: Rotated arrow icon (visible on desktop only) */}
  <svg 
    className="hidden lg:block" 
    width="20" 
    height="20" 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
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
    </section>
  );
}