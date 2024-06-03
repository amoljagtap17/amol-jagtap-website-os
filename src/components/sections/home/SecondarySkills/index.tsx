import { Heading, SecondarySkill } from "@/components/lib";
import { Skill } from "@prisma/client";

interface ISecondarySkillsProps {
  data: Pick<Skill, "id" | "name">[];
}

export function SecondarySkills({ data }: ISecondarySkillsProps) {
  return (
    <section className="container my-6">
      <Heading text="Secondary Skills" />
      <div className="grid lg:grid-cols-2 gap-4">
        {data.map(({ id, name }) => (
          <SecondarySkill key={id} name={name} />
        ))}
      </div>
    </section>
  );
}
