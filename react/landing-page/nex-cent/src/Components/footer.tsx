import icon from "../assets/logoTweleve.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import { TiLocationArrowOutline } from "react-icons/ti";

const companyLinks = [
  "About us",
  "Blog",
  "Contact us",
  "Pricing",
  "Testimonials",
];
const supportLinks = [
  "Help center",
  "Terms of service",
  "Legal",
  "Privacy policy",
  "Status",
];

function Footer() {
  return (
    <section>
      {/* Top Banner */}
      <div className="text-center bg-[#F5F7FA] py-10 px-6 sm:px-10 lg:px-32 xl:px-40 2xl:px-56">
        <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-bold text-[#4D4D4D] max-w-[887px] mx-auto leading-tight">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <button className="mt-6 bg-[#4CAF4F] hover:bg-green-600 transition px-6 py-3 rounded-md text-white font-semibold flex items-center gap-1 mx-auto">
          Get a Demo <IoIosArrowRoundForward className="text-xl" />
        </button>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#263238] text-white py-12 px-6 sm:px-10 lg:px-32 xl:px-40 2xl:px-56">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between flex-wrap gap-12">
          {/* Logo & Socials */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 pb-3">
              <img src={icon} alt="Logo" className="w-10 h-10 object-contain" />
              <p className="text-white text-xl font-semibold">Nexcent</p>
            </div>
            <p className="text-sm text-[#F5F7FA] mt-4 font-semibold">
              Copyright © 2020 Nexcent Ltd.
            </p>
            <p className="text-sm text-[#F5F7FA] font-semibold">
              All rights reserved.
            </p>
            <div className="flex gap-4 mt-4">
              {[FaInstagram, CiBasketball, FaTwitter, FaYoutube].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-[#4CAF4F] flex items-center justify-center rounded-full"
                  >
                    <Icon className="text-white text-lg" />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-auto">
            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              {companyLinks.map((link, index) => (
                <p key={index} className="text-sm text-[#F5F7FA] mt-3">
                  {link}
                </p>
              ))}
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Support</h3>
              {supportLinks.map((link, index) => (
                <p key={index} className="text-sm text-[#F5F7FA] mt-3">
                  {link}
                </p>
              ))}
            </div>

            {/* Subscribe Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold mb-2">Stay up to date</h3>
              <form>
                <div className="relative w-full max-w-sm">
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="w-full py-2 pl-4 pr-10 rounded-md bg-white opacity-50 text-black placeholder:text-[#D9DBE1] focus:outline-none"
                  />
                  <TiLocationArrowOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D9DBE1] text-xl pointer-events-none" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
