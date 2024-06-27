import React from "react";
import MenuItems from "./MenuItems";
import ContainerWrapper from "../ContainerWrapper";
import Logo from "./Logo";
import NavigationBar from "./NavigationBar";
const menu = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "about",
    url: "/about",
  },
  {
    name: "contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 right-0 py-4">
      <ContainerWrapper>
        <div className="flex items-center justify-between">
          <Logo />
          <NavigationBar menu={menu}/>
          <MenuItems menu={menu}/>
        </div>
      </ContainerWrapper>
    </header>
  );
};

export default Navbar;
