import { addViewRequest } from "tests/idea/requests/add-view.request.ts";
import { getFavoriteRequest } from "tests/idea/requests/get-favorite.request.ts";
import { getLikeRequest } from "tests/idea/requests/get-like.request.ts";

type Params = {
  id: number;
};

export function visitDetailPageRequest({ id }: Params): void {
  getLikeRequest({ id });
  getFavoriteRequest({ id });
  addViewRequest({ id });
}
