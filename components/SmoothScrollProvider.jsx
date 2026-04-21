"use client";

import { useEffect, useRef } from "react";
import Navbar from "./Header/Navbar";
import ScrollToTopCircle from "./spinner/ScrollSpinner";

const SmoothScrollProvider = ({ children }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Enable smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Create a global scroll function for compatibility
    window.smoother = {
      scrollTop: () => window.scrollY,
      scrollTo: (target, smooth = true) => {
        if (typeof target === 'number') {
          window.scrollTo({ top: target, behavior: smooth ? 'smooth' : 'auto' });
        } else if (typeof target === 'string') {
          const element = document.querySelector(target);
          if (element) {
            element.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
          }
        }
      },
      refresh: () => {
        // Dispatch refresh event for components that listen to it
        window.dispatchEvent(new CustomEvent("smootherRefresh"));
      }
    };

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = '';
      delete window.smoother;
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      <Navbar />
      {children}
      <ScrollToTopCircle />
    </div>
  );
};

export default SmoothScrollProvider;
