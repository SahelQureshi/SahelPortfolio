"use client";

import React, { useEffect, useRef, useState } from "react";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Sparkles, Trophy, Star, ChevronRight, Play, Code, Brain, Rocket, Clock, Zap, Medal, Target, Users, Globe } from "lucide-react";

const education = [
  {
    title: "Bachelor of Computer Application (BCA)",
    institution: "SVIMS",
    date: "2021 - 2024",
    location: "India",
    grade: "First Class",
    desc: "Acquired comprehensive knowledge of computer applications, programming fundamentals (C, C++, Java), database management, and software development. Completed projects demonstrating practical implementation of theoretical concepts.",
    highlights: ["Programming Fundamentals", "Database Management", "Software Development", "Project Work"],
    achievements: ["First Class Grade", "Project Excellence Award"],
    icon: Code,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "12th Grade (Arts)",
    institution: "Man Matha Nath High School",
    date: "2019 - 2021",
    location: "India",
    grade: "85%",
    desc: "Pursued Science stream with specialization in Physics, Chemistry, and Mathematics. Gained problem-solving skills and scientific thinking that formed the basis for my technical education.",
    highlights: ["Geography", "English", "History", "Computer Applications"],
    achievements: ["Consistent Performer", "Subject Excellence"],
    icon: Brain,
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "10th Grade",
    institution: "Man Matha Nath High School",
    date: "2018",
    location: "India",
    grade: "88%",
    desc: "Completed secondary education with focus on foundational subjects including Mathematics, Science, and Languages. Developed strong academic fundamentals that prepared me for higher studies.",
    highlights: ["Mathematics", "Science", "Languages", "Academic Foundation"],
    achievements: ["Logical Reasoning", "Academic Excellence"],
    icon: Medal,
    color: "from-purple-500 to-pink-500"
  },
];

const Education = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);
  const statsRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
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
          
          if (element.classList.contains('education-header')) {
            if (threshold > 0.1) element.classList.add('animate-in');
          } else if (element.classList.contains('education-timeline')) {
            if (threshold > 0.1) element.classList.add('animate-in');
          } else if (element.classList.contains('education-card')) {
            if (threshold > 0.1) element.classList.add('animate-in');
          } else if (element.classList.contains('stats-section')) {
            if (threshold > 0.1) element.classList.add('animate-in');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (headerRef.current) {
      headerRef.current.classList.add('education-header');
      observer.observe(headerRef.current);
    }

    if (timelineRef.current) {
      timelineRef.current.classList.add('education-timeline');
      observer.observe(timelineRef.current);
    }

    if (statsRef.current) {
      statsRef.current.classList.add('stats-section');
      observer.observe(statsRef.current);
    }

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.classList.add('education-card');
        observer.observe(card);
      }
    });

    // Auto-rotate active card for desktop
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % education.length);
    }, 5000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const statsData = [
    { label: "Courses Completed", value: "45+", icon: BookOpen, color: "emerald" },
    { label: "Projects Built", value: "25+", icon: Rocket, color: "cyan" },
    { label: "Certifications", value: "12", icon: Award, color: "purple" },
    { label: "Learning Hours", value: "2000+", icon: Clock, color: "blue" }
  ];

  return (
    <section ref={sectionRef} id="education" className="relative py-24 md:py-32 ">
      {/* Enhanced animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
       
        
        {/* Animated gradient orbs */}
        <div className={`absolute -top-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-500/40 to-cyan-500/20 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '6s' }} />
        <div className={`absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/20 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '8s', animationDelay: '1s' }} />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-500/5 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '10s', animationDelay: '2s' }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}
        />
        
        {/* Floating particles */}
        <div className={`absolute top-20 left-[10%] w-2 h-2 rounded-full bg-emerald-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '4s' }} />
        <div className={`absolute bottom-32 right-[15%] w-3 h-3 rounded-full bg-cyan-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className={`absolute top-1/3 left-[80%] w-1.5 h-1.5 rounded-full bg-purple-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        <div className={`absolute bottom-1/4 left-[20%] w-2.5 h-2.5 rounded-full bg-blue-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced header section */}
        <div ref={headerRef} className="mx-auto max-w-4xl text-center mb-20 opacity-0 translate-y-8 transition-all duration-700 education-header">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 md:backdrop-blur-sm px-6 py-3 text-sm text-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <GraduationCap className={`h-5 w-5 text-emerald-300 ${!disableAnimations ? 'animate-pulse' : ''}`} />
            <span className="font-medium bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">Academic Journey</span>
            <div className={`h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 ${!disableAnimations ? 'animate-pulse' : ''}`} />
          </div>

          <h2 className="mt-8 font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">
            My
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mt-2">
              Educational Path
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
            A transformative journey of continuous learning, academic excellence, and skill development
            that shaped my foundation in technology and innovation.
          </p>
        </div>

        {/* Stats Overview
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 opacity-0 translate-y-8 transition-all duration-700 stats-section">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:backdrop-blur-sm p-6 text-center transition-all duration-500 hover:scale-105 hover:border-white/20"
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
          {/* Education Timeline */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Enhanced timeline line */}
              <div
                ref={timelineRef}
                className="absolute sm:block hidden left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-cyan-400 to-purple-500 rounded-full opacity-0 scale-y-0 transition-all duration-1000 education-timeline"
                style={{ transformOrigin: 'top' }}
              />

              {/* Timeline nodes */}
              {education.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="relative mb-12 last:mb-0 opacity-0 translate-x-[-30px] transition-all duration-700 education-card"
                    style={{ transitionDelay: `${index * 150}ms` }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Timeline node */}
                    <div className="absolute sm:flex hidden left-4 top-8 w-10 h-10 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-white/20 shadow-xl z-10 items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 animate-pulse" />
                    </div>

                    {/* Education card */}
                    <div className="sm:ml-20 group">
                      <div className={`relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 md:backdrop-blur-sm p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${hoveredCard === index ? 'border-white/30' : ''}`}>
                        {/* Animated gradient background on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                        
                        {/* Glow effect */}
                        <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

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
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color}/20`}>
                                  <IconComponent className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                  <h3 className="font-bold text-xl text-white leading-tight">
                                    {item.title}
                                  </h3>
                                  <p className={`text-sm font-medium bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                    {item.institution}
                                  </p>
                                </div>
                              </div>

                              {/* Date and location */}
                              <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-4">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-emerald-300" />
                                  <span>{item.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4 text-cyan-300" />
                                  <span>{item.location}</span>
                                </div>
                              </div>
                            </div>

                            {/* Grade badge */}
                            <div className="flex flex-col items-end gap-2">
                              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 md:backdrop-blur-sm">
                                <span className={`text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                  {item.grade}
                                </span>
                              </div>
                              {item.achievements && (
                                <div className="flex items-center gap-1">
                                  <Trophy className="h-4 w-4 text-amber-400" />
                                  <span className="text-xs text-amber-300/80">{item.achievements.length}+ Awards</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-white/70 text-base leading-relaxed mb-6">
                            {item.desc}
                          </p>

                          {/* Highlights */}
                          <div className="mb-6">
                            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                              <Star className="h-4 w-4 text-cyan-300" />
                              Key Highlights
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.highlights.map((highlight, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1.5 rounded-full bg-white/5 text-white/70 text-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                >
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Achievements */}
                          {item.achievements && item.achievements.length > 0 && (
                            <div>
                              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                <Award className="h-4 w-4 text-purple-300" />
                                Achievements
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {item.achievements.map((achievement, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20"
                                  >
                                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                                    <span className="text-sm font-medium text-purple-200/90">{achievement}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
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
                <div className={`absolute -inset-3 bg-gradient-to-r from-emerald-500/20 via-cyan-500/15 to-purple-500/20 rounded-3xl blur-xl transition-all duration-500 group-hover:opacity-80 ${!disableAnimations ? 'opacity-60' : ''}`} />

                <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 md:backdrop-blur-sm shadow-2xl">
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
                      <div className="p-5 rounded-full bg-white/10 md:backdrop-blur-md border border-white/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Floating badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 md:backdrop-blur-sm border border-white/20">
                      <span className="text-xs text-white/90 flex items-center gap-1">
                        <Zap className="h-3 w-3 text-emerald-400" />
                        Learning in Action
                      </span>
                    </div>
                  </div>

                  {/* Content overlay */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
                        <GraduationCap className="h-6 w-6 text-emerald-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Continuous Growth</h3>
                        <p className="text-white/50 text-sm">Building Excellence Every Day</p>
                      </div>
                    </div>

                    <p className="text-white/70 text-base leading-relaxed mb-6">
                      Every educational milestone represents dedication, curiosity, and the relentless 
                      pursuit of knowledge. These experiences have shaped me into a versatile developer 
                      ready to tackle real-world challenges.
                    </p>

                    {/* Interactive stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-emerald-500/30 transition-all duration-300">
                        <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-1">3</div>
                        <div className="text-sm text-white/60">Degrees</div>
                      </div>
                      <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-500/30 transition-all duration-300">
                        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">7+</div>
                        <div className="text-sm text-white/60">Years</div>
                      </div>
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-2">
                      {["Critical Thinking", "Problem Solving", "Team Work", "Leadership", "Communication", "Creativity"].map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/60">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-transparent p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ top: -1, bottom: -1, left: -1, right: -1, pointerEvents: 'none' }} />

                <div className="relative text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 px-4 py-2 mb-4 md:backdrop-blur-sm">
                    <Sparkles className="h-4 w-4 text-emerald-300" />
                    <span className="text-sm font-medium text-white">Ready to Grow?</span>
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-3">Let's Build Together</h4>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    Strong foundation meets practical expertise. Let's collaborate on your next project
                    and create something exceptional.
                  </p>

                  <button
                    onClick={scrollToContact}
                    className="group/btn inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
                  >
                    <span>Start a Project</span>
                    <ChevronRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Quote */}
              <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
                <p className="text-white/60 text-sm italic">
                  "Education is the most powerful weapon which you can use to change the world."
                </p>
                <p className="text-white/40 text-xs mt-2">— Nelson Mandela</p>
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
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .education-header.animate-in,
        .stats-section.animate-in,
        .education-timeline.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transform: scaleY(1) !important;
        }
        .education-card.animate-in {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Education;