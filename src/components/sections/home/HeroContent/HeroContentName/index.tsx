import { BoldLetter } from "@/components/lib";

interface IHeroContentNameProps {
  firstName: string;
  lastName: string;
}

export function HeroContentName({
  firstName,
  lastName,
}: IHeroContentNameProps) {
  return (
    <h2 className="my-4">
      {firstName.split("").map((letter, index) => (
        <BoldLetter
          key={`${letter}-${index}`}
          letter={letter}
          backgroundColor="text-dark-green"
        />
      ))}
      <BoldLetter letter="&nbsp;" />
      {lastName.split("").map((letter, index) => (
        <BoldLetter key={`${letter}-${index}`} letter={letter} />
      ))}
    </h2>
  );
}
