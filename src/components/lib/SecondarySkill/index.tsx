import { Skill } from "@prisma/client";

interface ISecondarySkillProps extends Pick<Skill, "name"> {}

export function SecondarySkill({ name }: ISecondarySkillProps) {
  return (
    <div className="border-current border-4 p-2 font-extrabold tracking-widest bg-dark-yellow text-center">
      {name}
    </div>
  );
}
