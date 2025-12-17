// ContactPage.jsx
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {Mail,MapPin,Phone,CheckCircle,Globe,MessageCircle,Send} from "lucide-react";
import emailjs from '@emailjs/browser';
// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ContactPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formSectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState(null);
  const [mounted, setMounted] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1,
    margin: '50px' // Trigger earlier to avoid layout reads during scroll
  });

  useEffect(() => {
    setMounted(true);
    // Initialize EmailJS
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
    
    if (location.hash === '#contact-form' && formSectionRef.current) {
      setTimeout(() => {
        formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
    }
  }, [location.hash]);

  useEffect(() => {
    // Batch animation start to avoid forced reflow
    if (isInView) {
      requestAnimationFrame(() => {
        controls.start("visible");
      });
    }
  }, [controls, isInView]);

  // Auto-hide error message after 5 seconds
  useEffect(() => {
    if (formError) {
      const timeout = setTimeout(() => {
        setFormError(null);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [formError]);

  // Scroll to top when success modal appears
  useEffect(() => {
    if (success) {
      // Scroll to top to ensure modal is visible
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [success]);

  // Handle OK button click - redirect to homepage
  const handleOkClick = () => {
    setSuccess(false);
    navigate('/');
  };

  // Validation functions
  const validateField = (name, value) => {
    let error = "";
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
          error = 'Name should only contain letters and spaces';
        }
        break;
      case 'email':
        if (!value) error = 'Email is required';
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = 'Invalid email address';
        }
        break;
      case 'phone':
        if (!value.trim()) {
          error = 'Phone number is required';
        } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(value)) {
          error = 'Please enter a valid phone number';
        }
        break;
      case 'subject':
        if (!value.trim()) error = 'Subject is required';
        break;
      case 'message':
        if (!value.trim()) error = 'Message is required';
        break;
      default:
        break;
    }
    
    return error;
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    
    // Batch validation - use for...of for better performance than forEach
    for (const field of Object.keys(formData)) {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    }
    
    // Batch state update to avoid multiple re-renders
    setErrors(newErrors);
    return isValid;
  };

  const handleBlur = (field) => (e) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors(prev => ({ ...prev, [field]: error || '' }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For name field, only allow alphabetic characters and spaces
    if (name === 'name' && value && !/^[A-Za-z\s]*$/.test(value)) {
      return; // Don't update if invalid characters are entered
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error || ''
      }));
    }
  };

  // Sanitize input to prevent pattern matching errors
  const sanitizeInput = (value) => {
    if (typeof value !== 'string') return '';
    // Remove any potentially problematic characters while preserving content
    return value.trim().replace(/[\x00-\x1F\x7F]/g, ''); // Remove control characters
  };

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_Lorvens2025';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'template_contact';

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched - use for...of for better performance
    const newTouched = {};
    for (const field of Object.keys(touched)) {
      newTouched[field] = true;
    }
    setTouched(newTouched);
    
    // Validate form
    const isValid = validateForm();
    if (!isValid) {
      setFormError("Please correct the errors in the form.");
      setTimeout(() => setFormError(null), 5000);
      return;
    }

    setLoading(true);
    setSuccess(false);
    setFormError(null);

    // Sanitize all inputs before submission
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message)
    };

    // Submit to EmailJS
    try {
      // Prepare template parameters for EmailJS
      // Note: Variable names must match your EmailJS template placeholders
      const templateParams = {
        name: sanitizedData.name,
        email: sanitizedData.email,
        phone: sanitizedData.phone,
        subject: sanitizedData.subject,
        message: sanitizedData.message,
        // For auto-reply (if configured separately)
        user_name: sanitizedData.name,
        user_email: sanitizedData.email
      };

      // Send email using EmailJS with timeout
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timeout')), 15000);
      });

      const emailPromise = emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      // Race between email send and timeout
      await Promise.race([emailPromise, timeoutPromise]);

      // EmailJS returns { status: 200, text: 'OK' } on success
      setSuccess(true);
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setTouched({
        name: false,
        email: false,
        phone: false,
        subject: false,
        message: false
      });
      setErrors({});
    } catch (err) {
      console.error("❌ Error submitting contact form:", err);
      
      let errorMessage = "Failed to send message. ";
      
      if (err.message === 'Request timeout') {
        errorMessage += "Request timed out. Please check your connection and try again.";
      } else if (err.text) {
        // EmailJS error response
        errorMessage += err.text;
      } else if (err.message) {
        errorMessage += err.message;
      } else {
        errorMessage += "Please try again or contact us directly at yeslorvenssolutions@gmail.com";
      }
      
      setFormError(errorMessage);
      setLoading(false);
    }
  };

  return (
    <motion.div 
      className="min-h-screen md:pt-18 bg-white relative overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      ref={ref}
    >
      {/* HERO SECTION */}
      <motion.section 
        className="relative py-16 sm:py-20 lg:py-30 text-center bg-cover bg-center" 
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75')",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0"></div>
        <div className="relative z-10">
          <motion.h1 
            className="text-4xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
            variants={fadeInUp}
          >
            Join{" "}
            <span className="bg-gradient-to-r from-orange-300 to-orange-200 bg-clip-text text-transparent">
              YES LORVENS
            </span>
          </motion.h1>

          <motion.h2 
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mt-3 mb-6 drop-shadow-md"
            variants={fadeInUp}
          >
            Build Your Future with Us
          </motion.h2>

          <motion.p 
            className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed px-4 drop-shadow-sm"
            variants={fadeInUp}
          >
            At <span className="font-bold text-orange-200">YES LORVENS</span>, we
            foster a culture centered on innovation, collaboration, and
            excellence.
          </motion.p>
        </div>
      </motion.section>

      {/* CONTACT SECTION */}
      <motion.section 
        id="contact-form"
        ref={formSectionRef}
        className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16 lg:py-20 scroll-mt-20"
        variants={fadeInUp}
      >
        <div className="text-center mb-12 sm:mb-16 px-4">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3"
            variants={fadeInUp}
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-lg sm:text-xl">
            Ready to start your journey with us? Contact us anytime.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8 sm:gap-10 px-4 sm:px-6 lg:px-8">
          {/* FORM */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-100 transition-all duration-300 hover:shadow-2xl">
              <div className="mb-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 mb-4">
                  <Send className="text-white" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Send us a Message
                </h3>
                <p className="text-gray-600 mt-2">We'll get back to you within 24 hours</p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur('name')}
                        pattern="[A-Za-z\s]+"
                        title="Please enter only letters and spaces"
                        placeholder="John Doe"
                        className={`w-full px-5 py-3 text-base border rounded-xl focus:ring-2 focus:outline-none transition-all bg-white/50 backdrop-blur-sm ${
                          errors.name && touched.name
                            ? 'border-red-500 focus:ring-red-200 focus:border-red-500'
                            : 'border-gray-200 focus:ring-orange-200 focus:border-orange-500'
                        }`}
                      />
                      {errors.name && touched.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>
                    <div className="relative">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur('email')}
                        placeholder="john@example.com"
                        className={`w-full px-5 py-3 text-base border rounded-xl focus:ring-2 focus:outline-none transition-all bg-white/50 backdrop-blur-sm ${
                          errors.email && touched.email
                            ? 'border-red-500 focus:ring-red-200 focus:border-red-500'
                            : 'border-gray-200 focus:ring-orange-200 focus:border-orange-500'
                        }`}
                      />
                      {errors.email && touched.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur('phone')}
                      placeholder="+91 9876543210"
                      className={`w-full px-5 py-3 text-base border rounded-xl focus:ring-2 focus:outline-none transition-all bg-white/50 backdrop-blur-sm ${
                        errors.phone && touched.phone
                          ? 'border-red-500 focus:ring-red-200 focus:border-red-500'
                          : 'border-gray-200 focus:ring-orange-200 focus:border-orange-500'
                      }`}
                    />
                    {errors.phone && touched.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  <div className="relative">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur('subject')}
                      placeholder="How can we help you?"
                      className={`w-full px-5 py-3 text-base border rounded-xl focus:ring-2 focus:outline-none transition-all bg-white/50 backdrop-blur-sm ${
                        errors.subject && touched.subject
                          ? 'border-red-500 focus:ring-red-200 focus:border-red-500'
                          : 'border-gray-200 focus:ring-orange-200 focus:border-orange-500'
                      }`}
                    />
                    {errors.subject && touched.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                    )}
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur('message')}
                      placeholder="Tell us more about your project..."
                      className={`w-full px-5 py-3 text-base border rounded-xl resize-none focus:ring-2 focus:outline-none transition-all bg-white/50 backdrop-blur-sm ${
                        errors.message && touched.message
                          ? 'border-red-500 focus:ring-red-200 focus:border-red-500'
                          : 'border-gray-200 focus:ring-orange-200 focus:border-orange-500'
                      }`}
                      rows="5"
                    ></textarea>
                    {errors.message && touched.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 px-6 rounded-xl font-semibold shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 text-lg flex items-center justify-center gap-3 group"
                    aria-label={loading ? "Sending message" : "Submit contact form"}
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-6 space-y-4">
                {formError && (
                  <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <div className="flex items-center gap-3">
                      <svg className="h-5 w-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm font-medium text-red-800">{formError}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CONTACT CARDS */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50">
                    <Mail size={24} className="text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
                </div>
                <div className="space-y-1 text-gray-600 flex-grow">
                  <a 
                    href="mailto:yeslorvenssolutions@gmail.com"
                    onClick={(e) => {
                      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                      if (!isMobile) {
                        e.preventDefault();
                        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=yeslorvenssolutions@gmail.com', '_blank');
                      }
                    }}
                    className="block hover:text-orange-600 transition-colors font-medium cursor-pointer"
                  >
                    yeslorvenssolutions@gmail.com
                  </a>
                  <p className="text-sm text-gray-600 mt-2">Connect with our team for any inquiries</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50">
                    <Phone size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
                </div>
                <div className="space-y-1 text-gray-600">
                  <a href="tel:+917013814030" className="block hover:text-blue-600 transition-colors font-medium">
                    +91 7013814030
                  </a>
                  <a href="tel:+914031985921" className="block hover:text-blue-600 transition-colors font-medium">
                    +91 4031985921
                  </a>
                  <p className="text-sm text-gray-600 mt-2">Available Mon-Fri, 9AM-6PM</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-100 to-green-50">
                    <MapPin size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Visit Us</h3>
                </div>
                <div className="space-y-1 text-gray-600">
                  <p className="font-medium">YES LORVENS SOLUTIONS PVT LTD</p>
                  <p className="text-sm">Flat No:530, ROAD NO 86</p>
                  <p className="text-sm">Jubilee Hills, Hyderabad</p>
                  <p className="text-sm">Telangana, India - 500096</p>
                  <a 
                    href="https://maps.google.com?q=YES+LORVENS+SOLUTIONS+PVT+LTD+Hyderabad" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700 mt-2 font-medium group"
                  >
                    View on Map
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Success Modal - Rendered via Portal to ensure it's always visible */}
      {mounted && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {success && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                style={{ 
                  zIndex: 100000,
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0
                }}
                onClick={handleOkClick}
              />
              
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                className="fixed inset-0 flex items-center justify-center p-4"
                style={{ 
                  zIndex: 100001,
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  pointerEvents: 'none'
                }}
              >
                <div 
                  className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center relative"
                  style={{ pointerEvents: 'auto' }}
                >
                  {/* Success Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="mx-auto mb-6 w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center"
                  >
                    <CheckCircle size={48} className="text-white" />
                  </motion.div>

                  {/* Thank You Message */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-bold text-gray-900 mb-4"
                  >
                    Thank You!
                  </motion.h2>

                  {/* We'll Get Back Message */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 text-lg mb-8 leading-relaxed"
                  >
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </motion.p>

                  {/* OK Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    onClick={handleOkClick}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                    aria-label="Go to homepage"
                  >
                    OK
                  </motion.button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.div>
  );
};

export default ContactPage;