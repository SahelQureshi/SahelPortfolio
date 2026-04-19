"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  Sparkles,
  ArrowUp,
  Send,
  Code,
  Coffee,
  Zap,
  MessageSquare,
  ChevronUp,
} from "lucide-react";

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);
  const socialRef = useRef(null);
  const scrollButtonRef = useRef(null);
  const progressCircleRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:bg-gray-500/20 hover:border-gray-400/30",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:bg-blue-500/20 hover:border-blue-400/30",
    },
    {
      icon: Mail,
      href: "mailto:sahel@example.com",
      label: "Email",
      color: "hover:bg-red-500/20 hover:border-red-400/30",
    },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Calculate scroll progress
  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollProgress(scrollPercent);
    setIsVisible(scrollTop > 300); // Show button after scrolling 300px
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Update scroll progress on scroll
    const handleScroll = () => updateScrollProgress();
    window.addEventListener("scroll", handleScroll);
    updateScrollProgress(); // Initial call

    const ctx = gsap.context(() => {
      // Footer content animation
      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      });

      // Social links animation
      gsap.from(socialRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 75%",
        },
      });

      // Floating animation for decorative elements
      gsap.to(".footer-floating", {
        y: "random(-10, 10)",
        x: "random(-5, 5)",
        duration: "random(3, 5)",
        ease: "none",
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      });
    }, footerRef);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctx.revert();
    };
  }, []);

  // Update progress circle
  useEffect(() => {
    if (progressCircleRef.current) {
      const circumference = 2 * Math.PI * 45; // radius = 45
      const strokeDasharray = circumference;
      const strokeDashoffset =
        circumference - (scrollProgress / 100) * circumference;

      gsap.to(progressCircleRef.current, {
        strokeDashoffset: strokeDashoffset,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [scrollProgress]);

  return (
    <>
      <footer
        ref={footerRef}
        className="relative bg-gray-900/50 backdrop-blur-xl border-t border-white/10"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-20 h-80 w-80 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-600/20 blur-3xl footer-floating" />
          <div className="absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-600/20 blur-3xl footer-floating" />
          <div className="absolute top-1/4 right-1/4 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-500/15 to-purple-500/15 blur-2xl footer-floating" />
        </div>

        <div className="relative z-10">
          {/* Main footer content */}
          <div ref={contentRef} className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Sahel Qureshi
                    </h3>
                    <p className="text-white/60">Full Stack Developer</p>
                  </div>
                </div>

                <p className="text-white/80 leading-relaxed max-w-md">
                  Passionate about creating exceptional digital experiences with
                  modern technologies. Let&apos;s build something amazing together
                  and turn your ideas into reality.
                </p>

                {/* Contact info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/80">
                    <Mail className="h-4 w-4 text-purple-300" />
                    <span className="text-sm">sahelqureshi0089@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Phone className="h-4 w-4 text-green-300" />
                    <span className="text-sm">+91 90079 47586</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <MapPin className="h-4 w-4 text-blue-300" />
                    <span className="text-sm">India</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">
                  Quick Links
                </h4>
                <nav>
                  <ul className="space-y-3">
                    {quickLinks.map((link, index) => (
                      <li key={index}>
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-white/70 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                        >
                          <div className="w-1 h-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Social & Actions */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">Connect</h4>

                {/* Social Links */}
                <div ref={socialRef} className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xl transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 text-white group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  onClick={() => scrollToSection("#contact")}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-6 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 inline-block"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <span className="relative flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Let&apos;s Talk
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-white/10">
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Copyright */}
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <span>© 2024 Sahel Qureshi. Made with</span>
                  <Heart className="h-4 w-4 text-red-400 animate-pulse" />
                  <span>and</span>
                  <Code className="h-4 w-4 text-purple-400" />
                </div>

                {/* Fun elements */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <Coffee className="h-4 w-4 text-amber-400" />
                    <span className="text-xs text-white/60">Always coding</span>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <Zap className="h-4 w-4 text-yellow-400" />
                    <span className="text-xs text-white/60">
                      Full of energy
                    </span>
                  </div>
                </div>

                {/* Back to top */}
                <button
                  onClick={scrollToTop}
                  className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-110"
                  aria-label="Back to top"
                >
                  <ArrowUp className="h-5 w-5 text-white group-hover:text-purple-300 transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-purple-400 animate-ping footer-floating" />
        <div className="absolute bottom-8 left-8 w-1 h-1 rounded-full bg-pink-400 animate-pulse footer-floating" />
        <div className="absolute top-8 right-1/4 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce footer-floating" />
      </footer>

      {/* Floating Scroll to Top Button with Progress Border */}
      <div
        ref={scrollButtonRef}
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <div className="relative group w-20 h-20 flex items-center justify-center">
          {/* Progress Border Ring */}
          <div
            className="absolute inset-0 rounded-full transition-all duration-500 ease-out"
            style={{
              background: `conic-gradient(from 0deg,
                #8b5cf6 0%,
                #ec4899 ${scrollProgress}%,
                #06b6d4 ${scrollProgress}%,
                transparent ${scrollProgress}%)`,
              padding: "3px",
            }}
          >
            <div className="w-full h-full rounded-full bg-gray-900/90 backdrop-blur-xl" />
          </div>

          {/* Main Button */}
          <button
            onClick={scrollToTop}
            className="relative w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-transparent hover:border-white/20 group/button"
            aria-label="Scroll to top"
          >
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover/button:opacity-50 transition-opacity duration-300 animate-pulse" />

            {/* Icon */}
            <ChevronUp className="h-6 w-6 text-white relative z-10 transition-transform duration-300 group-hover/button:-translate-y-1" />

            {/* Percentage text */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900/95 backdrop-blur-xl text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover/button:opacity-100 transition-all duration-300 whitespace-nowrap border border-white/10 pointer-events-none">
              {Math.round(scrollProgress)}%{/* Tooltip arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/95"></div>
            </div>
          </button>

          {/* Floating particles */}
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <div className="absolute top-2 left-2 w-1 h-1 bg-white/60 rounded-full animate-ping" />
            <div className="absolute bottom-3 right-3 w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse" />
            <div className="absolute top-1/2 right-2 w-0.5 h-0.5 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
