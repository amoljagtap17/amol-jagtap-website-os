import { Heading } from "@/components/lib";
import { FavoritesAccordion } from "@/components/sections";

export default function BingePage() {
  return (
    <div className="container py-10">
      <Heading text="My Favorites" />
      <FavoritesAccordion />
    </div>
  );
}
