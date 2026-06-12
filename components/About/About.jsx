"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import {
  Download,
  Sparkles,
  Code,
  ArrowUpRight,
  Zap,
  Quote,
  Trophy,
  Briefcase,
  Star,
  Layers,
  Cpu,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { designations, socialLinks, statsData, techStack } from "@/config/mainConfig";

const About = () => {
  const [screenWidth, setScreenWidth] = useState(1024);
  const [isClient, setIsClient] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  
  // Animation controls
  const controls = useAnimation();
  const statsControls = useAnimation();
  const techControls = useAnimation();
  const quoteControls = useAnimation();
  const ref = useRef(null);
  
  // This ensures animation ONLY happens ONCE when first viewed
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Typing animation state
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

 

  const currentWord = designations[currentWordIndex];

  // Trigger animation ONLY ONCE when component first comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      statsControls.start("visible");
      techControls.start("visible");
      quoteControls.start("visible");
    }
  }, [isInView, controls, statsControls, techControls, quoteControls]);

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

  // Animation variants
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

  

  return (
    <section ref={ref} id="about" className="relative py-16 md:py-24">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className={`absolute -top-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-500/20 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '6s' }} />
        <div className={`absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/20 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '8s', animationDelay: '1s' }} />
        <div className="absolute inset-0 opacity-50" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")` }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mx-auto max-w-4xl text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 text-sm text-white/90 shadow-xl">
            <Sparkles className={`h-5 w-5 text-cyan-300 ${!disableAnimations ? 'animate-spin-slow' : ''}`} />
            <span className="font-medium bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">Get to Know Me</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="mt-8 font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">
            Crafting Digital
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">Excellence</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="mt-6 text-white/70 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
            Passionate full-stack developer dedicated to building exceptional digital experiences 
            that combine cutting-edge technology with intuitive design.
          </motion.p>
        </motion.div>

        {/* Stats section */}
        <motion.div 
          variants={statsContainerVariants}
          initial="hidden"
          animate={statsControls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={statItemVariants}
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:backdrop-blur-sm p-6 transition-all duration-500 hover:scale-105 hover:border-white/20"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${stat.bgColor} backdrop-blur-sm`}>
                    <stat.icon className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{stat.label}</h3>
                <p className="text-white/50 text-sm">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Profile Image Section */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate={controls}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative">
              <div className={`absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl ${!disableAnimations ? 'animate-pulse' : ''}`} />
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem]">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 p-[3px] ${!disableAnimations ? 'animate-spin-slow' : ''}`}>
                  <div className="w-full h-full rounded-full bg-slate-900" />
                </div>
                <div className={`absolute inset-[6px] rounded-full bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 p-[2px] ${!disableAnimations ? 'animate-spin-slow-reverse' : ''}`}>
                  <div className="w-full h-full rounded-full bg-slate-900" />
                </div>
                <div className="absolute inset-[9px] rounded-full overflow-hidden">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                I'm Sahel, a
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                  {displayedText}
                  <span className="inline-block w-1 h-8 md:h-10 bg-gradient-to-t from-cyan-400 to-purple-400 ml-1 animate-pulse" />
                </span>
              </h3>

              <div className="space-y-4 text-white/70 text-base md:text-lg leading-relaxed">
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
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div 
              variants={techStackVariants}
              initial="hidden"
              animate={techControls}
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
                        animate={{ width: `${tech.level}%` }}
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
              <motion.div variants={itemVariants} className="group p-5 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-cyan-500/20">
                    <Layers className="h-5 w-5 text-cyan-300" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Frontend Mastery</h4>
                </div>
                <p className="text-white/60 text-sm">React, Next.js, TypeScript, Tailwind CSS for stunning UIs.</p>
              </motion.div>

              <motion.div variants={itemVariants} className="group p-5 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-purple-500/20">
                    <Zap className="h-5 w-5 text-purple-300" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Backend Power</h4>
                </div>
                <p className="text-white/60 text-sm">Node.js, Express, MongoDB — building robust and scalable APIs.</p>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <motion.button
                onClick={scrollToContact}
                className="group relative overflow-hidden px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Collaborate
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </motion.button>
              
              <motion.button 
                onClick={downloadCV}
                className="group px-8 py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
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
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Quote section */}
        <motion.div 
          variants={quoteVariants}
          initial="hidden"
          animate={quoteControls}
          className="mt-32 text-center"
        >
          <div className="relative max-w-4xl mx-auto">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;