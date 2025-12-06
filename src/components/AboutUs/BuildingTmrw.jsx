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

  const scaleVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    show: { 
      scale: 1, 
      opacity: 1,
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
      className="py-12 px-4 md:px-12 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mb-6">
            Building Tomorrow
          </h2>
          <motion.div
            variants={scaleVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-40 h-1 mx-auto bg-orange-500 mt-4 rounded-full"
          /><br />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a young startup, every day is a new milestone. We're not just building a company—we're crafting a legacy of innovation that will shape the future of digital transformation.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Our Promise (40%) */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:w-[40%] bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-100"
          >
            <h3 className="text-3xl font-semibold text-gray-600 mb-6">Our Promise</h3>
            <div className="space-y-6">
              <p className="text-gray-500 italic">
                We're committed to delivering exceptional digital experiences that not only meet but exceed expectations. Our approach combines technical excellence with creative thinking to solve complex challenges with elegant solutions.
              </p>
              <p className="text-gray-500 italic">
                Every project is an opportunity to make a meaningful impact, and we approach each one with the same level of passion, dedication, and attention to detail.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Cards (60%) */}
          <div className="lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (index * 0.1) }}
                className="bg-white p-6 rounded-xl shadow-sm border border-orange-100 hover:shadow-md transition-colors relative pt-10"
              >
                <div className="absolute -top-1 left-0 bg-orange-500 text-white p-2 rounded-full">
                  <Flame size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-3">
                  {achievement.text}
                </h3>
                <p className="text-gray-500">
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