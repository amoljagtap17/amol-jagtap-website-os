import { Favorite } from "@prisma/client";
import { ItemNumber } from "./ItemNumber";

interface IListContentProps {
  favorites: Array<Pick<Favorite, "id" | "value">>;
}

export function ListContent({ favorites }: IListContentProps) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {favorites.map((favorite, index) => (
        <li
          className="text-current flex justify-start items-center relative py-2"
          key={favorite.id}
        >
          <ItemNumber number={index + 1} />
          <p className="ml-16 text-base">{favorite.value}</p>
        </li>
      ))}
    </ul>
  );
}
