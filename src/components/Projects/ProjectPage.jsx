import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Project images - Optimized with Cloudinary transformations for better performance
const school = "https://res.cloudinary.com/durbtkhbz/image/upload/v1765349313/edureachweb_rbcuwg.png"
const lumiere1 = "https://res.cloudinary.com/durbtkhbz/image/upload/w_800,f_auto,q_auto/v1765169181/ChatGPT_Image_Dec_8_2025_10_15_15_AM_ghors1.png"
const smiles1="https://res.cloudinary.com/durbtkhbz/image/upload/w_800,f_auto,q_auto/v1765169442/ChatGPT_Image_Dec_8_2025_10_20_32_AM_e1ot2u.png"
const slim1="https://res.cloudinary.com/durbtkhbz/image/upload/w_800,f_auto,q_auto/v1765169560/ChatGPT_Image_Dec_8_2025_10_22_29_AM_q09vhf.png"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  }
};

// Projects Data
const projects = [
  {
    id: 1,
    title: "Sasha Slimming",
    subtitle: "Slimming Care Clinic Website",
    description: "A modern, responsive website for Sasha Slimming Care Clinic showcasing their weight loss programs, treatments, and success stories. Features include online consultations, program booking, progress tracking, and a blog section.",
    images: [slim1],
    category: "Web Development",
    color: "from-purple-500 to-pink-600",
    link: "https://sashaslimming.com/"
  },
  {
    id: 3,
    title: "Edu Reach",
    subtitle: "Smart Learning Environment",
    description: "A comprehensive educational platform serving over 5,000+ students and 200+ faculty members. The system features automated attendance tracking, grade management, assignment submission, and real-time communication tools. Our solution reduced administrative workload by 60% and improved parent-teacher engagement by 75% through its intuitive interface and mobile responsiveness.",
    images: [school],
    category: "App Development",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    title: "Lumiere Luxe",
    subtitle: "Premium Salon Booking Platform",
    description: "A sophisticated online booking system designed exclusively for high-end salons, providing seamless appointment scheduling, service management, and client relationship tools. The platform features real-time availability, automated reminders, and a personalized client portal. Our solution increased booking conversions by 65% and reduced no-shows by 50% through smart notifications and a user-friendly interface.",
    images: [lumiere1],
    category: "Web Development",
    color: "from-rose-500 to-pink-600",
    link: "https://lumiereluxe.in/"
  },
  {
    id: 6,
    title: "Sasha Smiles",
    subtitle: "Dental Clinic Booking System",
    description: "A comprehensive online booking system for Sasha Smiles Dental Clinic, featuring appointment scheduling, service catalog, dentist profiles, and patient management. The platform includes automated reminders, secure payment processing, and a patient portal for managing appointments.",
    images: [smiles1],
    category: "Web Development",
    color: "from-blue-500 to-cyan-600",
    link: "https://sashasmiles.com/"
  }
];


// 🎴 Enhanced Project Card - Performance Optimized
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  const hasImages = project.images?.length > 0;

  return (
    <motion.div
      ref={cardRef}
      className={`relative group mb-14 lg:mb-18`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      style={{ cursor: project.link ? 'pointer' : 'default' }}
      onClick={() => project.link && window.open(project.link, '_blank', 'noopener,noreferrer')}
    >
      <div
        className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-[1.01] flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
      >
        {/* Enhanced Image Section */}
        <div className="lg:w-1/2 relative group flex items-center justify-center">
          <div className="relative w-full h-58 sm:h-64 lg:h-96 overflow-hidden">
            {/* Static image */}
            {hasImages ? (
              <img
                src={project.images[0]}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-contain mx-auto"
                style={{ maxWidth: '90%', maxHeight: '90%', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No images available</span>
              </div>
            )}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Enhanced Content Section */}
        <div className="lg:w-1/2 p-4 sm:p-5 lg:p-6 flex flex-col justify-center relative">

          {/* Category Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-3"
          >
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-orange-500 text-white">
              {project.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-4"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-blue-600 font-medium text-sm sm:text-base">
              {project.subtitle}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-gray-600 mb-4 leading-relaxed text-xs sm:text-sm line-clamp-3"
          >
            {project.description}
          </motion.p>

          {/* Project Details with enhanced icons */}

          {/* Technologies - Unrolled for Performance */}
          {project.technologies && project.technologies.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mb-3"
            >
              <div className="flex flex-wrap gap-2">
                {project.technologies?.slice(0, 4).map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Marquee Component for horizontal scrolling text
const Marquee = ({ items, speed = 100, className = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="flex w-max">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="flex whitespace-nowrap items-center"
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              duration: speed * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {items.map((item, idx) => (
              <div key={idx}>
                <span className="text-xl md:text-2xl font-bold text-orange-500 px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 backdrop-blur-sm rounded-full shadow-md mx-2 cursor-default">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ProjectsPage = () => {

  // Scroll to top when component mounts - batched to avoid forced reflow
  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden md:pt-18 bg-orange-50">
      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center px-6 lg:px-12 overflow-hidden"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/durbtkhbz/image/upload/v1765295034/ChatGPT_Image_Dec_9_2025_09_13_25_PM_ttpeiz.png')",
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
            className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-bold text-orange-100 mb-4"
          >
            Our Projects
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-normal text-orange-100 max-w-2xl mx-auto"
          >
            Discover the innovative solutions we've crafted with Passion & Technology.
          </motion.h2>
        </motion.div>
      </section>

      {/* Enhanced Projects Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Enhanced CTA Section with Parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-20 lg:py-24 overflow-hidden"
      >


        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="inline-block mb-6"
            >
              <Target size={48} className="text-orange-500 mx-auto" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Ready to Start Your
              <motion.span
                className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {" "}Dream Project?
              </motion.span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can bring your vision to life with
              cutting-edge technology and innovative strategies that drive real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact#contact-form">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 
                           rounded-xl font-bold text-lg flex items-center group 
                           transition-all cursor-pointer"
                >

                  Start Your Project
                  <ArrowRight
                    size={20}
                    className="ml-3 group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
