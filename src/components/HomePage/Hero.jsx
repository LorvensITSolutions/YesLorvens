import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import WorkTogether from "./WorkTogether";

const desktopBg = "https://res.cloudinary.com/durbtkhbz/image/upload/v1764843926/website_e2hdje.jpg";
const mobileBg = "https://res.cloudinary.com/di4caiech/image/upload/v1765001611/ChatGPT_Image_Dec_6_2025_11_42_48_AM_zkhydo.png";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [desktopImageLoaded, setDesktopImageLoaded] = useState(false);
  const [mobileImageLoaded, setMobileImageLoaded] = useState(false);
  const sectionRef = useRef(null);

  // Lazy load background images using IntersectionObserver
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // If IntersectionObserver is not supported, load immediately
    if (!("IntersectionObserver" in window)) {
      const desktopImg = new Image();
      const mobileImg = new Image();
      desktopImg.onload = () => setDesktopImageLoaded(true);
      mobileImg.onload = () => setMobileImageLoaded(true);
      desktopImg.src = desktopBg;
      mobileImg.src = mobileBg;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load desktop image
            const desktopImg = new Image();
            desktopImg.onload = () => setDesktopImageLoaded(true);
            desktopImg.src = desktopBg;

            // Load mobile image
            const mobileImg = new Image();
            mobileImg.onload = () => setMobileImageLoaded(true);
            mobileImg.src = mobileBg;

            observer.unobserve(section);
          }
        });
      },
      {
        rootMargin: "50px", // Start loading 50px before entering viewport
        threshold: 0.01,
      }
    );

    observer.observe(section);

    return () => {
      if (observer && section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleWorkTogetherClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex items-center justify-start h-screen w-full overflow-hidden"
      style={{
        backgroundColor: "#111827",
        backgroundImage: desktopImageLoaded ? `url(${desktopBg})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 0.3s ease-in-out"
      }}
    >
      {/* Mobile background */}
      <div
        className="md:hidden absolute inset-0 w-full h-full"
        style={{
          backgroundImage: mobileImageLoaded ? `url(${mobileBg})` : "none",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: "background-image 0.3s ease-in-out"
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-16 lg:px-24 max-w-3xl text-center md:text-left space-y-6">
        <h1 className="font-extrabold leading-snug">
          <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap max-[420px]:text-2xl">
            Digital solutions built
          </span>
          <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight whitespace-nowrap max-[420px]:text-2xl">
            <span className="text-white">for </span>
            <span className="text-orange-500">growth & scale</span>
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl max-[420px]:text-sm">
          At <strong className="text-orange-500">YES LORVENS</strong>, we help
          startups & enterprises launch websites, apps, and full-stack digital
          solutions tailored for real results.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md w-full">
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
        </div>
      </div>

      {/* Work Together Modal */}
      <WorkTogether isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default Hero;
