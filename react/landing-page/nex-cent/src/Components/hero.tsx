import heroImage from "../assets/Illustration.png";
import Dot from "../assets/Dot.png";

export default function Hero() {
  return (
    <section className="bg-[#F5F7FA] pt-12 md:pt-18 lg:pt-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Lessons and insights{" "}
            <span className="text-[#4CAF4F] block sm:inline">
              from 8 years.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#000000] max-w-md mx-auto md:mx-0">
            Where to grow your business as a photographer: your site or social
            media?
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#4CAF4F] hover:bg-green-600 transition px-6 py-3 rounded-md text-white font-semibold">
              Register
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Hero Illustration"
            className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-auto"
          />
        </div>
      </div>

      {/* Dot image */}
      <div className="flex justify-center pb-5">
        <img src={Dot} alt="dots" className="w-12 sm:w-16 md:w-20" />
      </div>
    </section>
  );
}
