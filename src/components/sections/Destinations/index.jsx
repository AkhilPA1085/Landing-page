import React from "react";
import Section from "../../basic/Section";
import SectionTitle from "@/components/basic/SectionTitle";
import { ImageCard } from "@/components/basic/ImageCard";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    image: "/images/destinations/destination-1.png",
    title: "Georgia",
  },
  {
    image: "/images/destinations/destination-2.png",
    title: "Kazakhstan",
  },
  {
    image: "/images/destinations/destination-3.png",
    title: "London",
  },
  {
    image: "/images/destinations/destination-4.png",
    title: "Armenia",
  },
  {
    image: "/images/destinations/destination-5.png",
    title: "London",
  },
  {
    image: "/images/destinations/destination-6.png",
    title: "Armenia",
  },
];

const Destinations = () => {
  return (
    <Section>
      <SectionTitle
        title="Choose destinations"
        subTitle="Explore Diverse Destinations, Uncover Captivating Descriptions"
      />
      <div className="grid md:grid-cols-4 gap-4 pt-8">
        {destinations.map(({ image, title }, index) => (
          <ImageCard
            key={index}
            className={`${
              index === 2 ? "md:col-span-2 md:w-full md:h-full" : ""
            } ${index === 1 ? "md:row-span-2 md:w-full" : ""}`}
            title={title}
            image={image}
          />
        ))}
      </div>
      <div className="text-center pt-12">
        <Button className="yellow-btn">View All</Button>
      </div>
    </Section>
  );
};

export default Destinations;
