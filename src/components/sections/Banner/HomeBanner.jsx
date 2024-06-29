"use client"
import React, { useRef } from "react";
import { Button } from "../../ui/button";
import SideBar from "../../basic/SideBar";
import ContainerWrapper from "../../basic/ContainerWrapper";
import { useScroll, useTransform, motion } from "framer-motion";

const HomeBanner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const cloudMovement = {
    x: ["0%", "50%", "100%"],
    transition: {
      duration: 30,
      repeat: Infinity,
      ease: "linear",
    },
  };

  return (
    <div
      ref={ref}
      className="h-screen w-full overflow-hidden relative flex flex-col items-center justify-center"
    >
      <ContainerWrapper>
        <motion.div
          className="grid md:grid-cols-2 items-center h-full z-10 relative place-items-center"
          style={{ y: textY }}
        >
          {/* Left Content */}
          <div className="flex flex-col justify-between h-full p-8 md:py-16">
            <div className="text-white">
              <h1 className="text-3xl md:text-6xl font-semibold">
                Discover New Destinations
              </h1>
              <p className="text-lg md:text-xl pb-6">
                Embark on Unforgettable Journeys: Where Every Destination Tells
                a Unique Story.
              </p>
              <Button className="yellow-btn">Discover Now</Button>
            </div>
            {/* Glass Effect Section */}
            <div className="glass-effect flex flex-col md:flex-row items-center justify-center gap-4 mt-10 p-4">
              <div className="border-r pr-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                facilis!
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                facilis!
              </div>
            </div>
          </div>
          {/* Right Sidebar */}
          <div className="hidden md:flex md:justify-end">
            <SideBar />
          </div>
        </motion.div>
      </ContainerWrapper>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/images/banner/banner.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <motion.div
        className="absolute -left-3 right-0 top-0 bottom-0 z-5"
        style={{
          backgroundImage: "url(/images/banner/big-cloud.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY,
        }}
        animate={cloudMovement}
      ></motion.div>
    </div>
  );
};

export default HomeBanner;
