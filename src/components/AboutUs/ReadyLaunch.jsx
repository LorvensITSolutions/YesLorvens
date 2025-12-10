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
    navigate('/contact');
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
      className="py-16 px-4 md:px-12 bg-white"
    >
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
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 cursor-pointer"
          >
            Get Started <ArrowRight size={18} className="inline" />
          </motion.button>
          <motion.button 
            onClick={handleViewWork}
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-full font-medium cursor-pointer"
          >
            View Our Work
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ReadyLaunch;