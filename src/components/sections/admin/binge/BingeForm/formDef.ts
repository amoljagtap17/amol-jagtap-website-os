import {
  BingeWatchCategory,
  BingeWatchChannel,
  BingeWatchGenre,
} from "@prisma/client";
import { z } from "zod";

enum DefaultEnum {
  DEFAULT = "",
}

export const bingeBackendValidationSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  description: z.string().min(3, {
    message: "Description must be at least 3 characters.",
  }),
  channel: z.nativeEnum(BingeWatchChannel, {
    message: "binge channel is required",
  }),
  category: z.nativeEnum(BingeWatchCategory, {
    message: "binge category is required",
  }),
  genre: z.nativeEnum(BingeWatchGenre, {
    message: "binge genre is required",
  }),
  rating: z.coerce
    .number({
      required_error: "Please provide rating",
      invalid_type_error: "Rating must be a number",
    })
    .int()
    .positive()
    .min(1, { message: "Rating should be atleast 1" })
    .max(10, { message: "Rating cannot be more than 10" }),
});

export const bingeFrontendValidationSchema =
  bingeBackendValidationSchema.extend({
    channel: z
      .union([z.nativeEnum(BingeWatchChannel), z.nativeEnum(DefaultEnum)])
      .refine((value) => value !== "", {
        message: "Please select a channel",
      }),
    category: z
      .union([z.nativeEnum(BingeWatchCategory), z.nativeEnum(DefaultEnum)])
      .refine((value) => value !== "", {
        message: "Please select a category",
      }),
    genre: z
      .union([z.nativeEnum(BingeWatchGenre), z.nativeEnum(DefaultEnum)])
      .refine((value) => value !== "", {
        message: "Please select a genre",
      }),
  });

export type BingeBackendFormType = z.infer<typeof bingeBackendValidationSchema>;
export type BingeFrontendFormType = z.infer<
  typeof bingeFrontendValidationSchema
>;

export const formDefaultValues: BingeFrontendFormType = {
  id: "",
  title: "",
  description: "",
  channel: DefaultEnum.DEFAULT,
  category: DefaultEnum.DEFAULT,
  genre: DefaultEnum.DEFAULT,
  rating: 0,
};
