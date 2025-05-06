import Navbar from "./components/navbar";
import Home from "./pages/home";
import "./App.css"; // or './index.css'
import About from "./pages/about";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Work from "./pages/work";
import { VscGithubAlt } from "react-icons/vsc";
import { IoLogoInstagram } from "react-icons/io5";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiCodepen } from "react-icons/fi";

const icons = [
  <VscGithubAlt />,
  <IoLogoInstagram />,
  <FiTwitter />,
  <FiLinkedin />,
  <FiCodepen />,
];

function App() {
  return (
    <div className="bg-[#0a192f] relative">
      <Navbar />
      <div className="fixed bottom-0 left-5  pl-4 text-white">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="text-2xl text-[#ccd6f6] hover:text-[#64ffda] cursor-pointer mb-7"
          >
            {icon}
          </div>
        ))}

        <div className="w-px h-24 bg-[#ccd6f6] ml-3 " />
      </div>
      <div className="fixed bottom-0 right-0 pb-3 ">
        <div className="flex flex-col items-start space-y-2">
          <a
            href=""
            className=" text-[#ccd6f6] hover:text-[#64ffda] text-sm tracking-wider transform rotate-90"
          >
            Sannikhadijah@gmail.com
          </a>
          <div className="w-px h-24 bg-[#ccd6f6]" />
        </div>
      </div>

      <Home />
      <section id="about" className="pb-30 bg-[#0a192f] text-white p-10">
        <About />
      </section>

      <section id="experience" className="pb-30 bg-[#0a192f] text-white p-10">
        <Experience />
      </section>
      <section id="work" className="pb-30 bg-[#0a192f] text-white p-10">
        <Work />
      </section>
      <section id="contact" className="pb-30 bg-[#0a192f] text-white p-10">
        <Contact />
      </section>
      <div>
        <footer className="text-center text-[#8892b0] text-sm pb-10 font-bold">
          <p>Designed & Built by Sanni khadijah</p>
          <div>
            
          </div>
        </footer>
      </div>
    </div>
  );
}
export default App;
