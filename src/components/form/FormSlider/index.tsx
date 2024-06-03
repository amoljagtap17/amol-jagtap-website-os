"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import { useFormContext } from "react-hook-form";

interface IFormSliderProps {
  name: string;
  label: string;
}

export function FormSlider({ name, label }: IFormSliderProps) {
  const { control, getFieldState } = useFormContext();
  const { error } = getFieldState(name);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl className="pt-4">
            <Slider
              defaultValue={[field.value]}
              max={100}
              step={1}
              min={0}
              {...field}
              onValueChange={field.onChange}
            />
          </FormControl>
          <FormDescription>{field.value}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
