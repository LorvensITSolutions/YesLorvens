// src/components/Footer.jsx
import { Instagram, Linkedin, Facebook, Phone, Mail as MailIcon, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-gray-800 pt-7 pb-8 px-4 sm:px-6 md:px-12 relative bg-white border-t border-gray-200"
      style={{ zIndex: 1 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-6 px-4 sm:px-6 relative">

        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-wide text-center sm:text-left bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            YES LORVENS
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed transition-colors text-center sm:text-left max-w-xs cursor-default mb-6">
            Crafting innovative tech solutions tailored to your business goals.
          </p>

          {/* Follow Us Section */}
          <div className="mb-4 w-full">
            <h3 className="text-base font-semibold text-orange-600 mb-4 text-center sm:text-left">
              Follow Us
            </h3>
            <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
              <motion.a
                href="https://www.instagram.com/yeslorvenssolutions/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Visit our Instagram"
                whileHover={{ scale: 1.15, y: -2 }}
                className="text-orange-500 hover:text-orange-600 transition-all duration-300 p-2 rounded-lg hover:bg-orange-50"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/yes-lorvens-solutions-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Connect on LinkedIn"
                whileHover={{ scale: 1.15, y: -2 }}
                className="text-orange-500 hover:text-orange-600 transition-all duration-300 p-2 rounded-lg hover:bg-orange-50"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/yeslorvens"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Like us on Facebook"
                whileHover={{ scale: 1.15, y: -2 }}
                className="text-orange-500 hover:text-orange-600 transition-all duration-300 p-2 rounded-lg hover:bg-orange-50"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://twitter.com/yeslorvens"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Follow us on X (Twitter)"
                whileHover={{ scale: 1.15, y: -2, rotate: [0, -10, 10, -10, 0] }}
                className="text-orange-500 hover:text-orange-600 transition-all duration-300 p-2 rounded-lg hover:bg-orange-50"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
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
        <div className="mb-8 sm:mb-0 text-center sm:text-left">
          <h3 className="text-lg font-semibold text-orange-600 mb-3 relative inline-block">
            Explore
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"></span>
          </h3>
          <ul className="space-y-2.5 text-sm mt-4">
            <li>
              <Link to="/" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        {/* Services */}
        <div className="mb-8 sm:mb-0 text-center sm:text-left">
          <h3 className="text-lg font-semibold text-orange-600 mb-3 relative inline-block">
            Our Services
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"></span>
          </h3>
          <ul className="space-y-2.5 text-sm mt-4">
            <li>
              <Link to="/service/web-development" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Web Development
              </Link>
            </li>
            <li>
              <Link to="/service/mobile-development" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Mobile Apps
              </Link>
            </li>
            <li>
              <Link to="/service/ui-ux-design" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link to="/service/digital-marketing" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link to="/service/ai-ml-integration" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                AI/ML Integrations
              </Link>
            </li>
            <li>
              <Link to="/service/quality-assurance" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Quality Assurance
              </Link>
            </li>
          </ul>
        </div>
        {/* Policy */}
        <div className="mb-8 sm:mb-0 text-center sm:text-left">
          <h3 className="text-lg font-semibold text-orange-600 mb-3 relative inline-block">
            Policy
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"></span>
          </h3>
          <ul className="space-y-2.5 text-sm mt-4">
            <li>
              <Link to="/privacy-policy" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-of-use" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 inline-block hover:translate-x-1">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-orange-600 mb-3 relative inline-block">
            Contact Us
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"></span>
          </h3>
          <ul className="space-y-3 text-sm mt-4">
            <li className="flex items-center justify-center sm:justify-start gap-2.5">
              <Phone className="h-5 w-5 text-orange-600 flex-shrink-0" />
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
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
              <a
                href="https://maps.app.goo.gl/U2RMhtQJWRT9gtLk9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-600 transition-colors duration-200 leading-relaxed"
              >
                Road No. 86, Jubilee Hills, Hyderabad, Telangana 500096
              </a>
            </li>
          </ul>
        </div>
        {/* Legal */}
      </div>
      {/* Copyright */}
      <div className="mt-8 pt-8 border-t border-gray-200 text-center relative">
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
          <span className="text-gray-600">&copy; {new Date().getFullYear()} YES LORVENS. All rights reserved.</span>
      
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
