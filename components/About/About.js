import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about-us"
      className="min-h-screen relative flex justify-center items-center lg:px-8 lg:py-12 px-4 py-8"
    >
      {/* circle bubble  */}
      <div className="w-[35vw] h-[35vw]  rounded-full absolute top-[-1%] left-[-13%] blur-[241px] bg-[#6002B3B8] opacity-60 "></div>
      <div className="w-[35vw] h-[35vw]  rounded-full absolute top-[15%] right-[-8%] blur-[241px] bg-[#6002B3B8] opacity-60 "></div>

      {/* dotted image background  */}
      {/* <img className="absolute w-full h-auto bottom-0 left-0 opacity-[0.5]" src="assets/images/49189265_9211410 1-min.png" alt="" /> */}

      <div className="container mx-auto  relative z-10">
        <h2 className="xll:text-[6rem] xl:[5rem] lg:[4.5rem] text-[3.8rem] leading-[5rem] lgg:mb-[13rem] mb-4 text-white lg:text-left text-center">
          About Me
        </h2>
        <div className="flex lg:flex-nowrap flex-wrap ">
          <div className="lg:w-1/2 w-full order-2 relative">
            {/* design circles  */}
            <div className="w-[80px] h-[80px] right-0 z-[-1]  rounded-full bg-[linear-gradient(90deg,_rgba(77,_2,_126,_1)_36%,_rgba(146,_16,_122,_1)_86%)] absolute"></div>

            <h3 className="xll:text-[5rem] xl:text-[4.5rem] lg:text-[4rem] text-[3.4rem] lg:leading-[5rem] leading-[3.5rem] font-bold mb-6 text-white lg:text-left text-center">
              Full Stack Web Developer
            </h3>
            <p className="text-lg text-white mb-6 lg:text-left text-center">
              I am a passionate web developer with extensive knowledge of modern
              web development technologies, including React, JavaScript,
              Next.js, Tailwind CSS, Bootstrap, Node.js, MongoDB, HTML, and CSS.
              I specialize in creating responsive and high-performance web
              applications, leveraging advanced techniques such as server-side
              rendering (SSR), static site generation (SSG), and incremental
              static regeneration (ISR).
            </p>
            <p className="text-lg text-white lg:text-left text-center mb-3">
              Alongside my development expertise, I also have a strong
              background in graphic design, utilizing tools like Figma and
              Photoshop to craft visually appealing and user-friendly
              interfaces. My goal is to build seamless, functional, and
              aesthetically engaging digital experiences.
            </p>
            <div className="flex sm:flex-nowrap flex-wrap  sm:gap-4 gap-2 lg:justify-start justify-center">
              <button className="bg-white hover:cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out text-black font-bold xl:px-6 xl:py-3 px-4 py-2 rounded-[40px] md:mt-4 mt-2 ml-2">
                Contact Me
              </button>
              <button className="font-bold hover:cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out  text-white xl:px-6 xl:py-3 px-4 py-2 rounded-[40px] md:mt-4 mt-2 bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)]">
                Download CV
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full order-1 flex lg:justify-start justify-center items-center  lg:pt-0 pt-[6rem]  lg:flex-nowrap flex-wrap">
            <div className="inline-block relative transition-all duration-300 ease-in-out 2xl:w-[500px] xll:w-[450px] xl:w-[400px]  2xl:h-[500px] xll:h-[450px] xl:h-[400px] lg:w-[350px] lg:h-[350px] md:w-[300px] w-[240px] md:h-[300px] h-[240px] ">
              {/* design circles  */}
              <div className="lg:w-[70px] w-[40px] lg:h-[70px] h-[40px] top-[11%] z-[1] rounded-full bg-[linear-gradient(90deg,_rgba(77,_2,_126,_1)_36%,_rgba(146,_16,_122,_1)_86%)] absolute"></div>
              <div className="lg:w-[70px] w-[40px] lg:h-[70px] h-[40px] top-[15%] lg:right-0  right-[-5%] z- rounded-full bg-[linear-gradient(90deg,_rgba(77,_2,_126,_1)_36%,_rgba(146,_16,_122,_1)_86%)] absolute"></div>
              <div className="w-[40px] h-[40px] lg:block hidden top-[-2%] right-[-30%] z-[1] rounded-full bg-[linear-gradient(90deg,_rgba(77,_2,_126,_1)_36%,_rgba(146,_16,_122,_1)_86%)] absolute"></div>
              <div className="lg:w-[150px] w-[120px] lg:h-[150px] h-[120px] lg:bottom-[-5%] bottom-[-27%] right-[-2%]   z- rounded-full bg-[linear-gradient(90deg,_rgba(77,_2,_126,_1)_36%,_rgba(146,_16,_122,_1)_86%)] absolute"></div>

              <div className="absolute xll:w-[200px]  lg:w-[160px] lg:block hidden h-fit  backdrop-blur-[5px] p-3  border-[1px] border-[#4470FF] z-50 rounded-[20px] xl:right-[-27%] right-[-34%]">
                <span className="flex gap-2 justify-center text-center text-[2.5rem] ">
                  <span className="bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)] font-semibold ">
                    7
                  </span>
                  <span className="bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)] font-semibold ">
                    +
                  </span>
                </span>
                <span className="block text-center text-[1.5rem] text-white font-semibold leading-[1.5rem] mt-3">
                  Months Experience
                </span>
              </div>
              <div className="h-full w-full rounded-full bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)] relative overflow-hidden">
                <img
                  className="absolute top-[-32%] right-[-9%] w-[116%] max-w-[1000%] [filter:drop-shadow(-12px_0px_16px_#262626)]"
                  src="/assets/images/sahel2.png"
                  alt=""
                  // adjust as needed
                />
              </div>
              <img
                className="absolute top-[-32%] right-[-9%] w-[116%] max-w-[1000%] [clip-path:polygon(5%_0,98%_0,87%_59%,19%_58%)]"
                src="assets/images/sahel2.png"
                alt=""
              />
            </div>
            <div className="lg:hidden  w-full flex justify-center items-center mt-6">
              <div className=" xll:w-[200px]  lg:w-[160px] w-[170px]  h-fit  backdrop-blur-[5px] p-3  border-[1px] border-[#4470FF] z-50 rounded-[20px] ">
                <span className="flex gap-2 justify-center text-center text-[2.5rem] ">
                  <span className="bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)] font-semibold ">
                    7
                  </span>
                  <span className="bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)] font-semibold ">
                    +
                  </span>
                </span>
                <span className="block text-center text-[1.5rem] text-white font-semibold leading-[1.5rem] mt-3">
                  Months Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
