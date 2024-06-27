import React from "react";
import Section from "../basic/Section";

const HomeBanner = () => {
  return (
    <Section
      style={{
        backgroundImage: "url(/path/to/image.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></Section>
  );
};

export default HomeBanner;
