import { Heading, PrimarySkill } from "@/components/lib";
import { Skill } from "@prisma/client";

interface IPrimarySkillsProps {
  data: Pick<Skill, "id" | "name" | "percentage">[];
}

export function PrimarySkills({ data }: IPrimarySkillsProps) {
  return (
    <section className="container my-6">
      <Heading text="Primary Skills" />
      <div className="grid lg:grid-cols-2 gap-4">
        {data.map(({ id, name, percentage }) => (
          <PrimarySkill key={id} name={name} percentage={percentage} />
        ))}
      </div>
    </section>
  );
}
