import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <>
      <div className="section-title font-semibold text-5xl capitalize text-center pb-4">
        {title}
      </div>
      <div className="sub-title text-xl capitalize text-center">
        {subTitle}
      </div>
    </>
  );
};

export default SectionTitle;
