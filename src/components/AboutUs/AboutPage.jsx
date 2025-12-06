import WhoWeAre from "./WhoWeAre";
import ReadyLaunch from "./ReadyLaunch";
import BuildingTmrw from "./BuildingTmrw";
import WhatBelieve from "./WhatBelieve";
import CoreValues from "./CoreValues";

const AboutPage = () => {
  return (
    <div className="pt-20">
      <WhoWeAre />
      <CoreValues />
      <WhatBelieve />
      <BuildingTmrw />
      <ReadyLaunch />
    </div>
  );
};

export default AboutPage;