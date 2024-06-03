"use server";

import { prisma } from "@/services/prisma";
import { SkillCategory } from "@prisma/client";

export async function getSkills() {
  const skills = await prisma.skill.findMany({
    select: {
      id: true,
      name: true,
      category: true,
      percentage: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  const primarySkills = skills.filter(
    (skill) => skill.category === SkillCategory.PRIMARY
  );

  const secondarySkills = skills.filter(
    (skill) => skill.category === SkillCategory.SECONDARY
  );

  return { primary: primarySkills, secondary: secondarySkills };
}

export async function getAllSkills() {
  const skills = await prisma.skill.findMany({
    select: {
      id: true,
      name: true,
      category: true,
      percentage: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  return skills;
}
