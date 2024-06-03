import { BingeCard } from "@/components/lib";
import { BingeWatch } from "@prisma/client";

interface IBingeListProps {
  data: Omit<BingeWatch, "updatedAt">[];
}

export function BingeList({ data }: IBingeListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      {data.map((binge) => (
        <BingeCard key={binge.id} {...binge} />
      ))}
    </div>
  );
}
