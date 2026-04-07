// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Home, Info, Briefcase, Phone, Menu, X, Folder } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const logoImg = "https://res.cloudinary.com/durbtkhbz/image/upload/w_320,h_58,f_auto,q_auto/v1764843906/lorvensIT_lghlz6.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [heroInView, setHeroInView] = useState(isHome);

  useEffect(() => {
    if (!isHome) {
      setHeroInView(false);
      return;
    }

    let cancelled = false;
    let pendingRaf = null;
    let attempts = 0;
    let observer;

    const attach = () => {
      if (cancelled) return;
      const hero = document.getElementById("home");
      if (!hero) {
        attempts += 1;
        if (attempts > 360) {
          setHeroInView(false);
          return;
        }
        pendingRaf = requestAnimationFrame(attach);
        return;
      }
      observer = new IntersectionObserver(
        ([entry]) => {
          const visible =
            entry.isIntersecting &&
            entry.intersectionRatio > 0.08 &&
            entry.boundingClientRect.bottom > 52;
          setHeroInView(visible);
        },
        {
          root: null,
          rootMargin: "-52px 0px 0px 0px",
          threshold: [0, 0.05, 0.08, 0.12, 0.2, 0.35, 0.5, 0.75, 1],
        }
      );
      observer.observe(hero);
    };

    attach();

    return () => {
      cancelled = true;
      if (pendingRaf != null) cancelAnimationFrame(pendingRaf);
      observer?.disconnect();
    };
  }, [isHome, location.key]);

  useEffect(() => {
    let resizeTimeout;
    const handleResize = () => {
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
  /** Transparent bar over home hero; solid white after scroll or on other pages */
  const heroBlend = isHome && heroInView;

  const navLinks = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/about", icon: Info, label: "About Us" },
    { to: "/services", icon: Briefcase, label: "Services" },
    { to: "/projects", icon: Folder, label: "Projects" },
    { to: "/contact", icon: Phone, label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ${
        heroBlend
          ? "border-b border-transparent bg-transparent shadow-none backdrop-blur-none"
          : "border-b border-slate-200/90 bg-white shadow-[0_1px_0_0_rgba(15,23,42,0.06)] backdrop-blur-sm"
      }`}
      style={{
        willChange: "background-color, box-shadow",
        paddingTop: "calc(0.75rem + env(safe-area-inset-top, 0px))",
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between md:h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={logoImg}
                alt="Lorvens Solutions"
                className={`h-8 w-auto md:h-9 ${heroBlend ? "drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]" : ""}`}
                loading="eager"
                width="265"
                height="48"
                fetchPriority="high"
              />
            </Link>
          </div>

          <nav className="hidden items-center space-x-1 lg:flex xl:space-x-3">
            {navLinks.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className={`group relative flex items-center px-2 py-1.5 text-xs font-medium transition-colors duration-200 md:text-sm ${
                  heroBlend
                    ? isActive(to)
                      ? "text-orange-400"
                      : "text-slate-200 hover:text-white"
                    : isActive(to)
                      ? "text-orange-600"
                      : "text-slate-800 hover:text-orange-600"
                }`}
              >
                <Icon size={15} className="mr-1 shrink-0" strokeWidth={2.25} />
                <span>{label}</span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full transition-all duration-200 ${
                    heroBlend ? "bg-orange-400" : "bg-orange-600"
                  } ${
                    isActive(to)
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className={`inline-flex items-center justify-center rounded-md p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 ${
                heroBlend
                  ? "text-white hover:bg-white/10 hover:text-orange-300"
                  : "text-slate-800 hover:bg-orange-50 hover:text-orange-600"
              }`}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? (
                <X className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="lg:hidden"
            style={{ willChange: "opacity, transform" }}
          >
            <div className="px-3 pb-3 pt-1.5 sm:px-4">
              <div
                className={`rounded-2xl border p-2 shadow-xl ${
                  heroBlend
                    ? "border-white/10 bg-slate-950/88 backdrop-blur-xl"
                    : "border-slate-200/80 bg-white"
                }`}
              >
                <div className="space-y-1">
                  {navLinks.map(({ to, icon: Icon, label }) => (
                    <Link
                      key={to}
                      to={to}
                      onClick={() => setOpen(false)}
                      className={`group relative flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150 ${
                        heroBlend
                          ? isActive(to)
                            ? "bg-white/10 text-orange-300"
                            : "text-slate-200 hover:bg-white/5 hover:text-white"
                          : isActive(to)
                            ? "bg-orange-50 text-orange-600"
                            : "text-slate-800 hover:bg-orange-50 hover:text-orange-600"
                      }`}
                    >
                      <Icon size={16} className="mr-2.5 shrink-0" strokeWidth={2.2} />
                      <span>{label}</span>
                      {isActive(to) && (
                        <span
                          className={`ml-auto h-1.5 w-1.5 rounded-full ${
                            heroBlend ? "bg-orange-300" : "bg-orange-500"
                          }`}
                        />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
