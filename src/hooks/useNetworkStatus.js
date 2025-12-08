import { useState, useEffect } from 'react';

/**
 * Custom hook to detect network connectivity status
 * @returns {boolean} isOnline - true when connected, false when offline
 */
export function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(() => {
    if (typeof window !== 'undefined') {
      return navigator.onLine;
    }
    return true; // Default to online for SSR
  });

  useEffect(() => {
    // Update state when network status changes
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Add event listeners with passive option for better performance
    window.addEventListener('online', handleOnline, { passive: true });
    window.addEventListener('offline', handleOffline, { passive: true });

    // Cleanup - critical for back/forward cache
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

