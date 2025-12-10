import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { ArrowRight, CheckCircle2, Clock, Users, Shield, Zap, Star, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

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
    fullDetails: "We build modern, fast, and secure web applications tailored to your business needs. Our solutions are designed to look great, work smoothly, and grow with your business. From responsive websites that adapt to any device to progressive web apps that feel like native apps, we ensure reliability, performance, and security. Using the latest technologies like React, Next.js, and Node.js, we deliver user-friendly solutions that help your business succeed.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: ["Responsive Design", "Progressive Web Apps", "E-commerce Integration", "Performance Optimization", "SEO Friendly", "Secure Authentication"],
    deliveryTime: "4-8 weeks",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    benefits: ["Increased online presence", "Higher conversion rates", "Improved user engagement", "Better SEO performance", "Scalable solutions"],
    icon: "💻"
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description: "Transform your ideas into powerful mobile experiences",
    fullDetails: "We create high-performing native and cross-platform mobile apps designed for both iOS and Android. Our focus is on delivering apps with intuitive user interfaces, smooth performance, and reliable functionality that enhance the user experience. From concept to launch, we build mobile solutions that are scalable, secure, and tailored to your business needs.",
    image: "https://res.cloudinary.com/durbtkhbz/image/upload/v1765297568/ChatGPT_Image_Dec_9_2025_09_55_55_PM_pftijw.png",
    features: ["Native iOS & Android", "Cross-Platform Solutions", "App Store Optimization", "Push Notifications", "Offline Support", "API Integration"],
    deliveryTime: "6-12 weeks",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    benefits: ["Reach more customers", "Enhance brand presence", "Improve customer engagement", "Increase sales and revenue", "Competitive advantage"],
    icon: "📱"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Amplify your brand's reach with data-driven strategies",
    fullDetails: "We design targeted digital marketing campaigns to increase your brand's online visibility and drive more conversions. From SEO and content marketing to paid advertising, we use proven strategies to attract the right audience and grow your business. Our goal is to deliver measurable results that help you stand out in the digital space.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Reporting", "PPC Advertising", "Email Marketing"],
    deliveryTime: "2-4 weeks",
    technologies: ["Google Analytics", "Google Ads", "Facebook Ads", "SEO Tools", "Email Marketing Platforms"],
    benefits: ["Increased brand awareness", "Higher conversion rates", "Better ROI on ad spend", "Improved online reputation", "Data-driven decisions"],
    icon: "📈"
  },
  {
    id: "ai-ml-integration",
    title: "AI/ML Integrations",
    description: "Leverage artificial intelligence to drive insights and automation",
    fullDetails: "We develop and integrate AI and Machine Learning solutions to help businesses work smarter. From automating processes and analyzing data to delivering predictive insights, our solutions empower you to make better decisions and improve efficiency. We tailor every AI solution to fit your business needs and goals.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "Chatbots", "Recommendation Systems"],
    deliveryTime: "8-16 weeks",
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NLTK"],
    benefits: ["Automated processes", "Data-driven insights", "Improved accuracy", "Cost reduction", "Competitive edge"],
    icon: "🤖"
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    description: "Ensure your software meets the highest quality standards",
    fullDetails: "Our comprehensive Quality Assurance services help you deliver flawless software that meets the highest industry standards. We implement rigorous testing methodologies to identify and resolve issues before they impact your users. From manual testing to automated test suites, we ensure your application performs flawlessly across all devices and platforms, providing a seamless user experience.",
    image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: ["Manual Testing", "Automated Testing", "Performance Testing", "Security Testing", "Cross-browser Testing", "Mobile Testing"],
    deliveryTime: "2-6 weeks",
    technologies: ["Selenium", "Jest", "Cypress", "JIRA", "Postman"],
    benefits: ["Bug-free software", "Improved user experience", "Higher customer satisfaction", "Reduced maintenance costs", "Faster time to market"],
    icon: "🔍"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Designing",
    description: "Design intuitive and engaging interfaces for users",
    fullDetails: "We craft visually appealing and user-friendly UI/UX designs that focus on enhancing the overall user experience. Our goal is to create interfaces that are not only attractive but also intuitive and easy to navigate, ensuring users stay engaged and satisfied. With a balance of creativity and functionality, we design digital products that truly connect with your audience.",
    image: "https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing", "Interaction Design", "Design Systems"],
    deliveryTime: "3-6 weeks",
    technologies: ["Figma", "Sketch", "Adobe XD", "InVision", "Framer"],
    benefits: ["Improved user satisfaction", "Higher conversion rates", "Reduced development costs", "Faster time to market", "Brand consistency"],
    icon: "🎨"
  }
];

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === serviceId);
  const relatedServices = services.filter(s => s.id !== serviceId).slice(0, 3);

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-6">Service Not Found</h1>
          <p className="text-lg text-gray-700 mb-8">The service you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition duration-300 shadow-md hover:shadow-xl"
          >
            <ArrowRight className="h-5 w-5" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white md:pt-18 text-gray-800">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[80vh] flex items-center justify-center px-6 lg:px-12 overflow-hidden"
        style={{
          backgroundImage: `url(${service.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { duration: 0.8 }
          }
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div 
          className="relative z-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
            {service.title}
          </motion.h1>
          <motion.h2 
            variants={fadeInUp}
            className="text-xl md:text-2xl font-normal text-orange-100 max-w-2xl mx-auto"
          >
            {service.description}
          </motion.h2>
        </motion.div>
      </motion.section>

      {/* Service Details */}
      <motion.section 
        className="py-16 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
          }
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {/* Main Content */}
            <motion.div 
              className="md:col-span-2"
              variants={fadeInUp}
            >
              <motion.div 
                className="mb-12"
                variants={fadeInUp}
              >
                <motion.h2 
                  className="text-3xl font-bold mb-6"
                  variants={fadeInUp}
                >
                  About This Service
                </motion.h2>
                <motion.div 
                  className="prose max-w-none text-gray-600 leading-relaxed space-y-6"
                  variants={fadeInUp}
                >
                  <p>{service.fullDetails}</p>
                </motion.div>
              </motion.div>

              <motion.div 
                className="mt-12"
                variants={fadeInUp}
              >
                <motion.h3 
                  className="text-2xl font-bold mb-6"
                  variants={fadeInUp}
                >
                  Key Features
                </motion.h3>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05
                      }
                    }
                  }}
                >
                  {service.features.map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3"
                      variants={fadeInUp}
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Sidebar */}
            <motion.div
              variants={fadeInUp}
              className="sticky top-24"
            >
              <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6 mb-8">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">Service Details</h3>
                
                <div className="space-y-4">
                  <div className="pt-4">
                    <h4 className="font-medium mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => navigate("/contact")}
                    className="w-full mt-6 bg-orange-600 text-white py-4 px-6 rounded-xl font-bold hover:bg-orange-700 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Start Your Project
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <Link 
                    to="/services" 
                    className="block text-center text-orange-600 hover:text-orange-700 font-medium mt-4 transition-colors"
                  >
                    Back to Services
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Explore Our Other Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Discover more solutions to help grow your business</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((relatedService) => (
                <div 
                  key={relatedService.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedService.image} 
                      alt={relatedService.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-3xl mb-3">{relatedService.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{relatedService.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedService.description}</p>
                    <Link 
                      to={`/service/${relatedService.id}`}
                      className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors"
                    >
                      Learn more
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to get started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals with our expert services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-orange-600 text-white hover:bg-orange-700 px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-xl font-bold transition-all duration-300 cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}

export default ServiceDetail;
