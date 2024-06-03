import { getSkills } from "@/actions/skills";
import { PrimarySkills, SecondarySkills } from "@/components/sections";

export default async function Skills() {
  const { primary, secondary } = await getSkills();

  return (
    <>
      <PrimarySkills data={primary} />
      <SecondarySkills data={secondary} />
    </>
  );
}
