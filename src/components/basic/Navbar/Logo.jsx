import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image src={"/images/logo/barzat-logo.svg"} height={150} width={150} alt="logo"/>
    </div>
  );
};

export default Logo;
