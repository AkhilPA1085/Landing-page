import React from "react";
import Section from "../../basic/Section";
import SectionTitle from "@/components/basic/SectionTitle";
import { ImageCard } from "@/components/basic/ImageCard";

const packages = [
  {
    image:"/images/packages/package-1.png",
    title:"Georgia"
  },
  {
    image:"/images/packages/package-2.png",
    title:"Kazhakistan"
  },
  {
    image:"/images/packages/package-3.png",
    title:"london"
  },
  {
    image:"/images/packages/package-4.png",
    title:"Armenia"
  },
]

const Packages = () => {
  return (
    <Section>
      <SectionTitle
        title={"Top packages"}
        subTitle={"Explore Diverse Destinations, Uncover Captivating Descriptions"}
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-4 pt-8">
        {packages?.map((item,index)=>(
          <ImageCard key={index} title={item?.title} image={item?.image}/>
        ))}
      </div>
    </Section>
  );
};

export default Packages;
