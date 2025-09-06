"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  ChevronDown
} from "lucide-react";

const Banner = () => {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const socialRef = useRef(null);
  const ctaRef = useRef(null);

  // Smooth scroll to contact section
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const navbarHeight = window.innerWidth >= 768 ? 80 : 64; // md:h-20 = 80px, h-16 = 64px
      const offsetTop = element.offsetTop - navbarHeight - 20; // -20px buffer
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Smooth scroll to about section
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      const navbarHeight = window.innerWidth >= 768 ? 80 : 64; // md:h-20 = 80px, h-16 = 64px
      const offsetTop = element.offsetTop - navbarHeight - 20; // -20px buffer
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero text animation
      const textAnimation = gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Hero image animation
      const imageAnimation = gsap.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Social links animation
      const socialAnimation = gsap.from(socialRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // CTA buttons animation
      const ctaAnimation = gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.7,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Add floating animation to decorative elements
      gsap.to(".floating-element", {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        duration: "random(3, 6)",
        ease: "none",
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      });

      return () => {
        textAnimation.kill();
        imageAnimation.kill();
        socialAnimation.kill();
        ctaAnimation.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/SahelQureshi",
      label: "GitHub",
      color: "hover:bg-gray-500/20 hover:border-gray-400/30"
    },
    {
      icon: Linkedin,
      href: "www.linkedin.com/in/sahel-qureshi-47b1252a8",
      label: "LinkedIn",
      color: "hover:bg-blue-500/20 hover:border-blue-400/30"
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/sahel.qureshi.948",
      label: "Facebook",
      color: "hover:bg-blue-600/20 hover:border-blue-500/30"
    },
    {
      icon: Mail,
      href: "mailto:sahelqureshi0089@gmail.com",
      label: "Email",
      color: "hover:bg-red-500/20 hover:border-red-400/30"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="banner"
      className="relative min-h-screen flex items-center justify-center  pt-[5rem] lg:pb-[0rem] pb-[2rem]"
    >
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-600/20 blur-3xl animate-pulse floating-element" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-600/20 blur-3xl animate-pulse floating-element" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/15 blur-3xl animate-pulse floating-element" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-x-0 top-1/3 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />

        {/* Additional decorative elements */}
        <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-purple-400 animate-ping floating-element" />
        <div className="absolute bottom-32 right-32 w-3 h-3 rounded-full bg-cyan-400 animate-pulse floating-element" />
        <div className="absolute top-1/3 left-1/4 w-1 h-1 rounded-full bg-pink-400 animate-ping floating-element" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 min-h-screen items-center">
          

          {/* Left Content */}
          <div ref={textRef} className="lg:col-span-7 space-y-8 lg:order-1 order-2">
            {/* Greeting */}
            <div className="space-y-4 lg:text-left text-center">
              <div className="inline-flex items-center lg:justify-start justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2 backdrop-blur-xl">
                <Sparkles className="h-5 w-5 text-purple-300 animate-pulse" />
                <span className="text-white/80 font-medium">Welcome to my portfolio</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="text-white">Hi, I&apos;m </span>
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Sahel
                  </span>
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Qureshi
                  </span>
                </h2>
              </div>

              <div className="flex items-center lg:justify-start justify-center gap-4">
                <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                <Code className="h-8 w-8 text-purple-300" />
                <div className="h-1 w-16 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full" />
              </div>
            </div>

            {/* Role and Description */}
            <div className="space-y-6 lg:text-left text-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                Full Stack Web Developer
              </h3>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                I craft exceptional digital experiences with modern technologies,
                bringing ideas to life through clean code and innovative solutions.
                Let&apos;s build something amazing together.
              </p>
            </div>

            {/* Social Links */}
            <div ref={socialRef} className="flex items-center gap-4 lg:justify-start justify-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden rounded-2xl bg-white/10 border border-white/20 p-4 backdrop-blur-xl transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 text-white group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex lg:justify-start justify-center sm:flex-nowrap flex-wrap gap-4 pt-8">
              <button
                onClick={scrollToContact}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-4 px-8 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-3">
                  <Heart className="h-5 w-5" />
                  <span>Hire Me</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </button>

              <a
                href="#"
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl text-white font-semibold py-4 px-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="relative flex items-center justify-center gap-3">
                  <Download className="h-5 w-5" />
                  <span>Download CV</span>
                  <Download className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                </div>
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center lg:justify-start pt-12">
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
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:col-span-5 flex justify-center items-start lg:pt-[8rem] pt-[2rem] h-full lg:order-2 order-1">
          <div ref={imageRef} className="relative">
              {/* Animated background rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl animate-pulse scale-110" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl animate-pulse scale-125" style={{ animationDelay: '1s' }} />

              {/* Profile container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
                {/* Static profile image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10">
                  <img
                    src="/assets/images/sahel.png"
                    alt="Sahel Qureshi"
                    className="w-full h-full object-contain relative top-[15px] z-10"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent" />
                </div>

                {/* Rotating gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 p-1 animate-spin" style={{ animationDuration: '8s' }}>
                  <div className="w-full h-full rounded-full bg-transparent" />
                </div>

                {/* Inner rotating ring */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 p-0.5 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
                  <div className="w-full h-full rounded-full bg-transparent" />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-bounce" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse" />
                <div className="absolute top-1/4 -left-6 w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 animate-ping" />

                {/* Floating tech icons */}
                <div className="absolute -top-8 left-1/4 w-12 h-12 z-20 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center animate-bounce">
                  <Code className="h-6 w-6 text-purple-300" />
                </div>
                <div className="absolute -bottom-8 right-1/4 w-12 h-12 z-20 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center animate-bounce" style={{ animationDelay: '1s' }}>
                  <Zap className="h-6 w-6 text-cyan-300" />
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>

      {/* Video background option (commented out for now) */}
      {/*
      <div className="absolute inset-0 -z-20">
        <video
          className="w-full h-full object-cover opacity-20"
          src="/assets/images/6963744-hd_1280_720_25fps.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/60" />
      </div>
      */}
    </section>
  );
};

export default Banner;