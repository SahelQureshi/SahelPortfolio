"use client";

import React, { useEffect, useRef, useState } from "react";
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
  const [screenWidth, setScreenWidth] = useState(1024); // Default to desktop
  const [isClient, setIsClient] = useState(false);

  // Handle client-side mounting
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
    }
  }, []);

  // Update screen width on resize (client-side only)
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

  // Determine if animations should be disabled (screen width < 991px)
  const disableBackgroundAnimations = isClient && screenWidth < 991;

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

  // Stats data
  const statsData = [
    {
      icon: Award,
      number: "2+",
      label: "Years Experience",
      description: "Building digital solutions and innovative web applications"
    },
    {
      icon: Users,
      number: "50+",
      label: "Projects Completed",
      description: "From concept to deployment, bringing ideas to life"
    },
    {
      icon: Star,
      number: "4.8",
      label: "Client Satisfaction",
      description: "Committed to delivering quality and exceeding expectations"
    },
    {
      icon: Code,
      number: "100K+",
      label: "Lines of Code",
      description: "Writing clean, efficient, and maintainable code"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states to ensure visibility
    gsap.set([headerRef.current, profileRef.current, contentRef.current, quoteRef.current], {
      opacity: 1,
      y: 0,
      scale: 1
    });

    // Set initial state for stats elements
    if (statsRef.current) {
      gsap.set(statsRef.current, {
        opacity: 1,
        y: 0
      });
    }

    const ctx = gsap.context(() => {
      // Header animation - using gsap.fromTo for better control
      if (headerRef.current) {
        gsap.fromTo(headerRef.current, 
          { y: 30, opacity: 0 }, // from
          { // to
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            },
          }
        );
      }

      // Profile image animation
      if (profileRef.current) {
        gsap.fromTo(profileRef.current,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: profileRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse"
            },
          }
        );
      }

      // Stats animation - fixed for array handling
      const animateStats = () => {
        if (!statsRef.current || statsRef.current.length === 0) return;

        // Filter out null refs
        const validRefs = statsRef.current.filter(ref => ref !== null);
        
        if (validRefs.length > 0) {
          gsap.fromTo(validRefs,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              stagger: 0.15,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
              },
            }
          );
        }
      };

      // Use setTimeout to ensure refs are populated
      setTimeout(animateStats, 100);

      // Content animation
      if (contentRef.current) {
        gsap.fromTo(contentRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            },
          }
        );
      }

      // Quote animation
      if (quoteRef.current) {
        gsap.fromTo(quoteRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: quoteRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            },
          }
        );
      }

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-24 md:py-32 ">
      {/* Enhanced background with multiple animated layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/20 blur-3xl floating-element animate-pulse" />
        <div
          className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/30 to-pink-600/20 blur-3xl floating-element animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/15 blur-3xl floating-element animate-pulse"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-48 w-48 rounded-full bg-gradient-to-br from-purple-500/15 to-rose-500/10 blur-3xl floating-element animate-pulse"
          style={{ animationDelay: "6s" }}
        />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-x-0 top-1/3 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />

        {/* Additional floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-blue-400 floating-element animate-ping" />
        <div className="absolute bottom-32 right-32 w-3 h-3 rounded-full bg-purple-400 floating-element animate-pulse" />
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-cyan-400 floating-element animate-bounce" />
        <div className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 rounded-full bg-pink-400 floating-element animate-ping" />
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
          Meet the <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Developer</span>
          </h2>

          <p className="mt-6 text-white/70 text-lg md:text-xl lg:text-2xl leading-relaxed">
          Passionate about creating digital experiences that matter. With expertise in modern web technologies,
          I transform ideas into reality through clean, efficient, and user-centered solutions.
          </p>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {statsData.map((stat, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el && statsRef.current) {
                  statsRef.current[index] = el;
                }
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] opacity-100"
              style={{ opacity: 1, transform: 'translateY(0)' }} // Ensure visibility
            >
              {/* Animated particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-white/60 animate-ping" style={{ animationDelay: '0s' }} />
                <div className="absolute top-3/4 right-1/4 h-1.5 w-1.5 rounded-full bg-white/40 animate-ping" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-1/4 left-1/3 h-1 w-1 rounded-full bg-white/50 animate-ping" style={{ animationDelay: '1s' }} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <stat.icon className="h-8 w-8 text-blue-300" />
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center animate-pulse">
                    <span className="text-2xl font-bold text-white">{stat.number}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-white/70">{stat.description}</p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Profile and content section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Profile Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div ref={profileRef} className="relative">
              {/* Animated background rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl scale-110 animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 blur-2xl scale-125 animate-pulse" style={{ animationDelay: '1s' }} />

              {/* Profile container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
                {/* Static profile image */}
                <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white/10">
                  <img
                    src="/assets/images/sahel2.png"
                    alt="Sahel Qureshi"
                    className="w-[85%] h-auto mx-auto"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                </div>

                {/* Rotating gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-1 animate-spin" style={{ animationDuration: '8s' }}>
                  <div className="w-full h-full rounded-full bg-transparent" />
                </div>

                {/* Inner rotating ring */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 p-0.5 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
                  <div className="w-full h-full rounded-full bg-transparent" />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-bounce" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 animate-pulse" />
                <div className="absolute top-1/4 -left-6 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-ping" />

                {/* Floating tech icons */}
                <div className="absolute -top-8 left-1/4 w-12 h-12 z-20 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center animate-bounce">
                  <Code className="h-6 w-6 text-blue-300" />
                </div>
                <div className="absolute -bottom-8 right-1/4 w-12 h-12 z-20 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center animate-bounce" style={{ animationDelay: '1s' }}>
                  <Zap className="h-6 w-6 text-purple-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="lg:col-span-7 space-y-8 z-10">
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Passionate <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Full Stack Developer</span>
              </h3>

              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                I&apos;m a dedicated full-stack developer with a passion for creating innovative digital solutions.
                My journey in web development began with curiosity and has evolved into a professional pursuit
                of crafting exceptional user experiences.
                </p>

                <p>
                With expertise in modern technologies like React, Next.js, Node.js, and various databases,
                I bring ideas to life through clean, efficient, and scalable code. I believe in writing
                maintainable code that not only works but also tells a story.
                </p>

                <p>
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community. I&apos;m always excited to take on new challenges
                and collaborate on projects that make a difference.
                </p>
              </div>
            </div>

            {/* Skills highlight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <Code className="h-6 w-6 text-blue-300" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Frontend Development</h4>
                </div>
                <p className="text-white/70">Creating responsive and interactive user interfaces with modern frameworks and best practices.</p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    <Zap className="h-6 w-6 text-purple-300" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Backend Development</h4>
                </div>
                <p className="text-white/70">Building robust server-side applications and APIs with scalable architecture and security.</p>
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-8">
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
              >
                <Heart className="h-5 w-5" />
                <span>Let&apos;s Work Together</span>
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Quote section */}
        <div ref={quoteRef} className="mt-32 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Quote background */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl animate-pulse" />
              </div>

              <Quote className="h-16 w-16 text-blue-400 mx-auto mb-8 opacity-50" />

              <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-medium leading-relaxed mb-8">
              &quot;Code is poetry written in logic. Every function, every component, every line tells a story
              of creativity, problem-solving, and innovation.&quot;
              </blockquote>

              <cite className="text-white/80 text-lg">- Sahel Qureshi</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
