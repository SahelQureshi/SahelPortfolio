"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, MapPin, Award, Download, Play, Sparkles, Trophy, Target, Clock, ChevronRight, Star, Building } from "lucide-react";

const experiences = [
  {
    period: "December 2024 - Present",
    role: "MERN Stack Developer",
    company: "Leelia Web Solutions Pvt Ltd",
    location: "Remote",
    type: "Full-time",
    description: "At Leelia Web Solutions, I have been contributing to full-stack development using the MERN stack. My responsibilities include building scalable REST APIs, dynamic front-end interfaces, and implementing secure authentication flows. I collaborate closely with the UI/UX and DevOps teams to deliver modern and high-performing web applications.",
    achievements: ["Built 5+ scalable APIs", "Improved app performance by 40%", "Led authentication system implementation"],
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    current: true
  },
  {
    period: "October 2024 - December 2024",
    role: "React.js Developer",
    company: "Talentrise Technokrate Pvt Ltd",
    location: "Remote",
    type: "Full-time",
    description: "At Talentrise Technokrate, I specialized in crafting modern UI components using React.js. I focused on building reusable components, improving performance through code-splitting and lazy loading, and integrating APIs to build dynamic dashboards. My role helped shape intuitive user experiences for enterprise clients.",
    achievements: ["Created 20+ reusable components", "Optimized load times by 30%", "Built 3 enterprise dashboards"],
    technologies: ["React", "JavaScript", "CSS3", "REST APIs", "Git"],
    current: false
  },
  {
    period: "June 2024 - September 2024",
    role: "Frontend Development Intern",
    company: "EMEI",
    location: "On-site",
    type: "Internship",
    description: "During my industrial training at EMEI, I gained hands-on experience with core front-end technologies and the React.js framework. This period laid a strong foundation in responsive design, component architecture, and version control using Git. It prepared me for professional development roles with practical exposure.",
    achievements: ["Mastered React fundamentals", "Built responsive layouts", "Learned Git workflows"],
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Git"],
    current: false
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Enhanced header animation
      gsap.from(headerRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
      });

      // Timeline animation
      gsap.from(timelineRef.current, {
        scaleY: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Cards stagger animation
      gsap.from(cardsRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        onComplete: () => setIsVisible(true),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 md:py-32 "
    >
      {/* Enhanced background with multiple layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/30 to-pink-600/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/15 blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-x-0 top-1/3 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        {/* Enhanced header section */}
        <div ref={headerRef} className="mx-auto max-w-4xl text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm text-white/80 backdrop-blur-xl shadow-lg">
            <Briefcase className="h-5 w-5 text-blue-300 animate-pulse" />
            <span className="font-medium">Professional Journey</span>
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" />
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-h2-xs sm:text-h2-sm md:text-h2-md lg:text-h2-lg lgg:text-h2-lgg xl:text-h2-xl 2xl:text-h2-2xl text-white">
            My <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>

          <p className="mt-4 text-white/70 text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg lgg:text-p-lgg xl:text-p-xl 2xl:text-p-2xl leading-relaxed">
            A journey of growth and innovation in web development, from foundational learning to leading
            full-stack projects. Each role has been a stepping stone in mastering modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Enhanced Video/Stats Section */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-8">
              {/* Video section */}
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/15 to-pink-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-1000" />

                <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl">
                  {/* Video */}
                  <div className="relative aspect-video overflow-hidden rounded-t-3xl">
                    <video
                      className="w-full h-full object-cover"
                      src="/assets/images/6963744-hd_1280_720_25fps.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-4 rounded-full bg-white/20 backdrop-blur-xl border border-white/30">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content overlay */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                        <Building className="h-6 w-6 text-blue-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Professional Growth</h3>
                        <p className="text-white/60 text-sm">Building Expertise & Impact</p>
                      </div>
                    </div>

                    <p className="text-white/80 text-base leading-relaxed mb-6">
                      Each role has been an opportunity to grow, learn, and contribute meaningfully.
                      From internships to full-time positions, every experience has shaped my approach
                      to development and problem-solving.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-2xl font-bold text-blue-300 mb-1">2+</div>
                        <div className="text-sm text-white/60">Years Experience</div>
                      </div>
                      <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-2xl font-bold text-purple-300 mb-1">3</div>
                        <div className="text-sm text-white/60">Companies</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download resume */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 mb-4">
                    <Download className="h-4 w-4 text-blue-300" />
                    <span className="text-sm font-medium text-white">Download Resume</span>
                  </div>

                  <p className="text-white/80 text-base mb-6 leading-relaxed">
                    Get a detailed overview of my skills, experience, and achievements.
                    Download my resume to learn more about my professional background.
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download CV</span>
                    <ChevronRight className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Skills overview */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                      <Star className="h-5 w-5 text-purple-300" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Core Expertise</h3>
                  </div>

                  <div className="space-y-3">
                    {["Full-Stack Development", "Modern UI/UX", "API Development", "Performance Optimization"].map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                        <span className="text-sm text-white/80">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Enhanced timeline line */}
              <div
                ref={timelineRef}
                className="absolute sm:block hidden left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-500 rounded-full shadow-lg"
                style={{ transformOrigin: 'top' }}
              />

              {/* Timeline nodes */}
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Timeline node */}
                  <div className={`absolute left-4 top-8 w-8 h-8 rounded-full border-4 border-gray-900 shadow-lg z-10 sm:flex hidden items-center justify-center ${
                    exp.current
                      ? 'bg-gradient-to-br from-green-400 to-emerald-500 animate-pulse'
                      : 'bg-gradient-to-br from-blue-400 to-purple-500'
                  }`}>
                    <div className={`w-3 h-3 rounded-full ${
                      exp.current ? 'bg-green-200' : 'bg-white'
                    }`} />
                  </div>

                  {/* Experience card */}
                  <div className="sm:ml-20 group">
                    <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                      {/* Current role indicator */}
                      {exp.current && (
                        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30">
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                          <span className="text-xs font-semibold text-green-300">Current</span>
                        </div>
                      )}

                      {/* Animated particles effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-white/60 animate-ping" style={{ animationDelay: '0s' }} />
                        <div className="absolute top-3/4 right-1/4 h-1.5 w-1.5 rounded-full bg-white/40 animate-ping" style={{ animationDelay: '0.5s' }} />
                        <div className="absolute bottom-1/4 left-1/3 h-1 w-1 rounded-full bg-white/50 animate-ping" style={{ animationDelay: '1s' }} />
                      </div>

                      <div className="relative">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4 mb-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                                <Briefcase className="h-5 w-5 text-blue-300" />
                              </div>
                              <div>
                                <h3 className="font-bold text-xl text-white leading-tight">
                                  {exp.role}
                                </h3>
                                <p className="text-blue-300 font-medium text-sm">
                                  {exp.company}
                                </p>
                              </div>
                            </div>

                            {/* Period, location and type */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-4">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-purple-300" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-pink-300" />
                                <span>{exp.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-cyan-300" />
                                <span className={`px-2 py-0.5 rounded-full text-xs ${
                                  exp.type === 'Full-time'
                                    ? 'bg-green-500/20 text-green-300'
                                    : 'bg-blue-500/20 text-blue-300'
                                }`}>
                                  {exp.type}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-white/80 text-base leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <Target className="h-4 w-4 text-cyan-300" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <Trophy className="h-4 w-4 text-purple-300" />
                            Key Achievements
                          </h4>
                          <div className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                              >
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                                <span className="text-sm text-white/80">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Experience;