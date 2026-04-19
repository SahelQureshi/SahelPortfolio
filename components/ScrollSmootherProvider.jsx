"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Navbar from "./Header/Navbar";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ScrollSmootherProvider = ({ children }) => {
  const smootherRef = useRef(null);

  useEffect(() => {
    // Initialize ScrollSmoother
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1, // seconds it takes to catch up
      effects: true, // enables data-speed / data-lag
      smoothTouch: 0.1, // light smooth on mobile
      normalizeScroll: true, // fixes iOS bounce
      ignoreMobileResize: true,
    });

    smootherRef.current = smoother;

    // Make smoother globally available
    window.smoother = smoother;

    // Refresh ScrollTrigger after initialization
    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Global refresh function for dynamic content
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
      
    </div>
  );
};

export default ScrollSmootherProvider;
