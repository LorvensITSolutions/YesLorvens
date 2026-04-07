// React import not needed in React 17+
import { motion } from 'framer-motion';

const CoreValues = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const features = [
    {
      title: "Innovation",
      desc: "Pioneering tomorrow's technology today. We don't just follow trends—we create them."
    },
    {
      title: "Expertise",
      desc: "Deep technical knowledge meets creative problem-solving across every project we undertake."
    },
    {
      title: "Collaboration",
      desc: "Your vision + Our expertise = Extraordinary results. We're partners, not just providers."
    },
    {
      title: "Reliability",
      desc: "Consistent delivery, transparent communication, and unwavering support you can count on."
    },
    {
      title: "Future-Ready",
      desc: "Scalable solutions built for growth, designed to evolve with your business needs."
    },
    {
      title: "Excellence",
      desc: "Uncompromising quality in every aspect of our work, from concept to delivery."
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/25 to-white px-4 py-12 lg:px-8 lg:py-16">
      <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-orange-100/55 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-52 w-52 rounded-full bg-orange-200/45 blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <div className="relative z-10 mb-10 text-center md:mb-12">
          <h2 className="mb-3 text-3xl font-bold text-orange-500 md:text-5xl">
            Our Core Values
          </h2>
         
          <motion.p 
            className="mx-auto mt-3 max-w-3xl text-base text-gray-600 md:text-lg"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            The principles that shape every decision, guide every interaction, and drive every innovation
          </motion.p>
        </div>

        {/* First Row: Image Left, 3 Cards Right */}
        <div className="mb-8 grid grid-cols-1 items-center gap-6 lg:mb-10 lg:grid-cols-2 lg:gap-8">
          {/* Left Side - Image */}
          <motion.div 
            className="relative h-64 overflow-hidden rounded-2xl border border-orange-100/80 shadow-md lg:h-80"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <img 
              src="https://res.cloudinary.com/dnxi81qzk/image/upload/w_800,f_auto,q_auto/v1765177730/ofice_ht9cso.jpg" 
              alt="Our Team"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Right Side - 3 Cards */}
          <div className="space-y-3.5">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={`top-${index}`}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.1 + (index * 0.1) }}
                className="group relative overflow-hidden rounded-xl border border-orange-100/80 bg-white/95 p-4 shadow-sm ring-1 ring-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-orange-300/60 via-orange-400/70 to-orange-300/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <h3 className="mb-1 text-lg font-semibold text-gray-700">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Second Row: 3 Cards Left, Image Right */}
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Left Side - 3 Cards */}
          <div className="order-2 space-y-3.5 lg:order-1">
            {features.slice(3, 6).map((feature, index) => (
              <motion.div
                key={`bottom-${index}`}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.1 + (index * 0.1) }}
                className="group relative overflow-hidden rounded-xl border border-orange-100/80 bg-white/95 p-4 shadow-sm ring-1 ring-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-orange-300/60 via-orange-400/70 to-orange-300/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <h3 className="mb-1 text-lg font-semibold text-gray-700">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Image */}
          <motion.div 
            className="relative order-1 h-64 overflow-hidden rounded-2xl border border-orange-100/80 shadow-md lg:order-2 lg:h-80"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <img 
              src="https://res.cloudinary.com/dnxi81qzk/image/upload/w_800,f_auto,q_auto/v1765177912/office_ecjv1l.jpg" 
              alt="Our Workspace"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;