"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
} from "lucide-react";

// Demo data — replace with your real projects later
const projectsData = [
  {
    title: "E‑Commerce UI Kit",
    year: 2024,
    description:
      "High-performance storefront with Next.js, server components, and Tailwind.",
    tags: ["Next.js", "Tailwind", "Stripe"],
    live: "#",
    repo: "#",
    featured: true,
  },
  {
    title: "Realtime Chat App",
    year: 2024,
    description:
      "Socket-powered chat with auth, file uploads, and message reactions.",
    tags: ["React", "Node", "Socket.io"],
    live: "#",
    repo: "#",
    featured: false,
  },
  {
    title: "Portfolio v2",
    year: 2025,
    description: "GSAP-driven animations, dynamic sections, and blazing UX.",
    tags: ["Next.js", "GSAP", "Tailwind"],
    live: "#",
    repo: "#",
    featured: true,
  },
  {
    title: "Blog Platform",
    year: 2023,
    description: "MDX content, SEO, and CMS integration for content creators.",
    tags: ["Next.js", "MDX", "Prisma"],
    live: "#",
    repo: "#",
    featured: false,
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isFilterChanging, setIsFilterChanging] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const allTags = useMemo(() => {
    const t = new Set(["All"]);
    projectsData.forEach((p) => p.tags.forEach((tag) => t.add(tag)));
    return Array.from(t);
  }, []);

  const filtered = useMemo(() => {
    return activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.tags.includes(activeFilter));
  }, [activeFilter]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states for all cards
    gsap.set(cardsRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.95,
    });

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

      // Cards entrance with enhanced stagger
      gsap.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true, // Only animate once
        },
        onComplete: () => setIsLoaded(true),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []); // Only run once on mount

  // Enhanced 3D hover tilt with better sensitivity
  const onTilt = (e, index) => {
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
    setHoveredCard(null);
    e.currentTarget.style.transform = "";
  };

  const totalProjects = projectsData.length;
  const currentYear = new Date().getFullYear();
  const recentProjects = projectsData.filter(
    (p) => p.year >= currentYear - 1
  ).length;
  const featuredProjects = projectsData.filter((p) => p.featured).length;

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 md:py-32 "
    >
      {/* Enhanced background with more layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-purple-600/20 blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/20 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-pink-500/20 to-rose-500/15 blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-x-0 top-1/3 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-fuchsia-500/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        {/* Enhanced header section */}
        <div ref={headerRef} className="mx-auto max-w-4xl text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm text-white/80 backdrop-blur-xl shadow-lg">
            <Sparkles className="h-5 w-5 text-fuchsia-300 animate-pulse" />
            <span className="font-medium">Featured Projects</span>
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 animate-pulse" />
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-h2-xs sm:text-h2-sm md:text-h2-md lg:text-h2-lg lgg:text-h2-lgg xl:text-h2-xl 2xl:text-h2-2xl text-white">
            Creative{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-4 text-white/70 text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg lgg:text-p-lgg xl:text-p-xl 2xl:text-p-2xl leading-relaxed">
            A curated collection of digital experiences I&apos;ve crafted — from
            concept to deployment, each project represents innovation,
            performance, and user-centric design.
          </p>
        </div>

        {/* Enhanced stats and filters */}
        <div className="mb-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Stats cards */}
          <div className="flex gap-4">
            <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-center backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-3 text-sm text-white/70 mb-2">
                <FolderGit2 className="h-5 w-5 text-fuchsia-300" />
                <span>Total Projects</span>
              </div>
              <div className="relative text-3xl font-bold text-white">
                {totalProjects}
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-center backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-3 text-sm text-white/70 mb-2">
                <Calendar className="h-5 w-5 text-cyan-300" />
                <span>Recent</span>
              </div>
              <div className="relative text-3xl font-bold text-white">
                {recentProjects}
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-center backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-3 text-sm text-white/70 mb-2">
                <Star className="h-5 w-5 text-amber-300" />
                <span>Featured</span>
              </div>
              <div className="relative text-3xl font-bold text-white">
                {featuredProjects}
              </div>
            </div>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setIsFilterChanging(true);
                  setActiveFilter(tag);
                  // Reset filter changing state after animation
                  setTimeout(() => setIsFilterChanging(false), 300);
                }}
                className={`group relative overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeFilter === tag
                    ? "bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white shadow-lg shadow-fuchsia-500/25 scale-105"
                    : "bg-white/10 text-white/70 hover:text-white hover:bg-white/20 backdrop-blur-xl border border-white/20 hover:border-white/30"
                }`}
                aria-pressed={activeFilter === tag}
              >
                <span className="relative z-10">{tag}</span>
                {activeFilter === tag && (
                  <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-cyan-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <article
              key={`${project.title}-${activeFilter}`} // Add filter to key to force re-render
              ref={(el) => (cardsRef.current[i] = el)}
              onMouseMove={(e) => onTilt(e, i)}
              onMouseLeave={resetTilt}
              className={`group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${
                isFilterChanging
                  ? "opacity-60 scale-95"
                  : isLoaded
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                  <Star className="h-3.5 w-3.5" />
                  Featured
                </div>
              )}

              {/* Enhanced gradient banner */}
              <div className="relative h-40 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/30 via-purple-500/20 to-cyan-500/30" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-white/60 animate-ping"
                    style={{ animationDelay: "0s" }}
                  />
                  <div
                    className="absolute top-3/4 right-1/4 h-1.5 w-1.5 rounded-full bg-white/40 animate-ping"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div
                    className="absolute bottom-1/4 left-1/3 h-1 w-1 rounded-full bg-white/50 animate-ping"
                    style={{ animationDelay: "1s" }}
                  />
                </div>
              </div>

              <div className="p-6">
                {/* Project header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="font-bold text-h5-xs sm:text-h5-sm md:text-h5-md lg:text-h5-lg lgg:text-h5-lgg xl:text-h5-xl 2xl:text-h5-2xl text-white leading-tight">
                    {project.title}
                  </h3>
                  <span className="flex-shrink-0 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/30">
                    {project.year}
                  </span>
                </div>

                {/* Description */}
                <p className="text-white/70 text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg lgg:text-p-lgg xl:text-p-xl 2xl:text-p-2xl leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/20 transition-colors hover:bg-white/20"
                    >
                      <Code className="h-3 w-3 opacity-70" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-fuchsia-500/40 hover:scale-105"
                  >
                    <Eye className="h-4 w-4" />
                    <span>View Live</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>

                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/20 transition-all duration-300 hover:bg-white/20 hover:ring-white/30 hover:scale-105"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-500/10 via-purple-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </article>
          ))}
        </div>

        {/* Load more or pagination could go here */}
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/70">
              <Sparkles className="h-4 w-4" />
              No projects found for this filter
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
