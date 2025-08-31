import { richRequestWithToken } from "@src/utils/scenario.utils.ts";

import { FavoriteType } from "@tests/idea/types/favorite.type.ts";

type Params = {
  id: number;
};

export function addFavoriteRequest({ id }: Params): { id: string } {
  const { body } = richRequestWithToken<{ data: FavoriteType }>(
    "POST",
    `/v1/favorite/favoriteApi/addFavorite/`,
    JSON.stringify({ idea_id: id }),
    { tags: { name: "addFavorite" } },
  );

  return { id: body!.data._id };
}
