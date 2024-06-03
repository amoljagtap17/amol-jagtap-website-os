import { Profile } from "@prisma/client";
import { HeroStatsItem } from "./HeroStatsItem";

interface IHeroStatsProps extends Pick<Profile, "projects" | "experience"> {}

export function HeroStats({ projects, experience }: IHeroStatsProps) {
  return (
    <ul className="text-xs xl:text-base" role="list">
      <HeroStatsItem
        count={experience}
        label="Years of"
        highlightLabel="Experience"
      />
      <HeroStatsItem
        count={projects}
        label="Completed"
        highlightLabel="Projects"
      />
    </ul>
  );
}
