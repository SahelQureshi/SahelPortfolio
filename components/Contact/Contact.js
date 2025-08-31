"use client";

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const blob1Ref = useRef(null)
  const blob2Ref = useRef(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, { opacity: 0, x: -40, duration: 0.8, ease: 'power3.out' })
      gsap.from(rightRef.current, { opacity: 0, x: 40, duration: 0.8, delay: 0.1, ease: 'power3.out' })
      // floating blobs
      gsap.to(blob1Ref.current, { y: 18, x: 8, scale: 1.03, rotate: 5, duration: 6, yoyo: true, repeat: -1, ease: 'sine.inOut' })
      gsap.to(blob2Ref.current, { y: -16, x: -10, scale: 1.04, rotate: -6, duration: 7, yoyo: true, repeat: -1, ease: 'sine.inOut' })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    // Fake async submit; replace with your API/email service
    await new Promise((r) => setTimeout(r, 900))
    setSubmitting(false)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    e.currentTarget.reset()
  }

  return (
    <section ref={sectionRef} id="contact" className="relative mx-auto max-w-6xl px-6 py-20">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div ref={blob1Ref} className="absolute -top-16 -left-10 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/30 blur-3xl" />
        <div ref={blob2Ref} className="absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-gradient-to-tr from-violet-500/25 to-sky-400/25 blur-3xl" />
      </div>

      {/* header */}
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> Let's build something
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Contact</h2>
        <p className="mt-2 text-white/70">Have an idea or project in mind? Drop a line and I’ll get back to you.</p>
      </div>

      {/* grid */}
      <div className="mt-12 grid items-start gap-8 md:grid-cols-2">
        {/* left: info card */}
        <div ref={leftRef} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-xl font-semibold">Let’s talk</h3>
          <p className="mt-2 text-sm text-white/70">
            I’m available for freelance work, collaborations, and full-time roles. Tell me about your goals and timeline.
          </p>

          <div className="mt-6 space-y-4">
            <a href="mailto:hello@sahel.dev" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-white/20 hover:bg-white/10">
              <Mail className="h-5 w-5 text-fuchsia-300" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-white/70">hello@sahel.dev</p>
              </div>
            </a>
            <a href="tel:+123456789" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-white/20 hover:bg-white/10">
              <Phone className="h-5 w-5 text-cyan-300" />
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm text-white/70">+1 (234) 567-89</p>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
              <MapPin className="h-5 w-5 text-violet-300" />
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-white/70">Remote • GMT+5:30</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <a href="https://github.com/" target="_blank" className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:border-white/20 hover:bg-white/10" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:border-white/20 hover:bg-white/10" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/" target="_blank" className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:border-white/20 hover:bg-white/10" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        </div>

        {/* right: form card */}
        <form ref={rightRef} onSubmit={onSubmit} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs text-white/70">Name</label>
              <input required type="text" name="name" className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/20" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs text-white/70">Email</label>
              <input required type="email" name="email" className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/20" placeholder="name@email.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-white/70">Subject</label>
              <input required type="text" name="subject" className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/20" placeholder="Project or topic" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-white/70">Message</label>
              <textarea required name="message" rows={5} className="mt-1 w-full resize-none rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/20" placeholder="Tell me about your project, goals, and timeline" />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <div className="text-xs text-white/60">I usually reply within 24–48 hours.</div>
            <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-lg bg-white/80 px-4 py-2 text-sm font-medium text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60">
              <Send className={`h-4 w-4 ${submitting ? 'animate-pulse' : ''}`} />
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {submitted && (
            <div className="mt-4 rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-200">
              Thanks! Your message has been sent.
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        </form>
      </div>
    </section>
  )
}

export default Contact