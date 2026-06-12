"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Smartphone,
  Sparkles,
  Trophy,
  Target,
  Zap,
  Star,
  ChevronRight,
  Globe,
  Cloud,
  Shield,
  Layers,
  Cpu,
  Rocket,
  Award,
  TrendingUp,
  CheckCircle,
  BarChart3,
  Palette,
  Terminal,
  Braces,
  GitBranch,
  DatabaseZap,
} from "lucide-react";

const skillsData = [
  {
    id: 1,
    title: "Frontend Development",
    Icon: Layout,
    color: "from-pink-500/20 to-fuchsia-500/20",
    ring: "ring-pink-500/30",
    gradient: "from-pink-500 to-fuchsia-500",
    gradientLight: "from-pink-400 to-fuchsia-400",
    items: [
      { name: "React.js", level: 92, icon: "⚛️" },
      { name: "Next.js (SSR/SSG)", level: 88, icon: "▲" },
      { name: "JavaScript (ES6+)", level: 90, icon: "🟨" },
      { name: "Redux Toolkit", level: 85, icon: "🔴" },
      { name: "React Query", level: 82, icon: "📊" },
      { name: "Tailwind CSS", level: 90, icon: "🎨" },
      { name: "Bootstrap", level: 85, icon: "📱" },
      { name: "HTML5/CSS3", level: 92, icon: "🌐" },
    ],
  },
  {
    id: 2,
    title: "Mobile Development",
    Icon: Smartphone,
    color: "from-purple-500/20 to-pink-500/20",
    ring: "ring-purple-500/30",
    gradient: "from-purple-500 to-pink-500",
    gradientLight: "from-purple-400 to-pink-400",
    items: [
      { name: "React Native", level: 85, icon: "📱" },
      { name: "Expo", level: 85, icon: "⚡" },
      { name: "Expo Router", level: 80, icon: "🧭" },
      { name: "Async Storage", level: 82, icon: "💾" },
      { name: "Push Notifications", level: 75, icon: "🔔" },
    ],
  },
  {
    id: 3,
    title: "Backend Development",
    Icon: Server,
    color: "from-emerald-500/20 to-teal-500/20",
    ring: "ring-emerald-500/30",
    gradient: "from-emerald-500 to-teal-500",
    gradientLight: "from-emerald-400 to-teal-400",
    items: [
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Express.js", level: 85, icon: "🚂" },
      { name: "REST API Development", level: 90, icon: "🔌" },
      { name: "JWT Authentication", level: 88, icon: "🔐" },
      { name: "MVC Pattern", level: 85, icon: "🏗️" },
      { name: "Middleware", level: 82, icon: "⚙️" },
    ],
  },
  {
    id: 4,
    title: "Database & Cloud",
    Icon: Database,
    color: "from-cyan-500/20 to-blue-500/20",
    ring: "ring-cyan-500/30",
    gradient: "from-cyan-500 to-blue-500",
    gradientLight: "from-cyan-400 to-blue-400",
    items: [
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "MongoDB Atlas", level: 85, icon: "☁️" },
      { name: "Data Modeling", level: 80, icon: "📐" },
      { name: "Aggregation Pipeline", level: 78, icon: "🔗" },
      { name: "Firebase", level: 75, icon: "🔥" },
      { name: "Cloudinary", level: 80, icon: "🖼️" },
    ],
  },
  {
    id: 5,
    title: "Tools & Deployment",
    Icon: Cloud,
    color: "from-amber-500/20 to-orange-500/20",
    ring: "ring-amber-500/30",
    gradient: "from-amber-500 to-orange-500",
    gradientLight: "from-amber-400 to-orange-400",
    items: [
      { name: "Git & GitHub", level: 90, icon: "📦" },
      { name: "Vercel / Netlify", level: 88, icon: "🚀" },
      { name: "Render", level: 85, icon: "⚡" },
      { name: "Postman", level: 85, icon: "📮" },
      { name: "Expo CLI", level: 80, icon: "📱" },
      { name: "CI/CD", level: 75, icon: "🔄" },
    ],
  },
  {
    id: 6,
    title: "Core Technologies",
    Icon: Shield,
    color: "from-indigo-500/20 to-purple-500/20",
    ring: "ring-indigo-500/30",
    gradient: "from-indigo-500 to-purple-500",
    gradientLight: "from-indigo-400 to-purple-400",
    items: [
      { name: "State Management", level: 88, icon: "📦" },
      { name: "API Architecture", level: 85, icon: "🏛️" },
      { name: "Performance Optimization", level: 85, icon: "⚡" },
      { name: "Scalable Systems", level: 80, icon: "📈" },
      { name: "SSR/SSG", level: 85, icon: "🖥️" },
      { name: "Authorization (RBAC)", level: 82, icon: "🔒" },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [activeCat, setActiveCat] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
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

  const categories = ["All", ...skillsData.map((s) => s.title)];
  
  // Filter skills based on selected category
  const filteredSkills = activeCat === "All"
    ? skillsData
    : skillsData.filter((skill) => skill.title === activeCat);

  // Debug logging
  useEffect(() => {
    console.log("Active Category:", activeCat);
    console.log("Filtered Skills Count:", filteredSkills.length);
    console.log("Filtered Skills:", filteredSkills);
  }, [activeCat, filteredSkills]);

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

  const sidebarVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
  };

  const skillsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const totalProjects = 25;
  const experienceYears = 2;
  const satisfactionRate = 100;

  // Calculate overall skill average
  const allSkills = skillsData.flatMap(cat => cat.items);
  const avgSkillLevel = Math.round(allSkills.reduce((sum, s) => sum + s.level, 0) / allSkills.length);

  return (
    <motion.section 
      ref={sectionRef} 
      id="skills" 
      className="relative py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Enhanced animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className={`absolute -top-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-fuchsia-500/40 to-purple-500/20 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '6s' }} />
        <div className={`absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/40 to-blue-500/20 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '8s', animationDelay: '1s' }} />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-pink-500/10 to-amber-500/5 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '10s', animationDelay: '2s' }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}
        />
        
        {/* Floating particles */}
        <div className={`absolute top-20 left-[15%] w-2 h-2 rounded-full bg-fuchsia-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '4s' }} />
        <div className={`absolute bottom-32 right-[20%] w-3 h-3 rounded-full bg-cyan-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className={`absolute top-1/3 left-[85%] w-1.5 h-1.5 rounded-full bg-purple-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        <div className={`absolute bottom-1/4 left-[10%] w-2.5 h-2.5 rounded-full bg-amber-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced header section */}
        <motion.div variants={itemVariants} className="mx-auto max-w-4xl text-center mb-20">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 md:backdrop-blur-sm px-6 py-3 text-sm text-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Zap className={`h-5 w-5 text-fuchsia-300 ${!disableAnimations ? 'animate-pulse' : ''}`} />
            <span className="font-medium bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">Technical Arsenal</span>
            <div className={`h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 ${!disableAnimations ? 'animate-pulse' : ''}`} />
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="mt-8 font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight"
          >
            My
            <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mt-2">
              Technical Toolkit
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="mt-6 text-white/70 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
          >
            Full Stack MERN Developer with expertise in modern frameworks and technologies. 
            Specializing in building scalable, high-performance web and mobile applications.
          </motion.p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div 
          variants={statsContainerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          <motion.div 
            variants={statItemVariants}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:backdrop-blur-sm p-6 text-center transition-all duration-500 hover:scale-105 hover:border-white/20"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Code2 className="h-8 w-8 text-fuchsia-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-bold bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent mb-1">
              {avgSkillLevel}%
            </div>
            <div className="text-white/60 text-sm">Average Proficiency</div>
          </motion.div>
          <motion.div 
            variants={statItemVariants}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:backdrop-blur-sm p-6 text-center transition-all duration-500 hover:scale-105 hover:border-white/20"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Rocket className="h-8 w-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1">
              {totalProjects}+
            </div>
            <div className="text-white/60 text-sm">Projects Delivered</div>
          </motion.div>
          <motion.div 
            variants={statItemVariants}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:backdrop-blur-sm p-6 text-center transition-all duration-500 hover:scale-105 hover:border-white/20"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <TrendingUp className="h-8 w-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
              30%+
            </div>
            <div className="text-white/60 text-sm">Performance Gain</div>
          </motion.div>
          <motion.div 
            variants={statItemVariants}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:backdrop-blur-sm p-6 text-center transition-all duration-500 hover:scale-105 hover:border-white/20"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Award className="h-8 w-8 text-amber-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-1">
              {satisfactionRate}%
            </div>
            <div className="text-white/60 text-sm">Client Satisfaction</div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left sidebar - Enhanced */}
          <motion.aside 
            variants={sidebarVariants}
            className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 self-start"
          >
            {/* About section */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 md:backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 p-3">
                    <Trophy className="h-6 w-6 text-fuchsia-300" />
                  </div>
                  <h3 className="font-bold text-xl text-white">Expertise Overview</h3>
                </div>

                <p className="text-white/70 text-base leading-relaxed mb-6">
                  Full Stack Developer with {experienceYears}+ years of experience building 
                  production-ready applications. Expertise spans across modern JavaScript 
                  frameworks, cloud deployment, and performance optimization.
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <motion.div 
                    className="text-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-white mb-0.5">{experienceYears}+</div>
                    <div className="text-xs text-white/60">Years Exp</div>
                  </motion.div>
                  <motion.div 
                    className="text-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-white mb-0.5">{totalProjects}+</div>
                    <div className="text-xs text-white/60">Projects</div>
                  </motion.div>
                  <motion.div 
                    className="text-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-white mb-0.5">10+</div>
                    <div className="text-xs text-white/60">Tech Stack</div>
                  </motion.div>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-white/60">Skills Mastery</span>
                    <span className="text-white font-semibold">{avgSkillLevel}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${avgSkillLevel}%` }}
                      viewport={{ once: false }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced filter section */}
            <div className="rounded-3xl border border-white/20 bg-white/5 md:backdrop-blur-sm p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-5 w-5 text-cyan-300" />
                <h4 className="font-semibold text-white">Filter by Category</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <motion.button
                    key={c}
                    onClick={() => setActiveCat(c)}
                    className={`group relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      activeCat === c
                        ? "bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white shadow-lg shadow-fuchsia-500/25 scale-105"
                        : "bg-white/10 text-white/70 hover:text-white hover:bg-white/20 border border-white/20 hover:border-white/30"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{c}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Achievement badge */}
            <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-5 w-5 text-amber-300" />
                <h4 className="font-semibold text-white">Key Achievements</h4>
              </div>
              <ul className="space-y-3">
                {[
                  "30% performance improvement through code splitting",
                  "25% reduction in development time with reusable components",
                  "99.9% uptime maintained for production apps",
                  "95+ PageSpeed score across all projects"
                ].map((achievement, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start gap-2 text-sm text-white/70"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <CheckCircle className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Quote */}
            <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
              <Terminal className="h-6 w-6 text-fuchsia-400 mx-auto mb-3" />
              <p className="text-white/50 text-xs italic">
                "The only way to do great work is to love what you do and never stop learning."
              </p>
              <div className="mt-2 flex justify-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-1 h-1 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Right content - Enhanced skills grid */}
          <motion.div 
            key={activeCat}
            variants={skillsContainerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {filteredSkills.length > 0 ? (
                filteredSkills.map((skill) => (
                  <motion.article
                    key={skill.id}
                    variants={skillCardVariants}
                    className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 md:backdrop-blur-sm p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
                    style={{ transformStyle: "preserve-3d" }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Glow border on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Animated particles */}
                    {!disableAnimations && (
                      <div className="absolute inset-0 pointer-events-none">
                        <motion.div
                          className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-white/60"
                          animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        <motion.div
                          className="absolute top-3/4 right-1/4 w-1 h-1 rounded-full bg-white/40"
                          animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                        />
                        <motion.div
                          className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-white/50"
                          animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: 0.6 }}
                        />
                      </div>
                    )}

                    <div className="relative">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-5">
                        <motion.div 
                          className="rounded-xl bg-gradient-to-br from-white/15 to-white/5 p-2.5 ring-1 ring-white/20 group-hover:ring-white/30 transition-all duration-300"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <skill.Icon className="h-5 w-5 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-lg text-white">{skill.title}</h3>
                          <p className="text-xs text-white/50">{skill.items.length} technologies</p>
                        </div>
                      </div>

                      {/* Skills list */}
                      <ul className="space-y-4">
                        {skill.items.map((skillItem, skillIndex) => (
                          <li key={skillItem.name} className="group/skill">
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">{skillItem.icon}</span>
                                <span className="text-sm text-white/80 font-medium">{skillItem.name}</span>
                              </div>
                              <span className={`text-sm font-semibold bg-gradient-to-r ${skill.gradientLight} bg-clip-text text-transparent`}>
                                {skillItem.level}%
                              </span>
                            </div>
                            <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10">
                              <motion.div
                                className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 shadow-lg"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skillItem.level}%` }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.8, delay: skillIndex * 0.05 }}
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/70">
                    <Sparkles className="h-4 w-4" />
                    No skills found for "{activeCat}"
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

    </motion.section>
  );
};

export default Skills;