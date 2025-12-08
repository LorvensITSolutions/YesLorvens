import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Function to scroll to top - works on both mobile and desktop
    const scrollToTop = () => {
      // Method 1: Scroll window
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      
      // Method 2: Scroll document elements (for mobile browsers)
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }
      
      // Method 3: Scroll any scrollable containers
      const scrollableElements = document.querySelectorAll('[data-scroll-container]');
      scrollableElements.forEach(el => {
        el.scrollTop = 0;
      });
    };

    // Immediate scroll
    scrollToTop();
    
    // Scroll after next frame (for desktop)
    requestAnimationFrame(() => {
      scrollToTop();
    });
    
    // Scroll after a short delay (for mobile - gives time for layout)
    const timeout1 = setTimeout(() => {
      scrollToTop();
    }, 0);
    
    // Additional scroll after longer delay for mobile browsers
    // Mobile browsers sometimes need more time to render
    const timeout2 = setTimeout(() => {
      scrollToTop();
    }, 50);
    
    // Final scroll after layout is complete (mobile specific)
    const timeout3 = setTimeout(() => {
      scrollToTop();
    }, 100);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
