import { getAllSkills } from "@/actions/skills";
import { DataTable } from "@/components/lib";
import { Skill } from "@prisma/client";
import { columns } from "./columns";

export async function SkillsTable() {
  const skillsData: Omit<Skill, "createdAt" | "updatedAt">[] =
    await getAllSkills();

  return (
    <DataTable
      data={skillsData}
      columns={columns}
      caption="Skills Data"
      filterInputPlaceholder="Filter skills by Name..."
      filterInputColumn="name"
    />
  );
}
