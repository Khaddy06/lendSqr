import { useState } from "react";
import Apple from "../tabs/apple";
import MullenLowe from "../tabs/mullenLowe";
import ScoutStudio from "../tabs/scoutStudio";
import Starry from "../tabs/starry";
import UpStatement from "../tabs/upStatement";


const Experiences = [
  "Upstatement",
  "Apple",
  "Scout Studio",
  "Starry",
  "MullenLowe",
];
const tabContent = [
  <UpStatement />,
  <Apple />,
  <ScoutStudio />,
  <Starry />,
  <MullenLowe />,
];

function Experience() {
  const [activeBar, setActiveBar] = useState(0);

  const handleClick = (index: number) => {
    setActiveBar(index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-5">
        <h2 className="text-3xl text-[#64ffda] font-title mb-6  pb-2 ">
          02. Where I've Worked
        </h2>
        <p className="border border-b border-[#112240] w-sm  mb-6"></p>
      </div>
      <div className="flex mt-5 gap-10 mb-6">
        <div className=" ">
          {Experiences.map((experience, index) => (
            <div key={index} className="flex items-center gap-7 pb-2">
              <button
                className="
    text-md font-semibold px-3 py-2 text-[#ccd6f6] hover:bg-[#0a194f] hover:text-[#64ffda]
    outline-none focus:outline-none focus:border-l-3 focus:border-[#64ffda] focus:bg-[#0a194f] focus:text-[#64ffda] transition duration-300 ease-in-out"
                onClick={() => handleClick(index)}
              >
                {experience}
              </button>
            </div>
          ))}
        </div>
        <div>{tabContent[activeBar]}</div>
      </div>
    </div>
  );
}

export default Experience;
