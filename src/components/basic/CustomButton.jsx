import React from "react";
import { Button } from "../ui/button";

const CustomButton = ({ children,onClick,className }) => {
  return (
    <Button
      onClick={onClick}
      className={`bg-yellow py-6 px-10 text-purple text-base uppercase rounded-xl font-semibold hover:bg-yellow ${className}`}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
