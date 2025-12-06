import { lazy, Suspense } from "react";
import Hero from "./Hero";

// Lazy load non-critical sections for better initial load performance
const WhatWeBuild = lazy(() => import("./WhatWeBuild"));
const WhyUs = lazy(() => import("./WhyChooseUs"));
const ReadyTransform = lazy(() => import("./ReadyTransform"));
const FloatingContact = lazy(() => import("../FloatingContact"));

const HomePage = () => {
  return (
    <>
      {/* Hero loads immediately - no lazy loading */}
      <Hero />

      {/* Other sections lazy loaded for better performance */}
      <Suspense fallback={null}>
        <WhatWeBuild />
      </Suspense>

      <Suspense fallback={null}>
        <WhyUs />
      </Suspense>

      <Suspense fallback={null}>
        <ReadyTransform />
      </Suspense>

      <Suspense fallback={null}>
        <FloatingContact />
      </Suspense>
    </>
  );
};

export default HomePage;
