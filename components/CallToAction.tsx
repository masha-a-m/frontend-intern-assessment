export default function CallToAction() {
  return (
    <section className="bg-[#F5F5F5] py-16 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#571244] rounded-lg py-8 px-6 md:py-10 md:px-16 text-center">
          <p className="text-white font-normal text-[18px] md:text-[20px] leading-[150%] tracking-[3%] mb-8 font-sans">
            Want to accelerate professional growth and development at your organisation?<br />
            See how we can help.
          </p>
          
          <button className="bg-white border border-[#571244] rounded-md px-6 py-3 hover:bg-gray-50 transition-colors">
            <span className="text-[#571244] font-semibold text-[18px] leading-[120%] font-sans">
              Book a Consultation
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}