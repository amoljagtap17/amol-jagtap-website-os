import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Favorite, FavoriteCategory } from "@prisma/client";
import { FavoritesAccordionContent } from "../FavoritesAccordionContent";

interface IFavoritesAccordionItemProps {
  favorite: Pick<FavoriteCategory, "id" | "name" | "description"> & {
    favorites: Array<Pick<Favorite, "id" | "value" | "cite">>;
  };
}

export function FavoritesAccordionItem({
  favorite,
}: IFavoritesAccordionItemProps) {
  const { id, name, favorites } = favorite;

  return (
    <AccordionItem value={id} className="border-b-2 border-current">
      <AccordionTrigger className="hover:no-underline text-lg lg:text-2xl">
        {name}
      </AccordionTrigger>
      <AccordionContent className="pb-10">
        <FavoritesAccordionContent name={name} favorites={favorites} />
      </AccordionContent>
    </AccordionItem>
  );
}
