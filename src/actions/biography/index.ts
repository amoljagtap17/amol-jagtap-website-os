"use server";

import { prisma } from "@/services/prisma";

export async function getBiographyInfo() {
  const biographyInfo = await prisma.biography.findMany({
    select: {
      intro: true,
      summary: true,
      closing: true,
    },
  });

  return biographyInfo[0];
}
