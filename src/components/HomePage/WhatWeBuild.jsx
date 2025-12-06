import { motion } from "framer-motion";
import { Lightbulb, Rocket, Building2, UserSearch } from "lucide-react";
import { fadeIn, textVariant, scale, staggerContainer } from "../../utils/motion";

const WhatWeBuild = () => {
  return (
    <section className="relative py-20 px-4 md:px-12 overflow-hidden">
      {/* Section Header */}
      <motion.div
        variants={staggerContainer(0.2, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.h2
          variants={textVariant(0.1)}
          className="text-4xl md:text-5xl font-bold text-orange-500"
        >
          What We Build for You
        </motion.h2>
        <motion.div
          variants={scale(0.2)}
          className="w-50 h-1 mx-auto bg-orange-500 mt-3 mb-5 rounded-full"
        />
        <motion.p
          variants={fadeIn("up", 0.3)}
          className="max-w-4xl mx-auto text-gray-500 text-xl whitespace-nowrap font-normal"
        >
          From idea to launch — we craft solutions that are fast, scalable, and designed for impact.
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={staggerContainer(0.25, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
      >
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
            variants={fadeIn("up", index * 0.2)}
            whileHover={{ scale: 1.03 }}
            className="group flex items-start gap-4 bg-gradient-to-br from orange-20 to-orange-50 rounded-2xl shadow-md p-6 hover:shadow-orange-200 transition-all duration-300 border border-orange-100"
          >
            <motion.div
              variants={scale(index * 0.3)}
              className="transition-transform duration-100"
            >
              {service.icon}
            </motion.div>
            <div>
              <h3 className="text-xl font-semibold text-gray-600 mb-1 group-hover:text-orange-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhatWeBuild;