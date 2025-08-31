import { sleep } from "k6";

import { visitDetailPageRequest } from "./requests/visit-detail-page.request.ts";
import { visitAndScrollListPageRequest } from "./requests/visit-and-scroll-list-page.request.ts";

export function visitDetailPageScenario(): void {
  const { randomId } = visitAndScrollListPageRequest();

  visitDetailPageRequest({ id: randomId });
  sleep(2);
}
