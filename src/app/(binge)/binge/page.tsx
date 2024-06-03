import { Heading } from "@/components/lib";
import { BingeTabs } from "@/components/sections";

export default function BingePage() {
  return (
    <div className="container py-10">
      <Heading text="My Binge Watch" />
      <BingeTabs />
    </div>
  );
}
