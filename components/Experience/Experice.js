import React from "react";

const Experice = () => {
  return (
    <section
      className="min-h-screen relative flex justify-center items-center lg:px-8 lg:py-12 px-4 py-8"
      id="Experience"
    >
      {/* circle bubble  */}
      <div className="lg:w-[35vw] w-[45vh] lg:h-[35vw] h-[45vh]  rounded-full absolute top-[-1%] left-[-13%] blur-[241px] bg-[#6002B3B8] opacity-60 "></div>
      <div className="lg:w-[35vw] w-[45vh] lg:h-[35vw] h-[45vh]  rounded-full absolute top-[15%] right-[-8%] blur-[241px] bg-[#6002B3B8] opacity-60 "></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* <!-- Left Section --> */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <span className="italic text-sm text-gray-400">Experience</span>
              <h2 className="text-h2-xs sm:text-h2-sm md:text-h2-md lg:text-h2-lg lgg:text-h2-lgg xl:text-h2-xl 2xl:text-h2-2xl mb-4 text-white lg:text-left text-center font-bold mt-2">
                MY EXPERIENCE
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm md:text-base text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
            >
              Download my resume
              <img
                src="https://emojicdn.elk.sh/↗️"
                alt="arrow"
                className="w-4 h-4"
              />
            </a>
          </div>

          {/* <!-- Right Section --> */}
          <div className="lg:w-1/2 space-y-12">
            {/* <!-- Experience 1 --> */}
            <div>
              <p className="text-sm text-gray-400 italic mb-1">
                2024_December - Present
              </p>
              <div className="flex justify-between items-center">
                <h3 className="my-4 text-h3-xs sm:text-h3-sm md:text-h3-md lg:text-h3-lg lgg:text-h3-lgg xl:text-h3-xl 2xl:text-h3-2xl  text-white 
 font-bold">
                  Mern Stack Developer
                </h3>
                <p className="text-sm text-gray-400">
                  Leelia Web Solutions Pvt Ltd
                </p>
              </div>
              <p className="text-gray-300 text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg lgg:text-p-lgg xl:text-p-xl 2xl:text-p-2xl">
                At Leelia Web Solutions, I have been contributing to full-stack
                development using the MERN stack. My responsibilities include
                building scalable REST APIs, dynamic front-end interfaces, and
                implementing secure authentication flows. I collaborate closely
                with the UI/UX and DevOps teams to deliver modern and
                high-performing web applications.
              </p>
              <div className="border-b border-gray-700 mt-2"></div>
            </div>

            {/* <!-- Experience 2 --> */}
            <div>
              <p className="text-sm text-gray-400 italic mb-1">
                2024_October - 2024_December
              </p>
              <div className="flex justify-between items-center">
                <h3 className="my-4 text-h3-xs sm:text-h3-sm md:text-h3-md lg:text-h3-lg lgg:text-h3-lgg xl:text-h3-xl 2xl:text-h3-2xl  text-white 
 font-bold">
                  React Js Developer
                </h3>
                <p className="text-sm text-gray-400">
                  Talentrise Technokrate Pvt Ltd
                </p>
              </div>
              <p className="text-gray-300 text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg lgg:text-p-lgg xl:text-p-xl 2xl:text-p-2xl">
                At Talentrise Technokrate, I specialized in crafting modern UI
                components using React.js. I focused on building reusable
                components, improving performance through code-splitting and
                lazy loading, and integrating APIs to build dynamic dashboards.
                My role helped shape intuitive user experiences for enterprise
                clients.
              </p>
              <div className="border-b border-gray-700 mt-2"></div>
            </div>

            {/* <!-- Experience 3 --> */}
            <div>
              <p className="text-sm text-gray-400 italic mb-1">
                2024_June - 2024_September
              </p>
              <div className="flex justify-between items-center">
                <h3 className="my-4 text-h3-xs sm:text-h3-sm md:text-h3-md lg:text-h3-lg lgg:text-h3-lgg xl:text-h3-xl 2xl:text-h3-2xl  text-white 
 font-bold">
                  Industrial Training - HTML, CSS, JavaScript, React.js
                </h3>
                <p className="text-sm text-gray-400">EMEI</p>
              </div>
              <p className="text-gray-300 text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg lgg:text-p-lgg xl:text-p-xl 2xl:text-p-2xl">
                During my industrial training at EMEI, I gained hands-on
                experience with core front-end technologies and the React.js
                framework. This period laid a strong foundation in responsive
                design, component architecture, and version control using Git.
                It prepared me for professional development roles with practical
                exposure.
              </p>
              <div className="border-b border-gray-700 mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experice;
