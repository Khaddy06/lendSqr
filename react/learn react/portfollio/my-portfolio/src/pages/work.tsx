
import { useState } from "react";
import { CiFolderOn } from "react-icons/ci";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Cards = [
  {
    title: "Integrating Algolia Search with wordpress Multisite",
    description:
      "A project that integrates Algolia Search with WordPress  Multisite, enhancing search functionality across multiple sites.",
    links: "Algolia Search, WordPress Multisite, PHP" ,
  },
  {
    title: "Building a Custom WordPress Theme",
    description:
      "A project that involves creating a custom WordPress theme from scratch, tailored to specific design and functionality requirements.",
    links: "WordPress, PHP, HTML, CSS, JavaScript",
  },
  {
    title: "Developing a RESTful API with Node.js",
    description:
      "A project that focuses on building a RESTful API using Node.js, enabling seamless communication between the front-end and back-end.",
    links: "Node.js, Express, MongoDB",
  },
  {
    title: "Creating a Responsive Portfolio Website",
    description:
      "A project that showcases my skills and projects through a responsive portfolio website built with modern web technologies.",
    links: "HTML, CSS, JavaScript, React",
  },
  {
    title: "Building a Custom WordPress Theme",
    description:
      "A project that involves creating a custom WordPress theme from scratch, tailored to specific design and functionality requirements.",
    links: "WordPress, PHP, HTML, CSS, JavaScript",
  },
  {
    title: "Google Keep Clone",
    description:"A simple Google Keep clone built with React and Firebase, allowing users to create, edit, and delete notes.",
    links: "Vue, Firebase",
  },
]
const Cards2 = [
  {
    title: "Developing a RESTful API with Node.js",
    description:
      "A project that focuses on building a RESTful API using Node.js, enabling seamless communication between the front-end and back-end.",
    links: "Node.js, Express ,MongoDB", 
  },
  {
    title: "Creating a Responsive Portfolio Website",
    description:
      "A project that showcases my skills and projects through a responsive portfolio website built with modern web technologies.",
    links: "HTML, CSS, JavaScript, React",
  },
  {
    title: "Integrating Algolia Search with wordpress Multisite",
    description:
      "A project that integrates Algolia Search with WordPress  Multisite, enhancing search functionality across multiple sites.",
    links: "Algolia Search, WordPress Multisite, PHP" ,
  },
  {
    title: "Building a Custom WordPress Theme",
    description:
      "A project that involves creating a custom WordPress theme from scratch, tailored to specific design and functionality requirements.",
    links: "WordPress, PHP, HTML, CSS, JavaScript",
  },
  {
    title: "Developing a RESTful API with Node.js",
    description:
      "A project that focuses on building a RESTful API using Node.js, enabling seamless communication between the front-end and back-end.",
    links: "Node.js, Express, MongoDB",
  },
  {
    title: "Creating a Responsive Portfolio Website",
    description:
      "A project that showcases my skills and projects through a responsive portfolio website built with modern web technologies.",
    links: "HTML, CSS, JavaScript, React",
  },
  {
    title: "React Profile",
    description: "Online Version of my 2016 resume made for fun. i was interested React.js, so i found and it spun into a weekend learning",
    links: "React CSS"
  },
  {
    title: "NU Women in Tech",
    description:"Complete overhaul and redesign of NU Women in Tech's club website using jekyll, built while serving as web chair on the e-board",
    links:"Jekyll Bootstrap"
  }
];

function Work() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-5xl mx-auto text-center">
      <div className="flex items-center gap-5">
        <h2 className="text-3xl text-[#64ffda] font-title mb-6  pb-2">
          03. Some Things I've Built
        </h2>
        <p className="border border-b border-[#112240] w-sm  mb-6"></p>
      </div>
      <div className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <p className="text-[#8892b0] mb-6 text-lg">
          Here are a few projects I've worked on recently. Each project
          showcases my skills and expertise in web development.
          <br /> I am always eager to learn and explore new technologies, so
          feel free to reach out if you have any questions or would like to
          collaborate on a project.
        </p>
        <CiFolderOn className="text-[#64ffda] text-2xl" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        {Cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#112240] p-6 rounded-lg transform transition-transform duration-300 ease-out
             hover:-translate-y-2 hover:shadow-lg flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex justify-between mb-4">
                <CiFolderOn className="text-[#64ffda] text-4xl" />
                <div className="flex gap-5">
                  <FiGithub
                    size={20}
                    className="text-[#ccd6f6] hover:text-[#64ffda]"
                  />
                  <FiExternalLink
                    size={20}
                    className="text-[#ccd6f6] hover:text-[#64ffda]"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#ccd6f6] hover:text-[#64ffda] mb-2">
                {card.title}
              </h3>
              <p className="text-[#8892b0] mb-4 font-semibold">
                {card.description}
              </p>
            </div>

            {/* This link block will now stick to the bottom */}
            <p className="text-[#8892b0] text-xs font-semibold">{card.links}</p>
          </div>
        ))}
      </div>
      {showMore && <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        {Cards2.map((card, index) => (
          <div
            key={index}
            className="bg-[#112240] p-6 rounded-lg transform transition-transform duration-300 ease-out
             hover:-translate-y-2 hover:shadow-lg flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex justify-between mb-4">
                <CiFolderOn className="text-[#64ffda] text-4xl" />
                <div className="flex gap-5">
                  <FiGithub
                    size={20}
                    className="text-[#ccd6f6] hover:text-[#64ffda]"
                  />
                  <FiExternalLink
                    size={20}
                    className="text-[#ccd6f6] hover:text-[#64ffda]"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#ccd6f6] hover:text-[#64ffda] mb-2">
                {card.title}
              </h3>
              <p className="text-[#8892b0] mb-4 font-semibold">
                {card.description}
              </p>
            </div>
            <p className="text-[#8892b0] text-xs font-semibold">{card.links}</p>
          </div>
        ))}
      </div>}
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-6 inline-block border border-[#64ffda] text-[#64ffda] px-6 py-2 rounded hover:shadow-[0_0_10px_#64ffda] 
          transition-all duration-300"
      >
      {showMore? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}

export default Work;
    


    

