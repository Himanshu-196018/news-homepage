// import React from "react";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import SideNews from "./SideNews";

const Top = () => {
  return (
    <section>
      <div className="hero-section">
        <HeroImage />
        <HeroText />
      </div>
      <SideNews />
    </section>
  );
};

export default Top;
