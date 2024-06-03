"use client";

import { createBinge, editBinge } from "@/actions/binge";
import { FormButtons } from "@/components/form";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BingeFormFields } from "../BingeFormFields";
import {
  BingeBackendFormType,
  BingeFrontendFormType,
  bingeFrontendValidationSchema,
  formDefaultValues,
} from "./formDef";

interface IBingeFormProps {
  defaultValues?: BingeFrontendFormType;
  onSubmit?: VoidFunction;
}

export function BingeForm({
  defaultValues = formDefaultValues,
  onSubmit,
}: IBingeFormProps) {
  const form = useForm<BingeFrontendFormType>({
    resolver: zodResolver(bingeFrontendValidationSchema),
    defaultValues,
    shouldUnregister: true,
  });
  const { toast } = useToast();

  async function onSubmitHandler(values: BingeFrontendFormType) {
    const isEdit = !!defaultValues.id;

    try {
      if (isEdit) {
        await editBinge({
          ...values,
          id: defaultValues.id,
        } as BingeBackendFormType);
      } else {
        await createBinge(values as BingeBackendFormType);
      }

      toast({
        title: "Success",
        description: isEdit
          ? "Binge edited successfully!"
          : "Binge created successfully!",
      });

      onSubmit && onSubmit();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: (error as Error).message,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitHandler)}
        onReset={() => form.reset()}
        className="flex flex-col h-full"
      >
        <BingeFormFields />
        <FormButtons />
      </form>
    </Form>
  );
}
