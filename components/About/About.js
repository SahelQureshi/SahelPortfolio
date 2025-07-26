import Image from "next/image";
import React from "react";
import { Phone, Calendar, Mail, MapPin } from "lucide-react";
// import Image from "next/image";

const About = () => {
  return (
    <section
      id="about-us"
      className="min-h-screen relative flex justify-center items-center lg:px-8 lg:py-12 px-4 py-8"
    >
      {/* circle bubble  */}
      <div className="lg:w-[35vw] w-[45vh] lg:h-[35vw] h-[45vh]  rounded-full absolute top-[-1%] left-[-13%] blur-[241px] bg-[#6002B3B8] opacity-60 "></div>
      <div className="lg:w-[35vw] w-[45vh] lg:h-[35vw] h-[45vh]  rounded-full absolute top-[15%] right-[-8%] blur-[241px] bg-[#6002B3B8] opacity-60 "></div>

      {/* dotted image background  */}
      {/* <img className="absolute w-full h-auto bottom-0 left-0 opacity-[0.5]" src="assets/images/49189265_9211410 1-min.png" alt="" /> */}

      <div className="container mx-auto relative z-10">
        <div>
          <div className="flex flex-col lg:flex-row items-center gap-3">
            {/* Left Column */}
            <div className="flex flex-col items-center text-center lg:text-left lg:items-start w-full lg:w-fit 2xl:pr-[10rem]  lg:pr-[3rem]  space-y-4 text-white">
              <p className="italic text-sm">Crazy Coding ....!</p>
              <h2 className="text-h2-xs sm:text-h2-sm md:text-h2-md lg:text-h2-lg lgg:text-h2-lgg xl:text-h2-xl 2xl:text-h2-2xl font-bold">
                WELCOME TO...
              </h2>
              <div className="relative ">
                <div className="inline-block md:mt-24 mt-16 relative transition-all duration-300 ease-in-out 2xl:w-[400px] xll:w-[450px] xl:w-[400px]  2xl:h-[400px] xll:h-[450px] xl:h-[400px] lg:w-[350px] lg:h-[350px] md:w-[300px] w-[240px] md:h-[300px] h-[240px] ">
                  {/* design circles  */}
                  <div className="lg:w-[70px] w-[40px] lg:h-[70px] h-[40px] top-[11%] z-[1] rounded-full bg-[linear-gradient(90deg,_rgba(77,_2,_126,_1)_36%,_rgba(146,_16,_122,_1)_86%)] absolute"></div>
                  <div className="lg:w-[70px] w-[40px] lg:h-[70px] h-[40px] top-[15%] lg:right-0  right-[-5%] z- rounded-full bg-[linear-gradient(90deg,_rgba(77,_2,_126,_1)_36%,_rgba(146,_16,_122,_1)_86%)] absolute"></div>
                  <div className="w-[40px] h-[40px] lg:block hidden top-[-2%] right-[-30%] z-[1] rounded-full bg-[linear-gradient(90deg,_rgba(77,_2,_126,_1)_36%,_rgba(146,_16,_122,_1)_86%)] absolute"></div>
                  <div className="lg:w-[100px] w-[70px] lg:h-[100px] h-[70px] lg:bottom-[-5%] bottom-[7%] right-[-2%]   z- rounded-full bg-[linear-gradient(90deg,_rgba(77,_2,_126,_1)_36%,_rgba(146,_16,_122,_1)_86%)] absolute"></div>

                  {/* <div className="absolute xll:w-[200px]  lg:w-[160px] lg:block hidden h-fit  backdrop-blur-[5px] p-3  border-[1px] border-[#4470FF] z-50 rounded-[4px] xl:right-[-27%] right-[-34%]">
                    <span className="flex gap-2 justify-center text-center lg:text-[2.5rem] text-[1.5rem]">
                      <span className="bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)] font-semibold ">
                        8
                      </span>
                      <span className="bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)] font-semibold ">
                        +
                      </span>
                    </span>
                    <span className="block text-center lg:text-[1.5rem] text-[1.2rem] text-white font-semibold lg:leading-[1.5rem] leading-[1.3rem] mt-3">
                      Months Experience
                    </span>
                  </div> */}
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
                {/* <div className="lg:hidden  w-full flex justify-center items-center mt-6">
                  <div className=" xll:w-[200px]  lg:w-[160px] w-[140px]  h-fit  backdrop-blur-[5px] p-3  border-[1px] border-[#4470FF] z-50 rounded-[4px] ">
                    <span className="flex gap-2 justify-center text-center lg:text-[2.5rem] text-[1.5rem] ">
                      <span className="bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)] font-semibold ">
                        8
                      </span>
                      <span className="bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)] font-semibold ">
                        +
                      </span>
                    </span>
                    <span className="block text-center lg:text-[1.5rem] text-[1.2rem] text-white font-semibold leading-[1.5rem] mt-3">
                      Months Experience
                    </span>
                  </div>
                </div> */}
              </div>

              <h4
                className="w-full text-center text-h4-xs sm:text-h4-sm md:text-h4-md lg:text-h4-lg lgg:text-h4-lgg xl:text-h4-xl 2xl:text-h4-2xl 
 font-bold"
              >
                <span className="text-pink-600">SAHEL</span>
                <span className="text-orange-400">QURESHI</span>
              </h4>
              <p className="italic w-full font-semibold text-center text-p-xs  sm:text-p-sm md:text-p-md lg:text-p-lg lgg:text-p-lgg xl:text-p-xl 2xl:text-p-2xl">
                MERN Stack Developer{" "}
                <span className="not-italic font-normal">based in</span>{" "}
                <span className="font-bold italic">India</span>
              </p>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-auto space-y-8">
              <h2
                className="w-full text-white lg:text-left text-center text-h2-xs sm:text-h2-sm md:text-h2-md lg:text-h2-lg lgg:text-h2-lgg xl:text-h2-xl 2xl:text-h2-2xl 
 font-bold"
              >
                Full Stack Developer
              </h2>

              {/* Contact Info */}
              {/* Contact Info Grid - Centered on Mobile, Left-Aligned from sm+ */}
              {/* Contact Info Grid - Text Size Increased */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white text-center sm:text-left">
                {[
                  {
                    icon: <Phone className="w-6 h-6" />,
                    text: "+91 90079 47586",
                    isBold: true,
                  },
                  {
                    icon: <Calendar className="w-6 h-6" />,
                    text: "11+ Months",
                    isBold: true,
                  },
                  {
                    icon: <Mail className="w-6 h-6" />,
                    text: "sahelqureshi0089@gmail.com",
                    isItalic: true,
                  },
                  {
                    icon: <MapPin className="w-6 h-6" />,
                    text: "India",
                    isItalic: true,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 justify-center sm:justify-start text-base sm:text-lg"
                  >
                    {item.icon}
                    <span
                      className={`${item.isBold ? "font-semibold" : ""} ${
                        item.isItalic ? "italic" : ""
                      }`}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Experience Section - Larger Text */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-center md:text-left">
                {[
                  {
                    count: "2+",
                    subtitle: "Years experience...",
                    description:
                      "Hello there! My name is <span class='text-purple-500 font-medium'>Sahel Qureshi</span>. I'm a MERN Stack Developer with a strong passion for building scalable, responsive, and user-friendly web applications using modern development practices.",
                  },
                  {
                    count: "14",
                    subtitle: "Clients Worldwide...",
                    description:
                      "With experience in full-stack development, I've acquired the skills and tools necessary to deliver production-ready solutions that make a real impact.",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-[#ffffff08] p-5 rounded-lg">
                    <h3 className="text-pink-500 md:text-pink-600 text-3xl font-bold">
                      {item.count}{" "}
                      <span className="text-white text-lg font-semibold italic">
                        {item.subtitle}
                      </span>
                    </h3>
                    <p
                      className="mt-3 text-white text-base sm:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                ))}
              </div>

              {/* Quote - Larger Text */}
              <div className="bg-[#ffffff0a] text-white backdrop-blur-[28px] border border-[#ffffff12] text-center p-7 rounded-md mt-10">
                <p className="italic text-lg sm:text-xl leading-relaxed">
                  “Great software is not built with just code, but with clarity,
                  consistency, and care. I believe in clean, scalable solutions
                  that solve real-world problems — one line at a time.”
                </p>
              </div>

              <a
                href="#"
                className="lg:mr-auto lg:mx-0 mx-auto hover:text-gray-700 bg-gradient-to-r from-[#984ff2] to-[#4470ff] py-2 px-5 rounded-[35px] w-fit text-center flex justify-center  text-[1.1rem] no-underline transition-all duration-300 ease-in-out items-center gap-1 font-semibold"
              >
                Download CV
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.293 2.293a1 1 0 011.414 0L18 6.586a1 1 0 010 1.414l-6.586 6.586a1 1 0 01-1.414-1.414L15.586 8H5a1 1 0 110-2h10.586l-4.293-4.293a1 1 0 010-1.414z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
