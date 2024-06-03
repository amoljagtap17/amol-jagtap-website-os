"use server";

import { prisma } from "@/services/prisma";

export async function getProfileInfo() {
  const profileInfo = await prisma.profile.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      title: true,
      description: true,
      image: true,
      experience: true,
      projects: true,
      linkedinUrl: true,
      githubUrl: true,
    },
  });

  return profileInfo[0];
}
