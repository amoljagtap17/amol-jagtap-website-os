"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";
import { useTransition } from "react";

interface IDeleteAlertProps {
  open: boolean;
  setOpen: () => void;
  deleteAction: () => Promise<void>;
}

export function DeleteAlert({
  open,
  setOpen,
  deleteAction,
}: IDeleteAlertProps) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const onSubmit = () => {
    startTransition(async () => {
      try {
        await deleteAction();
        setOpen();

        toast({
          title: "Success",
          description: "record deleted successfully!",
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: (error as Error).message,
        });
      }
    });
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your data
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={setOpen}
            disabled={isPending}
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onSubmit}
            disabled={isPending}
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
