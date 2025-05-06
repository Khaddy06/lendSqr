"use client";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Photo from "../assets/photo.png";
import { FiBell, FiSearch, FiMenu } from "react-icons/fi";

type NavbarProps = {
  onToggleSidebar?: () => void;
};

const Navbar = ({ onToggleSidebar }: NavbarProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md z-40">
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0 flex-1">
          <button
            onClick={onToggleSidebar}
            className="md:hidden text-gray-600"
            title="Open Sidebar"
          >
            <FiMenu className="w-6 h-6" />
          </button>
          <div className="shrink-0">
            <Image src={Logo} alt="Lendsqr Logo" width={100} height={32} />
          </div>
          <div className="hidden sm:flex flex-1">
            <div className="flex w-full max-w-md border border-[#e5ebf8] rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search for anything"
                className="flex-1 px-4 py-2 text-sm sm:text-base focus:outline-none"
              />
              <button
                className="bg-[#39CDCC] px-4 py-2 text-white"
                title="icon"
              >
                <FiSearch className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#"
            className="text-sm text-gray-700 hover:underline hidden sm:inline"
          >
            Docs
          </a>

          <button className="relative p-1" title="Notifications">
            <FiBell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <div className="flex items-center gap-2">
            <Image
              src={Photo}
              alt="User Avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm font-semibold text-gray-800 hidden sm:inline">
              Adedeji
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
