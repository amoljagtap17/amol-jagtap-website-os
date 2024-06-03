import { getFavorites } from "@/actions/favorites";
import { Accordion } from "@/components/ui/accordion";
import { FavoritesAccordionItem } from "../FavoritesAccordionItem";

export async function FavoritesAccordion() {
  const favorites = await getFavorites();

  return (
    <Accordion type="single" collapsible className="w-full">
      {favorites.map((favorite) => (
        <FavoritesAccordionItem key={favorite.id} favorite={favorite} />
      ))}
    </Accordion>
  );
}
