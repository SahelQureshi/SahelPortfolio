"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { Sparkles, Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const reviewsData = [
  {
    name: 'Aisha Khan',
    role: 'Product Manager, FinTech Co.',
    rating: 5,
    quote:
      'Sahel delivered a robust web app ahead of schedule. The UI feels premium and performance is excellent.',
    initials: 'AK',
    avatar: '/avatar1.jpg', // add avatar image path
  },
  {
    name: 'Rahul Mehta',
    role: 'Founder, StartupX',
    rating: 5,
    quote:
      'Great communication and attention to detail. Our conversion rate improved noticeably after the revamp.',
    initials: 'RM',
    avatar: '/avatar2.jpg', // add avatar image path
  },
  {
    name: 'Emily Chen',
    role: 'Design Lead, Studio 9',
    rating: 4,
    quote:
      'Clean, maintainable code and smooth animations. Handoffs were easy and the result matched the designs.',
    initials: 'EC',
    avatar: '/avatar3.jpg', // add avatar image path
  },
  {
    name: 'Omar Farooq',
    role: 'CTO, EduSphere',
    rating: 5,
    quote:
      'Our dashboard loads faster and users love the new features. Highly recommend working with Sahel.',
    initials: 'OF',
    avatar: '/avatar4.jpg', // add avatar image path
  },
]

const Reviews = () => {
  const sectionRef = useRef(null)
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const [perView, setPerView] = useState(3)
  const [current, setCurrent] = useState(0)

  // responsive items per view
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1)
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])

  // build slides with clones at both ends for infinite loop
  const extendedSlides = useMemo(() => {
    const head = reviewsData.slice(0, perView)
    const tail = reviewsData.slice(-perView)
    return [...tail, ...reviewsData, ...head]
  }, [perView])

  // set start index after perView known
  useEffect(() => {
    setCurrent(perView)
  }, [perView])

  const slideWidthPercent = 100 / perView

  // apply translate on index change
  useEffect(() => {
    if (!trackRef.current) return
    trackRef.current.style.transition = 'transform 600ms cubic-bezier(0.22,1,0.36,1)'
    trackRef.current.style.transform = `translateX(-${current * slideWidthPercent}%)`
  }, [current, perView])

  const handleTransitionEnd = () => {
    const total = reviewsData.length
    // jumped past end
    if (current >= total + perView) {
      if (!trackRef.current) return
      trackRef.current.style.transition = 'none'
      const newIndex = perView
      trackRef.current.style.transform = `translateX(-${newIndex * slideWidthPercent}%)`
      // force reflow then restore transition on next tick
      requestAnimationFrame(() => {
        trackRef.current && (trackRef.current.style.transition = 'transform 600ms cubic-bezier(0.22,1,0.36,1)')
        setCurrent(newIndex)
      })
    }
    // jumped past start
    if (current < perView) {
      if (!trackRef.current) return
      trackRef.current.style.transition = 'none'
      const newIndex = total + perView - 1
      trackRef.current.style.transform = `translateX(-${newIndex * slideWidthPercent}%)`
      requestAnimationFrame(() => {
        trackRef.current && (trackRef.current.style.transition = 'transform 600ms cubic-bezier(0.22,1,0.36,1)')
        setCurrent(newIndex)
      })
    }
  }

  const next = () => setCurrent((c) => c + 1)
  const prev = () => setCurrent((c) => c - 1)

  // autoplay with pause on hover
  useEffect(() => {
    let id = setInterval(() => setCurrent((c) => c + 1), 3000)
    const vp = viewportRef.current
    const pause = () => { clearInterval(id) }
    const resume = () => { id = setInterval(() => setCurrent((c) => c + 1), 3000) }
    vp?.addEventListener('mouseenter', pause)
    vp?.addEventListener('mouseleave', resume)
    return () => {
      clearInterval(id)
      vp?.removeEventListener('mouseenter', pause)
      vp?.removeEventListener('mouseleave', resume)
    }
  }, [perView])

  const ReviewCard = ({ r }) => (
    <article className="group relative h-full w-[320px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* quote mark */}
      <div className="absolute -right-2 -top-2 opacity-20">
        <Quote className="h-16 w-16 text-white" />
      </div>
      {/* header */}
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 shrink-0">
          <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/20 bg-white/5">
            {r.avatar ? (
              <Image
                src={r.avatar}
                alt={`${r.name} avatar`}
                fill
                sizes="48px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500/30 to-cyan-500/30 text-white">
                <span className="text-sm font-semibold">{r.initials}</span>
              </div>
            )}
          </div>
          <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold leading-tight">{r.name}</h3>
          <p className="text-xs text-white/60">{r.role}</p>
        </div>
      </div>
      {/* rating */}
      <div className="mt-3 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star key={idx} className={`h-4 w-4 ${idx < r.rating ? 'text-yellow-300' : 'text-white/20'}`} fill={idx < r.rating ? 'currentColor' : 'none'} />
        ))}
      </div>
      {/* content */}
      <p className="mt-3 line-clamp-5 text-sm leading-relaxed text-white/80">“{r.quote}”</p>
      <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />
    </article>
  )

  return (
    <section ref={sectionRef} id="reviews" className="relative py-20 md:py-28 overflow-hidden">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-10 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur">
            <Sparkles className="h-4 w-4 text-fuchsia-300" />
            <span>What clients say</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl text-white">
            Client <span className="text-white">Reviews</span>
          </h2>
          <p className="mt-3 text-white/70">Stories from partners about building together.</p>
        </div>

        {/* Owl-style carousel */}
        <div className="mt-12 relative">
          <div ref={viewportRef} className="overflow-hidden">
            <div
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              className="flex"
              style={{ transform: `translateX(-${current * slideWidthPercent}%)` }}
            >
              {extendedSlides.map((r, idx) => (
                <div key={`${r.name}-${idx}`} className="px-2" style={{ flex: `0 0 ${100 / perView}%` }}>
                  <ReviewCard r={r} />
                </div>
              ))}
            </div>
          </div>

          {/* nav arrows */}
          <button onClick={prev} aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 ring-1 ring-white/10 hover:ring-white/20">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 ring-1 ring-white/10 hover:ring-white/20">
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* dots */}
          <div className="mt-6 flex justify-center gap-2">
            {reviewsData.map((_, i) => {
              const active = ((current - perView + reviewsData.length) % reviewsData.length) === i
              return (
                <button
                  key={i}
                  onClick={() => setCurrent(perView + i)}
                  className={`h-2.5 w-2.5 rounded-full transition ${active ? 'bg-white/70' : 'bg-white/20 hover:bg-white/40'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-white/70">Want more references? I’m happy to connect you directly.</p>
        </div>
      </div>
    </section>
  )
}

export default Reviews