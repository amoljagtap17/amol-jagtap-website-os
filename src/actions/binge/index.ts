"use server";

import { bingeBackendValidationSchema } from "@/components/sections";
import { prisma } from "@/services/prisma";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getBingeInfo() {
  const bingeInfo = await prisma.bingeWatch.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      category: true,
      channel: true,
      genre: true,
      rating: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return bingeInfo;
}

export async function createBinge(formData: Prisma.BingeWatchCreateInput) {
  const validatedFields = bingeBackendValidationSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = validatedFields.data;

  try {
    await prisma.bingeWatch.create({ data });
  } catch (e) {
    throw new Error("Failed to create new binge");
  }

  revalidatePath("/admin/binge");
  redirect("/admin/binge");
}

export async function editBinge(formData: Prisma.BingeWatchCreateInput) {
  const validatedFields = bingeBackendValidationSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { id, ...data } = validatedFields.data;

  try {
    await prisma.bingeWatch.update({
      data,
      where: {
        id,
      },
    });
  } catch (e) {
    console.log("e::", e);
    throw new Error("Failed to update binge");
  }

  revalidatePath("/admin/binge");
  redirect("/admin/binge");
}

export async function deleteBinge(id: string) {
  try {
    await prisma.bingeWatch.delete({
      where: {
        id,
      },
    });
  } catch (e) {
    throw new Error("Failed to delete binge");
  }

  revalidatePath("/admin/binge");
  redirect("/admin/binge");
}
