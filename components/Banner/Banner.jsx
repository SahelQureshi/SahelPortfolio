// components/Banner/Banner.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  Download,
  ArrowRight,
  Sparkles,
  Code,
  Heart,
  Zap,
  ChevronUp,
  Play,
  ChevronDown,
  Star,
  Rocket,
  Award,
  Shield,
} from "lucide-react";

const Banner = () => {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const socialRef = useRef(null);
  const ctaRef = useRef(null);

  // Typing animation state
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const designations = [
    "MERN Stack Developer",
    "React.js Specialist",
    "React Native Developer",
    "Next.js Full Stack Developer",
    "Frontend Developer",
  ];

  const currentWord = designations[currentWordIndex];

  // Check screen size for disabling animations
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 991);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Smooth scroll to contact section
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const navbarHeight = window.innerWidth >= 768 ? 80 : 64;
      const offsetTop = element.offsetTop - navbarHeight - 20;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Smooth scroll to about section
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      const navbarHeight = window.innerWidth >= 768 ? 80 : 64;
      const offsetTop = element.offsetTop - navbarHeight - 20;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Download CV function
  const downloadCV = () => {
    const cvUrl = "/assets/doc/Sahel_Resume.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Sahel_Qureshi_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Typing animation effect
  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 2000;

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
  }, [displayedText, isTyping, currentWord, designations.length]);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/SahelQureshi",
      label: "GitHub",
      color: "hover:bg-gray-500/20 hover:border-gray-400/30",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sahel-qureshi-47b1252a8",
      label: "LinkedIn",
      color: "hover:bg-blue-500/20 hover:border-blue-400/30",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/sahel.qureshi.948",
      label: "Facebook",
      color: "hover:bg-blue-600/20 hover:border-blue-500/30",
    },
    {
      icon: Mail,
      href: "mailto:sahelqureshi0089@gmail.com",
      label: "Email",
      color: "hover:bg-red-500/20 hover:border-red-400/30",
    },
  ];

  // Variants for staggered children animations
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      ref={sectionRef}
      id="banner"
      className="relative min-h-screen flex items-center justify-center pt-[5rem] lg:pb-[0rem] pb-[2rem]"
    >
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute -top-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-600/20 blur-3xl ${!isMobile ? "css-float" : ""}`}
        />
        <div
          className={`absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-600/20 blur-3xl ${!isMobile ? "css-float" : ""}`}
          style={!isMobile ? { animationDelay: "2s" } : {}}
        />
        <div
          className={`absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/15 blur-3xl ${!isMobile ? "css-float" : ""}`}
          style={!isMobile ? { animationDelay: "4s" } : {}}
        />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-x-0 top-1/3 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />

        {/* Additional decorative elements */}
        <div
          className={`absolute top-20 left-20 w-2 h-2 rounded-full bg-purple-400 ${!isMobile ? "css-ping" : ""}`}
        />
        <div
          className={`absolute bottom-32 right-32 w-3 h-3 rounded-full bg-cyan-400 ${!isMobile ? "css-pulse" : ""}`}
        />
        <div
          className={`absolute top-1/3 left-1/4 w-1 h-1 rounded-full bg-pink-400 ${!isMobile ? "css-ping" : ""}`}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 min-h-screen items-center">
          {/* Left Content with staggered animations */}
          <motion.div 
            className="lg:col-span-7 space-y-8 lg:order-1 order-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Greeting - Top in animation */}
            <motion.div variants={itemVariants} className="space-y-4 lg:text-left text-center">
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center relative z-10 pointer-events-auto lg:justify-start justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2"
              >
                <Sparkles className="h-5 w-5 text-purple-300" />
                <span className="text-white/80 font-medium">
                  Welcome to my portfolio
                </span>
              </motion.div>

              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                  <span className="text-white">Hi, I&apos;m </span>
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent relative z-10 pointer-events-auto">
                    Sahel
                  </span>
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent relative z-10 pointer-events-auto">
                    Qureshi
                  </span>
                </h2>
              </div>

              <motion.div 
                variants={itemVariants}
                className="flex items-center lg:justify-start justify-center gap-4"
              >
                <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                <Code className="h-8 w-8 text-purple-300" />
                <div className="h-1 w-16 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full" />
              </motion.div>
            </motion.div>

            {/* Role and Description - Left in animation */}
            <motion.div 
              variants={itemVariants}
              className="space-y-6 lg:text-left text-center"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                {displayedText}
                <span className="inline-block w-1 h-8 bg-cyan-400 ml-1 animate-pulse" />
              </h3>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl relative z-10 pointer-events-auto">
                I craft exceptional digital experiences with modern
                technologies, bringing ideas to life through clean code and
                innovative solutions. Let&apos;s build something amazing
                together.
              </p>
            </motion.div>

            {/* Social Links - Bottom in animation */}
            <motion.div 
              variants={socialVariants}
              className="flex items-center gap-4 lg:justify-start justify-center"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative z-10 pointer-events-auto overflow-hidden rounded-2xl bg-white/10 border border-white/20 p-4 transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-6 w-6 text-white group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons - Scale animation */}
            <motion.div 
              variants={itemVariants}
              className="flex lg:justify-start justify-center sm:flex-nowrap flex-wrap gap-4 pt-8"
            >
              <motion.button
                onClick={scrollToContact}
                className="group relative z-10 pointer-events-auto overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-4 px-8 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-3">
                  <Heart className="h-5 w-5" />
                  <span>Hire Me</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.button>

              <motion.button
                onClick={downloadCV}
                className="group relative z-10 pointer-events-auto overflow-hidden rounded-2xl border border-white/20 bg-white/10 text-white font-semibold py-4 px-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative flex items-center justify-center gap-3">
                  <Download className="h-5 w-5" />
                  <span>Download Resume</span>
                  <Download className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                </div>
              </motion.button>
            </motion.div>

            {/* Scroll indicator - Fade in */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center lg:justify-start pt-12"
            >
              <button
                onClick={scrollToAbout}
                className="group flex flex-col items-center gap-4 text-white/60 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <span className="text-sm font-medium">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
                </div>
                <ChevronDown className="h-5 w-5 animate-bounce" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image with scale and rotate animation */}
          <motion.div 
            className="lg:col-span-5 flex justify-center items-start lg:pt-[8rem] pt-[2rem] h-full lg:order-2 order-1"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="relative z-[10]">
              {/* Outer animated ring layers */}
              <div
                className={`absolute -inset-8 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl ${!isMobile ? "animate-pulse scale-110" : ""}`}
              />
              <div
                className={`absolute -inset-12 rounded-full bg-gradient-to-r from-cyan-500/15 to-blue-500/15 blur-3xl ${!isMobile ? "animate-pulse scale-125" : ""}`}
                style={!isMobile ? { animationDelay: "1s" } : {}}
              />

              {/* Main circle container */}
              <div className="relative w-60 sm:w-80 h-60 sm:h-80 md:w-96 md:h-96 lg:w-[22rem] xl:w-[28rem] lg:h-[22rem] xl:h-[28rem]">
                {/* Outer rotating gradient ring */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 p-[4px] ${!isMobile ? "animate-spin-slow" : ""}`}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-slate-800" />
                </div>

                {/* Second rotating ring (reverse direction) */}
                <div
                  className={`absolute inset-[10px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 p-[3px] ${!isMobile ? "animate-spin-slow-reverse" : ""}`}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900" />
                </div>

                {/* Third subtle ring */}
                <div className="absolute inset-[18px] rounded-full bg-gradient-to-r from-fuchsia-500/30 via-purple-500/30 to-cyan-500/30 p-[2px]">
                  <div className="w-full h-full rounded-full bg-slate-900" />
                </div>

                {/* Profile image container */}
                <div className="absolute inset-[-24px] rounded-full overflow-hidden ring-2 ring-white/10 flex justify-center items-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/assets/images/Sahel-img2.png"
                      alt="Sahel Qureshi"
                      fill
                      className="object-cover object-[4px_14px] transition-transform duration-500 scale-110"
                      priority
                      sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, (max-width: 1024px) 352px, 448px"
                      quality={95}
                    />
                  </div>
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Decorative dots around the circle */}
                {!isMobile && (
                  <>
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />
                    <div
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse"
                      style={{ animationDelay: "1.5s" }}
                    />

                    {/* Diagonal decorative dots */}
                    <div
                      className="absolute top-1/4 -left-3 w-2 h-2 rounded-full bg-purple-400 animate-ping"
                      style={{ animationDelay: "0.3s" }}
                    />
                    <div
                      className="absolute top-1/4 -right-3 w-2 h-2 rounded-full bg-pink-400 animate-ping"
                      style={{ animationDelay: "0.8s" }}
                    />
                    <div
                      className="absolute bottom-1/4 -left-3 w-2 h-2 rounded-full bg-cyan-400 animate-ping"
                      style={{ animationDelay: "1.3s" }}
                    />
                    <div
                      className="absolute bottom-1/4 -right-3 w-2 h-2 rounded-full bg-blue-400 animate-ping"
                      style={{ animationDelay: "1.8s" }}
                    />
                  </>
                )}

                {/* Floating tech badges */}
                <div
                  className={`absolute -top-6 -right-9 xs:-right-12 sm:-right-6 z-20 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-500/30 shadow-lg ${!isMobile ? "animate-bounce-slow" : ""}`}
                >
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-purple-300" />
                    <span className="text-xs font-medium text-white">
                      React Expert
                    </span>
                  </div>
                </div>

                <div
                  className={`absolute -bottom-6 -left-6 z-20 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-500/30 shadow-lg ${!isMobile ? "animate-bounce-slow" : ""}`}
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-cyan-300" />
                    <span className="text-xs font-medium text-white">
                      Fast & Scalable
                    </span>
                  </div>
                </div>

                {/* Additional floating icons */}
                <div
                  className={`absolute top-1/3 -right-8 z-20 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg ${!isMobile ? "animate-float" : ""}`}
                >
                  <Rocket className="h-5 w-5 text-pink-300" />
                </div>

                <div
                  className={`absolute bottom-1/3 -left-8 z-20 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg ${!isMobile ? "animate-float" : ""}`}
                  style={{ animationDelay: "1s" }}
                >
                  <Shield className="h-5 w-5 text-cyan-300" />
                </div>

                <div
                  className={`absolute top-1/2 -right-10 z-20 p-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-md border border-amber-500/30 ${!isMobile ? "animate-pulse" : ""}`}
                >
                  <Star className="h-3 w-3 text-amber-300" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 7s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Banner;