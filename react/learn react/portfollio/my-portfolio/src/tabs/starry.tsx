import { MdOutlinePlayArrow } from "react-icons/md"


function Starry() {
  return (
       <div>
         <h2 className="text-xl text-[#ccd6f6] font-title  pb-2">
           Software Engineer Co-op <span className="text-[#64ffda] mx-1">@</span>
           <span className="text-[#64ffda] hover:underline">Starry</span>
         </h2>
         <p className="text-[#ccd6f6] text-sm font-light">July - December 2016</p>
         <div className="flex mt-5 ">
           <MdOutlinePlayArrow size={16} color="#64ffda" />
           <p className="text-md text-[#8892b0] font-semibold ml-1 w-lg">
          Engineered and improved major features of the Starry's customer-facing Android Web 
          app using ES6, Handlebars, Backbone, Marionette, and CSS
           </p>
         </div>
         <div className="flex mt-2 ">
           <MdOutlinePlayArrow size={16} color="#64ffda" />
           <p className="text-md text-[#8892b0] font-semibold ml-1 w-lg">
          Proposed and implemented scalable solutions to issues identified with cloud services 
          and applications responsible for communicating with the Starry Stationed internet router
           </p>
         </div>
         <div className="flex mt-2 ">
           <MdOutlinePlayArrow size={16} color="#64ffda" />
           <p className="text-md text-[#8892b0] font-semibold ml-1 w-lg">
          Collaborated with designers and other developers to ensure thoughtful and consistent users experience 
          across Starry's iOS and Android mobile apps
           </p>
         </div>
         
       </div>
  )
}

export default Starry