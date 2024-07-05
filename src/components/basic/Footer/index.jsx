import React from "react";
import Section from "../Section";
import Logo from "../Navbar/Logo";
import Image from "next/image";

const contacts = [
  {
    icon: "/images/contacts/phone.png",
    title: "+91 12456789",
  },
  {
    icon: "/images/contacts/mail.png",
    title: "test@gmail.com",
  },
  {
    icon: "/images/contacts/location.png",
    title: "Kerla,India",
  },
];

const Footer = () => {
  return (
    <Section className={"bg-black text-white"}>
      <div className="grid grid-cols-1 md:grid-cols-4 border-b pb-4">
        <div className="grid-item col-span-3">
          <Logo />
          <p className="opacity-65 text-sm pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            officia!
          </p>
        </div>
        <div className="grid-item grid grid-cols-3 gap-8">
          <div>
            <div className="font-bold text-md">Pages</div>
            <ul className="list-none opacity-65">
              <li className="text-sm opacity-65 py-2">About</li>
              <li className="text-sm opacity-65 py-2">Services</li>
              <li className="text-sm opacity-65 py-2">Packages</li>
              <li className="text-sm opacity-65 py-2">Contact</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-md">Top packages</div>
            <ul className="list-none opacity-65">
              <li className="text-sm opacity-65 py-2">About</li>
              <li className="text-sm opacity-65 py-2">Services</li>
              <li className="text-sm opacity-65 py-2">Packages</li>
              <li className="text-sm opacity-65 py-2">Contact</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-md">Contact</div>
            <ul className="list-none opacity-65">
              <li className="text-sm opacity-65 py-2">About</li>
              <li className="text-sm opacity-65 py-2">Services</li>
              <li className="text-sm opacity-65 py-2">Packages</li>
              <li className="text-sm opacity-65 py-2">Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <Image
          src={"/images/logo/barzat logo-footer-large.png"}
          width={910}
          height={212}
        />
      </div>
    </Section>
  );
};

export default Footer;
