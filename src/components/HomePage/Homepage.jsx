import { lazy, Suspense } from "react";
import Hero from "./Hero";

const WhatWeBuild = lazy(() => import("./WhatWeBuild"));
const WhyUs = lazy(() => import("./WhyChooseUs"));
const ReadyTransform = lazy(() => import("./ReadyTransform"));

const HomePage = () => {
  return (
    <>
      <Hero />

      <Suspense fallback={null}>
        <WhatWeBuild />
      </Suspense>

      <Suspense fallback={null}>
        <WhyUs />
      </Suspense>

      <Suspense fallback={null}>
        <ReadyTransform />
      </Suspense>
    </>
  );
};

export default HomePage;
