"use client";

import { MoreVerticalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { DeleteAlert } from "./DeleteAlert";
import { EditSheet } from "./EditSheet";

interface IDataTableActionsProps<T> {
  data: T;
  deleteAction: (id: string) => Promise<void>;
  EditComponent: React.FunctionComponent<{
    defaultValues: T;
    onSubmit: VoidFunction;
  }>;
}

export function DataTableActions<T extends { id: string }>({
  data,
  deleteAction,
  EditComponent,
}: IDataTableActionsProps<T>) {
  const deleteActionWithId = deleteAction.bind(null, data.id);
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  const [openEditSheet, setOpenEditSheet] = useState(false);

  const handleSetOpenDeleteAlert = () => {
    setOpenDeleteAlert((prevOpenDeleteAlert) => !prevOpenDeleteAlert);
  };

  const handleSetOpenEditSheet = () => {
    setOpenEditSheet((prevOpenEditSheet) => !prevOpenEditSheet);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 w-8 p-0 focus-visible:ring-offset-0 focus-visible:outline-offset-0 focus-visible:ring-0"
          >
            <span className="sr-only">Open menu</span>
            <MoreVerticalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-background border-2 border-current ring-0 focus:ring-0"
        >
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={handleSetOpenEditSheet}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-current" />
          <DropdownMenuItem
            className="bg-red-400 focus:bg-red-500"
            onClick={handleSetOpenDeleteAlert}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {openDeleteAlert ? (
        <DeleteAlert
          open={openDeleteAlert}
          setOpen={handleSetOpenDeleteAlert}
          deleteAction={deleteActionWithId}
        />
      ) : null}
      {openEditSheet ? (
        <EditSheet
          open={openEditSheet}
          setOpen={handleSetOpenEditSheet}
          sheetTitle="Edit Binge"
          sheetDescription="Update details for your binge here. Click submit when you're done."
        >
          <EditComponent
            defaultValues={data}
            onSubmit={handleSetOpenEditSheet}
          />
        </EditSheet>
      ) : null}
    </>
  );
}
