import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Shield } from "lucide-react";

const WhyChooseUs = () => {
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
      <div className="pointer-events-none absolute -left-16 top-10 h-48 w-48 rounded-full bg-orange-100/55 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-slate-200/45 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-10 text-center sm:mb-12 md:mb-16"
        >
         
          <h2 className="mb-3 text-3xl font-bold text-orange-500 sm:text-4xl md:mb-4 md:text-5xl">
            Why Choose Us
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-500 sm:text-lg md:max-w-4xl md:text-2xl">
            Your success, our mission
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:flex-row lg:gap-10">
          {/* Left Side - Image */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full md:w-[80%] lg:w-1/2"
          >
            <div className="group relative overflow-hidden rounded-2xl border border-orange-100/70 shadow-lg">
              <img 
                src="https://res.cloudinary.com/durbtkhbz/image/upload/v1764929871/ChatGPT_Image_Dec_5_2025_03_46_49_PM_rsno1r.png" 
                alt="Team working together"
                className="h-[280px] w-full object-cover sm:h-[340px] md:h-[420px]"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="px-4 text-center text-base font-semibold text-white sm:text-lg md:text-xl">
                  Building Dreams, Delivering Excellence
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - 2x2 Grid */}
          <div className="grid w-full grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6 lg:w-1/2">
            {[
              {
                icon: <CheckCircle className="h-8 w-8 text-orange-400 sm:h-9 sm:w-9 md:h-10 md:w-10" />,
                title: "Proven Results",
                description: "We deliver measurable impact and ROI for every project."
              },
              {
                icon: <Award className="h-8 w-8 text-orange-400 sm:h-9 sm:w-9 md:h-10 md:w-10" />,
                title: "Industry Experts",
                description: "Our team brings years of experience and expertise."
              },
              {
                icon: <Users className="h-8 w-8 text-orange-400 sm:h-9 sm:w-9 md:h-10 md:w-10" />,
                title: "Client-Centric",
                description: "Your goals and vision are at the heart of everything we do."
              },
              {
                icon: <Shield className="h-8 w-8 text-orange-400 sm:h-9 sm:w-9 md:h-10 md:w-10" />,
                title: "Reliable Support",
                description: "We're here for you even after project completion."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex h-full flex-col items-start gap-3 rounded-2xl border border-orange-100/80 bg-white/95 p-4 shadow-sm ring-1 ring-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md sm:p-5 md:p-6"
              >
                <div className="rounded-xl bg-orange-50 p-2.5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-1 text-base font-semibold text-gray-800 sm:text-[1.05rem] md:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;