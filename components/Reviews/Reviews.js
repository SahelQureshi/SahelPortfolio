"use client";

import React, { useState, useEffect, useRef } from "react";
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
  },
  {
    name: "Emily Chen",
    role: "Design Lead, Studio 9",
    rating: 4,
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
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  // Smooth scroll to contact section
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const navbarHeight = window.innerWidth >= 768 ? 80 : 64; // md:h-20 = 80px, h-16 = 64px
      const offsetTop = element.offsetTop - navbarHeight - 20; // -20px buffer
      
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
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToTestimonial = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoveredCard) {
        nextTestimonial();
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [hoveredCard, nextTestimonial]);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="relative py-24 md:py-32 "
      onMouseEnter={() => setHoveredCard(true)}
      onMouseLeave={() => setHoveredCard(false)}
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
        <div className="mx-auto max-w-4xl text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm text-white/80 backdrop-blur-xl shadow-lg">
            <MessageSquare className="h-5 w-5 text-fuchsia-300 animate-pulse" />
            <span className="font-medium">Client Testimonials</span>
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 animate-pulse" />
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-h2-xs sm:text-h2-sm md:text-h2-md lg:text-h2-lg lgg:text-h2-lgg xl:text-h2-xl 2xl:text-h2-2xl text-white">
            What{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="mt-4 text-white/70 text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg lgg:text-p-lgg xl:text-p-xl 2xl:text-p-2xl leading-relaxed">
            Real stories from partners who trusted me to bring their digital
            visions to life. Each project represents a unique challenge and a
            successful collaboration.
          </p>
        </div>

        {/* Enhanced testimonial layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Enhanced Details */}
            <div className="order-2 lg:order-1 space-y-8">
              {/* Enhanced reviewer info */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex items-center gap-6">
                  <div className="relative">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-2 ring-white/20 bg-white/5">
                      {currentTestimonial.avatar ? (
                        <Image
                          src={currentTestimonial.avatar}
                          alt={`${currentTestimonial.name} avatar`}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500/30 to-cyan-500/30 text-white">
                          <span className="text-2xl font-bold">
                            {currentTestimonial.initials}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-fuchsia-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-2xl text-white mb-1">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-white/70 text-lg mb-2">
                      {currentTestimonial.role}
                    </p>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-amber-400" />
                      <span className="text-sm text-amber-300 font-medium">
                        {currentTestimonial.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-6 w-6 transition-all duration-300 ${
                        idx < currentTestimonial.rating
                          ? "text-yellow-300 scale-110"
                          : "text-white/20"
                      }`}
                      fill={
                        idx < currentTestimonial.rating
                          ? "currentColor"
                          : "none"
                      }
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  <span className="text-white font-semibold">
                    {currentTestimonial.rating}.0
                  </span>
                  <span className="text-white/60">/ 5.0</span>
                </div>
              </div>

              {/* Enhanced project details */}
              <div className="grid grid-cols-1 gap-4">
                <div className="group flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-fuchsia-500/20">
                      <Trophy className="h-4 w-4 text-fuchsia-300" />
                    </div>
                    <span className="text-white/60 font-medium">Company</span>
                  </div>
                  <span className="text-white font-semibold">
                    {currentTestimonial.company}
                  </span>
                </div>

                <div className="group flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-cyan-500/20">
                      <Sparkles className="h-4 w-4 text-cyan-300" />
                    </div>
                    <span className="text-white/60 font-medium">Project</span>
                  </div>
                  <span className="text-white font-semibold">
                    {currentTestimonial.project}
                  </span>
                </div>

                <div className="group flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-500/20">
                      <Users className="h-4 w-4 text-amber-300" />
                    </div>
                    <span className="text-white/60 font-medium">Duration</span>
                  </div>
                  <span className="text-white font-semibold">
                    {currentTestimonial.duration}
                  </span>
                </div>
              </div>

              {/* Enhanced social links */}
              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg flex items-center gap-2">
                  <Heart className="h-5 w-5 text-pink-400" />
                  Connect
                </h4>
                <div className="flex gap-3">
                  {currentTestimonial.socialLinks.linkedin && (
                    <a
                      href={currentTestimonial.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-blue-600/20 border border-white/20 hover:border-blue-400/30 transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="h-5 w-5 text-white group-hover:text-blue-300 transition-colors" />
                    </a>
                  )}
                  {currentTestimonial.socialLinks.github && (
                    <a
                      href={currentTestimonial.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 hover:bg-gradient-to-r hover:from-gray-500/20 hover:to-gray-600/20 border border-white/20 hover:border-gray-400/30 transition-all duration-300 hover:scale-110"
                    >
                      <Github className="h-5 w-5 text-white group-hover:text-gray-300 transition-colors" />
                    </a>
                  )}
                  {currentTestimonial.socialLinks.email && (
                    <a
                      href={`mailto:${currentTestimonial.socialLinks.email}`}
                      className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 hover:bg-gradient-to-r hover:from-green-500/20 hover:to-green-600/20 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-110"
                    >
                      <Mail className="h-5 w-5 text-white group-hover:text-green-300 transition-colors" />
                    </a>
                  )}
                </div>
              </div>

              {/* Enhanced navigation */}
              <div className="flex items-center justify-between pt-6">
                <button
                  onClick={prevTestimonial}
                  disabled={isAnimating}
                  className="group flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 hover:bg-gradient-to-r hover:from-fuchsia-500/20 hover:to-purple-500/20 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-6 w-6 text-white group-hover:text-fuchsia-300 transition-colors" />
                </button>

                <div className="flex items-center gap-3">
                  {testimonialsData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToTestimonial(idx)}
                      disabled={isAnimating}
                      className={`relative h-3 w-3 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? "bg-gradient-to-r from-fuchsia-400 to-cyan-400 scale-125 shadow-lg"
                          : "bg-white/30 hover:bg-white/50 hover:scale-110"
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {idx === currentIndex && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 animate-ping opacity-40" />
                      )}
                    </button>
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  disabled={isAnimating}
                  className="group flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-6 w-6 text-white group-hover:text-cyan-300 transition-colors" />
                </button>
              </div>
            </div>

            {/* Right Side - Enhanced Quote Card */}
            <div className="order-1 lg:order-2">
              <div
                ref={cardRef}
                className={`relative group transform transition-all duration-500 ${
                  isAnimating ? "scale-95 opacity-80" : "scale-100 opacity-100"
                }`}
              >
                {/* Enhanced glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-fuchsia-500/20 via-purple-500/15 to-cyan-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-1000" />

                <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 lg:p-10 shadow-2xl">
                  {/* Animated particles */}
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

                  {/* Enhanced quote mark */}
                  <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <Quote className="h-24 w-24 text-white" />
                  </div>

                  {/* Quote content */}
                  <div className="space-y-8 relative">
                    <div className="relative">
                      <p className="text-xl lg:text-2xl leading-relaxed text-white/90 font-medium italic">
                        &ldquo;{currentTestimonial.quote}&rdquo;
                      </p>
                      {/* Text highlight effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                    </div>

                    {/* Enhanced decorative line */}
                    <div className="relative">
                      <div className="w-20 h-1.5 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 rounded-full shadow-lg" />
                      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 rounded-full blur-sm opacity-50" />
                    </div>

                    {/* Enhanced author attribution */}
                    <div className="space-y-3">
                      <h4 className="text-white font-bold text-xl">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-white/70 text-lg">
                        {currentTestimonial.role}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 animate-pulse" />
                        <span className="text-sm text-white/60 font-medium">
                          Testimonial {currentIndex + 1} of {totalTestimonials}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-500/5 via-purple-500/3 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced call to action */}
        <div className="mx-auto mt-20 max-w-3xl text-center">
          <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-purple-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 px-4 py-2 mb-4">
                <Sparkles className="h-4 w-4 text-fuchsia-300" />
                <span className="text-sm font-medium text-white">
                  Ready to work together?
                </span>
              </div>

              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                Want more references or have a project in mind? I&apos;m always
                excited to connect and discuss how we can bring your ideas to
                life.
              </p>

              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={scrollToContact}
                  className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg shadow-fuchsia-500/25 hover:shadow-xl hover:shadow-fuchsia-500/40 transition-all duration-300 hover:scale-105"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Let&apos;s Talk</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
