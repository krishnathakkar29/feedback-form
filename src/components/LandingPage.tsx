import React from "react";
import Hero from "./Hero";
import FeaturesSection from "./FeaturesSection";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div>
      <Hero />
      <FeaturesSection />
    </div>
  );
};

export default LandingPage;
