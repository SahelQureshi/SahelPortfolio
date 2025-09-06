"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  Sparkles,
  Heart,
  ArrowRight,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Smooth scroll to projects section
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      const navbarHeight = window.innerWidth >= 768 ? 80 : 64; // md:h-20 = 80px, h-16 = 64px
      const offsetTop = element.offsetTop - navbarHeight - 20; // -20px buffer
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Social links data
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      color: 'hover:bg-gray-500/20 hover:border-gray-400/30'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: 'hover:bg-blue-500/20 hover:border-blue-400/30'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      color: 'hover:bg-sky-500/20 hover:border-sky-400/30'
    }
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sahel@example.com',
      link: 'mailto:sahel@example.com',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Your City, Country',
      link: '#',
      color: 'from-blue-500/20 to-cyan-500/20'
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states for all elements
    gsap.set(cardsRef.current, {
      opacity: 1,
      y: 0,
    });

    gsap.set(formRef.current, {
      opacity: 1,
      y: 0,
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

      // Cards stagger animation with better control
      gsap.from(cardsRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Form animation
      gsap.from(formRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
        onComplete: () => setIsLoaded(true),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 "
    >
      {/* Enhanced background with multiple layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-600/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/30 to-cyan-600/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-rose-500/20 to-orange-500/15 blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-x-0 top-1/3 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        {/* Enhanced header section */}
        <div ref={headerRef} className="mx-auto max-w-4xl text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm text-white/80 backdrop-blur-xl shadow-lg">
            <MessageSquare className="h-5 w-5 text-purple-300 animate-pulse" />
            <span className="font-medium">Get In Touch</span>
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" />
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-h2-xs sm:text-h2-sm md:text-h2-md lg:text-h2-lg lgg:text-h2-lgg xl:text-h2-xl 2xl:text-h2-2xl text-white">
          Let&apos;s <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Connect</span>
          </h2>

          <p className="mt-4 text-white/70 text-p-xs sm:text-p-sm md:text-p-md lg:text-p-lg lgg:text-p-lgg xl:text-p-xl 2xl:text-p-2xl leading-relaxed">
          Ready to bring your ideas to life? I&apos;d love to hear about your project and discuss
          how we can work together to create something amazing. Let&apos;s start a conversation!
          </p>
        </div>

        {/* Improved responsive grid layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Information - Left Side */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact cards with proper initial visibility */}
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                  style={{ opacity: 1 }}
                >
                  {/* Animated particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-white/60 animate-ping" style={{ animationDelay: '0s' }} />
                    <div className="absolute top-3/4 right-1/4 h-1.5 w-1.5 rounded-full bg-white/40 animate-ping" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute bottom-1/4 left-1/3 h-1 w-1 rounded-full bg-white/50 animate-ping" style={{ animationDelay: '1s' }} />
                  </div>

                  <a
                    href={info.link}
                    className={`flex items-center gap-4 ${info.link !== '#' ? 'hover:scale-105' : ''} transition-transform duration-300`}
                  >
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${info.color} border border-white/20`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-lg">{info.title}</h3>
                      <p className="text-white/70">{info.value}</p>
                    </div>
                    {info.link !== '#' && (
                      <ArrowRight className="h-5 w-5 text-white/40 group-hover:text-white transition-colors duration-300" />
                    )}
                  </a>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 via-pink-500/3 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              ))}

              {/* Social links */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <h3 className="font-semibold text-white text-lg mb-4 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-pink-300" />
                    Follow Me
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/social flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/20 ${social.color} transition-all duration-300 hover:scale-110`}
                      >
                        <social.icon className="h-5 w-5 text-white group-hover/social:text-white transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Availability status */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex items-center gap-4">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse"></div>
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-green-400 animate-ping opacity-40"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Available for Projects</h3>
                    <p className="text-white/60 text-sm">Currently accepting new opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-7">
              <div
                ref={formRef}
                className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-2xl"
                style={{ opacity: 1 }}
              >
                {/* Animated particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-white/60 animate-ping" style={{ animationDelay: '0s' }} />
                  <div className="absolute top-3/4 right-1/4 h-1.5 w-1.5 rounded-full bg-white/40 animate-ping" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute bottom-1/4 left-1/3 h-1 w-1 rounded-full bg-white/50 animate-ping" style={{ animationDelay: '1s' }} />
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                      <Send className="h-6 w-6 text-purple-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                      <p className="text-white/60">I&apos;d love to hear from you</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name field */}
                      <div className="group">
                        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all duration-300 hover:bg-white/15"
                          placeholder="Your full name"
                        />
                      </div>

                      {/* Email field */}
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all duration-300 hover:bg-white/15"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Message field */}
                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all duration-300 hover:bg-white/15 resize-none"
                        placeholder="Tell me about your project or just say hello..."
                      />
                    </div>

                    {/* Submit button */}
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-white/60">
                        * Required fields
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : submitStatus === 'success' ? (
                          <>
                            <CheckCircle className="h-5 w-5" />
                            <span>Sent!</span>
                          </>
                        ) : submitStatus === 'error' ? (
                          <>
                            <AlertCircle className="h-5 w-5" />
                            <span>Failed</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>

                  {/* Success/Error messages */}
                  {submitStatus && (
                    <div className={`mt-6 p-4 rounded-xl border ${
                      submitStatus === 'success'
                        ? 'bg-green-500/10 border-green-400/30 text-green-300'
                        : 'bg-red-500/10 border-red-400/30 text-red-300'
                    }`}>
                      <div className="flex items-center gap-2">
                        {submitStatus === 'success' ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <AlertCircle className="h-5 w-5" />
                        )}
                        <span className="font-medium">
                          {submitStatus === 'success'
                            ? 'Message sent successfully! I\'ll get back to you soon.'
                            : 'Failed to send message. Please try again or contact me directly.'
                          }
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 via-pink-500/3 to-rose-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 mb-4">
                <Sparkles className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-white">Let&apos;s build something amazing</span>
              </div>

              <p className="text-white/80 text-lg mb-6 leading-relaxed max-w-2xl mx-auto">
                Whether you have a project in mind, need consultation, or just want to connect,
                I&apos;m always open to discussing new opportunities and creative collaborations.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:sahel@example.com"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email Me</span>
                </a>
                <span className="text-white/40 hidden sm:block">or</span>
                <button
                  onClick={scrollToProjects}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
                >
                  <span>View My Work</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;