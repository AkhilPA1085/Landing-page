import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { AlignJustify } from "lucide-react";
import Logo from "./Logo";


const MenuItems = ({menu}) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
            <Image src="/images/icons/action-button.svg" alt="menu" height={50} width={30}/>
            {/* <AlignJustify/> */}
        </SheetTrigger>
        <SheetContent className="bg-black text-white">
          <SheetHeader>
            <SheetTitle><Logo/></SheetTitle>
            <SheetDescription>
              <div className="flex flex-col items-start gap-4">
                {menu?.map((item, index) => (
                  <Link href={item?.url} key={index} className="uppercase font-semibold">{item?.name}</Link>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuItems;
