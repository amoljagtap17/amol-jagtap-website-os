import { getBiographyInfo } from "@/actions/biography";
import { Biography } from "@/components/sections";

export default async function Bio() {
  const bioData = await getBiographyInfo();

  return <Biography {...bioData} />;
}
