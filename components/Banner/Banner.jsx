"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
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
  Phone,
  Calendar,
  MapPin,
  Users,
  Quote,
  Target,
  Coffee,
  Lightbulb,
  Trophy,
  Briefcase,
  Layers,
  Cpu,
  Twitter,
  ExternalLink
} from "lucide-react";

const BannerAboutCombined = () => {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const socialRef = useRef(null);
  const ctaRef = useRef(null);
  const profileRef = useRef(null);
  const statsRef = useRef([]);
  const contentRef = useRef(null);
  const headerRef = useRef(null);
  const quoteRef = useRef(null);
  
  const [screenWidth, setScreenWidth] = useState(1024);
  const [isClient, setIsClient] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Typing animation state for Banner
  const [displayedTextBanner, setDisplayedTextBanner] = useState('');
  const [isTypingBanner, setIsTypingBanner] = useState(true);
  const [currentWordIndexBanner, setCurrentWordIndexBanner] = useState(0);

  // Typing animation state for About
  const [displayedTextAbout, setDisplayedTextAbout] = useState('');
  const [isTypingAbout, setIsTypingAbout] = useState(true);
  const [currentWordIndexAbout, setCurrentWordIndexAbout] = useState(0);

  const designationsBanner = [
    "MERN Stack Developer", 
    "React.js Specialist",
    "React Native Developer",
    "Next.js Full Stack Developer",
    "Frontend Developer",
  ];

  const designationsAbout = [
    "Full Stack Architect",
    "UI/UX Visionary",
    "Problem Solver",
    "Tech Innovator"
  ];

  const currentWordBanner = designationsBanner[currentWordIndexBanner];
  const currentWordAbout = designationsAbout[currentWordIndexAbout];

  // Check screen size for disabling animations
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 991);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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

  const disableAnimations = isClient && screenWidth < 991;

  // Typing animation for Banner
  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 2000;
    
    if (isTypingBanner) {
      if (displayedTextBanner.length < currentWordBanner.length) {
        const timeout = setTimeout(() => {
          setDisplayedTextBanner(currentWordBanner.slice(0, displayedTextBanner.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTypingBanner(false);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedTextBanner.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedTextBanner(displayedTextBanner.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentWordIndexBanner((prev) => (prev + 1) % designationsBanner.length);
          setIsTypingBanner(true);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayedTextBanner, isTypingBanner, currentWordBanner, designationsBanner.length]);

  // Typing animation for About
  useEffect(() => {
    if (!isClient) return;
    
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseDuration = 2500;
    
    if (isTypingAbout) {
      if (displayedTextAbout.length < currentWordAbout.length) {
        const timeout = setTimeout(() => {
          setDisplayedTextAbout(currentWordAbout.slice(0, displayedTextAbout.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTypingAbout(false);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedTextAbout.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedTextAbout(displayedTextAbout.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentWordIndexAbout((prev) => (prev + 1) % designationsAbout.length);
          setIsTypingAbout(true);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayedTextAbout, isTypingAbout, currentWordAbout, designationsAbout.length, isClient]);

  // Smooth scroll to contact section
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

  // Smooth scroll to about section
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
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

  // Optimized Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0.1, 0.3]
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const threshold = entry.intersectionRatio;
          
          if (element.classList.contains('banner-text') && threshold > 0.1) {
            element.classList.add('animate-in');
          } else if (element.classList.contains('banner-image') && threshold > 0.1) {
            element.classList.add('animate-in');
          } else if ((element.classList.contains('banner-social') || element.classList.contains('banner-cta')) && threshold > 0.1) {
            element.classList.add('animate-in');
          } else if (element.classList.contains('about-header') && threshold > 0.1) {
            element.classList.add('animate-in');
          } else if (element.classList.contains('about-profile') && threshold > 0.1) {
            element.classList.add('animate-in');
          } else if (element.classList.contains('about-stat') && threshold > 0.1) {
            element.classList.add('animate-in');
          } else if (element.classList.contains('about-content') && threshold > 0.1) {
            element.classList.add('animate-in');
          } else if (element.classList.contains('about-quote') && threshold > 0.1) {
            element.classList.add('animate-in');
          }
          
          if (threshold > 0.3 && !isLoaded) {
            setIsLoaded(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Banner elements
    if (textRef.current) {
      textRef.current.classList.add('banner-text');
      observer.observe(textRef.current);
    }
    if (imageRef.current) {
      imageRef.current.classList.add('banner-image');
      observer.observe(imageRef.current);
    }
    if (socialRef.current) {
      socialRef.current.classList.add('banner-social');
      observer.observe(socialRef.current);
    }
    if (ctaRef.current) {
      ctaRef.current.classList.add('banner-cta');
      observer.observe(ctaRef.current);
    }

    // About elements
    if (headerRef.current) {
      headerRef.current.classList.add('about-header');
      observer.observe(headerRef.current);
    }
    if (profileRef.current) {
      profileRef.current.classList.add('about-profile');
      observer.observe(profileRef.current);
    }
    if (contentRef.current) {
      contentRef.current.classList.add('about-content');
      observer.observe(contentRef.current);
    }
    if (quoteRef.current) {
      quoteRef.current.classList.add('about-quote');
      observer.observe(quoteRef.current);
    }
    statsRef.current.forEach(stat => {
      if (stat) {
        stat.classList.add('about-stat');
        observer.observe(stat);
      }
    });

    return () => observer.disconnect();
  }, [isLoaded]);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/SahelQureshi",
      label: "GitHub",
      color: "hover:bg-gray-500/20 hover:border-gray-400/30"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sahel-qureshi-47b1252a8",
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

  return (
    <>
      {/* BANNER SECTION */}
      <section
        ref={sectionRef}
        id="banner"
        className="relative min-h-screen flex items-center justify-center pt-[5rem] lg:pb-[0rem] pb-[2rem]"
      >
        {/* Enhanced background with multiple layers */}
        <div className="absolute inset-0 -z-10">
          <div className={`absolute -top-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-600/20 blur-3xl ${!isMobile ? 'css-float' : ''}`} />
          <div className={`absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-600/20 blur-3xl ${!isMobile ? 'css-float' : ''}`} style={!isMobile ? { animationDelay: '2s' } : {}} />
          <div className={`absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/15 blur-3xl ${!isMobile ? 'css-float' : ''}`} style={!isMobile ? { animationDelay: '4s' } : {}} />
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-x-0 top-1/3 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />

          {/* Additional decorative elements */}
          <div className={`absolute top-20 left-20 w-2 h-2 rounded-full bg-purple-400 ${!isMobile ? 'css-ping' : ''}`} />
          <div className={`absolute bottom-32 right-32 w-3 h-3 rounded-full bg-cyan-400 ${!isMobile ? 'css-pulse' : ''}`} />
          <div className={`absolute top-1/3 left-1/4 w-1 h-1 rounded-full bg-pink-400 ${!isMobile ? 'css-ping' : ''}`} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 min-h-screen items-center">
            
            {/* Left Content */}
            <div ref={textRef} className="lg:col-span-7 space-y-8 lg:order-1 order-2">
              {/* Greeting */}
              <div className="space-y-4 lg:text-left text-center">
                <div className="inline-flex items-center lg:justify-start justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2 ">
                  <Sparkles className="h-5 w-5 text-purple-300" />
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
                  {displayedTextBanner}
                  <span className="inline-block w-1 h-8 bg-cyan-400 ml-1 animate-pulse" />
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
                    className={`group relative overflow-hidden rounded-2xl bg-white/10 border border-white/20 p-4 transition-all duration-300 hover:scale-110 ${social.color}`}
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

                <button
                  onClick={downloadCV}
                  className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 text-white font-semibold py-4 px-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center cursor-pointer"
                >
                  <div className="relative flex items-center justify-center gap-3">
                    <Download className="h-5 w-5" />
                    <span>Download Resume</span>
                    <Download className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                  </div>
                </button>
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

            {/* Right Content - Enhanced Profile Circle Design */}
            <div className="lg:col-span-5 flex justify-center items-start lg:pt-[8rem] pt-[2rem] h-full lg:order-2 order-1">
              <div ref={imageRef} className="relative">
                {/* Outer animated ring layers */}
                <div className={`absolute -inset-8 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl ${!isMobile ? 'animate-pulse scale-110' : ''}`} />
                <div className={`absolute -inset-12 rounded-full bg-gradient-to-r from-cyan-500/15 to-blue-500/15 blur-3xl ${!isMobile ? 'animate-pulse scale-125' : ''}`} style={!isMobile ? { animationDelay: '1s' } : {}} />
                
                {/* Main circle container */}
                <div className="relative w-60 sm:w-80 h-60 sm:h-80 md:w-96 md:h-96 lg:w-[22rem] xl:w-[28rem] lg:h-[22rem] xl:h-[28rem]">
                  
                  {/* Outer rotating gradient ring */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 p-[4px] ${!isMobile ? 'animate-spin-slow' : ''}`}>
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-slate-800" />
                  </div>

                  {/* Second rotating ring (reverse direction) */}
                  <div className={`absolute inset-[10px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 p-[3px] ${!isMobile ? 'animate-spin-slow-reverse' : ''}`}>
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900" />
                  </div>

                  {/* Third subtle ring */}
                  <div className="absolute inset-[18px] rounded-full bg-gradient-to-r from-fuchsia-500/30 via-purple-500/30 to-cyan-500/30 p-[2px]">
                    <div className="w-full h-full rounded-full bg-slate-900" />
                  </div>

                  {/* Profile image container */}
                  <div className="absolute inset-[-24px] rounded-full overflow-hidden ring-2 ring-white/10 flex justify-center">
                    <img
                      src="/assets/images/Sahel-img2.png"
                      alt="Sahel Qureshi"
                      className="w-[80%] lg:w-[72%] h-auto object-cover object-top transition-transform duration-500"
                    />
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Decorative dots around the circle */}
                  {!isMobile && (
                    <>
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse" style={{ animationDelay: '1.5s' }} />
                      
                      {/* Diagonal decorative dots */}
                      <div className="absolute top-1/4 -left-3 w-2 h-2 rounded-full bg-purple-400 animate-ping" style={{ animationDelay: '0.3s' }} />
                      <div className="absolute top-1/4 -right-3 w-2 h-2 rounded-full bg-pink-400 animate-ping" style={{ animationDelay: '0.8s' }} />
                      <div className="absolute bottom-1/4 -left-3 w-2 h-2 rounded-full bg-cyan-400 animate-ping" style={{ animationDelay: '1.3s' }} />
                      <div className="absolute bottom-1/4 -right-3 w-2 h-2 rounded-full bg-blue-400 animate-ping" style={{ animationDelay: '1.8s' }} />
                    </>
                  )}

                  {/* Floating tech badges */}
                  <div className={`absolute -top-6 -right-9 xs:-right-12 sm:-right-6 z-20 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-500/30 shadow-lg ${!isMobile ? 'animate-bounce-slow' : ''}`}>
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-purple-300" />
                      <span className="text-xs font-medium text-white">React Expert</span>
                    </div>
                  </div>

                  <div className={`absolute -bottom-6 -left-6 z-20 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-500/30 shadow-lg ${!isMobile ? 'animate-bounce-slow' : ''}`} style={{ animationDelay: '0.5s' }}>
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-cyan-300" />
                      <span className="text-xs font-medium text-white">Fast & Scalable</span>
                    </div>
                  </div>

                  {/* Additional floating icons */}
                  <div className={`absolute top-1/3 -right-8 z-20 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg ${!isMobile ? 'animate-float' : ''}`}>
                    <Rocket className="h-5 w-5 text-pink-300" />
                  </div>

                  <div className={`absolute bottom-1/3 -left-8 z-20 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg ${!isMobile ? 'animate-float' : ''}`} style={{ animationDelay: '1s' }}>
                    <Shield className="h-5 w-5 text-cyan-300" />
                  </div>

                  <div className={`absolute top-1/2 -right-10 z-20 p-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-md border border-amber-500/30 ${!isMobile ? 'animate-pulse' : ''}`}>
                    <Star className="h-3 w-3 text-amber-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
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
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
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
          .banner-text.animate-in,
          .banner-image.animate-in,
          .banner-social.animate-in,
          .banner-cta.animate-in {
            opacity: 1 !important;
            transform: translateX(0) !important;
            transform: translateY(0) !important;
          }
          .banner-text.animate-in {
            transform: translateY(0) !important;
          }
          .banner-image.animate-in {
            transform: translateX(0) !important;
          }
          .css-float {
            animation: float 8s ease-in-out infinite;
          }
          .css-ping {
            animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
          .css-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative py-24 md:py-32">
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
          <div className={`absolute top-20 left-[15%] w-2 h-2 rounded-full bg-blue-400 ${!disableAnimations ? 'animate-float-about' : ''}`} style={{ animationDuration: '4s' }} />
          <div className={`absolute bottom-32 right-[20%] w-3 h-3 rounded-full bg-purple-400 ${!disableAnimations ? 'animate-float-about' : ''}`} style={{ animationDuration: '5s', animationDelay: '1s' }} />
          <div className={`absolute top-1/3 left-[85%] w-1.5 h-1.5 rounded-full bg-cyan-400 ${!disableAnimations ? 'animate-float-about' : ''}`} style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
          <div className={`absolute bottom-1/4 left-[10%] w-2.5 h-2.5 rounded-full bg-pink-400 ${!disableAnimations ? 'animate-float-about' : ''}`} style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header section with animated badge */}
          <div ref={headerRef} className="mx-auto max-w-4xl text-center mb-20 opacity-0 translate-y-8 transition-all duration-700 about-header">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 text-sm text-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <Sparkles className={`h-5 w-5 text-cyan-300 ${!disableAnimations ? 'animate-spin-slow-about' : ''}`} />
              <span className="font-medium bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">Get to Know Me</span>
              <div className={`h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 ${!disableAnimations ? 'animate-pulse' : ''}`} />
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

          {/* Stats section with enhanced cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {statsData.map((stat, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el && statsRef.current) {
                    statsRef.current[index] = el;
                  }
                }}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-500 hover:scale-105 hover:border-white/20 opacity-0 translate-y-8 about-stat"
                style={{ transitionDelay: `${index * 100}ms` }}
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
              </div>
            ))}
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Profile Image Section - Enhanced */}
            <div className="lg:col-span-5 flex justify-center">
              <div ref={profileRef} className="relative opacity-0 translate-x-8 transition-all duration-700 about-profile">
                {/* Animated decorative rings */}
                <div className={`absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '3s' }} />
                <div className={`absolute -inset-8 rounded-full bg-gradient-to-r from-blue-500/10 to-pink-500/10 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '4s', animationDelay: '1s' }} />

                {/* Main profile container */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem]">
                  {/* Rotating border */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 p-[3px] ${!disableAnimations ? 'animate-spin-slow-about' : ''}`}>
                    <div className="w-full h-full rounded-full bg-slate-900" />
                  </div>
                  
                  {/* Inner rotating ring */}
                  <div className={`absolute inset-[6px] rounded-full bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 p-[2px] ${!disableAnimations ? 'animate-spin-slow-reverse-about' : ''}`}>
                    <div className="w-full h-full rounded-full bg-slate-900" />
                  </div>

                  {/* Profile image */}
                  <div className="absolute inset-[9px] rounded-full overflow-hidden flex justify-center items-end">
                    <img
                      src="/assets/images/Sahel-img2.png"
                      alt="Sahel Qureshi"
                      className="w-[96%] h-auto object-cover object-top scale-110"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  </div>

                  {/* Floating tech badges */}
                  <div className={`absolute -top-4 -right-4 z-20 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white ${!disableAnimations ? 'animate-bounce-slow-about' : ''}`}>
                    <span className="flex items-center gap-1">⚛️ React</span>
                  </div>
                  <div className={`absolute -bottom-4 -left-4 z-20 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white ${!disableAnimations ? 'animate-bounce-slow-about' : ''}`} style={{ animationDelay: '0.5s' }}>
                    <span className="flex items-center gap-1">▲ Next.js</span>
                  </div>
                  <div className={`absolute top-1/4 -right-6 z-20 p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 ${!disableAnimations ? 'animate-float-about' : ''}`}>
                    <Code className="h-4 w-4 text-cyan-300" />
                  </div>
                  <div className={`absolute bottom-1/3 -left-6 z-20 p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 ${!disableAnimations ? 'animate-float-about' : ''}`} style={{ animationDelay: '1s' }}>
                    <Zap className="h-4 w-4 text-purple-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section - Enhanced */}
            <div ref={contentRef} className="lg:col-span-7 space-y-8 opacity-0 translate-x-8 transition-all duration-700 about-content">
              {/* Typing animation header */}
              <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  I'm Sahel, a
                  <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                    {displayedTextAbout}
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
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, mentoring aspiring 
                    developers, or contributing to open-source projects that make a difference.
                  </p>
                </div>
              </div>

              {/* Tech Stack with progress bars */}
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
                          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-1000"
                          style={{ width: isLoaded ? `${tech.level}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expertise cards */}
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

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={scrollToContact}
                  className="group relative overflow-hidden px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Let's Collaborate
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

              {/* Social links */}
              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/SahelQureshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sahel-qureshi-47b1252a8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quote section with enhanced design */}
          <div ref={quoteRef} className="mt-32 text-center opacity-0 translate-y-8 transition-all duration-700 about-quote">
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
          </div>
        </div>

        <style jsx>{`
          @keyframes float-about {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes spin-slow-about {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes spin-slow-reverse-about {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          @keyframes bounce-slow-about {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-float-about { animation: float-about 4s ease-in-out infinite; }
          .animate-spin-slow-about { animation: spin-slow-about 8s linear infinite; }
          .animate-spin-slow-reverse-about { animation: spin-slow-reverse-about 6s linear infinite; }
          .animate-bounce-slow-about { animation: bounce-slow-about 2s ease-in-out infinite; }
          .about-header.animate-in,
          .about-profile.animate-in,
          .about-content.animate-in,
          .about-quote.animate-in {
            opacity: 1 !important;
            transform: translateX(0) !important;
          }
          .about-stat.animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `}</style>
      </section>
    </>
  );
};

export default BannerAboutCombined;