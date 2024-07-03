'use client'
import * as React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import CustomButton from "./CustomButton";

export function ImageCard({ image, title, className, widthChange,index }) {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  if (widthChange) {
    return (
      <Card
        className={`relative overflow-hidden transition-all duration-300 rounded-md border-none ${
          hoveredIndex === index ? "scale-105" : ""
        }`}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <CardContent className="p-0 w-full h-full">
          <Image
            src={image}
            alt={`Package ${index + 1}`}
            height={100}
            width={100}
            className={`transition-transform duration-300 ${
              hoveredIndex === index ? "scale-105" : "scale-100"
            }`}
          />
        </CardContent>
      </Card>
    );
  }
  return (
    <Card className={`rounded-xl relative p-0 group ${className}`}>
      <CardContent className="p-0 w-full h-full">
        <Image
          src={image}
          className="w-full h-full object-cover rounded-xl"
          width={1080}
          height={1080}
        />
      </CardContent>
      <CardHeader className="absolute inset-0">
        <CardTitle className="text-white text-xl capitalize">{title}</CardTitle>
      </CardHeader>
      <CardFooter className="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <CustomButton className="bg-white hover:bg-white">
          view package
        </CustomButton>
      </CardFooter>
    </Card>
  );
}
