import { MdOutlinePlayArrow } from "react-icons/md"


function Apple() {
  return (
        <div>
          <h2 className="text-xl text-[#ccd6f6] font-title  pb-2">
           UI Engineer Co-op <span className="text-[#64ffda] mx-1">@</span>
            <span className="text-[#64ffda] hover:underline">Apple</span>
          </h2>
          <p className="text-[#ccd6f6] text-sm font-light">July - December 2017</p>
          <div className="flex mt-5 ">
            <MdOutlinePlayArrow size={16} color="#64ffda" />
            <p className="text-md text-[#8892b0] font-semibold ml-1 w-lg">
            Develop and style interactive web application for Apple Music using Ember, and SCSS
            </p>
          </div>
          <div className="flex mt-2 ">
            <MdOutlinePlayArrow size={16} color="#64ffda" />
            <p className="text-md text-[#8892b0] font-semibold ml-1 w-lg">
          Build and shipped to apple Music Extension for facebook Messenger leveraging third-party 
          and internal API integration
            </p>
          </div>
          <div className="flex mt-2 ">
            <MdOutlinePlayArrow size={16} color="#64ffda" />
        <p className="text-md text-[#8892b0] font-semibold ml-1 w-lg">
          Architected and implemented the user interface of Apple Music's embeddable web player widget for in-browser
          user authorization and full song playback
        </p> 
        
          </div>
          <div className="flex mt-2 ">
            <MdOutlinePlayArrow size={16} color="#64ffda" />
        <p className="text-md text-[#8892b0] font-semibold ml-1 w-lg">
          Contributed extensively to the creation of MusicKit JS, a public-facing Javascript SDK 
          for embedded Apple Music players into web applications
            </p>
          </div>
        </div>
  )
}

export default Apple