import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // if you have react-icons

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0a192f] text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl text-[#64ffda] font-title mb-4 inline-block border-b-2 border-[#112240] pb-2">
          04. Contact
        </h2>
        <p className="font-body text-[#ccd6f6] mb-8">
          I’m currently open to freelance projects, collaborations, or full-time
          roles. Feel free to reach out—whether it’s to talk shop, discuss a new
          idea, or just say hi!
        </p>

        {/* Email & Socials */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <a
            href="mailto:youremail@example.com"
            className="font-body border border-[#64ffda] px-6 py-2 rounded hover:shadow-[0_0_10px_#64ffda] transition duration-300"
          >
            ✉️ youremail@example.com
          </a>
          <div className="flex space-x-6 text-2xl text-[#ccd6f6]">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#64ffda] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#64ffda] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#64ffda] transition"
            >
              <FaTwitter />
            </a>
                  </div>
                  
              </div>
                <button
          
          className="mt-6 inline-block border border-[#64ffda] text-[#64ffda] px-6 py-2 rounded hover:shadow-[0_0_10px_#64ffda] 
          transition-all duration-300"
        >
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default Contact;
