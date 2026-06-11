"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import {
  Phone, Calendar, Mail, MapPin, Download, Sparkles, Award, Code,
  Users, Star, Heart, ChevronRight, ArrowUpRight, Zap, Quote, Target,
  Rocket, Coffee, Lightbulb, Trophy, Briefcase, Layers, Cpu, Github,
  Linkedin, Twitter, ExternalLink
} from "lucide-react";

const About = () => {
  const sectionRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  // Memoized static data
  const designations = useMemo(() => [
    "Full Stack Architect",
    "UI/UX Visionary", 
    "Problem Solver",
    "Tech Innovator"
  ], []);
  
  const currentWord = designations[currentWordIndex];

  const statsData = useMemo(() => [
    { icon: Trophy, number: "2+", label: "Years Experience", description: "Building digital solutions", color: "from-amber-500 to-orange-500", bgColor: "bg-amber-500/10" },
    { icon: Briefcase, number: "50+", label: "Projects Completed", description: "From concept to deployment", color: "from-emerald-500 to-teal-500", bgColor: "bg-emerald-500/10" },
    { icon: Star, number: "100%", label: "Client Satisfaction", description: "Exceeding expectations", color: "from-rose-500 to-pink-500", bgColor: "bg-rose-500/10" },
    { icon: Layers, number: "100K+", label: "Lines of Code", description: "Clean & maintainable", color: "from-violet-500 to-purple-500", bgColor: "bg-violet-500/10" }
  ], []);

  const techStack = useMemo(() => [
    { name: "React", level: 95, icon: "⚛️" },
    { name: "Next.js", level: 90, icon: "▲" },
    { name: "Node.js", level: 88, icon: "💚" },
    { name: "TypeScript", level: 85, icon: "📘" },
    { name: "Tailwind", level: 92, icon: "🎨" },
    { name: "MongoDB", level: 82, icon: "🍃" }
  ], []);

  const socialLinks = useMemo(() => [
    { icon: Github, href: "https://github.com/SahelQureshi", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sahel-qureshi-47b1252a8", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" }
  ], []);

  // Client-side initialization
  useEffect(() => {
    setIsClient(true);
    setIsLoaded(true);
  }, []);

  // Optimized typing animation
  useEffect(() => {
    if (!isClient) return;
    
    let timeout;
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseDuration = 2500;
    
    if (isTyping) {
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), pauseDuration);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % designations.length);
          setIsTyping(true);
        }, 500);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentWord, designations.length, isClient]);

  // Optimized scroll animation with Intersection Observer
  useEffect(() => {
    if (!isClient) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // Unobserve after animation to save resources
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [isClient]);

  const scrollToContact = useCallback(() => {
    const element = document.querySelector('#contact');
    if (element) {
      const navbarHeight = window.innerWidth >= 768 ? 80 : 64;
      const offsetTop = element.offsetTop - navbarHeight - 20;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }, []);

  const downloadCV = useCallback(() => {
    const cvUrl = '/assets/doc/Sahel_Resume.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Sahel_Qureshi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  // Memoized components for better performance
  const StatsGrid = useMemo(() => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
      {statsData.map((stat, index) => (
        <div
          key={index}
          data-animate="stat"
          onMouseEnter={() => setHoveredStat(index)}
          onMouseLeave={() => setHoveredStat(null)}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:backdrop-blur-sm p-6 transition-all duration-500 hover:scale-105 hover:border-white/20 opacity-0 translate-y-8"
          style={{ transitionDelay: `${index * 100}ms` }}
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
        </div>
      ))}
    </div>
  ), [statsData, hoveredStat]);

  const TechStackSection = useMemo(() => (
    <div className="space-y-4">
      <h4 className="text-xl font-semibold text-white flex items-center gap-2">
        <Cpu className="h-5 w-5 text-cyan-400" />
        Tech Stack Proficiency
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {techStack.map((tech, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-white/80">{tech.icon} {tech.name}</span>
              <span className="text-cyan-400">{tech.level}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: isLoaded ? `${tech.level}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  ), [techStack, isLoaded]);

  if (!isClient) {
    return <div className="py-24 md:py-32" />; // SSR placeholder
  }

  return (
    <section ref={sectionRef} id="about" className="relative py-24 md:py-32 ">
      {/* Animated background - memoized styles for performance */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-500/20 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/20 blur-3xl animate-float-slower" />
        <div className="absolute top-1/3 left-1/3 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/30 to-violet-500/15 blur-3xl animate-float-medium" />
        
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div data-animate="header" className="mx-auto max-w-4xl text-center mb-20 opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 text-sm text-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <Sparkles className="h-5 w-5 text-cyan-300 animate-spin-slow" />
            <span className="font-medium bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">Get to Know Me</span>
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse" />
          </div>

          <h2 className="mt-8 font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">
            Crafting Digital
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
              Excellence
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
            Passionate full-stack developer dedicated to building exceptional digital experiences 
            that combine cutting-edge technology with intuitive design.
          </p>
        </div>

        {StatsGrid}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Profile Image Section */}
          <div className="lg:col-span-5 flex justify-center">
            <div data-animate="profile" className="relative opacity-0 translate-x-8 transition-all duration-700">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl animate-pulse-slow" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 p-[3px] animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-slate-900" />
                </div>
                
                <div className="absolute inset-[6px] rounded-full bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 p-[2px] animate-spin-slow-reverse">
                  <div className="w-full h-full rounded-full bg-slate-900" />
                </div>

                <div className="absolute inset-[9px] rounded-full overflow-hidden">
                  <img
                    src="/assets/images/Sahel-img2.png"
                    alt="Sahel Qureshi"
                    className="w-full h-full object-cover object-top scale-110"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>

                <div className="absolute -top-4 -right-4 z-20 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white animate-bounce-slow">
                  ⚛️ React
                </div>
                <div className="absolute -bottom-4 -left-4 z-20 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                  ▲ Next.js
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div data-animate="content" className="lg:col-span-7 space-y-8 opacity-0 translate-x-8 transition-all duration-700">
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                I'm Sahel, a
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                  {displayedText}
                  <span className="inline-block w-1 h-8 md:h-10 bg-gradient-to-t from-cyan-400 to-purple-400 ml-1 animate-pulse" />
                </span>
              </h3>

              <div className="space-y-4 text-white/70 text-base md:text-lg leading-relaxed">
                <p>I'm a passionate full-stack developer who loves turning complex problems into elegant, user-friendly solutions. With a keen eye for design and a heart for clean code, I create digital experiences that leave a lasting impression.</p>
                <p>My journey in tech has taken me from building small side projects to architecting scalable applications used by thousands. I believe in continuous learning and pushing the boundaries of what's possible on the web.</p>
                <p>When I'm not coding, you'll find me exploring new technologies, mentoring aspiring developers, or contributing to open-source projects that make a difference.</p>
              </div>
            </div>

            {TechStackSection}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group p-5 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-cyan-500/20">
                    <Layers className="h-5 w-5 text-cyan-300" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Frontend Mastery</h4>
                </div>
                <p className="text-white/60 text-sm">React, Next.js, TypeScript, Tailwind CSS, and modern animations for stunning UIs.</p>
              </div>

              <div className="group p-5 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-purple-500/20">
                    <Zap className="h-5 w-5 text-purple-300" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Backend Power</h4>
                </div>
                <p className="text-white/60 text-sm">Node.js, Express, MongoDB, PostgreSQL — building robust and scalable APIs.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="group relative overflow-hidden px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Collaborate
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
              
              <button 
                onClick={downloadCV}
                className="group px-8 py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Resume
                </span>
              </button>
            </div>

            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div data-animate="quote" className="mt-32 text-center opacity-0 translate-y-8 transition-all duration-700">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-pulse-slow" />
            
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
        </div>
      </div>

      <style jsx global>{`
        [data-animate] {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        [data-animate].animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        [data-animate="profile"].animate-in,
        [data-animate="content"].animate-in {
          transform: translateX(0) !important;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-15px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(15px); }
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
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        
        .animate-float-slower {
          animation: float-slow 12s ease-in-out infinite reverse;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 6s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;