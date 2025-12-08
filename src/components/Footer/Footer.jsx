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
      className="text-white pt-4 pb-4 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://res.cloudinary.com/durbtkhbz/image/upload/v1764907243/software_project_mdtyuu.jpg')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-18 gap-y-8 px-4 sm:px-6 relative">

        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-0">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-wide text-center sm:text-left">
            YES LORVENS
          </h2>
          <p className="text-sm text-gray-300 transition-colors text-center sm:text-left max-w-xs cursor-default mb-3">
            Crafting innovative tech solutions tailored to your business goals.
          </p>

          {/* Follow Us Section */}
          <div className="mb-4 w-full">
            <h3 className="text-base font-semibold text-white mb-3 text-center sm:text-left">
              Follow Us
            </h3>
            <div className="flex gap-4 flex-wrap justify-center">
              <motion.a
                href="https://www.instagram.com/yeslorvenssolutions/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Visit our Instagram"
                whileHover={{ scale: 1.2 }}
                className="text-orange-400 hover:text-orange-300 transition p-2 -m-2"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/yes-lorvens-solutions-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Connect on LinkedIn"
                whileHover={{ scale: 1.2 }}
                className="text-orange-400 hover:text-orange-300 transition p-2 -m-2"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/yeslorvens"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Like us on Facebook"
                whileHover={{ scale: 1.2 }}
                className="text-orange-400 hover:text-orange-300 transition p-2 -m-2"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://twitter.com/yeslorvens"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Follow us on X (Twitter)"
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                className="text-orange-400 hover:text-orange-300 transition p-2 -m-2"
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
          <h3 className="text-lg font-semibold text-orange-400 mb-4">
            Explore
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="text-gray-300 hover:text-orange-400 transition">Home</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-orange-400 transition">About Us</Link></li>
            <li><Link to="/services" className="text-gray-300 hover:text-orange-400 transition">Services</Link></li>
            <li><Link to="/projects" className="text-gray-300 hover:text-orange-400 transition">Projects</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-orange-400 transition">Contact</Link></li>
          </ul>
        </div>
        {/* Services */}
        <div className="mb-8 sm:mb-0 text-center sm:text-left">
          <h3 className="text-lg font-semibold text-orange-400 mb-4">Our Services</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/service/web-development" className="text-gray-300 hover:text-orange-400 transition">Web Development</Link></li>
            <li><Link to="/service/mobile-development" className="text-gray-300 hover:text-orange-400 transition">Mobile Apps</Link></li>
            <li><Link to="/service/ui-ux-design" className="text-gray-300 hover:text-orange-400 transition">UI/UX Design</Link></li>
            <li><Link to="/service/digital-marketing" className="text-gray-300 hover:text-orange-400 transition">Digital Marketing</Link></li>
            <li><Link to="/service/ai-ml-integration" className="text-gray-300 hover:text-orange-400 transition">AI/ML Integrations</Link></li>
            <li><Link to="/service/quality-assurance" className="text-gray-300 hover:text-orange-400 transition">Quality Assurance</Link></li>
           
          </ul>
        </div>
        {/* Contact */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-orange-400 mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <Phone className="h-4 w-4 text-orange-600 flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <a 
                  href="tel:+917013814030" 
                  className="hover:text-orange-600 transition p-1 -m-1"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'tel:+917013814030';
                  }}
                >
                  +91 7013814030
                </a>
                <a 
                  href="tel:+914031985921" 
                  className="hover:text-orange-600 transition p-1 -m-1"
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
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 mt-0.5 flex-shrink-0" />
              <a
                href="https://maps.app.goo.gl/U2RMhtQJWRT9gtLk9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 transition"
              >
                Road No. 86, Jubilee Hills, Hyderabad, Telangana 500096
              </a>
            </li>
          </ul>
        </div>
        {/* Legal */}
      </div>
      {/* Copyright */}
      <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
        <div className="flex flex-wrap justify-center items-center gap-3">
          <span>&copy; {new Date().getFullYear()} YES LORVENS. All rights reserved.</span>
          <span className="text-orange-500">|</span>
          <Link to="/privacy-policy" className="hover:text-orange-600 transition whitespace-nowrap">Privacy Policy</Link>
          <span className="text-orange-500">|</span>
          <Link to="/terms-of-use" className="hover:text-orange-600 transition whitespace-nowrap">Terms of Use</Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
