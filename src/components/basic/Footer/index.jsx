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
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-2">
          <Logo />
          <p className="opacity-65 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            officia!
          </p>
        </div>
        <div className="col-span-1">
          <div className="font-bold text-md">Pages</div>
          <ul className="list-none opacity-65">
            <li className="text-sm opacity-65 py-2">About</li>
            <li className="text-sm opacity-65 py-2">Services</li>
            <li className="text-sm opacity-65 py-2">Packages</li>
            <li className="text-sm opacity-65 py-2">Contact</li>
          </ul>
        </div>
        <div className="col-span-1">
          <div className="font-bold text-md">Top Packages</div>
          <ul className="list-none opacity-65">
            <li className="text-sm opacity-65 py-2">About</li>
            <li className="text-sm opacity-65 py-2">Services</li>
            <li className="text-sm opacity-65 py-2">Packages</li>
            <li className="text-sm opacity-65 py-2">Contact</li>
          </ul>
        </div>
        <div className="col-span-1">
          <div className="font-bold text-md">Contact</div>
          <ul className="list-none opacity-65">
            {contacts.map((item, index) => (
              <li className="flex items-start py-2" key={index}>
                <div className="flex-none mr-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={20}
                    height={20}
                    className="flex-none"
                  />
                </div>
                <div className="flex flex-col items-start flex-grow">
                  <div className="font-semibold text-sm">{item.title}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
