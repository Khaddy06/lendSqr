import imageTwo from "../assets/imageTwo.png";

function Calender() {
  return (
    <section className="pt-10 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="  flex">
          <img
            src={imageTwo}
            alt=""
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>

        {/* Text */}
        <div className=" text-center md:text-left">
          <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:w-[49 0px] font-bold text-[#4D4D4D]">
            How to design your site footer like we did
          </h1>
          <p className="text-[#717171] text-[14px] sm:text-lg font-normal mt-2 max-w-xl mx-auto md:mx-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quasi
            quia quaerat sint optio suscipit eligendi rerum provident
            exercitationem enim, pariatur dolorum, ipsum facilis amet in quidem
            fugiat ipsam architecto voluptatum, possimus molestiae? Earum magnam
            quasi molestias obcaecati eos aliquam?
          </p>
          <div className="flex justify-center md:justify-start mt-5">
            <button className="bg-[#4CAF4F] hover:bg-green-600 transition px-6 py-3 rounded-md text-white font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calender