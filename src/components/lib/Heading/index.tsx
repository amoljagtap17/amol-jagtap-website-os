interface IHeadingProps {
  text: string;
}

export function Heading({ text }: IHeadingProps) {
  return (
    <div className="flex justify-center">
      <div className="font-serif font-extrabold text-4xl lg:text-6xl tracking-wide relative after:absolute after:h-1 after:w-1/2 after:bg-current after:-bottom-8 after:translate-x-1/2 after:left-0 mb-14 mt-4">
        {text}
      </div>
    </div>
  );
}
