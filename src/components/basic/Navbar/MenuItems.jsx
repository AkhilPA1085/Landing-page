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


const MenuItems = ({menu}) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
            <Image src="/images/icons/action-button.svg" alt="menu" height={50} width={30}/>
            {/* <AlignJustify/> */}
        </SheetTrigger>
        <SheetContent className="bg-white">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              <div className="flex flex-col items-start gap-4">
                {menu?.map((item, index) => (
                  <Link href={item?.url} key={index}>{item?.name}</Link>
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
