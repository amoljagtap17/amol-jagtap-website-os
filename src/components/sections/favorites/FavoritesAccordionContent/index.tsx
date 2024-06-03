import { Favorite } from "@prisma/client";
import { BlockQuoteContent } from "./BlockQuoteContent";
import { ListContent } from "./ListContent";

interface IFavoritesAccordionContentProps {
  name: string;
  favorites: Array<Pick<Favorite, "id" | "value" | "cite">>;
}

export function FavoritesAccordionContent({
  name,
  favorites,
}: IFavoritesAccordionContentProps) {
  return name.toLowerCase() === "Quotes".toLowerCase() ? (
    <BlockQuoteContent favorites={favorites} />
  ) : (
    <ListContent favorites={favorites} />
  );
}
