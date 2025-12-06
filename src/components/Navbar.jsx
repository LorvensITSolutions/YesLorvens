// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Home, Info, Briefcase, Phone, Menu, X, Folder } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const logoImg = "https://res.cloudinary.com/durbtkhbz/image/upload/v1764843906/lorvensIT_lghlz6.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center">
              <motion.img
                src={logoImg}
                alt="Lorvens Solutions"
                className="h-10 md:h-12 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>
          </motion.div>

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
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
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
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map(({ to, icon: Icon, label }, index) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={to}
                    onClick={() => setOpen(false)}
                    className={`relative flex items-center px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;