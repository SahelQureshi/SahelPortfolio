"use client";

import { useState, useEffect, useRef } from "react";
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
import { navItems } from "@/config/mainConfig";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("banner");
  const [disableAnimations, setDisableAnimations] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const logoRef = useRef(null);

 

  // Check screen size for disabling animations
  useEffect(() => {
    const checkScreenSize = () => {
      setDisableAnimations(window.innerWidth < 991);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Handle navbar hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for background opacity
      setScrolled(currentScrollY > 50);
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsNavbarVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsNavbarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
      
      // Clear previous timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Set timeout to show navbar when scrolling stops
      const timeout = setTimeout(() => {
        setIsNavbarVisible(true);
      }, 500);
      
      setScrollTimeout(timeout);
      
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
    
    const handleResize = () => {
      const mobile = window.innerWidth <= 1023;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(false);
        document.body.style.overflow = "auto";
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.top = "";
      }
    };
    
    // Initial setup
    handleResize();
    
    // Add event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  useEffect(() => {
    // Animate mobile menu with CSS classes
    if (isMobile && mobileMenuRef.current) {
      if (isOpen) {
        mobileMenuRef.current.classList.add('mobile-menu-open');
        mobileMenuRef.current.classList.remove('mobile-menu-closed');
      } else {
        mobileMenuRef.current.classList.add('mobile-menu-closed');
        mobileMenuRef.current.classList.remove('mobile-menu-open');
      }
    }
  }, [isOpen, isMobile]);

  // Handle body scroll when sidebar opens/closes
  useEffect(() => {
    if (isOpen && isMobile) {
      // Store current scroll position before opening
      const scrollY = window.scrollY;
      document.body.dataset.scrollY = scrollY;
      // Disable scroll on body when sidebar is open
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollY}px`;
    } else if (!isOpen && isMobile) {
      // Re-enable scroll when sidebar is closed
      const scrollY = document.body.dataset.scrollY;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0"));
        delete document.body.dataset.scrollY;
      }
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [isOpen, isMobile]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Smooth scroll to contact section
  const scrollToContact = () => {
    // Close menu first
    if (isOpen && isMobile) {
      setIsOpen(false);
      // Small delay to allow menu to close before scrolling
      setTimeout(() => {
        performScroll("#contact");
      }, 100);
    } else {
      performScroll("#contact");
    }
  };

  const performScroll = (href) => {
    if (window.smoother) {
      window.smoother.scrollTo(href, true, "offset 80px");
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollToSection = (href) => {
    // Close the mobile menu if it's open
    if (isOpen && isMobile) {
      setIsOpen(false);
      // Small delay to allow menu animation to complete and body scroll to be restored
      setTimeout(() => {
        performScroll(href);
      }, 150);
    } else {
      performScroll(href);
    }
  };

  return (
    <>
      <header
        ref={navbarRef}
        className={`w-full fixed top-0 z-50 transition-all duration-500 backdrop-blur-[109px] ease-in-out ${
          isNavbarVisible 
            ? "translate-y-0 opacity-100" 
            : "-translate-y-full opacity-0"
        } ${
          scrolled
            ? "bg-black/20 border-b border-white/10 spec-side shadow-2xl"
            : "bg-transparent"
        }`}
      >
      
        <div className="container mx-auto px-6 relative">
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
                {/* Animated glow effect - disabled on mobile */}
                {!disableAnimations && (
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse" />
                )}
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
            <div className="hidden lgg:flex items-center xl:gap-1 gap-[1px]">
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
                  <div className="flex items-center xl:gap-2 gap-[3px]">
                    <item.icon
                      className={`h-4 w-4 transition-colors duration-300 ${
                        activeSection === item.href.substring(1)
                          ? "text-purple-300"
                          : "text-white/60 group-hover:text-purple-300"
                      }`}
                    />
                    <span className="text-sm">{item.label}</span>
                  </div>

                  {/* Active indicator - pulse animation disabled on mobile */}
                  {activeSection === item.href.substring(1) && (
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full ${!disableAnimations ? 'animate-pulse' : ''}`} />
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
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 left-0 h-full w-80 bg-gray-900/60 spec-side border-r border-white/10 z-50 lgg:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
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
          <div className="flex-1 px-6 py-8 overflow-y-auto">
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
                      {/* Active indicator - pulse animation disabled on mobile */}
                      {activeSection === item.href.substring(1) && (
                        <div className={`ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 ${!disableAnimations ? 'animate-pulse' : ''}`} />
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
              <button
                onClick={scrollToContact}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
              >
                <Mail className="h-4 w-4" />
                Get In Touch
              </button>

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