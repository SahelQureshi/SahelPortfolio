"use client";

import React, { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, MapPin, Award, Download, Play, Sparkles, Trophy, Target, Clock, ChevronRight, Star, Building, Code, Rocket, Users, Zap, Medal, Globe, TrendingUp, CheckCircle } from "lucide-react";

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
    current: true,
    icon: Rocket,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10"
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
    current: false,
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10"
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
    current: false,
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10"
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);
  const statsRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [screenWidth, setScreenWidth] = useState(1024);
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const updateScreenWidth = () => {
      if (typeof window !== 'undefined') {
        setScreenWidth(window.innerWidth);
      }
    };

    window.addEventListener('resize', updateScreenWidth);
    return () => window.removeEventListener('resize', updateScreenWidth);
  }, [isClient]);

  const disableAnimations = isClient && screenWidth < 991;

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0.1, 0.3]
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const threshold = entry.intersectionRatio;
          
          if (element.classList.contains('experience-header')) {
            if (threshold > 0.1) element.classList.add('animate-in');
          } else if (element.classList.contains('experience-timeline')) {
            if (threshold > 0.1) element.classList.add('animate-in');
          } else if (element.classList.contains('experience-card')) {
            if (threshold > 0.1) element.classList.add('animate-in');
          } else if (element.classList.contains('stats-section')) {
            if (threshold > 0.1) element.classList.add('animate-in');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (headerRef.current) {
      headerRef.current.classList.add('experience-header');
      observer.observe(headerRef.current);
    }

    if (timelineRef.current) {
      timelineRef.current.classList.add('experience-timeline');
      observer.observe(timelineRef.current);
    }

    if (statsRef.current) {
      statsRef.current.classList.add('stats-section');
      observer.observe(statsRef.current);
    }

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.classList.add('experience-card');
        observer.observe(card);
      }
    });

    // Auto-rotate active card for desktop
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % experiences.length);
    }, 5000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const navbarHeight = window.innerWidth >= 768 ? 80 : 64;
      const offsetTop = element.offsetTop - navbarHeight - 20;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const statsData = [
    { label: "Projects Delivered", value: "25+", icon: Briefcase, color: "emerald" },
    { label: "Happy Clients", value: "15+", icon: Users, color: "blue" },
    { label: "Tech Stack", value: "10+", icon: Code, color: "purple" },
    { label: "Performance Boost", value: "40%", icon: TrendingUp, color: "orange" }
  ];

  return (
    <section ref={sectionRef} id="experience" className="relative py-24 md:py-32 ">
      {/* Enhanced animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        
        
        {/* Animated gradient orbs */}
        <div className={`absolute -top-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-500/20 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '6s' }} />
        <div className={`absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/20 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '8s', animationDelay: '1s' }} />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-indigo-500/10 to-violet-500/5 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '10s', animationDelay: '2s' }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}
        />
        
        {/* Floating particles */}
        <div className={`absolute top-20 right-[10%] w-2 h-2 rounded-full bg-blue-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '4s' }} />
        <div className={`absolute bottom-32 left-[15%] w-3 h-3 rounded-full bg-purple-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className={`absolute top-1/3 right-[80%] w-1.5 h-1.5 rounded-full bg-cyan-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        <div className={`absolute bottom-1/4 right-[20%] w-2.5 h-2.5 rounded-full bg-pink-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced header section */}
        <div ref={headerRef} className="mx-auto max-w-4xl text-center mb-20 opacity-0 translate-y-8 transition-all duration-700 experience-header">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 text-sm text-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <Briefcase className={`h-5 w-5 text-blue-300 ${!disableAnimations ? 'animate-pulse' : ''}`} />
            <span className="font-medium bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Professional Journey</span>
            <div className={`h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 ${!disableAnimations ? 'animate-pulse' : ''}`} />
          </div>

          <h2 className="mt-8 font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">
            My
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
              Work Experience
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
            A journey of growth, innovation, and technical excellence. From internships to leadership roles,
            each position has shaped my expertise in modern web development.
          </p>
        </div>

        {/* Stats Overview
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 opacity-0 translate-y-8 transition-all duration-700 stats-section">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center transition-all duration-500 hover:scale-105 hover:border-white/20"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <stat.icon className={`h-8 w-8 text-${stat.color}-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
              <div className={`text-3xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-300 bg-clip-text text-transparent mb-1`}>
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Experience Timeline */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Enhanced timeline line */}
              <div
                ref={timelineRef}
                className="absolute sm:block hidden left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-500 rounded-full opacity-0 scale-y-0 transition-all duration-1000 experience-timeline"
                style={{ transformOrigin: 'top' }}
              />

              {/* Timeline nodes */}
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                return (
                  <div
                    key={index}
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="relative mb-12 last:mb-0 opacity-0 translate-x-[-30px] transition-all duration-700 experience-card"
                    style={{ transitionDelay: `${index * 150}ms` }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Timeline node */}
                    <div className={`absolute sm:flex hidden left-4 top-8 w-10 h-10 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-white/20 shadow-xl z-10 items-center justify-center ${
                      exp.current && !disableAnimations ? 'animate-pulse' : ''
                    }`}>
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${
                        exp.current ? 'from-emerald-400 to-green-400' : 'from-blue-400 to-purple-400'
                      }`} />
                    </div>

                    {/* Experience card */}
                    <div className="sm:ml-20 group">
                      <div className={`relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-sm p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${hoveredCard === index ? 'border-white/30' : ''}`}>
                        {/* Animated gradient background on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                        
                        {/* Glow effect */}
                        <div className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                        {/* Current role indicator */}
                        {exp.current && (
                          <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/30 backdrop-blur-sm z-20">
                            <div className={`w-2 h-2 rounded-full bg-emerald-400 ${!disableAnimations ? 'animate-pulse' : ''}`} />
                            <span className="text-xs font-semibold text-emerald-300">Current Role</span>
                          </div>
                        )}

                        {/* Animated particles */}
                        {!disableAnimations && hoveredCard === index && (
                          <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white/60 animate-ping" style={{ animationDuration: '1s' }} />
                            <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 rounded-full bg-white/40 animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.3s' }} />
                            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-white/50 animate-ping" style={{ animationDuration: '1.2s', animationDelay: '0.6s' }} />
                          </div>
                        )}

                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex items-start justify-between gap-4 mb-6">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color}/20`}>
                                  <IconComponent className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                  <h3 className="font-bold text-xl text-white leading-tight">
                                    {exp.role}
                                  </h3>
                                  <p className={`text-sm font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                                    {exp.company}
                                  </p>
                                </div>
                              </div>

                              {/* Period, location and type */}
                              <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-4">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-emerald-300" />
                                  <span>{exp.period}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4 text-cyan-300" />
                                  <span>{exp.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-purple-300" />
                                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                                    exp.type === 'Full-time'
                                      ? 'bg-emerald-500/20 text-emerald-300'
                                      : exp.type === 'Internship'
                                      ? 'bg-blue-500/20 text-blue-300'
                                      : 'bg-purple-500/20 text-purple-300'
                                  }`}>
                                    {exp.type}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-white/70 text-base leading-relaxed mb-6">
                            {exp.description}
                          </p>

                          {/* Technologies */}
                          <div className="mb-6">
                            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                              <Target className="h-4 w-4 text-cyan-300" />
                              Tech Stack & Tools
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1.5 rounded-full bg-white/5 text-white/70 text-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Achievements */}
                          <div>
                            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                              <Trophy className="h-4 w-4 text-amber-300" />
                              Key Achievements
                            </h4>
                            <div className="space-y-2">
                              {exp.achievements.map((achievement, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group/achievement"
                                >
                                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                                  <span className="text-sm text-white/80">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced Video/Visual Section */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-8">
              {/* Video section */}
              <div className="group relative">
                <div className={`absolute -inset-3 bg-gradient-to-r from-blue-500/20 via-purple-500/15 to-pink-500/20 rounded-3xl blur-xl transition-all duration-500 group-hover:opacity-80 ${!disableAnimations ? 'opacity-60' : ''}`} />

                <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-sm shadow-2xl">
                  {/* Video */}
                  <div className="relative aspect-video overflow-hidden">
                    <video
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                      src="/assets/images/6963744-hd_1280_720_25fps.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="p-5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Floating badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
                      <span className="text-xs text-white/90 flex items-center gap-1">
                        <Zap className="h-3 w-3 text-blue-400" />
                        Professional Journey
                      </span>
                    </div>
                  </div>

                  {/* Content overlay */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                        <Building className="h-6 w-6 text-blue-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Career Milestones</h3>
                        <p className="text-white/50 text-sm">Building Impact & Expertise</p>
                      </div>
                    </div>

                    <p className="text-white/70 text-base leading-relaxed mb-6">
                      Each role has been an opportunity to grow, innovate, and deliver meaningful results.
                      From mastering core technologies to leading complex projects, every experience adds
                      value to my professional journey.
                    </p>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-blue-500/30 transition-all duration-300">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">3</div>
                        <div className="text-sm text-white/60">Companies</div>
                      </div>
                      <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-purple-500/30 transition-all duration-300">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">2+</div>
                        <div className="text-sm text-white/60">Years</div>
                      </div>
                    </div>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-2">
                      {["Leadership", "Problem Solving", "Team Collaboration", "Agile", "Code Review", "Mentoring"].map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/60">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Download resume */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-transparent p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 mb-4 backdrop-blur-sm">
                    <Download className="h-4 w-4 text-blue-300" />
                    <span className="text-sm font-medium text-white">Get My Resume</span>
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-3">Ready to Collaborate?</h4>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    Download my detailed resume to learn more about my skills, experience, and how I can
                    contribute to your next project.
                  </p>

                  <a
                    href="#"
                    className="group/btn inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download CV</span>
                    <ChevronRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Expertise quote */}
              <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
                <div className="flex justify-center mb-3">
                  <Globe className="h-8 w-8 text-blue-400/50" />
                </div>
                <p className="text-white/50 text-sm italic">
                  "Experience is the teacher of all things. Every project, every challenge, every success — 
                  each one adds a new dimension to my expertise."
                </p>
                <div className="mt-3 flex justify-center gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .experience-header.animate-in,
        .stats-section.animate-in,
        .experience-timeline.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transform: scaleY(1) !important;
        }
        .experience-card.animate-in {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Experience;