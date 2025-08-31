"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sparkles, FolderGit2, Github, ExternalLink, Calendar, Code } from 'lucide-react'

// Demo data — replace with your real projects later
const projectsData = [
  {
    title: 'E‑Commerce UI Kit',
    year: 2024,
    description: 'High-performance storefront with Next.js, server components, and Tailwind.',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Realtime Chat App',
    year: 2024,
    description: 'Socket-powered chat with auth, file uploads, and message reactions.',
    tags: ['React', 'Node', 'Socket.io'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Portfolio v2',
    year: 2025,
    description: 'GSAP-driven animations, dynamic sections, and blazing UX.',
    tags: ['Next.js', 'GSAP', 'Tailwind'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Blog Platform',
    year: 2023,
    description: 'MDX content, SEO, and CMS integration for content creators.',
    tags: ['Next.js', 'MDX', 'Prisma'],
    live: '#',
    repo: '#',
  },
]

const Projects = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const [activeFilter, setActiveFilter] = useState('All')

  const allTags = useMemo(() => {
    const t = new Set(['All'])
    projectsData.forEach((p) => p.tags.forEach((tag) => t.add(tag)))
    return Array.from(t)
  }, [])

  const filtered = useMemo(() => {
    return activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.tags.includes(activeFilter))
  }, [activeFilter])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // cards entrance
      gsap.from(cardsRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [activeFilter])

  // 3D hover tilt
  const onTilt = (e) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    const rx = -((y - r.height / 2) / (r.height / 2)) * 5
    const ry = ((x - r.width / 2) / (r.width / 2)) * 5
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`
  }
  const resetTilt = (e) => (e.currentTarget.style.transform = '')

  const totalProjects = projectsData.length
  const currentYear = new Date().getFullYear()
  const recentProjects = projectsData.filter((p) => p.year >= currentYear - 1).length

  return (
    <section ref={sectionRef} id="projects" className="relative py-20 md:py-28 overflow-hidden">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-10 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur">
            <Sparkles className="h-4 w-4 text-fuchsia-300" />
            <span>Selected Work</span>
          </div>
          <h2 className="mt-4 font-bold tracking-tight text-h2-xs sm:text-h2-sm md:text-h2-md lg:text-h2-lg lgg:text-h2-lgg xl:text-h2-xl 2xl:text-h2-2xl text-white">
            My <span className="text-white">Projects</span>
          </h2>
          <p className="mt-3 text-white/70 text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg lgg:text-p-lgg xl:text-p-xl 2xl:text-p-2xl">
            A snapshot of products I’ve built — performant, accessible, and visually polished.
          </p>
        </div>

        {/* counters + filters */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
              <div className="flex items-center gap-2 text-sm text-white/70"><FolderGit2 className="h-4 w-4" /> Total</div>
              <div className="text-2xl font-semibold">{totalProjects}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
              <div className="flex items-center gap-2 text-sm text-white/70"><Calendar className="h-4 w-4" /> Recent</div>
              <div className="text-2xl font-semibold">{recentProjects}</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`rounded-full px-3 py-1.5 text-sm ring-1 transition ${
                  activeFilter === tag
                    ? 'bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 text-white ring-white/20'
                    : 'bg-white/5 text-white/70 ring-white/10 hover:text-white hover:ring-white/20'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* projects grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <article
              key={p.title}
              ref={(el) => (cardsRef.current[i] = el)}
              onMouseMove={onTilt}
              onMouseLeave={resetTilt}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-[transform,box-shadow] duration-300 hover:shadow-2xl"
            >
              {/* decorative gradient banner */}
              <div className="relative h-36 w-full overflow-hidden rounded-xl bg-gradient-to-br from-fuchsia-500/20 via-purple-500/10 to-cyan-500/20">
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.2),transparent_45%)]" />
              </div>

              <div className="mt-4 flex items-start justify-between gap-2">
                <h3 className="font-semibold text-h5-xs sm:text-h5-sm md:text-h5-md lg:text-h5-lg lgg:text-h5-lgg xl:text-h5-xl 2xl:text-h5-2xl">{p.title}</h3>
                <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-white/70 ring-1 ring-white/10">{p.year}</span>
              </div>
              <p className="mt-2 text-white/70 text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg lgg:text-p-lgg xl:text-p-xl 2xl:text-p-2xl">{p.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-2 py-1 text-xs text-white/70 ring-1 ring-white/10 inline-flex items-center gap-1">
                    <Code className="h-3.5 w-3.5 opacity-70" /> {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3">
                <a href={p.live} target="_blank" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-sm ring-1 ring-white/10 hover:ring-white/20">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a href={p.repo} target="_blank" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-sm ring-1 ring-white/10 hover:ring-white/20">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects