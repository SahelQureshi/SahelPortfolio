"use client";
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, Layout, Server, Database, Wrench, Smartphone, Sparkles } from 'lucide-react'

const skillsData = [
  {
    title: 'Frontend',
    Icon: Layout,
    color: 'from-pink-500/20 to-fuchsia-500/20',
    ring: 'ring-pink-500/30',
    items: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3 / SCSS', level: 90 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'React / Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'Backend',
    Icon: Server,
    color: 'from-emerald-500/20 to-teal-500/20',
    ring: 'ring-emerald-500/30',
    items: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 78 },
      { name: 'REST APIs', level: 85 },
      { name: 'Authentication (JWT/OAuth)', level: 75 },
    ],
  },
  {
    title: 'Databases',
    Icon: Database,
    color: 'from-cyan-500/20 to-blue-500/20',
    ring: 'ring-cyan-500/30',
    items: [
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'Prisma / Mongoose', level: 72 },
    ],
  },
  {
    title: 'Tools & Others',
    Icon: Wrench,
    color: 'from-amber-500/20 to-orange-500/20',
    ring: 'ring-amber-500/30',
    items: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'CI/CD', level: 68 },
      { name: 'GSAP / Framer Motion', level: 70 },
      { name: 'Responsive / Mobile-First', level: 90 },
    ],
  },
]

const badgePalette = [
  'bg-pink-500/10 text-pink-300 ring-pink-500/20',
  'bg-emerald-500/10 text-emerald-300 ring-emerald-500/20',
  'bg-cyan-500/10 text-cyan-300 ring-cyan-500/20',
  'bg-amber-500/10 text-amber-300 ring-amber-500/20',
  'bg-fuchsia-500/10 text-fuchsia-300 ring-fuchsia-500/20',
]

const Skills = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const barsRef = useRef([])
  const [activeCat, setActiveCat] = useState('All')

  const categories = ['All', ...skillsData.map((s) => s.title)]
  const filtered = activeCat === 'All' ? skillsData : skillsData.filter((s) => s.title === activeCat)

  // 3D tilt helpers
  const handleTilt = (e) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    const rotateY = ((x - midX) / midX) * 6
    const rotateX = -((y - midY) / midY) * 6
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
  }
  const resetTilt = (e) => {
    e.currentTarget.style.transform = ''
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Stagger cards
      gsap.from(cardsRef.current, {
        y: 40,
        opacity: 0,
        rotateX: -6,
        transformOrigin: 'top center',
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })

      // Animate progress bars
      barsRef.current.forEach((bar) => {
        if (!bar) return
        const level = Number(bar.dataset.level || 0)
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: `${level}%`,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar.closest('[data-skill-card]'),
              start: 'top 85%',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [activeCat])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-10 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur">
            <Code2 className="h-4 w-4 text-fuchsia-300" />
            <span>Skills & Expertise</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl text-white">
            My <span className="text-white">Skills</span>
          </h2>
          <p className="mt-3 text-white/70">
            Building delightful, performant web apps across the stack with modern tooling.
          </p>
        </div>

        {/* Main two-column layout */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Left: sticky info + filters */}
          <aside className="md:col-span-4 space-y-6 md:sticky md:top-24 self-start">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold">About my stack</h3>
              <p className="mt-2 text-sm text-white/70">
                I specialize in React/Next.js, modern styling with Tailwind, and robust backends with Node & APIs.
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xl font-bold">3+</div>
                  <div className="text-xs text-white/60">Years</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xl font-bold">25+</div>
                  <div className="text-xs text-white/60">Projects</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xl font-bold">10+</div>
                  <div className="text-xs text-white/60">Clients</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveCat(c)}
                    className={`rounded-full px-3 py-1.5 text-sm ring-1 transition ${
                      activeCat === c
                        ? 'bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 text-white ring-white/20'
                        : 'bg-white/5 text-white/70 ring-white/10 hover:text-white hover:ring-white/20'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Right: skills cards grid */}
          <div className="md:col-span-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {filtered.map(({ title, Icon, items, color, ring }, i) => (
              <div
                key={title}
                ref={(el) => (cardsRef.current[i] = el)}
                data-skill-card
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                className={`group relative rounded-2xl border border-white/10 bg-gradient-to-br ${color} p-5 backdrop-blur ring-1 ${ring} transition-[transform,box-shadow] duration-300 hover:shadow-2xl hover:shadow-black/30`}
              >
                {/* Glow border */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-white/10 p-2.5 ring-1 ring-white/10">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <Code2 className="h-5 w-5 text-white/50" />
                </div>

                <ul className="mt-5 space-y-4">
                  {items.map((skill, idx) => (
                    <li key={skill.name}>
                      <div className="mb-1 flex items-center justify-between">
                        <div className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs ring-1 ${badgePalette[(i + idx) % badgePalette.length]}`}>
                          <Smartphone className="h-3.5 w-3.5 opacity-70" />
                          {skill.name}
                        </div>
                        <span className="text-xs text-white/60">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          ref={(el) => (barsRef.current[i * 10 + idx] = el)}
                          data-level={skill.level}
                          className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400"
                          style={{ width: '0%' }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills