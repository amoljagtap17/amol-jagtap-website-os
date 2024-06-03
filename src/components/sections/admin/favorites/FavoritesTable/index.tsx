import { getAdminFavoritesData } from "@/actions/favorites";
import { DataTable } from "@/components/lib";
import { columns } from "./columns";

export async function FavoritesTable() {
  const favoritesData = await getAdminFavoritesData();

  return (
    <DataTable
      data={favoritesData}
      columns={columns}
      caption="Favorites Data"
      filterInputPlaceholder="Filter favorites by Value..."
      filterInputColumn="value"
    />
  );
}
