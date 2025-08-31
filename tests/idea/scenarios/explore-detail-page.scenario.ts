import { sleep } from "k6";

import { addFavoriteRequest } from "@tests/idea/requests/add-favorite.request.ts";
import { addLikeRequest } from "@tests/idea/requests/add-like.request.ts";
import { removeFavoriteRequest } from "@tests/idea/requests/remove-favorite.request.ts";
import { removeLikeRequest } from "@tests/idea/requests/remove-like.request.ts";
import { visitAndScrollListPageRequest } from "@tests/idea/requests/visit-and-scroll-list-page.request.ts";
import { visitDetailPageRequest } from "@tests/idea/requests/visit-detail-page.request.ts";

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
