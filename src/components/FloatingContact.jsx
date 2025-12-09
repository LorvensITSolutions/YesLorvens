import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Mail, Phone, MessageSquare } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside both the menu and the button
      if (
        isOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      // Add event listener when menu is open
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const handleEmailClick = (e) => {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile devices, use mailto:
      window.location.href = 'mailto:yeslorvenssolutions@gmail.com';
    } else {
      // For desktop, open Gmail compose in a new tab
      const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=yeslorvenssolutions@gmail.com';
      window.open(gmailUrl, '_blank');
    }
    
    setIsOpen(false);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email Us',
      onClick: handleEmailClick,
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Call Us',
      href: 'tel:7013814030',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: 'WhatsApp',
      href: 'https://wa.me/7013814030',
      color: 'bg-green-500 hover:bg-green-600'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl p-4 w-48 space-y-2 z-[10000] border border-gray-200"
            style={{ isolation: 'isolate' }}
          >
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Contact Us</h3>
            {contactMethods.map((method, index) => (
              method.onClick ? (
                <button
                  key={index}
                  onClick={method.onClick}
                  className={`w-full flex items-center px-3 py-2 text-sm text-white rounded-lg transition-colors ${method.color}`}
                >
                  <span className="mr-2">{method.icon}</span>
                  {method.label}
                </button>
              ) : (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-3 py-2 text-sm text-white rounded-lg transition-colors ${method.color}`}
                >
                  <span className="mr-2">{method.icon}</span>
                  {method.label}
                </a>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        ref={buttonRef}
        onClick={toggleMenu}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white relative z-[10001] ${
          isOpen ? 'bg-orange-600' : 'bg-orange-500 hover:bg-orange-600'
        } transition-colors`}
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
};

export default FloatingContact;
