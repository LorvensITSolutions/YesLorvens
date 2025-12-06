import { Lightbulb, Rocket, Building2, UserSearch } from "lucide-react";
import MotionWrapper from "../MotionWrapper";

// Simple fade-in animation (only for mobile)
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const WhatWeBuild = () => {
  return (
    <section className="relative py-20 px-4 md:px-12 overflow-hidden">
      {/* Section Header */}
      <MotionWrapper
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
          What We Build for You
        </h2>
        <div className="w-50 h-1 mx-auto bg-orange-500 mt-3 mb-5 rounded-full" />
        <p className="max-w-5xl mx-auto text-gray-500 text-base sm:text-lg md:text-xl font-normal px-4 sm:px-6 text-center">
          From idea to launch — we craft solutions that are fast, scalable, and designed for impact.
        </p>
      </MotionWrapper>

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
          <MotionWrapper
            key={service.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            transition={{ delay: index * 0.1 }}
            className="group flex items-start gap-4 bg-gradient-to-br from orange-20 to-orange-50 rounded-2xl shadow-md p-6 border border-orange-100"
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
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
};

export default WhatWeBuild;