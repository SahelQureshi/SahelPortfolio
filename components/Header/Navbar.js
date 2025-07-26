"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const hasTriggeredAnimation = useRef(false);
  const isFunctionalityActive = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
      // Close menu when resizing to desktop
      if (window.innerWidth > 991) {
        setIsOpen(false);
      }
    };

    const updateNavbarStyle = () => {
      if (!isFunctionalityActive.current) return;

      const currentScroll = window.scrollY;

      // If at very top, reset animation state
      if (currentScroll === 0) {
        hasTriggeredAnimation.current = false;

        gsap.to(navbarRef.current, {
          opacity: 1,
          y: 0,
          boxShadow: "none",
          duration: 0.2,
          ease: "power2.out",
        });

        return;
      }

      // On first scroll, animate once
      if (!hasTriggeredAnimation.current && currentScroll > 0) {
        hasTriggeredAnimation.current = true;

        // Hide instantly
        gsap.set(navbarRef.current, {
          opacity: 0,
          y: -70,
          boxShadow: "none",
        });

        // Animate in
        gsap.to(navbarRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.3,
          ease: "power2.out",
        });
      }

      // Set background when scrolled past 10px
      setScrolled(currentScroll > 10);
    };

    // Set initial state
    handleResize();

    // Set initial styles
    gsap.set(navbarRef.current, {
      y: 0,
      opacity: 1,
      boxShadow: "none",
    });

    // Activate functionality after a short delay
    const timer = setTimeout(() => {
      isFunctionalityActive.current = true;
      updateNavbarStyle();
    }, 1);

    // Add event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", updateNavbarStyle);

    // Clean up
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", updateNavbarStyle);
    };
  }, []);

  useEffect(() => {
    // Animate mobile menu when isOpen changes
    if (isMobile && mobileMenuRef.current) {
      if (isOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { x: -300, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
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
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { label: "About" },
    { label: "Education" },
    { label: "Experience" },
    { label: "Skills" },
    { label: "Projects" },
    { label: "Reviews" },
    { label: "Contact" },
  ];

  return (
    <>
      <header
        ref={navbarRef}
        className={`w-full fixed top-0 xl:px-6 xl:py-4 px-4 py-2 z-50 ${
          scrolled ? "bg-[#0000000d] backdrop-blur-[145px]" : ""
        }`}
      >
        {isMobile ? (
          // Mobile Navbar with hamburger button
          <nav className="w-full flex justify-between items-center h-fit">
            {/* Logo or brand can go here */}
            <div className="w-10 h-10"></div>
            
            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </nav>
        ) : (
          // Desktop Navbar
          <nav className="w-fit mx-auto px-6 py-3 flex justify-between items-center h-fit">
            <ul className="flex flex-nowrap justify-center items-center gap-4 w-full">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="inline-block px-3 py-1 text-white text-center text-[1.2rem] font-semibold hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out rounded-full"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Mobile Sidebar Menu */}
      {isMobile && (
        <>
          {/* Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeMenu}
            ></div>
          )}
          
          {/* Sidebar */}
          <div
            ref={mobileMenuRef}
            className={`fixed top-0 left-0 h-full w-64 bg-[#000000e6] backdrop-blur-md z-50 shadow-xl transform -translate-x-full`}
          >
            <div className="h-full flex flex-col pt-20 px-4">
              <ul className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.label.toLowerCase()}`}
                      className="block px-4 py-3 text-white text-[1.1rem] font-medium hover:bg-white hover:text-black transition-all duration-300 ease-in-out rounded-lg"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Close button at bottom */}
              <button
                onClick={closeMenu}
                className="mt-auto mb-8 px-4 py-2 text-white border border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Close Menu
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;