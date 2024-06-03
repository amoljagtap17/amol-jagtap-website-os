interface IHeroContentDescriptionProps {
  description: string;
}

export function HeroContentDescription({
  description,
}: IHeroContentDescriptionProps) {
  return (
    <p className="text-base lg:text-xl mt-6 sm:px-10 lg:px-0">{description}</p>
  );
}
