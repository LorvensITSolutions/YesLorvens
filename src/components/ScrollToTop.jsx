import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Optimized scroll to top - single batched operation to avoid forced reflows
    // Use requestAnimationFrame to batch with browser's paint cycle
    const rafId = requestAnimationFrame(() => {
      // Batch all scroll operations in single frame to avoid forced reflow
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      // Direct assignment in same frame - no reflow
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });

    // Single delayed scroll for mobile browsers (after layout is complete)
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 50);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
