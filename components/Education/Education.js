"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Sparkles, Trophy, Star, ChevronRight, Play } from "lucide-react";

const education = [
  {
    title: "Bachelor of Computer Application (BCA)",
    institution: "SVIMS",
    date: "2012 - 2015",
    location: "India",
    grade: "First Class",
    desc: "Acquired comprehensive knowledge of computer applications, programming fundamentals (C, C++, Java), database management, and software development. Completed projects demonstrating practical implementation of theoretical concepts.",
    highlights: ["Programming Fundamentals", "Database Management", "Software Development", "Project Work"],
    achievements: ["First Class Grade", "Project Excellence Award"]
  },
  {
    title: "12th Grade (Science)",
    institution: "Man Matha Nath High School",
    date: "2008 - 2010",
    location: "India",
    grade: "85%",
    desc: "Pursued Science stream with specialization in Physics, Chemistry, and Mathematics. Gained problem-solving skills and scientific thinking that formed the basis for my technical education.",
    highlights: ["Physics", "Chemistry", "Mathematics", "Problem Solving"],
    achievements: ["Science Excellence", "Mathematics Topper"]
  },
  {
    title: "10th Grade",
    institution: "Man Matha Nath High School",
    date: "2004 - 2007",
    location: "India",
    grade: "88%",
    desc: "Completed secondary education with focus on foundational subjects including Mathematics, Science, and Languages. Developed strong academic fundamentals that prepared me for higher studies.",
    highlights: ["Mathematics", "Science", "Languages", "Academic Foundation"],
    achievements: ["Consistent Performer", "Subject Excellence"]
  },
];

const Education = () => {
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
        x: -50,
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
      id="education"
      className="relative py-24 md:py-32 "
    >
      {/* Enhanced background with multiple layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-500/30 to-cyan-600/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-600/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/15 blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-x-0 top-1/3 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        {/* Enhanced header section */}
        <div ref={headerRef} className="mx-auto max-w-4xl text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm text-white/80 backdrop-blur-xl shadow-lg">
            <GraduationCap className="h-5 w-5 text-emerald-300 animate-pulse" />
            <span className="font-medium">Academic Journey</span>
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 animate-pulse" />
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-h2-xs sm:text-h2-sm md:text-h2-md lg:text-h2-lg lgg:text-h2-lgg xl:text-h2-xl 2xl:text-h2-2xl text-white">
            My <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Education</span>
          </h2>

          <p className="mt-4 text-white/70 text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg lgg:text-p-lgg xl:text-p-xl 2xl:text-p-2xl leading-relaxed">
            A journey of continuous learning and academic excellence that shaped my foundation in technology
            and prepared me for a successful career in software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Education Timeline */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Enhanced timeline line */}
              <div
                ref={timelineRef}
                className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-cyan-400 to-purple-500 rounded-full shadow-lg"
                style={{ transformOrigin: 'top' }}
              />

              {/* Timeline nodes */}
              {education.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Timeline node */}
                  <div className="absolute left-4 top-8 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 border-4 border-gray-900 shadow-lg z-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>

                  {/* Education card */}
                  <div className="ml-20 group">
                    <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
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
                              <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
                                <BookOpen className="h-5 w-5 text-emerald-300" />
                              </div>
                              <div>
                                <h3 className="font-bold text-xl text-white leading-tight">
                                  {item.title}
                                </h3>
                                <p className="text-emerald-300 font-medium text-sm">
                                  {item.institution}
                                </p>
                              </div>
                            </div>

                            {/* Date and location */}
                            <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-cyan-300" />
                                <span>{item.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-purple-300" />
                                <span>{item.location}</span>
                              </div>
                            </div>
                          </div>

                          {/* Grade badge */}
                          <div className="flex flex-col items-end gap-2">
                            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30">
                              <span className="text-sm font-semibold text-emerald-300">{item.grade}</span>
                            </div>
                            {item.achievements && (
                              <div className="flex items-center gap-1">
                                <Trophy className="h-4 w-4 text-amber-400" />
                                <span className="text-xs text-amber-300">{item.achievements.length} awards</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-white/80 text-base leading-relaxed mb-6">
                          {item.desc}
                        </p>

                        {/* Highlights */}
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <Star className="h-4 w-4 text-cyan-300" />
                            Key Subjects & Skills
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.highlights.map((highlight, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
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
                                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30"
                                >
                                  <div className="w-2 h-2 rounded-full bg-purple-300" />
                                  <span className="text-sm font-medium text-purple-200">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 via-cyan-500/3 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Video/Visual Section */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-8">
              {/* Video section */}
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-cyan-500/15 to-purple-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-1000" />

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
                      <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
                        <GraduationCap className="h-6 w-6 text-emerald-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Learning Journey</h3>
                        <p className="text-white/60 text-sm">Continuous Growth & Excellence</p>
                      </div>
                    </div>

                    <p className="text-white/80 text-base leading-relaxed mb-6">
                      Every step of my educational journey has been a building block, shaping my skills,
                      mindset, and passion for technology. From foundational learning to advanced concepts,
                      each milestone represents dedication and growth.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-2xl font-bold text-emerald-300 mb-1">7+</div>
                        <div className="text-sm text-white/60">Years of Education</div>
                      </div>
                      <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-2xl font-bold text-cyan-300 mb-1">3</div>
                        <div className="text-sm text-white/60">Degrees Completed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-purple-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 px-4 py-2 mb-4">
                    <Sparkles className="h-4 w-4 text-emerald-300" />
                    <span className="text-sm font-medium text-white">Education First</span>
                  </div>

                  <p className="text-white/80 text-base mb-6 leading-relaxed">
                    Strong educational foundation combined with practical experience creates
                    exceptional results. Let&apos;s build something amazing together.
                  </p>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
                  >
                    <span>Start a Project</span>
                    <ChevronRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;