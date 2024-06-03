"use client";

import { DataTableSortHeader } from "@/components/lib";
import { Badge } from "@/components/ui/badge";
import { Skill } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Omit<Skill, "createdAt" | "updatedAt">>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableSortHeader column={column} label="Name" />
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableSortHeader column={column} label="Category" />
    ),
    cell: ({ cell }) => {
      const value = cell.getValue() as string;

      return (
        <Badge
          variant={value === "PRIMARY" ? "default" : "secondary"}
          className="w-28 justify-center items-center border-2 border-current"
        >
          {value}
        </Badge>
      );
    },
  },
  {
    accessorKey: "percentage",
    header: ({ column }) => (
      <DataTableSortHeader column={column} label="Percentage" />
    ),
  },
];
