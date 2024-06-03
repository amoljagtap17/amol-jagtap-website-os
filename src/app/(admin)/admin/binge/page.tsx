import { Heading } from "@/components/lib";
import { BingeAdd, BingeTable } from "@/components/sections";

export default function AdminBingePage() {
  return (
    <div className="flex flex-col gap-6">
      <Heading text="Manage Binge Data" />
      <BingeAdd />
      <BingeTable />
    </div>
  );
}
