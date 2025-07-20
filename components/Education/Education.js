import React from "react";

const Education = () => {
  return (
    <section
      id="Education"
      className="min-h-screen relative flex justify-center items-center lg:px-8 lg:py-12 px-4 py-8"
    >
      {/* circle bubble  */}
      <div className="w-[35vw] h-[35vw]  rounded-full absolute top-[-1%] left-[-13%] blur-[241px] bg-[#6002B3B8] opacity-60 "></div>
      <div className="w-[35vw] h-[35vw]  rounded-full absolute top-[15%] right-[-8%] blur-[241px] bg-[#6002B3B8] opacity-60 "></div>

      {/* dotted image background  */}
      {/* <img className="absolute w-full h-auto top-0 left-0 opacity-[0.5] " src="src/assets/images/49189265_9211410 1-min.png" alt="" /> */}

      <div className="container mx-auto  relative z-10">
        <h2 className="xll:text-[6rem] xl:[5rem] lg:[4.5rem] text-[3.8rem] leading-[5rem] mb-[13rem] text-white lg:text-left text-center">
          About Me
        </h2>
        <div className="flex lg:flex-nowrap flex-wrap ">
          <div className="lg:w-1/2 w-full order-1 relative px-8">

          {/* card 1 */}
            <div className="w-full px-6 py-8 backdrop-blur-[5px] flex gap-3 rounded-[15px] border-[1px] items-center border-[#4470FF]  mb-6">
              <div className="min-w-[100px] min-h-[100px] bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)] rounded-full flex items-center justify-center"></div>
              <div>
                <h3 className="text-[1.5rem] text-white">Regent Education & Research Foundation Group of Institutions</h3>
                <p className="text-[1rem] text-white">Bachelor Of Computer Applications</p>
              </div>
            </div>
          {/* card 2 */}
            <div className="w-full px-6 py-8 backdrop-blur-[5px] flex gap-3 rounded-[15px] border-[1px] items-center border-[#4470FF]  mb-6">
              <div className="min-w-[100px] min-h-[100px] bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)] rounded-full flex items-center justify-center"></div>
              <div>
                <h3 className="text-[1.5rem] text-white">Regent Education & Research Foundation Group of Institutions</h3>
                <p className="text-[1rem] text-white">Bachelor Of Computer Applications</p>
              </div>
            </div>
          {/* card 3 */}
            <div className="w-full px-6 py-8 backdrop-blur-[5px] flex gap-3 rounded-[15px] border-[1px] items-center border-[#4470FF] ">
              <div className="min-w-[100px] min-h-[100px] bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)] rounded-full flex items-center justify-center"></div>
              <div>
                <h3 className="text-[1.5rem] text-white">Regent Education & Research Foundation Group of Institutions</h3>
                <p className="text-[1rem] text-white">Bachelor Of Computer Applications</p>
              </div>
            </div>


          </div>
          <div className="lg:w-1/2 w-full order-2 flex lg:justify-start justify-center items-center  lg:pt-0 pt-[6rem]  lg:flex-nowrap flex-wrap">
            <img
              className="w-[80%] h-auto object-contain"
              src="src/assets/images/Mask group-min.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
