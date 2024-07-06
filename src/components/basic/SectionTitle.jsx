import React from "react";

const SectionTitle = ({ title, subTitle, towColumn }) => {
  if (towColumn) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between md:gap-8 pb-8">
        <div className="col-span-2 section-title font-semibold md:text-5xl capitalize text-center md:text-start pb-4 md:leading-[74px]">
          {title}
        </div>
        <div className="sub-title md:text-xl capitalize text-center md:text-start opacity-65 md:leading-8">
          {subTitle}
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="section-title font-semibold text-3xl md:text-5xl capitalize text-start md:text-center pb-4">
        {title}
      </div>
      <div className="sub-title md:text-xl capitalize text-start md:text-center opacity-65">
        {subTitle}
      </div>
    </>
  );
};

export default SectionTitle;
