"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
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
  AlertCircle,
  Zap,
  Clock,
  Calendar,
  Users,
} from "lucide-react";
import { availabilityStats, contactInfo, socialLinks } from "@/config/mainConfig";

const Contact = () => {
  const sectionRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(1024);
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Animation controls
  const controls = useAnimation();
  const statsControls = useAnimation();
  const formControls = useAnimation();
  const ctaControls = useAnimation();
  const ref = useRef(null);
  
  // This ensures animation ONLY happens ONCE when first viewed
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
    }
  }, []);

  // Trigger animation ONLY ONCE when component first comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      statsControls.start("visible");
      formControls.start("visible");
      ctaControls.start("visible");
    }
  }, [isInView, controls, statsControls, formControls, ctaControls]);

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

  const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '';

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

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.3 } },
  };

   

  

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', WEB3FORMS_ACCESS_KEY);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('subject', `New Contact Form Submission from ${formData.name}`);
      formDataToSend.append('from_name', 'Portfolio Contact Form');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      const navbarHeight = window.innerWidth >= 768 ? 80 : 64;
      const offsetTop = element.offsetTop - navbarHeight - 20;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-16 md:py-24"
    >
      {/* Enhanced animated background matching other components */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className={`absolute -top-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-fuchsia-500/40 to-purple-500/20 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '6s' }} />
        <div className={`absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/40 to-blue-500/20 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '8s', animationDelay: '1s' }} />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-pink-500/10 to-purple-500/5 blur-3xl ${!disableAnimations ? 'animate-pulse' : ''}`} style={{ animationDuration: '10s', animationDelay: '2s' }} />
        
        {/* Floating particles */}
        <div className={`absolute top-20 left-[10%] w-2 h-2 rounded-full bg-fuchsia-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '4s' }} />
        <div className={`absolute bottom-32 right-[15%] w-3 h-3 rounded-full bg-cyan-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className={`absolute top-1/3 left-[80%] w-1.5 h-1.5 rounded-full bg-purple-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        <div className={`absolute bottom-1/4 left-[20%] w-2.5 h-2.5 rounded-full bg-pink-400 ${!disableAnimations ? 'animate-float' : ''}`} style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced header section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mx-auto max-w-4xl text-center mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 text-sm text-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <MessageSquare className={`h-5 w-5 text-fuchsia-300 ${!disableAnimations ? 'animate-pulse' : ''}`} />
            <span className="font-medium bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">Get In Touch</span>
            <div className={`h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 ${!disableAnimations ? 'animate-pulse' : ''}`} />
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="mt-8 font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight"
          >
            Let's
            <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mt-2">
              Connect
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Ready to bring your ideas to life? I'd love to hear about your project and discuss
            how we can work together to create something amazing.
          </motion.p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div 
          variants={statsContainerVariants}
          initial="hidden"
          animate={statsControls}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {availabilityStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statItemVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center transition-all duration-500 hover:scale-105 hover:border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <stat.icon className={`h-8 w-8 text-${stat.color}-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
              <div className={`text-3xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-300 bg-clip-text text-transparent mb-1`}>
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main contact layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Information - Left Side */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact cards */}
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={controls}
                  custom={index}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${info.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                  <a
                    href={info.link}
                    className={`flex items-center gap-4 ${info.link !== '#' ? 'hover:scale-105' : ''} transition-transform duration-300 relative z-10`}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${info.color} border border-white/20`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-lg">{info.title}</h3>
                      <p className="text-white/70 text-sm">{info.value}</p>
                    </div>
                    {info.link !== '#' && (
                      <ArrowRight className="h-5 w-5 text-white/40 group-hover:text-white transition-colors duration-300" />
                    )}
                  </a>

                  {/* Animated particles on hover */}
                  {!disableAnimations && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-white/60 animate-ping" />
                      <div className="absolute top-3/4 right-1/4 w-1 h-1 rounded-full bg-white/40 animate-ping" style={{ animationDelay: '0.3s' }} />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Social links */}
              <motion.div 
                variants={cardVariants}
                initial="hidden"
                animate={controls}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-xl transition-all duration-500 hover:border-fuchsia-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-purple-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <h3 className="font-semibold text-white text-lg mb-4 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-fuchsia-400" />
                    Connect Socially
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/social flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 border border-white/20 ${social.color} transition-all duration-300 hover:scale-110`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="h-5 w-5 text-white/80 group-hover/social:text-white transition-colors" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Availability status */}
              <motion.div 
                variants={cardVariants}
                initial="hidden"
                animate={controls}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-xl transition-all duration-500 hover:border-emerald-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-center gap-4">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    {!disableAnimations && (
                      <>
                        <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-400 animate-ping opacity-40"></div>
                      </>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Available for Work</h3>
                    <p className="text-white/50 text-sm">Open to new opportunities</p>
                  </div>
                  <div className="ml-auto px-2 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
                    <span className="text-xs text-emerald-300 font-medium">Active</span>
                  </div>
                </div>
              </motion.div>

              {/* Quote */}
              <motion.div 
                variants={cardVariants}
                initial="hidden"
                animate={controls}
                className="text-center p-4 rounded-xl border border-white/10 bg-white/5"
              >
                <p className="text-white/40 text-xs italic">
                  "Great things never come from comfort zones."
                </p>
              </motion.div>
            </div>

            {/* Contact Form - Right Side */}
            <motion.div 
              variants={formVariants}
              initial="hidden"
              animate={formControls}
              className="lg:col-span-7"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-2xl transition-all duration-500 hover:border-fuchsia-500/30">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-fuchsia-500/30 rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-fuchsia-500/30 rounded-tr-2xl" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20">
                      <Send className="h-6 w-6 text-fuchsia-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                      <p className="text-white/50 text-sm">I'll get back to you within 24h</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Name field */}
                      <div className="group">
                        <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50 focus:border-fuchsia-400/50 transition-all duration-300 hover:bg-white/10"
                          placeholder="Your full name"
                        />
                      </div>

                      {/* Email field */}
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50 focus:border-fuchsia-400/50 transition-all duration-300 hover:bg-white/10"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Message field */}
                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50 focus:border-fuchsia-400/50 transition-all duration-300 hover:bg-white/10 resize-none"
                        placeholder="Tell me about your project or just say hello..."
                      />
                    </div>

                    {/* Submit button */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="text-xs text-white/40">
                        * Required fields
                      </div>
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-fuchsia-500/25 hover:shadow-xl hover:shadow-fuchsia-500/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : submitStatus === 'success' ? (
                          <>
                            <CheckCircle className="h-4 w-4" />
                            <span>Sent!</span>
                          </>
                        ) : submitStatus === 'error' ? (
                          <>
                            <AlertCircle className="h-4 w-4" />
                            <span>Failed</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            <span>Send Message</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>

                  {/* Success/Error messages */}
                  {submitStatus && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-5 p-3 rounded-xl border ${
                        submitStatus === 'success'
                          ? 'bg-emerald-500/10 border-emerald-400/30'
                          : 'bg-red-500/10 border-red-400/30'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {submitStatus === 'success' ? (
                          <CheckCircle className="h-4 w-4 text-emerald-400" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-red-400" />
                        )}
                        <span className={`text-sm ${
                          submitStatus === 'success' ? 'text-emerald-300' : 'text-red-300'
                        }`}>
                          {submitStatus === 'success'
                            ? 'Message sent successfully! I\'ll get back to you soon.'
                            : 'Failed to send message. Please try again or contact me directly.'
                          }
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/5 via-purple-500/3 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to action */}
        <motion.div 
          variants={ctaVariants}
          initial="hidden"
          animate={ctaControls}
          className="mt-20 text-center"
        >
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 px-4 py-2 mb-4 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-fuchsia-300" />
                <span className="text-sm font-medium text-white">Let's Build Something Amazing</span>
              </div>

              <p className="text-white/70 text-base mb-6 leading-relaxed max-w-2xl mx-auto">
                Whether you have a project in mind, need consultation, or just want to connect,
                I'm always open to discussing new opportunities and creative collaborations.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="mailto:sahelqureshi0089@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-fuchsia-500/25 hover:shadow-xl hover:shadow-fuchsia-500/40 transition-all duration-300 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="h-4 w-4" />
                  <span>Email Me Directly</span>
                </motion.a>
                <motion.button
                  onClick={scrollToProjects}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View My Work</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;