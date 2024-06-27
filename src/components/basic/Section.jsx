import React from "react";
import ContainerWrapper from "./ContainerWrapper";

const Section = ({ children,style,...props }) => {
  return (
    <section className="py-[100px]" style={style} {...props}>
      <ContainerWrapper>{children}</ContainerWrapper>
    </section>
  );
};

export default Section;
