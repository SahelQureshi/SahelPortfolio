import React from "react";

const Banner = () => {
  return (
    <section
      id="hero-section"
      className="min-h-screen relative flex justify-center items-center lg:px-8 lg:py-12 px-4 py-8"
    >
      
      {/* circle bubble  */}
      <div className="w-[35vw] h-[35vw]  rounded-full absolute top-[-1%] left-[-13%] blur-[241px] bg-[#6002B3B8] opacity-60 "></div>
      <div className="w-[35vw] h-[35vw]  rounded-full absolute top-[15%] right-[-8%] blur-[241px] bg-[#6002B3B8] opacity-60 "></div>


      <div className="container mx-auto flex lg:flex-nowrap flex-wrap relative z-10  ">
        <div className="lg:w-1/2 w-full lg:order-1 order-2 lg:text-left text-center">
          <span className="text-white font-semibold 2xl:text-[3.8rem] xll:text-[3.4rem] xl:text-[2.8rem] md:text-[2.9rem] text-[2.2rem] lg:inline-block block">
            Hi’ I am
          </span>
          <h1 className="2xl:text-[5.7rem] xll:text-[5rem] xl:text-[4.7rem] md:text-[3.7rem] text-[3.2rem] lg:leading-[6.1rem] leading-[4.1rem] font-bold bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)] bg-clip-text text-transparent ">
            Sahel Qureshi
          </h1>
          <span className="text-white 2xl:text-[3rem] xl:text-[2.8rem] md:text-[2rem] text-[1.6rem] font-medium">
            Full Stack Web Developer
          </span>
          <div className="flex gap-4 flex-nowrap lg:mt-[2rem] my-4 lg:mb-[1rem]  lg:justify-start justify-center">
            <a
              href=""
              className=" overflow-hidden xl:w-[50px] xl:h-[50px]  w-[40px] h-[40px]flex justify-center items-center hover:scale-[1.2] transition-all duration-300 ease-in-out"
            >
              <img
                className="w-full h-auto rounded-full "
                src="assets/icons/github.png"
                alt=""
              />
            </a>
            <a
              href=""
              className=" overflow-hidden xl:w-[50px] xl:h-[50px]  w-[40px] h-[40px]flex justify-center items-center hover:scale-[1.2] transition-all duration-300 ease-in-out"
            >
              <img
                className="w-full h-auto rounded-full "
                src="assets/icons/linkedin.png"
                alt=""
              />
            </a>
            <a
              href=""
              className=" overflow-hidden xl:w-[50px] xl:h-[50px]  w-[40px] h-[40px]flex justify-center items-center hover:scale-[1.2] transition-all duration-300 ease-in-out"
            >
              <img
                className="w-full h-auto rounded-full "
                src="assets/icons/facebook.png"
                alt=""
              />
            </a>
            <a
              href=""
              className=" overflow-hidden xl:w-[50px] xl:h-[50px]  w-[40px] h-[40px]flex justify-center items-center hover:scale-[1.2] transition-all duration-300 ease-in-out"
            >
              <img
                className="w-full h-auto rounded-full "
                src="assets/icons/social.png"
                alt=""
              />
            </a>
            <a
              href=""
              className=" overflow-hidden bg-white rounded-full p-[6px] xl:w-[50px] xl:h-[50px]  w-[40px] h-[40px]flex justify-center items-center hover:scale-[1.2] transition-all duration-300 ease-in-out"
            >
              <img
                className="w-full h-auto  "
                src="assets/icons/gmail.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex sm:flex-nowrap flex-wrap  sm:gap-4 gap-2 lg:justify-start justify-center">
            <button className="font-bold hover:cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out  text-white xl:px-6 xl:py-3 px-4 py-2 rounded-[40px] md:mt-4 mt-2 bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)]">
              Download CV
            </button>
            <button className="bg-white hover:cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out text-black font-bold xl:px-6 xl:py-3 px-4 py-2 rounded-[40px] md:mt-4 mt-2 ml-2">
              Contact Me
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full lg:order-2 order-1 flex justify-center xl:items-end items-center lg:pt-0 pt-[6rem]">
          <div className="inline-block relative transition-all duration-300 ease-in-out 2xl:w-[500px] xll:w-[450px] xl:w-[400px]  2xl:h-[500px] xll:h-[450px] xl:h-[400px] lg:w-[350px] lg:h-[350px] md:w-[300px] w-[240px] md:h-[300px] h-[240px] ">
            <div className="h-full w-full rounded-full bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)] relative overflow-hidden">
              <img
                className="absolute top-[-29%] right-[-7%] [filter:drop-shadow(-12px_0px_16px_#262626)]"
                src="assets/images/sahel.png"
                alt=""
              />
            </div>
            <img
              className="absolute top-[-29%] right-[-7%] [clip-path:polygon(5%_0,98%_0,87%_59%,19%_58%)]"
              src="assets/images/sahel.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
