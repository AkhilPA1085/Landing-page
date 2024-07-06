import ContactForm from "@/components/basic/ContactForm";
import Section from "@/components/basic/Section";
import Image from "next/image";
import React from "react";
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

const ContactUs = () => {
  return (
    <Section className={"md:bg-white bg-darkBgBlue pt-0"}>
      <div className="contact-form-wrapper rounded-xl md:p-8 md:bg-darkBgBlue text-white text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-6">
          <div className="grid-item" style={{
              backgroundImage: "url(/images/packagesBanner/barzat-logo.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>
            <div className="title md:text-6xl text-white font-semibold">
              We are just one Message Away!
            </div>
            <div className="text-xl opacity-65 mt-2 mb-6 text-white">
              Submit the Form, and Our Travel Agent Will Get in Touch With You
              Shortly.
            </div>

            <ul className="list-none pt-20">
              {contacts?.map((item, index) => (
                <li className="flex items-start pb-8" key={index}>
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
                    <div className="font-normal text-lg">{item.title}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid-item w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;
