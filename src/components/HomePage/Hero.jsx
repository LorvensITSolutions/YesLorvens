import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WorkTogether from "./WorkTogether";
import MotionWrapper from "../MotionWrapper";

const desktopBg = "https://res.cloudinary.com/durbtkhbz/image/upload/v1764843926/website_e2hdje.jpg";
const mobileBg = "https://res.cloudinary.com/di4caiech/image/upload/v1765001611/ChatGPT_Image_Dec_6_2025_11_42_48_AM_zkhydo.png";

// Simple fade-in animation (only for mobile)
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Preload images for faster loading (browser caching)
  useEffect(() => {
    const desktopImg = new Image();
    const mobileImg = new Image();

    // Start loading images immediately (browser will cache them)
    desktopImg.src = desktopBg;
    mobileImg.src = mobileBg;
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
      className="relative flex items-center justify-start h-screen w-full overflow-hidden"
      style={{
        backgroundColor: "#111827",
        backgroundImage: `url(${desktopBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Mobile background */}
      <div
        className="md:hidden absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${mobileBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-16 lg:px-24 max-w-3xl text-center md:text-left space-y-6">
        <MotionWrapper
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          <h1 className="font-extrabold leading-snug">
            <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap max-[420px]:text-2xl">
              Digital solutions built
            </span>
            <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight whitespace-nowrap max-[420px]:text-2xl">
              <span className="text-white">for </span>
              <span className="text-orange-500">growth & scale</span>
            </span>
          </h1>
        </MotionWrapper>

        <MotionWrapper
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl max-[420px]:text-sm">
            At <strong className="text-orange-500">YES LORVENS</strong>, we help
            startups & enterprises launch websites, apps, and full-stack digital
            solutions tailored for real results.
          </p>
        </MotionWrapper>

        <MotionWrapper
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-3 max-w-md w-full"
        >
          <Link
            to="/services"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 h-12 sm:h-14 bg-white/10 text-white border border-white/20 rounded-md hover:bg-white/20 font-medium"
          >
            Our services
          </Link>
          <button
            className="sm:w-auto bg-orange-500 text-white px-6 sm:px-8 h-12 sm:h-14 rounded-md hover:bg-orange-600 font-medium"
            onClick={handleWorkTogetherClick}
          >
            Work Together
          </button>
        </MotionWrapper>
      </div>

      {/* Work Together Modal */}
      <WorkTogether isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default Hero;
