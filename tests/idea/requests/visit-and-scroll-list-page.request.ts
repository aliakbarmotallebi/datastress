import { sleep } from "k6";

import { getIdeasRequest } from "./get-ideas.request.ts";

export function visitAndScrollListPageRequest(): {
  randomId: number;
} {
  const { randomId, lastId } = getIdeasRequest();
  sleep(2);

  let scrollCount = 0;
  let scrollLastId = lastId;
  do {
    const result = getIdeasRequest({ lastId: scrollLastId });
    scrollLastId = result.lastId;
    sleep(2);

    scrollCount++;
  } while (!!scrollLastId && scrollCount < 3);

  return { randomId };
}
