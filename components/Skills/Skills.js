"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
} from "lucide-react";

const skillsData = [
  {
    title: "Frontend Development",
    Icon: Layout,
    color: "from-pink-500/20 to-fuchsia-500/20",
    ring: "ring-pink-500/30",
    gradient: "from-pink-500 to-fuchsia-500",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3 / SCSS", level: 90 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "React / Next.js", level: 88 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend Development",
    Icon: Server,
    color: "from-emerald-500/20 to-teal-500/20",
    ring: "ring-emerald-500/30",
    gradient: "from-emerald-500 to-teal-500",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 78 },
      { name: "REST APIs", level: 85 },
      { name: "Authentication (JWT/OAuth)", level: 75 },
    ],
  },
  {
    title: "Databases",
    Icon: Database,
    color: "from-cyan-500/20 to-blue-500/20",
    ring: "ring-cyan-500/30",
    gradient: "from-cyan-500 to-blue-500",
    items: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 70 },
      { name: "Prisma / Mongoose", level: 72 },
    ],
  },
  {
    title: "Tools & Technologies",
    Icon: Wrench,
    color: "from-amber-500/20 to-orange-500/20",
    ring: "ring-amber-500/30",
    gradient: "from-amber-500 to-orange-500",
    items: [
      { name: "Git & GitHub", level: 88 },
      { name: "CI/CD", level: 68 },
      { name: "GSAP / Framer Motion", level: 70 },
      { name: "Responsive / Mobile-First", level: 90 },
    ],
  },
];

const badgePalette = [
  "bg-pink-500/10 text-pink-300 ring-pink-500/20",
  "bg-emerald-500/10 text-emerald-300 ring-emerald-500/20",
  "bg-cyan-500/10 text-cyan-300 ring-cyan-500/20",
  "bg-amber-500/10 text-amber-300 ring-amber-500/20",
  "bg-fuchsia-500/10 text-fuchsia-300 ring-fuchsia-500/20",
];

const Skills = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const barsRef = useRef([]);
  const headerRef = useRef(null);
  const [activeCat, setActiveCat] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isFilterChanging, setIsFilterChanging] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const categories = ["All", ...skillsData.map((s) => s.title)];
  const filtered =
    activeCat === "All"
      ? skillsData
      : skillsData.filter((s) => s.title === activeCat);

  // Enhanced 3D tilt with better sensitivity
  const handleTilt = (e, index) => {
    setHoveredCard(index);
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 8;
    const rotateX = -((y - midY) / midY) * 8;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
  };

  const resetTilt = (e) => {
    setHoveredCard(null);
    e.currentTarget.style.transform = "";
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states for all elements
    gsap.set(cardsRef.current, {
      opacity: 0,
      y: 50,
      rotateX: -10,
      transformOrigin: "top center",
    });

    gsap.set(barsRef.current, {
      width: "0%",
    });

    const ctx = gsap.context(() => {
      // Enhanced header animation
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

      // Enhanced cards stagger with better effects
      gsap.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        onComplete: () => {
          setIsLoaded(true);
          // Animate progress bars after cards are visible
          animateProgressBars();
        },
      });
    }, sectionRef);

    // Function to animate progress bars
    const animateProgressBars = () => {
      barsRef.current.forEach((bar, index) => {
        if (!bar) return;
        const level = Number(bar.dataset.level || 0);

        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${level}%`,
            duration: 1.2,
            ease: "power3.out",
            delay: index * 0.1, // Stagger the animations
          }
        );
      });
    };

    return () => ctx.revert();
  }, []); // Only run once on mount

  // Function to re-animate progress bars when filter changes
  const reAnimateProgressBars = () => {
    barsRef.current.forEach((bar, index) => {
      if (!bar) return;
      const level = Number(bar.dataset.level || 0);

      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${level}%`,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.05,
        }
      );
    });
  };

  // Handle filter changes with progress bar re-animation
  const handleFilterChange = (category) => {
    setIsFilterChanging(true);
    setActiveCat(category);

    // Re-animate progress bars after filter change
    setTimeout(() => {
      setIsFilterChanging(false);
      if (isLoaded) {
        setTimeout(() => reAnimateProgressBars(), 100);
      }
    }, 300);
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Enhanced background with multiple layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-purple-600/20 blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/20 blur-3xl animate-pulse"
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
            <Zap className="h-5 w-5 text-fuchsia-300 animate-pulse" />
            <span className="font-medium">Technical Expertise</span>
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 animate-pulse" />
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-h2-xs sm:text-h2-sm md:text-h2-md lg:text-h2-lg lgg:text-h2-lgg xl:text-h2-xl 2xl:text-h2-2xl text-white">
            My{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mt-4 text-white/70 text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg lgg:text-p-lgg xl:text-p-xl 2xl:text-p-2xl leading-relaxed">
            Crafting exceptional digital experiences with cutting-edge
            technologies and best practices. From concept to deployment, I bring
            ideas to life with precision and performance.
          </p>
        </div>

        {/* Enhanced main layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left sidebar - Enhanced */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 self-start">
            {/* About section with enhanced design */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 p-3">
                    <Trophy className="h-6 w-6 text-fuchsia-300" />
                  </div>
                  <h3 className="font-bold text-h5-xs sm:text-h5-sm md:text-h5-md lg:text-h5-lg lgg:text-h5-lgg xl:text-h5-xl 2xl:text-h5-2xl text-white">
                    Technical Stack
                  </h3>
                </div>

                <p className="text-white/70 text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg lgg:text-p-lgg xl:text-p-xl 2xl:text-p-2xl leading-relaxed mb-6">
                  Specializing in modern web technologies with a focus on
                  React/Next.js ecosystems, scalable backend solutions, and
                  cloud-native architectures.
                </p>

                {/* Enhanced stats grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="group/stat text-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="text-3xl font-bold text-white mb-1">3+</div>
                    <div className="text-sm text-white/60 font-medium">
                      Years
                    </div>
                    <div className="text-xs text-white/40">Experience</div>
                  </div>
                  <div className="group/stat text-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="text-3xl font-bold text-white mb-1">
                      25+
                    </div>
                    <div className="text-sm text-white/60 font-medium">
                      Projects
                    </div>
                    <div className="text-xs text-white/40">Completed</div>
                  </div>
                  <div className="group/stat text-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="text-3xl font-bold text-white mb-1">
                      10+
                    </div>
                    <div className="text-sm text-white/60 font-medium">
                      Clients
                    </div>
                    <div className="text-xs text-white/40">Satisfied</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced filter section */}
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-5 w-5 text-cyan-300" />
                <h4 className="font-semibold text-white">Filter by Category</h4>
              </div>

              <div className="flex flex-wrap gap-3">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => handleFilterChange(c)}
                    className={`group relative overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                      activeCat === c
                        ? "bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white shadow-lg shadow-fuchsia-500/25 scale-105"
                        : "bg-white/10 text-white/70 hover:text-white hover:bg-white/20 backdrop-blur-xl border border-white/20 hover:border-white/30"
                    }`}
                    aria-pressed={activeCat === c}
                  >
                    <span className="relative z-10">{c}</span>
                    {activeCat === c && (
                      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-cyan-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Right content - Enhanced skills grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {filtered.map(
                ({ title, Icon, items, color, ring, gradient }, i) => (
                  <article
                    key={`${title}-${activeCat}`}
                    ref={(el) => (cardsRef.current[i] = el)}
                    data-skill-card
                    onMouseMove={(e) => handleTilt(e, i)}
                    onMouseLeave={resetTilt}
                    className={`group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br ${color} p-8 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${
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
                    {/* Enhanced glow border */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />

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

                    <div className="relative">
                      {/* Enhanced header */}
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-4">
                          <div className="rounded-2xl bg-gradient-to-br from-white/15 to-white/5 p-3.5 ring-1 ring-white/20 group-hover:ring-white/30 transition-all duration-300">
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-h5-xs sm:text-h5-sm md:text-h5-md lg:text-h5-lg lgg:text-h5-lgg xl:text-h5-xl 2xl:text-h5-2xl text-white leading-tight">
                              {title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="h-1 w-1 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400" />
                              <span className="text-xs text-white/60 font-medium">
                                {items.length} skills
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-5 w-5 text-white/40 group-hover:text-yellow-300 transition-colors duration-300" />
                          <ChevronRight className="h-5 w-5 text-white/40 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Enhanced skills list */}
                      <ul className="space-y-5">
                        {items.map((skill, idx) => (
                          <li key={skill.name} className="group/skill">
                            <div className="flex items-center justify-between mb-2">
                              <div
                                className={`inline-flex items-center gap-2.5 rounded-full px-3 py-1.5 text-sm font-medium ring-1 transition-all duration-300 ${
                                  badgePalette[(i + idx) % badgePalette.length]
                                } group-hover/skill:scale-105`}
                              >
                                <div className="h-2 w-2 rounded-full bg-current opacity-70 animate-pulse" />
                                {skill.name}
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-white">
                                  {skill.level}%
                                </span>
                                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 animate-pulse" />
                              </div>
                            </div>

                            {/* Enhanced progress bar */}
                            <div className="relative h-3 w-full overflow-hidden rounded-full bg-white/10 ring-1 ring-white/5">
                              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10" />
                              <div
                                ref={(el) =>
                                  (barsRef.current[i * 10 + idx] = el)
                                }
                                data-level={skill.level}
                                className={`h-full rounded-full bg-gradient-to-r ${gradient} shadow-lg`}
                                style={{ width: "0%" }}
                              />
                              {/* Animated shine effect */}
                              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/skill:translate-x-full transition-transform duration-1000" />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-500/5 via-purple-500/3 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </article>
                )
              )}
            </div>

            {/* No results state */}
            {filtered.length === 0 && (
              <div className="text-center py-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/70">
                  <Sparkles className="h-4 w-4" />
                  No skills found for this category
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
