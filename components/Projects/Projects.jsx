"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  FolderGit2,
  Github,
  ExternalLink,
  Calendar,
  Code,
  ArrowUpRight,
  Eye,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Demo data — replace with your real projects later
const projectsData = [
  {
    id: 1,
    title: "Dresza E-Commerce Platform (User)",
    year: 2025,
    description:
      "Full-stack e-commerce storefront built with Next.js featuring SSR for SEO, product browsing, cart, and secure Razorpay payments.",
    tags: ["Next.js", "React", "Redux Toolkit", "React Query", "Tailwind"],
    live: "https://dresza.netlify.app/",
    repo: "https://github.com/SahelQureshi",
    featured: true,
    images: [
      "/assets/projects/dresza-website (1).png",
      "/assets/projects/dresza-website (2).png",
      "/assets/projects/dresza-website (3).png",
      "/assets/projects/dresza-website (4).png",
    ],
  },
  {
    id: 2,
    title: "Dresza Admin Dashboard",
    year: 2025,
    description:
      "React-based admin panel for managing products, orders, and users with full CRUD operations and real-time data handling.",
    tags: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Express"],
    live: "https://dresza-admin.netlify.app/login",
    repo: "https://github.com/SahelQureshi",
    featured: true,
    images: [
      "/assets/projects/dresza-admin (1).png",
      "/assets/projects/dresza-admin (2).png",
      "/assets/projects/dresza-admin (3).png",
      "/assets/projects/dresza-admin (4).png",
    ],
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [screenWidth, setScreenWidth] = useState(1024);
  const [isClient, setIsClient] = useState(false);

  // Handle client-side mounting
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }
  }, []);

  // Update screen width on resize (client-side only)
  useEffect(() => {
    if (!isClient) return;

    const updateScreenWidth = () => {
      if (typeof window !== "undefined") {
        setScreenWidth(window.innerWidth);
      }
    };

    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, [isClient]);

  // Determine if animations should be disabled (screen width < 991px)
  const disableAnimations = isClient && screenWidth < 991;

  const [currentImageIndex, setCurrentImageIndex] = useState({});

  // Get all unique tags from projects
  const allTags = useMemo(() => {
    const tagsSet = new Set(["All"]);
    projectsData.forEach((project) => {
      project.tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }, []);

  // Filter projects based on selected tag
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projectsData;
    }
    return projectsData.filter((project) => 
      project.tags.includes(activeFilter)
    );
  }, [activeFilter]);

  // Debug logging to check filter functionality
  useEffect(() => {
    console.log("Active Filter:", activeFilter);
    console.log("Filtered Projects Count:", filteredProjects.length);
    console.log("Filtered Projects:", filteredProjects);
  }, [activeFilter, filteredProjects]);

  // Auto-advance carousel - disabled on mobile
  useEffect(() => {
    if (disableAnimations) return;

    const intervals = {};

    projectsData.forEach((project, projectIndex) => {
      if (project.images && project.images.length > 1) {
        intervals[projectIndex] = setInterval(() => {
          setCurrentImageIndex((prev) => ({
            ...prev,
            [project.id]:
              (prev[project.id] || 0) === project.images.length - 1
                ? 0
                : (prev[project.id] || 0) + 1,
          }));
        }, 3000);
      }
    });

    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
  }, [disableAnimations]);

  // Manual carousel navigation
  const nextImage = (projectId, totalImages) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]:
        (prev[projectId] || 0) === totalImages - 1
          ? 0
          : (prev[projectId] || 0) + 1,
    }));
  };

  const prevImage = (projectId, totalImages) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]:
        (prev[projectId] || 0) === 0
          ? totalImages - 1
          : (prev[projectId] || 0) - 1,
    }));
  };

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

  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.4 }
    },
  };

  const projectsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  // Enhanced 3D hover tilt with better sensitivity - disabled on mobile
  const onTilt = (e, index) => {
    if (disableAnimations) return;
    setHoveredCard(index);
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = -((y - r.height / 2) / (r.height / 2)) * 8;
    const ry = ((x - r.width / 2) / (r.width / 2)) * 8;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px) scale(1.02)`;
  };

  const resetTilt = (e) => {
    if (disableAnimations) return;
    setHoveredCard(null);
    e.currentTarget.style.transform = "";
  };

  const totalProjects = projectsData.length;
  const currentYear = new Date().getFullYear();
  const recentProjects = projectsData.filter(
    (p) => p.year >= currentYear - 1,
  ).length;
  const featuredProjects = projectsData.filter((p) => p.featured).length;

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="relative py-24 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Enhanced background with more layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className={`absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/20 blur-3xl ${!disableAnimations ? "animate-pulse" : ""}`}
          style={{ animationDuration: "8s", animationDelay: "2s" }}
        />
        <div
          className={`absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-pink-500/20 to-rose-500/15 blur-3xl ${!disableAnimations ? "animate-pulse" : ""}`}
          style={{ animationDuration: "10s", animationDelay: "4s" }}
        />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-x-0 top-1/3 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-fuchsia-500/10 to-transparent" />

        {/* Floating particles */}
        <div
          className={`absolute top-20 left-[15%] w-2 h-2 rounded-full bg-fuchsia-400 ${!disableAnimations ? "animate-float" : ""}`}
          style={{ animationDuration: "4s" }}
        />
        <div
          className={`absolute bottom-32 right-[20%] w-3 h-3 rounded-full bg-cyan-400 ${!disableAnimations ? "animate-float" : ""}`}
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        />
        <div
          className={`absolute top-1/3 left-[85%] w-1.5 h-1.5 rounded-full bg-purple-400 ${!disableAnimations ? "animate-float" : ""}`}
          style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
        />
      </div>

      <div className="container mx-auto px-6">
        {/* Enhanced header section */}
        <motion.div variants={itemVariants} className="mx-auto max-w-4xl text-center mb-16">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white/80 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Sparkles
              className={`h-5 w-5 text-fuchsia-300 ${!disableAnimations ? "animate-pulse" : ""}`}
            />
            <span className="font-medium">Featured Projects</span>
            <div
              className={`h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 ${!disableAnimations ? "animate-pulse" : ""}`}
            />
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="mt-8 font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight"
          >
            Creative{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            A curated collection of digital experiences I&apos;ve crafted — from
            concept to deployment, each project represents innovation,
            performance, and user-centric design.
          </motion.p>
        </motion.div>

        {/* Stats and filters */}
        <div className="mb-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Stats cards */}
          <motion.div 
            variants={statsContainerVariants}
            className="flex sm:gap-4 gap-2 sm:flex-nowrap flex-wrap sm:justify-start justify-center"
          >
            <motion.div 
              variants={statItemVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-3 text-sm text-white/70 mb-2">
                <FolderGit2 className="h-5 w-5 text-fuchsia-300" />
                <span>Total Projects</span>
              </div>
              <div className="relative text-3xl font-bold text-white">
                {totalProjects}
              </div>
            </motion.div>

            <motion.div 
              variants={statItemVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-3 text-sm text-white/70 mb-2">
                <Calendar className="h-5 w-5 text-cyan-300" />
                <span>Recent</span>
              </div>
              <div className="relative text-3xl font-bold text-white">
                {recentProjects}
              </div>
            </motion.div>

            <motion.div 
              variants={statItemVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-3 text-sm text-white/70 mb-2">
                <Star className="h-5 w-5 text-amber-300" />
                <span>Featured</span>
              </div>
              <div className="relative text-3xl font-bold text-white">
                {featuredProjects}
              </div>
            </motion.div>
          </motion.div>

          {/* Filter buttons */}
          <motion.div 
            variants={filterVariants}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                onClick={() => {
                  setActiveFilter(tag);
                }}
                className={`group relative overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeFilter === tag
                    ? "bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white shadow-lg shadow-fuchsia-500/25 scale-105"
                    : "bg-white/10 text-white/70 hover:text-white hover:bg-white/20 border border-white/20 hover:border-white/30"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{tag}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Enhanced projects grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            variants={projectsContainerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, i) => (
                <motion.article
                  key={project.id}
                  variants={projectCardVariants}
                  onMouseMove={(e) => onTilt(e, project.id)}
                  onMouseLeave={resetTilt}
                  className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Featured badge */}
                  {project.featured && (
                    <motion.div 
                      className="absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Star className="h-3.5 w-3.5" />
                      Featured
                    </motion.div>
                  )}

                  {/* Enhanced image carousel */}
                  <div className="relative h-[16rem] w-full overflow-hidden rounded-t-3xl">
                    {project.images && project.images.length > 0 ? (
                      <>
                        {/* Main image */}
                        <div className="relative h-full w-full">
                          <img
                            src={project.images[currentImageIndex[project.id] || 0]}
                            alt={`${project.title} - Image ${(currentImageIndex[project.id] || 0) + 1}`}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />

                          {/* Image overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          {/* Navigation buttons */}
                          {project.images.length > 1 && (
                            <>
                              <motion.button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  prevImage(project.id, project.images.length);
                                }}
                                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 md:backdrop-blur-sm text-white transition-all hover:bg-black/70 hover:scale-110 lg:opacity-0 lg:group-hover:opacity-100"
                                aria-label="Previous image"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <ChevronLeft className="h-4 w-4" />
                              </motion.button>
                              <motion.button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  nextImage(project.id, project.images.length);
                                }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 md:backdrop-blur-sm text-white transition-all hover:bg-black/70 hover:scale-110 lg:opacity-0 lg:group-hover:opacity-100"
                                aria-label="Next image"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <ChevronRight className="h-4 w-4" />
                              </motion.button>
                            </>
                          )}

                          {/* Image indicators */}
                          {project.images.length > 1 && (
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                              {project.images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex((prev) => ({
                                      ...prev,
                                      [project.id]: index,
                                    }));
                                  }}
                                  className={`h-1.5 rounded-full transition-all ${
                                    (currentImageIndex[project.id] || 0) === index
                                      ? "bg-white w-6"
                                      : "bg-white/50 w-1.5 hover:bg-white/70"
                                  }`}
                                  aria-label={`Go to image ${index + 1}`}
                                />
                              ))}
                            </div>
                          )}

                          {/* Animated particles effect */}
                          {!disableAnimations && hoveredCard === project.id && (
                            <div className="absolute inset-0 pointer-events-none">
                              <motion.div
                                className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-white/60"
                                animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                              />
                              <motion.div
                                className="absolute top-3/4 right-1/4 h-1.5 w-1.5 rounded-full bg-white/40"
                                animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                              />
                              <motion.div
                                className="absolute bottom-1/4 left-1/3 h-1 w-1 rounded-full bg-white/50"
                                animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                                transition={{ duration: 1.2, repeat: Infinity, delay: 0.6 }}
                              />
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      /* Fallback gradient if no images */
                      <div className="h-full w-full bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 flex items-center justify-center">
                        <FolderGit2 className="h-16 w-16 text-white/30" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Project header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-bold text-xl text-white leading-tight">
                        {project.title}
                      </h3>
                      <span className="flex-shrink-0 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/30">
                        {project.year}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/20 transition-colors hover:bg-white/20"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <Code className="h-3 w-3 opacity-70" />
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3">
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-fuchsia-500/40"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Eye className="h-4 w-4" />
                        <span>View Live</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </motion.a>

                      <motion.a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/15 px-4 py-2.5 text-sm font-semibold text-white/90 ring-1 ring-white/20 transition-all duration-300 hover:bg-white/20 hover:ring-white/30"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-500/10 via-purple-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.article>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/70">
                  <Sparkles className="h-4 w-4" />
                  No projects found for &quot;{activeFilter}&quot;
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default Projects;