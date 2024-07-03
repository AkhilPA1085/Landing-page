"use client";
import { ImageCard } from "@/components/basic/ImageCard";
import Section from "@/components/basic/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    image: "/images/packagesBanner/image-1.png",
  },
  {
    image: "/images/packagesBanner/image-2.png",
  },
  {
    image: "/images/packagesBanner/image-3.png",
  },
  {
    image: "/images/packagesBanner/image-4.png",
  },
  {
    image: "/images/packagesBanner/image-5.png",
  },
];

const PackagesBanner = () => {
  return (
    <Section className="py-[50px] bg-darkBgBlue">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center h-full gap-8">
        <div className="grid-item">
          <Image
            src={"/images/packagesBanner/barzat-logo-yellow.png"}
            height={60}
            width={60}
            alt="Barzat Logo Yellow"
          />
          <div
            className="relative flex items-center justify-center h-full w-full"
            style={{
              backgroundImage: "url(/images/packagesBanner/barzat-logo.png)",
              backgroundSize: "contain",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-content pt-20 z-10">
              <div className="title md:text-6xl text-white font-semibold">
                Traveler’s Choice Best of the Best
              </div>
              <div className="text-xl opacity-65 mt-2 mb-6 text-white">
                Exclusivity Redefined: Our Best of the Best Collection
              </div>
              <Button className="yellow-btn">See Packages</Button>
            </div>
          </div>
        </div>
        <div className="grid-item flex items-center gap-2">
          {images.map((item, index) => (
            <ImageCard key={index} image={item?.image} index={index} widthChange/>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PackagesBanner;
