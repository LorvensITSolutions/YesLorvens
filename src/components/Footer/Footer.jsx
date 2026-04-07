// src/components/Footer.jsx
import { Instagram, Linkedin, Facebook, Phone, Mail as MailIcon, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  
  const handleLinkClick = (e) => {
    const targetPath = e.currentTarget.getAttribute('href');
    const currentPath = location.pathname;
    
    // List of main navigation paths that should force reload
    const mainNavPaths = ['/', '/about', '/services', '/projects', '/contact'];
    
    // If it's a main nav link and we're already on that page, force a full reload
    if (mainNavPaths.includes(targetPath) && currentPath === targetPath) {
      e.preventDefault();
      window.location.href = targetPath;
      return;
    }
    
    // For other links or when navigating to a different page
    if (currentPath === targetPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative border-t border-gray-200 bg-white px-3 pb-7 pt-7 text-gray-800 sm:px-6 sm:pb-8 md:px-12"
      style={{ zIndex: 1 }}
    >
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-7 px-1 sm:grid-cols-2 sm:gap-6 sm:px-4 lg:grid-cols-5 lg:gap-6 lg:px-6">

        {/* Brand */}
        <div className="mb-3 flex flex-col items-center sm:mb-0 sm:items-start">
          <h2 className="mb-3 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-center text-2xl font-bold tracking-wide text-transparent sm:mb-4 sm:text-left sm:text-3xl">
            YES LORVENS
          </h2>
          <p className="mb-5 max-w-[18rem] cursor-default text-center text-xs leading-relaxed text-gray-600 transition-colors sm:mb-6 sm:max-w-xs sm:text-left sm:text-sm">
            Crafting innovative tech solutions tailored to your business goals.
          </p>

          {/* Follow Us Section */}
          <div className="mb-2 w-full">
            <h3 className="mb-3 text-center text-sm font-semibold text-orange-600 sm:mb-4 sm:text-left sm:text-base">
              Follow Us
            </h3>
            <div className="flex flex-wrap justify-center gap-2.5 sm:justify-start sm:gap-3">
              <motion.a
                href="https://www.instagram.com/yeslorvenssolutions/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Visit our Instagram"
                whileHover={{ scale: 1.15, y: -2 }}
                className="rounded-lg p-1.5 text-orange-500 transition-all duration-300 hover:bg-orange-50 hover:text-orange-600 sm:p-2"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/yes-lorvens-solutions-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Connect on LinkedIn"
                whileHover={{ scale: 1.15, y: -2 }}
                className="rounded-lg p-1.5 text-orange-500 transition-all duration-300 hover:bg-orange-50 hover:text-orange-600 sm:p-2"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/yeslorvens"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Like us on Facebook"
                whileHover={{ scale: 1.15, y: -2 }}
                className="rounded-lg p-1.5 text-orange-500 transition-all duration-300 hover:bg-orange-50 hover:text-orange-600 sm:p-2"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
              <motion.a
                href="https://twitter.com/yeslorvens"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Follow us on X (Twitter)"
                whileHover={{ scale: 1.15, y: -2, rotate: [0, -10, 10, -10, 0] }}
                className="rounded-lg p-1.5 text-orange-500 transition-all duration-300 hover:bg-orange-50 hover:text-orange-600 sm:p-2"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  aria-hidden="true"
                >
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    fill="currentColor"
                  />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
        {/* Quick Links */}
        <div className="mb-2 text-center sm:mb-0 sm:text-left">
          <h3 className="relative mb-2 inline-block text-base font-semibold text-orange-600 sm:mb-3 sm:text-lg">
            Explore
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"></span>
          </h3>
          <ul className="mt-3 space-y-2 text-xs sm:mt-4 sm:space-y-2.5 sm:text-sm">
            <li>
              <Link to="/" onClick={handleLinkClick} className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick} className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={handleLinkClick} className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={handleLinkClick} className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick} className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick} className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        {/* Services */}
        <div className="mb-2 text-center sm:mb-0 sm:text-left">
          <h3 className="relative mb-2 inline-block text-base font-semibold text-orange-600 sm:mb-3 sm:text-lg">
            Our Services
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"></span>
          </h3>
          <ul className="mt-3 space-y-2 text-xs sm:mt-4 sm:space-y-2.5 sm:text-sm">
            <li>
              <Link to="/service/web-development" onClick={handleLinkClick} className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Web Development
              </Link>
            </li>
            <li>
              <Link to="/service/mobile-development" onClick={handleLinkClick} className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Mobile Apps
              </Link>
            </li>
            <li>
              <Link to="/service/ui-ux-design" onClick={handleLinkClick} className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link to="/service/digital-marketing" onClick={handleLinkClick} className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link to="/service/ai-ml-integration" onClick={handleLinkClick} className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                AI/ML Integrations
              </Link>
            </li>
            <li>
              <Link to="/service/quality-assurance" onClick={handleLinkClick} className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Quality Assurance
              </Link>
            </li>
          </ul>
        </div>
        {/* Policy */}
        <div className="mb-2 text-center sm:mb-0 sm:text-left">
          <h3 className="relative mb-2 inline-block text-base font-semibold text-orange-600 sm:mb-3 sm:text-lg">
            Policy
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"></span>
          </h3>
          <ul className="mt-3 space-y-2 text-xs sm:mt-4 sm:space-y-2.5 sm:text-sm">
            <li>
              <Link to="/privacy-policy" onClick={handleLinkClick} className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-of-use" onClick={handleLinkClick} className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Terms of use
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div className="text-center sm:text-left">
          <h3 className="relative mb-2 inline-block text-base font-semibold text-orange-600 sm:mb-3 sm:text-lg">
            Contact Us
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"></span>
          </h3>
          <ul className="mt-3 space-y-3 text-xs sm:mt-4 sm:text-sm">
            <li className="flex items-start justify-center gap-2 sm:justify-start sm:gap-2.5">
              <Phone className="h-4 w-4 flex-shrink-0 text-orange-600 sm:h-5 sm:w-5" />
              <div className="flex flex-col gap-1.5">
                <a 
                  href="tel:+917013814030" 
                  className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'tel:+917013814030';
                  }}
                >
                  +91 7013814030
                </a>
                <a 
                  href="tel:+914031985921" 
                  className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'tel:+914031985921';
                  }}
                >
                  +91 4031985921
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-600 sm:mt-1 sm:h-5 sm:w-5" />
              <a
                href="https://maps.app.goo.gl/U2RMhtQJWRT9gtLk9"
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-[19rem] leading-relaxed text-gray-600 transition-colors duration-200 hover:text-orange-600 sm:max-w-none"
              >
                Road No. 86, Jubilee Hills, Hyderabad, Telangana 500096
              </a>
            </li>
          </ul>
        </div>
        {/* Legal */}
      </div>
      {/* Copyright */}
      <div className="relative mt-7 border-t border-gray-200 pt-6 text-center sm:mt-8 sm:pt-8">
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:gap-4 sm:text-sm">
          <span className="text-gray-600">&copy; {new Date().getFullYear()} YES LORVENS. All rights reserved.</span>
      
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
