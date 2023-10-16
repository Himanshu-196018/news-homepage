import React from "react";

const HeroImage = () => {
  return (
    <picture>
      <source
        media="(min-width: 700px)"
        srcSet="/images/image-web-3-desktop.jpg"
      />
      <img src="/images/image-web-3-mobile.jpg" alt="Hero image for web 3.0" />
    </picture>
  );
};

export default HeroImage;
