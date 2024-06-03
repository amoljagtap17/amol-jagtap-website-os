"use server";

import { prisma } from "@/services/prisma";

export async function getFavorites() {
  const favorites = await prisma.favoriteCategory.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      favorites: {
        select: {
          id: true,
          value: true,
          cite: true,
        },
      },
    },
    orderBy: { name: "asc" },
  });

  return favorites;
}

export async function getAdminFavoritesData() {
  const favorites = await prisma.favorite.findMany({
    select: {
      id: true,
      value: true,
      cite: true,
      category: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: { category: { name: "asc" } },
  });

  return favorites;
}
