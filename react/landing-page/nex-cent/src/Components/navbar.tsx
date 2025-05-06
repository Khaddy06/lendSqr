import { useState } from "react";
import { Menu, X } from "lucide-react";
import icon from "../assets/icon.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Features", href: "#feature" },
    { name: "Products", href: "#products" },
    { name: "Testimonial", href: "#testimonial" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <div className="bg-[#F5F7FA]">
      <nav className="bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center pt-7">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <img src={icon} alt="Logo" className="w-8 h-8" />
            <p>Nexcent</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10 font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-gray-900"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4 ml-6">
            <button className="text-[#4CAF4F] hover:text-gray-900">
              Login
            </button>
            <button className="bg-[#4CAF4F] px-4 py-2 rounded-md text-white">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#F5F7FA] shadow-md">
            <div className="px-4 pt-4 pb-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-600 hover:text-gray-900"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-2 mt-4">
                <button className="text-gray-700 hover:text-gray-900 w-full text-left">
                  Login
                </button>
                <button className="bg-[#4CAF4F] text-white px-4 py-2 rounded-full w-full text-left hover:bg-[#3c9e3f]">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
