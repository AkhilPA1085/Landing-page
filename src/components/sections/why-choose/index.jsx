import Section from "@/components/basic/Section";
import SectionTitle from "@/components/basic/SectionTitle";
import Image from "next/image";
import React from "react";

const services = [
  {
    icon: "/images/why-choose/icon-1.png",
    title: "Effortless Transfers",
    description:
      "Start your adventure seamlessly with our convenient airport pickup services, ensuring a smooth",
  },
  {
    icon: "/images/why-choose/icon-2.png",
    title: "Affordable Excellence",
    description:
      "Discover the perfect blend of low prices and unparalleled quality, making every journey an",
  },
  {
    icon: "/images/why-choose/icon-3.png",
    title: "Expert Guidance",
    description:
      "Immerse yourself in the richness of your destination with our knowledgeable tour guides",
  },
];

const WhyChooseUs = () => {
  return (
    <Section className="bg-lightBgGray">
      <SectionTitle
        title="Why you should choose Barzat"
        subTitle="Choose us for unparalleled expertise, seamless experiences, and a journey tailored to your dreams."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="mt-28 order-2 md:order-1">
          <ul className="list-none">
            {services.map((item, index) => (
              <li className="flex items-start pb-12" key={index}>
                <div className="flex-none mr-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="flex-none"
                  />
                </div>
                <div className="flex flex-col items-start flex-grow">
                  <div className="font-semibold text-2xl">{item.title}</div>
                  <div className="text-lg opacity-65">{item.description}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="/images/why-choose/why.png"
            alt="Why choose us"
            width={1080}
            height={1080}
          />
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;
