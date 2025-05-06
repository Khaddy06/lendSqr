


function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-5">
        <h2 className="text-3xl text-[#64ffda] font-title mb-6  pb-2">
          01. About Me
        </h2>
        <p className="border border-b border-[#112240] w-sm  mb-6"></p>
      </div>

      <div className="font-body text-[#ccd6f6] space-y-5 leading-relaxed">
        <p>
          Hello! my name is
          <span className="text-[#64ffda] font-semibold">Sanni Khadijah</span>,
          I'M a front-end developer with a sharp eye for detail and a passion
          for building beautiful, accessible web experiences.
        </p>

        <p>
          I enjoy turning complex problems into elegant solutions — balancing
          logic with visual aesthetics. My go-to stack includes{" "}
          <strong className="text-[#64ffda]">React</strong>,{" "}
          <strong className="text-[#64ffda]">TypeScript</strong>, and{" "}
          <strong className="text-[#64ffda]">Tailwind CSS</strong>, and I love
          using tools like <strong className="text-[#64ffda]">Figma</strong> and{" "}
          <strong className="text-[#64ffda]">Framer Motion</strong> to bring
          interfaces to life.
        </p>

        <p>
          Outside of coding, you’ll often find me exploring the latest web
          trends or diving into side projects to bring fresh ideas to life.
        </p>

        <div>
          <p className="text-[#64ffda] font-semibold mt-6">
            Here Are The Few Technologies I work with:
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 list-disc list-inside text-sm mt-2">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Css</li>
            <li>Javascript</li>
            <li>TypeScript</li>
            <li>Figma to Code</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About