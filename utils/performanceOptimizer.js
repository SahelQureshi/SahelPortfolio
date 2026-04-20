/**
 * Performance Optimization Utilities
 * Industry-standard performance monitoring and optimization tools
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Performance monitoring class
export class PerformanceMonitor {
  constructor() {
    this.metrics = {
      fps: 0,
      memoryUsage: 0,
      animationDurations: [],
      scrollPerformance: []
    };
    this.isMonitoring = false;
    this.rafId = null;
    this.lastTime = performance.now();
  }

  // Start FPS monitoring
  startFPSMonitoring() {
    if (this.isMonitoring) return;
    
    this.isMonitoring = true;
    const measureFPS = () => {
      const now = performance.now();
      const delta = now - this.lastTime;
      this.metrics.fps = Math.round(1000 / delta);
      this.lastTime = now;
      
      // Log performance warnings
      if (this.metrics.fps < 30) {
        console.warn(`Low FPS detected: ${this.metrics.fps}`);
      }
      
      if (this.isMonitoring) {
        this.rafId = requestAnimationFrame(measureFPS);
      }
    };
    
    this.rafId = requestAnimationFrame(measureFPS);
  }

  // Stop FPS monitoring
  stopFPSMonitoring() {
    this.isMonitoring = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  // Monitor memory usage
  checkMemoryUsage() {
    if ('memory' in performance) {
      this.metrics.memoryUsage = {
        used: Math.round(performance.memory.usedJSHeapSize / 1048576), // MB
        total: Math.round(performance.memory.totalJSHeapSize / 1048576), // MB
        limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576) // MB
      };
      
      // Memory usage warning
      const usagePercent = (this.metrics.memoryUsage.used / this.metrics.memoryUsage.limit) * 100;
      if (usagePercent > 80) {
        console.warn(`High memory usage: ${usagePercent.toFixed(1)}%`);
      }
    }
  }

  // Measure animation performance
  measureAnimation(name, animationFn) {
    const startTime = performance.now();
    
    return {
      execute: (...args) => {
        const result = animationFn(...args);
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        this.metrics.animationDurations.push({
          name,
          duration,
          timestamp: Date.now()
        });
        
        // Performance warning for slow animations
        if (duration > 16) { // More than 60fps
          console.warn(`Slow animation: ${name} took ${duration.toFixed(2)}ms`);
        }
        
        return result;
      }
    };
  }

  // Get performance report
  getPerformanceReport() {
    this.checkMemoryUsage();
    
    const avgAnimationDuration = this.metrics.animationDurations.length > 0
      ? this.metrics.animationDurations.reduce((sum, m) => sum + m.duration, 0) / this.metrics.animationDurations.length
      : 0;

    return {
      fps: this.metrics.fps,
      memory: this.metrics.memoryUsage,
      averageAnimationTime: avgAnimationDuration,
      totalAnimations: this.metrics.animationDurations.length,
      slowAnimations: this.metrics.animationDurations.filter(m => m.duration > 16).length
    };
  }
}

// GSAP Performance Optimizer
export class GSAPOptimizer {
  constructor() {
    this.activeAnimations = new Set();
    this.scrollTriggerInstances = new Set();
  }

  // Optimized ScrollTrigger creation
  createOptimizedScrollTrigger(element, config) {
    // Default performance optimizations
    const optimizedConfig = {
      start: "top 80%",
      once: true, // Prevent repeat animations
      ...config,
      // Performance callbacks
      onEnter: () => {
        performance.mark(`${element.id || 'element'}-enter`);
      },
      onLeave: () => {
        performance.mark(`${element.id || 'element'}-leave`);
      }
    };

    const trigger = ScrollTrigger.create(optimizedConfig);
    this.scrollTriggerInstances.add(trigger);
    
    return trigger;
  }

  // Throttled scroll handler
  createThrottledScrollHandler(callback, delay = 16) { // 60fps
    let timeoutId;
    let lastExecTime = 0;
    
    return (...args) => {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        callback.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          callback.apply(this, args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  }

  // Optimized stagger animation
  createOptimizedStagger(elements, config) {
    // Kill any existing animations on these elements
    this.activeAnimations.forEach(anim => {
      if (anim.targets().some(target => elements.includes(target))) {
        anim.kill();
      }
    });

    const animation = gsap.to(elements, {
      ...config,
      // Performance optimizations
      stagger: {
        each: config.stagger?.each || 0.15,
        from: config.stagger?.from || "start"
      },
      onComplete: () => {
        this.activeAnimations.delete(animation);
      }
    });

    this.activeAnimations.add(animation);
    return animation;
  }

  // Cleanup all animations
  cleanup() {
    // Kill all active animations
    this.activeAnimations.forEach(anim => anim.kill());
    this.activeAnimations.clear();

    // Kill all ScrollTrigger instances
    this.scrollTriggerInstances.forEach(trigger => trigger.kill());
    this.scrollTriggerInstances.clear();
  }
}

// Image lazy loading utility
export class LazyImageLoader {
  constructor() {
    this.observer = null;
    this.loadedImages = new Set();
  }

  // Initialize intersection observer
  init() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.loadImage(entry.target);
            }
          });
        },
        {
          rootMargin: '50px 0px', // Start loading 50px before visible
          threshold: 0.1
        }
      );
    }
  }

  // Load image
  loadImage(img) {
    if (this.loadedImages.has(img)) return;

    const src = img.dataset.src;
    if (src) {
      img.src = src;
      img.onload = () => {
        img.classList.add('loaded');
        this.loadedImages.add(img);
        this.observer?.unobserve(img);
      };
      
      img.onerror = () => {
        console.warn(`Failed to load image: ${src}`);
        this.observer?.unobserve(img);
      };
    }
  }

  // Observe image
  observe(img) {
    if (this.observer && img.dataset.src) {
      this.observer.observe(img);
    }
  }

  // Cleanup
  cleanup() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.loadedImages.clear();
  }
}

// Resource optimization utilities
export const ResourceOptimizer = {
  // Debounce function for scroll/resize events
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function for high-frequency events
  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Check if device is low-end
  isLowEndDevice() {
    return (
      navigator.hardwareConcurrency <= 2 ||
      ('deviceMemory' in navigator && navigator.deviceMemory <= 2) ||
      ('connection' in navigator && navigator.connection.effectiveType.includes('2g'))
    );
  },

  // Get optimized animation settings based on device
  getOptimizedAnimationSettings() {
    const isLowEnd = this.isLowEndDevice();
    
    return {
      duration: isLowEnd ? 0.3 : 0.8,
      stagger: isLowEnd ? 0.05 : 0.15,
      smoothScroll: isLowEnd ? 0.5 : 1,
      effects: !isLowEnd, // Disable effects on low-end devices
      smoothTouch: isLowEnd ? 0 : 0.1
    };
  }
};

// Performance monitoring singleton
export const performanceMonitor = new PerformanceMonitor();
export const gsapOptimizer = new GSAPOptimizer();
export const imageLoader = new LazyImageLoader();
