import React from 'react';
import { motion } from 'framer-motion';

const WhatBelieve = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const coreBeliefs = [
    {
      title: "Innovation is a Mindset",
      description: "We don't just follow trends - we create them. Our team thrives on pushing boundaries and exploring uncharted territories in technology and design."
    },
    {
      title: "User-Centric Approach",
      description: "Every line of code we write and every design decision we make is driven by the needs and experiences of the people who will use our products."
    },
    {
      title: "Simplicity is Sophistication",
      description: "We believe in the power of simplicity. Our solutions are elegant, intuitive, and focused on delivering maximum value with minimal complexity."
    }
  ];

  return (
    <section className="py-14 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mb-4">
            Our Core Beliefs
          </h2>
          
          <motion.div 
            className="w-32 h-1 mx-auto bg-orange-500 mb-6 rounded-full"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          />

          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            At the heart of everything we do are the fundamental principles that guide our decisions and shape our work.
          </motion.p><br />

          <h2 className="text-2xl md:text-2xl font-semibold text-orange-500 mb-4">
            Technology + Creativity + Purpose
          </h2>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreBeliefs.map((belief, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from orange-20 to-orange-50 p-6 rounded-2xl border border-orange-100"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (index * 0.1) }}
            >
              <h3 className="text-xl font-semibold text-gray-600 mb-3">
                {belief.title}
              </h3>
              <p className="text-gray-500">
                {belief.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatBelieve;