import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface IEditSheetProps {
  open: boolean;
  setOpen: () => void;
  sheetTitle: string;
  sheetDescription: string;
  children: React.ReactNode;
}

export function EditSheet({
  open,
  setOpen,
  sheetTitle,
  sheetDescription,
  children,
}: IEditSheetProps) {
  return (
    <Sheet defaultOpen={open} onOpenChange={setOpen}>
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
