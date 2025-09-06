"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  Trophy
} from "lucide-react";

const About = () => {
  const sectionRef = useRef(null);
  const profileRef = useRef(null);
  const statsRef = useRef([]);
  const contentRef = useRef(null);
  const headerRef = useRef(null);
  const quoteRef = useRef(null);

  const stats = [
    {
      number: "2+",
      label: "Years Experience",
      description: "Building digital solutions",
      icon: Award,
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      number: "14",
      label: "Happy Clients",
      description: "Satisfied worldwide",
      icon: Users,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      number: "20+",
      label: "Projects Completed",
      description: "Delivered successfully",
      icon: Code,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Quality guaranteed",
      icon: Star,
      color: "from-amber-500/20 to-orange-500/20"
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 90079 47586",
      href: "tel:+919007947586",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Mail,
      label: "Email",
      value: "sahelqureshi0089@gmail.com",
      href: "mailto:sahelqureshi0089@gmail.com",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India 🇮🇳",
      href: "#",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Calendar,
      label: "Experience",
      value: "2+ Years",
      href: "#",
      color: "from-amber-500/20 to-orange-500/20"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states for all elements
        // Set initial states for all elements
        gsap.set([headerRef.current, profileRef.current, contentRef.current, quoteRef.current], {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
        });
    
        gsap.set(statsRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
        });
    
        const ctx = gsap.context(() => {
          // Header animation with enhanced effects
          gsap.from(headerRef.current, {
            y: 30,
            opacity: 0,
            scale: 0.95,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
            },
          });
    
          // Profile animation with bounce effect
          gsap.from(profileRef.current, {
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: profileRef.current,
              start: "top 75%",
            },
          });
    
          // Stats cards with stagger and bounce
          gsap.from(statsRef.current, {
            y: 30,
            opacity: 0,
            scale: 0.95,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.15,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            },
          });
    
          // Content animation with slide effect
          gsap.from(contentRef.current, {
            x: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 75%",
            },
          });
    
          // Quote animation with special effect
          gsap.from(quoteRef.current, {
            scale: 0.95,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: quoteRef.current,
              start: "top 80%",
            },
          });
    
          // Floating animation for decorative elements
          gsap.to(".floating-element", {
            y: "random(-15, 15)",
            x: "random(-10, 10)",
            duration: "random(4, 8)",
            ease: "none",
            repeat: -1,
            yoyo: true,
            stagger: 0.8,
          });
        }, sectionRef);
    
     

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-24 md:py-32 ">
      {/* Enhanced background with multiple animated layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/20 blur-3xl animate-pulse floating-element" />
        <div
          className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/30 to-pink-600/20 blur-3xl animate-pulse floating-element"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/15 blur-3xl animate-pulse floating-element"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-48 w-48 rounded-full bg-gradient-to-br from-purple-500/15 to-rose-500/10 blur-3xl animate-pulse floating-element"
          style={{ animationDelay: "6s" }}
        />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-x-0 top-1/3 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />

        {/* Additional floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-blue-400 animate-ping floating-element" />
        <div className="absolute bottom-32 right-32 w-3 h-3 rounded-full bg-purple-400 animate-pulse floating-element" />
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce floating-element" />
        <div className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 rounded-full bg-pink-400 animate-ping floating-element" />
      </div>

      <div className="container mx-auto px-6">
        {/* Enhanced header section */}
        <div ref={headerRef} className="mx-auto max-w-4xl text-center mb-20">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white/80 backdrop-blur-xl shadow-lg">
            <Sparkles className="h-5 w-5 text-blue-300 animate-pulse" />
            <span className="font-medium">About Me</span>
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" />
          </div>

          <h2 className="mt-8 font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">
            Passionate{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Developer
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Crafting exceptional digital experiences with modern technologies
            and a passion for clean, scalable code. Let's build something
            amazing together.
          </p>

          {/* Decorative line */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400" />
            <Rocket className="h-6 w-6 text-purple-400 animate-bounce" />
            <div className="h-px w-16 bg-gradient-to-r from-purple-400 to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Profile Section */}
          <div className="lg:col-span-5">
            <div className="space-y-8">
              {/* Enhanced Profile Card */}
              <div
                ref={profileRef}
                className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500"
                style={{ opacity: 1 }}
              >
                {/* Enhanced animated particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute top-1/4 left-1/4 h-3 w-3 rounded-full bg-white/70 animate-ping"
                    style={{ animationDelay: "0s" }}
                  />
                  <div
                    className="absolute top-3/4 right-1/4 h-2 w-2 rounded-full bg-white/50 animate-ping"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div
                    className="absolute bottom-1/4 left-1/3 h-2.5 w-2.5 rounded-full bg-white/60 animate-ping"
                    style={{ animationDelay: "1s" }}
                  />
                  <div
                    className="absolute top-1/2 right-1/3 h-1.5 w-1.5 rounded-full bg-white/40 animate-ping"
                    style={{ animationDelay: "1.5s" }}
                  />
                </div>

                <div className="relative text-center">
                  {/* Enhanced Profile Image */}
                  <div className="relative inline-block mb-8">
                    <div className="relative lg:w-80 lg:h-80 w-56 h-56 mx-auto">
                      {/* Outer rotating ring */}
                      <div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1 animate-spin"
                        style={{ animationDuration: "12s" }}
                      >
                        <div className="w-full h-full rounded-full bg-transparent" />
                      </div>

                      {/* Inner rotating ring */}
                      <div
                        className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 p-0.5 animate-spin"
                        style={{
                          animationDuration: "8s",
                          animationDirection: "reverse",
                        }}
                      >
                        <div className="w-full h-full rounded-full bg-transparent" />
                      </div>

                      {/* Static profile image */}
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10">
                        <img
                          src="/assets/images/sahel2.png"
                          alt="Sahel Qureshi"
                          fill
                          className="w-full h-auto" 
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                      </div>
                    </div>

                    {/* Floating tech icons */}
                    <div className="absolute -top-4 left-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center animate-bounce">
                      <Code className="h-5 w-5 text-blue-300" />
                    </div>
                    <div
                      className="absolute -bottom-4 right-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center animate-bounce"
                      style={{ animationDelay: "1s" }}
                    >
                      <Zap className="h-5 w-5 text-purple-300" />
                    </div>
                  </div>

                  {/* Enhanced Name and Title */}
                  <div className="space-y-4">
                    <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Sahel
                      </span>{" "}
                      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Qureshi
                      </span>
                    </h3>
                    <p className="text-xl md:text-2xl text-white/80 font-medium">
                      MERN Stack Developer
                    </p>
                    <p className="text-white/60 flex items-center justify-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Based in India 🇮🇳
                    </p>
                  </div>

                  {/* Enhanced decorative elements */}
                  <div className="flex justify-center items-center gap-3 mt-8">
                    <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                    <Heart className="h-6 w-6 text-pink-400 animate-pulse" />
                    <div className="h-1 w-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                  </div>
                </div>

                {/* Enhanced hover glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/8 via-purple-500/5 to-pink-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                  <div
                    key={index}
                    ref={(el) => (statsRef.current[index] = el)}
                    className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    style={{ opacity: 1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative text-center">
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}
                      >
                        <stat.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm font-semibold text-white/80 mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-white/60">
                        {stat.description}
                      </div>
                    </div>
                    </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div ref={contentRef} className="lg:col-span-7 space-y-8" style={{ opacity: 1 }}>
            {/* About Content */}
            <div className="space-y-8">
              <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                      <Heart className="h-6 w-6 text-blue-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        About Me
                      </h3>
                      <p className="text-white/60 text-sm">
                        Get to know me better
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 text-white/80 leading-relaxed">
                    <p className="text-lg">
                      Hello there! I'm{" "}
                      <span className="text-blue-400 font-semibold text-xl">
                        Sahel Qureshi
                      </span>
                      , a passionate MERN Stack Developer with a strong
                      foundation in modern web technologies. My journey in web
                      development began with curiosity and has evolved into a
                      dedicated career focused on creating exceptional digital
                      experiences.
                    </p>
                    <p>
                      I specialize in building scalable, responsive, and
                      user-friendly web applications using the latest
                      technologies and best practices. With over 2 years of
                      experience, I've had the privilege of working with diverse
                      clients and delivering solutions that make a real impact.
                    </p>
                    <p>
                      When I'm not coding, you can find me exploring new
                      technologies, contributing to open-source projects, or
                      sharing knowledge with the developer community. I believe
                      in continuous learning and staying updated with the
                      ever-evolving tech landscape.
                    </p>
                  </div>
                  </div>
              </div>

              {/* Enhanced Quote Section */}
              <div ref={quoteRef} className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-xl" style={{ opacity: 1 }}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-8">
                    <Quote className="h-10 w-10 text-purple-300" />
                  </div>

                  <blockquote className="text-2xl md:text-3xl text-white/90 font-medium italic leading-relaxed mb-8">
                    "Great software is not built with just code, but with clarity, consistency, and care.
                    I believe in clean, scalable solutions that solve real-world problems — one line at a time."
                  </blockquote>

                  <div className="flex justify-center items-center gap-3">
                    <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                    <Sparkles className="h-6 w-6 text-purple-400 animate-pulse" />
                    <div className="h-1 w-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${contact.color} shadow-lg`}
                    >
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-white/60 font-medium">
                        {contact.label}
                      </div>
                      <div className="text-white font-semibold">
                        {contact.value}
                      </div>
                    </div>
                    {contact.href !== "#" && (
                      <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-white transition-colors duration-300" />
                    )}
                  </div>
                </a>
              ))}
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <a
                href="#"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-8 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-3">
                  <Download className="h-5 w-5" />
                  <span>Download CV</span>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </a>

              <a
                href="#contact"
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl text-white font-semibold py-4 px-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="relative flex items-center justify-center gap-3">
                  <span>Get In Touch</span>
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
