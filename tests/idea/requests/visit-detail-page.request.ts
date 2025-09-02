import { addViewRequest } from "./add-view.request.ts";
import { getFavoriteRequest } from "./get-favorite.request.ts";
import { getLikeRequest } from "./get-like.request.ts";

type Params = {
  id: number;
};

export function visitDetailPageRequest({ id }: Params): void {
  getLikeRequest({ id });
  getFavoriteRequest({ id });
  addViewRequest({ id });
}
