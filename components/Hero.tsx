export default function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/navbar.jpg')",
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-full py-3 px-12 mb-6">
          <span className="text-white font-semibold text-[14px] font-sans tracking-wide">
            WHAT WE DO
          </span>
        </div>
        
        <h1 className="text-white font-semibold text-4xl md:text-5xl lg:text-[56px] leading-[130%] mb-4 font-sans">
          Training and Development
        </h1>
        
        <p className="text-white text-[18px] leading-[150%] mb-8 px-4 font-sans">
          Our comprehensive range of programs and resources is designed to enhance skills,
          broaden knowledge, and propel careers forward in today's ever-evolving landscape.
        </p>
        
        <button className="bg-[#571244] hover:bg-[#6b1653] rounded-md px-6 py-3 transition-colors">
          <span className="text-white font-semibold text-[18px] font-sans">
            Book a Consultation
          </span>
        </button>
      </div>
    </section>
  );
}