"use client";

import { AddNewSheet } from "@/components/lib";
import { BingeForm } from "@/components/sections";
import { useState } from "react";

export function BingeAdd() {
  const [open, setOpen] = useState(false);

  const onOpenChangeHandler = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      <AddNewSheet
        open={open}
        onOpenChange={onOpenChangeHandler}
        buttonLabel="Add Binge"
        sheetTitle="Add New Binge"
        sheetDescription="Add details for your new binge here. Click submit when you're done."
      >
        <BingeForm onSubmit={onOpenChangeHandler} />
      </AddNewSheet>
    </div>
  );
}
