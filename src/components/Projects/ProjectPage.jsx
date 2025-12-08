import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Target, Trophy } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Project images
const uiux = "https://res.cloudinary.com/durbtkhbz/image/upload/v1764843912/uiux_cyixmv.jpg"
const digital = "https://res.cloudinary.com/durbtkhbz/image/upload/v1764843903/digital_eqfadq.jpg"
const learn = "https://res.cloudinary.com/durbtkhbz/image/upload/v1764843908/learn_nmd0i2.jpg"
const school = "https://res.cloudinary.com/durbtkhbz/image/upload/v1764843912/school_wvhikn.jpg"
const qa1 = "https://res.cloudinary.com/durbtkhbz/image/upload/v1765169839/ChatGPT_Image_Dec_8_2025_10_27_11_AM_wad68l.png"
const lumiere1 = "https://res.cloudinary.com/durbtkhbz/image/upload/v1765169181/ChatGPT_Image_Dec_8_2025_10_15_15_AM_ghors1.png"
const smiles1="https://res.cloudinary.com/durbtkhbz/image/upload/v1765169442/ChatGPT_Image_Dec_8_2025_10_20_32_AM_e1ot2u.png"
const slim1="https://res.cloudinary.com/durbtkhbz/image/upload/v1765169560/ChatGPT_Image_Dec_8_2025_10_22_29_AM_q09vhf.png"

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
    impact: "75% more inquiries, 40% online bookings, 60% social engagement increase",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 2,
    title: "AI-ML Integration Platform",
    subtitle: "Intelligent Business Analytics",
    description: "A cutting-edge analytics platform that leverages advanced machine learning algorithms to transform raw data into actionable business insights. The system provides real-time predictive analytics, natural language processing capabilities, and automated decision-making tools. Our solution helped the client achieve 85% improvement in prediction accuracy and reduced manual analysis time by 70%.",
    images: [learn],
    category: "AI/ML",
    impact: "85% accuracy improvement, 70% faster analysis",
    color: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    title: "Edu Reach",
    subtitle: "Smart Learning Environment",
    description: "A comprehensive educational platform serving over 5,000+ students and 200+ faculty members. The system features automated attendance tracking, grade management, assignment submission, and real-time communication tools. Our solution reduced administrative workload by 60% and improved parent-teacher engagement by 75% through its intuitive interface and mobile responsiveness.",
    images: [school],
    category: "App Development",
    impact: "60% reduction in administrative work, 75% better engagement",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    title: "Lumiere Luxe",
    subtitle: "Premium Salon Booking Platform",
    description: "A sophisticated online booking system designed exclusively for high-end salons, providing seamless appointment scheduling, service management, and client relationship tools. The platform features real-time availability, automated reminders, and a personalized client portal. Our solution increased booking conversions by 65% and reduced no-shows by 50% through smart notifications and a user-friendly interface.",
    images: [lumiere1],
    category: "Web Development",
    impact: "65% more bookings, 50% fewer no-shows, 40% admin time saved",
    color: "from-rose-500 to-pink-600"
  },
  {
    id: 5,
    title: "Digital Marketing",
    subtitle: "Growth-Driven Strategy",
    description: "A 360-degree digital marketing campaign that delivered exceptional results for our e-commerce client. We implemented a data-driven approach combining SEO optimization, PPC advertising, social media marketing, and email automation. The campaign achieved a 400% ROI, increased organic traffic by 250%, and boosted conversion rates by 180% through A/B testing and continuous optimization.",
    images: [digital],
    category: "Digital Marketing",
    impact: "400% ROI, 250% traffic increase, 180% conversion boost",
    color: "from-pink-500 to-violet-600"
  },
  {
    id: 6,
    title: "Sasha Smiles",
    subtitle: "Dental Clinic Booking System",
    description: "A comprehensive online booking system for Sasha Smiles Dental Clinic, featuring appointment scheduling, service catalog, dentist profiles, and patient management. The platform includes automated reminders, secure payment processing, and a patient portal for managing appointments.",
    images: [smiles1],
    category: "Web Development",
    impact: "60% more bookings, 45% fewer no-shows, 50% admin time saved",
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: 7,
    title: "UI/UX Redesign",
    subtitle: "Modern User-Centered Experience",
    description: "A complete UI/UX overhaul for a financial services mobile app, focusing on enhancing user experience and accessibility. Our design process included user research, wireframing, prototyping, and usability testing. The new design improved task completion rates by 65%, reduced bounce rates by 45%, and received a 4.8/5 user satisfaction rating. The responsive design ensures seamless experience across all devices while maintaining brand consistency.",
    images: [uiux],
    category: "UI/UX Development",
    impact: "65% better task completion, 45% lower bounce rate, 4.8/5 satisfaction",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 8,
    title: "Quality Assurance Framework",
    subtitle: "Comprehensive Software Testing Solutions",
    description: "A robust QA framework implemented for a SaaS platform serving 50,000+ users. We established automated testing pipelines, performance testing protocols, and security testing measures that reduced production bugs by 80% and accelerated release cycles by 60%. The framework includes unit tests, integration tests, E2E tests, and performance benchmarks, ensuring 98% test coverage across the entire application.",
    images: [qa1],
    category: "Quality Assurance",
    impact: "98% test coverage, 80% fewer bugs, 60% faster releases",
    color: "from-indigo-500 to-blue-600"
  },

];


// 🎴 Enhanced Project Card - Performance Optimized
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  // Ensure project.images exists and has items
  const hasImages = project.images && project.images.length > 0;
  const images = hasImages ? project.images : [];

  return (
    <motion.div
      ref={cardRef}
      className={`relative group mb-14 lg:mb-18`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >

      <div
        className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-[1.01] flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
      >
        {/* Enhanced Image Section */}
        <div className="lg:w-1/2 relative group">
          <div className="relative h-58 sm:h-64 lg:h-88 overflow-hidden">
            {/* Static image */}
            {hasImages ? (
              <img
                src={images[0]} // Only show the first image
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
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
          {/* Category tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-3"
          >
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white`}>
              {project.category}
            </span>
          </motion.div>

          {/* Title with gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-4"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
              {project.title}
            </h3>
            <p className="text-orange-500 font-medium text-sm sm:text-base">
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

          {/* Impact metric */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-4 p-2 bg-gradient-to-r from-orange-50 to-orange-100 rounded-md border border-orange-200 text-xs"
          >
            <div className="flex items-center">
              <Trophy size={14} className="text-orange-500 mr-1.5" />
              <span className="text-orange-700 font-medium text-xs">
                Impact: {project.impact}
              </span>
            </div>
          </motion.div>

          {/* Project Details with enhanced icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
          >
          </motion.div>

          {/* Technologies - Unrolled for Performance */}
          {project.technologies && project.technologies.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mb-3"
            >
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + (idx * 0.1) }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium hover:shadow-md transition-all cursor-default"
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

// 🎨 Animated Filter Button
const FilterButton = ({ category, isActive, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${isActive
      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
      : "bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white/90 shadow-md"
      }`}
  >
    {isActive && (
      <motion.div
        layoutId="activeFilter"
        className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl"
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    )}
    <span className="relative z-10 text-sm sm:text-base">{category}</span>
  </motion.button>
);



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
              duration: speed * 2, // Slowed down further by doubling the duration
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {items.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="text-xl md:text-2xl font-bold text-orange-500 px-4 py-2 bg-gradient-to-r from-orange-20 to-orange-50 backdrop-blur-sm rounded-full shadow-md mx-2 cursor-default">
               {item}
                </span>
                
              </React.Fragment>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    // Also ensure document elements are at top
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
  }, []);

  // Get unique categories from projects
  const allCategories = ["All", ...new Set(projects.map(p => p.category))];
  const projectTitles = projects.map(p => p.title);

  // Filter projects based on selected category
  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen relative overflow-hidden bg-orange-50">
      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center px-6 lg:px-12 overflow-hidden"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/di4caiech/image/upload/v1764953574/project_hero_dpc5nv.jpg')",
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

      {/* Project Names Marquee */}
      <div className="py-8 bg-white/90 border-t border-b border-gray-100">
        <Marquee items={[...projectTitles, projectTitles[0]]} speed={100} className="py-3" />
      </div>

      {/* Enhanced Filter Section - Unrolled Categories */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="sticky top-40 z-30 bg-white/80 backdrop-blur-lg shadow-lg border-b border-orange-100 py-4 sm:py-6"
      >
        <div className="w-full">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 px-4 mx-auto max-w-4xl">
            {allCategories.map((category) => (
              <FilterButton
                key={category}
                category={category}
                isActive={filter === category}
                onClick={() => setFilter(category)}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Enhanced Projects Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 max-w-7xl relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <Sparkles size={48} className="text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Enhanced CTA Section with Parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-20 lg:py-24 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl"
          />
        </div>

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
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 
                           rounded-xl font-bold text-lg flex items-center group 
                           transition-all"
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
