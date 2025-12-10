import { motion } from "framer-motion";
import { Lightbulb, Rocket, Building2, UserSearch } from "lucide-react";

const WhatWeBuild = () => {
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
    <section className="relative py-20 px-4 md:px-12 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
          What We Build for You
        </h2>
        <p className="max-w-5xl mx-auto text-gray-500 text-base sm:text-lg md:text-xl font-normal px-4 sm:px-6 text-center">
          From idea to launch — we craft solutions that are fast, scalable, and designed for impact.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {[
          {
            title: "Web Development",
            icon: <Lightbulb className="h-10 w-10 text-orange-400" />,
            desc: "Custom websites built for speed, scalability & conversions.",
          },
          {
            title: "Mobile Applications",
            icon: <Rocket className="h-10 w-10 text-orange-400" />,
            desc: "iOS & Android apps with seamless UX & robust performance.",
          },
          {
            title: "Startup Acceleration",
            icon: <Building2 className="h-10 w-10 text-orange-400" />,
            desc: "Turn ideas into MVPs that attract users & investors.",
          },
          {
            title: "Tech Talent as a Service",
            icon: <UserSearch className="h-10 w-10 text-orange-400" />,
            desc: "Access expert designers & developers to scale faster.",
          },
          {
            title: "Digital Product Design (UI/UX)",
            icon: <UserSearch className="h-10 w-10 text-orange-400" />,
            desc: "User-first designs that blend beauty with usability.",
          },
          {
            title: "Cloud & DevOps Solutions",
            icon: <Rocket className="h-10 w-10 text-orange-400" />,
            desc: "Secure, scalable, and future-ready deployments.",
          },
        ].map((service, index) => (
          <motion.div
            key={service.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group flex items-start gap-4 bg-gradient-to-br from orange-20 to-orange-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-orange-100 p-6"
          >
            <div>
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-600 mb-1">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeBuild;