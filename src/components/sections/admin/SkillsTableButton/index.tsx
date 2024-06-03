import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { SkillsForm } from "../SkillsForm";

export function SkillsTableButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="absolute right-0" size="lg">
          Add Skill
        </Button>
      </SheetTrigger>

      <SheetContent className="w-[100vw] md:min-w-[50vw] xl:min-w-[40vw] flex flex-col h-full">
        <SheetHeader>
          <SheetTitle>Add New Skill</SheetTitle>
          <SheetDescription>
            Add details for your new skill here. Click submit when you&apos;re
            done.
          </SheetDescription>
        </SheetHeader>
        <SkillsForm />
      </SheetContent>
    </Sheet>
  );
}
