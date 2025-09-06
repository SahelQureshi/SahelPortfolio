"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  Quote
} from "lucide-react";

const About = () => {
  const sectionRef = useRef(null);
  const profileRef = useRef(null);
  const statsRef = useRef([]);
  const contentRef = useRef(null);
  const headerRef = useRef(null);

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
      value: "India",
      href: "#",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Calendar,
      label: "Experience",
      value: "11+ Months",
      href: "#",
      color: "from-amber-500/20 to-orange-500/20"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header animation
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

      // Profile animation
      gsap.from(profileRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: profileRef.current,
          start: "top 75%",
        },
      });

      // Stats cards animation
      gsap.from(statsRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Content animation
      gsap.from(contentRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Enhanced background with multiple layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/30 to-pink-600/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/15 blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-x-0 top-1/3 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        {/* Enhanced header section */}
        <div ref={headerRef} className="mx-auto max-w-4xl text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm text-white/80 backdrop-blur-xl shadow-lg">
            <Sparkles className="h-5 w-5 text-blue-300 animate-pulse" />
            <span className="font-medium">About Me</span>
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" />
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-h2-xs sm:text-h2-sm md:text-h2-md lg:text-h2-lg lgg:text-h2-lgg xl:text-h2-xl 2xl:text-h2-2xl text-white">
            Passionate <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Developer</span>
          </h2>

          <p className="mt-4 text-white/70 text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg lgg:text-p-lgg xl:text-p-xl 2xl:text-p-2xl leading-relaxed">
            Crafting exceptional digital experiences with modern technologies and a passion for clean, scalable code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Profile Section */}
          <div className="lg:col-span-5">
            <div className="space-y-8">
              {/* Profile Card */}
              <div
                ref={profileRef}
                className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500"
              >
                {/* Animated particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-white/60 animate-ping" style={{ animationDelay: '0s' }} />
                  <div className="absolute top-3/4 right-1/4 h-1.5 w-1.5 rounded-full bg-white/40 animate-ping" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute bottom-1/4 left-1/3 h-1 w-1 rounded-full bg-white/50 animate-ping" style={{ animationDelay: '1s' }} />
                </div>

                <div className="relative text-center">
                  {/* Profile Image */}
                  <div className="relative inline-block mb-6">
                    <div className="relative w-48 h-48 mx-auto">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
                        <div className="w-full h-full rounded-full bg-gray-900 relative overflow-hidden">
                          <Image
                            src="/assets/images/sahel2.png"
                            alt="Sahel Qureshi"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin" style={{ padding: '2px' }}>
                        <div className="w-full h-full rounded-full bg-gray-900" />
                      </div>
                    </div>
                  </div>

                  {/* Name and Title */}
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-white">
                      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Sahel</span>{" "}
                      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Qureshi</span>
                    </h3>
                    <p className="text-xl text-white/80 font-medium">MERN Stack Developer</p>
                    <p className="text-white/60">Based in India 🇮🇳</p>
                  </div>

                  {/* Decorative elements */}
                  <div className="flex justify-center items-center gap-2 mt-6">
                    <div className="h-1 w-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                    <Zap className="h-5 w-5 text-purple-400" />
                    <div className="h-1 w-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    ref={(el) => (statsRef.current[index] = el)}
                    className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative text-center">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-3`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-sm font-semibold text-white/80 mb-1">{stat.label}</div>
                      <div className="text-xs text-white/60">{stat.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="lg:col-span-7 space-y-8">
            {/* About Content */}
            <div className="space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                      <Heart className="h-6 w-6 text-blue-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">About Me</h3>
                  </div>

                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      Hello there! I'm <span className="text-blue-400 font-semibold">Sahel Qureshi</span>, a passionate MERN Stack Developer
                      with a strong foundation in modern web technologies. My journey in web development began with curiosity
                      and has evolved into a dedicated career focused on creating exceptional digital experiences.
                    </p>
                    <p>
                      I specialize in building scalable, responsive, and user-friendly web applications using the latest
                      technologies and best practices. With over 2 years of experience, I've had the privilege of working
                      with diverse clients and delivering solutions that make a real impact.
                    </p>
                    <p>
                      When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                      or sharing knowledge with the developer community. I believe in continuous learning and staying
                      updated with the ever-evolving tech landscape.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Section */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-6">
                    <Quote className="h-8 w-8 text-purple-300" />
                  </div>

                  <blockquote className="text-xl text-white/90 font-medium italic leading-relaxed mb-6">
                    "Great software is not built with just code, but with clarity, consistency, and care.
                    I believe in clean, scalable solutions that solve real-world problems — one line at a time."
                  </blockquote>

                  <div className="flex justify-center items-center gap-2">
                    <div className="h-1 w-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                    <Sparkles className="h-5 w-5 text-purple-400" />
                    <div className="h-1 w-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${contact.color}`}>
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60 font-medium">{contact.label}</div>
                      <div className="text-white font-semibold">{contact.value}</div>
                    </div>
                    {contact.href !== '#' && (
                      <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-white ml-auto transition-colors duration-300" />
                    )}
                  </div>
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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