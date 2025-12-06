import React from 'react';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <>
      <section 
        className="relative min-h-[60vh] flex items-center justify-center px-6 lg:px-12 overflow-hidden"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/durbtkhbz/image/upload/v1764936823/ChatGPT_Image_Dec_5_2025_05_43_26_PM_pjzpe6.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div 
          className="relative z-10 text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-orange-100 mb-4"
          >
            About Us
          </motion.h1>
          <motion.h2 
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-normal text-orange-100 max-w-2xl mx-auto"
          >
            We turn ideas into powerful, user-friendly digital experiences.
          </motion.h2>
        </motion.div>
      </section>
      
      {/* Content Section */}
      <section className="pt-8 pb-12 md:pt-10 md:pb-8 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-600 max-w-6xl mx-auto">
              We are a passionate team of innovators, designers, and developers dedicated to creating exceptional digital experiences. 
              With a focus on quality and user-centric design, we help businesses transform their ideas into reality through cutting-edge 
              technology and creative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Our Mission",
                description: "To empower businesses through innovative digital solutions that drive growth and create meaningful connections with their audience.",
                icon: (
                  <svg className="w-12 h-12 text-orange-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Our Vision",
                description: "To be the catalyst for digital transformation, helping businesses thrive in an increasingly connected world.",
                icon: (
                  <svg className="w-12 h-12 text-orange-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )
              },
              {
                title: "Our Approach",
                description: "We combine creativity with technical expertise to deliver solutions that are not only beautiful but also functional and scalable.",
                icon: (
                  <svg className="w-12 h-12 text-orange-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-orange-20 to-orange-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-orange-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-center">
                  {item.icon}
                  <h3 className="text-2xl text-gray-600 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;