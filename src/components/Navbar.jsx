// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Home, Info, Briefcase, Phone, Menu, X, Folder } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Optimized logo with Cloudinary transformations for responsive sizing
const logoImg = "https://res.cloudinary.com/durbtkhbz/image/upload/w_400,h_72,f_auto,q_auto/v1764843906/lorvensIT_lghlz6.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const handleScroll = () => {
      // Store scroll position to avoid reading it multiple times
      lastScrollY = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Use stored value to avoid reading scrollY again (prevents forced reflow)
          setScrolled(lastScrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let resizeTimeout;
    const handleResize = () => {
      // Debounce resize for better performance
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (window.innerWidth >= 1024) setOpen(false);
      }, 150);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/about", icon: Info, label: "About Us" },
    { to: "/services", icon: Briefcase, label: "Services" },
    { to: "/projects", icon: Folder, label: "Projects" },
    { to: "/contact", icon: Phone, label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white/90 backdrop-blur-sm"
      }`}
      style={{ willChange: 'background-color, box-shadow' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={logoImg}
                alt="Lorvens Solutions"
                className="h-10 md:h-12 w-auto"
                loading="eager"
                width="331"
                height="60"
                fetchPriority="high"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {navLinks.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative px-3 py-2 text-sm md:text-base font-medium flex items-center transition-colors duration-200 group ${
                  isActive(to)
                    ? "text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                <Icon size={18} className="mr-1.5" />
                <span>{label}</span>
                {/* Underline effect */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transition-all duration-200 ${
                    isActive(to)
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-colors"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 500 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden bg-white shadow-lg overflow-hidden"
            style={{ willChange: 'opacity, max-height' }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map(({ to, icon: Icon, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={`relative flex items-center px-3 py-3 rounded-md text-base font-medium transition-colors duration-150 ${
                    isActive(to)
                      ? "bg-orange-50 text-orange-600"
                      : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  <Icon size={20} className="mr-3 flex-shrink-0" />
                  <span>{label}</span>
                  {/* Mobile underline effect */}
                  {isActive(to) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;