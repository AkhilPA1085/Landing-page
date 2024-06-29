import CustomAvatar from "@/components/basic/CustomAvatar";
import Section from "@/components/basic/Section";
import SectionTitle from "@/components/basic/SectionTitle";
import TestimonialCard from "@/components/basic/TestimonialCard";

import Image from "next/image";

import React from "react";

const testimonialDatas = [
  {
    image: "/images/testimonial-images/img-1.png",
    name: "Micheal Johnson",
    position: "Adventurous Explorer",
    text: "Absolutely brathtaking! The attention to detail in planning our trip was impeccable. A heartfelt thank you for making our vacation truly memorable!",
  },
  {
    image: "/images/testimonial-images/img-2.png",
    name: "Alex K",
    position: "Satisfied Voyager",
    text: "Absolutely brathtaking! The attention to detail in planning our trip was impeccable. A heartfelt thank you for making our vacation truly memorable!",
  },
  {
    image: "/images/testimonial-images/img-3.png",
    name: "Bruce Nicolas",
    position: "Happy Traveler",
    text: "Absolutely brathtaking! The attention to detail in planning our trip was impeccable. A heartfelt thank you for making our vacation truly memorable!",
  },
];

const Testimonaials = () => {
  return (
    <Section className={"bg-lightBgGray"}>
      <SectionTitle
        title={"what people say, that you will also feel soon"}
        subTitle={
          "Capturing the essence of heartfelt testimonials, immerse yourself in shared experiences, for what people say, you will soon feel."
        }
        towColumn
      />

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-2 pt-8">
        {testimonialDatas?.map((item, index) => (
          <TestimonialCard item={item} key={index}/>
        ))}
      </div>
    </Section>
  );
};

export default Testimonaials;
