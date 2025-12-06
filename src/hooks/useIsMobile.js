import { useState, useEffect } from "react";

/**
 * Hook to detect if the current device is mobile
 * @returns {boolean} true if mobile device, false otherwise
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Check if window width is less than 1024px (lg breakpoint)
      setIsMobile(window.innerWidth < 1024);
    };

    // Check on mount
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;

