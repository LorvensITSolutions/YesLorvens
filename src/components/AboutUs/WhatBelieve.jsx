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
    <section className="relative overflow-hidden bg-white px-4 py-14 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="relative z-10 mb-12 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mb-4">
            Our Core Beliefs
          </h2>
          <motion.p 
            className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            At the heart of everything we do are the fundamental principles that guide our decisions and shape our work.
          </motion.p>
        </motion.div>

        <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:items-stretch md:gap-6">
          {coreBeliefs.map((belief, index) => (
            <motion.div
              key={belief.title}
                className="group rounded-2xl border border-orange-100/80 bg-white/95 p-6 shadow-sm ring-1 ring-white transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.25 + index * 0.1 }}
            >
              <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-orange-300 to-orange-500" />
              <h3 className="mb-3 text-xl font-semibold text-gray-700">
                {belief.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
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