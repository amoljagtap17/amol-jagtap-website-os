import { getBingeInfo } from "@/actions/binge";
import { DataTable } from "@/components/lib";
import { columns } from "./columns";

export async function BingeTable() {
  const bingeData = await getBingeInfo();

  return (
    <DataTable
      data={bingeData}
      columns={columns}
      caption="Binge Data"
      filterInputPlaceholder="Filter binge by title..."
      filterInputColumn="title"
    />
  );
}
