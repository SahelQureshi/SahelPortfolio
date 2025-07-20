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
          <div className="lg:w-1/2 w-full lg:order-1 order-2 relative px-8 flex justify-center items-center">

          <div>
            {/* card 1 */}
            <div className="w-full px-6 py-8 backdrop-blur-[5px] flex md:flex-nowrap flex-wrap md:justify-start justify-center md:text-left text-center gap-3 rounded-[15px] border-[1px] items-center border-[#4470FF]  mb-6">
              <div className="xl:min-w-[100px] xl:min-h-[100px] xl:w-[100px] xl:h-[100px] min-w-[65px] min-h-[65px] w-[65px] h-[65px] p-[10px]  bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)] rounded-full flex items-center justify-center">
                <img className="w-full h-auto" src="assets/images/education.png" alt="" />
              </div>
              <div>
                <h3 className="xl:text-[1.5rem] lgg:text-[1.2rem] lg:text-[1.4rem] md:text-[1.5rem] text-[1.2rem]  text-white">Regent Education & Research Foundation Group of Institutions</h3>
                <p className="text-[1rem] text-white">Bachelor Of Computer Applications</p>
              </div>
            </div>
          {/* card 2 */}
            <div className="w-full px-6 py-8 backdrop-blur-[5px] flex md:flex-nowrap flex-wrap md:justify-start justify-center md:text-left text-center gap-3 rounded-[15px] border-[1px] items-center border-[#4470FF]  mb-6">
              <div className="xl:min-w-[100px] xl:min-h-[100px] xl:w-[100px] xl:h-[100px] min-w-[65px] min-h-[65px] w-[65px] h-[65px] p-[10px]  bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)] rounded-full flex items-center justify-center"> <img className="w-full h-auto" src="assets/images/education.png" alt="" /></div>
              <div>
                <h3 className="xl:text-[1.5rem] lgg:text-[1.2rem] lg:text-[1.4rem] md:text-[1.5rem] text-[1.2rem]  text-white">NCP Man MathaNath High 
School (H/S)</h3>
                <p className="text-[1rem] text-white">12’th Standard</p>
              </div>
            </div>
          {/* card 3 */}
            <div className="w-full px-6 py-8 backdrop-blur-[5px] flex md:flex-nowrap flex-wrap md:justify-start justify-center md:text-left text-center gap-3 rounded-[15px] border-[1px] items-center border-[#4470FF] ">
              <div className="xl:min-w-[100px] xl:min-h-[100px] xl:w-[100px] xl:h-[100px] min-w-[65px] min-h-[65px] w-[65px] h-[65px] p-[10px]  bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)] rounded-full flex items-center justify-center"> <img className="w-full h-auto" src="assets/images/education.png" alt="" /></div>
              <div>
                <h3 className="xl:text-[1.5rem] lgg:text-[1.2rem] lg:text-[1.4rem] md:text-[1.5rem] text-[1.2rem]  text-white">NCP Man MathaNath High 
School (H/S)</h3>
                <p className="text-[1rem] text-white">10’th Standard</p>
              </div>
            </div>
          </div>


          </div>
          <div className="lg:w-1/2 w-full lg:order-2 order-1 flex py-4  justify-center items-center  lg:pt-0 pt-[6rem]  lg:flex-nowrap flex-wrap">
            <img
              className=" w-auto 2xl:h-[600px] xl:h-[500px] lg:h-[400px] md:h-[350px] h-[300px] object-contain"
              src="assets/images/Mask group-min.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
