import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CustomAvatar = ({image,name}) => {
  return (
    <Avatar>
      <AvatarImage src={image} />
      <AvatarFallback>{name}</AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
