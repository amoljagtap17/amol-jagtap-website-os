import { HeroStatsItemCountup } from "./HeroStatsItemCountup";

interface IHeroStatsItemProps {
  count: number;
  label: string;
  highlightLabel: string;
}

export function HeroStatsItem({
  count,
  label,
  highlightLabel,
}: IHeroStatsItemProps) {
  return (
    <li className="absolute [&:nth-child(1)]:top-[55%] [&:nth-child(2)]:top-[75%] min-w-40 [&:nth-child(1)]:-left-6 [&:nth-child(1)]:md:-left-8 [&:nth-child(2)]:-right-4 flex items-center justify-center border-4 border-current px-4 py-2 bg-background rounded-full shadow-2xl">
      <HeroStatsItemCountup value={count} />

      <span className="block uppercase w-1/2 text-left">
        {`${label} `}
        <strong className="text-dark-green font-extrabold">
          {highlightLabel}
        </strong>
      </span>
    </li>
  );
}
