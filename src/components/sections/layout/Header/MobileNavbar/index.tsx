"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "../Logo";
import { Navbar } from "../Navbar";
import { Socials } from "../Socials";

export function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="cursor-pointer scale-150" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <SheetClose asChild>
              <Logo />
            </SheetClose>
            <SheetClose asChild>
              <Navbar
                containerStyles="flex-col gap-y-6"
                linkStyles="text-xl block relative hover:text-primary hover:bg-inherit focus:bg-inherit transition-all"
                underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
              />
            </SheetClose>
          </div>
          <Socials containerStyles="flex gap-x-8" iconStyles="w-8 h-8" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
