import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CustomInput } from "./CustomInput";

const ContactForm = () => {
  return (
    <Card className="w-full bg-white text-black rounded-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-darkBgBlue">Contact us</CardTitle>
        <CardDescription>Your Next Adventure Begins Here!</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <CustomInput id="fullname" label="Full Name" type="text" />
            <CustomInput id="email" label="Email" type="email" />
            <CustomInput
              id="contactnumber"
              label="Contact Number"
              type="tel"
            />
            <CustomInput
              id="message"
              label="Message"
              type="tel"
              textarea
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="blue-btn w-full">Submit</Button>
      </CardFooter>
    </Card>
  );
};

export default ContactForm;
