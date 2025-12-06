import WhatWeBuild from "./WhatWeBuild";
import WhyUs from "./WhyChooseUs";
import ReadyTransform from "./ReadyTransform";
import Hero from "./Hero";
import FloatingContact from "../FloatingContact";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* What We Build */}
      <WhatWeBuild />
      {/* Why Choose Us */}
      <WhyUs />
      {/* Ready to Transform */}
      <ReadyTransform />
      {/* Floating Contact */}
      <FloatingContact />
    </>
  );
};

export default HomePage;
