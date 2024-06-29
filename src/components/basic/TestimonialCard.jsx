import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import CustomAvatar from "./CustomAvatar";

const TestimonialCard = ({item}) => {
  return (
    <Card className="bg-white rounded-xl">
      <CardHeader>
        <CardTitle>
          <Image
            src={"/images/icons/quotes.png"}
            alt=""
            height={56}
            width={56}
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="border-b border-gray-300">
        <p>{item?.text}</p>
      </CardContent>
      <CardFooter className="pt-4">
        <CustomAvatar image={item?.image} name={"User"} />
        <div className="flex items-start flex-col ml-4 text-start">
          <h3 className="font-bold capitalize">{item?.name}</h3>
          <p className="text-sm opacity-65">{item?.position}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
