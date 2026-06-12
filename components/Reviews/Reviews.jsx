"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Star,
  Quote,
  ArrowRight,
  Facebook,
  Github,
  Mail,
  Linkedin,
  Sparkles,
  Trophy,
  Users,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Heart,
  Award,
  Crown,
  Zap,
  Shield,
  Clock,
  Briefcase,
  CheckCircle2,
  Diamond,
  ThumbsUp,
  TrendingUp,
} from "lucide-react";

const testimonialsData = [
  {
    name: "Aisha Khan",
    role: "Product Manager, FinTech Co.",
    rating: 5,
    quote:
      "Sahel delivered a robust web app ahead of schedule. The UI feels premium and performance is excellent. Our users love the smooth experience and the conversion rates have improved significantly.",
    initials: "AK",
    avatar: "/avatar1.jpg",
    company: "FinTech Co.",
    project: "E-commerce Platform",
    duration: "3 months",
    socialLinks: {
      linkedin: "https://linkedin.com/in/aishakhan",
      email: "aisha@fintech.com",
    },
    highlight: "Conversion rates improved by 35%",
    metrics: { speed: "+45%", satisfaction: "98%", roi: "+32%" },
  },
  {
    name: "Rahul Mehta",
    role: "Founder, StartupX",
    rating: 5,
    quote:
      "Great communication and attention to detail. Our conversion rate improved noticeably after the revamp. The code quality is exceptional and the project was delivered on time.",
    initials: "RM",
    avatar: "/avatar2.jpg",
    company: "StartupX",
    project: "SaaS Dashboard",
    duration: "4 months",
    socialLinks: {
      linkedin: "https://linkedin.com/in/rahulmehta",
      github: "https://github.com/rahulmehta",
    },
    highlight: "Delivered 2 weeks ahead of schedule",
    metrics: { speed: "+30%", satisfaction: "96%", roi: "+28%" },
  },
  {
    name: "Emily Chen",
    role: "Design Lead, Studio 9",
    rating: 5,
    quote:
      "Clean, maintainable code and smooth animations. Handoffs were easy and the result matched the designs perfectly. The collaboration was seamless.",
    initials: "EC",
    avatar: "/avatar3.jpg",
    company: "Studio 9",
    project: "Design System",
    duration: "2 months",
    socialLinks: {
      linkedin: "https://linkedin.com/in/emilychen",
      email: "emily@studio9.com",
    },
    highlight: "Pixel-perfect implementation",
    metrics: { speed: "+25%", satisfaction: "100%", roi: "+25%" },
  },
  {
    name: "Omar Farooq",
    role: "CTO, EduSphere",
    rating: 5,
    quote:
      "Our dashboard loads faster and users love the new features. Highly recommend working with Sahel. The technical expertise and problem-solving skills are outstanding.",
    initials: "OF",
    avatar: "/avatar4.jpg",
    company: "EduSphere",
    project: "Learning Management System",
    duration: "6 months",
    socialLinks: {
      linkedin: "https://linkedin.com/in/omarfarooq",
      github: "https://github.com/omarfarooq",
    },
    highlight: "50% faster load times",
    metrics: { speed: "+50%", satisfaction: "99%", roi: "+40%" },
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeMetric, setActiveMetric] = useState("speed");
  const sectionRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(1024);
  const [isClient, setIsClient] = useState(false);

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

  const currentTestimonial = testimonialsData[currentIndex];
  const totalTestimonials = testimonialsData.length;

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToTestimonial = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    if (disableAnimations) return;
    const interval = setInterval(() => {
      if (!hoveredCard) {
        nextTestimonial();
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [hoveredCard, disableAnimations]);

  // Rotate metrics display
  useEffect(() => {
    const metricInterval = setInterval(() => {
      setActiveMetric(prev => {
        if (prev === "speed") return "satisfaction";
        if (prev === "satisfaction") return "roi";
        return "speed";
      });
    }, 3000);
    return () => clearInterval(metricInterval);
  }, []);

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

  const metricVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } },
  };

  const profileVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } },
  };

  const detailsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.4,
      },
    },
  };

  const detailItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 }
    },
  };

  // Slide animation variants for the quote card
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    }),
  };

  const metricLabels = {
    speed: { icon: Zap, label: "Performance Gain", color: "cyan" },
    satisfaction: { icon: ThumbsUp, label: "Client Satisfaction", color: "emerald" },
    roi: { icon: TrendingUp, label: "ROI Increase", color: "purple" },
  };

  const currentMetric = metricLabels[activeMetric];
  const MetricIcon = currentMetric.icon;

  return (
    <motion.section
      ref={sectionRef}
      id="reviews"
      className="relative py-24 md:py-32 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
      onMouseEnter={() => setHoveredCard(true)}
      onMouseLeave={() => setHoveredCard(false)}
    >
      {/* Enhanced animated background matching other components */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className={`absolute -top-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-purple-600/20 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '6s' }} />
        <div className={`absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/20 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '8s', animationDelay: '1s' }} />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-pink-500/10 to-purple-500/5 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '10s', animationDelay: '2s' }} />
        
        {/* Floating particles */}
        <div className={`absolute top-20 left-[10%] w-2 h-2 rounded-full bg-fuchsia-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '4s' }} />
        <div className={`absolute bottom-32 right-[15%] w-3 h-3 rounded-full bg-cyan-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className={`absolute top-1/3 left-[80%] w-1.5 h-1.5 rounded-full bg-purple-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        <div className={`absolute bottom-1/4 left-[20%] w-2.5 h-2.5 rounded-full bg-pink-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced header section */}
        <motion.div variants={itemVariants} className="mx-auto max-w-4xl text-center mb-20">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 md:backdrop-blur-sm px-6 py-3 text-sm text-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <MessageSquare className={`h-5 w-5 text-fuchsia-300 ${!disableAnimations ? 'animate-pulse' : ''}`} />
            <span className="font-medium bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">Client Testimonials</span>
            <div className={`h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 ${!disableAnimations ? 'animate-pulse' : ''}`} />
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="mt-8 font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight"
          >
            What
            <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mt-2">
              Clients Say
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Don't just take my word for it — hear from partners who've experienced 
            the impact of quality code and dedicated collaboration.
          </motion.p>
        </motion.div>

        {/* Main testimonial layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side - Dynamic Information Panel (No animation on testimonial change) */}
            <div className="order-2 lg:order-1 space-y-6">
              {/* Floating metric card */}
              <motion.div 
                variants={metricVariants}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 border border-fuchsia-500/20 p-6 md:backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className={`p-3 rounded-xl bg-gradient-to-br from-${currentMetric.color}-500/20 to-${currentMetric.color}-600/20`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <MetricIcon className={`h-6 w-6 text-${currentMetric.color}-400`} />
                    </motion.div>
                    <div>
                      <p className="text-white/60 text-sm">{currentMetric.label}</p>
                      <p className={`text-2xl font-bold bg-gradient-to-r from-${currentMetric.color}-400 to-${currentMetric.color}-300 bg-clip-text text-transparent`}>
                        {currentTestimonial.metrics[activeMetric]}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <motion.div 
                      className={`w-2 h-2 rounded-full ${activeMetric === "speed" ? "bg-cyan-400" : "bg-white/30"}`}
                      animate={activeMetric === "speed" ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <motion.div 
                      className={`w-2 h-2 rounded-full ${activeMetric === "satisfaction" ? "bg-emerald-400" : "bg-white/30"}`}
                      animate={activeMetric === "satisfaction" ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <motion.div 
                      className={`w-2 h-2 rounded-full ${activeMetric === "roi" ? "bg-purple-400" : "bg-white/30"}`}
                      animate={activeMetric === "roi" ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Client profile card - Animate content changes with key */}
              <motion.div 
                key={`profile-${currentIndex}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:backdrop-blur-sm p-6 transition-all duration-500 hover:border-fuchsia-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex items-center gap-5">
                  {/* Avatar with animated ring */}
                  <div className="relative">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-fuchsia-500/30 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20">
                      {currentTestimonial.avatar ? (
                        <Image
                          src={currentTestimonial.avatar}
                          alt={currentTestimonial.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <span className="text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                            {currentTestimonial.initials}
                          </span>
                        </div>
                      )}
                    </div>
                    <motion.div 
                      className={`absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${!disableAnimations ? 'animate-pulse' : ''}`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 border-2 border-slate-950">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-white mb-0.5">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-fuchsia-300 text-sm font-medium mb-2">
                      {currentTestimonial.role}
                    </p>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-fuchsia-400 fill-fuchsia-400" />
                      <span className="text-white/80 font-semibold">{currentTestimonial.rating}.0</span>
                      <span className="text-white/40">/ 5.0</span>
                    </div>
                  </div>
                </div>

                {/* Highlight badge */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm">
                    <Diamond className="h-4 w-4 text-fuchsia-400" />
                    <span className="text-white/70">Key Highlight:</span>
                    <span className="text-cyan-300 font-medium">{currentTestimonial.highlight}</span>
                  </div>
                </div>
              </motion.div>

              {/* Project details grid - Animate content changes */}
              <motion.div 
                key={`details-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="grid grid-cols-2 gap-3"
              >
                <div className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <Briefcase className="h-5 w-5 text-fuchsia-400 mb-2" />
                  <p className="text-white/50 text-xs">Company</p>
                  <p className="text-white font-semibold text-sm">{currentTestimonial.company}</p>
                </div>
                <div className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <Zap className="h-5 w-5 text-cyan-400 mb-2" />
                  <p className="text-white/50 text-xs">Project</p>
                  <p className="text-white font-semibold text-sm">{currentTestimonial.project}</p>
                </div>
                <div className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <Clock className="h-5 w-5 text-purple-400 mb-2" />
                  <p className="text-white/50 text-xs">Duration</p>
                  <p className="text-white font-semibold text-sm">{currentTestimonial.duration}</p>
                </div>
                <div className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <Users className="h-5 w-5 text-pink-400 mb-2" />
                  <p className="text-white/50 text-xs">Team Size</p>
                  <p className="text-white font-semibold text-sm">2-3 Members</p>
                </div>
              </motion.div>

              {/* Social connections */}
              <motion.div 
                key={`social-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex gap-2"
              >
                {currentTestimonial.socialLinks.linkedin && (
                  <motion.a 
                    href={currentTestimonial.socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="h-5 w-5 text-white/70 hover:text-blue-400" />
                  </motion.a>
                )}
                {currentTestimonial.socialLinks.github && (
                  <motion.a 
                    href={currentTestimonial.socialLinks.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-gray-500/20 hover:border-gray-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-5 w-5 text-white/70 hover:text-gray-400" />
                  </motion.a>
                )}
                {currentTestimonial.socialLinks.email && (
                  <motion.a 
                    href={`mailto:${currentTestimonial.socialLinks.email}`}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="h-5 w-5 text-white/70 hover:text-emerald-400" />
                  </motion.a>
                )}
              </motion.div>

              {/* Navigation controls */}
              <motion.div variants={itemVariants} className="flex items-center justify-between pt-4">
                <motion.button
                  onClick={prevTestimonial}
                  disabled={isAnimating}
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-fuchsia-500/20 hover:border-fuchsia-500/30 transition-all duration-300 disabled:opacity-50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </motion.button>

                <div className="flex items-center gap-2">
                  {testimonialsData.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => goToTestimonial(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? "w-8 bg-gradient-to-r from-fuchsia-400 to-cyan-400"
                          : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={nextTestimonial}
                  disabled={isAnimating}
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-fuchsia-500/20 hover:border-fuchsia-500/30 transition-all duration-300 disabled:opacity-50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </motion.button>
              </motion.div>
            </div>

            {/* Right Side - Quote Card with smooth slide animation */}
            <div className="order-1 lg:order-2">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative"
                >
                  {/* Animated gradient rings */}
                  <div className={`absolute -inset-3 rounded-3xl bg-gradient-to-r from-fuchsia-500/20 via-purple-500/15 to-cyan-500/20 blur-xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '3s' }} />
                  <div className={`absolute -inset-6 rounded-3xl bg-gradient-to-r from-fuchsia-500/10 via-transparent to-cyan-500/10 blur-2xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '4s', animationDelay: '1s' }} />

                  <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 md:backdrop-blur-sm p-8 lg:p-10 shadow-2xl">
                    {/* Decorative corner accents */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-fuchsia-500/30 rounded-tl-2xl" />
                    <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-fuchsia-500/30 rounded-tr-2xl" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-fuchsia-500/30 rounded-bl-2xl" />
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-fuchsia-500/30 rounded-br-2xl" />

                    {/* Quote icon */}
                    <div className="absolute top-6 right-6 opacity-10">
                      <Quote className="h-16 w-16 text-white" />
                    </div>

                    <div className="relative space-y-8">
                      {/* Rating stars */}
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <Star
                              className={`h-5 w-5 ${
                                idx < currentTestimonial.rating
                                  ? "text-fuchsia-400 fill-fuchsia-400"
                                  : "text-white/20"
                              }`}
                            />
                          </motion.div>
                        ))}
                      </div>

                      {/* Quote text */}
                      <p className="text-lg lg:text-xl leading-relaxed text-white/80 font-medium">
                        &ldquo;{currentTestimonial.quote}&rdquo;
                      </p>

                      {/* Decorative line */}
                      <div className="flex items-center gap-2">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500" />
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />
                      </div>

                      {/* Author info */}
                      <div>
                        <h4 className="text-white font-bold text-lg">
                          {currentTestimonial.name}
                        </h4>
                        <p className="text-fuchsia-400 text-sm">
                          {currentTestimonial.role}
                        </p>
                        <div className="flex items-center gap-2 mt-3 text-xs text-white/40">
                          <span>Testimonial {currentIndex + 1}</span>
                          <span>•</span>
                          <span>{totalTestimonials} Success Stories</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/5 via-purple-500/3 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div 
          variants={ctaVariants}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 md:backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 px-4 py-2 mb-4 md:backdrop-blur-sm">
                <MessageSquare className="h-4 w-4 text-fuchsia-300" />
                <span className="text-sm font-medium text-white">Start Your Success Story</span>
              </div>

              <p className="text-white/70 text-base mb-6 leading-relaxed">
                Ready to be the next satisfied client? Let's collaborate and create something 
                extraordinary together.
              </p>

              <motion.button
                onClick={scrollToContact}
                className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-fuchsia-500/25 hover:shadow-xl hover:shadow-fuchsia-500/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get in Touch</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default Reviews;