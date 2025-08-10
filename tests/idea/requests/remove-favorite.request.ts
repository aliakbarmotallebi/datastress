import { richRequestWithToken } from "/src/utils/scenario.utils.ts";

type Params = {
  id: string;
};

export function removeFavoriteRequest({ id }: Params): void {
  richRequestWithToken(
    "DELETE",
    `/v1/favorite/favoriteApi/disableFavorite/`,
    JSON.stringify({ id }),
    { tags: { name: "removeFavorite" } },
  );
}
