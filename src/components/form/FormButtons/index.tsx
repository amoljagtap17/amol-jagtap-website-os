"use client";

import { Button } from "@/components/ui/button";
import { SheetFooter } from "@/components/ui/sheet";
import { useFormState } from "react-hook-form";

export function FormButtons() {
  const { isSubmitting } = useFormState();

  return (
    <SheetFooter className="gap-4 sm:gap-0">
      <Button
        type="reset"
        variant="outline"
        className="border-current min-w-24"
        disabled={isSubmitting}
      >
        Reset
      </Button>
      <Button type="submit" className="min-w-24" disabled={isSubmitting}>
        Submit
      </Button>
    </SheetFooter>
  );
}
