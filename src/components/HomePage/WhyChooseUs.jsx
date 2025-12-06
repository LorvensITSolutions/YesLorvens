import { CheckCircle, Award, Users, Shield } from "lucide-react";
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

const WhyChooseUs = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 relative bg-orange-50">
      <div className="max-w-7xl mx-auto">
        <MotionWrapper
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            Why Choose Us
          </h2>
          <div className="w-40 h-1 mx-auto bg-orange-500 mt-4 rounded-full" /><br />
          <p className="text-2xl text-gray-500 max-w-4xl mx-auto">
            Your success, our mission
          </p>
        </MotionWrapper>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Side - Image */}
          <MotionWrapper 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="w-full lg:w-1/2"
          >
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://res.cloudinary.com/durbtkhbz/image/upload/v1764929871/ChatGPT_Image_Dec_5_2025_03_46_49_PM_rsno1r.png" 
                alt="Team working together"
                className="w-full h-100 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-xl font-semibold px-4 text-center">
                  Building Dreams, Delivering Excellence
                </p>
              </div>
            </div>
          </MotionWrapper>

          {/* Right Side - 2x2 Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <CheckCircle className="h-10 w-10 text-orange-400" />,
                title: "Proven Results",
                description: "We deliver measurable impact and ROI for every project."
              },
              {
                icon: <Award className="h-10 w-10 text-orange-400" />,
                title: "Industry Experts",
                description: "Our team brings years of experience and expertise."
              },
              {
                icon: <Users className="h-10 w-10 text-orange-400" />,
                title: "Client-Centric",
                description: "Your goals and vision are at the heart of everything we do."
              },
              {
                icon: <Shield className="h-10 w-10 text-orange-400" />,
                title: "Reliable Support",
                description: "We're here for you even after project completion."
              }
            ].map((item, index) => (
              <MotionWrapper
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-start gap-3 bg-white rounded-2xl shadow-md p-6 border border-orange-100 h-full"
              >
                <div>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;