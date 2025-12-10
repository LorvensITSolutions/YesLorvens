import { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
const WorkTogether = lazy(() => import("./WorkTogether"));

// Optimized images with better compression and responsive sizes
const desktopBg = "https://res.cloudinary.com/durbtkhbz/image/upload/f_auto,q_70,w_1920/v1764843926/website_e2hdje.jpg";
const mobileBg = "https://res.cloudinary.com/durbtkhbz/image/upload/f_auto,q_70,w_800/v1765299829/ChatGPT_Image_Dec_9_2025_10_33_34_PM_bwcswm.png";
// Low quality placeholder for blur-up effect
const desktopBgPlaceholder = "https://res.cloudinary.com/durbtkhbz/image/upload/f_auto,q_20,w_400/v1764843926/website_e2hdje.jpg";
const mobileBgPlaceholder = "https://res.cloudinary.com/durbtkhbz/image/upload/f_auto,q_20,w_200/v1765299829/ChatGPT_Image_Dec_9_2025_10_33_34_PM_bwcswm.png";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload critical images immediately
    const linkDesktop = document.createElement('link');
    linkDesktop.rel = 'preload';
    linkDesktop.as = 'image';
    linkDesktop.href = desktopBg;
    linkDesktop.fetchPriority = 'high';
    document.head.appendChild(linkDesktop);

    const linkMobile = document.createElement('link');
    linkMobile.rel = 'preload';
    linkMobile.as = 'image';
    linkMobile.href = mobileBg;
    linkMobile.fetchPriority = 'high';
    document.head.appendChild(linkMobile);

    // Load images and track when ready
    const desktopImg = new Image();
    const mobileImg = new Image();
    
    desktopImg.onload = () => setImageLoaded(true);
    mobileImg.onload = () => setImageLoaded(true);
    
    desktopImg.src = desktopBg;
    mobileImg.src = mobileBg;

    return () => {
      if (linkDesktop.parentNode) linkDesktop.remove();
      if (linkMobile.parentNode) linkMobile.remove();
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
      id="home"
      className="relative flex items-center justify-center md:justify-start w-full overflow-hidden bg-gray-900 md:pt-38 lg:pt-26 "
      style={{
        minHeight: 'calc(var(--vh, 1vh) * 100)',
        height: 'auto',
        paddingTop: 'max(4rem, calc(4rem + env(safe-area-inset-top)))',
        paddingBottom: 'env(safe-area-inset-bottom)',
        paddingLeft: 'max(0.5rem, env(safe-area-inset-left))',
        paddingRight: 'max(0.5rem, env(safe-area-inset-right))',
        willChange: 'auto',
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)'
      }}
    >
      {/* Desktop background with blur-up effect */}
      <div className="hidden md:block absolute inset-0 w-full h-full bg-gray-900" style={{ willChange: 'auto', transform: 'translateZ(0)' }}>
        {/* Low quality placeholder for instant display */}
        <img
          src={desktopBgPlaceholder}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            filter: 'blur(10px)', 
            transform: 'scale(1.1) translateZ(0)',
            willChange: 'auto',
            backfaceVisibility: 'hidden'
          }}
        />
        {/* High quality image */}
        <img
          src={desktopBg}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ willChange: 'opacity', backfaceVisibility: 'hidden' }}
          loading="eager"
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Mobile background with blur-up effect */}
      <div className="md:hidden absolute inset-0 w-full h-full mt-16 bg-gray-900" style={{ willChange: 'auto', transform: 'translateZ(0)' }}>
        {/* Low quality placeholder */}
        <img
          src={mobileBgPlaceholder}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            filter: 'blur(10px)', 
            transform: 'scale(1.1) translateZ(0)',
            willChange: 'auto',
            backfaceVisibility: 'hidden'
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/30" style={{ willChange: 'auto' }} />
        {/* High quality image */}
        <img
          src={mobileBg}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ willChange: 'opacity', backfaceVisibility: 'hidden' }}
          loading="eager"
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 px-2 sm:px-6 md:px-16 lg:px-24 max-w-3xl text-center md:text-left space-y-3 md:space-y-6 w-full  md:mt-0">
        {/* Render content immediately without animation delay for faster FCP */}
        <div>
          <h1 className="font-extrabold leading-snug ">
            <span className="block text-white text-4xl sm:text-4xl md:text-3xl lg:text-6xl whitespace-nowrap max-[420px]:text-[34px] mb-3 lg:mb-0">
              Digital solutions built
            </span>
            <span className="block mt-2 text-4xl sm:text-4xl md:text-3xl lg:text-6xl font-extrabold tracking-tight whitespace-nowrap max-[420px]:text-[34px] mb-9 lg-mb-0 ">
              <span className="text-white">for </span>
              <span className="text-orange-500 max-[420px]:text-4xl">growth & scale</span>
            </span>
          </h1>
        </div>

        <div>
          <p className="text-base sm:text-lg md:text-[15px] text-white max-w-xl max-[420px]:text-[20px] mb-15 lg:mb-0">
            At <strong className="text-orange-500">YES LORVENS</strong>, we help
            startups & enterprises launch websites, apps, and full-stack digital
            solutions tailored for real results.
          </p>
        </div>

        <div className="flex flex-col landscape:flex-row justify-center md:justify-start items-center gap-3 max-w-md w-full mx-auto md:mx-0">
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
        </div>
      </div>

      {isModalOpen && (
        <Suspense fallback={null}>
          <WorkTogether isOpen={isModalOpen} onClose={handleCloseModal} />
        </Suspense>
      )}
    </section>
  );
};

export default Hero;