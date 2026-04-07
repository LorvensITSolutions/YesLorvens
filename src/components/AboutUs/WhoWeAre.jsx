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
        className="relative flex min-h-[62vh] items-center justify-center overflow-hidden px-6 pt-20 lg:min-h-[66vh] lg:px-12"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/durbtkhbz/image/upload/v1764936823/ChatGPT_Image_Dec_5_2025_05_43_26_PM_pjzpe6.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-950/55"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-900/30 to-slate-950/70" />

        <motion.div 
          className="relative z-10 text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            variants={fadeInUp}
            className="mb-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            About Us
          </motion.h1>
          <motion.h2 
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg font-normal leading-relaxed text-slate-100 sm:text-2xl"
          >
            We turn ideas into powerful, user-friendly digital experiences.
          </motion.h2>
        </motion.div>
      </section>
      
      {/* Content Section */}
      <section className="relative overflow-hidden bg-white px-4 pb-12 pt-8 sm:px-6 md:px-10 md:pb-10 md:pt-10 lg:px-12">
        <div className="pointer-events-none absolute -left-16 top-8 h-44 w-44 rounded-full bg-orange-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-4 h-52 w-52 rounded-full bg-slate-200/45 blur-3xl" />
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="relative z-10 -mt-8 mb-10 text-center md:-mt-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto mt-6 max-w-5xl rounded-2xl border border-orange-100/80 bg-white/95 px-4 py-6 shadow-lg ring-1 ring-white backdrop-blur-sm sm:px-8">
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                We are a passionate team of innovators, designers, and developers dedicated to creating exceptional digital experiences. 
                With a focus on quality and user-centric design, we help businesses transform their ideas into reality through cutting-edge 
                technology and creative solutions.
              </p>
            </div>
          </motion.div>

          <div className="relative z-10 mt-8 md:mt-10">
            <div className="pointer-events-none absolute bottom-4 left-1/2 top-4 hidden w-px -translate-x-1/2 bg-gradient-to-b from-orange-200 via-orange-300/70 to-orange-200 md:block" />
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
                className={`relative mb-5 md:mb-6 md:grid md:grid-cols-2 md:items-center ${
                  index % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={`group relative overflow-hidden rounded-2xl border border-orange-100/80 bg-white/95 p-6 shadow-sm ring-1 ring-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md md:p-7 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 opacity-70" />
                  <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-orange-100/70 blur-2xl transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="flex items-start gap-4">
                    <div className="inline-flex rounded-xl bg-orange-50 p-2.5">
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="mb-2 text-xl font-semibold text-gray-700 md:text-2xl">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-600 md:text-base">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-orange-300 bg-white md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;