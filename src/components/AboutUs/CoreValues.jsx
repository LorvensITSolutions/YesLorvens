import React from 'react';
import { motion } from 'framer-motion';

const CoreValues = () => {
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

  const features = [
    {
      title: "Innovation",
      desc: "Pioneering tomorrow's technology today. We don't just follow trends—we create them."
    },
    {
      title: "Expertise",
      desc: "Deep technical knowledge meets creative problem-solving across every project we undertake."
    },
    {
      title: "Collaboration",
      desc: "Your vision + Our expertise = Extraordinary results. We're partners, not just providers."
    },
    {
      title: "Reliability",
      desc: "Consistent delivery, transparent communication, and unwavering support you can count on."
    },
    {
      title: "Future-Ready",
      desc: "Scalable solutions built for growth, designed to evolve with your business needs."
    },
    {
      title: "Excellence",
      desc: "Uncompromising quality in every aspect of our work, from concept to delivery."
    }
  ];

  return (
    <section className="py-8 px-4 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mb-3">
            Our Core Values
          </h2>
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-32 h-1 mx-auto bg-orange-500 mt-3 rounded-full"
          />
          <motion.p 
            className="text-base text-gray-500 max-w-2xl mx-auto mt-4"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            The principles that shape every decision, guide every interaction, and drive every innovation
          </motion.p>
        </div>

        {/* First Row: Image Left, 3 Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
          {/* Left Side - Image */}
          <motion.div 
            className="relative rounded-xl overflow-hidden shadow-md h-64 lg:h-80"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <img 
              src="https://res.cloudinary.com/durbtkhbz/image/upload/v1764936823/ChatGPT_Image_Dec_5_2025_05_43_26_PM_pjzpe6.png" 
              alt="Our Team"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Side - 3 Cards */}
          <div className="space-y-4">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={`top-${index}`}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.1 + (index * 0.1) }}
                className="bg-gray-50 p-4 rounded-lg shadow-sm border border-orange-100"
              >
                <h3 className="text-lg font-semibold text-gray-600 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Second Row: 3 Cards Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - 3 Cards */}
          <div className="space-y-4 order-2 lg:order-1">
            {features.slice(3, 6).map((feature, index) => (
              <motion.div
                key={`bottom-${index}`}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.1 + (index * 0.1) }}
                className="bg-gray-50 p-4 rounded-lg shadow-sm border border-orange-100"
              >
                <h3 className="text-lg font-semibold text-gray-600 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Image */}
          <motion.div 
            className="relative rounded-xl overflow-hidden shadow-md h-64 lg:h-80 order-1 lg:order-2"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <img 
              src="https://res.cloudinary.com/durbtkhbz/image/upload/v1764936823/ChatGPT_Image_Dec_5_2025_05_43_26_PM_pjzpe6.png" 
              alt="Our Workspace"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;