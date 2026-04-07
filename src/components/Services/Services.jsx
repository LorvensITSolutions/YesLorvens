// React import not needed in React 17+
import { Link } from "react-router-dom";
import { ArrowRight, Eye, Shield, CheckCircle2, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";

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
                <span className="mx-2 cursor-default rounded-full bg-gradient-to-r from-orange-50 to-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-600 md:text-base">
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

// Animation variants
const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};



const services = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Create dynamic web experiences using the latest technologies",
    fullDetails: "We build modern, fast, and secure web applications tailored to your business needs. From responsive design to progressive web apps, our solutions are built to perform and scale.",
    gradient: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50",
    image: "https://res.cloudinary.com/durbtkhbz/image/upload/v1765360081/web_tn9lbm.png",
    features: ["Responsive Design", "Progressive Web Apps", "E-commerce Integration", "Performance Optimization"],
  },
  {
    id: "mobile-development", 
    title: "Mobile App Development",
    description: "Transform your ideas into powerful mobile experiences",
    fullDetails: "Our team develops native and cross-platform mobile apps with excellent performance and intuitive user interfaces. Perfect for iOS and Android.",
    gradient: "from-purple-500 to-indigo-600",
    bgGradient: "from-purple-50 to-indigo-50",
    image: "https://res.cloudinary.com/durbtkhbz/image/upload/v1765297568/ChatGPT_Image_Dec_9_2025_09_55_55_PM_pftijw.png",
    features: ["Native iOS & Android", "Cross-Platform Solutions", "App Store Optimization", "Push Notifications"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Amplify your brand's reach with data-driven strategies",
    fullDetails: "We create targeted digital marketing campaigns including SEO, content marketing, and paid ads to boost your online visibility and conversions.",
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
    image: "https://res.cloudinary.com/durbtkhbz/image/upload/v1765359692/digital_jh5xll.png",
    features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
  },
  {
    id: "ai-ml-integration",
    title: "AI/ML Integrations", 
    description: "Leverage artificial intelligence to drive insights and automation",
    fullDetails: "We integrate AI and Machine Learning solutions into your products to automate processes, analyze data, and provide predictive insights for smarter business decisions.",
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50 to-red-50",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Designing",
    description: "Design intuitive and engaging interfaces for users",
    fullDetails: "Our UI/UX design team creates visually appealing, user-friendly designs that enhance user experience and drive engagement.",
    gradient: "from-pink-500 to-rose-600",
    bgGradient: "from-pink-50 to-rose-50",
    image: "https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"],
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    description: "Ensure your software meets the highest quality standards",
    fullDetails: "Our QA team implements rigorous testing methodologies to identify and resolve issues before they reach your users. We ensure your software is reliable, secure, and performs flawlessly across all platforms.",
    gradient: "from-indigo-500 to-blue-600",
    bgGradient: "from-indigo-50 to-blue-50",
    image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: ["Manual Testing", "Automated Testing", "Performance Testing", "Security Testing"],
  },
];

// Hero Section
const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[80vh]  flex items-center justify-center px-6 md:pt-18 lg:px-12 overflow-hidden"
      style={{
        backgroundImage: 'url(https://res.cloudinary.com/durbtkhbz/image/upload/v1765961834/services_hn8yql.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-slate-950/52"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-900/30 to-slate-950/65" />

      <motion.div
        className="relative z-10 text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >

    
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-4xl lg:text-6xl font-bold text-orange-100 mb-4"
        >
          Our Services
        </motion.h1>
        <motion.h2
          variants={fadeInUp}
          className="text-xl md:text-2xl font-normal text-orange-100 max-w-2xl mx-auto"
        >
          We provide a range of cutting-edge solutions designed to help your business grow and thrive in the digital landscape.
        </motion.h2>
      </motion.div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ service, index }) => {
  return (
    <motion.div 
      className="group relative h-full"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-orange-100/80 bg-white/95 shadow-sm ring-1 ring-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl" style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}>
        {/* Image Section */}
        <div className="relative h-56 overflow-hidden sm:h-64">
          <motion.img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-7">
          <motion.h3 
            className="mb-2 text-xl font-bold text-gray-700 sm:text-2xl"
          
            transition={{ duration: 0.3 }}
          >
            {service.title}
          </motion.h3>

          <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            {service.description}
          </p>

          {/* Features List */}
          <div className="mb-4 flex-1">
            <div className="grid grid-cols-2 gap-2.5">
              {service.features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-center gap-2 rounded-lg border border-orange-100/80 bg-orange-50/50 px-2.5 py-1.5 text-xs text-gray-600"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-orange-500" />
                  <span className="truncate">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-auto pt-2">
            <Link to={`/service/${service.id}`} className="block w-full">
              <motion.button 
                className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-3.5 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-200/70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`Explore ${service.title} solution`}
              >
                <span>Explore Solution</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced Why Choose Us Section
const WhyChooseUsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  const reasons = [
    {
      title: "Proven Expertise",
      description: "Years of experience delivering world-class solutions",
      bgColor: "bg-blue-500",
    },
    {
      title: "Fast Delivery",
      description: "Quick turnaround without compromising on quality",
      bgColor: "bg-orange-500",
    },
    {
      title: "Dedicated Support",
      description: "24/7 support and maintenance for peace of mind",
      bgColor: "bg-green-500"
    },
    {
      title: "Global Standards",
      description: "International quality standards and best practices",
      bgColor: "bg-purple-500"
    }
  ];

  return (
    <motion.section 
      className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/20 to-white px-6 py-20 text-gray-800 lg:px-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ touchAction: 'pan-y', WebkitOverflowScrolling: 'touch' }}
    >
      <div className="pointer-events-none absolute -left-16 top-12 h-52 w-52 rounded-full bg-orange-100/55 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 text-center md:mb-16">
      
          <motion.h2 
            className="mb-4 text-4xl font-black text-orange-500 sm:text-5xl lg:text-5xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Excellence Delivered
          </motion.h2>
          
          <motion.p 
            className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 sm:text-xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            We combine innovation with expertise to deliver exceptional results that drive your business forward
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="group rounded-2xl border border-orange-100/80 bg-white/95 p-6 text-center shadow-sm ring-1 ring-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md lg:p-7"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-700">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <motion.section 
      className="relative overflow-hidden bg-white px-6 py-24 lg:px-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ touchAction: 'pan-y', WebkitOverflowScrolling: 'touch' }}
    >
      <div className="pointer-events-none absolute -left-14 top-8 h-44 w-44 rounded-full bg-orange-100/55 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-4 h-48 w-48 rounded-full bg-slate-200/45 blur-3xl" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
  
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-5xl font-black mb-6 text-orange-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Ready to Start Your Project?
        </motion.h2>

        <motion.p 
          className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Let's transform your ideas into digital reality. Get in touch with us today to discuss how we can help bring your vision to life.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Link to="/contact#contact-form" className="w-full sm:w-auto">
            <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer" aria-label="Get started with our services cursor-pointer">
              <span>Get Started Today</span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>
          </Link>
          
          <Link to="/projects" className="w-full sm:w-auto">
            <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-transparent border-2 border-orange-500 text-orange-500 text-xs sm:text-sm hover:bg-orange-50 font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer" aria-label="View our portfolio and projects ">
              <Eye className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>View Our Work</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Services = () => {
  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      <HeroSection />

      {/* Services Marquee */}
      <div className="border-y border-gray-100 bg-white/90 py-6">
        <Marquee 
          items={services.map(s => s.title)} 
          speed={100} 
          className="py-3" 
        />
      </div>

      {/* Services Grid Section */}
      <motion.section 
        className="relative overflow-hidden px-4 pb-8 pt-12 sm:px-6 lg:px-20"
        style={{ touchAction: 'pan-y', WebkitOverflowScrolling: 'touch' }}
      >
        <div className="pointer-events-none absolute -left-16 top-8 h-52 w-52 rounded-full bg-orange-100/55 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-slate-200/45 blur-3xl" />
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {/* Section Header */}
          <motion.div 
            className="mb-10 text-center md:mb-12"
            variants={fadeInUp}
          >
            <motion.h2 
              className="mb-4 text-3xl font-black text-orange-500 sm:text-5xl lg:text-5xl"
              variants={fadeInUp}
            >
              Service Portfolio
            </motion.h2>      
            <motion.p 
              className="mx-auto max-w-4xl text-base text-gray-600 sm:text-lg"
              variants={fadeInUp}
            >
              Comprehensive digital solutions designed to accelerate your business growth
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          >
            {services.map((service, index) => (
              <div key={service.id}>
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      <div className="-mt-4">
        <WhyChooseUsSection />
      </div>
      <div className="-mt-18">
      <CTASection />
      </div>
    </motion.div>
  );
};

export default Services;