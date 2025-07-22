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
        <h2 className="lg:mb-[4rem] mb-[2rem] xll:text-[6rem] xl:text-[5rem] lg:text-[4.5rem] text-[3.8rem] leading-[5rem]  text-white lg:text-left text-center">
          Experience
        </h2>
        <div className="flex lg:flex-nowrap flex-wrap justify-between  gap-3">
          <div class=" lg:w-[33%] w-full  ">
            <div class=" p-9  lg:w-full sm:w-[450px] w-full     shadow-md mb-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
              <div className="xxl:h-[500px] xl:h-[450px] lg:h-[400px] sm:h-[400px] h-[320px] w-full">
                <img
                  src="assets/images/top-view-unrecognizable-hacker-performing-cyberattack-night 2 (1)-min.jpg"
                  alt="Programming Image"
                  className="rounded-lg h-full  w-full mb-4 object-cover"
                />
              </div>
              <p class="text-center text-lg px-4 text-purple-200">
                A creative and sharp programmer, I weave logic like a master
                architect, turning complex problems into elegant solutions with
                precision and innovation.
              </p>
            </div>
          </div>

          <div class=" lg:w-[42%] w-full flex flex-col gap-10">
            <div class=" p-6 shadow-md flex items-center gap-4 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
              <div className="bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)] w-[100px] h-[120px] p-2 overflow-hidden rounded-[10px]">
                <img
                  className="w-full h-full object-contain"
                  src="assets/images/company1.png"
                  alt=""
                />
              </div>
              <div>
                <h3 class="xxl:text-3xl xl:text-2xl lg:text-xl text-[1.5rem] leading-relaxed font-semibold text-purple-400">
                  Leelija Web Solutions Pvt Ltd
                </h3>
                <p class="xxl:text-xl lg:text-lg text-[1.2rem] text-white">
                  <span class="font-semibold ">Position:</span> Web
                  Developer
                </p>
                <p class="xxl:text-xl lg:text-lg text-[1.2rem] text-white">
                  <span class="font-semibold">Joining Date:</span> 16 December
                  &nbsp;&nbsp;<span class="font-semibold">Present</span>
                </p>
              </div>
            </div>

            <div class=" p-6 shadow-md flex items-center gap-4 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
              <div className="bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)] w-[100px] h-[120px] p-2 overflow-hidden rounded-[10px]">
                <img
                  className="w-full h-full object-contain"
                  src="assets/images/company1.png"
                  alt=""
                />
              </div>
              <div>
                <h3 class="xxl:text-3xl xl:text-2xl lg:text-xl text-[1.5rem] leading-relaxed font-semibold text-purple-400">
                  Leelija Web Solutions Pvt Ltd
                </h3>
                <p class="xxl:text-xl lg:text-lg text-[1.2rem]  text-white">
                  <span class="font-semibold">Position:</span> Web
                  Developer
                </p>
                <p class="xxl:text-xl lg:text-lg text-[1.2rem] text-white ">
                  <span class="font-semibold">Joining Date:</span> 16 December
                  &nbsp;&nbsp;<span class="font-semibold">Present</span>
                </p>
              </div>
            </div>

            <div class=" p-6 shadow-md flex items-center gap-4 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
              <div className="bg-[linear-gradient(90deg,_rgba(152,79,242,1)_0%,_rgba(68,112,255,1)_100%)] w-[100px] h-[120px] p-2 overflow-hidden rounded-[10px]">
                <img
                  className="w-full h-full object-contain"
                  src="assets/images/company1.png"
                  alt=""
                />
              </div>
              <div>
                <h3 class="xxl:text-3xl xl:text-2xl lg:text-xl text-[1.5rem] leading-relaxed font-semibold text-purple-400">
                  Leelija Web Solutions Pvt Ltd
                </h3>
                <p class="xxl:text-xl lg:text-lg text-[1.2rem] text-white">
                  <span class="font-semibold">Position:</span> Web
                  Developer
                </p>
                <p class="xxl:text-xl lg:text-lg text-[1.2rem] text-white">
                  <span class="font-semibold">Joining Date:</span> 16 December
                  &nbsp;&nbsp;<span class="font-semibold">Present</span>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[25%] lg:block hidden">
            <video
              className="w-full rounded-[15px]"
              src="assets/images/coding-video.mp4"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experice;
