import { q } from "./request.utils.ts";
import { richRequestWithToken } from "./scenario.utils.ts";

type Params = {
  id: number;
};

export function getFavoriteRequest(params: Params): void {
  richRequestWithToken(
    "GET",
    `/v1/favorite/favoriteApi/getFavorite/${q(params, { type: "idea" })}`,
    undefined,
    { tags: { name: "getFavorite" } },
  );
}
