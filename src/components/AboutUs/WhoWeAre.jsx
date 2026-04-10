import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const WhoWeAre = () => {
  const reduceMotion = useReducedMotion();

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
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 pb-10 pt-20 lg:min-h-[min(60vh,36rem)] lg:px-12 lg:pb-12 lg:pt-22">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <motion.div
            className="order-2 text-center lg:order-1 lg:pl-8 lg:text-left"
            variants={fadeInUp}
            initial="hidden"
            animate="show"
          >
        
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              About{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Us
              </span>
            </motion.h1>
            <motion.h2
              variants={fadeInUp}
              transition={{ delay: 0.15 }}
              className="mx-auto mt-4 max-w-xl text-base font-normal leading-relaxed text-slate-200 sm:text-lg lg:mx-0 lg:max-w-lg lg:text-xl"
            >
              We turn ideas into powerful, user-friendly digital experiences.
            </motion.h2>
        
          </motion.div>

          <motion.div
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="pointer-events-none absolute -inset-4 rounded-full bg-gradient-to-br from-orange-300/25 via-transparent to-sky-300/20 blur-2xl" />
              <motion.div
                className="relative mx-auto h-68 w-68 overflow-hidden rounded-full border-4 border-orange-100/90 bg-white/90 p-2 shadow-xl ring-1 ring-white backdrop-blur-sm sm:h-76 sm:w-76 lg:h-84 lg:w-84"
                animate={reduceMotion ? { y: 0 } : { y: [0, -5, 0] }}
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 6, repeat: Infinity, ease: 'easeInOut' }
                }
              >
                <img
                  src="/about-hero.png"
                  alt="Illustration of a developer building digital products"
                  className="h-full w-full rounded-full object-cover"
                  width={640}
                  height={480}
                  loading="eager"
                  decoding="async"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
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