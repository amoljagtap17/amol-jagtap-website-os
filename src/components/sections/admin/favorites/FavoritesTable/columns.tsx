"use client";

import { DataTableSortHeader } from "@/components/lib";
import { Badge } from "@/components/ui/badge";
import { Favorite, FavoriteCategory } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

type ColumnDefType = Pick<Favorite, "id" | "value" | "cite"> & {
  category: Pick<FavoriteCategory, "id" | "name">;
};

export const columns: ColumnDef<ColumnDefType>[] = [
  {
    accessorKey: "category.name",
    header: ({ column }) => (
      <DataTableSortHeader column={column} label="Category" />
    ),
    cell: ({ cell }) => {
      const value = cell.getValue() as string;

      return (
        <Badge className="w-28 justify-center items-center border-2 border-current">
          {value}
        </Badge>
      );
    },
  },
  {
    accessorKey: "value",
    header: ({ column }) => (
      <DataTableSortHeader column={column} label="Value" />
    ),
  },
  {
    accessorKey: "cite",
    header: ({ column }) => (
      <DataTableSortHeader column={column} label="Cite" />
    ),
  },
];
