import React from "react";

const Experience = () => {
  // Experience data stored in variable
  const experiences = [
    {
      period: "2024_December - Present",
      role: "Mern Stack Developer",
      company: "Leelia Web Solutions Pvt Ltd",
      description: "At Leelia Web Solutions, I have been contributing to full-stack development using the MERN stack. My responsibilities include building scalable REST APIs, dynamic front-end interfaces, and implementing secure authentication flows. I collaborate closely with the UI/UX and DevOps teams to deliver modern and high-performing web applications."
    },
    {
      period: "2024_October - 2024_December",
      role: "React Js Developer",
      company: "Talentrise Technokrate Pvt Ltd",
      description: "At Talentrise Technokrate, I specialized in crafting modern UI components using React.js. I focused on building reusable components, improving performance through code-splitting and lazy loading, and integrating APIs to build dynamic dashboards. My role helped shape intuitive user experiences for enterprise clients."
    },
    {
      period: "2024_June - 2024_September",
      role: "Industrial Training - HTML, CSS, JavaScript, React.js",
      company: "EMEI",
      description: "During my industrial training at EMEI, I gained hands-on experience with core front-end technologies and the React.js framework. This period laid a strong foundation in responsive design, component architecture, and version control using Git. It prepared me for professional development roles with practical exposure."
    }
  ];

  // Experience Card Component
  const ExperienceCard = ({ period, role, company, description }) => (
    <div className="relative group pb-8">
      {/* Timeline dot */}
      <div className="absolute left-[-37px] top-2 w-4 h-4 rounded-full bg-cyan-400 group-hover:bg-purple-300 transition-colors duration-300"></div>
      
      {/* Timeline line */}
      <div className="absolute -left-[30px] top-6 w-0.5 h-full bg-gradient-to-b from-cyan-400 via-purple-400 to-purple-600"></div>
      
      <p className="text-sm text-cyan-300 italic mb-1">{period}</p>
      <div className="flex justify-between items-center">
        <h3 className="my-2 text-h3-xs sm:text-h3-sm md:text-h3-md lg:text-h3-lg lgg:text-h3-lgg xl:text-h3-xl 2xl:text-h3-2xl text-white font-bold group-hover:text-purple-200 transition-colors duration-300">
          {role}
        </h3>
        <p className="text-sm text-amber-200">{company}</p>
      </div>
      <p className="text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg lgg:text-p-lgg xl:text-p-xl 2xl:text-p-2xl text-purple-50 mt-2 opacity-90">
        {description}
      </p>
      
      {/* Bottom border animation */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 w-0 group-hover:w-full transition-all duration-500"></div>
    </div>
  );

  return (
    <section className="min-h-screen relative flex justify-center items-center lg:px-8 lg:py-12 px-4 py-8 " id="Experience">
      {/* Background bubbles */}
      <div className="lg:w-[35vw] w-[45vh] lg:h-[35vw] h-[45vh] rounded-full absolute top-[-1%] left-[-13%] blur-[241px] bg-[#6002B3B8] opacity-60"></div>
      <div className="lg:w-[35vw] w-[45vh] lg:h-[35vw] h-[45vh] rounded-full absolute top-[15%] right-[-8%] blur-[241px] bg-[#6002B3B8] opacity-60"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Left Section */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <span className="italic text-sm text-cyan-300">Experience</span>
              <h2 className="text-h2-xs sm:text-h2-sm md:text-h2-md lg:text-h2-lg lgg:text-h2-lgg xl:text-h2-xl 2xl:text-h2-2xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-300 lg:text-left text-center font-bold">
                MY EXPERIENCE
              </h2>
            </div>
            
            <div className="flex justify-center items-center relative">
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 opacity-75 blur-[269px]"></div>
              <video
                className="w-full h-auto rounded-lg z-10 border-2 border-cyan-400/30 shadow-lg shadow-purple-900/50"
                src="/assets/images/6963744-hd_1280_720_25fps.mp4"
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>
            
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm md:text-base text-white border border-cyan-400 px-4 py-2 rounded hover:bg-cyan-400 hover:text-purple-900 transition-colors duration-300"
            >
              Download my resume
              <img
                src="https://emojicdn.elk.sh/↗️"
                alt="arrow"
                className="w-4 h-4"
              />
            </a>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 space-y-8 pl-8">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                period={exp.period}
                role={exp.role}
                company={exp.company}
                description={exp.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;