import { Link } from "react-router-dom";
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

const ReadyTransform = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <MotionWrapper
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            Ready to Transform Your Vision?
          </h2>
          <div className="w-40 h-1 mx-auto bg-orange-500 mt-4 rounded-full" /><br />
          <p className="text-xl text-gray-500 max-w-4xl mx-auto">
            Let's build something extraordinary together
          </p>
        </MotionWrapper>

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
            <MotionWrapper
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-gradient-to-br from-orange-50 to-orange-20 rounded-2xl shadow-md p-8 border border-orange-100"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-600 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {item.description}
                </p>
              </div>
              <Link
                to={item.buttonLink}
                className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-medium ${
                  item.primary 
                    ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white' 
                    : 'border-2 border-orange-500 text-orange-500'
                }`}
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
              </Link>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadyTransform;