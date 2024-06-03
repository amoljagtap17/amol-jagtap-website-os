import { getBingeInfo } from "@/actions/binge";
import { BingeTabsContent } from "./BingeTabsContent";

export async function BingeTabs() {
  const bingeData = await getBingeInfo();

  const uniqueCategories = [
    "ALL",
    ...Array.from(new Set(bingeData.map((item) => item.category))),
  ];

  return <BingeTabsContent data={bingeData} categories={uniqueCategories} />;
}
