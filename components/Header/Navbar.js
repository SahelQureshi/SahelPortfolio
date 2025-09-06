"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Menu,
  X,
  Home,
  User,
  GraduationCap,
  Briefcase,
  Code,
  FolderOpen,
  MessageSquare,
  Mail,
  Sparkles,
  ChevronDown,
  Zap,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("banner");

  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const logoRef = useRef(null);

  const navItems = [
    { label: "Home", href: "#banner", icon: Home },
    { label: "About", href: "#about", icon: User },
    { label: "Education", href: "#education", icon: GraduationCap },
    { label: "Experience", href: "#experience", icon: Briefcase },
    { label: "Skills", href: "#skills", icon: Code },
    { label: "Projects", href: "#projects", icon: FolderOpen },
    { label: "Reviews", href: "#reviews", icon: MessageSquare },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 991;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    // Initial setup
    handleResize();
    handleScroll();

    // GSAP animations
    gsap.set(navbarRef.current, {
      y: 0,
      opacity: 1,
    });

    gsap.set(logoRef.current, {
      scale: 1,
    });

    // Add scroll-based navbar animation
    const scrollAnimation = gsap.to(navbarRef.current, {
      y: scrolled ? -10 : 0,
      duration: 0.3,
      ease: "power2.out",
    });

    // Add event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      scrollAnimation.kill();
    };
  }, [scrolled]);

  useEffect(() => {
    // Animate mobile menu
    if (isMobile && mobileMenuRef.current) {
      if (isOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { x: -300, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          x: -300,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isOpen, isMobile]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  // Smooth scroll to contact section
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const navbarHeight = window.innerWidth >= 768 ? 80 : 64; // md:h-20 = 80px, h-16 = 64px
      const offsetTop = element.offsetTop - navbarHeight - 20; // -20px buffer

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    closeMenu();
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    closeMenu();
  };

  return (
    <>
      <header
        ref={navbarRef}
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <nav className="flex justify-between items-center h-16 md:h-20">
            {/* Logo/Brand */}
            <div
              ref={logoRef}
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => scrollToSection("#banner")}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse" />
              </div>
              <div className="hidden xl:block">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  Sahel Qureshi
                </h3>
                <p className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300">
                  Full Stack Developer
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lgg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className={`group relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "text-white bg-white/10"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <item.icon
                      className={`h-4 w-4 transition-colors duration-300 ${
                        activeSection === item.href.substring(1)
                          ? "text-purple-300"
                          : "text-white/60 group-hover:text-purple-300"
                      }`}
                    />
                    <span className="text-sm">{item.label}</span>
                  </div>

                  {/* Active indicator */}
                  {activeSection === item.href.substring(1) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={scrollToContact}
                className="group relative px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <span className="relative flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Hire Me
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lgg:hidden relative p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                  }`}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 left-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-r border-white/10 z-50 lg:hidden transform -translate-x-full`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Sahel Qureshi</h3>
                <p className="text-sm text-white/60">Full Stack Developer</p>
              </div>
            </div>
            <button
              onClick={closeMenu}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 px-6 py-8">
            <nav>
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeSection === item.href.substring(1)
                          ? "bg-white/10 text-white border border-purple-400/30"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <item.icon
                        className={`h-5 w-5 ${
                          activeSection === item.href.substring(1)
                            ? "text-purple-300"
                            : "text-white/60"
                        }`}
                      />
                      <span className="font-medium">{item.label}</span>
                      {activeSection === item.href.substring(1) && (
                        <div className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-white/10">
            <div className="space-y-3">
              <a
                href="#contact"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
              >
                <Mail className="h-4 w-4" />
                Get In Touch
              </a>

              <div className="flex items-center justify-center gap-4 pt-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <span className="text-xs text-white/60">EN</span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <span className="text-xs text-purple-300 font-medium">
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
