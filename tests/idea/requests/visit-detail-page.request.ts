import { addViewRequest } from "./requests/add-view.request.ts";
import { getFavoriteRequest } from "./requests/get-favorite.request.ts";
import { getLikeRequest } from "./requests/get-like.request.ts";

type Params = {
  id: number;
};

export function visitDetailPageRequest({ id }: Params): void {
  getLikeRequest({ id });
  getFavoriteRequest({ id });
  addViewRequest({ id });
}
