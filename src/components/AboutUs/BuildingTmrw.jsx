import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

const BuildingTmrw = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const achievements = [
    { 
      text: "Startup Innovation", 
      desc: "Fresh perspectives driving breakthrough solutions"
    },
    { 
      text: "Rapid Growth", 
      desc: "Scaling impact through strategic partnerships"
    },
    { 
      text: "Global Vision", 
      desc: "Building solutions for worldwide impact"
    },
    { 
      text: "Quality First", 
      desc: "Excellence in every line of code we write"
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-orange-50/40 px-4 py-12 md:px-12"
    >
      <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-14 top-8 h-44 w-44 rounded-full bg-orange-200/55 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-orange-300/40 blur-3xl" />
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 mb-12 text-center md:mb-16"
        >

          <h2 className="mb-4 text-3xl font-bold text-orange-500 md:mb-6 md:text-5xl">
            Building Tomorrow
          </h2>
          
          <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-xl">
            As a young startup, every day is a new milestone. We're not just building a company—we're crafting a legacy of innovation that will shape the future of digital transformation.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* Left Side - Our Promise (40%) */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-orange-100/80 bg-white/95 p-6 shadow-sm ring-1 ring-white lg:w-[40%] lg:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 opacity-80" />
            <h3 className="mb-5 text-2xl font-semibold text-gray-700 md:text-3xl">Our Promise</h3>
            <div className="space-y-6">
              <p className="text-sm italic leading-relaxed text-gray-600 md:text-base">
                We're committed to delivering exceptional digital experiences that not only meet but exceed expectations. Our approach combines technical excellence with creative thinking to solve complex challenges with elegant solutions.
              </p>
              <p className="text-sm italic leading-relaxed text-gray-600 md:text-base">
                Every project is an opportunity to make a meaningful impact, and we approach each one with the same level of passion, dedication, and attention to detail.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Cards (60%) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:w-[60%]">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (index * 0.1) }}
                className="group relative rounded-xl border border-orange-100/80 bg-white/95 p-5 shadow-sm ring-1 ring-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-orange-500 p-2 text-white shadow-sm">
                  <Flame size={16} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-700 sm:text-xl">
                  {achievement.text}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                  {achievement.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BuildingTmrw;