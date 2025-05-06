import { MdOutlinePlayArrow } from "react-icons/md";

function UpStatement() {
  return (
    <div>
      <h2 className="text-xl text-[#ccd6f6] font-title  pb-2">
        Lead Engineer <span className="text-[#64ffda] mx-1">@</span>
        <span className="text-[#64ffda] hover:underline">Upstatement</span>
      </h2>
      <p className="text-[#ccd6f6] text-sm font-light">May 2018 - Present</p>
      <div className="flex mt-5 ">
        <MdOutlinePlayArrow size={16} color="#64ffda" />
        <p className="text-md text-[#8892b0] font-semibold ml-1 w-lg">
          Deliver High-quality, robust production code for a diverse array of
          projects for clients including Harvard Business Schools, Everytown for
          Gun Safety , Pratt Institute, koala Health, Vanderblit University, The
          19th News, and more
        </p>
      </div>
      <div className="flex mt-2 ">
        <MdOutlinePlayArrow size={16} color="#64ffda" />
        <p className="text-md text-[#8892b0] font-semibold ml-1 w-lg">
          Work alongSide creative directors to lead the research, development
          and architecture of technical solutions to fufill business
          requirements
        </p>
      </div>
      <div className="flex mt-2 ">
        <MdOutlinePlayArrow size={16} color="#64ffda" />
        <p className="text-md text-[#8892b0] font-semibold ml-1 w-lg">
          Collaborate with designers, product managers, and other engineers to
          transform creative into production realities for clients and
          stakeholders
        </p>
      </div>
      <div className="flex mt-2 ">
        <MdOutlinePlayArrow size={16} color="#64ffda" />
        <p className="text-md text-[#8892b0] font-semibold ml-1 w-lg">
         Provide leadership with engineering department through close collaboration, knowledge shares, and mentorship
        </p>
      </div>
    </div>
  );
}

export default UpStatement;
