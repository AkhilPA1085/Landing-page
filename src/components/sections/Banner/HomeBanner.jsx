"use client"
import React, { useRef } from "react";
import { Button } from "../../ui/button";
import SideBar from "../../basic/SideBar";
import ContainerWrapper from "../../basic/ContainerWrapper";
import { useScroll, useTransform, motion } from "framer-motion";
import CustomButton from "@/components/basic/CustomButton";
import Image from "next/image";

const HomeBanner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  
  // Add scale transform for zoom effect
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div
      ref={ref}
      className="md:h-screen w-full overflow-hidden relative flex flex-col items-center justify-center py-28"
    >
      <ContainerWrapper>
        <div
          className="grid md:grid-cols-2 items-center h-full z-10 relative place-items-center justify-center"
        >
          {/* Left Content */}
          <div className="flex flex-col justify-between h-full md:py-16">
            <div className="text-white">
              <h1 className="text-3xl md:text-6xl font-semibold">
                Discover New Destinations
              </h1>
              <p className="text-base md:text-xl pb-6">
                Embark on Unforgettable Journeys: Where Every Destination Tells
                a Unique Story.
              </p>
              <CustomButton>Discover Now</CustomButton>
            </div>
            {/* Glass Effect Section */}
            <div className="glass-effect flex items-center justify-center gap-4 mt-10 p-4">
              <div className="border-r pr-4 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                facilis!
              </div>
              <div className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                facilis!
              </div>
            </div>
          </div>
          {/* Right Sidebar */}
          <div className="hidden md:flex md:justify-end w-full">
            <SideBar />
          </div>
        </div>
      </ContainerWrapper>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/images/banner/full-banner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <motion.div className="cloud-container absolute top-[50%] bottom-0" style={{
        // y: backgroundY,
        scale: scale,
      }}>
        <Image src={'/images/banner/big-cloud.png'} height={720} width={720} className=""/>
      </motion.div>
      
    </div>
  );
};

export default HomeBanner;
