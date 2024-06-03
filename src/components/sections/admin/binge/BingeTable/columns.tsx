"use client";

import { deleteBinge } from "@/actions/binge";
import { DataTableActions, DataTableSortHeader } from "@/components/lib";
import { Badge } from "@/components/ui/badge";
import { BingeWatch, BingeWatchCategory } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { BingeForm } from "../BingeForm";

type ColumnDefType = Omit<BingeWatch, "updatedAt">;

const badgeColors = {
  [BingeWatchCategory.COURSES]: "bg-blue-500",
  [BingeWatchCategory.MOVIES]: "bg-teal-500",
  [BingeWatchCategory.WEB_SERIES]: "bg-rose-500",
};

export const columns: ColumnDef<ColumnDefType>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableSortHeader column={column} label="Title" />
    ),
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableSortHeader column={column} label="Description" />
    ),
  },
  {
    accessorKey: "channel",
    header: ({ column }) => (
      <DataTableSortHeader column={column} label="Channel" />
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableSortHeader column={column} label="Category" />
    ),
    cell: ({ cell }) => {
      const value = cell.getValue() as BingeWatchCategory;

      return (
        <Badge
          className={`w-28 justify-center items-center border-2 border-current ${badgeColors[value]}`}
        >
          {value.replace("_", " ")}
        </Badge>
      );
    },
  },
  {
    accessorKey: "genre",
    header: ({ column }) => (
      <DataTableSortHeader column={column} label="Genre" />
    ),
  },
  {
    accessorKey: "rating",
    header: ({ column }) => (
      <DataTableSortHeader column={column} label="Rating" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DataTableActions<ColumnDefType>
          data={row.original}
          deleteAction={deleteBinge}
          EditComponent={BingeForm}
        />
      );
    },
  },
];
