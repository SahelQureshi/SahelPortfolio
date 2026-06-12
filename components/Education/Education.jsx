"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Sparkles, Trophy, Star, ChevronRight, Play, Code, Brain, Rocket, Clock, Zap, Medal, Target, Users, Globe } from "lucide-react";
import { education } from "@/config/mainConfig";


const Education = () => {
  const sectionRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [screenWidth, setScreenWidth] = useState(1024);
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Animation controls
  const controls = useAnimation();
  const timelineControls = useAnimation();
  const videoControls = useAnimation();
  const ctaControls = useAnimation();
  const ref = useRef(null);
  
  // This ensures animation ONLY happens ONCE when first viewed
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
    }
  }, []);

  // Trigger animation ONLY ONCE when component first comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      timelineControls.start("visible");
      videoControls.start("visible");
      ctaControls.start("visible");
    }
  }, [isInView, controls, timelineControls, videoControls, ctaControls]);

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
  
  // Auto-rotate active card for desktop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % education.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 }
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 }
    },
  };

  return (
    <section 
      ref={ref}
      id="education" 
      className="relative py-16 md:py-24"
    >
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
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mx-auto max-w-4xl text-center mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 md:backdrop-blur-sm px-6 py-3 text-sm text-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <GraduationCap className={`h-5 w-5 text-emerald-300 ${!disableAnimations ? 'animate-pulse' : ''}`} />
            <span className="font-medium bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">Academic Journey</span>
            <div className={`h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 ${!disableAnimations ? 'animate-pulse' : ''}`} />
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="mt-8 font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight"
          >
            My
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mt-2">
              Educational Path
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="mt-6 text-white/70 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
          >
            A transformative journey of continuous learning, academic excellence, and skill development
            that shaped my foundation in technology and innovation.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Education Timeline */}
          <motion.div 
            variants={timelineVariants}
            initial="hidden"
            animate={timelineControls}
            className="lg:col-span-7"
          >
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute sm:block hidden left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-cyan-400 to-purple-500 rounded-full" />

              {/* Timeline nodes */}
              {education.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="relative mb-12 last:mb-0"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Timeline node */}
                    <div className="absolute sm:flex hidden left-4 top-8 w-10 h-10 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-white/20 shadow-xl z-10 items-center justify-center">
                      <motion.div 
                        className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>

                    {/* Education card */}
                    <motion.div 
                      className="sm:ml-20 group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 md:backdrop-blur-sm p-8 shadow-xl transition-all duration-500 hover:shadow-2xl ${hoveredCard === index ? 'border-white/30' : ''}`}>
                        {/* Animated gradient background on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                        
                        {/* Glow effect */}
                        <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                        {/* Animated particles */}
                        {!disableAnimations && hoveredCard === index && (
                          <div className="absolute inset-0 pointer-events-none">
                            <motion.div 
                              className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white/60"
                              animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                            <motion.div 
                              className="absolute top-3/4 right-1/4 w-1.5 h-1.5 rounded-full bg-white/40"
                              animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                            />
                            <motion.div 
                              className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-white/50"
                              animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                              transition={{ duration: 1.2, repeat: Infinity, delay: 0.6 }}
                            />
                          </div>
                        )}

                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex items-start justify-between gap-4 mb-6">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <motion.div 
                                  className={`p-3 rounded-xl bg-gradient-to-br ${item.color}/20`}
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  <IconComponent className="h-6 w-6 text-white" />
                                </motion.div>
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
                            <motion.div 
                              className="flex flex-col items-end gap-2"
                              whileHover={{ scale: 1.05 }}
                            >
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
                            </motion.div>
                          </div>

                          {/* Description */}
                          <motion.p 
                            className="text-white/70 text-base leading-relaxed mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {item.desc}
                          </motion.p>

                          {/* Highlights */}
                          <div className="mb-6">
                            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                              <Star className="h-4 w-4 text-cyan-300" />
                              Key Highlights
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.highlights.map((highlight, idx) => (
                                <motion.span
                                  key={idx}
                                  className="px-3 py-1.5 rounded-full bg-white/5 text-white/70 text-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                  whileHover={{ scale: 1.05, y: -2 }}
                                >
                                  {highlight}
                                </motion.span>
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
                                  <motion.div
                                    key={idx}
                                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20"
                                    whileHover={{ scale: 1.05, x: 2 }}
                                  >
                                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                                    <span className="text-sm font-medium text-purple-200/90">{achievement}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Enhanced Video/Visual Section */}
          <div className="lg:col-span-5 space-y-8">
            {/* Video section */}
            <motion.div 
              variants={videoVariants}
              initial="hidden"
              animate={videoControls}
              className="group relative"
            >
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
                    <motion.div 
                      className="p-5 rounded-full bg-white/10 md:backdrop-blur-md border border-white/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="h-8 w-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Floating badge */}
                  <motion.div 
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 md:backdrop-blur-sm border border-white/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-xs text-white/90 flex items-center gap-1">
                      <Zap className="h-3 w-3 text-emerald-400" />
                      Learning in Action
                    </span>
                  </motion.div>
                </div>

                {/* Content overlay */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="h-6 w-6 text-emerald-300" />
                    </motion.div>
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
                    <motion.div 
                      className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-emerald-500/30 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-1">3</div>
                      <div className="text-sm text-white/60">Degrees</div>
                    </motion.div>
                    <motion.div 
                      className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-500/30 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">7+</div>
                      <div className="text-sm text-white/60">Years</div>
                    </motion.div>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2">
                    {["Critical Thinking", "Problem Solving", "Team Work", "Leadership", "Communication", "Creativity"].map((skill, idx) => (
                      <motion.span 
                        key={idx} 
                        className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/60"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call to action */}
            <motion.div 
              variants={ctaVariants}
              initial="hidden"
              animate={ctaControls}
              className="group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-transparent p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ top: -1, bottom: -1, left: -1, right: -1, pointerEvents: 'none' }} />

              <div className="relative text-center">
                <motion.div 
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 px-4 py-2 mb-4 md:backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles className="h-4 w-4 text-emerald-300" />
                  <span className="text-sm font-medium text-white">Ready to Grow?</span>
                </motion.div>

                <h4 className="text-2xl font-bold text-white mb-3">Let's Build Together</h4>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  Strong foundation meets practical expertise. Let's collaborate on your next project
                  and create something exceptional.
                </p>

                <motion.button
                  onClick={scrollToContact}
                  className="group/btn inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Start a Project</span>
                  <ChevronRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              animate={controls}
              className="text-center p-6 rounded-2xl border border-white/10 bg-white/5"
            >
              <p className="text-white/60 text-sm italic">
                "Education is the most powerful weapon which you can use to change the world."
              </p>
              <p className="text-white/40 text-xs mt-2">— Nelson Mandela</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;