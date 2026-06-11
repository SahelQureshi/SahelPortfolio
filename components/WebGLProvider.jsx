// Add this to your main layout or _app.js
// components/WebGLProvider.jsx
'use client';

import { useEffect } from 'react';

export function WebGLProvider({ children }) {
  useEffect(() => {
    const handleWebGLContextLost = (event) => {
      event.preventDefault();
      console.warn('WebGL context lost - attempting page reload');
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          window.location.reload();
        }
      }, 100);
    };

    // Monitor for canvas elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeName === 'CANVAS') {
            node.addEventListener('webglcontextlost', handleWebGLContextLost);
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Add listener to existing canvases
    document.querySelectorAll('canvas').forEach((canvas) => {
      canvas.addEventListener('webglcontextlost', handleWebGLContextLost);
    });

    return () => {
      observer.disconnect();
      document.querySelectorAll('canvas').forEach((canvas) => {
        canvas.removeEventListener('webglcontextlost', handleWebGLContextLost);
      });
    };
  }, []);

  return children;
}