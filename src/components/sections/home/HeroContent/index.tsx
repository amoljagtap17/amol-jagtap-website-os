import { HeroContentDescription } from "./HeroContentDescription";
import { HeroContentName } from "./HeroContentName";
import { HeroContentSubTitle } from "./HeroContentSubTitle";
import { HeroContentTitle } from "./HeroContentTitle";

interface IHeroContentProps {
  firstName: string;
  lastName: string;
  title: string;
  description: string;
}

export function HeroContent({
  firstName,
  lastName,
  title,
  description,
}: IHeroContentProps) {
  return (
    <div className="text-center flex flex-col justify-end md:justify-center items-center">
      <HeroContentTitle />
      <HeroContentName firstName={firstName} lastName={lastName} />
      <HeroContentSubTitle title={title} />
      <HeroContentDescription description={description} />
    </div>
  );
}
