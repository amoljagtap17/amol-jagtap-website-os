interface IBoldLetterProps {
  letter: string;
  backgroundColor?: string;
}

export function BoldLetter({ letter, backgroundColor }: IBoldLetterProps) {
  const textColor = backgroundColor ? backgroundColor : "text-white";

  return (
    <span
      className={`text-4xl lg:text-5xl xl:text-7xl uppercase font-extrabold tracking-widest text-shadow-bold ${textColor}`}
    >
      {letter}
    </span>
  );
}
