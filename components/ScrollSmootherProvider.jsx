"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Navbar from "./Header/Navbar";
import ScrollToTopCircle from "./spinner/ScrollSpinner";
 // Import the component

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ScrollSmootherProvider = ({ children }) => {
  const smootherRef = useRef(null);

  useEffect(() => {
    // Initialize ScrollSmoother
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: true,
      ignoreMobileResize: true,
    });

    smootherRef.current = smoother;
    window.smoother = smoother;

    // Dispatch custom event for progress tracking
    const dispatchSmootherScroll = () => {
      window.dispatchEvent(new CustomEvent("smootherScroll"));
    };

    // Listen to ScrollTrigger events (works with ScrollSmoother)
    ScrollTrigger.addEventListener("scrollStart", dispatchSmootherScroll);
    ScrollTrigger.addEventListener("scrollEnd", dispatchSmootherScroll);
    ScrollTrigger.addEventListener("refresh", dispatchSmootherScroll);

    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
      }
      
      ScrollTrigger.removeEventListener("scrollStart", dispatchSmootherScroll);
      ScrollTrigger.removeEventListener("scrollEnd", dispatchSmootherScroll);
      ScrollTrigger.removeEventListener("refresh", dispatchSmootherScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Clear global references
      delete window.smoother;
    };
  }, []);

  useEffect(() => {
    window.refreshSmoother = () => {
      if (smootherRef.current) {
        smootherRef.current.refresh();
        ScrollTrigger.refresh();
      }
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <Navbar />
      <div id="smooth-content">
        {children}
      </div>
      <ScrollToTopCircle /> {/* Add the circle button here */}
    </div>
  );
};

export default ScrollSmootherProvider;