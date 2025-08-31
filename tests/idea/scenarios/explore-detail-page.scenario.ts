import { sleep } from "k6";

import { addFavoriteRequest } from "./requests/add-favorite.request.ts";
import { addLikeRequest } from "./requests/add-like.request.ts";
import { removeFavoriteRequest } from "./requests/remove-favorite.request.ts";
import { removeLikeRequest } from "./requests/remove-like.request.ts";
import { visitAndScrollListPageRequest } from "./requests/visit-and-scroll-list-page.request.ts";
import { visitDetailPageRequest } from "./requests/visit-detail-page.request.ts";

export function exploreDetailPageScenario(): void {
  const { randomId } = visitAndScrollListPageRequest();

  visitDetailPageRequest({ id: randomId });
  sleep(2);

  const { id: favoriteId } = addFavoriteRequest({ id: randomId });
  sleep(1);
  removeFavoriteRequest({ id: favoriteId });
  sleep(1);

  const { id: likeId } = addLikeRequest({ id: randomId });
  sleep(1);
  removeLikeRequest({ id: likeId });
  sleep(1);
}
