"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  Phone,
  Calendar,
  Mail,
  MapPin,
  Download,
  Sparkles,
  Award,
  Code,
  Users,
  Star,
  Heart,
  ChevronRight,
  ArrowUpRight,
  Zap,
  Quote,
  Target,
  Rocket,
  Coffee,
  Lightbulb,
  Trophy,
  Briefcase,
  Layers,
  Cpu,
  Github,
  Linkedin,
  Twitter,
  ExternalLink
} from "lucide-react";

const About = () => {
  const sectionRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(1024);
  const [isClient, setIsClient] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  
  // Typing animation state
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const designations = [
    "Full Stack Architect",
    "UI/UX Visionary",
    "Problem Solver",
    "Tech Innovator"
  ];

  const currentWord = designations[currentWordIndex];

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

  // Typing animation
  useEffect(() => {
    if (!isClient) return;
    
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseDuration = 2500;
    
    if (isTyping) {
      if (displayedText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % designations.length);
          setIsTyping(true);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayedText, isTyping, currentWord, designations.length, isClient]);

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

  // Download CV function
  const downloadCV = () => {
    const cvUrl = '/assets/doc/Sahel_Resume.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Sahel_Qureshi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animation variants for container and children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const techStackVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.4,
      },
    },
  };

  const techItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const quoteVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 }
    },
  };

  // Enhanced stats data with colors and icons
  const statsData = [
    {
      icon: Trophy,
      number: "2+",
      label: "Years Experience",
      description: "Building digital solutions",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/10",
      glowColor: "shadow-amber-500/20"
    },
    {
      icon: Briefcase,
      number: "50+",
      label: "Projects Completed",
      description: "From concept to deployment",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      glowColor: "shadow-emerald-500/20"
    },
    {
      icon: Star,
      number: "100%",
      label: "Client Satisfaction",
      description: "Exceeding expectations",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-500/10",
      glowColor: "shadow-rose-500/20"
    },
    {
      icon: Layers,
      number: "100K+",
      label: "Lines of Code",
      description: "Clean & maintainable",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-500/10",
      glowColor: "shadow-violet-500/20"
    }
  ];

  const techStack = [
    { name: "React", level: 95, icon: "⚛️" },
    { name: "Next.js", level: 90, icon: "▲" },
    { name: "Node.js", level: 88, icon: "💚" },
    { name: "TypeScript", level: 85, icon: "📘" },
    { name: "Tailwind", level: 92, icon: "🎨" },
    { name: "MongoDB", level: 82, icon: "🍃" }
  ];

  const [isLoaded, setIsLoaded] = useState(true);

  // Social links with actual URLs
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/SahelQureshi",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sahel-qureshi-47b1252a8",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter"
    }
  ];

  return (
    <motion.section 
      ref={sectionRef} 
      id="about" 
      className="relative py-24 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Enhanced animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Animated gradient orbs */}
        <div className={`absolute -top-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-500/20 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '6s' }} />
        <div className={`absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/20 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '8s', animationDelay: '1s' }} />
        <div className={`absolute top-1/3 left-1/3 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/30 to-violet-500/15 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '10s', animationDelay: '2s' }} />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}
        />
        
        {/* Floating particles */}
        <div className={`absolute top-20 left-[15%] w-2 h-2 rounded-full bg-blue-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '4s' }} />
        <div className={`absolute bottom-32 right-[20%] w-3 h-3 rounded-full bg-purple-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className={`absolute top-1/3 left-[85%] w-1.5 h-1.5 rounded-full bg-cyan-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        <div className={`absolute bottom-1/4 left-[10%] w-2.5 h-2.5 rounded-full bg-pink-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header section with animated badge */}
        <motion.div variants={itemVariants} className="mx-auto max-w-4xl text-center mb-20">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 text-sm text-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Sparkles className={`h-5 w-5 text-cyan-300 ${!disableAnimations ? 'animate-spin-slow' : ''}`} />
            <span className="font-medium bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">Get to Know Me</span>
            <div className={`h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 ${!disableAnimations ? 'animate-pulse' : ''}`} />
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="mt-8 font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight"
          >
            Crafting Digital
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
              Excellence
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="mt-6 text-white/70 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
          >
            Passionate full-stack developer dedicated to building exceptional digital experiences 
            that combine cutting-edge technology with intuitive design.
          </motion.p>
        </motion.div>

        {/* Stats section with enhanced cards */}
        <motion.div 
          variants={statsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={statItemVariants}
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:backdrop-blur-sm p-6 transition-all duration-500 hover:scale-105 hover:border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Glow effect on hover */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${stat.bgColor} backdrop-blur-sm`}>
                    <stat.icon className={`h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300`} style={{ color: `rgb(${index === 0 ? '245,158,11' : index === 1 ? '16,185,129' : index === 2 ? '244,63,94' : '139,92,246'})` }} />
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{stat.label}</h3>
                <p className="text-white/50 text-sm">{stat.description}</p>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Profile Image Section - Enhanced with Next.js Image */}
          <motion.div 
            variants={imageVariants}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative">
              {/* Animated decorative rings */}
              <div className={`absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '3s' }} />
              <div className={`absolute -inset-8 rounded-full bg-gradient-to-r from-blue-500/10 to-pink-500/10 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '4s', animationDelay: '1s' }} />

              {/* Main profile container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem]">
                {/* Rotating border */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 p-[3px] ${!disableAnimations ? 'animate-spin-slow' : ''}`}>
                  <div className="w-full h-full rounded-full bg-slate-900" />
                </div>
                
                {/* Inner rotating ring */}
                <div className={`absolute inset-[6px] rounded-full bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 p-[2px] ${!disableAnimations ? 'animate-spin-slow-reverse' : ''}`}>
                  <div className="w-full h-full rounded-full bg-slate-900" />
                </div>

                {/* Profile image - Updated with Next.js Image */}
                <div className="absolute inset-[9px] rounded-full overflow-hidden flex justify-center items-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/assets/images/Sahel-img2.png"
                      alt="Sahel Qureshi"
                      fill
                      className="object-cover object-[4px_16px] scale-110"
                      priority
                      sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 416px"
                      quality={95}
                    />
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>

                {/* Floating tech badges */}
                <div className={`absolute -top-4 -right-4 z-20 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white ${!disableAnimations ? 'animate-bounce-slow' : ''}`}>
                  <span className="flex items-center gap-1">⚛️ React</span>
                </div>
                <div className={`absolute -bottom-4 -left-4 z-20 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white ${!disableAnimations ? 'animate-bounce-slow' : ''}`} style={{ animationDelay: '0.5s' }}>
                  <span className="flex items-center gap-1">▲ Next.js</span>
                </div>
                <div className={`absolute top-1/4 -right-6 z-20 p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 ${!disableAnimations ? 'animate-float' : ''}`}>
                  <Code className="h-4 w-4 text-cyan-300" />
                </div>
                <div className={`absolute bottom-1/3 -left-6 z-20 p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDelay: '1s' }}>
                  <Zap className="h-4 w-4 text-purple-300" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section - Enhanced */}
          <div className="lg:col-span-7 space-y-8">
            {/* Typing animation header */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                I'm Sahel, a
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                  {displayedText}
                  <span className="inline-block w-1 h-8 md:h-10 bg-gradient-to-t from-cyan-400 to-purple-400 ml-1 animate-pulse" />
                </span>
              </h3>

              <motion.div variants={itemVariants} className="space-y-4 text-white/70 text-base md:text-lg leading-relaxed">
                <p>
                  I'm a passionate full-stack developer who loves turning complex problems into 
                  elegant, user-friendly solutions. With a keen eye for design and a heart for 
                  clean code, I create digital experiences that leave a lasting impression.
                </p>
                <p>
                  My journey in tech has taken me from building small side projects to architecting 
                  scalable applications used by thousands. I believe in continuous learning and 
                  pushing the boundaries of what's possible on the web.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, mentoring aspiring 
                  developers, or contributing to open-source projects that make a difference.
                </p>
              </motion.div>
            </motion.div>

            {/* Tech Stack with progress bars */}
            <motion.div 
              variants={techStackVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-4"
            >
              <motion.h4 variants={techItemVariants} className="text-xl font-semibold text-white flex items-center gap-2">
                <Cpu className="h-5 w-5 text-cyan-400" />
                Tech Stack Proficiency
              </motion.h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {techStack.map((tech, idx) => (
                  <motion.div key={idx} variants={techItemVariants} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">{tech.icon} {tech.name}</span>
                      <span className="text-cyan-400">{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Expertise cards */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <motion.div 
                variants={itemVariants}
                className="group p-5 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-[1.02]"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-cyan-500/20">
                    <Layers className="h-5 w-5 text-cyan-300" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Frontend Mastery</h4>
                </div>
                <p className="text-white/60 text-sm">React, Next.js, TypeScript, Tailwind CSS, and modern animations for stunning UIs.</p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="group p-5 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-[1.02]"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-purple-500/20">
                    <Zap className="h-5 w-5 text-purple-300" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Backend Power</h4>
                </div>
                <p className="text-white/60 text-sm">Node.js, Express, MongoDB, PostgreSQL — building robust and scalable APIs.</p>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <motion.button
                onClick={scrollToContact}
                className="group relative overflow-hidden px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Collaborate
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.button 
                onClick={downloadCV}
                className="group px-8 py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Resume
                </span>
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Quote section with enhanced design */}
        <motion.div 
          variants={quoteVariants}
          className="mt-32 text-center"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Animated background glow */}
            <div className={`absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '4s' }} />
            
            {/* Quote mark */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm">
                <Quote className="h-8 w-8 text-cyan-400" />
              </div>
            </div>

            <blockquote className="pt-12 text-xl md:text-2xl lg:text-3xl text-white/80 font-light leading-relaxed italic">
              "Code is not just about functionality — it's about creating experiences that inspire, 
              interfaces that delight, and solutions that make a difference in people's lives."
            </blockquote>

            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400" />
              <cite className="text-white/60 not-italic text-lg">— Sahel Qureshi</cite>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400" />
            </div>

            {/* Signature line */}
            <div className="mt-4 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 6s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
      `}</style>
    </motion.section>
  );
};

export default About;