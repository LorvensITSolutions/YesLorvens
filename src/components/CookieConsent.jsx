import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(null);

  useEffect(() => {
    // Load saved preference - use requestIdleCallback for non-critical operation
    const loadConsent = () => {
      try {
        const savedConsent = localStorage.getItem("cookieConsent");
        if (savedConsent) {
          setCookieConsent(savedConsent);
          setIsOpen(false); // Don't show if already made a choice
        } else {
          // Show banner if no preference saved - delay to not block initial render
          setTimeout(() => {
            setIsOpen(true);
          }, 1000);
        }
      } catch (e) {
        // Handle localStorage errors gracefully
        console.warn('Cookie consent storage error:', e);
      }
    };

    // Use requestIdleCallback if available, otherwise setTimeout - increased timeout for better performance
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadConsent, { timeout: 4000 });
    } else {
      setTimeout(loadConsent, 100);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setCookieConsent("accepted");
    setIsOpen(false); // Close the banner
    // Trigger Google Analytics loading if not already loaded
    if (typeof window !== 'undefined' && !window.dataLayer) {
      const event = new Event('cookieConsentAccepted');
      window.dispatchEvent(event);
    }
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setCookieConsent("rejected");
    setIsOpen(false); // Close the banner
    // Disable any non-essential cookies/tracking here
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: 100, opacity: 0, height: 0 }}
          animate={{ y: 0, opacity: 1, height: "auto" }}
          exit={{ y: 100, opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-orange-200 shadow-2xl overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              {/* Cookie Icon */}
              <div className="flex-shrink-0">
                <Cookie className="w-8 h-8 text-orange-500" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  We Value Your Privacy
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                  By clicking "Accept", you consent to our use of cookies.{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-orange-600 hover:text-orange-700 underline font-semibold"
                  >
                    Learn more
                  </Link>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <button
                  onClick={handleReject}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-colors duration-200 text-sm"
                  aria-label="Reject cookies"
                >
                  Reject
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors duration-200 text-sm shadow-md"
                  aria-label="Accept cookies"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;

