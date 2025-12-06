import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, CheckCircle, Send } from "lucide-react";
const HeroBg = "https://res.cloudinary.com/durbtkhbz/image/upload/v1764843926/website_e2hdje.jpg"
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
const Hero = React.memo(() => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleWorkTogetherClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Reset form state when closing
    setTimeout(() => {
      setName("");
      setEmail("");
      setSuccess(false);
      setError(null);
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name.trim() || !email.trim()) {
      setError("Please fill in all required fields.");
      setTimeout(() => setError(null), 5000);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      setTimeout(() => setError(null), 5000);
      return;
    }

    setLoading(true);
    setSuccess(false);
    setError(null);

    // Use iframe method for fast, reliable submission
    try {
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.style.width = "0";
      iframe.style.height = "0";
      iframe.style.border = "none";
      iframe.name = "hidden_iframe_" + Date.now();
      document.body.appendChild(iframe);

      const tempForm = document.createElement("form");
      tempForm.method = "POST";
      tempForm.action = "https://formsubmit.co/bhanu.rupa2003@gmail.com";
      tempForm.target = iframe.name;
      tempForm.style.display = "none";

      // Add form fields
      const fields = [
        { name: 'name', value: name.trim() },
        { name: 'email', value: email.trim() },
        { name: '_captcha', value: 'false' },
        { name: '_template', value: 'table' },
        { name: '_subject', value: 'New Contact from Hero Section - YES LORVENS Website' }
      ];

      fields.forEach(field => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = field.name;
        input.value = field.value;
        tempForm.appendChild(input);
      });

      document.body.appendChild(tempForm);
      tempForm.submit();

      // Show success immediately (iframe submission is instant)
      setSuccess(true);
      setLoading(false);
      setName("");
      setEmail("");

      // Clean up after a short delay
      setTimeout(() => {
        if (tempForm.parentNode) {
          document.body.removeChild(tempForm);
        }
        if (iframe.parentNode) {
          document.body.removeChild(iframe);
        }
      }, 1000);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      setError("Failed to send message. Please try again.");
      setLoading(false);
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };
  return (
    <section
      id="home"
      className="relative flex items-center justify-start h-screen w-screen overflow-hidden"
      style={{
        backgroundColor: "#111827", // Fallback color for instant load
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Optimized gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
      {/* Content - single container for viewport optimization */}
      <motion.div
        className="relative z-10 px-4 sm:px-6 md:px-16 lg:px-24 max-w-3xl text-center md:text-left space-y-6 pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Main Heading */}
        <motion.h1
          variants={headingVariants}
          className="font-extrabold leading-snug"
        >
          <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap max-[420px]:text-2xl">
            Digital solutions built
          </span>
          <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight whitespace-nowrap max-[420px]:text-2xl">
            <span className="text-white">for </span>
            <span className="text-orange-500">growth & scale</span>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={textVariants}
          className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl max-[420px]:text-sm"
        >
          At <strong className="text-orange-500">YES LORVENS</strong>, we help
          startups & enterprises launch websites, apps, and full-stack digital
          solutions tailored for real results.
        </motion.p>
        {/* Buttons */}
        <motion.div
          variants={buttonVariants}
          className="flex flex-col sm:flex-row items-center gap-3 max-w-md w-full"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/services"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 h-12 sm:h-14 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 font-medium shadow-lg hover:shadow-xl text-center flex items-center justify-center"
            >
              Our services
            </Link>
          </motion.div>
          <motion.button
            className="sm:w-auto bg-orange-500 text-white px-6 sm:px-8 h-12 sm:h-14 rounded-md hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200 font-medium shadow-lg hover:shadow-xl active:scale-95"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWorkTogetherClick}
          >
            Work Together
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 relative"
              >
                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Modal Header */}
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Let's Work Together
                  </h2>
                  <p className="text-gray-600">
                    Enter your details and we'll get back to you soon.
                  </p>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Name Input */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name *"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email *"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-6 rounded-xl font-semibold shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Submit</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Success Message */}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-100 border border-green-300 text-green-700 rounded-xl flex items-center gap-2"
                  >
                    <CheckCircle size={20} className="flex-shrink-0" />
                    <span className="font-medium">Message sent successfully! We'll get back to you soon.</span>
                  </motion.div>
                )}

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-100 border border-red-300 text-red-700 rounded-xl"
                  >
                    <p className="font-medium">{error}</p>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
