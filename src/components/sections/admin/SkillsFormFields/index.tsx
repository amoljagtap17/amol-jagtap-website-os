"use client";

import { FormInput, FormRadioGroup, FormSlider } from "@/components/form";

export function SkillsFormFields() {
  return (
    <div className="grow">
      <div className="grid grid-cols-1 gap-4">
        <FormInput name="name" label="Name" placeholder="Name.." />
        <FormRadioGroup
          name="category"
          label="Category"
          items={[
            {
              value: "PRIMARY",
              label: "Primary",
            },
            {
              value: "SECONDARY",
              label: "Secondary",
            },
          ]}
        />
        <FormSlider name="percentage" label="Percentage" />
      </div>
    </div>
  );
}
