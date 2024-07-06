"use client";
import React from "react";

import Section from "@/components/basic/Section";
import SectionTitle from "@/components/basic/SectionTitle";
import TestimonialCard from "@/components/basic/TestimonialCard";
import CustomSlider from "@/components/basic/CustomSlider";

const testimonialDatas = [
  {
    image: "/images/testimonial-images/img-1.png",
    name: "Micheal Johnson",
    position: "Adventurous Explorer",
    text: "Absolutely breathtaking! The attention to detail in planning our trip was impeccable. A heartfelt thank you for making our vacation truly memorable!",
  },
  {
    image: "/images/testimonial-images/img-2.png",
    name: "Alex K",
    position: "Satisfied Voyager",
    text: "Absolutely breathtaking! The attention to detail in planning our trip was impeccable. A heartfelt thank you for making our vacation truly memorable!",
  },
  {
    image: "/images/testimonial-images/img-3.png",
    name: "Bruce Nicolas",
    position: "Happy Traveler",
    text: "Absolutely breathtaking! The attention to detail in planning our trip was impeccable. A heartfelt thank you for making our vacation truly memorable!",
  },
  {
    image: "/images/testimonial-images/img-3.png",
    name: "Bruce Nicolas",
    position: "Happy Traveler",
    text: "Absolutely breathtaking! The attention to detail in planning our trip was impeccable. A heartfelt thank you for making our vacation truly memorable!",
  },
  {
    image: "/images/testimonial-images/img-3.png",
    name: "Bruce Nicolas",
    position: "Happy Traveler",
    text: "Absolutely breathtaking! The attention to detail in planning our trip was impeccable. A heartfelt thank you for making our vacation truly memorable!",
  },
  {
    image: "/images/testimonial-images/img-3.png",
    name: "Bruce Nicolas",
    position: "Happy Traveler",
    text: "Absolutely breathtaking! The attention to detail in planning our trip was impeccable. A heartfelt thank you for making our vacation truly memorable!",
  },
  {
    image: "/images/testimonial-images/img-3.png",
    name: "Bruce Nicolas",
    position: "Happy Traveler",
    text: "Absolutely breathtaking! The attention to detail in planning our trip was impeccable. A heartfelt thank you for making our vacation truly memorable!",
  },
];

const breakpoints = {
  280: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 10,
  },
  992: {
    slidesPerView: 4,
    spaceBetween: 10,
  },
};

const Testimonials = () => {
  return (
    <Section className={"bg-lightBgGray pb-0"}>
      <SectionTitle
        title={"What people say, that you will also feel soon"}
        subTitle={
          "Capturing the essence of heartfelt testimonials, immerse yourself in shared experiences, for what people say, you will soon feel."
        }
        towColumn
      />

      <CustomSlider
        slidesData={testimonialDatas}
        breakpoints={breakpoints}
        autoplayDelay={2500}
        renderSlide={(item, index) => (
          <TestimonialCard item={item} key={index} />
        )}
      />
    </Section>
  );
};

export default Testimonials;
