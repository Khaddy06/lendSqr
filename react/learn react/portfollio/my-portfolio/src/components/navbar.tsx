import logo from "../assets/logo (2).png"; // Adjust the path as needed

function Navbar() {
  return (
    <div className="bg-[#0a192f]">
      <nav className="w-full max-w-[1500px] px-6 mx-auto pt-3">
        <div className="text-sm font-bold flex justify-between w-full items-center">
          <img src={logo} alt="Logo" className="w-15 h-15" />

          <div className="flex items-center gap-8 text-[#ccd6f6]">
            <ul className="flex gap-4">
              <li className="hover:text-[#64ffda] transition duration-300">
                <a href="#about">
                  <span className="text-[#64ffda] p-2">01.</span>
                  About
                </a>
              </li>
              <li className="hover:text-[#64ffda] transition duration-300">
                <a href="#experience">
                  <span className="text-[#64ffda] p-2">02.</span>
                  Experience
                </a>
              </li>
              <li className="hover:text-[#64ffda] transition duration-300">
                <a href="#work">
                  <span className="text-[#64ffda] p-2">03.</span>
                  Work
                </a>
              </li>
              <li className="hover:text-[#64ffda] transition duration-300">
                <a href="#contact">
                  <span className="text-[#64ffda] p-2">04.</span>
                  Contact
                </a>
              </li>
            </ul>
            <button
              className="text-[#64ffda] border border-[#64ffda] rounded-sm font-semibold  
            px-6 py-2 rounded hover:scale-110 hover:shadow-[0_0_10px_#64ffda] transition-all duration-300 ease-in-out"
            >
              Resume
            </button>
          </div>
        </div>
      </nav>
     
    </div>
  );
}

export default Navbar;
