"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { AuthButtons } from "./AuthButtons";
import { Logo } from "./Logo";
import { MobileNavbar } from "./MobileNavbar";
import { Navbar } from "./Navbar";

export function Header() {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setHeader(window.scrollY > 50);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header
      className={clsx({
        "py-4 shadow-xl": header,
        "py-4": !header,
        "sticky top-0 z-20 transition-all bg-inherit border-b-4 border-current ":
          true,
      })}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex gap-x-8 justify-center items-center">
          <Navbar
            containerStyles="hidden xl:flex gap-x-8 items-center"
            linkStyles="relative hover:text-primary hover:bg-inherit focus:bg-inherit transition-all min-w-24"
            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
          />
          <div className="w-7 h-7">
            <AuthButtons />
          </div>
        </div>
        <div className="block xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
}
