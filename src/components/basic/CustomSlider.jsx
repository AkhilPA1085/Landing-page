'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

const CustomSlider = ({ slidesData, breakpoints, autoplayDelay, renderSlide }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={breakpoints}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: autoplayDelay || 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      {slidesData?.map((item, index) => (
        <SwiperSlide key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
          {renderSlide(item, index)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSlider;
