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
    <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-12 md:py-20">
      <div className="pointer-events-none absolute -left-16 top-8 h-44 w-44 rounded-full bg-orange-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-6 h-52 w-52 rounded-full bg-slate-200/45 blur-3xl" />
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative z-10 mb-10 text-center sm:mb-12 md:mb-16"
      >
      
        <h2 className="mb-4 text-3xl font-bold text-orange-500 sm:mb-5 sm:text-4xl md:mb-6 md:text-5xl">
          What We Build for You
        </h2>
        <p className="mx-auto max-w-3xl px-1 text-center text-sm font-normal leading-relaxed text-gray-500 sm:px-4 sm:text-base md:max-w-5xl md:px-6 md:text-xl">
          From idea to launch — we craft solutions that are fast, scalable, and designed for impact.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="relative z-10 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-8">
        {[
          {
            title: "Web Development",
            icon: <Lightbulb className="h-8 w-8 text-orange-400 sm:h-9 sm:w-9 md:h-10 md:w-10" />,
            desc: "Custom websites built for speed, scalability & conversions.",
          },
          {
            title: "Mobile Applications",
            icon: <Rocket className="h-8 w-8 text-orange-400 sm:h-9 sm:w-9 md:h-10 md:w-10" />,
            desc: "iOS & Android apps with seamless UX & robust performance.",
          },
          {
            title: "Startup Acceleration",
            icon: <Building2 className="h-8 w-8 text-orange-400 sm:h-9 sm:w-9 md:h-10 md:w-10" />,
            desc: "Turn ideas into MVPs that attract users & investors.",
          },
          {
            title: "Tech Talent as a Service",
            icon: <UserSearch className="h-8 w-8 text-orange-400 sm:h-9 sm:w-9 md:h-10 md:w-10" />,
            desc: "Access expert designers & developers to scale faster.",
          },
          {
            title: "Digital Product Design (UI/UX)",
            icon: <UserSearch className="h-8 w-8 text-orange-400 sm:h-9 sm:w-9 md:h-10 md:w-10" />,
            desc: "User-first designs that blend beauty with usability.",
          },
          {
            title: "Cloud & DevOps Solutions",
            icon: <Rocket className="h-8 w-8 text-orange-400 sm:h-9 sm:w-9 md:h-10 md:w-10" />,
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
            className="group flex items-start gap-3 rounded-2xl border border-orange-100/80 bg-white/95 p-4 shadow-sm ring-1 ring-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md sm:gap-4 sm:p-5 md:p-6"
          >
            <div className="rounded-xl bg-orange-50 p-2.5">
              {service.icon}
            </div>
            <div>
              <h3 className="mb-1 text-lg font-semibold text-gray-700 sm:text-[1.15rem] md:text-xl">
                {service.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeBuild;