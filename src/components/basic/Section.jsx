import React from "react";
import ContainerWrapper from "./ContainerWrapper";

const Section = ({ children,style,className,...props }) => {
  return (
    <section className={`py-[100px] ${className}`} style={style} {...props}>
      <ContainerWrapper>{children}</ContainerWrapper>
    </section>
  );
};

export default Section;
