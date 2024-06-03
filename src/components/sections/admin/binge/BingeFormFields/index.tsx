"use client";

import { FormInput, FormSelect } from "@/components/form";
import {
  BingeWatchCategory,
  BingeWatchChannel,
  BingeWatchGenre,
} from "@prisma/client";

const channelOptions = Object.keys(BingeWatchChannel).map((key) => ({
  value: key,
  label: key,
}));

const categoryOptions = Object.keys(BingeWatchCategory).map((key) => ({
  value: key,
  label: key,
}));

const genreOptions = Object.keys(BingeWatchGenre).map((key) => ({
  value: key,
  label: key,
}));

export function BingeFormFields() {
  return (
    <div className="grow">
      <div className="grid grid-cols-1 gap-4">
        <FormInput name="title" label="Title" placeholder="Title" />
        <FormInput
          name="description"
          label="Description"
          placeholder="Description.."
        />
        <FormSelect
          name="channel"
          label="Channel"
          placeholder="Select Channel"
          options={channelOptions}
        />
        <FormSelect
          name="category"
          label="Category"
          placeholder="Select Category"
          options={categoryOptions}
        />
        <FormSelect
          name="genre"
          label="Genre"
          placeholder="Select Genre"
          options={genreOptions}
        />
        <FormInput
          type="number"
          min="0"
          max="10"
          name="rating"
          label="Rating"
          placeholder="Rating"
        />
      </div>
    </div>
  );
}
