"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BingeWatch } from "@prisma/client";
import { useState } from "react";
import { BingeList } from "../../BingeList";

interface IBingeTabsContentProps {
  data: Omit<BingeWatch, "updatedAt">[];
  categories: string[];
}

export function BingeTabsContent({ data, categories }: IBingeTabsContentProps) {
  const [category, setCategory] = useState("ALL");

  const filteredData =
    category === "ALL"
      ? data
      : data.filter((item) => item.category === category);

  return (
    <Tabs defaultValue={category} className="mb-24 xl:mb-48">
      <TabsList className="w-full grid h-full md:grid-cols-4 mb-12 mx-auto md:border bg-[#f8f5ef]">
        {categories.map((category, index) => (
          <TabsTrigger
            value={category}
            key={index}
            onClick={() => setCategory(category)}
            className="capitalize w-[170px] md:w-auto font-extrabold tracking-widest"
          >
            {category.replace("_", " ")}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value={category}>
        <BingeList data={filteredData} />
      </TabsContent>
    </Tabs>
  );
}
