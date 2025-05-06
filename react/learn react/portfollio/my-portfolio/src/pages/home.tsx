import "../App.css"; // or './index.css'

function Home() {
  return (
    <div className="bg-[#0a192f]">
      <div
        className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-20 mx-auto pt-16 sm:pt-20
       md:pt-24 pb-12 sm:pb-16 md:pb-20"
      >
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#64ffda]">
          Hi, my name is
        </h2>
        <h1 className="text-7xl font-bold text-[#ccd6f6]">Sanni Khadijah.</h1>
        <h2 className="text-6xl text-[#8892b0] mt-2 font-bold w-2xl">
          I build elegant websites & web apps.
        </h2>
        <p className="text-[#ccd6f6] max-w-xl mt-4 text-xl">
          I’m a front-end developer focused on crafting smooth, responsive, and
          accessible digital experiences — blending aesthetic with logic.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block border border-[#64ffda] text-[#64ffda] px-6 py-2 rounded hover:shadow-[0_0_10px_#64ffda] 
          transition-all duration-300"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}

export default Home;
