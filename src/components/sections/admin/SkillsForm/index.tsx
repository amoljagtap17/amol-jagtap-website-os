"use client";

import { FormButtons } from "@/components/form";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SkillsFormFields } from "../SkillsFormFields";

const formSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  category: z.enum(["PRIMARY", "SECONDARY"], {
    required_error: "You need to select a category type.",
  }),
  percentage: z.array(z.number()),
});

type formType = Omit<z.infer<typeof formSchema>, "category">;

const formDefaultValues: formType = {
  id: "",
  name: "",
  percentage: [10],
};

interface ISkillsFormProps {
  defaultValues?: formType;
}

export function SkillsForm({
  defaultValues = formDefaultValues,
}: ISkillsFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
    shouldUnregister: true,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("values::", values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onReset={() => form.reset()}
        className="flex flex-col h-full"
      >
        <SkillsFormFields />
        <FormButtons />
      </form>
    </Form>
  );
}
