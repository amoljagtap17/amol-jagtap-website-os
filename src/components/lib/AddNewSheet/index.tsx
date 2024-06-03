import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface IAddNewSheetProps {
  children: React.ReactNode;
  buttonLabel: string;
  sheetTitle: string;
  sheetDescription: string;
  open: boolean;
  onOpenChange: VoidFunction;
}

export function AddNewSheet({
  children,
  buttonLabel,
  sheetDescription,
  sheetTitle,
  open,
  onOpenChange,
}: IAddNewSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button size="lg">{buttonLabel}</Button>
      </SheetTrigger>

      <SheetContent className="w-[100vw] md:min-w-[50vw] xl:min-w-[40vw] flex flex-col h-full">
        <SheetHeader>
          <SheetTitle>{sheetTitle}</SheetTitle>
          <SheetDescription>{sheetDescription}</SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
}
