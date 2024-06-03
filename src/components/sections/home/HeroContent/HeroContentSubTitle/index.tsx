interface IHeroContentSubTitleProps {
  title: string;
}

export function HeroContentSubTitle({ title }: IHeroContentSubTitleProps) {
  return (
    <h3>
      <span className="uppercase font-extrabold tracking-wide">I am </span>
      <span className="font-serif font-extrabold text-4xl text-dark-green">
        {title}
      </span>
    </h3>
  );
}
