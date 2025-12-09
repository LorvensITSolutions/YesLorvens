import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WorkTogether from "./WorkTogether";

// Optimized images with Cloudinary transformations for better performance
const desktopBg = "https://res.cloudinary.com/durbtkhbz/image/upload/v1764843926/website_e2hdje.jpg";
const mobileBg = "https://res.cloudinary.com/durbtkhbz/image/upload/v1765299829/ChatGPT_Image_Dec_9_2025_10_33_34_PM_bwcswm.png";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Preload images immediately for faster loading
  useEffect(() => {
    // Preload images as soon as component mounts
    const desktopImg = new Image();
    const mobileImg = new Image();

    desktopImg.src = desktopBg;
    mobileImg.src = mobileBg;

    // Set loading priority
    desktopImg.loading = 'eager';
    mobileImg.loading = 'eager';
  }, []);

  const handleWorkTogetherClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center md:justify-start w-full overflow-hidden bg-gray-900 md:pt-38 lg:pt-26 "
      style={{
        minHeight: 'calc(var(--vh, 1vh) * 100)',
        height: 'auto',
        paddingTop: 'max(4rem, calc(4rem + env(safe-area-inset-top)))',
        paddingBottom: 'env(safe-area-inset-bottom)',
        paddingLeft: 'max(0.5rem, env(safe-area-inset-left))',
        paddingRight: 'max(0.5rem, env(safe-area-inset-right))'
      }}
    >
      {/* Desktop background */}
      <div
        className="hidden md:block absolute inset-0 w-full h-full"
        style={{
          backgroundColor: "#111827",
          backgroundImage: `url(${desktopBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      {/* Mobile background with gradient overlay */}
      <div
        className="md:hidden absolute inset-0 w-full h-full mt-16"
        style={{
          backgroundColor: "#111827",
          background: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%), url(${mobileBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'overlay'
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content - Center aligned on mobile, left aligned on md and up */}
      <div className="relative z-10 px-2 sm:px-6 md:px-16 lg:px-24 max-w-3xl text-center md:text-left space-y-3 md:space-y-6 w-full  md:mt-0">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
        >
          <h1 className="font-extrabold leading-snug ">
            <span className="block text-white text-4xl sm:text-4xl md:text-3xl lg:text-6xl whitespace-nowrap max-[420px]:text-[34px] mb-3 lg:mb-0">
              Digital solutions built
            </span>
            <span className="block mt-2 text-4xl sm:text-4xl md:text-3xl lg:text-6xl font-extrabold tracking-tight whitespace-nowrap max-[420px]:text-[34px] mb-9 lg-mb-0 ">
              <span className="text-white">for </span>
              <span className="text-orange-500 max-[420px]:text-4xl">growth & scale</span>
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
        >
          <p className="text-base sm:text-lg md:text-[15px] text-white max-w-xl max-[420px]:text-[20px] mb-15 lg:mb-0">
            At <strong className="text-orange-500">YES LORVENS</strong>, we help
            startups & enterprises launch websites, apps, and full-stack digital
            solutions tailored for real results.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="flex flex-col landscape:flex-row justify-center md:justify-start items-center gap-3 max-w-md w-full mx-auto md:mx-0"
        >
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 h-12 sm:h-10 bg-gray-800/90 text-orange-300 border border-orange-500 rounded-md hover:bg-gray-700/90 font-semibold transition-colors mb-4 landscape:mb-3"
          >
            Our services
          </Link>
          <button
            className="sm:w-auto bg-orange-500 text-white px-6 sm:px-8 h-12 sm:h-10 rounded-md hover:bg-orange-600 font-medium transition-colors landscape:mb-3"
            onClick={handleWorkTogetherClick}
            aria-label="Open Work Together modal to get in touch"
          >
            Work Together
          </button>
        </motion.div>
      </div>

      {/* Work Together Modal */}
      <WorkTogether isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default Hero;