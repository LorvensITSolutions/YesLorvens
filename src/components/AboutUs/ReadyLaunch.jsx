import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReadyLaunch = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const scaleVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    show: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact#contact-form');
  };

  const handleViewWork = () => {
    navigate('/projects');
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="relative overflow-hidden bg-white px-4 py-16 md:px-12"
    >
      <div className="pointer-events-none absolute -left-12 top-8 h-44 w-44 rounded-full bg-orange-100/55 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-2 h-56 w-56 rounded-full bg-slate-200/45 blur-3xl" />
      <div className="max-w-7xl mx-auto text-center">

        <motion.h2 
          variants={item}
          className="text-3xl md:text-5xl font-bold text-orange-500 mb-6"
        >
          Ready to Launch Your Vision?
        </motion.h2>
       
        <motion.p 
          variants={item}
          className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
        >
          Join the growing list of startups and businesses that trust us to bring their ideas to life. Let's build something amazing together.
        </motion.p>
        <motion.div 
          variants={staggerContainer}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button 
            onClick={handleGetStarted}
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-3 font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-orange-200/70"
          >
            Get Started <ArrowRight size={18} className="inline" />
          </motion.button>
          <motion.button 
            onClick={handleViewWork}
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer rounded-full border-2 border-orange-500 px-8 py-3 font-medium text-orange-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-50"
          >
            View Our Work
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ReadyLaunch;