"use client";

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const icons = [
  {
    href: "/",
    name: Linkedin,
  },
  {
    href: "/",
    name: Github,
  },
];

interface ISocialsProps {
  containerStyles: string;
  iconStyles: string;
}

export function Socials({ containerStyles, iconStyles }: ISocialsProps) {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        const Icon = icon.name;

        return (
          <Link href={icon.href} key={index}>
            <Icon className={`${iconStyles}`} />
          </Link>
        );
      })}
    </div>
  );
}
