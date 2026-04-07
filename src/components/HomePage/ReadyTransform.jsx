import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ReadyTransform = () => {
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
    <section className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-14 md:px-12 lg:px-20">
      <div className="pointer-events-none absolute -left-12 top-6 h-44 w-44 rounded-full bg-orange-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-2 h-52 w-52 rounded-full bg-slate-200/45 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-10 text-center sm:mb-12 md:mb-16"
        >
       
          <h2 className="mb-3 text-3xl font-bold text-orange-500 sm:text-4xl md:mb-4 md:text-5xl">
            Ready to Transform Your Vision?
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-500 sm:text-lg md:max-w-4xl md:text-xl">
            Let's build something extraordinary together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-10">
          {[
            {
              title: "Start Your Project",
              description: "Get started with our expert team and bring your ideas to life with cutting-edge solutions.",
              buttonText: "Get Started",
              buttonLink: "/contact#contact-form",
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
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col rounded-2xl border border-orange-100/80 bg-white/95 p-5 shadow-sm ring-1 ring-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md sm:p-6 md:p-8"
            >
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-semibold text-gray-700 sm:mb-3 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-gray-600 sm:mb-6 sm:text-base">
                  {item.description}
                </p>
              </div>
              <Link
                to={item.buttonLink}
                className={`inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5 sm:w-auto sm:px-6 sm:py-3 sm:text-base ${
                  item.primary 
                    ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:shadow-orange-200/70' 
                    : 'border-2 border-orange-500 text-orange-500 hover:bg-orange-50'
                }`}
              >
                {item.buttonText}
                <svg
                  className="ml-2 h-4 w-4"
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadyTransform;