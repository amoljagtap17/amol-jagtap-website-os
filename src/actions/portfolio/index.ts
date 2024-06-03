"use server";

import { prisma } from "@/services/prisma";

export async function getPortfolioInfo() {
  const portfolioInfo = await prisma.portfolio.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      image: true,
      content: true,
      previewUrl: true,
    },
  });

  return portfolioInfo;
}
