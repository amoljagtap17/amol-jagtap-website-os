import { Favorite } from "@prisma/client";
import { ItemNumber } from "./ItemNumber";

interface IBlockQuoteContentProps {
  favorites: Array<Pick<Favorite, "id" | "value" | "cite">>;
}

export function BlockQuoteContent({ favorites }: IBlockQuoteContentProps) {
  return (
    <ul>
      {favorites.map((favorite, index) => (
        <li className="text-current" key={favorite.id}>
          <ItemNumber number={index + 1} />
          <blockquote className="mt-6 ml-16 border-l-4 border-current pl-6 italic">
            <p className="text-base mb-2">{favorite.value}</p>
            <cite> - {favorite.cite}</cite>
          </blockquote>
        </li>
      ))}
    </ul>
  );
}
