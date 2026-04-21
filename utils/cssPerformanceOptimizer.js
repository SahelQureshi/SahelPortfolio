/**
 * CSS Performance Optimization Utilities
 * Performance monitoring and optimization tools for CSS animations
 */

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

// CSS Animation Optimizer
export class CSSAnimationOptimizer {
  constructor() {
    this.activeAnimations = new Set();
  }

  // Create optimized CSS animation
  createOptimizedAnimation(element, animationClass, options = {}) {
    const {
      duration = '0.8s',
      delay = '0s',
      easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      fillMode = 'forwards'
    } = options;

    // Remove any existing animations
    this.removeAnimation(element);

    // Set animation properties
    element.style.animation = `${animationClass} ${duration} ${easing} ${delay} ${fillMode}`;
    
    // Track animation
    this.activeAnimations.add(element);

    // Auto-cleanup after animation completes
    const cleanupTimeout = setTimeout(() => {
      this.activeAnimations.delete(element);
      // Remove will-change for performance
      element.style.willChange = 'auto';
    }, parseFloat(duration) * 1000 + parseFloat(delay) * 1000);

    return cleanupTimeout;
  }

  // Remove animation from element
  removeAnimation(element) {
    element.style.animation = '';
    this.activeAnimations.delete(element);
  }

  // Cleanup all animations
  cleanup() {
    this.activeAnimations.forEach(element => {
      element.style.animation = '';
      element.style.willChange = 'auto';
    });
    this.activeAnimations.clear();
  }

  // Add stagger delay to multiple elements
  addStagger(elements, baseDelay = 0.1) {
    elements.forEach((element, index) => {
      if (element) {
        element.style.animationDelay = `${baseDelay * index}s`;
      }
    });
  }
}

// Resource Optimizer (unchanged as it's generic)
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
      duration: isLowEnd ? '0.3s' : '0.8s',
      stagger: isLowEnd ? 0.05 : 0.15,
      smoothScroll: isLowEnd ? 0.5 : 1,
      effects: !isLowEnd, // Disable effects on low-end devices
      smoothTouch: isLowEnd ? 0 : 0.1
    };
  }
};

// Export instances for easy use
export const performanceMonitor = new PerformanceMonitor();
export const cssOptimizer = new CSSAnimationOptimizer();
