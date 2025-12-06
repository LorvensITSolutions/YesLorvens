// ContactPage.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  Globe,
  MessageCircle,
  Send,
} from "lucide-react";

// -----------------------------------------
// ContactInfoCard
// -----------------------------------------
const ContactInfoCard = ({ icon: Icon, title, info, gradient }) => {
  const safeInfo = String(info || "");

  const isEmail = safeInfo.includes("@");
  const isPhone = safeInfo.includes("+91");
  const isLocation = !isEmail && !isPhone;

  const lines = safeInfo.split("\n").filter(Boolean);
  const email = isEmail ? lines[0] : null;
  const phones = isPhone ? lines.slice(0, 2) : [];
  const location = isLocation ? safeInfo : null;
  const description = lines[2] || null;

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-orange-100 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${gradient}`}>
          <Icon size={28} className="text-white" />
        </div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>

      <div className="text-gray-700 leading-relaxed space-y-1">
        {email && (
          <a
            href={`mailto:${email}`}
            className="font-semibold hover:text-[#FFA559] cursor-pointer transition-all duration-300 block"
          >
            {email}
          </a>
        )}

        {phones[0] && (
          <a
            href={`tel:${phones[0]}`}
            className="font-semibold hover:text-[#FFA559] cursor-pointer transition-all duration-300 block"
          >
            {phones[0]}
          </a>
        )}
        {phones[1] && (
          <a
            href={`tel:${phones[1]}`}
            className="font-semibold hover:text-[#FFA559] cursor-pointer transition-all duration-300 block"
          >
            {phones[1]}
          </a>
        )}

        {location && !email && !isPhone && (
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(location)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-[#FFA559] cursor-pointer transition-all duration-300 block"
          >
            {location}
          </a>
        )}

        {description && <p className="text-gray-600">{description}</p>}
      </div>
    </div>
  );
};

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError("Please fill in all required fields.");
      setTimeout(() => setError(null), 5000);
      return;
    }

    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      // Use iframe method for reliable submission (avoids CORS and timeout issues)
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.style.width = "0";
      iframe.style.height = "0";
      iframe.style.border = "none";
      iframe.name = "hidden_iframe_" + Date.now();
      document.body.appendChild(iframe);

      // Create a temporary form to submit via iframe
      const form = e.target;
      const tempForm = document.createElement("form");
      tempForm.method = "POST";
      tempForm.action = "https://formsubmit.co/bhanu.rupa2003@gmail.com";
      tempForm.target = iframe.name;
      tempForm.style.display = "none";

      // Copy all form data including hidden inputs
      const formData = new FormData(form);
      for (const [key, value] of formData.entries()) {
        if (key === "_next") continue;

        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        tempForm.appendChild(input);
      }

      document.body.appendChild(tempForm);
      tempForm.submit();

      // Show success message immediately (iframe submission is reliable)
      setSuccess(true);
      setLoading(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      // Clean up after submission
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
      console.error("❌ Error submitting contact form:", err);
      setError("Failed to send message. Please try again.");
      setLoading(false);

      // Hide error message after 5 seconds
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-white relative overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      ref={ref}
    >
      {/* HERO SECTION */}
      <motion.section 
        className="relative py-16 sm:py-20 lg:py-30 text-center bg-cover bg-center" 
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
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
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/30 to-orange-600/40"></div>
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
        className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16 lg:py-20"
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
                <p className="text-gray-500 mt-2">We'll get back to you within 24 hours</p>
              </div>

              <form
                action="https://formsubmit.co/bhanu.rupa2003@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Contact Form Submission from YES LORVENS Website"
                />

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Name</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        required
                        className="w-full px-5 py-3 text-base border rounded-xl border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Email</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        required
                        className="w-full px-5 py-3 text-base border rounded-xl border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="How can we help you?"
                      required
                      className="w-full px-5 py-3 text-base border rounded-xl border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none bg-white/50 backdrop-blur-sm"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us more about your project..."
                      required
                      className="w-full px-5 py-3 text-base border rounded-xl border-gray-200 resize-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none bg-white/50 backdrop-blur-sm"
                      rows="5"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 px-6 rounded-xl font-semibold shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 text-lg flex items-center justify-center gap-3 group"
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
                {success && (
                  <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-green-800">Message sent successfully!</p>
                        <p className="text-sm text-green-700">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <div className="flex items-center gap-3">
                      <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm font-medium text-red-800">{error}</p>
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
                  <a href="mailto:yeslorvenssolutions@gmail.com" className="block hover:text-orange-600 transition-colors font-medium">
                    yeslorvenssolutions@gmail.com
                  </a>
                  <p className="text-sm text-gray-500 mt-2">Connect with our team for any inquiries</p>
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
                  <p className="text-sm text-gray-500 mt-2">Available Mon-Fri, 9AM-6PM</p>
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
    </motion.div>
  );
};

export default ContactPage;
