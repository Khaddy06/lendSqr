import { MdOutlinePlayArrow } from "react-icons/md"


function MullenLowe() {
  return (
        <div>
          <h2 className="text-xl text-[#ccd6f6] font-title  pb-2">
            Creative Technologist Co-op <span className="text-[#64ffda] mx-1">@</span>
            <span className="text-[#64ffda] hover:underline">MullenLowe</span>
          </h2>
          <p className="text-[#ccd6f6] text-sm font-light">July - December 2015</p>
          <div className="flex mt-5 ">
            <MdOutlinePlayArrow size={16} color="#64ffda" />
            <p className="text-md text-[#8892b0] font-semibold ml-1 w-lg">
          Developed, maintained, and shipped production code for clients websites primarily using HTML, CSS,JavaScript
           and jQuery
            </p>
          </div>
          <div className="flex mt-2 ">
            <MdOutlinePlayArrow size={16} color="#64ffda" />
            <p className="text-md text-[#8892b0] font-semibold ml-1 w-lg">
          Performed quality assurance tests on  various sites to ensure cross-browser compatibility and mobile 
          responsiveness
        
            </p>
          </div>
          <div className="flex mt-2 ">
            <MdOutlinePlayArrow size={16} color="#64ffda" />
            <p className="text-md text-[#8892b0] font-semibold ml-1 w-lg">
              Clients included JetBlue, Lovesac, U.S Cellular,U.S Department of defense, and more
            </p>
          </div>
        
        </div>
  )
}

export default MullenLowe