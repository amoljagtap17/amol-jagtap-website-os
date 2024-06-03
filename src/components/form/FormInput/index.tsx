"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

interface IFormInputProps {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  type?: "number" | "password" | "email" | "text";
  min?: string;
  max?: string;
}

export function FormInput({
  name,
  label,
  placeholder,
  description,
  type = "text",
  min,
  max,
}: IFormInputProps) {
  const { control, getFieldState } = useFormContext();
  const { error } = getFieldState(name);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              type={type}
              min={min}
              max={max}
              placeholder={placeholder}
              className={clsx(
                "border-2 border-current text-base leading-none focus-visible:ring-0 focus-visible:ring-offset-0",
                {
                  "border-destructive": error,
                }
              )}
            />
          </FormControl>
          {description ? (
            <FormDescription>{description}</FormDescription>
          ) : null}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
