import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send } from 'lucide-react';

const WorkTogether = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleCloseModal = () => {
    onClose();
    // Reset form state when closing
    setTimeout(() => {
      setName('');
      setEmail('');
      setSuccess(false);
      setError(null);
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name.trim() || !email.trim()) {
      setError('Please fill in all required fields.');
      setTimeout(() => setError(null), 5000);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      setTimeout(() => setError(null), 5000);
      return;
    }

    setLoading(true);
    setSuccess(false);
    setError(null);

    // Use iframe method for fast, reliable submission
    try {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = 'none';
      iframe.name = 'hidden_iframe_' + Date.now();
      document.body.appendChild(iframe);

      const tempForm = document.createElement('form');
      tempForm.method = 'POST';
      tempForm.action = 'https://formsubmit.co/harshithaborusu33@gmail.com';
      tempForm.target = iframe.name;
      tempForm.style.display = 'none';

      // Add form fields
      const fields = [
        { name: 'name', value: name.trim() },
        { name: 'email', value: email.trim() },
        { name: '_captcha', value: 'false' },
        { name: '_template', value: 'table' },
        { name: '_subject', value: 'New Contact from Work Together Form - YES LORVENS Website' },
      ];

      fields.forEach((field) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field.name;
        input.value = field.value;
        tempForm.appendChild(input);
      });

      document.body.appendChild(tempForm);
      tempForm.submit();

      // Show success immediately (iframe submission is instant)
      setSuccess(true);
      setLoading(false);
      setName('');
      setEmail('');

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
      console.error('❌ Error submitting form:', err);
      setError('Failed to send message. Please try again.');
      setLoading(false);
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
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

              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Let's Work Together
                </h2>

                {success ? (
                  <div className="py-8 text-center">
                    <CheckCircle
                      size={48}
                      className="mx-auto text-green-500 mb-4"
                    />
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 text-left mb-1"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 text-left mb-1"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                      />
                    </div>

                    {error && (
                      <div className="text-red-500 text-sm text-center">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="inline" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WorkTogether;