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

export function ImageCard({ image, title, className }) {
  return (
    <Card className={`rounded-2xl relative p-0 group ${className}`}>
      <CardContent className="p-0">
        <Image
          src={image}
          className="w-full h-full"
          width={1080}
          height={1080}
        />
      </CardContent>
      <CardHeader className="absolute inset-0">
        <CardTitle className="text-white text-xl capitalize">{title}</CardTitle>
      </CardHeader>
      <CardFooter className="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button className="bg-white py-2 px-4 rounded-2xl uppercase text-black font-bold hover:bg-white">
          view package
        </Button>
      </CardFooter>
    </Card>
  );
}
