import React from "react";

const Education = () => {
  const education = [
    {
      title: "10th Grade",
      institution: "Man Matha Nath High School",
      date: "2004 - 2007",
      desc: "Completed secondary education with focus on foundational subjects including Mathematics, Science, and Languages. Developed strong academic fundamentals that prepared me for higher studies.",
    },
    {
      title: "12th Grade",
      institution: "Man Matha Nath High School",
      date: "2008 - 2010",
      desc: "Pursued Science stream with specialization in Physics, Chemistry, and Mathematics. Gained problem-solving skills and scientific thinking that formed the basis for my technical education.",
    },
    {
      title: "Bachelor of Computer Application (BCA)",
      institution: "SVIMS",
      date: "2012 - 2015",
      desc: "Acquired comprehensive knowledge of computer applications, programming fundamentals (C, C++, Java), database management, and software development. Completed projects demonstrating practical implementation of theoretical concepts.",
    },
  ];

  const Card = ({ title, subtitle, date, desc }) => (
    <div className="relative xxl:pl-10 pl-6 py-5 group">
      {/* Animated diamond indicator */}
      <div className="absolute -left-2 top-[25px] w-[1.2rem] h-[1.2rem] bg-cyan-400 rotate-45 transition-all duration-300 group-hover:bg-purple-300 group-hover:scale-110"></div>
      
      <h3 className="font-semibold text-h5-xs sm:text-h5-sm md:text-h5-md lg:text-h5-lg lgg:text-h5-lgg xl:text-h5-xl 2xl:text-h5-2xl text-cyan-300 mb-3 group-hover:text-purple-200 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg lgg:text-p-lgg xl:text-p-xl 2xl:text-p-2xl text-purple-100">
        <span className="text-amber-200">{subtitle}</span> / <span className="text-emerald-300">{date}</span>
      </p>
      
      <p className="text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg lgg:text-p-lgg xl:text-p-xl 2xl:text-p-2xl text-purple-50 mt-2 opacity-90">
        {desc}
      </p>
      
      {/* Bottom border animation */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 w-0 group-hover:w-full transition-all duration-500"></div>
    </div>
  );

  return (
    <section className="px-4 py-12 md:px-10 lg:px-16 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Column */}
          <div>
            <h2 className="text-h2-xs sm:text-h2-sm md:text-h2-md lg:text-h2-lg lgg:text-h2-lgg xl:text-h2-xl 2xl:text-h2-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-300">
              Education Journey
            </h2>
            <div className="relative before:absolute before:content-[''] before:w-1 before:h-full before:bg-gradient-to-b from-cyan-500 via-purple-400 to-purple-600 before:left-0 before:top-0 before:z-[-1] before:rounded-2xl">
              {education.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  subtitle={item.institution}
                  date={item.date}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>

          {/* Video Column */}
          <div className="flex justify-center items-center relative">
            <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 opacity-50 blur-xl"></div>
            <video
              className="w-full h-auto rounded-lg z-10 border-2 border-cyan-400/30 shadow-lg shadow-purple-900/50"
              src="/assets/images/6963744-hd_1280_720_25fps.mp4"
              
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;