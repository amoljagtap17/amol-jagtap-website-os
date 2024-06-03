"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

interface IFormSelectProps {
  name: string;
  label: string;
  options: {
    value: string;
    label: string;
  }[];
  placeholder?: string;
  description?: string;
}

export function FormSelect({
  name,
  label,
  options,
  placeholder,
  description,
}: IFormSelectProps) {
  const { control, getFieldState } = useFormContext();
  const { error } = getFieldState(name);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            value={field.value}
          >
            <FormControl
              className={clsx(
                "border-2 border-current text-base leading-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0",
                {
                  "border-destructive": error,
                }
              )}
            >
              <SelectTrigger>
                <SelectValue defaultValue="" placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="border-2 border-current text-base leading-none bg-background">
              {options.map(({ value, label }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description ? (
            <FormDescription>{description}</FormDescription>
          ) : null}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
