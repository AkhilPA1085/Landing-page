import Image from "next/image";
import React from "react";
import Section from "../../basic/Section";

const services = [
  {
    icon: "/images/services/support.png",
    title: "Customer Support",
    description: "Multilingual (English & Arabic) customer support service",
  },
  {
    icon: "/images/services/percent.png",
    title: "Save More",
    description: "Top deals & cashbacks across flights & hotels",
  },
  {
    icon: "/images/services/security.png",
    title: "Safe and Secure",
    description: "100% safe and secure payment transactions",
  },
  {
    icon: "/images/services/handshake.png",
    title: "Trusted by Many",
    description: "Over 500,000+ satisfied customer bookings and counting",
  },
];

const ServicesBar = () => {
  return (
    <Section className="p-8 bg-lightBgPink">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div className="item flex flex-col items-start text-start" key={index}>
            <Image src={service.icon} alt="icon" height={65} width={65} />
            <h6 className="text-2xl font-medium mt-4 mb-2">{service.title}</h6>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ServicesBar;
