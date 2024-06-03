interface IItemNumberProps {
  number: number;
}

export function ItemNumber({ number }: IItemNumberProps) {
  return (
    <div className="w-8 h-8 absolute rounded-full border-2 border-current flex justify-center items-center shadow-disk after:content-[''] after:absolute after:w-5 after:h-[2px] after:mt-[-1px] after:left-full after:top-1/2 after:bg-current">
      {number}
    </div>
  );
}
