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
                <span className="text-xl md:text-[18px] font-bold text-orange-500 px-5 py-2 bg-gradient-to-r from-orange-50 to-orange-100 backdrop-blur-sm rounded-full mx-2 cursor-default">
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

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Enhanced services data with icons and enhanced details
// Enhanced services data with icons and enhanced details
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
        backgroundImage: 'url(https://res.cloudinary.com/di4caiech/image/upload/w_1920,h_1080,f_auto,q_auto/v1764957807/service_g9f7bo.jpg)',
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
          className="text-4xl md:text-6xl font-bold text-orange-100 mb-4"
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
      <div className="relative h-full bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300" style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}>
        {/* Image Section */}
        <div className="relative overflow-hidden h-64 sm:h-72">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col flex-1">
          <motion.h3 
            className="text-2xl font-bold text-gray-600 mb-3"
          
            transition={{ duration: 0.3 }}
          >
            {service.title}
          </motion.h3>

          <p className="text-gray-500 leading-relaxed mb-4 text-sm sm:text-base">
            {service.description}
          </p>

          {/* Features List */}
          <div className="mb-4 flex-1">
            <div className="grid grid-cols-2 gap-2">
              {service.features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-center gap-2 text-xs text-gray-600"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="truncate">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-auto pt-2">
            <Link to={`/service/${service.id}`} className="block w-full">
              <motion.button 
                className="w-full py-4 px-6 bg-orange-500 text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-orange-600 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`Explore ${service.title} solution`}
              >
                <span>Explore Solution</span>
                <ArrowRight className="h-5 w-5" />
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
      className="py-20 px-6 lg:px-20 bg-white text-gray-800 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ touchAction: 'pan-y', WebkitOverflowScrolling: 'touch' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-5xl font-black mb-6 text-orange-500"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Excellence Delivered
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="text-center p-8 bg-white border border-orange-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-600">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
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
      className="py-24 px-6 lg:px-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ touchAction: 'pan-y', WebkitOverflowScrolling: 'touch' }}
    >
      <div className="max-w-5xl mx-auto text-center">
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
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Link to="/contact" className="w-full sm:w-auto">
            <button className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer" aria-label="Get started with our services cursor-pointer">
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </Link>
          
          <Link to="/projects" className="w-full sm:w-auto">
            <button className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer" aria-label="View our portfolio and projects ">
              <Eye className="h-5 w-5" />
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
      <div className="py-8 bg-white/90 border-t border-b border-gray-100">
        <Marquee 
          items={services.map(s => s.title)} 
          speed={100} 
          className="py-3" 
        />
      </div>

      {/* Services Grid Section */}
      <motion.section 
        className="pt-12 pb-8 px-6 lg:px-20"
        style={{ touchAction: 'pan-y', WebkitOverflowScrolling: 'touch' }}
      >
        <motion.div 
          className="max-w-7xl mx-auto"
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
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-5xl font-black text-orange-500 mb-6"
              variants={fadeInUp}
            >
              Service Portfolio
            </motion.h2>      
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              Comprehensive digital solutions designed to accelerate your business growth
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          >
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
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