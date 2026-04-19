"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ChevronUp } from "lucide-react";

const ScrollToTopCircle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    // Update visibility based on scroll position
    const updateVisibility = () => {
      let scrollY;
      
      if (window.smoother) {
        // Using ScrollSmoother
        scrollY = window.smoother.scrollTop();
      } else {
        // Fallback to native scroll
        scrollY = window.scrollY;
      }

      setIsVisible(scrollY > 300); // Show after scrolling 300px
    };

    // Initial update
    updateVisibility();

    // Listen to scroll events
    const handleScroll = () => {
      requestAnimationFrame(updateVisibility);
    };

    // Native scroll listener
    window.addEventListener("scroll", handleScroll);
    
    // Custom event for smoother updates
    window.addEventListener("smootherScroll", handleScroll);
    
    // Also listen to ScrollTrigger events for better integration
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.addEventListener("scrollStart", handleScroll);
      ScrollTrigger.addEventListener("scrollEnd", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("smootherScroll", handleScroll);
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.removeEventListener("scrollStart", handleScroll);
        ScrollTrigger.removeEventListener("scrollEnd", handleScroll);
      }
    };
  }, []);

  // Handle click to scroll to top
  const handleScrollToTop = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    if (window.smoother) {
      // Use ScrollSmoother's smooth scroll
      gsap.to(window.smoother, {
        scrollTop: 0,
        duration: 1.2,
        ease: "power3.inOut",
        onComplete: () => {
          isAnimatingRef.current = false;
        }
      });
    } else {
      // Fallback to native smooth scroll
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      setTimeout(() => {
        isAnimatingRef.current = false;
      }, 1000);
    }

    // Animate the circle on click
    if (circleRef.current) {
      gsap.timeline()
        .to(circleRef.current, {
          scale: 1.15,
          duration: 0.15,
          ease: "power2.out"
        })
        .to(circleRef.current, {
          scale: 1,
          duration: 0.4,
          ease: "elastic.out(1, 0.3)"
        });
    }
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <div 
        ref={circleRef} 
        className="relative group cursor-pointer" 
        onClick={handleScrollToTop}
        role="button"
        aria-label="Scroll to top"
      >
        {/* Static Circle Background */}
        <svg
          width="70"
          height="70"
          viewBox="0 0 100 100"
        >
          {/* Static background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="3"
          />
          
          {/* Static gradient circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#circleGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.5))"
            }}
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Inner button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-xl group-hover:shadow-purple-500/50 transition-all duration-300">
            <ChevronUp className="w-6 h-6 text-white group-hover:-translate-y-0.5 transition-transform duration-300" />
          </div>
        </div>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-purple-500/30 to-pink-500/30" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="absolute top-2 left-2 w-1 h-1 bg-white/60 rounded-full animate-ping" />
          <div className="absolute bottom-3 right-3 w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse" />
          <div className="absolute top-1/2 right-2 w-0.5 h-0.5 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default ScrollToTopCircle;