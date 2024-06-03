import { Skill } from "@prisma/client";

interface IPrimarySkillProps extends Pick<Skill, "name" | "percentage"> {}

export function PrimarySkill({ name, percentage }: IPrimarySkillProps) {
  return (
    <div className="border-current border-4 p-2 font-extrabold tracking-widest">
      <div
        className="bg-dark-yellow p-2 flex justify-between"
        style={{ width: `${percentage}%` }}
      >
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
    </div>
  );
}
