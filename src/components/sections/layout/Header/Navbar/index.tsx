"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "portfolio", href: "/portfolio" },
  { name: "binge", href: "/binge" },
  { name: "favorites", href: "/favorites" },
  { name: "admin", href: "/admin" },
];

interface INavbarProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyles?: string;
}

export function Navbar({
  containerStyles,
  linkStyles,
  underlineStyles,
  ...restProps
}: INavbarProps) {
  const path = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className={`${containerStyles}`}>
        {navLinks.map((navLink) => (
          <NavigationMenuItem key={navLink.href}>
            <Link href={navLink.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle({
                  className: `capitalize ${linkStyles}`,
                })}
                {...restProps}
              >
                {navLink.href === path && (
                  <motion.span
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "tween" }}
                    layoutId="underline"
                    className={`${underlineStyles}`}
                  />
                )}
                {navLink.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
