import CustomAvatar from "@/components/basic/CustomAvatar";
import Section from "@/components/basic/Section";
import SectionTitle from "@/components/basic/SectionTitle";
import TestimonialCard from "@/components/basic/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


import Image from "next/image";

import React from "react";

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

const Testimonials = () => {
  return (
    <Section className={"bg-lightBgGray"}>
      <SectionTitle
        title={"What people say, that you will also feel soon"}
        subTitle={
          "Capturing the essence of heartfelt testimonials, immerse yourself in shared experiences, for what people say, you will soon feel."
        }
        towColumn
      />

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonialDatas?.map((item, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <TestimonialCard item={item} key={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
};

export default Testimonials;
