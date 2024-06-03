import { Button } from "@/components/ui/button";
import { Column } from "@tanstack/react-table";
import {
  ChevronDownIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
} from "lucide-react";

interface IDataTableSortHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  label: string;
}

export function DataTableSortHeader<TData, TValue>({
  column,
  label,
}: IDataTableSortHeaderProps<TData, TValue>) {
  const Icon =
    column.getIsSorted() === "desc"
      ? ChevronDownIcon
      : column.getIsSorted() === "asc"
      ? ChevronUpIcon
      : ChevronsUpDownIcon;

  return (
    <Button
      variant="ghost"
      size="sm"
      className="-ml-3 h-8 data-[state=open]:bg-accent"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {label}
      <Icon className="ml-2 h-4 w-4" />
    </Button>
  );
}
