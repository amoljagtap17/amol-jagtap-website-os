"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = ["binge"];

export function AdminTabs() {
  const pathname = usePathname();

  return (
    <Tabs
      defaultValue={pathname === "/admin" ? "/admin/biography" : pathname}
      className="w-full"
    >
      <TabsList className="w-full grid h-full md:grid-cols-6 mx-auto md:border bg-[#f8f5ef]">
        {tabs.map((tab) => (
          <TabsTrigger
            value={`/admin/${tab}`}
            asChild
            key={tab}
            className="capitalize font-semibold"
          >
            <Link href={`/admin/${tab}`}>{tab}</Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
