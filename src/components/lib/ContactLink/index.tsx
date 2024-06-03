import { Button } from "@/components/ui/button";
import Link from "next/link";

import { ElementType } from "react";

interface IContactLinkProps {
  href: string;
  Icon?: ElementType;
  label: string;
}

export function ContactLink({ href, Icon, label }: IContactLinkProps) {
  return (
    <Button variant="ghost" asChild className="m-2 hover:bg-inherit">
      <Link href={href}>
        {Icon ? (
          <Icon className="rounded-full ring-4 ring-current ring-offset-4 mr-4" />
        ) : null}
        <span className="uppercase text-2xl font-bold tracking-widest">
          {label}
        </span>
      </Link>
    </Button>
  );
}
