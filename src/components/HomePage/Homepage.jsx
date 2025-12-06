import { lazy, Suspense } from "react";

// Lazy load all homepage components for better performance
const Hero = lazy(() => import("./Hero"));
const WhatWeBuild = lazy(() => import("./WhatWeBuild"));
const WhyUs = lazy(() => import("./WhyChooseUs"));
const ReadyTransform = lazy(() => import("./ReadyTransform"));
const FloatingContact = lazy(() => import("../FloatingContact"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
  </div>
);

// Hero loading fallback - minimal height to prevent layout shift
const HeroLoadingFallback = () => (
  <div className="h-screen w-full bg-gray-900 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
  </div>
);

const HomePage = () => {
  return (
    <>
      {/* Hero Section - Lazy loaded */}
      <Suspense fallback={<HeroLoadingFallback />}>
        <Hero />
      </Suspense>
      
      {/* Lazy loaded sections */}
      <Suspense fallback={<LoadingFallback />}>
        {/* What We Build */}
        <WhyUs />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        {/* Why Choose Us */}
        <WhatWeBuild />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        {/* Ready to Transform */}
        <ReadyTransform />
      </Suspense>
      
      <Suspense fallback={null}>
        {/* Floating Contact */}
        <FloatingContact />
      </Suspense>
    </>
  );
};

export default HomePage;
