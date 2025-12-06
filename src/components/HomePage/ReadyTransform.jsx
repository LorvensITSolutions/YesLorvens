import { motion } from "framer-motion";
import { fadeIn, textVariant, scale, staggerContainer } from "../../utils/motion";

const ReadyTransform = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 relative">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            Ready to Transform Your Vision?
          </h2>
          <motion.div
            variants={scale(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-40 h-1 mx-auto bg-orange-500 mt-4 rounded-full"
          /><br />
          <p className="text-xl text-gray-500 max-w-4xl mx-auto">
            Let's build something extraordinary together
          </p>
          
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "Start Your Project",
              description: "Get started with our expert team and bring your ideas to life with cutting-edge solutions.",
              buttonText: "Get Started",
              buttonLink: "/contact",
              primary: true
            },
            {
              title: "View Our Work",
              description: "Explore our portfolio to see how we've helped businesses like yours succeed.",
              buttonText: "See Projects",
              buttonLink: "/projects",
              primary: false
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeIn("up", index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group flex flex-col bg-gradient-to-br from-orange-50 to-orange-20 rounded-2xl shadow-md p-8 hover:shadow-orange-300 transition-all duration-300 border border-orange-100"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-600 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {item.description}
                </p>
              </div>
              <motion.a
                href={item.buttonLink}
                className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  item.primary 
                    ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:shadow-lg hover:shadow-orange-200' 
                    : 'border-2 border-orange-500 text-orange-500 hover:bg-orange-50'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.buttonText}
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ReadyTransform;